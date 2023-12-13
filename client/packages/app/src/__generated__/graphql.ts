/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateLot = {
  __typename?: 'AggregateLot';
  _avg?: Maybe<LotAvgAggregate>;
  _count?: Maybe<LotCountAggregate>;
  _max?: Maybe<LotMaxAggregate>;
  _min?: Maybe<LotMinAggregate>;
  _sum?: Maybe<LotSumAggregate>;
};

export type AggregateMake = {
  __typename?: 'AggregateMake';
  _count?: Maybe<MakeCountAggregate>;
  _max?: Maybe<MakeMaxAggregate>;
  _min?: Maybe<MakeMinAggregate>;
};

export type AggregateModel = {
  __typename?: 'AggregateModel';
  _count?: Maybe<ModelCountAggregate>;
  _max?: Maybe<ModelMaxAggregate>;
  _min?: Maybe<ModelMinAggregate>;
};

export type AggregateResumableProcessMirror = {
  __typename?: 'AggregateResumableProcessMirror';
  _avg?: Maybe<ResumableProcessMirrorAvgAggregate>;
  _count?: Maybe<ResumableProcessMirrorCountAggregate>;
  _max?: Maybe<ResumableProcessMirrorMaxAggregate>;
  _min?: Maybe<ResumableProcessMirrorMinAggregate>;
  _sum?: Maybe<ResumableProcessMirrorSumAggregate>;
};

export type AggregateSeries = {
  __typename?: 'AggregateSeries';
  _avg?: Maybe<SeriesAvgAggregate>;
  _count?: Maybe<SeriesCountAggregate>;
  _max?: Maybe<SeriesMaxAggregate>;
  _min?: Maybe<SeriesMinAggregate>;
  _sum?: Maybe<SeriesSumAggregate>;
};

export type AggregateVehicle = {
  __typename?: 'AggregateVehicle';
  _avg?: Maybe<VehicleAvgAggregate>;
  _count?: Maybe<VehicleCountAggregate>;
  _max?: Maybe<VehicleMaxAggregate>;
  _min?: Maybe<VehicleMinAggregate>;
  _sum?: Maybe<VehicleSumAggregate>;
};

export type AggregateVehicleType = {
  __typename?: 'AggregateVehicleType';
  _count?: Maybe<VehicleTypeCountAggregate>;
  _max?: Maybe<VehicleTypeMaxAggregate>;
  _min?: Maybe<VehicleTypeMinAggregate>;
};

export enum Auction {
  Copart = 'copart',
  Iaai = 'iaai'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumAuctionFieldUpdateOperationsInput = {
  set?: InputMaybe<Auction>;
};

export type EnumAuctionFilter = {
  equals?: InputMaybe<Auction>;
  in?: InputMaybe<Array<Auction>>;
  not?: InputMaybe<NestedEnumAuctionFilter>;
  notIn?: InputMaybe<Array<Auction>>;
};

export type EnumAuctionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAuctionFilter>;
  _min?: InputMaybe<NestedEnumAuctionFilter>;
  equals?: InputMaybe<Auction>;
  in?: InputMaybe<Array<Auction>>;
  not?: InputMaybe<NestedEnumAuctionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Auction>>;
};

export type EnumResumableProcessTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ResumableProcessType>;
};

export type EnumResumableProcessTypeFilter = {
  equals?: InputMaybe<ResumableProcessType>;
  in?: InputMaybe<Array<ResumableProcessType>>;
  not?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  notIn?: InputMaybe<Array<ResumableProcessType>>;
};

export type EnumResumableProcessTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  _min?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  equals?: InputMaybe<ResumableProcessType>;
  in?: InputMaybe<Array<ResumableProcessType>>;
  not?: InputMaybe<NestedEnumResumableProcessTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ResumableProcessType>>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Status>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type LogRecord = {
  __typename?: 'LogRecord';
  type: LogRecordType;
  value: Scalars['JSON']['output'];
};

export type LogRecordCreateInput = {
  type: LogRecordType;
  value: Scalars['JSON']['input'];
};

export type LogRecordObjectEqualityInput = {
  type: LogRecordType;
  value: Scalars['JSON']['input'];
};

export type LogRecordOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum LogRecordType {
  Info = 'info',
  Warn = 'warn'
}

export type Lot = {
  __typename?: 'Lot';
  actualCashValue: Scalars['String']['output'];
  airbagsStatus: Scalars['String']['output'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['output'];
  bodyStyle: Scalars['String']['output'];
  buyNowPrice?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cylinders?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  drivelineType: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  estimatedRepairCost: Scalars['String']['output'];
  exteriorColor: Scalars['String']['output'];
  finalBid?: Maybe<Scalars['Int']['output']>;
  fuelType: Scalars['String']['output'];
  highlights: Scalars['String']['output'];
  id: Scalars['String']['output'];
  interiorColor: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  location: Scalars['String']['output'];
  loss: Scalars['String']['output'];
  lotNumber: Scalars['Int']['output'];
  manufacturedIn: Scalars['String']['output'];
  odometer: Scalars['Int']['output'];
  preAccidentValue: Scalars['String']['output'];
  primaryDamage: Scalars['String']['output'];
  saleLocation: Scalars['String']['output'];
  saleStatus: Scalars['String']['output'];
  secondaryDamage: Scalars['String']['output'];
  seller: Scalars['String']['output'];
  sellingBranch: Scalars['String']['output'];
  sourceLastUpdated: Scalars['String']['output'];
  startCode: Scalars['String']['output'];
  titleBrand: Scalars['String']['output'];
  titleNotes: Scalars['String']['output'];
  titleType: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  unprocessed: LotUnprocessed;
  updatedAt: Scalars['DateTime']['output'];
  vehicle: Vehicle;
  vehicleId: Scalars['String']['output'];
};

export type LotAuctionLotNumberCompoundUniqueInput = {
  auction: Auction;
  lotNumber: Scalars['Int']['input'];
};

export type LotAvgAggregate = {
  __typename?: 'LotAvgAggregate';
  buyNowPrice?: Maybe<Scalars['Float']['output']>;
  cylinders?: Maybe<Scalars['Float']['output']>;
  finalBid?: Maybe<Scalars['Float']['output']>;
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  lotNumber?: Maybe<Scalars['Float']['output']>;
  odometer?: Maybe<Scalars['Float']['output']>;
};

export type LotAvgOrderByAggregateInput = {
  buyNowPrice?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
};

export type LotCountAggregate = {
  __typename?: 'LotCountAggregate';
  _all: Scalars['Int']['output'];
  actualCashValue: Scalars['Int']['output'];
  airbagsStatus: Scalars['Int']['output'];
  auction: Scalars['Int']['output'];
  auctionDateTime: Scalars['Int']['output'];
  bodyStyle: Scalars['Int']['output'];
  buyNowPrice: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  cylinders: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  drivelineType: Scalars['Int']['output'];
  engine: Scalars['Int']['output'];
  estimatedRepairCost: Scalars['Int']['output'];
  exteriorColor: Scalars['Int']['output'];
  finalBid: Scalars['Int']['output'];
  fuelType: Scalars['Int']['output'];
  highlights: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interiorColor: Scalars['Int']['output'];
  key: Scalars['Int']['output'];
  lastPreBid: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  loss: Scalars['Int']['output'];
  lotNumber: Scalars['Int']['output'];
  manufacturedIn: Scalars['Int']['output'];
  odometer: Scalars['Int']['output'];
  preAccidentValue: Scalars['Int']['output'];
  primaryDamage: Scalars['Int']['output'];
  saleLocation: Scalars['Int']['output'];
  saleStatus: Scalars['Int']['output'];
  secondaryDamage: Scalars['Int']['output'];
  seller: Scalars['Int']['output'];
  sellingBranch: Scalars['Int']['output'];
  sourceLastUpdated: Scalars['Int']['output'];
  startCode: Scalars['Int']['output'];
  titleBrand: Scalars['Int']['output'];
  titleNotes: Scalars['Int']['output'];
  titleType: Scalars['Int']['output'];
  transmission: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  vehicleId: Scalars['Int']['output'];
};

export type LotCountOrderByAggregateInput = {
  actualCashValue?: InputMaybe<SortOrder>;
  airbagsStatus?: InputMaybe<SortOrder>;
  auction?: InputMaybe<SortOrder>;
  auctionDateTime?: InputMaybe<SortOrder>;
  bodyStyle?: InputMaybe<SortOrder>;
  buyNowPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  drivelineType?: InputMaybe<SortOrder>;
  engine?: InputMaybe<SortOrder>;
  estimatedRepairCost?: InputMaybe<SortOrder>;
  exteriorColor?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  fuelType?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interiorColor?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  loss?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  manufacturedIn?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
  preAccidentValue?: InputMaybe<SortOrder>;
  primaryDamage?: InputMaybe<SortOrder>;
  saleLocation?: InputMaybe<SortOrder>;
  saleStatus?: InputMaybe<SortOrder>;
  secondaryDamage?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellingBranch?: InputMaybe<SortOrder>;
  sourceLastUpdated?: InputMaybe<SortOrder>;
  startCode?: InputMaybe<SortOrder>;
  titleBrand?: InputMaybe<SortOrder>;
  titleNotes?: InputMaybe<SortOrder>;
  titleType?: InputMaybe<SortOrder>;
  transmission?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleId?: InputMaybe<SortOrder>;
};

export type LotCreateInput = {
  actualCashValue: Scalars['String']['input'];
  airbagsStatus: Scalars['String']['input'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['input'];
  bodyStyle: Scalars['String']['input'];
  buyNowPrice?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cylinders?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  drivelineType: Scalars['String']['input'];
  engine: Scalars['String']['input'];
  estimatedRepairCost: Scalars['String']['input'];
  exteriorColor: Scalars['String']['input'];
  finalBid?: InputMaybe<Scalars['Int']['input']>;
  fuelType: Scalars['String']['input'];
  highlights: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interiorColor: Scalars['String']['input'];
  key: Scalars['String']['input'];
  lastPreBid?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  loss: Scalars['String']['input'];
  lotNumber: Scalars['Int']['input'];
  manufacturedIn: Scalars['String']['input'];
  odometer: Scalars['Int']['input'];
  preAccidentValue: Scalars['String']['input'];
  primaryDamage: Scalars['String']['input'];
  saleLocation: Scalars['String']['input'];
  saleStatus: Scalars['String']['input'];
  secondaryDamage: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  sellingBranch: Scalars['String']['input'];
  sourceLastUpdated: Scalars['String']['input'];
  startCode: Scalars['String']['input'];
  titleBrand: Scalars['String']['input'];
  titleNotes: Scalars['String']['input'];
  titleType: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  unprocessed: LotUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicle: VehicleCreateNestedOneWithoutLotsInput;
};

export type LotCreateManyInput = {
  actualCashValue: Scalars['String']['input'];
  airbagsStatus: Scalars['String']['input'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['input'];
  bodyStyle: Scalars['String']['input'];
  buyNowPrice?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cylinders?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  drivelineType: Scalars['String']['input'];
  engine: Scalars['String']['input'];
  estimatedRepairCost: Scalars['String']['input'];
  exteriorColor: Scalars['String']['input'];
  finalBid?: InputMaybe<Scalars['Int']['input']>;
  fuelType: Scalars['String']['input'];
  highlights: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interiorColor: Scalars['String']['input'];
  key: Scalars['String']['input'];
  lastPreBid?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  loss: Scalars['String']['input'];
  lotNumber: Scalars['Int']['input'];
  manufacturedIn: Scalars['String']['input'];
  odometer: Scalars['Int']['input'];
  preAccidentValue: Scalars['String']['input'];
  primaryDamage: Scalars['String']['input'];
  saleLocation: Scalars['String']['input'];
  saleStatus: Scalars['String']['input'];
  secondaryDamage: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  sellingBranch: Scalars['String']['input'];
  sourceLastUpdated: Scalars['String']['input'];
  startCode: Scalars['String']['input'];
  titleBrand: Scalars['String']['input'];
  titleNotes: Scalars['String']['input'];
  titleType: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  unprocessed: LotUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleId: Scalars['String']['input'];
};

export type LotCreateManyVehicleInput = {
  actualCashValue: Scalars['String']['input'];
  airbagsStatus: Scalars['String']['input'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['input'];
  bodyStyle: Scalars['String']['input'];
  buyNowPrice?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cylinders?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  drivelineType: Scalars['String']['input'];
  engine: Scalars['String']['input'];
  estimatedRepairCost: Scalars['String']['input'];
  exteriorColor: Scalars['String']['input'];
  finalBid?: InputMaybe<Scalars['Int']['input']>;
  fuelType: Scalars['String']['input'];
  highlights: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interiorColor: Scalars['String']['input'];
  key: Scalars['String']['input'];
  lastPreBid?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  loss: Scalars['String']['input'];
  lotNumber: Scalars['Int']['input'];
  manufacturedIn: Scalars['String']['input'];
  odometer: Scalars['Int']['input'];
  preAccidentValue: Scalars['String']['input'];
  primaryDamage: Scalars['String']['input'];
  saleLocation: Scalars['String']['input'];
  saleStatus: Scalars['String']['input'];
  secondaryDamage: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  sellingBranch: Scalars['String']['input'];
  sourceLastUpdated: Scalars['String']['input'];
  startCode: Scalars['String']['input'];
  titleBrand: Scalars['String']['input'];
  titleNotes: Scalars['String']['input'];
  titleType: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  unprocessed: LotUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LotCreateManyVehicleInputEnvelope = {
  data: Array<LotCreateManyVehicleInput>;
};

export type LotCreateNestedManyWithoutVehicleInput = {
  connect?: InputMaybe<Array<LotWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LotCreateOrConnectWithoutVehicleInput>>;
  create?: InputMaybe<Array<LotCreateWithoutVehicleInput>>;
  createMany?: InputMaybe<LotCreateManyVehicleInputEnvelope>;
};

export type LotCreateOrConnectWithoutVehicleInput = {
  create: LotCreateWithoutVehicleInput;
  where: LotWhereUniqueInput;
};

export type LotCreateWithoutVehicleInput = {
  actualCashValue: Scalars['String']['input'];
  airbagsStatus: Scalars['String']['input'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['input'];
  bodyStyle: Scalars['String']['input'];
  buyNowPrice?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cylinders?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  drivelineType: Scalars['String']['input'];
  engine: Scalars['String']['input'];
  estimatedRepairCost: Scalars['String']['input'];
  exteriorColor: Scalars['String']['input'];
  finalBid?: InputMaybe<Scalars['Int']['input']>;
  fuelType: Scalars['String']['input'];
  highlights: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interiorColor: Scalars['String']['input'];
  key: Scalars['String']['input'];
  lastPreBid?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  loss: Scalars['String']['input'];
  lotNumber: Scalars['Int']['input'];
  manufacturedIn: Scalars['String']['input'];
  odometer: Scalars['Int']['input'];
  preAccidentValue: Scalars['String']['input'];
  primaryDamage: Scalars['String']['input'];
  saleLocation: Scalars['String']['input'];
  saleStatus: Scalars['String']['input'];
  secondaryDamage: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  sellingBranch: Scalars['String']['input'];
  sourceLastUpdated: Scalars['String']['input'];
  startCode: Scalars['String']['input'];
  titleBrand: Scalars['String']['input'];
  titleNotes: Scalars['String']['input'];
  titleType: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  unprocessed: LotUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LotGroupBy = {
  __typename?: 'LotGroupBy';
  _avg?: Maybe<LotAvgAggregate>;
  _count?: Maybe<LotCountAggregate>;
  _max?: Maybe<LotMaxAggregate>;
  _min?: Maybe<LotMinAggregate>;
  _sum?: Maybe<LotSumAggregate>;
  actualCashValue: Scalars['String']['output'];
  airbagsStatus: Scalars['String']['output'];
  auction: Auction;
  auctionDateTime: Scalars['DateTime']['output'];
  bodyStyle: Scalars['String']['output'];
  buyNowPrice?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cylinders?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  drivelineType: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  estimatedRepairCost: Scalars['String']['output'];
  exteriorColor: Scalars['String']['output'];
  finalBid?: Maybe<Scalars['Int']['output']>;
  fuelType: Scalars['String']['output'];
  highlights: Scalars['String']['output'];
  id: Scalars['String']['output'];
  interiorColor: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  location: Scalars['String']['output'];
  loss: Scalars['String']['output'];
  lotNumber: Scalars['Int']['output'];
  manufacturedIn: Scalars['String']['output'];
  odometer: Scalars['Int']['output'];
  preAccidentValue: Scalars['String']['output'];
  primaryDamage: Scalars['String']['output'];
  saleLocation: Scalars['String']['output'];
  saleStatus: Scalars['String']['output'];
  secondaryDamage: Scalars['String']['output'];
  seller: Scalars['String']['output'];
  sellingBranch: Scalars['String']['output'];
  sourceLastUpdated: Scalars['String']['output'];
  startCode: Scalars['String']['output'];
  titleBrand: Scalars['String']['output'];
  titleNotes: Scalars['String']['output'];
  titleType: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicleId: Scalars['String']['output'];
};

export type LotListRelationFilter = {
  every?: InputMaybe<LotWhereInput>;
  none?: InputMaybe<LotWhereInput>;
  some?: InputMaybe<LotWhereInput>;
};

export type LotMaxAggregate = {
  __typename?: 'LotMaxAggregate';
  actualCashValue?: Maybe<Scalars['String']['output']>;
  airbagsStatus?: Maybe<Scalars['String']['output']>;
  auction?: Maybe<Auction>;
  auctionDateTime?: Maybe<Scalars['DateTime']['output']>;
  bodyStyle?: Maybe<Scalars['String']['output']>;
  buyNowPrice?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cylinders?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  drivelineType?: Maybe<Scalars['String']['output']>;
  engine?: Maybe<Scalars['String']['output']>;
  estimatedRepairCost?: Maybe<Scalars['String']['output']>;
  exteriorColor?: Maybe<Scalars['String']['output']>;
  finalBid?: Maybe<Scalars['Int']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interiorColor?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  loss?: Maybe<Scalars['String']['output']>;
  lotNumber?: Maybe<Scalars['Int']['output']>;
  manufacturedIn?: Maybe<Scalars['String']['output']>;
  odometer?: Maybe<Scalars['Int']['output']>;
  preAccidentValue?: Maybe<Scalars['String']['output']>;
  primaryDamage?: Maybe<Scalars['String']['output']>;
  saleLocation?: Maybe<Scalars['String']['output']>;
  saleStatus?: Maybe<Scalars['String']['output']>;
  secondaryDamage?: Maybe<Scalars['String']['output']>;
  seller?: Maybe<Scalars['String']['output']>;
  sellingBranch?: Maybe<Scalars['String']['output']>;
  sourceLastUpdated?: Maybe<Scalars['String']['output']>;
  startCode?: Maybe<Scalars['String']['output']>;
  titleBrand?: Maybe<Scalars['String']['output']>;
  titleNotes?: Maybe<Scalars['String']['output']>;
  titleType?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleId?: Maybe<Scalars['String']['output']>;
};

export type LotMaxOrderByAggregateInput = {
  actualCashValue?: InputMaybe<SortOrder>;
  airbagsStatus?: InputMaybe<SortOrder>;
  auction?: InputMaybe<SortOrder>;
  auctionDateTime?: InputMaybe<SortOrder>;
  bodyStyle?: InputMaybe<SortOrder>;
  buyNowPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  drivelineType?: InputMaybe<SortOrder>;
  engine?: InputMaybe<SortOrder>;
  estimatedRepairCost?: InputMaybe<SortOrder>;
  exteriorColor?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  fuelType?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interiorColor?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  loss?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  manufacturedIn?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
  preAccidentValue?: InputMaybe<SortOrder>;
  primaryDamage?: InputMaybe<SortOrder>;
  saleLocation?: InputMaybe<SortOrder>;
  saleStatus?: InputMaybe<SortOrder>;
  secondaryDamage?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellingBranch?: InputMaybe<SortOrder>;
  sourceLastUpdated?: InputMaybe<SortOrder>;
  startCode?: InputMaybe<SortOrder>;
  titleBrand?: InputMaybe<SortOrder>;
  titleNotes?: InputMaybe<SortOrder>;
  titleType?: InputMaybe<SortOrder>;
  transmission?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleId?: InputMaybe<SortOrder>;
};

export type LotMinAggregate = {
  __typename?: 'LotMinAggregate';
  actualCashValue?: Maybe<Scalars['String']['output']>;
  airbagsStatus?: Maybe<Scalars['String']['output']>;
  auction?: Maybe<Auction>;
  auctionDateTime?: Maybe<Scalars['DateTime']['output']>;
  bodyStyle?: Maybe<Scalars['String']['output']>;
  buyNowPrice?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cylinders?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  drivelineType?: Maybe<Scalars['String']['output']>;
  engine?: Maybe<Scalars['String']['output']>;
  estimatedRepairCost?: Maybe<Scalars['String']['output']>;
  exteriorColor?: Maybe<Scalars['String']['output']>;
  finalBid?: Maybe<Scalars['Int']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interiorColor?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  loss?: Maybe<Scalars['String']['output']>;
  lotNumber?: Maybe<Scalars['Int']['output']>;
  manufacturedIn?: Maybe<Scalars['String']['output']>;
  odometer?: Maybe<Scalars['Int']['output']>;
  preAccidentValue?: Maybe<Scalars['String']['output']>;
  primaryDamage?: Maybe<Scalars['String']['output']>;
  saleLocation?: Maybe<Scalars['String']['output']>;
  saleStatus?: Maybe<Scalars['String']['output']>;
  secondaryDamage?: Maybe<Scalars['String']['output']>;
  seller?: Maybe<Scalars['String']['output']>;
  sellingBranch?: Maybe<Scalars['String']['output']>;
  sourceLastUpdated?: Maybe<Scalars['String']['output']>;
  startCode?: Maybe<Scalars['String']['output']>;
  titleBrand?: Maybe<Scalars['String']['output']>;
  titleNotes?: Maybe<Scalars['String']['output']>;
  titleType?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleId?: Maybe<Scalars['String']['output']>;
};

export type LotMinOrderByAggregateInput = {
  actualCashValue?: InputMaybe<SortOrder>;
  airbagsStatus?: InputMaybe<SortOrder>;
  auction?: InputMaybe<SortOrder>;
  auctionDateTime?: InputMaybe<SortOrder>;
  bodyStyle?: InputMaybe<SortOrder>;
  buyNowPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  drivelineType?: InputMaybe<SortOrder>;
  engine?: InputMaybe<SortOrder>;
  estimatedRepairCost?: InputMaybe<SortOrder>;
  exteriorColor?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  fuelType?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interiorColor?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  loss?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  manufacturedIn?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
  preAccidentValue?: InputMaybe<SortOrder>;
  primaryDamage?: InputMaybe<SortOrder>;
  saleLocation?: InputMaybe<SortOrder>;
  saleStatus?: InputMaybe<SortOrder>;
  secondaryDamage?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellingBranch?: InputMaybe<SortOrder>;
  sourceLastUpdated?: InputMaybe<SortOrder>;
  startCode?: InputMaybe<SortOrder>;
  titleBrand?: InputMaybe<SortOrder>;
  titleNotes?: InputMaybe<SortOrder>;
  titleType?: InputMaybe<SortOrder>;
  transmission?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleId?: InputMaybe<SortOrder>;
};

export type LotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LotOrderByWithAggregationInput = {
  _avg?: InputMaybe<LotAvgOrderByAggregateInput>;
  _count?: InputMaybe<LotCountOrderByAggregateInput>;
  _max?: InputMaybe<LotMaxOrderByAggregateInput>;
  _min?: InputMaybe<LotMinOrderByAggregateInput>;
  _sum?: InputMaybe<LotSumOrderByAggregateInput>;
  actualCashValue?: InputMaybe<SortOrder>;
  airbagsStatus?: InputMaybe<SortOrder>;
  auction?: InputMaybe<SortOrder>;
  auctionDateTime?: InputMaybe<SortOrder>;
  bodyStyle?: InputMaybe<SortOrder>;
  buyNowPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  drivelineType?: InputMaybe<SortOrder>;
  engine?: InputMaybe<SortOrder>;
  estimatedRepairCost?: InputMaybe<SortOrder>;
  exteriorColor?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  fuelType?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interiorColor?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  loss?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  manufacturedIn?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
  preAccidentValue?: InputMaybe<SortOrder>;
  primaryDamage?: InputMaybe<SortOrder>;
  saleLocation?: InputMaybe<SortOrder>;
  saleStatus?: InputMaybe<SortOrder>;
  secondaryDamage?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellingBranch?: InputMaybe<SortOrder>;
  sourceLastUpdated?: InputMaybe<SortOrder>;
  startCode?: InputMaybe<SortOrder>;
  titleBrand?: InputMaybe<SortOrder>;
  titleNotes?: InputMaybe<SortOrder>;
  titleType?: InputMaybe<SortOrder>;
  transmission?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleId?: InputMaybe<SortOrder>;
};

export type LotOrderByWithRelationInput = {
  actualCashValue?: InputMaybe<SortOrder>;
  airbagsStatus?: InputMaybe<SortOrder>;
  auction?: InputMaybe<SortOrder>;
  auctionDateTime?: InputMaybe<SortOrder>;
  bodyStyle?: InputMaybe<SortOrder>;
  buyNowPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  drivelineType?: InputMaybe<SortOrder>;
  engine?: InputMaybe<SortOrder>;
  estimatedRepairCost?: InputMaybe<SortOrder>;
  exteriorColor?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  fuelType?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interiorColor?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  loss?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  manufacturedIn?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
  preAccidentValue?: InputMaybe<SortOrder>;
  primaryDamage?: InputMaybe<SortOrder>;
  saleLocation?: InputMaybe<SortOrder>;
  saleStatus?: InputMaybe<SortOrder>;
  secondaryDamage?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellingBranch?: InputMaybe<SortOrder>;
  sourceLastUpdated?: InputMaybe<SortOrder>;
  startCode?: InputMaybe<SortOrder>;
  titleBrand?: InputMaybe<SortOrder>;
  titleNotes?: InputMaybe<SortOrder>;
  titleType?: InputMaybe<SortOrder>;
  transmission?: InputMaybe<SortOrder>;
  unprocessed?: InputMaybe<LotUnprocessedOrderByInput>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicle?: InputMaybe<VehicleOrderByWithRelationInput>;
  vehicleId?: InputMaybe<SortOrder>;
};

export enum LotScalarFieldEnum {
  ActualCashValue = 'actualCashValue',
  AirbagsStatus = 'airbagsStatus',
  Auction = 'auction',
  AuctionDateTime = 'auctionDateTime',
  BodyStyle = 'bodyStyle',
  BuyNowPrice = 'buyNowPrice',
  CreatedAt = 'createdAt',
  Cylinders = 'cylinders',
  Deleted = 'deleted',
  DrivelineType = 'drivelineType',
  Engine = 'engine',
  EstimatedRepairCost = 'estimatedRepairCost',
  ExteriorColor = 'exteriorColor',
  FinalBid = 'finalBid',
  FuelType = 'fuelType',
  Highlights = 'highlights',
  Id = 'id',
  InteriorColor = 'interiorColor',
  Key = 'key',
  LastPreBid = 'lastPreBid',
  Location = 'location',
  Loss = 'loss',
  LotNumber = 'lotNumber',
  ManufacturedIn = 'manufacturedIn',
  Odometer = 'odometer',
  PreAccidentValue = 'preAccidentValue',
  PrimaryDamage = 'primaryDamage',
  SaleLocation = 'saleLocation',
  SaleStatus = 'saleStatus',
  SecondaryDamage = 'secondaryDamage',
  Seller = 'seller',
  SellingBranch = 'sellingBranch',
  SourceLastUpdated = 'sourceLastUpdated',
  StartCode = 'startCode',
  TitleBrand = 'titleBrand',
  TitleNotes = 'titleNotes',
  TitleType = 'titleType',
  Transmission = 'transmission',
  UpdatedAt = 'updatedAt',
  VehicleId = 'vehicleId'
}

export type LotScalarWhereInput = {
  AND?: InputMaybe<Array<LotScalarWhereInput>>;
  NOT?: InputMaybe<Array<LotScalarWhereInput>>;
  OR?: InputMaybe<Array<LotScalarWhereInput>>;
  actualCashValue?: InputMaybe<StringFilter>;
  airbagsStatus?: InputMaybe<StringFilter>;
  auction?: InputMaybe<EnumAuctionFilter>;
  auctionDateTime?: InputMaybe<DateTimeFilter>;
  bodyStyle?: InputMaybe<StringFilter>;
  buyNowPrice?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cylinders?: InputMaybe<IntNullableFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  drivelineType?: InputMaybe<StringFilter>;
  engine?: InputMaybe<StringFilter>;
  estimatedRepairCost?: InputMaybe<StringFilter>;
  exteriorColor?: InputMaybe<StringFilter>;
  finalBid?: InputMaybe<IntNullableFilter>;
  fuelType?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  interiorColor?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  lastPreBid?: InputMaybe<FloatNullableFilter>;
  location?: InputMaybe<StringFilter>;
  loss?: InputMaybe<StringFilter>;
  lotNumber?: InputMaybe<IntFilter>;
  manufacturedIn?: InputMaybe<StringFilter>;
  odometer?: InputMaybe<IntFilter>;
  preAccidentValue?: InputMaybe<StringFilter>;
  primaryDamage?: InputMaybe<StringFilter>;
  saleLocation?: InputMaybe<StringFilter>;
  saleStatus?: InputMaybe<StringFilter>;
  secondaryDamage?: InputMaybe<StringFilter>;
  seller?: InputMaybe<StringFilter>;
  sellingBranch?: InputMaybe<StringFilter>;
  sourceLastUpdated?: InputMaybe<StringFilter>;
  startCode?: InputMaybe<StringFilter>;
  titleBrand?: InputMaybe<StringFilter>;
  titleNotes?: InputMaybe<StringFilter>;
  titleType?: InputMaybe<StringFilter>;
  transmission?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicleId?: InputMaybe<StringFilter>;
};

export type LotScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LotScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LotScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LotScalarWhereWithAggregatesInput>>;
  actualCashValue?: InputMaybe<StringWithAggregatesFilter>;
  airbagsStatus?: InputMaybe<StringWithAggregatesFilter>;
  auction?: InputMaybe<EnumAuctionWithAggregatesFilter>;
  auctionDateTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  bodyStyle?: InputMaybe<StringWithAggregatesFilter>;
  buyNowPrice?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  cylinders?: InputMaybe<IntNullableWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  drivelineType?: InputMaybe<StringWithAggregatesFilter>;
  engine?: InputMaybe<StringWithAggregatesFilter>;
  estimatedRepairCost?: InputMaybe<StringWithAggregatesFilter>;
  exteriorColor?: InputMaybe<StringWithAggregatesFilter>;
  finalBid?: InputMaybe<IntNullableWithAggregatesFilter>;
  fuelType?: InputMaybe<StringWithAggregatesFilter>;
  highlights?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  interiorColor?: InputMaybe<StringWithAggregatesFilter>;
  key?: InputMaybe<StringWithAggregatesFilter>;
  lastPreBid?: InputMaybe<FloatNullableWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  loss?: InputMaybe<StringWithAggregatesFilter>;
  lotNumber?: InputMaybe<IntWithAggregatesFilter>;
  manufacturedIn?: InputMaybe<StringWithAggregatesFilter>;
  odometer?: InputMaybe<IntWithAggregatesFilter>;
  preAccidentValue?: InputMaybe<StringWithAggregatesFilter>;
  primaryDamage?: InputMaybe<StringWithAggregatesFilter>;
  saleLocation?: InputMaybe<StringWithAggregatesFilter>;
  saleStatus?: InputMaybe<StringWithAggregatesFilter>;
  secondaryDamage?: InputMaybe<StringWithAggregatesFilter>;
  seller?: InputMaybe<StringWithAggregatesFilter>;
  sellingBranch?: InputMaybe<StringWithAggregatesFilter>;
  sourceLastUpdated?: InputMaybe<StringWithAggregatesFilter>;
  startCode?: InputMaybe<StringWithAggregatesFilter>;
  titleBrand?: InputMaybe<StringWithAggregatesFilter>;
  titleNotes?: InputMaybe<StringWithAggregatesFilter>;
  titleType?: InputMaybe<StringWithAggregatesFilter>;
  transmission?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  vehicleId?: InputMaybe<StringWithAggregatesFilter>;
};

export type LotSumAggregate = {
  __typename?: 'LotSumAggregate';
  buyNowPrice?: Maybe<Scalars['Int']['output']>;
  cylinders?: Maybe<Scalars['Int']['output']>;
  finalBid?: Maybe<Scalars['Int']['output']>;
  lastPreBid?: Maybe<Scalars['Float']['output']>;
  lotNumber?: Maybe<Scalars['Int']['output']>;
  odometer?: Maybe<Scalars['Int']['output']>;
};

export type LotSumOrderByAggregateInput = {
  buyNowPrice?: InputMaybe<SortOrder>;
  cylinders?: InputMaybe<SortOrder>;
  finalBid?: InputMaybe<SortOrder>;
  lastPreBid?: InputMaybe<SortOrder>;
  lotNumber?: InputMaybe<SortOrder>;
  odometer?: InputMaybe<SortOrder>;
};

export type LotUnprocessed = {
  __typename?: 'LotUnprocessed';
  buyNowCloseTime?: Maybe<Scalars['DateTime']['output']>;
  imgs: Array<Scalars['String']['output']>;
  leftTrans: Scalars['String']['output'];
  prebidClosedTrans: Scalars['String']['output'];
  soldBefore?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
};

export type LotUnprocessedCompositeFilter = {
  equals?: InputMaybe<LotUnprocessedObjectEqualityInput>;
  is?: InputMaybe<LotUnprocessedWhereInput>;
  isNot?: InputMaybe<LotUnprocessedWhereInput>;
};

export type LotUnprocessedCreateEnvelopeInput = {
  set?: InputMaybe<LotUnprocessedCreateInput>;
};

export type LotUnprocessedCreateInput = {
  buyNowCloseTime?: InputMaybe<Scalars['DateTime']['input']>;
  imgs?: InputMaybe<LotUnprocessedCreateimgsInput>;
  leftTrans: Scalars['String']['input'];
  prebidClosedTrans: Scalars['String']['input'];
  soldBefore?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
};

export type LotUnprocessedCreateimgsInput = {
  set: Array<Scalars['String']['input']>;
};

export type LotUnprocessedObjectEqualityInput = {
  buyNowCloseTime?: InputMaybe<Scalars['DateTime']['input']>;
  imgs?: InputMaybe<Array<Scalars['String']['input']>>;
  leftTrans: Scalars['String']['input'];
  prebidClosedTrans: Scalars['String']['input'];
  soldBefore?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
};

export type LotUnprocessedOrderByInput = {
  buyNowCloseTime?: InputMaybe<SortOrder>;
  imgs?: InputMaybe<SortOrder>;
  leftTrans?: InputMaybe<SortOrder>;
  prebidClosedTrans?: InputMaybe<SortOrder>;
  soldBefore?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type LotUnprocessedUpdateEnvelopeInput = {
  set?: InputMaybe<LotUnprocessedCreateInput>;
  update?: InputMaybe<LotUnprocessedUpdateInput>;
};

export type LotUnprocessedUpdateInput = {
  buyNowCloseTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  imgs?: InputMaybe<LotUnprocessedUpdateimgsInput>;
  leftTrans?: InputMaybe<StringFieldUpdateOperationsInput>;
  prebidClosedTrans?: InputMaybe<StringFieldUpdateOperationsInput>;
  soldBefore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type LotUnprocessedUpdateimgsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LotUnprocessedWhereInput = {
  AND?: InputMaybe<Array<LotUnprocessedWhereInput>>;
  NOT?: InputMaybe<Array<LotUnprocessedWhereInput>>;
  OR?: InputMaybe<Array<LotUnprocessedWhereInput>>;
  buyNowCloseTime?: InputMaybe<DateTimeNullableFilter>;
  imgs?: InputMaybe<StringNullableListFilter>;
  leftTrans?: InputMaybe<StringFilter>;
  prebidClosedTrans?: InputMaybe<StringFilter>;
  soldBefore?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<IntFilter>;
};

export type LotUpdateInput = {
  actualCashValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  airbagsStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  auction?: InputMaybe<EnumAuctionFieldUpdateOperationsInput>;
  auctionDateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bodyStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  buyNowPrice?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cylinders?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  drivelineType?: InputMaybe<StringFieldUpdateOperationsInput>;
  engine?: InputMaybe<StringFieldUpdateOperationsInput>;
  estimatedRepairCost?: InputMaybe<StringFieldUpdateOperationsInput>;
  exteriorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  finalBid?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  fuelType?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<StringFieldUpdateOperationsInput>;
  interiorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastPreBid?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  loss?: InputMaybe<StringFieldUpdateOperationsInput>;
  lotNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  manufacturedIn?: InputMaybe<StringFieldUpdateOperationsInput>;
  odometer?: InputMaybe<IntFieldUpdateOperationsInput>;
  preAccidentValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  primaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleLocation?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  seller?: InputMaybe<StringFieldUpdateOperationsInput>;
  sellingBranch?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceLastUpdated?: InputMaybe<StringFieldUpdateOperationsInput>;
  startCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleBrand?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleNotes?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleType?: InputMaybe<StringFieldUpdateOperationsInput>;
  transmission?: InputMaybe<StringFieldUpdateOperationsInput>;
  unprocessed?: InputMaybe<LotUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicle?: InputMaybe<VehicleUpdateOneRequiredWithoutLotsNestedInput>;
};

export type LotUpdateManyMutationInput = {
  actualCashValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  airbagsStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  auction?: InputMaybe<EnumAuctionFieldUpdateOperationsInput>;
  auctionDateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bodyStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  buyNowPrice?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cylinders?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  drivelineType?: InputMaybe<StringFieldUpdateOperationsInput>;
  engine?: InputMaybe<StringFieldUpdateOperationsInput>;
  estimatedRepairCost?: InputMaybe<StringFieldUpdateOperationsInput>;
  exteriorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  finalBid?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  fuelType?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<StringFieldUpdateOperationsInput>;
  interiorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastPreBid?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  loss?: InputMaybe<StringFieldUpdateOperationsInput>;
  lotNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  manufacturedIn?: InputMaybe<StringFieldUpdateOperationsInput>;
  odometer?: InputMaybe<IntFieldUpdateOperationsInput>;
  preAccidentValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  primaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleLocation?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  seller?: InputMaybe<StringFieldUpdateOperationsInput>;
  sellingBranch?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceLastUpdated?: InputMaybe<StringFieldUpdateOperationsInput>;
  startCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleBrand?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleNotes?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleType?: InputMaybe<StringFieldUpdateOperationsInput>;
  transmission?: InputMaybe<StringFieldUpdateOperationsInput>;
  unprocessed?: InputMaybe<LotUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LotUpdateManyWithWhereWithoutVehicleInput = {
  data: LotUpdateManyMutationInput;
  where: LotScalarWhereInput;
};

export type LotUpdateManyWithoutVehicleNestedInput = {
  connect?: InputMaybe<Array<LotWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LotCreateOrConnectWithoutVehicleInput>>;
  create?: InputMaybe<Array<LotCreateWithoutVehicleInput>>;
  createMany?: InputMaybe<LotCreateManyVehicleInputEnvelope>;
  delete?: InputMaybe<Array<LotWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LotScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LotWhereUniqueInput>>;
  set?: InputMaybe<Array<LotWhereUniqueInput>>;
  update?: InputMaybe<Array<LotUpdateWithWhereUniqueWithoutVehicleInput>>;
  updateMany?: InputMaybe<Array<LotUpdateManyWithWhereWithoutVehicleInput>>;
  upsert?: InputMaybe<Array<LotUpsertWithWhereUniqueWithoutVehicleInput>>;
};

export type LotUpdateWithWhereUniqueWithoutVehicleInput = {
  data: LotUpdateWithoutVehicleInput;
  where: LotWhereUniqueInput;
};

export type LotUpdateWithoutVehicleInput = {
  actualCashValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  airbagsStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  auction?: InputMaybe<EnumAuctionFieldUpdateOperationsInput>;
  auctionDateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bodyStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  buyNowPrice?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cylinders?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  drivelineType?: InputMaybe<StringFieldUpdateOperationsInput>;
  engine?: InputMaybe<StringFieldUpdateOperationsInput>;
  estimatedRepairCost?: InputMaybe<StringFieldUpdateOperationsInput>;
  exteriorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  finalBid?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  fuelType?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<StringFieldUpdateOperationsInput>;
  interiorColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastPreBid?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  loss?: InputMaybe<StringFieldUpdateOperationsInput>;
  lotNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  manufacturedIn?: InputMaybe<StringFieldUpdateOperationsInput>;
  odometer?: InputMaybe<IntFieldUpdateOperationsInput>;
  preAccidentValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  primaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleLocation?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondaryDamage?: InputMaybe<StringFieldUpdateOperationsInput>;
  seller?: InputMaybe<StringFieldUpdateOperationsInput>;
  sellingBranch?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceLastUpdated?: InputMaybe<StringFieldUpdateOperationsInput>;
  startCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleBrand?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleNotes?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleType?: InputMaybe<StringFieldUpdateOperationsInput>;
  transmission?: InputMaybe<StringFieldUpdateOperationsInput>;
  unprocessed?: InputMaybe<LotUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LotUpsertWithWhereUniqueWithoutVehicleInput = {
  create: LotCreateWithoutVehicleInput;
  update: LotUpdateWithoutVehicleInput;
  where: LotWhereUniqueInput;
};

export type LotWhereInput = {
  AND?: InputMaybe<Array<LotWhereInput>>;
  NOT?: InputMaybe<Array<LotWhereInput>>;
  OR?: InputMaybe<Array<LotWhereInput>>;
  actualCashValue?: InputMaybe<StringFilter>;
  airbagsStatus?: InputMaybe<StringFilter>;
  auction?: InputMaybe<EnumAuctionFilter>;
  auctionDateTime?: InputMaybe<DateTimeFilter>;
  bodyStyle?: InputMaybe<StringFilter>;
  buyNowPrice?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cylinders?: InputMaybe<IntNullableFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  drivelineType?: InputMaybe<StringFilter>;
  engine?: InputMaybe<StringFilter>;
  estimatedRepairCost?: InputMaybe<StringFilter>;
  exteriorColor?: InputMaybe<StringFilter>;
  finalBid?: InputMaybe<IntNullableFilter>;
  fuelType?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  interiorColor?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  lastPreBid?: InputMaybe<FloatNullableFilter>;
  location?: InputMaybe<StringFilter>;
  loss?: InputMaybe<StringFilter>;
  lotNumber?: InputMaybe<IntFilter>;
  manufacturedIn?: InputMaybe<StringFilter>;
  odometer?: InputMaybe<IntFilter>;
  preAccidentValue?: InputMaybe<StringFilter>;
  primaryDamage?: InputMaybe<StringFilter>;
  saleLocation?: InputMaybe<StringFilter>;
  saleStatus?: InputMaybe<StringFilter>;
  secondaryDamage?: InputMaybe<StringFilter>;
  seller?: InputMaybe<StringFilter>;
  sellingBranch?: InputMaybe<StringFilter>;
  sourceLastUpdated?: InputMaybe<StringFilter>;
  startCode?: InputMaybe<StringFilter>;
  titleBrand?: InputMaybe<StringFilter>;
  titleNotes?: InputMaybe<StringFilter>;
  titleType?: InputMaybe<StringFilter>;
  transmission?: InputMaybe<StringFilter>;
  unprocessed?: InputMaybe<LotUnprocessedCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicle?: InputMaybe<VehicleRelationFilter>;
  vehicleId?: InputMaybe<StringFilter>;
};

export type LotWhereUniqueInput = {
  AND?: InputMaybe<Array<LotWhereInput>>;
  NOT?: InputMaybe<Array<LotWhereInput>>;
  OR?: InputMaybe<Array<LotWhereInput>>;
  actualCashValue?: InputMaybe<StringFilter>;
  airbagsStatus?: InputMaybe<StringFilter>;
  auction?: InputMaybe<EnumAuctionFilter>;
  auctionDateTime?: InputMaybe<DateTimeFilter>;
  auction_lotNumber?: InputMaybe<LotAuctionLotNumberCompoundUniqueInput>;
  bodyStyle?: InputMaybe<StringFilter>;
  buyNowPrice?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cylinders?: InputMaybe<IntNullableFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  drivelineType?: InputMaybe<StringFilter>;
  engine?: InputMaybe<StringFilter>;
  estimatedRepairCost?: InputMaybe<StringFilter>;
  exteriorColor?: InputMaybe<StringFilter>;
  finalBid?: InputMaybe<IntNullableFilter>;
  fuelType?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  interiorColor?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  lastPreBid?: InputMaybe<FloatNullableFilter>;
  location?: InputMaybe<StringFilter>;
  loss?: InputMaybe<StringFilter>;
  lotNumber?: InputMaybe<IntFilter>;
  manufacturedIn?: InputMaybe<StringFilter>;
  odometer?: InputMaybe<IntFilter>;
  preAccidentValue?: InputMaybe<StringFilter>;
  primaryDamage?: InputMaybe<StringFilter>;
  saleLocation?: InputMaybe<StringFilter>;
  saleStatus?: InputMaybe<StringFilter>;
  secondaryDamage?: InputMaybe<StringFilter>;
  seller?: InputMaybe<StringFilter>;
  sellingBranch?: InputMaybe<StringFilter>;
  sourceLastUpdated?: InputMaybe<StringFilter>;
  startCode?: InputMaybe<StringFilter>;
  titleBrand?: InputMaybe<StringFilter>;
  titleNotes?: InputMaybe<StringFilter>;
  titleType?: InputMaybe<StringFilter>;
  transmission?: InputMaybe<StringFilter>;
  unprocessed?: InputMaybe<LotUnprocessedCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicle?: InputMaybe<VehicleRelationFilter>;
  vehicleId?: InputMaybe<StringFilter>;
};

export type Make = {
  __typename?: 'Make';
  _count?: Maybe<MakeCount>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  models: Array<Model>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type MakeModelsArgs = {
  cursor?: InputMaybe<ModelWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};

export type MakeCount = {
  __typename?: 'MakeCount';
  models: Scalars['Int']['output'];
};

export type MakeCountAggregate = {
  __typename?: 'MakeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MakeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MakeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  models?: InputMaybe<ModelCreateNestedManyWithoutMakeInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MakeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MakeCreateNestedOneWithoutModelsInput = {
  connect?: InputMaybe<MakeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MakeCreateOrConnectWithoutModelsInput>;
  create?: InputMaybe<MakeCreateWithoutModelsInput>;
};

export type MakeCreateOrConnectWithoutModelsInput = {
  create: MakeCreateWithoutModelsInput;
  where: MakeWhereUniqueInput;
};

export type MakeCreateWithoutModelsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MakeGroupBy = {
  __typename?: 'MakeGroupBy';
  _count?: Maybe<MakeCountAggregate>;
  _max?: Maybe<MakeMaxAggregate>;
  _min?: Maybe<MakeMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MakeMaxAggregate = {
  __typename?: 'MakeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MakeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MakeMinAggregate = {
  __typename?: 'MakeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MakeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MakeOrderByWithAggregationInput = {
  _count?: InputMaybe<MakeCountOrderByAggregateInput>;
  _max?: InputMaybe<MakeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MakeMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MakeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  models?: InputMaybe<ModelOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MakeRelationFilter = {
  is?: InputMaybe<MakeWhereInput>;
  isNot?: InputMaybe<MakeWhereInput>;
};

export enum MakeScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type MakeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MakeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MakeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MakeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MakeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  models?: InputMaybe<ModelUpdateManyWithoutMakeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MakeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MakeUpdateOneRequiredWithoutModelsNestedInput = {
  connect?: InputMaybe<MakeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MakeCreateOrConnectWithoutModelsInput>;
  create?: InputMaybe<MakeCreateWithoutModelsInput>;
  update?: InputMaybe<MakeUpdateToOneWithWhereWithoutModelsInput>;
  upsert?: InputMaybe<MakeUpsertWithoutModelsInput>;
};

export type MakeUpdateToOneWithWhereWithoutModelsInput = {
  data: MakeUpdateWithoutModelsInput;
  where?: InputMaybe<MakeWhereInput>;
};

export type MakeUpdateWithoutModelsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MakeUpsertWithoutModelsInput = {
  create: MakeCreateWithoutModelsInput;
  update: MakeUpdateWithoutModelsInput;
  where?: InputMaybe<MakeWhereInput>;
};

export type MakeWhereInput = {
  AND?: InputMaybe<Array<MakeWhereInput>>;
  NOT?: InputMaybe<Array<MakeWhereInput>>;
  OR?: InputMaybe<Array<MakeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  models?: InputMaybe<ModelListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MakeWhereUniqueInput = {
  AND?: InputMaybe<Array<MakeWhereInput>>;
  NOT?: InputMaybe<Array<MakeWhereInput>>;
  OR?: InputMaybe<Array<MakeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  models?: InputMaybe<ModelListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Model = {
  __typename?: 'Model';
  _count?: Maybe<ModelCount>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  make: Make;
  makeId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  serieses: Array<Series>;
  updatedAt: Scalars['DateTime']['output'];
  vehicles: Array<Vehicle>;
};


export type ModelSeriesesArgs = {
  cursor?: InputMaybe<SeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type ModelVehiclesArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};

export type ModelCount = {
  __typename?: 'ModelCount';
  serieses: Scalars['Int']['output'];
  vehicles: Scalars['Int']['output'];
};

export type ModelCountAggregate = {
  __typename?: 'ModelCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  makeId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ModelCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  makeId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModelCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  make: MakeCreateNestedOneWithoutModelsInput;
  name: Scalars['String']['input'];
  serieses?: InputMaybe<SeriesCreateNestedManyWithoutModelInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicles?: InputMaybe<VehicleCreateNestedManyWithoutModelInput>;
};

export type ModelCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  makeId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModelCreateManyMakeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModelCreateManyMakeInputEnvelope = {
  data: Array<ModelCreateManyMakeInput>;
};

export type ModelCreateNestedManyWithoutMakeInput = {
  connect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ModelCreateOrConnectWithoutMakeInput>>;
  create?: InputMaybe<Array<ModelCreateWithoutMakeInput>>;
  createMany?: InputMaybe<ModelCreateManyMakeInputEnvelope>;
};

export type ModelCreateNestedOneWithoutSeriesesInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModelCreateOrConnectWithoutSeriesesInput>;
  create?: InputMaybe<ModelCreateWithoutSeriesesInput>;
};

export type ModelCreateNestedOneWithoutVehiclesInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModelCreateOrConnectWithoutVehiclesInput>;
  create?: InputMaybe<ModelCreateWithoutVehiclesInput>;
};

export type ModelCreateOrConnectWithoutMakeInput = {
  create: ModelCreateWithoutMakeInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutSeriesesInput = {
  create: ModelCreateWithoutSeriesesInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateOrConnectWithoutVehiclesInput = {
  create: ModelCreateWithoutVehiclesInput;
  where: ModelWhereUniqueInput;
};

export type ModelCreateWithoutMakeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  serieses?: InputMaybe<SeriesCreateNestedManyWithoutModelInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicles?: InputMaybe<VehicleCreateNestedManyWithoutModelInput>;
};

export type ModelCreateWithoutSeriesesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  make: MakeCreateNestedOneWithoutModelsInput;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicles?: InputMaybe<VehicleCreateNestedManyWithoutModelInput>;
};

export type ModelCreateWithoutVehiclesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  make: MakeCreateNestedOneWithoutModelsInput;
  name: Scalars['String']['input'];
  serieses?: InputMaybe<SeriesCreateNestedManyWithoutModelInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModelGroupBy = {
  __typename?: 'ModelGroupBy';
  _count?: Maybe<ModelCountAggregate>;
  _max?: Maybe<ModelMaxAggregate>;
  _min?: Maybe<ModelMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  makeId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ModelListRelationFilter = {
  every?: InputMaybe<ModelWhereInput>;
  none?: InputMaybe<ModelWhereInput>;
  some?: InputMaybe<ModelWhereInput>;
};

export type ModelMakeIdNameCompoundUniqueInput = {
  makeId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ModelMaxAggregate = {
  __typename?: 'ModelMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  makeId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModelMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  makeId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModelMinAggregate = {
  __typename?: 'ModelMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  makeId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModelMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  makeId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModelOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ModelOrderByWithAggregationInput = {
  _count?: InputMaybe<ModelCountOrderByAggregateInput>;
  _max?: InputMaybe<ModelMaxOrderByAggregateInput>;
  _min?: InputMaybe<ModelMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  makeId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModelOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  make?: InputMaybe<MakeOrderByWithRelationInput>;
  makeId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  serieses?: InputMaybe<SeriesOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicles?: InputMaybe<VehicleOrderByRelationAggregateInput>;
};

export type ModelRelationFilter = {
  is?: InputMaybe<ModelWhereInput>;
  isNot?: InputMaybe<ModelWhereInput>;
};

export enum ModelScalarFieldEnum {
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  Id = 'id',
  MakeId = 'makeId',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ModelScalarWhereInput = {
  AND?: InputMaybe<Array<ModelScalarWhereInput>>;
  NOT?: InputMaybe<Array<ModelScalarWhereInput>>;
  OR?: InputMaybe<Array<ModelScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  makeId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ModelScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ModelScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ModelScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ModelScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  makeId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ModelUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  make?: InputMaybe<MakeUpdateOneRequiredWithoutModelsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  serieses?: InputMaybe<SeriesUpdateManyWithoutModelNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicles?: InputMaybe<VehicleUpdateManyWithoutModelNestedInput>;
};

export type ModelUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpdateManyWithWhereWithoutMakeInput = {
  data: ModelUpdateManyMutationInput;
  where: ModelScalarWhereInput;
};

export type ModelUpdateManyWithoutMakeNestedInput = {
  connect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ModelCreateOrConnectWithoutMakeInput>>;
  create?: InputMaybe<Array<ModelCreateWithoutMakeInput>>;
  createMany?: InputMaybe<ModelCreateManyMakeInputEnvelope>;
  delete?: InputMaybe<Array<ModelWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ModelScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  set?: InputMaybe<Array<ModelWhereUniqueInput>>;
  update?: InputMaybe<Array<ModelUpdateWithWhereUniqueWithoutMakeInput>>;
  updateMany?: InputMaybe<Array<ModelUpdateManyWithWhereWithoutMakeInput>>;
  upsert?: InputMaybe<Array<ModelUpsertWithWhereUniqueWithoutMakeInput>>;
};

export type ModelUpdateOneRequiredWithoutSeriesesNestedInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModelCreateOrConnectWithoutSeriesesInput>;
  create?: InputMaybe<ModelCreateWithoutSeriesesInput>;
  update?: InputMaybe<ModelUpdateToOneWithWhereWithoutSeriesesInput>;
  upsert?: InputMaybe<ModelUpsertWithoutSeriesesInput>;
};

export type ModelUpdateOneRequiredWithoutVehiclesNestedInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModelCreateOrConnectWithoutVehiclesInput>;
  create?: InputMaybe<ModelCreateWithoutVehiclesInput>;
  update?: InputMaybe<ModelUpdateToOneWithWhereWithoutVehiclesInput>;
  upsert?: InputMaybe<ModelUpsertWithoutVehiclesInput>;
};

export type ModelUpdateToOneWithWhereWithoutSeriesesInput = {
  data: ModelUpdateWithoutSeriesesInput;
  where?: InputMaybe<ModelWhereInput>;
};

export type ModelUpdateToOneWithWhereWithoutVehiclesInput = {
  data: ModelUpdateWithoutVehiclesInput;
  where?: InputMaybe<ModelWhereInput>;
};

export type ModelUpdateWithWhereUniqueWithoutMakeInput = {
  data: ModelUpdateWithoutMakeInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateWithoutMakeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  serieses?: InputMaybe<SeriesUpdateManyWithoutModelNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicles?: InputMaybe<VehicleUpdateManyWithoutModelNestedInput>;
};

export type ModelUpdateWithoutSeriesesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  make?: InputMaybe<MakeUpdateOneRequiredWithoutModelsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicles?: InputMaybe<VehicleUpdateManyWithoutModelNestedInput>;
};

export type ModelUpdateWithoutVehiclesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  make?: InputMaybe<MakeUpdateOneRequiredWithoutModelsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  serieses?: InputMaybe<SeriesUpdateManyWithoutModelNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModelUpsertWithWhereUniqueWithoutMakeInput = {
  create: ModelCreateWithoutMakeInput;
  update: ModelUpdateWithoutMakeInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpsertWithoutSeriesesInput = {
  create: ModelCreateWithoutSeriesesInput;
  update: ModelUpdateWithoutSeriesesInput;
  where?: InputMaybe<ModelWhereInput>;
};

export type ModelUpsertWithoutVehiclesInput = {
  create: ModelCreateWithoutVehiclesInput;
  update: ModelUpdateWithoutVehiclesInput;
  where?: InputMaybe<ModelWhereInput>;
};

export type ModelWhereInput = {
  AND?: InputMaybe<Array<ModelWhereInput>>;
  NOT?: InputMaybe<Array<ModelWhereInput>>;
  OR?: InputMaybe<Array<ModelWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  make?: InputMaybe<MakeRelationFilter>;
  makeId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  serieses?: InputMaybe<SeriesListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicles?: InputMaybe<VehicleListRelationFilter>;
};

export type ModelWhereUniqueInput = {
  AND?: InputMaybe<Array<ModelWhereInput>>;
  NOT?: InputMaybe<Array<ModelWhereInput>>;
  OR?: InputMaybe<Array<ModelWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<MakeRelationFilter>;
  makeId?: InputMaybe<StringFilter>;
  makeId_name?: InputMaybe<ModelMakeIdNameCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
  serieses?: InputMaybe<SeriesListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicles?: InputMaybe<VehicleListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  abortProcess: Scalars['Boolean']['output'];
  createManyLot: AffectedRowsOutput;
  createManyMake: AffectedRowsOutput;
  createManyModel: AffectedRowsOutput;
  createManyResumableProcessMirror: AffectedRowsOutput;
  createManySeries: AffectedRowsOutput;
  createManyVehicle: AffectedRowsOutput;
  createManyVehicleType: AffectedRowsOutput;
  createOneLot: Lot;
  createOneMake: Make;
  createOneModel: Model;
  createOneResumableProcessMirror: ResumableProcessMirror;
  createOneSeries: Series;
  createOneVehicle: Vehicle;
  createOneVehicleType: VehicleType;
  deleteManyLot: AffectedRowsOutput;
  deleteManyMake: AffectedRowsOutput;
  deleteManyModel: AffectedRowsOutput;
  deleteManyResumableProcessMirror: AffectedRowsOutput;
  deleteManySeries: AffectedRowsOutput;
  deleteManyVehicle: AffectedRowsOutput;
  deleteManyVehicleType: AffectedRowsOutput;
  deleteOneLot?: Maybe<Lot>;
  deleteOneMake?: Maybe<Make>;
  deleteOneModel?: Maybe<Model>;
  deleteOneResumableProcessMirror?: Maybe<ResumableProcessMirror>;
  deleteOneSeries?: Maybe<Series>;
  deleteOneVehicle?: Maybe<Vehicle>;
  deleteOneVehicleType?: Maybe<VehicleType>;
  pullMakesAndModelsFromBidCars: Scalars['Boolean']['output'];
  resumeProcess: Scalars['Boolean']['output'];
  runBidCarsSearch: Scalars['Boolean']['output'];
  updateManyLot: AffectedRowsOutput;
  updateManyMake: AffectedRowsOutput;
  updateManyModel: AffectedRowsOutput;
  updateManyResumableProcessMirror: AffectedRowsOutput;
  updateManySeries: AffectedRowsOutput;
  updateManyVehicle: AffectedRowsOutput;
  updateManyVehicleType: AffectedRowsOutput;
  updateOneLot?: Maybe<Lot>;
  updateOneMake?: Maybe<Make>;
  updateOneModel?: Maybe<Model>;
  updateOneResumableProcessMirror?: Maybe<ResumableProcessMirror>;
  updateOneSeries?: Maybe<Series>;
  updateOneVehicle?: Maybe<Vehicle>;
  updateOneVehicleType?: Maybe<VehicleType>;
  upsertOneLot: Lot;
  upsertOneMake: Make;
  upsertOneModel: Model;
  upsertOneResumableProcessMirror: ResumableProcessMirror;
  upsertOneSeries: Series;
  upsertOneVehicle: Vehicle;
  upsertOneVehicleType: VehicleType;
};


export type MutationAbortProcessArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateManyLotArgs = {
  data: Array<LotCreateManyInput>;
};


export type MutationCreateManyMakeArgs = {
  data: Array<MakeCreateManyInput>;
};


export type MutationCreateManyModelArgs = {
  data: Array<ModelCreateManyInput>;
};


export type MutationCreateManyResumableProcessMirrorArgs = {
  data: Array<ResumableProcessMirrorCreateManyInput>;
};


export type MutationCreateManySeriesArgs = {
  data: Array<SeriesCreateManyInput>;
};


export type MutationCreateManyVehicleArgs = {
  data: Array<VehicleCreateManyInput>;
};


export type MutationCreateManyVehicleTypeArgs = {
  data: Array<VehicleTypeCreateManyInput>;
};


export type MutationCreateOneLotArgs = {
  data: LotCreateInput;
};


export type MutationCreateOneMakeArgs = {
  data: MakeCreateInput;
};


export type MutationCreateOneModelArgs = {
  data: ModelCreateInput;
};


export type MutationCreateOneResumableProcessMirrorArgs = {
  data: ResumableProcessMirrorCreateInput;
};


export type MutationCreateOneSeriesArgs = {
  data: SeriesCreateInput;
};


export type MutationCreateOneVehicleArgs = {
  data: VehicleCreateInput;
};


export type MutationCreateOneVehicleTypeArgs = {
  data: VehicleTypeCreateInput;
};


export type MutationDeleteManyLotArgs = {
  where?: InputMaybe<LotWhereInput>;
};


export type MutationDeleteManyMakeArgs = {
  where?: InputMaybe<MakeWhereInput>;
};


export type MutationDeleteManyModelArgs = {
  where?: InputMaybe<ModelWhereInput>;
};


export type MutationDeleteManyResumableProcessMirrorArgs = {
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type MutationDeleteManySeriesArgs = {
  where?: InputMaybe<SeriesWhereInput>;
};


export type MutationDeleteManyVehicleArgs = {
  where?: InputMaybe<VehicleWhereInput>;
};


export type MutationDeleteManyVehicleTypeArgs = {
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type MutationDeleteOneLotArgs = {
  where: LotWhereUniqueInput;
};


export type MutationDeleteOneMakeArgs = {
  where: MakeWhereUniqueInput;
};


export type MutationDeleteOneModelArgs = {
  where: ModelWhereUniqueInput;
};


export type MutationDeleteOneResumableProcessMirrorArgs = {
  where: ResumableProcessMirrorWhereUniqueInput;
};


export type MutationDeleteOneSeriesArgs = {
  where: SeriesWhereUniqueInput;
};


export type MutationDeleteOneVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type MutationDeleteOneVehicleTypeArgs = {
  where: VehicleTypeWhereUniqueInput;
};


export type MutationResumeProcessArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateManyLotArgs = {
  data: LotUpdateManyMutationInput;
  where?: InputMaybe<LotWhereInput>;
};


export type MutationUpdateManyMakeArgs = {
  data: MakeUpdateManyMutationInput;
  where?: InputMaybe<MakeWhereInput>;
};


export type MutationUpdateManyModelArgs = {
  data: ModelUpdateManyMutationInput;
  where?: InputMaybe<ModelWhereInput>;
};


export type MutationUpdateManyResumableProcessMirrorArgs = {
  data: ResumableProcessMirrorUpdateManyMutationInput;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type MutationUpdateManySeriesArgs = {
  data: SeriesUpdateManyMutationInput;
  where?: InputMaybe<SeriesWhereInput>;
};


export type MutationUpdateManyVehicleArgs = {
  data: VehicleUpdateManyMutationInput;
  where?: InputMaybe<VehicleWhereInput>;
};


export type MutationUpdateManyVehicleTypeArgs = {
  data: VehicleTypeUpdateManyMutationInput;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type MutationUpdateOneLotArgs = {
  data: LotUpdateInput;
  where: LotWhereUniqueInput;
};


export type MutationUpdateOneMakeArgs = {
  data: MakeUpdateInput;
  where: MakeWhereUniqueInput;
};


export type MutationUpdateOneModelArgs = {
  data: ModelUpdateInput;
  where: ModelWhereUniqueInput;
};


export type MutationUpdateOneResumableProcessMirrorArgs = {
  data: ResumableProcessMirrorUpdateInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};


export type MutationUpdateOneSeriesArgs = {
  data: SeriesUpdateInput;
  where: SeriesWhereUniqueInput;
};


export type MutationUpdateOneVehicleArgs = {
  data: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};


export type MutationUpdateOneVehicleTypeArgs = {
  data: VehicleTypeUpdateInput;
  where: VehicleTypeWhereUniqueInput;
};


export type MutationUpsertOneLotArgs = {
  create: LotCreateInput;
  update: LotUpdateInput;
  where: LotWhereUniqueInput;
};


export type MutationUpsertOneMakeArgs = {
  create: MakeCreateInput;
  update: MakeUpdateInput;
  where: MakeWhereUniqueInput;
};


export type MutationUpsertOneModelArgs = {
  create: ModelCreateInput;
  update: ModelUpdateInput;
  where: ModelWhereUniqueInput;
};


export type MutationUpsertOneResumableProcessMirrorArgs = {
  create: ResumableProcessMirrorCreateInput;
  update: ResumableProcessMirrorUpdateInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};


export type MutationUpsertOneSeriesArgs = {
  create: SeriesCreateInput;
  update: SeriesUpdateInput;
  where: SeriesWhereUniqueInput;
};


export type MutationUpsertOneVehicleArgs = {
  create: VehicleCreateInput;
  update: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};


export type MutationUpsertOneVehicleTypeArgs = {
  create: VehicleTypeCreateInput;
  update: VehicleTypeUpdateInput;
  where: VehicleTypeWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumAuctionFilter = {
  equals?: InputMaybe<Auction>;
  in?: InputMaybe<Array<Auction>>;
  not?: InputMaybe<NestedEnumAuctionFilter>;
  notIn?: InputMaybe<Array<Auction>>;
};

export type NestedEnumAuctionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAuctionFilter>;
  _min?: InputMaybe<NestedEnumAuctionFilter>;
  equals?: InputMaybe<Auction>;
  in?: InputMaybe<Array<Auction>>;
  not?: InputMaybe<NestedEnumAuctionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Auction>>;
};

export type NestedEnumResumableProcessTypeFilter = {
  equals?: InputMaybe<ResumableProcessType>;
  in?: InputMaybe<Array<ResumableProcessType>>;
  not?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  notIn?: InputMaybe<Array<ResumableProcessType>>;
};

export type NestedEnumResumableProcessTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  _min?: InputMaybe<NestedEnumResumableProcessTypeFilter>;
  equals?: InputMaybe<ResumableProcessType>;
  in?: InputMaybe<Array<ResumableProcessType>>;
  not?: InputMaybe<NestedEnumResumableProcessTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ResumableProcessType>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type NestedJsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
  unset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
  unset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
  unset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
  unset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateLot: AggregateLot;
  aggregateMake: AggregateMake;
  aggregateModel: AggregateModel;
  aggregateResumableProcessMirror: AggregateResumableProcessMirror;
  aggregateSeries: AggregateSeries;
  aggregateVehicle: AggregateVehicle;
  aggregateVehicleType: AggregateVehicleType;
  findFirstLot?: Maybe<Lot>;
  findFirstLotOrThrow?: Maybe<Lot>;
  findFirstMake?: Maybe<Make>;
  findFirstMakeOrThrow?: Maybe<Make>;
  findFirstModel?: Maybe<Model>;
  findFirstModelOrThrow?: Maybe<Model>;
  findFirstResumableProcessMirror?: Maybe<ResumableProcessMirror>;
  findFirstResumableProcessMirrorOrThrow?: Maybe<ResumableProcessMirror>;
  findFirstSeries?: Maybe<Series>;
  findFirstSeriesOrThrow?: Maybe<Series>;
  findFirstVehicle?: Maybe<Vehicle>;
  findFirstVehicleOrThrow?: Maybe<Vehicle>;
  findFirstVehicleType?: Maybe<VehicleType>;
  findFirstVehicleTypeOrThrow?: Maybe<VehicleType>;
  findManySeries: Array<Series>;
  findUniqueSeries?: Maybe<Series>;
  findUniqueSeriesOrThrow?: Maybe<Series>;
  getLot?: Maybe<Lot>;
  getMake?: Maybe<Make>;
  getModel?: Maybe<Model>;
  getResumableProcessMirror?: Maybe<ResumableProcessMirror>;
  getVehicle?: Maybe<Vehicle>;
  getVehicleType?: Maybe<VehicleType>;
  groupByLot: Array<LotGroupBy>;
  groupByMake: Array<MakeGroupBy>;
  groupByModel: Array<ModelGroupBy>;
  groupByResumableProcessMirror: Array<ResumableProcessMirrorGroupBy>;
  groupBySeries: Array<SeriesGroupBy>;
  groupByVehicle: Array<VehicleGroupBy>;
  groupByVehicleType: Array<VehicleTypeGroupBy>;
  lot?: Maybe<Lot>;
  lots: Array<Lot>;
  make?: Maybe<Make>;
  makes: Array<Make>;
  model?: Maybe<Model>;
  models: Array<Model>;
  resumableProcessMirror?: Maybe<ResumableProcessMirror>;
  resumableProcessMirrors: Array<ResumableProcessMirror>;
  vehicle?: Maybe<Vehicle>;
  vehicleType?: Maybe<VehicleType>;
  vehicleTypes: Array<VehicleType>;
  vehicles: Array<Vehicle>;
};


export type QueryAggregateLotArgs = {
  cursor?: InputMaybe<LotWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type QueryAggregateMakeArgs = {
  cursor?: InputMaybe<MakeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MakeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MakeWhereInput>;
};


export type QueryAggregateModelArgs = {
  cursor?: InputMaybe<ModelWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryAggregateResumableProcessMirrorArgs = {
  cursor?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type QueryAggregateSeriesArgs = {
  cursor?: InputMaybe<SeriesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type QueryAggregateVehicleArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};


export type QueryAggregateVehicleTypeArgs = {
  cursor?: InputMaybe<VehicleTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type QueryFindFirstLotArgs = {
  cursor?: InputMaybe<LotWhereUniqueInput>;
  distinct?: InputMaybe<Array<LotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type QueryFindFirstLotOrThrowArgs = {
  cursor?: InputMaybe<LotWhereUniqueInput>;
  distinct?: InputMaybe<Array<LotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type QueryFindFirstMakeArgs = {
  cursor?: InputMaybe<MakeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MakeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MakeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MakeWhereInput>;
};


export type QueryFindFirstMakeOrThrowArgs = {
  cursor?: InputMaybe<MakeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MakeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MakeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MakeWhereInput>;
};


export type QueryFindFirstModelArgs = {
  cursor?: InputMaybe<ModelWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryFindFirstModelOrThrowArgs = {
  cursor?: InputMaybe<ModelWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryFindFirstResumableProcessMirrorArgs = {
  cursor?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumableProcessMirrorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type QueryFindFirstResumableProcessMirrorOrThrowArgs = {
  cursor?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumableProcessMirrorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type QueryFindFirstSeriesArgs = {
  cursor?: InputMaybe<SeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type QueryFindFirstSeriesOrThrowArgs = {
  cursor?: InputMaybe<SeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type QueryFindFirstVehicleArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};


export type QueryFindFirstVehicleOrThrowArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};


export type QueryFindFirstVehicleTypeArgs = {
  cursor?: InputMaybe<VehicleTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type QueryFindFirstVehicleTypeOrThrowArgs = {
  cursor?: InputMaybe<VehicleTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type QueryFindManySeriesArgs = {
  cursor?: InputMaybe<SeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type QueryFindUniqueSeriesArgs = {
  where: SeriesWhereUniqueInput;
};


export type QueryFindUniqueSeriesOrThrowArgs = {
  where: SeriesWhereUniqueInput;
};


export type QueryGetLotArgs = {
  where: LotWhereUniqueInput;
};


export type QueryGetMakeArgs = {
  where: MakeWhereUniqueInput;
};


export type QueryGetModelArgs = {
  where: ModelWhereUniqueInput;
};


export type QueryGetResumableProcessMirrorArgs = {
  where: ResumableProcessMirrorWhereUniqueInput;
};


export type QueryGetVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type QueryGetVehicleTypeArgs = {
  where: VehicleTypeWhereUniqueInput;
};


export type QueryGroupByLotArgs = {
  by: Array<LotScalarFieldEnum>;
  having?: InputMaybe<LotScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LotOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type QueryGroupByMakeArgs = {
  by: Array<MakeScalarFieldEnum>;
  having?: InputMaybe<MakeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MakeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MakeWhereInput>;
};


export type QueryGroupByModelArgs = {
  by: Array<ModelScalarFieldEnum>;
  having?: InputMaybe<ModelScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ModelOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryGroupByResumableProcessMirrorArgs = {
  by: Array<ResumableProcessMirrorScalarFieldEnum>;
  having?: InputMaybe<ResumableProcessMirrorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type QueryGroupBySeriesArgs = {
  by: Array<SeriesScalarFieldEnum>;
  having?: InputMaybe<SeriesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SeriesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeriesWhereInput>;
};


export type QueryGroupByVehicleArgs = {
  by: Array<VehicleScalarFieldEnum>;
  having?: InputMaybe<VehicleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};


export type QueryGroupByVehicleTypeArgs = {
  by: Array<VehicleTypeScalarFieldEnum>;
  having?: InputMaybe<VehicleTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type QueryLotArgs = {
  where: LotWhereUniqueInput;
};


export type QueryLotsArgs = {
  cursor?: InputMaybe<LotWhereUniqueInput>;
  distinct?: InputMaybe<Array<LotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type QueryMakeArgs = {
  where: MakeWhereUniqueInput;
};


export type QueryMakesArgs = {
  cursor?: InputMaybe<MakeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MakeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MakeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MakeWhereInput>;
};


export type QueryModelArgs = {
  where: ModelWhereUniqueInput;
};


export type QueryModelsArgs = {
  cursor?: InputMaybe<ModelWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModelWhereInput>;
};


export type QueryResumableProcessMirrorArgs = {
  where: ResumableProcessMirrorWhereUniqueInput;
};


export type QueryResumableProcessMirrorsArgs = {
  cursor?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumableProcessMirrorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type QueryVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type QueryVehicleTypeArgs = {
  where: VehicleTypeWhereUniqueInput;
};


export type QueryVehicleTypesArgs = {
  cursor?: InputMaybe<VehicleTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleTypeWhereInput>;
};


export type QueryVehiclesArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ResumableProcessMirror = {
  __typename?: 'ResumableProcessMirror';
  _count?: Maybe<ResumableProcessMirrorCount>;
  createdAt: Scalars['DateTime']['output'];
  currentStep: Scalars['Int']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  log: Array<LogRecord>;
  parentProcess?: Maybe<ResumableProcessMirror>;
  parentProcessId?: Maybe<Scalars['String']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStepKey?: Maybe<Scalars['String']['output']>;
  props: Scalars['JSON']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  state: Scalars['JSON']['output'];
  status: Status;
  subProcesses: Array<ResumableProcessMirror>;
  type: ResumableProcessType;
  updatedAt: Scalars['DateTime']['output'];
};


export type ResumableProcessMirrorParentProcessArgs = {
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};


export type ResumableProcessMirrorSubProcessesArgs = {
  cursor?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ResumableProcessMirrorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};

export type ResumableProcessMirrorAvgAggregate = {
  __typename?: 'ResumableProcessMirrorAvgAggregate';
  currentStep?: Maybe<Scalars['Float']['output']>;
  parentProcessStep?: Maybe<Scalars['Float']['output']>;
};

export type ResumableProcessMirrorAvgOrderByAggregateInput = {
  currentStep?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorCount = {
  __typename?: 'ResumableProcessMirrorCount';
  subProcesses: Scalars['Int']['output'];
};

export type ResumableProcessMirrorCountAggregate = {
  __typename?: 'ResumableProcessMirrorCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currentStep: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  parentProcessId: Scalars['Int']['output'];
  parentProcessStep: Scalars['Int']['output'];
  parentProcessStepKey: Scalars['Int']['output'];
  props: Scalars['Int']['output'];
  result: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ResumableProcessMirrorCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  currentStep?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentProcessId?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
  parentProcessStepKey?: InputMaybe<SortOrder>;
  props?: InputMaybe<SortOrder>;
  result?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentStep?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput>;
  parentProcessStep?: InputMaybe<Scalars['Int']['input']>;
  parentProcessStepKey?: InputMaybe<Scalars['String']['input']>;
  props: Scalars['JSON']['input'];
  result?: InputMaybe<Scalars['JSON']['input']>;
  state: Scalars['JSON']['input'];
  status: Status;
  subProcesses?: InputMaybe<ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput>;
  type: ResumableProcessType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumableProcessMirrorCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentStep?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcessId?: InputMaybe<Scalars['String']['input']>;
  parentProcessStep?: InputMaybe<Scalars['Int']['input']>;
  parentProcessStepKey?: InputMaybe<Scalars['String']['input']>;
  props: Scalars['JSON']['input'];
  result?: InputMaybe<Scalars['JSON']['input']>;
  state: Scalars['JSON']['input'];
  status: Status;
  type: ResumableProcessType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumableProcessMirrorCreateManyParentProcessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentStep?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcessStep?: InputMaybe<Scalars['Int']['input']>;
  parentProcessStepKey?: InputMaybe<Scalars['String']['input']>;
  props: Scalars['JSON']['input'];
  result?: InputMaybe<Scalars['JSON']['input']>;
  state: Scalars['JSON']['input'];
  status: Status;
  type: ResumableProcessType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumableProcessMirrorCreateManyParentProcessInputEnvelope = {
  data: Array<ResumableProcessMirrorCreateManyParentProcessInput>;
};

export type ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput = {
  connect?: InputMaybe<Array<ResumableProcessMirrorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput>>;
  create?: InputMaybe<Array<ResumableProcessMirrorCreateWithoutParentProcessInput>>;
  createMany?: InputMaybe<ResumableProcessMirrorCreateManyParentProcessInputEnvelope>;
};

export type ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput = {
  connect?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput>;
  create?: InputMaybe<ResumableProcessMirrorCreateWithoutSubProcessesInput>;
};

export type ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput = {
  create: ResumableProcessMirrorCreateWithoutParentProcessInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};

export type ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput = {
  create: ResumableProcessMirrorCreateWithoutSubProcessesInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};

export type ResumableProcessMirrorCreateWithoutParentProcessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentStep?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcessStep?: InputMaybe<Scalars['Int']['input']>;
  parentProcessStepKey?: InputMaybe<Scalars['String']['input']>;
  props: Scalars['JSON']['input'];
  result?: InputMaybe<Scalars['JSON']['input']>;
  state: Scalars['JSON']['input'];
  status: Status;
  subProcesses?: InputMaybe<ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput>;
  type: ResumableProcessType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumableProcessMirrorCreateWithoutSubProcessesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentStep?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput>;
  parentProcessStep?: InputMaybe<Scalars['Int']['input']>;
  parentProcessStepKey?: InputMaybe<Scalars['String']['input']>;
  props: Scalars['JSON']['input'];
  result?: InputMaybe<Scalars['JSON']['input']>;
  state: Scalars['JSON']['input'];
  status: Status;
  type: ResumableProcessType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumableProcessMirrorGroupBy = {
  __typename?: 'ResumableProcessMirrorGroupBy';
  _avg?: Maybe<ResumableProcessMirrorAvgAggregate>;
  _count?: Maybe<ResumableProcessMirrorCountAggregate>;
  _max?: Maybe<ResumableProcessMirrorMaxAggregate>;
  _min?: Maybe<ResumableProcessMirrorMinAggregate>;
  _sum?: Maybe<ResumableProcessMirrorSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  currentStep: Scalars['Int']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  parentProcessId?: Maybe<Scalars['String']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStepKey?: Maybe<Scalars['String']['output']>;
  props: Scalars['JSON']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  state: Scalars['JSON']['output'];
  status: Status;
  type: ResumableProcessType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ResumableProcessMirrorIdOnly = {
  __typename?: 'ResumableProcessMirrorIdOnly';
  id: Scalars['String']['output'];
};

export type ResumableProcessMirrorListRelationFilter = {
  every?: InputMaybe<ResumableProcessMirrorWhereInput>;
  none?: InputMaybe<ResumableProcessMirrorWhereInput>;
  some?: InputMaybe<ResumableProcessMirrorWhereInput>;
};

export type ResumableProcessMirrorMaxAggregate = {
  __typename?: 'ResumableProcessMirrorMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentStep?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentProcessId?: Maybe<Scalars['String']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStepKey?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  type?: Maybe<ResumableProcessType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ResumableProcessMirrorMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  currentStep?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentProcessId?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
  parentProcessStepKey?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorMinAggregate = {
  __typename?: 'ResumableProcessMirrorMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentStep?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentProcessId?: Maybe<Scalars['String']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStepKey?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  type?: Maybe<ResumableProcessType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ResumableProcessMirrorMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  currentStep?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentProcessId?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
  parentProcessStepKey?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorNullableRelationFilter = {
  is?: InputMaybe<ResumableProcessMirrorWhereInput>;
  isNot?: InputMaybe<ResumableProcessMirrorWhereInput>;
};

export type ResumableProcessMirrorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorOrderByWithAggregationInput = {
  _avg?: InputMaybe<ResumableProcessMirrorAvgOrderByAggregateInput>;
  _count?: InputMaybe<ResumableProcessMirrorCountOrderByAggregateInput>;
  _max?: InputMaybe<ResumableProcessMirrorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResumableProcessMirrorMinOrderByAggregateInput>;
  _sum?: InputMaybe<ResumableProcessMirrorSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  currentStep?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentProcessId?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
  parentProcessStepKey?: InputMaybe<SortOrder>;
  props?: InputMaybe<SortOrder>;
  result?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  currentStep?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<LogRecordOrderByCompositeAggregateInput>;
  parentProcess?: InputMaybe<ResumableProcessMirrorOrderByWithRelationInput>;
  parentProcessId?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
  parentProcessStepKey?: InputMaybe<SortOrder>;
  props?: InputMaybe<SortOrder>;
  result?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subProcesses?: InputMaybe<ResumableProcessMirrorOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ResumableProcessMirrorScalarFieldEnum {
  CreatedAt = 'createdAt',
  CurrentStep = 'currentStep',
  Deleted = 'deleted',
  Id = 'id',
  ParentProcessId = 'parentProcessId',
  ParentProcessStep = 'parentProcessStep',
  ParentProcessStepKey = 'parentProcessStepKey',
  Props = 'props',
  Result = 'result',
  State = 'state',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ResumableProcessMirrorScalarWhereInput = {
  AND?: InputMaybe<Array<ResumableProcessMirrorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ResumableProcessMirrorScalarWhereInput>>;
  OR?: InputMaybe<Array<ResumableProcessMirrorScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentStep?: InputMaybe<IntFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  parentProcessId?: InputMaybe<StringNullableFilter>;
  parentProcessStep?: InputMaybe<IntNullableFilter>;
  parentProcessStepKey?: InputMaybe<StringNullableFilter>;
  props?: InputMaybe<JsonFilter>;
  result?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<JsonFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  type?: InputMaybe<EnumResumableProcessTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ResumableProcessMirrorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ResumableProcessMirrorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ResumableProcessMirrorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ResumableProcessMirrorScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  currentStep?: InputMaybe<IntWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  parentProcessId?: InputMaybe<StringNullableWithAggregatesFilter>;
  parentProcessStep?: InputMaybe<IntNullableWithAggregatesFilter>;
  parentProcessStepKey?: InputMaybe<StringNullableWithAggregatesFilter>;
  props?: InputMaybe<JsonWithAggregatesFilter>;
  result?: InputMaybe<JsonNullableWithAggregatesFilter>;
  state?: InputMaybe<JsonWithAggregatesFilter>;
  status?: InputMaybe<EnumStatusWithAggregatesFilter>;
  type?: InputMaybe<EnumResumableProcessTypeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ResumableProcessMirrorScalarsOnly = {
  __typename?: 'ResumableProcessMirrorScalarsOnly';
  createdAt: Scalars['DateTime']['output'];
  currentStep: Scalars['Int']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  log: Array<LogRecord>;
  parentProcessId?: Maybe<Scalars['String']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStepKey?: Maybe<Scalars['String']['output']>;
  props: Scalars['JSON']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  state: Scalars['JSON']['output'];
  status: Status;
  type: ResumableProcessType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ResumableProcessMirrorSumAggregate = {
  __typename?: 'ResumableProcessMirrorSumAggregate';
  currentStep?: Maybe<Scalars['Int']['output']>;
  parentProcessStep?: Maybe<Scalars['Int']['output']>;
};

export type ResumableProcessMirrorSumOrderByAggregateInput = {
  currentStep?: InputMaybe<SortOrder>;
  parentProcessStep?: InputMaybe<SortOrder>;
};

export type ResumableProcessMirrorUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentStep?: InputMaybe<IntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput>;
  parentProcessStep?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  parentProcessStepKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  result?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  subProcesses?: InputMaybe<ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput>;
  type?: InputMaybe<EnumResumableProcessTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResumableProcessMirrorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentStep?: InputMaybe<IntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcessStep?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  parentProcessStepKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  result?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumResumableProcessTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput = {
  data: ResumableProcessMirrorUpdateManyMutationInput;
  where: ResumableProcessMirrorScalarWhereInput;
};

export type ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput = {
  connect?: InputMaybe<Array<ResumableProcessMirrorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput>>;
  create?: InputMaybe<Array<ResumableProcessMirrorCreateWithoutParentProcessInput>>;
  createMany?: InputMaybe<ResumableProcessMirrorCreateManyParentProcessInputEnvelope>;
  delete?: InputMaybe<Array<ResumableProcessMirrorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResumableProcessMirrorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResumableProcessMirrorWhereUniqueInput>>;
  set?: InputMaybe<Array<ResumableProcessMirrorWhereUniqueInput>>;
  update?: InputMaybe<Array<ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput>>;
  updateMany?: InputMaybe<Array<ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput>>;
  upsert?: InputMaybe<Array<ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput>>;
};

export type ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput = {
  connect?: InputMaybe<ResumableProcessMirrorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput>;
  create?: InputMaybe<ResumableProcessMirrorCreateWithoutSubProcessesInput>;
  delete?: InputMaybe<ResumableProcessMirrorWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput>;
  upsert?: InputMaybe<ResumableProcessMirrorUpsertWithoutSubProcessesInput>;
};

export type ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput = {
  data: ResumableProcessMirrorUpdateWithoutSubProcessesInput;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};

export type ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput = {
  data: ResumableProcessMirrorUpdateWithoutParentProcessInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};

export type ResumableProcessMirrorUpdateWithoutParentProcessInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentStep?: InputMaybe<IntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcessStep?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  parentProcessStepKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  result?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  subProcesses?: InputMaybe<ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput>;
  type?: InputMaybe<EnumResumableProcessTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResumableProcessMirrorUpdateWithoutSubProcessesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentStep?: InputMaybe<IntFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<Array<LogRecordCreateInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput>;
  parentProcessStep?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  parentProcessStepKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  result?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumResumableProcessTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput = {
  create: ResumableProcessMirrorCreateWithoutParentProcessInput;
  update: ResumableProcessMirrorUpdateWithoutParentProcessInput;
  where: ResumableProcessMirrorWhereUniqueInput;
};

export type ResumableProcessMirrorUpsertWithoutSubProcessesInput = {
  create: ResumableProcessMirrorCreateWithoutSubProcessesInput;
  update: ResumableProcessMirrorUpdateWithoutSubProcessesInput;
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
};

export type ResumableProcessMirrorWhereInput = {
  AND?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  NOT?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  OR?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentStep?: InputMaybe<IntFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  log?: InputMaybe<Array<LogRecordObjectEqualityInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorNullableRelationFilter>;
  parentProcessId?: InputMaybe<StringNullableFilter>;
  parentProcessStep?: InputMaybe<IntNullableFilter>;
  parentProcessStepKey?: InputMaybe<StringNullableFilter>;
  props?: InputMaybe<JsonFilter>;
  result?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<JsonFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  subProcesses?: InputMaybe<ResumableProcessMirrorListRelationFilter>;
  type?: InputMaybe<EnumResumableProcessTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ResumableProcessMirrorWhereUniqueInput = {
  AND?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  NOT?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  OR?: InputMaybe<Array<ResumableProcessMirrorWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentStep?: InputMaybe<IntFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Array<LogRecordObjectEqualityInput>>;
  parentProcess?: InputMaybe<ResumableProcessMirrorNullableRelationFilter>;
  parentProcessId?: InputMaybe<StringNullableFilter>;
  parentProcessStep?: InputMaybe<IntNullableFilter>;
  parentProcessStepKey?: InputMaybe<StringNullableFilter>;
  props?: InputMaybe<JsonFilter>;
  result?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<JsonFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  subProcesses?: InputMaybe<ResumableProcessMirrorListRelationFilter>;
  type?: InputMaybe<EnumResumableProcessTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ResumableProcessType {
  BidCarsSearchMakeScraper = 'bidCarsSearchMakeScraper',
  BidCarsSearchModelScraper = 'bidCarsSearchModelScraper',
  BidCarsSearchOdometerFallbackScraper = 'bidCarsSearchOdometerFallbackScraper',
  BidCarsSearchResultPageScraper = 'bidCarsSearchResultPageScraper',
  BidCarsSearchResultScraper = 'bidCarsSearchResultScraper',
  BidCarsSearchScraper = 'bidCarsSearchScraper'
}

export type Series = {
  __typename?: 'Series';
  _count?: Maybe<SeriesCount>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  maxYear: Scalars['Int']['output'];
  minYear: Scalars['Int']['output'];
  model: Model;
  modelId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicles: Array<Vehicle>;
};


export type SeriesVehiclesArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};

export type SeriesAvgAggregate = {
  __typename?: 'SeriesAvgAggregate';
  maxYear?: Maybe<Scalars['Float']['output']>;
  minYear?: Maybe<Scalars['Float']['output']>;
};

export type SeriesAvgOrderByAggregateInput = {
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
};

export type SeriesCount = {
  __typename?: 'SeriesCount';
  vehicles: Scalars['Int']['output'];
};

export type SeriesCountAggregate = {
  __typename?: 'SeriesCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maxYear: Scalars['Int']['output'];
  minYear: Scalars['Int']['output'];
  modelId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type SeriesCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SeriesCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear: Scalars['Int']['input'];
  minYear: Scalars['Int']['input'];
  model: ModelCreateNestedOneWithoutSeriesesInput;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicles?: InputMaybe<VehicleCreateNestedManyWithoutSeriesInput>;
};

export type SeriesCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear: Scalars['Int']['input'];
  minYear: Scalars['Int']['input'];
  modelId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeriesCreateManyModelInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear: Scalars['Int']['input'];
  minYear: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeriesCreateManyModelInputEnvelope = {
  data: Array<SeriesCreateManyModelInput>;
};

export type SeriesCreateNestedManyWithoutModelInput = {
  connect?: InputMaybe<Array<SeriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeriesCreateOrConnectWithoutModelInput>>;
  create?: InputMaybe<Array<SeriesCreateWithoutModelInput>>;
  createMany?: InputMaybe<SeriesCreateManyModelInputEnvelope>;
};

export type SeriesCreateNestedOneWithoutVehiclesInput = {
  connect?: InputMaybe<SeriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SeriesCreateOrConnectWithoutVehiclesInput>;
  create?: InputMaybe<SeriesCreateWithoutVehiclesInput>;
};

export type SeriesCreateOrConnectWithoutModelInput = {
  create: SeriesCreateWithoutModelInput;
  where: SeriesWhereUniqueInput;
};

export type SeriesCreateOrConnectWithoutVehiclesInput = {
  create: SeriesCreateWithoutVehiclesInput;
  where: SeriesWhereUniqueInput;
};

export type SeriesCreateWithoutModelInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear: Scalars['Int']['input'];
  minYear: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicles?: InputMaybe<VehicleCreateNestedManyWithoutSeriesInput>;
};

export type SeriesCreateWithoutVehiclesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear: Scalars['Int']['input'];
  minYear: Scalars['Int']['input'];
  model: ModelCreateNestedOneWithoutSeriesesInput;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeriesGroupBy = {
  __typename?: 'SeriesGroupBy';
  _avg?: Maybe<SeriesAvgAggregate>;
  _count?: Maybe<SeriesCountAggregate>;
  _max?: Maybe<SeriesMaxAggregate>;
  _min?: Maybe<SeriesMinAggregate>;
  _sum?: Maybe<SeriesSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  maxYear: Scalars['Int']['output'];
  minYear: Scalars['Int']['output'];
  modelId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SeriesListRelationFilter = {
  every?: InputMaybe<SeriesWhereInput>;
  none?: InputMaybe<SeriesWhereInput>;
  some?: InputMaybe<SeriesWhereInput>;
};

export type SeriesMaxAggregate = {
  __typename?: 'SeriesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxYear?: Maybe<Scalars['Int']['output']>;
  minYear?: Maybe<Scalars['Int']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SeriesMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SeriesMinAggregate = {
  __typename?: 'SeriesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxYear?: Maybe<Scalars['Int']['output']>;
  minYear?: Maybe<Scalars['Int']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SeriesMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SeriesModelIdNameCompoundUniqueInput = {
  modelId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SeriesNullableRelationFilter = {
  is?: InputMaybe<SeriesWhereInput>;
  isNot?: InputMaybe<SeriesWhereInput>;
};

export type SeriesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SeriesOrderByWithAggregationInput = {
  _avg?: InputMaybe<SeriesAvgOrderByAggregateInput>;
  _count?: InputMaybe<SeriesCountOrderByAggregateInput>;
  _max?: InputMaybe<SeriesMaxOrderByAggregateInput>;
  _min?: InputMaybe<SeriesMinOrderByAggregateInput>;
  _sum?: InputMaybe<SeriesSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SeriesOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
  model?: InputMaybe<ModelOrderByWithRelationInput>;
  modelId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicles?: InputMaybe<VehicleOrderByRelationAggregateInput>;
};

export enum SeriesScalarFieldEnum {
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  Id = 'id',
  MaxYear = 'maxYear',
  MinYear = 'minYear',
  ModelId = 'modelId',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type SeriesScalarWhereInput = {
  AND?: InputMaybe<Array<SeriesScalarWhereInput>>;
  NOT?: InputMaybe<Array<SeriesScalarWhereInput>>;
  OR?: InputMaybe<Array<SeriesScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  maxYear?: InputMaybe<IntFilter>;
  minYear?: InputMaybe<IntFilter>;
  modelId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SeriesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SeriesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SeriesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SeriesScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  maxYear?: InputMaybe<IntWithAggregatesFilter>;
  minYear?: InputMaybe<IntWithAggregatesFilter>;
  modelId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SeriesSumAggregate = {
  __typename?: 'SeriesSumAggregate';
  maxYear?: Maybe<Scalars['Int']['output']>;
  minYear?: Maybe<Scalars['Int']['output']>;
};

export type SeriesSumOrderByAggregateInput = {
  maxYear?: InputMaybe<SortOrder>;
  minYear?: InputMaybe<SortOrder>;
};

export type SeriesUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  maxYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  minYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutSeriesesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicles?: InputMaybe<VehicleUpdateManyWithoutSeriesNestedInput>;
};

export type SeriesUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  maxYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  minYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeriesUpdateManyWithWhereWithoutModelInput = {
  data: SeriesUpdateManyMutationInput;
  where: SeriesScalarWhereInput;
};

export type SeriesUpdateManyWithoutModelNestedInput = {
  connect?: InputMaybe<Array<SeriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeriesCreateOrConnectWithoutModelInput>>;
  create?: InputMaybe<Array<SeriesCreateWithoutModelInput>>;
  createMany?: InputMaybe<SeriesCreateManyModelInputEnvelope>;
  delete?: InputMaybe<Array<SeriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeriesWhereUniqueInput>>;
  set?: InputMaybe<Array<SeriesWhereUniqueInput>>;
  update?: InputMaybe<Array<SeriesUpdateWithWhereUniqueWithoutModelInput>>;
  updateMany?: InputMaybe<Array<SeriesUpdateManyWithWhereWithoutModelInput>>;
  upsert?: InputMaybe<Array<SeriesUpsertWithWhereUniqueWithoutModelInput>>;
};

export type SeriesUpdateOneWithoutVehiclesNestedInput = {
  connect?: InputMaybe<SeriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SeriesCreateOrConnectWithoutVehiclesInput>;
  create?: InputMaybe<SeriesCreateWithoutVehiclesInput>;
  delete?: InputMaybe<SeriesWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SeriesUpdateToOneWithWhereWithoutVehiclesInput>;
  upsert?: InputMaybe<SeriesUpsertWithoutVehiclesInput>;
};

export type SeriesUpdateToOneWithWhereWithoutVehiclesInput = {
  data: SeriesUpdateWithoutVehiclesInput;
  where?: InputMaybe<SeriesWhereInput>;
};

export type SeriesUpdateWithWhereUniqueWithoutModelInput = {
  data: SeriesUpdateWithoutModelInput;
  where: SeriesWhereUniqueInput;
};

export type SeriesUpdateWithoutModelInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  maxYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  minYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicles?: InputMaybe<VehicleUpdateManyWithoutSeriesNestedInput>;
};

export type SeriesUpdateWithoutVehiclesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  maxYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  minYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutSeriesesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeriesUpsertWithWhereUniqueWithoutModelInput = {
  create: SeriesCreateWithoutModelInput;
  update: SeriesUpdateWithoutModelInput;
  where: SeriesWhereUniqueInput;
};

export type SeriesUpsertWithoutVehiclesInput = {
  create: SeriesCreateWithoutVehiclesInput;
  update: SeriesUpdateWithoutVehiclesInput;
  where?: InputMaybe<SeriesWhereInput>;
};

export type SeriesWhereInput = {
  AND?: InputMaybe<Array<SeriesWhereInput>>;
  NOT?: InputMaybe<Array<SeriesWhereInput>>;
  OR?: InputMaybe<Array<SeriesWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  maxYear?: InputMaybe<IntFilter>;
  minYear?: InputMaybe<IntFilter>;
  model?: InputMaybe<ModelRelationFilter>;
  modelId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicles?: InputMaybe<VehicleListRelationFilter>;
};

export type SeriesWhereUniqueInput = {
  AND?: InputMaybe<Array<SeriesWhereInput>>;
  NOT?: InputMaybe<Array<SeriesWhereInput>>;
  OR?: InputMaybe<Array<SeriesWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxYear?: InputMaybe<IntFilter>;
  minYear?: InputMaybe<IntFilter>;
  model?: InputMaybe<ModelRelationFilter>;
  modelId?: InputMaybe<StringFilter>;
  modelId_name?: InputMaybe<SeriesModelIdNameCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicles?: InputMaybe<VehicleListRelationFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Aborted = 'aborted',
  Failed = 'failed',
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  serverProcessMirrorAdded: ResumableProcessMirrorScalarsOnly;
  serverProcessMirrorDeleted: ResumableProcessMirrorIdOnly;
  serverProcessMirrorUpdated: ResumableProcessMirrorScalarsOnly;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  _count?: Maybe<VehicleCount>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lots: Array<Lot>;
  model: Model;
  modelId: Scalars['String']['output'];
  series?: Maybe<Series>;
  seriesId?: Maybe<Scalars['String']['output']>;
  unprocessed: VehicleUnprocessed;
  updatedAt: Scalars['DateTime']['output'];
  vehicleType?: Maybe<VehicleType>;
  vehicleTypeId?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};


export type VehicleLotsArgs = {
  cursor?: InputMaybe<LotWhereUniqueInput>;
  distinct?: InputMaybe<Array<LotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LotWhereInput>;
};


export type VehicleSeriesArgs = {
  where?: InputMaybe<SeriesWhereInput>;
};


export type VehicleVehicleTypeArgs = {
  where?: InputMaybe<VehicleTypeWhereInput>;
};

export type VehicleAvgAggregate = {
  __typename?: 'VehicleAvgAggregate';
  year?: Maybe<Scalars['Float']['output']>;
};

export type VehicleAvgOrderByAggregateInput = {
  year?: InputMaybe<SortOrder>;
};

export type VehicleCount = {
  __typename?: 'VehicleCount';
  lots: Scalars['Int']['output'];
};

export type VehicleCountAggregate = {
  __typename?: 'VehicleCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  modelId: Scalars['Int']['output'];
  seriesId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  vehicleTypeId: Scalars['Int']['output'];
  vin: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type VehicleCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  seriesId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleTypeId?: InputMaybe<SortOrder>;
  vin?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type VehicleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lots?: InputMaybe<LotCreateNestedManyWithoutVehicleInput>;
  model: ModelCreateNestedOneWithoutVehiclesInput;
  series?: InputMaybe<SeriesCreateNestedOneWithoutVehiclesInput>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleType?: InputMaybe<VehicleTypeCreateNestedOneWithoutVehicleInput>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modelId: Scalars['String']['input'];
  seriesId?: InputMaybe<Scalars['String']['input']>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleTypeId?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateManyModelInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  seriesId?: InputMaybe<Scalars['String']['input']>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleTypeId?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateManyModelInputEnvelope = {
  data: Array<VehicleCreateManyModelInput>;
};

export type VehicleCreateManySeriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modelId: Scalars['String']['input'];
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleTypeId?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateManySeriesInputEnvelope = {
  data: Array<VehicleCreateManySeriesInput>;
};

export type VehicleCreateManyVehicleTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modelId: Scalars['String']['input'];
  seriesId?: InputMaybe<Scalars['String']['input']>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateManyVehicleTypeInputEnvelope = {
  data: Array<VehicleCreateManyVehicleTypeInput>;
};

export type VehicleCreateNestedManyWithoutModelInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutModelInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutModelInput>>;
  createMany?: InputMaybe<VehicleCreateManyModelInputEnvelope>;
};

export type VehicleCreateNestedManyWithoutSeriesInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutSeriesInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutSeriesInput>>;
  createMany?: InputMaybe<VehicleCreateManySeriesInputEnvelope>;
};

export type VehicleCreateNestedManyWithoutVehicleTypeInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutVehicleTypeInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutVehicleTypeInput>>;
  createMany?: InputMaybe<VehicleCreateManyVehicleTypeInputEnvelope>;
};

export type VehicleCreateNestedOneWithoutLotsInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VehicleCreateOrConnectWithoutLotsInput>;
  create?: InputMaybe<VehicleCreateWithoutLotsInput>;
};

export type VehicleCreateOrConnectWithoutLotsInput = {
  create: VehicleCreateWithoutLotsInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleCreateOrConnectWithoutModelInput = {
  create: VehicleCreateWithoutModelInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleCreateOrConnectWithoutSeriesInput = {
  create: VehicleCreateWithoutSeriesInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleCreateOrConnectWithoutVehicleTypeInput = {
  create: VehicleCreateWithoutVehicleTypeInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleCreateWithoutLotsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  model: ModelCreateNestedOneWithoutVehiclesInput;
  series?: InputMaybe<SeriesCreateNestedOneWithoutVehiclesInput>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleType?: InputMaybe<VehicleTypeCreateNestedOneWithoutVehicleInput>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateWithoutModelInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lots?: InputMaybe<LotCreateNestedManyWithoutVehicleInput>;
  series?: InputMaybe<SeriesCreateNestedOneWithoutVehiclesInput>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleType?: InputMaybe<VehicleTypeCreateNestedOneWithoutVehicleInput>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateWithoutSeriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lots?: InputMaybe<LotCreateNestedManyWithoutVehicleInput>;
  model: ModelCreateNestedOneWithoutVehiclesInput;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleType?: InputMaybe<VehicleTypeCreateNestedOneWithoutVehicleInput>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleCreateWithoutVehicleTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lots?: InputMaybe<LotCreateNestedManyWithoutVehicleInput>;
  model: ModelCreateNestedOneWithoutVehiclesInput;
  series?: InputMaybe<SeriesCreateNestedOneWithoutVehiclesInput>;
  unprocessed: VehicleUnprocessedCreateEnvelopeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year: Scalars['Int']['input'];
};

export type VehicleGroupBy = {
  __typename?: 'VehicleGroupBy';
  _avg?: Maybe<VehicleAvgAggregate>;
  _count?: Maybe<VehicleCountAggregate>;
  _max?: Maybe<VehicleMaxAggregate>;
  _min?: Maybe<VehicleMinAggregate>;
  _sum?: Maybe<VehicleSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  modelId: Scalars['String']['output'];
  seriesId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  vehicleTypeId?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

export type VehicleListRelationFilter = {
  every?: InputMaybe<VehicleWhereInput>;
  none?: InputMaybe<VehicleWhereInput>;
  some?: InputMaybe<VehicleWhereInput>;
};

export type VehicleMaxAggregate = {
  __typename?: 'VehicleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  seriesId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleTypeId?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type VehicleMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  seriesId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleTypeId?: InputMaybe<SortOrder>;
  vin?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type VehicleMinAggregate = {
  __typename?: 'VehicleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  seriesId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleTypeId?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type VehicleMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  seriesId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleTypeId?: InputMaybe<SortOrder>;
  vin?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type VehicleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VehicleOrderByWithAggregationInput = {
  _avg?: InputMaybe<VehicleAvgOrderByAggregateInput>;
  _count?: InputMaybe<VehicleCountOrderByAggregateInput>;
  _max?: InputMaybe<VehicleMaxOrderByAggregateInput>;
  _min?: InputMaybe<VehicleMinOrderByAggregateInput>;
  _sum?: InputMaybe<VehicleSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modelId?: InputMaybe<SortOrder>;
  seriesId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleTypeId?: InputMaybe<SortOrder>;
  vin?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type VehicleOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lots?: InputMaybe<LotOrderByRelationAggregateInput>;
  model?: InputMaybe<ModelOrderByWithRelationInput>;
  modelId?: InputMaybe<SortOrder>;
  series?: InputMaybe<SeriesOrderByWithRelationInput>;
  seriesId?: InputMaybe<SortOrder>;
  unprocessed?: InputMaybe<VehicleUnprocessedOrderByInput>;
  updatedAt?: InputMaybe<SortOrder>;
  vehicleType?: InputMaybe<VehicleTypeOrderByWithRelationInput>;
  vehicleTypeId?: InputMaybe<SortOrder>;
  vin?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type VehicleRelationFilter = {
  is?: InputMaybe<VehicleWhereInput>;
  isNot?: InputMaybe<VehicleWhereInput>;
};

export enum VehicleScalarFieldEnum {
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  Id = 'id',
  ModelId = 'modelId',
  SeriesId = 'seriesId',
  UpdatedAt = 'updatedAt',
  VehicleTypeId = 'vehicleTypeId',
  Vin = 'vin',
  Year = 'year'
}

export type VehicleScalarWhereInput = {
  AND?: InputMaybe<Array<VehicleScalarWhereInput>>;
  NOT?: InputMaybe<Array<VehicleScalarWhereInput>>;
  OR?: InputMaybe<Array<VehicleScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  modelId?: InputMaybe<StringFilter>;
  seriesId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicleTypeId?: InputMaybe<StringNullableFilter>;
  vin?: InputMaybe<StringNullableFilter>;
  year?: InputMaybe<IntFilter>;
};

export type VehicleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VehicleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VehicleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VehicleScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  modelId?: InputMaybe<StringWithAggregatesFilter>;
  seriesId?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  vehicleTypeId?: InputMaybe<StringNullableWithAggregatesFilter>;
  vin?: InputMaybe<StringNullableWithAggregatesFilter>;
  year?: InputMaybe<IntWithAggregatesFilter>;
};

export type VehicleSumAggregate = {
  __typename?: 'VehicleSumAggregate';
  year?: Maybe<Scalars['Int']['output']>;
};

export type VehicleSumOrderByAggregateInput = {
  year?: InputMaybe<SortOrder>;
};

export type VehicleType = {
  __typename?: 'VehicleType';
  Vehicle: Array<Vehicle>;
  _count?: Maybe<VehicleTypeCount>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type VehicleTypeVehicleArgs = {
  cursor?: InputMaybe<VehicleWhereUniqueInput>;
  distinct?: InputMaybe<Array<VehicleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VehicleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VehicleWhereInput>;
};

export type VehicleTypeCount = {
  __typename?: 'VehicleTypeCount';
  Vehicle: Scalars['Int']['output'];
};

export type VehicleTypeCountAggregate = {
  __typename?: 'VehicleTypeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type VehicleTypeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type VehicleTypeCreateInput = {
  Vehicle?: InputMaybe<VehicleCreateNestedManyWithoutVehicleTypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VehicleTypeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VehicleTypeCreateNestedOneWithoutVehicleInput = {
  connect?: InputMaybe<VehicleTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VehicleTypeCreateOrConnectWithoutVehicleInput>;
  create?: InputMaybe<VehicleTypeCreateWithoutVehicleInput>;
};

export type VehicleTypeCreateOrConnectWithoutVehicleInput = {
  create: VehicleTypeCreateWithoutVehicleInput;
  where: VehicleTypeWhereUniqueInput;
};

export type VehicleTypeCreateWithoutVehicleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deleted?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VehicleTypeGroupBy = {
  __typename?: 'VehicleTypeGroupBy';
  _count?: Maybe<VehicleTypeCountAggregate>;
  _max?: Maybe<VehicleTypeMaxAggregate>;
  _min?: Maybe<VehicleTypeMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VehicleTypeMaxAggregate = {
  __typename?: 'VehicleTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleTypeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type VehicleTypeMinAggregate = {
  __typename?: 'VehicleTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleTypeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type VehicleTypeNullableRelationFilter = {
  is?: InputMaybe<VehicleTypeWhereInput>;
  isNot?: InputMaybe<VehicleTypeWhereInput>;
};

export type VehicleTypeOrderByWithAggregationInput = {
  _count?: InputMaybe<VehicleTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<VehicleTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<VehicleTypeMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type VehicleTypeOrderByWithRelationInput = {
  Vehicle?: InputMaybe<VehicleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum VehicleTypeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type VehicleTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VehicleTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VehicleTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VehicleTypeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deleted?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type VehicleTypeUpdateInput = {
  Vehicle?: InputMaybe<VehicleUpdateManyWithoutVehicleTypeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VehicleTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VehicleTypeUpdateOneWithoutVehicleNestedInput = {
  connect?: InputMaybe<VehicleTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VehicleTypeCreateOrConnectWithoutVehicleInput>;
  create?: InputMaybe<VehicleTypeCreateWithoutVehicleInput>;
  delete?: InputMaybe<VehicleTypeWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<VehicleTypeUpdateToOneWithWhereWithoutVehicleInput>;
  upsert?: InputMaybe<VehicleTypeUpsertWithoutVehicleInput>;
};

export type VehicleTypeUpdateToOneWithWhereWithoutVehicleInput = {
  data: VehicleTypeUpdateWithoutVehicleInput;
  where?: InputMaybe<VehicleTypeWhereInput>;
};

export type VehicleTypeUpdateWithoutVehicleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VehicleTypeUpsertWithoutVehicleInput = {
  create: VehicleTypeCreateWithoutVehicleInput;
  update: VehicleTypeUpdateWithoutVehicleInput;
  where?: InputMaybe<VehicleTypeWhereInput>;
};

export type VehicleTypeWhereInput = {
  AND?: InputMaybe<Array<VehicleTypeWhereInput>>;
  NOT?: InputMaybe<Array<VehicleTypeWhereInput>>;
  OR?: InputMaybe<Array<VehicleTypeWhereInput>>;
  Vehicle?: InputMaybe<VehicleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VehicleTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<VehicleTypeWhereInput>>;
  NOT?: InputMaybe<Array<VehicleTypeWhereInput>>;
  OR?: InputMaybe<Array<VehicleTypeWhereInput>>;
  Vehicle?: InputMaybe<VehicleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VehicleUnprocessed = {
  __typename?: 'VehicleUnprocessed';
  name: Scalars['String']['output'];
};

export type VehicleUnprocessedCompositeFilter = {
  equals?: InputMaybe<VehicleUnprocessedObjectEqualityInput>;
  is?: InputMaybe<VehicleUnprocessedWhereInput>;
  isNot?: InputMaybe<VehicleUnprocessedWhereInput>;
};

export type VehicleUnprocessedCreateEnvelopeInput = {
  set?: InputMaybe<VehicleUnprocessedCreateInput>;
};

export type VehicleUnprocessedCreateInput = {
  name: Scalars['String']['input'];
};

export type VehicleUnprocessedObjectEqualityInput = {
  name: Scalars['String']['input'];
};

export type VehicleUnprocessedOrderByInput = {
  name?: InputMaybe<SortOrder>;
};

export type VehicleUnprocessedUpdateEnvelopeInput = {
  set?: InputMaybe<VehicleUnprocessedCreateInput>;
  update?: InputMaybe<VehicleUnprocessedUpdateInput>;
};

export type VehicleUnprocessedUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VehicleUnprocessedWhereInput = {
  AND?: InputMaybe<Array<VehicleUnprocessedWhereInput>>;
  NOT?: InputMaybe<Array<VehicleUnprocessedWhereInput>>;
  OR?: InputMaybe<Array<VehicleUnprocessedWhereInput>>;
  name?: InputMaybe<StringFilter>;
};

export type VehicleUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lots?: InputMaybe<LotUpdateManyWithoutVehicleNestedInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutVehiclesNestedInput>;
  series?: InputMaybe<SeriesUpdateOneWithoutVehiclesNestedInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicleType?: InputMaybe<VehicleTypeUpdateOneWithoutVehicleNestedInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpdateManyWithWhereWithoutModelInput = {
  data: VehicleUpdateManyMutationInput;
  where: VehicleScalarWhereInput;
};

export type VehicleUpdateManyWithWhereWithoutSeriesInput = {
  data: VehicleUpdateManyMutationInput;
  where: VehicleScalarWhereInput;
};

export type VehicleUpdateManyWithWhereWithoutVehicleTypeInput = {
  data: VehicleUpdateManyMutationInput;
  where: VehicleScalarWhereInput;
};

export type VehicleUpdateManyWithoutModelNestedInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutModelInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutModelInput>>;
  createMany?: InputMaybe<VehicleCreateManyModelInputEnvelope>;
  delete?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VehicleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  set?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  update?: InputMaybe<Array<VehicleUpdateWithWhereUniqueWithoutModelInput>>;
  updateMany?: InputMaybe<Array<VehicleUpdateManyWithWhereWithoutModelInput>>;
  upsert?: InputMaybe<Array<VehicleUpsertWithWhereUniqueWithoutModelInput>>;
};

export type VehicleUpdateManyWithoutSeriesNestedInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutSeriesInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutSeriesInput>>;
  createMany?: InputMaybe<VehicleCreateManySeriesInputEnvelope>;
  delete?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VehicleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  set?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  update?: InputMaybe<Array<VehicleUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: InputMaybe<Array<VehicleUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: InputMaybe<Array<VehicleUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type VehicleUpdateManyWithoutVehicleTypeNestedInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VehicleCreateOrConnectWithoutVehicleTypeInput>>;
  create?: InputMaybe<Array<VehicleCreateWithoutVehicleTypeInput>>;
  createMany?: InputMaybe<VehicleCreateManyVehicleTypeInputEnvelope>;
  delete?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VehicleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  set?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  update?: InputMaybe<Array<VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput>>;
  updateMany?: InputMaybe<Array<VehicleUpdateManyWithWhereWithoutVehicleTypeInput>>;
  upsert?: InputMaybe<Array<VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput>>;
};

export type VehicleUpdateOneRequiredWithoutLotsNestedInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VehicleCreateOrConnectWithoutLotsInput>;
  create?: InputMaybe<VehicleCreateWithoutLotsInput>;
  update?: InputMaybe<VehicleUpdateToOneWithWhereWithoutLotsInput>;
  upsert?: InputMaybe<VehicleUpsertWithoutLotsInput>;
};

export type VehicleUpdateToOneWithWhereWithoutLotsInput = {
  data: VehicleUpdateWithoutLotsInput;
  where?: InputMaybe<VehicleWhereInput>;
};

export type VehicleUpdateWithWhereUniqueWithoutModelInput = {
  data: VehicleUpdateWithoutModelInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpdateWithWhereUniqueWithoutSeriesInput = {
  data: VehicleUpdateWithoutSeriesInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput = {
  data: VehicleUpdateWithoutVehicleTypeInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpdateWithoutLotsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutVehiclesNestedInput>;
  series?: InputMaybe<SeriesUpdateOneWithoutVehiclesNestedInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicleType?: InputMaybe<VehicleTypeUpdateOneWithoutVehicleNestedInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpdateWithoutModelInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lots?: InputMaybe<LotUpdateManyWithoutVehicleNestedInput>;
  series?: InputMaybe<SeriesUpdateOneWithoutVehiclesNestedInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicleType?: InputMaybe<VehicleTypeUpdateOneWithoutVehicleNestedInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpdateWithoutSeriesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lots?: InputMaybe<LotUpdateManyWithoutVehicleNestedInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutVehiclesNestedInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vehicleType?: InputMaybe<VehicleTypeUpdateOneWithoutVehicleNestedInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpdateWithoutVehicleTypeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lots?: InputMaybe<LotUpdateManyWithoutVehicleNestedInput>;
  model?: InputMaybe<ModelUpdateOneRequiredWithoutVehiclesNestedInput>;
  series?: InputMaybe<SeriesUpdateOneWithoutVehiclesNestedInput>;
  unprocessed?: InputMaybe<VehicleUnprocessedUpdateEnvelopeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type VehicleUpsertWithWhereUniqueWithoutModelInput = {
  create: VehicleCreateWithoutModelInput;
  update: VehicleUpdateWithoutModelInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpsertWithWhereUniqueWithoutSeriesInput = {
  create: VehicleCreateWithoutSeriesInput;
  update: VehicleUpdateWithoutSeriesInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput = {
  create: VehicleCreateWithoutVehicleTypeInput;
  update: VehicleUpdateWithoutVehicleTypeInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpsertWithoutLotsInput = {
  create: VehicleCreateWithoutLotsInput;
  update: VehicleUpdateWithoutLotsInput;
  where?: InputMaybe<VehicleWhereInput>;
};

export type VehicleWhereInput = {
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  NOT?: InputMaybe<Array<VehicleWhereInput>>;
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lots?: InputMaybe<LotListRelationFilter>;
  model?: InputMaybe<ModelRelationFilter>;
  modelId?: InputMaybe<StringFilter>;
  series?: InputMaybe<SeriesNullableRelationFilter>;
  seriesId?: InputMaybe<StringNullableFilter>;
  unprocessed?: InputMaybe<VehicleUnprocessedCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicleType?: InputMaybe<VehicleTypeNullableRelationFilter>;
  vehicleTypeId?: InputMaybe<StringNullableFilter>;
  vin?: InputMaybe<StringNullableFilter>;
  year?: InputMaybe<IntFilter>;
};

export type VehicleWhereUniqueInput = {
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  NOT?: InputMaybe<Array<VehicleWhereInput>>;
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lots?: InputMaybe<LotListRelationFilter>;
  model?: InputMaybe<ModelRelationFilter>;
  modelId?: InputMaybe<StringFilter>;
  series?: InputMaybe<SeriesNullableRelationFilter>;
  seriesId?: InputMaybe<StringNullableFilter>;
  unprocessed?: InputMaybe<VehicleUnprocessedCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vehicleType?: InputMaybe<VehicleTypeNullableRelationFilter>;
  vehicleTypeId?: InputMaybe<StringNullableFilter>;
  vin?: InputMaybe<StringNullableFilter>;
  year?: InputMaybe<IntFilter>;
};

export type ProcessScreenQueryVariables = Exact<{
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput> | ResumableProcessMirrorOrderByWithRelationInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  resumableProcessMirrorWhere: ResumableProcessMirrorWhereUniqueInput;
}>;


export type ProcessScreenQuery = { __typename?: 'Query', resumableProcessMirror?: { __typename?: 'ResumableProcessMirror', id: string, parentProcessId?: string | null, parentProcessStep?: number | null, parentProcessStepKey?: string | null, type: ResumableProcessType, status: Status, currentStep: number, props: any, state: any, result?: any | null, createdAt: any, updatedAt: any, log: Array<{ __typename?: 'LogRecord', type: LogRecordType, value: any }> } | null, aggregateResumableProcessMirror: { __typename?: 'AggregateResumableProcessMirror', _count?: { __typename?: 'ResumableProcessMirrorCountAggregate', id: number } | null }, resumableProcessMirrors: Array<{ __typename?: 'ResumableProcessMirror', id: string, type: ResumableProcessType, status: Status, props: any, createdAt: any, updatedAt: any }> };

export type Mutation2MutationVariables = Exact<{
  abortProcessId: Scalars['String']['input'];
}>;


export type Mutation2Mutation = { __typename?: 'Mutation', abortProcess: boolean };

export type Mutation3MutationVariables = Exact<{
  abortProcessId: Scalars['String']['input'];
}>;


export type Mutation3Mutation = { __typename?: 'Mutation', resumeProcess: boolean };

export type ProcessesScreenQueryVariables = Exact<{
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput> | ResumableProcessMirrorOrderByWithRelationInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProcessesScreenQuery = { __typename?: 'Query', aggregateResumableProcessMirror: { __typename?: 'AggregateResumableProcessMirror', _count?: { __typename?: 'ResumableProcessMirrorCountAggregate', id: number } | null }, resumableProcessMirrors: Array<{ __typename?: 'ResumableProcessMirror', id: string, type: ResumableProcessType, status: Status, currentStep: number, props: any, state: any, result?: any | null, createdAt: any, updatedAt: any, log: Array<{ __typename?: 'LogRecord', type: LogRecordType, value: any }> }> };

export type ResumableProcessMirrors12QueryVariables = Exact<{
  where?: InputMaybe<ResumableProcessMirrorWhereInput>;
  orderBy?: InputMaybe<Array<ResumableProcessMirrorOrderByWithRelationInput> | ResumableProcessMirrorOrderByWithRelationInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ResumableProcessMirrors12Query = { __typename?: 'Query', resumableProcessMirrors: Array<{ __typename?: 'ResumableProcessMirror', id: string, type: ResumableProcessType, status: Status, currentStep: number, props: any, state: any, result?: any | null, createdAt: any, updatedAt: any, log: Array<{ __typename?: 'LogRecord', type: LogRecordType, value: any }> }> };

export type LotScreenQueryVariables = Exact<{
  where: LotWhereUniqueInput;
}>;


export type LotScreenQuery = { __typename?: 'Query', lot?: { __typename?: 'Lot', id: string, auction: Auction, lotNumber: number, sellingBranch: string, saleLocation: string, location: string, auctionDateTime: any, seller: string, preAccidentValue: string, actualCashValue: string, estimatedRepairCost: string, lastPreBid?: number | null, finalBid?: number | null, saleStatus: string, titleType: string, titleBrand: string, titleNotes: string, primaryDamage: string, secondaryDamage: string, loss: string, startCode: string, highlights: string, key: string, odometer: number, engine: string, fuelType: string, transmission: string, drivelineType: string, interiorColor: string, exteriorColor: string, buyNowPrice?: number | null, bodyStyle: string, airbagsStatus: string, cylinders?: number | null, manufacturedIn: string, sourceLastUpdated: string, createdAt: any, updatedAt: any, unprocessed: { __typename?: 'LotUnprocessed', imgs: Array<string>, status: number, soldBefore?: number | null, buyNowCloseTime?: any | null, prebidClosedTrans: string, leftTrans: string }, vehicle: { __typename?: 'Vehicle', id: string, vin?: string | null, createdAt: any, updatedAt: any, year: number, model: { __typename?: 'Model', id: string, name: string, make: { __typename?: 'Make', id: string, name: string } }, unprocessed: { __typename?: 'VehicleUnprocessed', name: string } } } | null };

export type VehicleTypesFilterQueryQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<VehicleTypeOrderByWithRelationInput> | VehicleTypeOrderByWithRelationInput>;
}>;


export type VehicleTypesFilterQueryQuery = { __typename?: 'Query', vehicleTypes: Array<{ __typename?: 'VehicleType', id: string, name: string }> };

export type MakesFilterQueryQueryVariables = Exact<{
  where?: InputMaybe<MakeWhereInput>;
  orderBy?: InputMaybe<Array<MakeOrderByWithRelationInput> | MakeOrderByWithRelationInput>;
}>;


export type MakesFilterQueryQuery = { __typename?: 'Query', makes: Array<{ __typename?: 'Make', name: string, id: string }> };

export type ModelsFilterQueryQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<ModelOrderByWithRelationInput> | ModelOrderByWithRelationInput>;
  where?: InputMaybe<ModelWhereInput>;
}>;


export type ModelsFilterQueryQuery = { __typename?: 'Query', models: Array<{ __typename?: 'Model', id: string, name: string }> };

export type QueryQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LotOrderByWithRelationInput> | LotOrderByWithRelationInput>;
  where?: InputMaybe<LotWhereInput>;
}>;


export type QueryQuery = { __typename?: 'Query', aggregateLot: { __typename?: 'AggregateLot', _count?: { __typename?: 'LotCountAggregate', id: number } | null }, lots: Array<{ __typename?: 'Lot', id: string, auction: Auction, lotNumber: number, sellingBranch: string, saleLocation: string, location: string, auctionDateTime: any, seller: string, preAccidentValue: string, actualCashValue: string, estimatedRepairCost: string, lastPreBid?: number | null, finalBid?: number | null, saleStatus: string, titleType: string, titleBrand: string, titleNotes: string, primaryDamage: string, secondaryDamage: string, loss: string, startCode: string, highlights: string, key: string, odometer: number, engine: string, fuelType: string, transmission: string, drivelineType: string, interiorColor: string, exteriorColor: string, buyNowPrice?: number | null, bodyStyle: string, airbagsStatus: string, cylinders?: number | null, manufacturedIn: string, sourceLastUpdated: string, vehicleId: string, unprocessed: { __typename?: 'LotUnprocessed', imgs: Array<string> }, vehicle: { __typename?: 'Vehicle', id: string, vin?: string | null, modelId: string, seriesId?: string | null, vehicleTypeId?: string | null, year: number, model: { __typename?: 'Model', id: string, name: string, make: { __typename?: 'Make', id: string, name: string } } } }> };


export const ProcessScreenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProcessScreen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resumableProcessMirrorWhere"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resumableProcessMirror"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resumableProcessMirrorWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"parentProcessStep"}},{"kind":"Field","name":{"kind":"Name","value":"parentProcessStepKey"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currentStep"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"log"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregateResumableProcessMirror"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"resumableProcessMirrors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProcessScreenQuery, ProcessScreenQueryVariables>;
export const Mutation2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"abortProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abortProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"abortProcessId"}}}]}]}}]} as unknown as DocumentNode<Mutation2Mutation, Mutation2MutationVariables>;
export const Mutation3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"abortProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resumeProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"abortProcessId"}}}]}]}}]} as unknown as DocumentNode<Mutation3Mutation, Mutation3MutationVariables>;
export const ProcessesScreenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProcessesScreen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregateResumableProcessMirror"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"resumableProcessMirrors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currentStep"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"log"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProcessesScreenQuery, ProcessesScreenQueryVariables>;
export const ResumableProcessMirrors12Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ResumableProcessMirrors12"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResumableProcessMirrorOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resumableProcessMirrors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currentStep"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"log"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ResumableProcessMirrors12Query, ResumableProcessMirrors12QueryVariables>;
export const LotScreenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LotScreen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LotWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"auction"}},{"kind":"Field","name":{"kind":"Name","value":"lotNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sellingBranch"}},{"kind":"Field","name":{"kind":"Name","value":"saleLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"auctionDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"seller"}},{"kind":"Field","name":{"kind":"Name","value":"preAccidentValue"}},{"kind":"Field","name":{"kind":"Name","value":"actualCashValue"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedRepairCost"}},{"kind":"Field","name":{"kind":"Name","value":"lastPreBid"}},{"kind":"Field","name":{"kind":"Name","value":"finalBid"}},{"kind":"Field","name":{"kind":"Name","value":"saleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"titleType"}},{"kind":"Field","name":{"kind":"Name","value":"titleBrand"}},{"kind":"Field","name":{"kind":"Name","value":"titleNotes"}},{"kind":"Field","name":{"kind":"Name","value":"primaryDamage"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryDamage"}},{"kind":"Field","name":{"kind":"Name","value":"loss"}},{"kind":"Field","name":{"kind":"Name","value":"startCode"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"odometer"}},{"kind":"Field","name":{"kind":"Name","value":"engine"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"drivelineType"}},{"kind":"Field","name":{"kind":"Name","value":"interiorColor"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorColor"}},{"kind":"Field","name":{"kind":"Name","value":"buyNowPrice"}},{"kind":"Field","name":{"kind":"Name","value":"bodyStyle"}},{"kind":"Field","name":{"kind":"Name","value":"airbagsStatus"}},{"kind":"Field","name":{"kind":"Name","value":"cylinders"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturedIn"}},{"kind":"Field","name":{"kind":"Name","value":"sourceLastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"unprocessed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imgs"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"soldBefore"}},{"kind":"Field","name":{"kind":"Name","value":"buyNowCloseTime"}},{"kind":"Field","name":{"kind":"Name","value":"prebidClosedTrans"}},{"kind":"Field","name":{"kind":"Name","value":"leftTrans"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vehicle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"make"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"unprocessed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]}}]} as unknown as DocumentNode<LotScreenQuery, LotScreenQueryVariables>;
export const VehicleTypesFilterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VehicleTypesFilterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VehicleTypeOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vehicleTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<VehicleTypesFilterQueryQuery, VehicleTypesFilterQueryQueryVariables>;
export const MakesFilterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MakesFilterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MakeWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MakeOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MakesFilterQueryQuery, MakesFilterQueryQueryVariables>;
export const ModelsFilterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ModelsFilterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModelOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ModelWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"models"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ModelsFilterQueryQuery, ModelsFilterQueryQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LotOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LotWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregateLot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lots"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"auction"}},{"kind":"Field","name":{"kind":"Name","value":"lotNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sellingBranch"}},{"kind":"Field","name":{"kind":"Name","value":"saleLocation"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"auctionDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"seller"}},{"kind":"Field","name":{"kind":"Name","value":"preAccidentValue"}},{"kind":"Field","name":{"kind":"Name","value":"actualCashValue"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedRepairCost"}},{"kind":"Field","name":{"kind":"Name","value":"lastPreBid"}},{"kind":"Field","name":{"kind":"Name","value":"finalBid"}},{"kind":"Field","name":{"kind":"Name","value":"saleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"titleType"}},{"kind":"Field","name":{"kind":"Name","value":"titleBrand"}},{"kind":"Field","name":{"kind":"Name","value":"titleNotes"}},{"kind":"Field","name":{"kind":"Name","value":"primaryDamage"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryDamage"}},{"kind":"Field","name":{"kind":"Name","value":"loss"}},{"kind":"Field","name":{"kind":"Name","value":"startCode"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"odometer"}},{"kind":"Field","name":{"kind":"Name","value":"engine"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"drivelineType"}},{"kind":"Field","name":{"kind":"Name","value":"interiorColor"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorColor"}},{"kind":"Field","name":{"kind":"Name","value":"buyNowPrice"}},{"kind":"Field","name":{"kind":"Name","value":"bodyStyle"}},{"kind":"Field","name":{"kind":"Name","value":"airbagsStatus"}},{"kind":"Field","name":{"kind":"Name","value":"cylinders"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturedIn"}},{"kind":"Field","name":{"kind":"Name","value":"sourceLastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"vehicleId"}},{"kind":"Field","name":{"kind":"Name","value":"unprocessed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imgs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vehicle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"modelId"}},{"kind":"Field","name":{"kind":"Name","value":"seriesId"}},{"kind":"Field","name":{"kind":"Name","value":"vehicleTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"make"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;