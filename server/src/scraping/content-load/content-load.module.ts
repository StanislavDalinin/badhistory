import { Module } from "@nestjs/common";
import ContentLoadService from "./content-load.interface";
import ChildProcessContentLoadService from "./child-process-content-load.service";
import { SmartproxyContentLoadService } from "./smartproxy-content-load.service";

@Module({
  exports: [ContentLoadService],
  providers: [
    {
      provide: ContentLoadService,
      // useClass: ChildProcessContentLoadService,
      useClass: SmartproxyContentLoadService,
    },
  ],
})
export default class ContentLoadModule {}
