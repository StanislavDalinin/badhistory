import { LogRecordType, ResumableProcessMirror, Status } from "@prisma/client";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
class ServerProcessManager implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.prisma.resumableProcessMirror.updateMany({
      where: {
        status: Status.pending,
      },
      data: {
        status: Status.failed,
        log: {
          push: {
            type: LogRecordType.warn,
            value: `The server was shut down`,
          },
        },
      },
    });
  }

  private readonly processAbortControllerById: Record<
    ResumableProcessMirror["id"],
    AbortController
  > = {};

  register(id: ResumableProcessMirror["id"], abortController: AbortController) {
    this.processAbortControllerById[id] = abortController;
  }

  unregister(id: ResumableProcessMirror["id"]) {
    delete this.processAbortControllerById[id];
  }

  abortProcess(id: ResumableProcessMirror["id"]) {
    const abortController = this.processAbortControllerById[id];

    if (abortController === undefined) {
      throw new Error(`Process ${id} isn't registered`);
    }

    abortController.abort();
  }
}

export default ServerProcessManager;
