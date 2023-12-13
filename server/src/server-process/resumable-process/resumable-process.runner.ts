import { LogRecordType, Status } from "@prisma/client";
import { createDraft, finishDraft } from "immer";
import { ResumableProcessServiceLoader } from "./resumable-process-service.loader";
import { Injectable } from "@nestjs/common";
import {
  breakLoopReturnableToken,
  ResumableStepType,
  StepReturnableTokenType,
} from "./ResumableProcess";
import {
  ResumableProcessApi,
  ResumableProcessMirror,
} from "./resumable-process.types";
import ServerProcessManager from "../server-process.manager";
import { PrismaService } from "../../prisma.service";
import { Logger } from "../../scraping/bid.cars/search/bid-cars-search-result-page-resumable-scraper-process.service";
import { ErrorObject } from "ajv";

@Injectable()
export class ResumableProcessRunner {
  constructor(
    private readonly resumableProcessServiceLoader: ResumableProcessServiceLoader,
    private readonly serverProcessManager: ServerProcessManager,
    private readonly prisma: PrismaService,
  ) {}

  async run<T extends ResumableProcessMirror>(
    resumableProcess: T,
    abortController: AbortController,
  ): Promise<T["result"]> {
    this.serverProcessManager.register(resumableProcess.id, abortController);

    const resumableProcessService =
      await this.resumableProcessServiceLoader.loadBy(resumableProcess.type);

    const logger: Logger = {
      info: (message: string) => {
        this.prisma.resumableProcessMirror.update({
          where: {
            id: resumableProcess.id,
          },
          data: {
            log: {
              push: {
                type: LogRecordType.info,
                value: message,
              },
            },
          },
        });
      },
      error: (error: any) => {
        this.prisma.resumableProcessMirror.update({
          where: {
            id: resumableProcess.id,
          },
          data: {
            log: {
              push: {
                type: LogRecordType.info,
                value: error.toString(),
              },
            },
          },
        });
      },
    };

    const arg = {
      ...resumableProcess,
      logger,
      signal: abortController.signal,
    };

    const resumableSteps =
      resumableProcessService.initializeResumableSteps(arg);

    let state = resumableProcess.state;
    let currentStep = resumableProcess.currentStep;

    try {
      let result: T["result"];

      outerLoop: while (true) {
        const resumableStep = resumableSteps[currentStep];

        const draft = createDraft(state);

        const resumableProcessApi = this.createResumableProcessApi({
          draft,
          currentStep,
          resumableProcessId: resumableProcess.id,
          signal: abortController.signal,
        });

        switch (resumableStep.type) {
          case ResumableStepType.single: {
            const returnableToken =
              await resumableStep.callback(resumableProcessApi);

            if (
              returnableToken !== undefined &&
              returnableToken.type === StepReturnableTokenType.resolveProcess
            ) {
              result = returnableToken.result;
              break outerLoop;
            }

            if (currentStep === resumableSteps.length - 1) {
              break outerLoop;
            }

            currentStep++;

            break;
          }
          case ResumableStepType.loop: {
            const returnableToken =
              await resumableStep.iterator(resumableProcessApi);

            if (
              returnableToken !== undefined &&
              returnableToken.type === StepReturnableTokenType.resolveProcess
            ) {
              result = returnableToken.result;
              break outerLoop;
            }
            if (returnableToken === breakLoopReturnableToken) {
              if (currentStep === resumableSteps.length - 1) {
                break outerLoop;
              }

              currentStep++;
            }

            break;
          }
          default:
            throw new Error("");
        }

        state = finishDraft(draft);

        await this.prisma.resumableProcessMirror.update({
          where: {
            id: resumableProcess.id,
          },
          data: {
            currentStep,
            state,
          },
        });
      }

      await this.prisma.resumableProcessMirror.update({
        where: {
          id: resumableProcess.id,
        },
        data: {
          status: Status.succeeded,
        },
      });

      return result!;
    } catch (error) {
      if (error["name"] === "AbortError") {
        await this.prisma.resumableProcessMirror.update({
          where: {
            id: resumableProcess.id,
          },
          data: {
            status: Status.aborted,
            log: {
              push: {
                type: LogRecordType.info,
                value: "aborted",
              },
            },
          },
        });

        throw error;
      }

      await this.prisma.resumableProcessMirror.update({
        where: {
          id: resumableProcess.id,
        },
        data: {
          status: Status.failed,
          log: {
            push: {
              type: LogRecordType.warn,
              value: error,
            },
          },
        },
      });

      throw error;
    } finally {
      this.serverProcessManager.unregister(resumableProcess.id);
    }
  }

  private createResumableProcessApi = <T extends ResumableProcessMirror>({
    resumableProcessId,
    currentStep,
    draft,
    signal,
  }: {
    resumableProcessId: T["id"];
    currentStep: T["currentStep"];
    draft: T["state"];
    signal: AbortSignal;
  }): ResumableProcessApi<T> => ({
    state: draft,
    // @ts-ignore
    fork: async ({ key, type, props, initialState }) => {
      let childResumableProcessMirror =
        await this.prisma.resumableProcessMirror.findFirst({
          where: {
            type,
            parentProcessId: resumableProcessId,
            parentProcessStep: currentStep,
            parentProcessStepKey: key,
          },
        });

      if (childResumableProcessMirror === null) {
        childResumableProcessMirror =
          await this.prisma.resumableProcessMirror.create({
            data: {
              parentProcessId: resumableProcessId,
              parentProcessStep: currentStep,
              parentProcessStepKey: key,
              type,
              props,
              status: Status.pending,
              state: initialState,
              result: null,
            },
          });
      }

      if (childResumableProcessMirror.status === Status.succeeded) {
        return childResumableProcessMirror.result as ResumableProcessMirror["result"];
      }

      const abortController = new AbortController();

      const handleAbort = () => {
        abortController.abort();
      };

      signal.addEventListener("abort", handleAbort);

      const result = await this.run(
        childResumableProcessMirror as ResumableProcessMirror,
        abortController,
      );

      signal.removeEventListener("abort", handleAbort);

      await this.prisma.resumableProcessMirror.update({
        where: {
          id: childResumableProcessMirror.id,
        },
        data: {
          result: result,
        },
      });

      return result;
    },
  });
}
