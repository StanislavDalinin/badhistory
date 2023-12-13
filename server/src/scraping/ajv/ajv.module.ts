import { Module } from "@nestjs/common";
import { AjvService } from "./ajv.service";

@Module({
  exports: [AjvService],
  providers: [
    {
      provide: AjvService,
      useFactory: () => {
        return new AjvService({ allowUnionTypes: true });
      },
    },
  ],
})
export default class AjvModule {}
