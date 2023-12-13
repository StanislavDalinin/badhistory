import {
  ResumableProcessApi,
  ResumableProcessMirror,
} from "./resumable-process.types";

export enum StepReturnableTokenType {
  resolveProcess,
  breakLoopStep,
}

type StepReturnableToken = {
  type: StepReturnableTokenType;
};

export interface ResolveProcessReturnableToken<T extends ResumableProcessMirror>
  extends StepReturnableToken {
  type: typeof StepReturnableTokenType.resolveProcess;
  result: T["result"];
}

export const createResolveProcessReturnableToken = <
  T extends ResumableProcessMirror,
>(
  result: ResolveProcessReturnableToken<T>["result"],
): ResolveProcessReturnableToken<T> => ({
  type: StepReturnableTokenType.resolveProcess,
  result,
});

type CommonStepResult =
  void | ResolveProcessReturnableToken<ResumableProcessMirror>;

export enum ResumableStepType {
  single,
  loop,
}

type StepResult = CommonStepResult;

export type ResumableSingleStep<T extends ResumableProcessMirror> = {
  type: typeof ResumableStepType.single;
  callback: (
    resumableProcessApi: ResumableProcessApi<T>,
  ) => StepResult | Promise<StepResult>;
};

export type ResumableStepUnion<T extends ResumableProcessMirror> =
  | ResumableSingleStep<T>
  | ResumableLoopStep<T>;

export const step = <T extends ResumableProcessMirror>(
  callback: ResumableSingleStep<T>["callback"],
): ResumableSingleStep<T> => ({
  type: ResumableStepType.single,
  callback,
});

export type ResumableLoopStep<T extends ResumableProcessMirror> = {
  type: typeof ResumableStepType.loop;
  iterator: (
    resumableProcessApi: ResumableProcessApi<T>,
  ) => LoopStepResult | Promise<LoopStepResult>;
};

export const loopStep = <T extends ResumableProcessMirror>(
  iterator: ResumableLoopStep<T>["iterator"],
): ResumableLoopStep<T> => ({
  type: ResumableStepType.loop,
  iterator,
});

export interface BreakLoopStepReturnableToken extends StepReturnableToken {
  type: typeof StepReturnableTokenType.breakLoopStep;
}

type LoopStepResult = CommonStepResult | BreakLoopStepReturnableToken;

export const breakLoopReturnableToken: BreakLoopStepReturnableToken = {
  type: StepReturnableTokenType.breakLoopStep,
};
