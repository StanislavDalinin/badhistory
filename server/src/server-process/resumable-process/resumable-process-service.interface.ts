import { ResumableStepUnion } from "./ResumableProcess";
import { ResumableProcessMirror } from "./resumable-process.types";

export interface ResumableProcessService<T extends ResumableProcessMirror> {
  initializeResumableSteps(
    params: Pick<T, "id" | "props">,
  ): ResumableStepUnion<T>[];
}
