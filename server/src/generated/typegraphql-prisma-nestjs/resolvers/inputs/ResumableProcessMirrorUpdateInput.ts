import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumResumableProcessTypeFieldUpdateOperationsInput } from "../inputs/EnumResumableProcessTypeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LogRecordCreateInput } from "../inputs/LogRecordCreateInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput } from "../inputs/ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput";
import { ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput } from "../inputs/ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput";

@InputType("ResumableProcessMirrorUpdateInput", {})
export class ResumableProcessMirrorUpdateInput {
  @Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  parentProcessStep?: NullableIntFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(_type => EnumResumableProcessTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumResumableProcessTypeFieldUpdateOperationsInput | undefined;

  @Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatusFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  currentStep?: IntFieldUpdateOperationsInput | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  props?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  state?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  result?: Prisma.InputJsonValue | undefined;

  @Field(_type => [LogRecordCreateInput], {
    nullable: true
  })
  log?: LogRecordCreateInput[] | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deleted?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput, {
    nullable: true
  })
  parentProcess?: ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput | undefined;

  @Field(_type => ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput, {
    nullable: true
  })
  subProcesses?: ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput | undefined;
}
