import { Module } from "@nestjs/common";
import ResumableProcessServiceLoaderModule from "./resumable-process-service-loader.module";
import { ResumableProcessRunner } from "./resumable-process.runner";
import ServerProcessManager from "../server-process.manager";
import { PrismaService } from "../../prisma.service";

@Module({
  exports: [ResumableProcessRunner, ServerProcessManager],
  imports: [ResumableProcessServiceLoaderModule],
  providers: [ResumableProcessRunner, ServerProcessManager, PrismaService],
})
export default class ResumableProcessRunnerModule {}
