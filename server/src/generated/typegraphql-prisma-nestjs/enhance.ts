import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Make: crudResolvers.MakeCrudResolver,
  Model: crudResolvers.ModelCrudResolver,
  Series: crudResolvers.SeriesCrudResolver,
  VehicleType: crudResolvers.VehicleTypeCrudResolver,
  Vehicle: crudResolvers.VehicleCrudResolver,
  Lot: crudResolvers.LotCrudResolver,
  ResumableProcessMirror: crudResolvers.ResumableProcessMirrorCrudResolver
};
const actionResolversMap = {
  Make: {
    aggregateMake: actionResolvers.AggregateMakeResolver,
    createManyMake: actionResolvers.CreateManyMakeResolver,
    createOneMake: actionResolvers.CreateOneMakeResolver,
    deleteManyMake: actionResolvers.DeleteManyMakeResolver,
    deleteOneMake: actionResolvers.DeleteOneMakeResolver,
    findFirstMake: actionResolvers.FindFirstMakeResolver,
    findFirstMakeOrThrow: actionResolvers.FindFirstMakeOrThrowResolver,
    makes: actionResolvers.FindManyMakeResolver,
    make: actionResolvers.FindUniqueMakeResolver,
    getMake: actionResolvers.FindUniqueMakeOrThrowResolver,
    groupByMake: actionResolvers.GroupByMakeResolver,
    updateManyMake: actionResolvers.UpdateManyMakeResolver,
    updateOneMake: actionResolvers.UpdateOneMakeResolver,
    upsertOneMake: actionResolvers.UpsertOneMakeResolver
  },
  Model: {
    aggregateModel: actionResolvers.AggregateModelResolver,
    createManyModel: actionResolvers.CreateManyModelResolver,
    createOneModel: actionResolvers.CreateOneModelResolver,
    deleteManyModel: actionResolvers.DeleteManyModelResolver,
    deleteOneModel: actionResolvers.DeleteOneModelResolver,
    findFirstModel: actionResolvers.FindFirstModelResolver,
    findFirstModelOrThrow: actionResolvers.FindFirstModelOrThrowResolver,
    models: actionResolvers.FindManyModelResolver,
    model: actionResolvers.FindUniqueModelResolver,
    getModel: actionResolvers.FindUniqueModelOrThrowResolver,
    groupByModel: actionResolvers.GroupByModelResolver,
    updateManyModel: actionResolvers.UpdateManyModelResolver,
    updateOneModel: actionResolvers.UpdateOneModelResolver,
    upsertOneModel: actionResolvers.UpsertOneModelResolver
  },
  Series: {
    aggregateSeries: actionResolvers.AggregateSeriesResolver,
    createManySeries: actionResolvers.CreateManySeriesResolver,
    createOneSeries: actionResolvers.CreateOneSeriesResolver,
    deleteManySeries: actionResolvers.DeleteManySeriesResolver,
    deleteOneSeries: actionResolvers.DeleteOneSeriesResolver,
    findFirstSeries: actionResolvers.FindFirstSeriesResolver,
    findFirstSeriesOrThrow: actionResolvers.FindFirstSeriesOrThrowResolver,
    findManySeries: actionResolvers.FindManySeriesResolver,
    findUniqueSeries: actionResolvers.FindUniqueSeriesResolver,
    findUniqueSeriesOrThrow: actionResolvers.FindUniqueSeriesOrThrowResolver,
    groupBySeries: actionResolvers.GroupBySeriesResolver,
    updateManySeries: actionResolvers.UpdateManySeriesResolver,
    updateOneSeries: actionResolvers.UpdateOneSeriesResolver,
    upsertOneSeries: actionResolvers.UpsertOneSeriesResolver
  },
  VehicleType: {
    aggregateVehicleType: actionResolvers.AggregateVehicleTypeResolver,
    createManyVehicleType: actionResolvers.CreateManyVehicleTypeResolver,
    createOneVehicleType: actionResolvers.CreateOneVehicleTypeResolver,
    deleteManyVehicleType: actionResolvers.DeleteManyVehicleTypeResolver,
    deleteOneVehicleType: actionResolvers.DeleteOneVehicleTypeResolver,
    findFirstVehicleType: actionResolvers.FindFirstVehicleTypeResolver,
    findFirstVehicleTypeOrThrow: actionResolvers.FindFirstVehicleTypeOrThrowResolver,
    vehicleTypes: actionResolvers.FindManyVehicleTypeResolver,
    vehicleType: actionResolvers.FindUniqueVehicleTypeResolver,
    getVehicleType: actionResolvers.FindUniqueVehicleTypeOrThrowResolver,
    groupByVehicleType: actionResolvers.GroupByVehicleTypeResolver,
    updateManyVehicleType: actionResolvers.UpdateManyVehicleTypeResolver,
    updateOneVehicleType: actionResolvers.UpdateOneVehicleTypeResolver,
    upsertOneVehicleType: actionResolvers.UpsertOneVehicleTypeResolver
  },
  Vehicle: {
    aggregateVehicle: actionResolvers.AggregateVehicleResolver,
    createManyVehicle: actionResolvers.CreateManyVehicleResolver,
    createOneVehicle: actionResolvers.CreateOneVehicleResolver,
    deleteManyVehicle: actionResolvers.DeleteManyVehicleResolver,
    deleteOneVehicle: actionResolvers.DeleteOneVehicleResolver,
    findFirstVehicle: actionResolvers.FindFirstVehicleResolver,
    findFirstVehicleOrThrow: actionResolvers.FindFirstVehicleOrThrowResolver,
    vehicles: actionResolvers.FindManyVehicleResolver,
    vehicle: actionResolvers.FindUniqueVehicleResolver,
    getVehicle: actionResolvers.FindUniqueVehicleOrThrowResolver,
    groupByVehicle: actionResolvers.GroupByVehicleResolver,
    updateManyVehicle: actionResolvers.UpdateManyVehicleResolver,
    updateOneVehicle: actionResolvers.UpdateOneVehicleResolver,
    upsertOneVehicle: actionResolvers.UpsertOneVehicleResolver
  },
  Lot: {
    aggregateLot: actionResolvers.AggregateLotResolver,
    createManyLot: actionResolvers.CreateManyLotResolver,
    createOneLot: actionResolvers.CreateOneLotResolver,
    deleteManyLot: actionResolvers.DeleteManyLotResolver,
    deleteOneLot: actionResolvers.DeleteOneLotResolver,
    findFirstLot: actionResolvers.FindFirstLotResolver,
    findFirstLotOrThrow: actionResolvers.FindFirstLotOrThrowResolver,
    lots: actionResolvers.FindManyLotResolver,
    lot: actionResolvers.FindUniqueLotResolver,
    getLot: actionResolvers.FindUniqueLotOrThrowResolver,
    groupByLot: actionResolvers.GroupByLotResolver,
    updateManyLot: actionResolvers.UpdateManyLotResolver,
    updateOneLot: actionResolvers.UpdateOneLotResolver,
    upsertOneLot: actionResolvers.UpsertOneLotResolver
  },
  ResumableProcessMirror: {
    aggregateResumableProcessMirror: actionResolvers.AggregateResumableProcessMirrorResolver,
    createManyResumableProcessMirror: actionResolvers.CreateManyResumableProcessMirrorResolver,
    createOneResumableProcessMirror: actionResolvers.CreateOneResumableProcessMirrorResolver,
    deleteManyResumableProcessMirror: actionResolvers.DeleteManyResumableProcessMirrorResolver,
    deleteOneResumableProcessMirror: actionResolvers.DeleteOneResumableProcessMirrorResolver,
    findFirstResumableProcessMirror: actionResolvers.FindFirstResumableProcessMirrorResolver,
    findFirstResumableProcessMirrorOrThrow: actionResolvers.FindFirstResumableProcessMirrorOrThrowResolver,
    resumableProcessMirrors: actionResolvers.FindManyResumableProcessMirrorResolver,
    resumableProcessMirror: actionResolvers.FindUniqueResumableProcessMirrorResolver,
    getResumableProcessMirror: actionResolvers.FindUniqueResumableProcessMirrorOrThrowResolver,
    groupByResumableProcessMirror: actionResolvers.GroupByResumableProcessMirrorResolver,
    updateManyResumableProcessMirror: actionResolvers.UpdateManyResumableProcessMirrorResolver,
    updateOneResumableProcessMirror: actionResolvers.UpdateOneResumableProcessMirrorResolver,
    upsertOneResumableProcessMirror: actionResolvers.UpsertOneResumableProcessMirrorResolver
  }
};
const crudResolversInfo = {
  Make: ["aggregateMake", "createManyMake", "createOneMake", "deleteManyMake", "deleteOneMake", "findFirstMake", "findFirstMakeOrThrow", "makes", "make", "getMake", "groupByMake", "updateManyMake", "updateOneMake", "upsertOneMake"],
  Model: ["aggregateModel", "createManyModel", "createOneModel", "deleteManyModel", "deleteOneModel", "findFirstModel", "findFirstModelOrThrow", "models", "model", "getModel", "groupByModel", "updateManyModel", "updateOneModel", "upsertOneModel"],
  Series: ["aggregateSeries", "createManySeries", "createOneSeries", "deleteManySeries", "deleteOneSeries", "findFirstSeries", "findFirstSeriesOrThrow", "findManySeries", "findUniqueSeries", "findUniqueSeriesOrThrow", "groupBySeries", "updateManySeries", "updateOneSeries", "upsertOneSeries"],
  VehicleType: ["aggregateVehicleType", "createManyVehicleType", "createOneVehicleType", "deleteManyVehicleType", "deleteOneVehicleType", "findFirstVehicleType", "findFirstVehicleTypeOrThrow", "vehicleTypes", "vehicleType", "getVehicleType", "groupByVehicleType", "updateManyVehicleType", "updateOneVehicleType", "upsertOneVehicleType"],
  Vehicle: ["aggregateVehicle", "createManyVehicle", "createOneVehicle", "deleteManyVehicle", "deleteOneVehicle", "findFirstVehicle", "findFirstVehicleOrThrow", "vehicles", "vehicle", "getVehicle", "groupByVehicle", "updateManyVehicle", "updateOneVehicle", "upsertOneVehicle"],
  Lot: ["aggregateLot", "createManyLot", "createOneLot", "deleteManyLot", "deleteOneLot", "findFirstLot", "findFirstLotOrThrow", "lots", "lot", "getLot", "groupByLot", "updateManyLot", "updateOneLot", "upsertOneLot"],
  ResumableProcessMirror: ["aggregateResumableProcessMirror", "createManyResumableProcessMirror", "createOneResumableProcessMirror", "deleteManyResumableProcessMirror", "deleteOneResumableProcessMirror", "findFirstResumableProcessMirror", "findFirstResumableProcessMirrorOrThrow", "resumableProcessMirrors", "resumableProcessMirror", "getResumableProcessMirror", "groupByResumableProcessMirror", "updateManyResumableProcessMirror", "updateOneResumableProcessMirror", "upsertOneResumableProcessMirror"]
};
const argsInfo = {
  AggregateMakeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMakeArgs: ["data"],
  CreateOneMakeArgs: ["data"],
  DeleteManyMakeArgs: ["where"],
  DeleteOneMakeArgs: ["where"],
  FindFirstMakeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMakeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMakeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMakeArgs: ["where"],
  FindUniqueMakeOrThrowArgs: ["where"],
  GroupByMakeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMakeArgs: ["data", "where"],
  UpdateOneMakeArgs: ["data", "where"],
  UpsertOneMakeArgs: ["where", "create", "update"],
  AggregateModelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyModelArgs: ["data"],
  CreateOneModelArgs: ["data"],
  DeleteManyModelArgs: ["where"],
  DeleteOneModelArgs: ["where"],
  FindFirstModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstModelOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueModelArgs: ["where"],
  FindUniqueModelOrThrowArgs: ["where"],
  GroupByModelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyModelArgs: ["data", "where"],
  UpdateOneModelArgs: ["data", "where"],
  UpsertOneModelArgs: ["where", "create", "update"],
  AggregateSeriesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySeriesArgs: ["data"],
  CreateOneSeriesArgs: ["data"],
  DeleteManySeriesArgs: ["where"],
  DeleteOneSeriesArgs: ["where"],
  FindFirstSeriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSeriesOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySeriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSeriesArgs: ["where"],
  FindUniqueSeriesOrThrowArgs: ["where"],
  GroupBySeriesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySeriesArgs: ["data", "where"],
  UpdateOneSeriesArgs: ["data", "where"],
  UpsertOneSeriesArgs: ["where", "create", "update"],
  AggregateVehicleTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVehicleTypeArgs: ["data"],
  CreateOneVehicleTypeArgs: ["data"],
  DeleteManyVehicleTypeArgs: ["where"],
  DeleteOneVehicleTypeArgs: ["where"],
  FindFirstVehicleTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVehicleTypeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVehicleTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVehicleTypeArgs: ["where"],
  FindUniqueVehicleTypeOrThrowArgs: ["where"],
  GroupByVehicleTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVehicleTypeArgs: ["data", "where"],
  UpdateOneVehicleTypeArgs: ["data", "where"],
  UpsertOneVehicleTypeArgs: ["where", "create", "update"],
  AggregateVehicleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVehicleArgs: ["data"],
  CreateOneVehicleArgs: ["data"],
  DeleteManyVehicleArgs: ["where"],
  DeleteOneVehicleArgs: ["where"],
  FindFirstVehicleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVehicleOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVehicleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVehicleArgs: ["where"],
  FindUniqueVehicleOrThrowArgs: ["where"],
  GroupByVehicleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVehicleArgs: ["data", "where"],
  UpdateOneVehicleArgs: ["data", "where"],
  UpsertOneVehicleArgs: ["where", "create", "update"],
  AggregateLotArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyLotArgs: ["data"],
  CreateOneLotArgs: ["data"],
  DeleteManyLotArgs: ["where"],
  DeleteOneLotArgs: ["where"],
  FindFirstLotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstLotOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueLotArgs: ["where"],
  FindUniqueLotOrThrowArgs: ["where"],
  GroupByLotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyLotArgs: ["data", "where"],
  UpdateOneLotArgs: ["data", "where"],
  UpsertOneLotArgs: ["where", "create", "update"],
  AggregateResumableProcessMirrorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyResumableProcessMirrorArgs: ["data"],
  CreateOneResumableProcessMirrorArgs: ["data"],
  DeleteManyResumableProcessMirrorArgs: ["where"],
  DeleteOneResumableProcessMirrorArgs: ["where"],
  FindFirstResumableProcessMirrorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstResumableProcessMirrorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyResumableProcessMirrorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueResumableProcessMirrorArgs: ["where"],
  FindUniqueResumableProcessMirrorOrThrowArgs: ["where"],
  GroupByResumableProcessMirrorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyResumableProcessMirrorArgs: ["data", "where"],
  UpdateOneResumableProcessMirrorArgs: ["data", "where"],
  UpsertOneResumableProcessMirrorArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Make: relationResolvers.MakeRelationsResolver,
  Model: relationResolvers.ModelRelationsResolver,
  Series: relationResolvers.SeriesRelationsResolver,
  VehicleType: relationResolvers.VehicleTypeRelationsResolver,
  Vehicle: relationResolvers.VehicleRelationsResolver,
  Lot: relationResolvers.LotRelationsResolver,
  ResumableProcessMirror: relationResolvers.ResumableProcessMirrorRelationsResolver
};
const relationResolversInfo = {
  Make: ["models"],
  Model: ["make", "vehicles", "serieses"],
  Series: ["model", "vehicles"],
  VehicleType: ["Vehicle"],
  Vehicle: ["model", "series", "vehicleType", "lots"],
  Lot: ["vehicle"],
  ResumableProcessMirror: ["parentProcess", "subProcesses"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Make: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  Model: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  Series: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  VehicleType: ["id", "name", "createdAt", "updatedAt", "deleted"],
  Vehicle: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  Lot: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "unprocessed"],
  ResumableProcessMirror: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted"],
  VehicleUnprocessed: ["name"],
  LotUnprocessed: ["leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  LogRecord: ["type", "value"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMake: ["_count", "_min", "_max"],
  MakeGroupBy: ["id", "name", "createdAt", "updatedAt", "deletedAt", "_count", "_min", "_max"],
  AggregateModel: ["_count", "_min", "_max"],
  ModelGroupBy: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted", "_count", "_min", "_max"],
  AggregateSeries: ["_count", "_avg", "_sum", "_min", "_max"],
  SeriesGroupBy: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateVehicleType: ["_count", "_min", "_max"],
  VehicleTypeGroupBy: ["id", "name", "createdAt", "updatedAt", "deleted", "_count", "_min", "_max"],
  AggregateVehicle: ["_count", "_avg", "_sum", "_min", "_max"],
  VehicleGroupBy: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateLot: ["_count", "_avg", "_sum", "_min", "_max"],
  LotGroupBy: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateResumableProcessMirror: ["_count", "_avg", "_sum", "_min", "_max"],
  ResumableProcessMirrorGroupBy: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  MakeCount: ["models"],
  MakeCountAggregate: ["id", "name", "createdAt", "updatedAt", "deletedAt", "_all"],
  MakeMinAggregate: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  MakeMaxAggregate: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  ModelCount: ["vehicles", "serieses"],
  ModelCountAggregate: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted", "_all"],
  ModelMinAggregate: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  ModelMaxAggregate: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  SeriesCount: ["vehicles"],
  SeriesCountAggregate: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "_all"],
  SeriesAvgAggregate: ["minYear", "maxYear"],
  SeriesSumAggregate: ["minYear", "maxYear"],
  SeriesMinAggregate: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  SeriesMaxAggregate: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  VehicleTypeCount: ["Vehicle"],
  VehicleTypeCountAggregate: ["id", "name", "createdAt", "updatedAt", "deleted", "_all"],
  VehicleTypeMinAggregate: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleTypeMaxAggregate: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleCount: ["lots"],
  VehicleCountAggregate: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "_all"],
  VehicleAvgAggregate: ["year"],
  VehicleSumAggregate: ["year"],
  VehicleMinAggregate: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  VehicleMaxAggregate: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  LotCountAggregate: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "_all"],
  LotAvgAggregate: ["lotNumber", "lastPreBid", "finalBid", "odometer", "buyNowPrice", "cylinders"],
  LotSumAggregate: ["lotNumber", "lastPreBid", "finalBid", "odometer", "buyNowPrice", "cylinders"],
  LotMinAggregate: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  LotMaxAggregate: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorCount: ["subProcesses"],
  ResumableProcessMirrorCountAggregate: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted", "_all"],
  ResumableProcessMirrorAvgAggregate: ["parentProcessStep", "currentStep"],
  ResumableProcessMirrorSumAggregate: ["parentProcessStep", "currentStep"],
  ResumableProcessMirrorMinAggregate: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorMaxAggregate: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "createdAt", "updatedAt", "deleted"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MakeWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "deletedAt", "models"],
  MakeOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "deletedAt", "models"],
  MakeWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "deletedAt", "models"],
  MakeOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "deletedAt", "_count", "_max", "_min"],
  MakeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "deletedAt"],
  ModelWhereInput: ["AND", "OR", "NOT", "id", "makeId", "name", "createdAt", "updatedAt", "deleted", "make", "vehicles", "serieses"],
  ModelOrderByWithRelationInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted", "make", "vehicles", "serieses"],
  ModelWhereUniqueInput: ["id", "makeId_name", "AND", "OR", "NOT", "makeId", "name", "createdAt", "updatedAt", "deleted", "make", "vehicles", "serieses"],
  ModelOrderByWithAggregationInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted", "_count", "_max", "_min"],
  ModelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  SeriesWhereInput: ["AND", "OR", "NOT", "id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model", "vehicles"],
  SeriesOrderByWithRelationInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model", "vehicles"],
  SeriesWhereUniqueInput: ["id", "modelId_name", "AND", "OR", "NOT", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model", "vehicles"],
  SeriesOrderByWithAggregationInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_max", "_min", "_sum"],
  SeriesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  VehicleTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "deleted", "Vehicle"],
  VehicleTypeOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "deleted", "Vehicle"],
  VehicleTypeWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "deleted", "Vehicle"],
  VehicleTypeOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "deleted", "_count", "_max", "_min"],
  VehicleTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleWhereInput: ["AND", "OR", "NOT", "id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType", "lots"],
  VehicleOrderByWithRelationInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType", "lots"],
  VehicleWhereUniqueInput: ["id", "AND", "OR", "NOT", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType", "lots"],
  VehicleOrderByWithAggregationInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_max", "_min", "_sum"],
  VehicleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  LotWhereInput: ["AND", "OR", "NOT", "id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "unprocessed", "vehicle"],
  LotOrderByWithRelationInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "unprocessed", "vehicle"],
  LotWhereUniqueInput: ["id", "auction_lotNumber", "AND", "OR", "NOT", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "unprocessed", "vehicle"],
  LotOrderByWithAggregationInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_max", "_min", "_sum"],
  LotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorWhereInput: ["AND", "OR", "NOT", "id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess", "subProcesses"],
  ResumableProcessMirrorOrderByWithRelationInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess", "subProcesses"],
  ResumableProcessMirrorWhereUniqueInput: ["id", "AND", "OR", "NOT", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess", "subProcesses"],
  ResumableProcessMirrorOrderByWithAggregationInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted", "_count", "_avg", "_max", "_min", "_sum"],
  ResumableProcessMirrorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted"],
  MakeCreateInput: ["id", "name", "createdAt", "updatedAt", "deletedAt", "models"],
  MakeUpdateInput: ["name", "createdAt", "updatedAt", "deletedAt", "models"],
  MakeCreateManyInput: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  MakeUpdateManyMutationInput: ["name", "createdAt", "updatedAt", "deletedAt"],
  ModelCreateInput: ["id", "name", "createdAt", "updatedAt", "deleted", "make", "vehicles", "serieses"],
  ModelUpdateInput: ["name", "createdAt", "updatedAt", "deleted", "make", "vehicles", "serieses"],
  ModelCreateManyInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  ModelUpdateManyMutationInput: ["name", "createdAt", "updatedAt", "deleted"],
  SeriesCreateInput: ["id", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model", "vehicles"],
  SeriesUpdateInput: ["name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model", "vehicles"],
  SeriesCreateManyInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  SeriesUpdateManyMutationInput: ["name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  VehicleTypeCreateInput: ["id", "name", "createdAt", "updatedAt", "deleted", "Vehicle"],
  VehicleTypeUpdateInput: ["name", "createdAt", "updatedAt", "deleted", "Vehicle"],
  VehicleTypeCreateManyInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleTypeUpdateManyMutationInput: ["name", "createdAt", "updatedAt", "deleted"],
  VehicleCreateInput: ["id", "vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType", "lots"],
  VehicleUpdateInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType", "lots"],
  VehicleCreateManyInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  VehicleUpdateManyMutationInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  LotCreateInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed", "vehicle"],
  LotUpdateInput: ["auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed", "vehicle"],
  LotCreateManyInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted", "unprocessed"],
  LotUpdateManyMutationInput: ["auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed"],
  ResumableProcessMirrorCreateInput: ["id", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess", "subProcesses"],
  ResumableProcessMirrorUpdateInput: ["parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess", "subProcesses"],
  ResumableProcessMirrorCreateManyInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorUpdateManyMutationInput: ["parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  ModelListRelationFilter: ["every", "some", "none"],
  ModelOrderByRelationAggregateInput: ["_count"],
  MakeCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  MakeMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  MakeMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  MakeRelationFilter: ["is", "isNot"],
  VehicleListRelationFilter: ["every", "some", "none"],
  SeriesListRelationFilter: ["every", "some", "none"],
  VehicleOrderByRelationAggregateInput: ["_count"],
  SeriesOrderByRelationAggregateInput: ["_count"],
  ModelMakeIdNameCompoundUniqueInput: ["makeId", "name"],
  ModelCountOrderByAggregateInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  ModelMaxOrderByAggregateInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  ModelMinOrderByAggregateInput: ["id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ModelRelationFilter: ["is", "isNot"],
  SeriesModelIdNameCompoundUniqueInput: ["modelId", "name"],
  SeriesCountOrderByAggregateInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  SeriesAvgOrderByAggregateInput: ["minYear", "maxYear"],
  SeriesMaxOrderByAggregateInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  SeriesMinOrderByAggregateInput: ["id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  SeriesSumOrderByAggregateInput: ["minYear", "maxYear"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  VehicleTypeCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleTypeMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleTypeMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  VehicleUnprocessedCompositeFilter: ["equals", "is", "isNot"],
  VehicleUnprocessedObjectEqualityInput: ["name"],
  SeriesNullableRelationFilter: ["is", "isNot"],
  VehicleTypeNullableRelationFilter: ["is", "isNot"],
  LotListRelationFilter: ["every", "some", "none"],
  VehicleUnprocessedOrderByInput: ["name"],
  LotOrderByRelationAggregateInput: ["_count"],
  VehicleCountOrderByAggregateInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  VehicleAvgOrderByAggregateInput: ["year"],
  VehicleMaxOrderByAggregateInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  VehicleMinOrderByAggregateInput: ["id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  VehicleSumOrderByAggregateInput: ["year"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  EnumAuctionFilter: ["equals", "in", "notIn", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  LotUnprocessedCompositeFilter: ["equals", "is", "isNot"],
  LotUnprocessedObjectEqualityInput: ["leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  VehicleRelationFilter: ["is", "isNot"],
  LotUnprocessedOrderByInput: ["leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  LotAuctionLotNumberCompoundUniqueInput: ["auction", "lotNumber"],
  LotCountOrderByAggregateInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  LotAvgOrderByAggregateInput: ["lotNumber", "lastPreBid", "finalBid", "odometer", "buyNowPrice", "cylinders"],
  LotMaxOrderByAggregateInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  LotMinOrderByAggregateInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  LotSumOrderByAggregateInput: ["lotNumber", "lastPreBid", "finalBid", "odometer", "buyNowPrice", "cylinders"],
  EnumAuctionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  EnumResumableProcessTypeFilter: ["equals", "in", "notIn", "not"],
  EnumStatusFilter: ["equals", "in", "notIn", "not"],
  JsonFilter: ["equals", "not"],
  JsonNullableFilter: ["equals", "not", "isSet"],
  LogRecordCompositeListFilter: ["equals", "every", "some", "none", "isEmpty", "isSet"],
  LogRecordObjectEqualityInput: ["type", "value"],
  ResumableProcessMirrorNullableRelationFilter: ["is", "isNot"],
  ResumableProcessMirrorListRelationFilter: ["every", "some", "none"],
  LogRecordOrderByCompositeAggregateInput: ["_count"],
  ResumableProcessMirrorOrderByRelationAggregateInput: ["_count"],
  ResumableProcessMirrorCountOrderByAggregateInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorAvgOrderByAggregateInput: ["parentProcessStep", "currentStep"],
  ResumableProcessMirrorMaxOrderByAggregateInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorMinOrderByAggregateInput: ["id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "createdAt", "updatedAt", "deleted"],
  ResumableProcessMirrorSumOrderByAggregateInput: ["parentProcessStep", "currentStep"],
  EnumResumableProcessTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  JsonNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  ModelCreateNestedManyWithoutMakeInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  ModelUpdateManyWithoutMakeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MakeCreateNestedOneWithoutModelsInput: ["create", "connectOrCreate", "connect"],
  VehicleCreateNestedManyWithoutModelInput: ["create", "connectOrCreate", "createMany", "connect"],
  SeriesCreateNestedManyWithoutModelInput: ["create", "connectOrCreate", "createMany", "connect"],
  MakeUpdateOneRequiredWithoutModelsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VehicleUpdateManyWithoutModelNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SeriesUpdateManyWithoutModelNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ModelCreateNestedOneWithoutSeriesesInput: ["create", "connectOrCreate", "connect"],
  VehicleCreateNestedManyWithoutSeriesInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ModelUpdateOneRequiredWithoutSeriesesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VehicleUpdateManyWithoutSeriesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  VehicleCreateNestedManyWithoutVehicleTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  VehicleUpdateManyWithoutVehicleTypeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  VehicleUnprocessedCreateEnvelopeInput: ["set"],
  VehicleUnprocessedCreateInput: ["name"],
  ModelCreateNestedOneWithoutVehiclesInput: ["create", "connectOrCreate", "connect"],
  SeriesCreateNestedOneWithoutVehiclesInput: ["create", "connectOrCreate", "connect"],
  VehicleTypeCreateNestedOneWithoutVehicleInput: ["create", "connectOrCreate", "connect"],
  LotCreateNestedManyWithoutVehicleInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  VehicleUnprocessedUpdateEnvelopeInput: ["set", "update"],
  ModelUpdateOneRequiredWithoutVehiclesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SeriesUpdateOneWithoutVehiclesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  VehicleTypeUpdateOneWithoutVehicleNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  LotUpdateManyWithoutVehicleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  LotUnprocessedCreateEnvelopeInput: ["set"],
  LotUnprocessedCreateInput: ["leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  VehicleCreateNestedOneWithoutLotsInput: ["create", "connectOrCreate", "connect"],
  EnumAuctionFieldUpdateOperationsInput: ["set"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  LotUnprocessedUpdateEnvelopeInput: ["set", "update"],
  VehicleUpdateOneRequiredWithoutLotsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  LogRecordListCreateEnvelopeInput: ["set"],
  LogRecordCreateInput: ["type", "value"],
  ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput: ["create", "connectOrCreate", "connect"],
  ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumResumableProcessTypeFieldUpdateOperationsInput: ["set"],
  EnumStatusFieldUpdateOperationsInput: ["set"],
  LogRecordListUpdateEnvelopeInput: ["set", "push", "updateMany", "deleteMany"],
  ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  VehicleUnprocessedWhereInput: ["AND", "OR", "NOT", "name"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedEnumAuctionFilter: ["equals", "in", "notIn", "not"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  LotUnprocessedWhereInput: ["AND", "OR", "NOT", "leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  NestedEnumAuctionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  NestedEnumResumableProcessTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStatusFilter: ["equals", "in", "notIn", "not"],
  LogRecordWhereInput: ["AND", "OR", "NOT", "type", "value"],
  NestedEnumResumableProcessTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "not"],
  NestedJsonNullableFilter: ["equals", "not", "isSet"],
  ModelCreateWithoutMakeInput: ["id", "name", "createdAt", "updatedAt", "deleted", "vehicles", "serieses"],
  ModelCreateOrConnectWithoutMakeInput: ["where", "create"],
  ModelCreateManyMakeInputEnvelope: ["data"],
  ModelUpsertWithWhereUniqueWithoutMakeInput: ["where", "update", "create"],
  ModelUpdateWithWhereUniqueWithoutMakeInput: ["where", "data"],
  ModelUpdateManyWithWhereWithoutMakeInput: ["where", "data"],
  ModelScalarWhereInput: ["AND", "OR", "NOT", "id", "makeId", "name", "createdAt", "updatedAt", "deleted"],
  MakeCreateWithoutModelsInput: ["id", "name", "createdAt", "updatedAt", "deletedAt"],
  MakeCreateOrConnectWithoutModelsInput: ["where", "create"],
  VehicleCreateWithoutModelInput: ["id", "vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "series", "vehicleType", "lots"],
  VehicleCreateOrConnectWithoutModelInput: ["where", "create"],
  VehicleCreateManyModelInputEnvelope: ["data"],
  SeriesCreateWithoutModelInput: ["id", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "vehicles"],
  SeriesCreateOrConnectWithoutModelInput: ["where", "create"],
  SeriesCreateManyModelInputEnvelope: ["data"],
  MakeUpsertWithoutModelsInput: ["update", "create", "where"],
  MakeUpdateToOneWithWhereWithoutModelsInput: ["where", "data"],
  MakeUpdateWithoutModelsInput: ["name", "createdAt", "updatedAt", "deletedAt"],
  VehicleUpsertWithWhereUniqueWithoutModelInput: ["where", "update", "create"],
  VehicleUpdateWithWhereUniqueWithoutModelInput: ["where", "data"],
  VehicleUpdateManyWithWhereWithoutModelInput: ["where", "data"],
  VehicleScalarWhereInput: ["AND", "OR", "NOT", "id", "vin", "modelId", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted"],
  SeriesUpsertWithWhereUniqueWithoutModelInput: ["where", "update", "create"],
  SeriesUpdateWithWhereUniqueWithoutModelInput: ["where", "data"],
  SeriesUpdateManyWithWhereWithoutModelInput: ["where", "data"],
  SeriesScalarWhereInput: ["AND", "OR", "NOT", "id", "modelId", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  ModelCreateWithoutSeriesesInput: ["id", "name", "createdAt", "updatedAt", "deleted", "make", "vehicles"],
  ModelCreateOrConnectWithoutSeriesesInput: ["where", "create"],
  VehicleCreateWithoutSeriesInput: ["id", "vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "vehicleType", "lots"],
  VehicleCreateOrConnectWithoutSeriesInput: ["where", "create"],
  VehicleCreateManySeriesInputEnvelope: ["data"],
  ModelUpsertWithoutSeriesesInput: ["update", "create", "where"],
  ModelUpdateToOneWithWhereWithoutSeriesesInput: ["where", "data"],
  ModelUpdateWithoutSeriesesInput: ["name", "createdAt", "updatedAt", "deleted", "make", "vehicles"],
  VehicleUpsertWithWhereUniqueWithoutSeriesInput: ["where", "update", "create"],
  VehicleUpdateWithWhereUniqueWithoutSeriesInput: ["where", "data"],
  VehicleUpdateManyWithWhereWithoutSeriesInput: ["where", "data"],
  VehicleCreateWithoutVehicleTypeInput: ["id", "vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "lots"],
  VehicleCreateOrConnectWithoutVehicleTypeInput: ["where", "create"],
  VehicleCreateManyVehicleTypeInputEnvelope: ["data"],
  VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput: ["where", "update", "create"],
  VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput: ["where", "data"],
  VehicleUpdateManyWithWhereWithoutVehicleTypeInput: ["where", "data"],
  ModelCreateWithoutVehiclesInput: ["id", "name", "createdAt", "updatedAt", "deleted", "make", "serieses"],
  ModelCreateOrConnectWithoutVehiclesInput: ["where", "create"],
  SeriesCreateWithoutVehiclesInput: ["id", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model"],
  SeriesCreateOrConnectWithoutVehiclesInput: ["where", "create"],
  VehicleTypeCreateWithoutVehicleInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  VehicleTypeCreateOrConnectWithoutVehicleInput: ["where", "create"],
  LotCreateWithoutVehicleInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed"],
  LotCreateOrConnectWithoutVehicleInput: ["where", "create"],
  LotCreateManyVehicleInputEnvelope: ["data"],
  VehicleUnprocessedUpdateInput: ["name"],
  ModelUpsertWithoutVehiclesInput: ["update", "create", "where"],
  ModelUpdateToOneWithWhereWithoutVehiclesInput: ["where", "data"],
  ModelUpdateWithoutVehiclesInput: ["name", "createdAt", "updatedAt", "deleted", "make", "serieses"],
  SeriesUpsertWithoutVehiclesInput: ["update", "create", "where"],
  SeriesUpdateToOneWithWhereWithoutVehiclesInput: ["where", "data"],
  SeriesUpdateWithoutVehiclesInput: ["name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "model"],
  VehicleTypeUpsertWithoutVehicleInput: ["update", "create", "where"],
  VehicleTypeUpdateToOneWithWhereWithoutVehicleInput: ["where", "data"],
  VehicleTypeUpdateWithoutVehicleInput: ["name", "createdAt", "updatedAt", "deleted"],
  LotUpsertWithWhereUniqueWithoutVehicleInput: ["where", "update", "create"],
  LotUpdateWithWhereUniqueWithoutVehicleInput: ["where", "data"],
  LotUpdateManyWithWhereWithoutVehicleInput: ["where", "data"],
  LotScalarWhereInput: ["AND", "OR", "NOT", "id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "vehicleId", "createdAt", "updatedAt", "deleted"],
  LotUnprocessedCreateimgsInput: ["set"],
  VehicleCreateWithoutLotsInput: ["id", "vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType"],
  VehicleCreateOrConnectWithoutLotsInput: ["where", "create"],
  LotUnprocessedUpdateInput: ["leftTrans", "prebidClosedTrans", "buyNowCloseTime", "soldBefore", "status", "imgs"],
  VehicleUpsertWithoutLotsInput: ["update", "create", "where"],
  VehicleUpdateToOneWithWhereWithoutLotsInput: ["where", "data"],
  VehicleUpdateWithoutLotsInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "vehicleType"],
  ResumableProcessMirrorCreateWithoutSubProcessesInput: ["id", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess"],
  ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput: ["where", "create"],
  ResumableProcessMirrorCreateWithoutParentProcessInput: ["id", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "subProcesses"],
  ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput: ["where", "create"],
  ResumableProcessMirrorCreateManyParentProcessInputEnvelope: ["data"],
  LogRecordUpdateManyInput: ["where", "data"],
  LogRecordDeleteManyInput: ["where"],
  ResumableProcessMirrorUpsertWithoutSubProcessesInput: ["update", "create", "where"],
  ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput: ["where", "data"],
  ResumableProcessMirrorUpdateWithoutSubProcessesInput: ["parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "parentProcess"],
  ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput: ["where", "update", "create"],
  ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput: ["where", "data"],
  ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput: ["where", "data"],
  ResumableProcessMirrorScalarWhereInput: ["AND", "OR", "NOT", "id", "parentProcessId", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "createdAt", "updatedAt", "deleted"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  EnumLogRecordTypeFilter: ["equals", "in", "notIn", "not"],
  ModelCreateManyMakeInput: ["id", "name", "createdAt", "updatedAt", "deleted"],
  ModelUpdateWithoutMakeInput: ["name", "createdAt", "updatedAt", "deleted", "vehicles", "serieses"],
  VehicleCreateManyModelInput: ["id", "vin", "seriesId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  SeriesCreateManyModelInput: ["id", "name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted"],
  VehicleUpdateWithoutModelInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "series", "vehicleType", "lots"],
  SeriesUpdateWithoutModelInput: ["name", "minYear", "maxYear", "createdAt", "updatedAt", "deleted", "vehicles"],
  VehicleCreateManySeriesInput: ["id", "vin", "modelId", "vehicleTypeId", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  VehicleUpdateWithoutSeriesInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "vehicleType", "lots"],
  VehicleCreateManyVehicleTypeInput: ["id", "vin", "modelId", "seriesId", "year", "createdAt", "updatedAt", "deleted", "unprocessed"],
  VehicleUpdateWithoutVehicleTypeInput: ["vin", "year", "createdAt", "updatedAt", "deleted", "unprocessed", "model", "series", "lots"],
  LotCreateManyVehicleInput: ["id", "auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed"],
  LotUpdateWithoutVehicleInput: ["auction", "lotNumber", "sellingBranch", "saleLocation", "location", "auctionDateTime", "seller", "preAccidentValue", "actualCashValue", "estimatedRepairCost", "lastPreBid", "finalBid", "saleStatus", "titleType", "titleBrand", "titleNotes", "primaryDamage", "secondaryDamage", "loss", "startCode", "highlights", "key", "odometer", "engine", "fuelType", "transmission", "drivelineType", "interiorColor", "exteriorColor", "buyNowPrice", "bodyStyle", "airbagsStatus", "cylinders", "manufacturedIn", "sourceLastUpdated", "createdAt", "updatedAt", "deleted", "unprocessed"],
  LotUnprocessedUpdateimgsInput: ["set", "push"],
  ResumableProcessMirrorCreateManyParentProcessInput: ["id", "parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted"],
  LogRecordUpdateInput: ["type", "value"],
  ResumableProcessMirrorUpdateWithoutParentProcessInput: ["parentProcessStep", "parentProcessStepKey", "type", "status", "currentStep", "props", "state", "result", "log", "createdAt", "updatedAt", "deleted", "subProcesses"],
  NestedEnumLogRecordTypeFilter: ["equals", "in", "notIn", "not"],
  EnumLogRecordTypeFieldUpdateOperationsInput: ["set"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

