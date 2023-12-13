
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VehicleUnprocessed
 * 
 */
export type VehicleUnprocessed = $Result.DefaultSelection<Prisma.$VehicleUnprocessedPayload>
/**
 * Model LotUnprocessed
 * 
 */
export type LotUnprocessed = $Result.DefaultSelection<Prisma.$LotUnprocessedPayload>
/**
 * Model LogRecord
 * 
 */
export type LogRecord = $Result.DefaultSelection<Prisma.$LogRecordPayload>
/**
 * Model Make
 * 
 */
export type Make = $Result.DefaultSelection<Prisma.$MakePayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model VehicleType
 * 
 */
export type VehicleType = $Result.DefaultSelection<Prisma.$VehicleTypePayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Lot
 * 
 */
export type Lot = $Result.DefaultSelection<Prisma.$LotPayload>
/**
 * Model ResumableProcessMirror
 * 
 */
export type ResumableProcessMirror = $Result.DefaultSelection<Prisma.$ResumableProcessMirrorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Auction: {
  iaai: 'iaai',
  copart: 'copart'
};

export type Auction = (typeof Auction)[keyof typeof Auction]


export const ResumableProcessType: {
  bidCarsSearchScraper: 'bidCarsSearchScraper',
  bidCarsSearchMakeScraper: 'bidCarsSearchMakeScraper',
  bidCarsSearchModelScraper: 'bidCarsSearchModelScraper',
  bidCarsSearchOdometerFallbackScraper: 'bidCarsSearchOdometerFallbackScraper',
  bidCarsSearchResultScraper: 'bidCarsSearchResultScraper',
  bidCarsSearchResultPageScraper: 'bidCarsSearchResultPageScraper'
};

export type ResumableProcessType = (typeof ResumableProcessType)[keyof typeof ResumableProcessType]


export const Status: {
  idle: 'idle',
  pending: 'pending',
  aborted: 'aborted',
  failed: 'failed',
  succeeded: 'succeeded'
};

export type Status = (typeof Status)[keyof typeof Status]


export const LogRecordType: {
  info: 'info',
  warn: 'warn'
};

export type LogRecordType = (typeof LogRecordType)[keyof typeof LogRecordType]

}

export type Auction = $Enums.Auction

export const Auction: typeof $Enums.Auction

export type ResumableProcessType = $Enums.ResumableProcessType

export const ResumableProcessType: typeof $Enums.ResumableProcessType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type LogRecordType = $Enums.LogRecordType

export const LogRecordType: typeof $Enums.LogRecordType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Makes
 * const makes = await prisma.make.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Makes
   * const makes = await prisma.make.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.make`: Exposes CRUD operations for the **Make** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Makes
    * const makes = await prisma.make.findMany()
    * ```
    */
  get make(): Prisma.MakeDelegate<ExtArgs>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.lot`: Exposes CRUD operations for the **Lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lots
    * const lots = await prisma.lot.findMany()
    * ```
    */
  get lot(): Prisma.LotDelegate<ExtArgs>;

  /**
   * `prisma.resumableProcessMirror`: Exposes CRUD operations for the **ResumableProcessMirror** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumableProcessMirrors
    * const resumableProcessMirrors = await prisma.resumableProcessMirror.findMany()
    * ```
    */
  get resumableProcessMirror(): Prisma.ResumableProcessMirrorDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Make: 'Make',
    Model: 'Model',
    Series: 'Series',
    VehicleType: 'VehicleType',
    Vehicle: 'Vehicle',
    Lot: 'Lot',
    ResumableProcessMirror: 'ResumableProcessMirror'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'make' | 'model' | 'series' | 'vehicleType' | 'vehicle' | 'lot' | 'resumableProcessMirror'
      txIsolationLevel: never
    },
    model: {
      Make: {
        payload: Prisma.$MakePayload<ExtArgs>
        fields: Prisma.MakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findFirst: {
            args: Prisma.MakeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findMany: {
            args: Prisma.MakeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>[]
          }
          create: {
            args: Prisma.MakeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          createMany: {
            args: Prisma.MakeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MakeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          update: {
            args: Prisma.MakeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          deleteMany: {
            args: Prisma.MakeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MakeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MakeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          aggregate: {
            args: Prisma.MakeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMake>
          }
          groupBy: {
            args: Prisma.MakeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MakeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MakeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MakeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MakeCountArgs<ExtArgs>,
            result: $Utils.Optional<MakeCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ModelFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ModelAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>,
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SeriesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SeriesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>,
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      VehicleType: {
        payload: Prisma.$VehicleTypePayload<ExtArgs>
        fields: Prisma.VehicleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findFirst: {
            args: Prisma.VehicleTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findMany: {
            args: Prisma.VehicleTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          create: {
            args: Prisma.VehicleTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          createMany: {
            args: Prisma.VehicleTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VehicleTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          update: {
            args: Prisma.VehicleTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          deleteMany: {
            args: Prisma.VehicleTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VehicleTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          aggregate: {
            args: Prisma.VehicleTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVehicleType>
          }
          groupBy: {
            args: Prisma.VehicleTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VehicleTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleTypeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleTypeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.VehicleTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<VehicleTypeCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>,
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Lot: {
        payload: Prisma.$LotPayload<ExtArgs>
        fields: Prisma.LotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findFirst: {
            args: Prisma.LotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findMany: {
            args: Prisma.LotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          create: {
            args: Prisma.LotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          createMany: {
            args: Prisma.LotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          update: {
            args: Prisma.LotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          deleteMany: {
            args: Prisma.LotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          aggregate: {
            args: Prisma.LotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLot>
          }
          groupBy: {
            args: Prisma.LotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LotGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LotFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LotAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LotCountArgs<ExtArgs>,
            result: $Utils.Optional<LotCountAggregateOutputType> | number
          }
        }
      }
      ResumableProcessMirror: {
        payload: Prisma.$ResumableProcessMirrorPayload<ExtArgs>
        fields: Prisma.ResumableProcessMirrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumableProcessMirrorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumableProcessMirrorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          findFirst: {
            args: Prisma.ResumableProcessMirrorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumableProcessMirrorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          findMany: {
            args: Prisma.ResumableProcessMirrorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>[]
          }
          create: {
            args: Prisma.ResumableProcessMirrorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          createMany: {
            args: Prisma.ResumableProcessMirrorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResumableProcessMirrorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          update: {
            args: Prisma.ResumableProcessMirrorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          deleteMany: {
            args: Prisma.ResumableProcessMirrorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResumableProcessMirrorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResumableProcessMirrorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumableProcessMirrorPayload>
          }
          aggregate: {
            args: Prisma.ResumableProcessMirrorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResumableProcessMirror>
          }
          groupBy: {
            args: Prisma.ResumableProcessMirrorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResumableProcessMirrorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResumableProcessMirrorFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResumableProcessMirrorAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ResumableProcessMirrorCountArgs<ExtArgs>,
            result: $Utils.Optional<ResumableProcessMirrorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MakeCountOutputType
   */

  export type MakeCountOutputType = {
    models: number
  }

  export type MakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | MakeCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes

  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeCountOutputType
     */
    select?: MakeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }



  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    vehicles: number
    serieses: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | ModelCountOutputTypeCountVehiclesArgs
    serieses?: boolean | ModelCountOutputTypeCountSeriesesArgs
  }

  // Custom InputTypes

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountSeriesesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }



  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    vehicles: number
  }

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | SeriesCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }



  /**
   * Count Type VehicleTypeCountOutputType
   */

  export type VehicleTypeCountOutputType = {
    Vehicle: number
  }

  export type VehicleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | VehicleTypeCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes

  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleTypeCountOutputType
     */
    select?: VehicleTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }



  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    lots: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | VehicleCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
  }



  /**
   * Count Type ResumableProcessMirrorCountOutputType
   */

  export type ResumableProcessMirrorCountOutputType = {
    subProcesses: number
  }

  export type ResumableProcessMirrorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subProcesses?: boolean | ResumableProcessMirrorCountOutputTypeCountSubProcessesArgs
  }

  // Custom InputTypes

  /**
   * ResumableProcessMirrorCountOutputType without action
   */
  export type ResumableProcessMirrorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirrorCountOutputType
     */
    select?: ResumableProcessMirrorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ResumableProcessMirrorCountOutputType without action
   */
  export type ResumableProcessMirrorCountOutputTypeCountSubProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumableProcessMirrorWhereInput
  }



  /**
   * Models
   */

  /**
   * Model VehicleUnprocessed
   */





  export type VehicleUnprocessedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["vehicleUnprocessed"]>

  export type VehicleUnprocessedSelectScalar = {
    name?: boolean
  }


  export type $VehicleUnprocessedPayload = {
    name: "VehicleUnprocessed"
    objects: {}
    scalars: {
      name: string
    }
    composites: {}
  }


  type VehicleUnprocessedGetPayload<S extends boolean | null | undefined | VehicleUnprocessedDefaultArgs> = $Result.GetResult<Prisma.$VehicleUnprocessedPayload, S>





  /**
   * Fields of the VehicleUnprocessed model
   */ 
  interface VehicleUnprocessedFieldRefs {
    readonly name: FieldRef<"VehicleUnprocessed", 'String'>
  }
    

  // Custom InputTypes

  /**
   * VehicleUnprocessed without action
   */
  export type VehicleUnprocessedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleUnprocessed
     */
    select?: VehicleUnprocessedSelect<ExtArgs> | null
  }



  /**
   * Model LotUnprocessed
   */





  export type LotUnprocessedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leftTrans?: boolean
    prebidClosedTrans?: boolean
    buyNowCloseTime?: boolean
    soldBefore?: boolean
    status?: boolean
    imgs?: boolean
  }, ExtArgs["result"]["lotUnprocessed"]>

  export type LotUnprocessedSelectScalar = {
    leftTrans?: boolean
    prebidClosedTrans?: boolean
    buyNowCloseTime?: boolean
    soldBefore?: boolean
    status?: boolean
    imgs?: boolean
  }


  export type $LotUnprocessedPayload = {
    name: "LotUnprocessed"
    objects: {}
    scalars: {
      leftTrans: string
      prebidClosedTrans: string
      buyNowCloseTime: Date | null
      soldBefore: number | null
      status: number
      imgs: string[]
    }
    composites: {}
  }


  type LotUnprocessedGetPayload<S extends boolean | null | undefined | LotUnprocessedDefaultArgs> = $Result.GetResult<Prisma.$LotUnprocessedPayload, S>





  /**
   * Fields of the LotUnprocessed model
   */ 
  interface LotUnprocessedFieldRefs {
    readonly leftTrans: FieldRef<"LotUnprocessed", 'String'>
    readonly prebidClosedTrans: FieldRef<"LotUnprocessed", 'String'>
    readonly buyNowCloseTime: FieldRef<"LotUnprocessed", 'DateTime'>
    readonly soldBefore: FieldRef<"LotUnprocessed", 'Int'>
    readonly status: FieldRef<"LotUnprocessed", 'Int'>
    readonly imgs: FieldRef<"LotUnprocessed", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * LotUnprocessed without action
   */
  export type LotUnprocessedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotUnprocessed
     */
    select?: LotUnprocessedSelect<ExtArgs> | null
  }



  /**
   * Model LogRecord
   */





  export type LogRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
    value?: boolean
  }, ExtArgs["result"]["logRecord"]>

  export type LogRecordSelectScalar = {
    type?: boolean
    value?: boolean
  }


  export type $LogRecordPayload = {
    name: "LogRecord"
    objects: {}
    scalars: {
      type: $Enums.LogRecordType
      value: Prisma.JsonValue
    }
    composites: {}
  }


  type LogRecordGetPayload<S extends boolean | null | undefined | LogRecordDefaultArgs> = $Result.GetResult<Prisma.$LogRecordPayload, S>





  /**
   * Fields of the LogRecord model
   */ 
  interface LogRecordFieldRefs {
    readonly type: FieldRef<"LogRecord", 'LogRecordType'>
    readonly value: FieldRef<"LogRecord", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * LogRecord without action
   */
  export type LogRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogRecord
     */
    select?: LogRecordSelect<ExtArgs> | null
  }



  /**
   * Model Make
   */

  export type AggregateMake = {
    _count: MakeCountAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  export type MakeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MakeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MakeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MakeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MakeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MakeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Make to aggregate.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Makes
    **/
    _count?: true | MakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeMaxAggregateInputType
  }

  export type GetMakeAggregateType<T extends MakeAggregateArgs> = {
        [P in keyof T & keyof AggregateMake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMake[P]>
      : GetScalarType<T[P], AggregateMake[P]>
  }




  export type MakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeWhereInput
    orderBy?: MakeOrderByWithAggregationInput | MakeOrderByWithAggregationInput[]
    by: MakeScalarFieldEnum[] | MakeScalarFieldEnum
    having?: MakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakeCountAggregateInputType | true
    _min?: MakeMinAggregateInputType
    _max?: MakeMaxAggregateInputType
  }

  export type MakeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: MakeCountAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  type GetMakeGroupByPayload<T extends MakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeGroupByOutputType[P]>
            : GetScalarType<T[P], MakeGroupByOutputType[P]>
        }
      >
    >


  export type MakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    models?: boolean | Make$modelsArgs<ExtArgs>
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["make"]>

  export type MakeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Make$modelsArgs<ExtArgs>
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Make"
    objects: {
      models: Prisma.$ModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["make"]>
    composites: {}
  }


  type MakeGetPayload<S extends boolean | null | undefined | MakeDefaultArgs> = $Result.GetResult<Prisma.$MakePayload, S>

  type MakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MakeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MakeCountAggregateInputType | true
    }

  export interface MakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Make'], meta: { name: 'Make' } }
    /**
     * Find zero or one Make that matches the filter.
     * @param {MakeFindUniqueArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MakeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MakeFindUniqueArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Make that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MakeFindUniqueOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MakeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Make that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MakeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindFirstArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Make that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MakeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Makes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Makes
     * const makes = await prisma.make.findMany()
     * 
     * // Get first 10 Makes
     * const makes = await prisma.make.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeWithIdOnly = await prisma.make.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MakeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Make.
     * @param {MakeCreateArgs} args - Arguments to create a Make.
     * @example
     * // Create one Make
     * const Make = await prisma.make.create({
     *   data: {
     *     // ... data to create a Make
     *   }
     * })
     * 
    **/
    create<T extends MakeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MakeCreateArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Makes.
     *     @param {MakeCreateManyArgs} args - Arguments to create many Makes.
     *     @example
     *     // Create many Makes
     *     const make = await prisma.make.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MakeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Make.
     * @param {MakeDeleteArgs} args - Arguments to delete one Make.
     * @example
     * // Delete one Make
     * const Make = await prisma.make.delete({
     *   where: {
     *     // ... filter to delete one Make
     *   }
     * })
     * 
    **/
    delete<T extends MakeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MakeDeleteArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Make.
     * @param {MakeUpdateArgs} args - Arguments to update one Make.
     * @example
     * // Update one Make
     * const make = await prisma.make.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MakeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpdateArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Makes.
     * @param {MakeDeleteManyArgs} args - Arguments to filter Makes to delete.
     * @example
     * // Delete a few Makes
     * const { count } = await prisma.make.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MakeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Makes
     * const make = await prisma.make.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MakeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Make.
     * @param {MakeUpsertArgs} args - Arguments to update or create a Make.
     * @example
     * // Update or create a Make
     * const make = await prisma.make.upsert({
     *   create: {
     *     // ... data to create a Make
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Make we want to update
     *   }
     * })
    **/
    upsert<T extends MakeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpsertArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Makes that matches the filter.
     * @param {MakeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const make = await prisma.make.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MakeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Make.
     * @param {MakeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const make = await prisma.make.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MakeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeCountArgs} args - Arguments to filter Makes to count.
     * @example
     * // Count the number of Makes
     * const count = await prisma.make.count({
     *   where: {
     *     // ... the filter for the Makes we want to count
     *   }
     * })
    **/
    count<T extends MakeCountArgs>(
      args?: Subset<T, MakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MakeAggregateArgs>(args: Subset<T, MakeAggregateArgs>): Prisma.PrismaPromise<GetMakeAggregateType<T>>

    /**
     * Group by Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeGroupByArgs['orderBy'] }
        : { orderBy?: MakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Make model
   */
  readonly fields: MakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Make.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    models<T extends Make$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Make$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Make model
   */ 
  interface MakeFieldRefs {
    readonly id: FieldRef<"Make", 'String'>
    readonly name: FieldRef<"Make", 'String'>
    readonly createdAt: FieldRef<"Make", 'DateTime'>
    readonly updatedAt: FieldRef<"Make", 'DateTime'>
    readonly deletedAt: FieldRef<"Make", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Make findUnique
   */
  export type MakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make findUniqueOrThrow
   */
  export type MakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make findFirst
   */
  export type MakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make findFirstOrThrow
   */
  export type MakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make findMany
   */
  export type MakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Makes to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make create
   */
  export type MakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Make.
     */
    data: XOR<MakeCreateInput, MakeUncheckedCreateInput>
  }


  /**
   * Make createMany
   */
  export type MakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Makes.
     */
    data: MakeCreateManyInput | MakeCreateManyInput[]
  }


  /**
   * Make update
   */
  export type MakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Make.
     */
    data: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
    /**
     * Choose, which Make to update.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make updateMany
   */
  export type MakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Makes.
     */
    data: XOR<MakeUpdateManyMutationInput, MakeUncheckedUpdateManyInput>
    /**
     * Filter which Makes to update
     */
    where?: MakeWhereInput
  }


  /**
   * Make upsert
   */
  export type MakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Make to update in case it exists.
     */
    where: MakeWhereUniqueInput
    /**
     * In case the Make found by the `where` argument doesn't exist, create a new Make with this data.
     */
    create: XOR<MakeCreateInput, MakeUncheckedCreateInput>
    /**
     * In case the Make was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
  }


  /**
   * Make delete
   */
  export type MakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter which Make to delete.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make deleteMany
   */
  export type MakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Makes to delete
     */
    where?: MakeWhereInput
  }


  /**
   * Make findRaw
   */
  export type MakeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Make aggregateRaw
   */
  export type MakeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Make.models
   */
  export type Make$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Make without action
   */
  export type MakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
  }



  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    makeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    makeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    makeId: number
    name: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type ModelMinAggregateInputType = {
    id?: true
    makeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    makeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    makeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: string
    makeId: string
    name: string
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    makeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    make?: boolean | MakeDefaultArgs<ExtArgs>
    vehicles?: boolean | Model$vehiclesArgs<ExtArgs>
    serieses?: boolean | Model$seriesesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    makeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs>
    vehicles?: boolean | Model$vehiclesArgs<ExtArgs>
    serieses?: boolean | Model$seriesesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      make: Prisma.$MakePayload<ExtArgs>
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      serieses: Prisma.$SeriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      makeId: string
      name: string
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["model"]>
    composites: {}
  }


  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Model that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelCreateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Models.
     *     @param {ModelCreateManyArgs} args - Arguments to create many Models.
     *     @example
     *     // Create many Models
     *     const model = await prisma.model.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * @param {ModelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const model = await prisma.model.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ModelFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Model.
     * @param {ModelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const model = await prisma.model.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ModelAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    make<T extends MakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeDefaultArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    vehicles<T extends Model$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Model$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    serieses<T extends Model$seriesesArgs<ExtArgs> = {}>(args?: Subset<T, Model$seriesesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Model model
   */ 
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'String'>
    readonly makeId: FieldRef<"Model", 'String'>
    readonly name: FieldRef<"Model", 'String'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
    readonly deleted: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
  }


  /**
   * Model findRaw
   */
  export type ModelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Model aggregateRaw
   */
  export type ModelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Model.vehicles
   */
  export type Model$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Model.serieses
   */
  export type Model$seriesesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
  }



  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    minYear: number | null
    maxYear: number | null
  }

  export type SeriesSumAggregateOutputType = {
    minYear: number | null
    maxYear: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: string | null
    modelId: string | null
    name: string | null
    minYear: number | null
    maxYear: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: string | null
    modelId: string | null
    name: string | null
    minYear: number | null
    maxYear: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    modelId: number
    name: number
    minYear: number
    maxYear: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    minYear?: true
    maxYear?: true
  }

  export type SeriesSumAggregateInputType = {
    minYear?: true
    maxYear?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    minYear?: true
    maxYear?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    minYear?: true
    maxYear?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    minYear?: true
    maxYear?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: string
    modelId: string
    name: string
    minYear: number
    maxYear: number
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    name?: boolean
    minYear?: boolean
    maxYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    vehicles?: boolean | Series$vehiclesArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    modelId?: boolean
    name?: boolean
    minYear?: boolean
    maxYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    vehicles?: boolean | Series$vehiclesArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelId: string
      name: string
      minYear: number
      maxYear: number
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["series"]>
    composites: {}
  }


  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Series that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
    **/
    create<T extends SeriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Series.
     *     @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     *     @example
     *     // Create many Series
     *     const series = await prisma.series.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
    **/
    delete<T extends SeriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
    **/
    upsert<T extends SeriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Series that matches the filter.
     * @param {SeriesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const series = await prisma.series.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SeriesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Series.
     * @param {SeriesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const series = await prisma.series.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SeriesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    vehicles<T extends Series$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Series$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Series model
   */ 
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'String'>
    readonly modelId: FieldRef<"Series", 'String'>
    readonly name: FieldRef<"Series", 'String'>
    readonly minYear: FieldRef<"Series", 'Int'>
    readonly maxYear: FieldRef<"Series", 'Int'>
    readonly createdAt: FieldRef<"Series", 'DateTime'>
    readonly updatedAt: FieldRef<"Series", 'DateTime'>
    readonly deleted: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }


  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
  }


  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
  }


  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }


  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
  }


  /**
   * Series findRaw
   */
  export type SeriesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Series aggregateRaw
   */
  export type SeriesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Series.vehicles
   */
  export type Series$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
  }



  /**
   * Model VehicleType
   */

  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type VehicleTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleType to aggregate.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleTypeWhereInput
    orderBy?: VehicleTypeOrderByWithAggregationInput | VehicleTypeOrderByWithAggregationInput[]
    by: VehicleTypeScalarFieldEnum[] | VehicleTypeScalarFieldEnum
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type VehicleTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: VehicleTypeCountAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    Vehicle?: boolean | VehicleType$VehicleArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type VehicleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | VehicleType$VehicleArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VehicleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleType"
    objects: {
      Vehicle: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["vehicleType"]>
    composites: {}
  }


  type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeDefaultArgs> = $Result.GetResult<Prisma.$VehicleTypePayload, S>

  type VehicleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleTypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VehicleTypeCountAggregateInputType | true
    }

  export interface VehicleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleType'], meta: { name: 'VehicleType' } }
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VehicleType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeFindFirstArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
    **/
    create<T extends VehicleTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeCreateArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VehicleTypes.
     *     @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     *     @example
     *     // Create many VehicleTypes
     *     const vehicleType = await prisma.vehicleType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
    **/
    delete<T extends VehicleTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeDeleteArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeUpdateArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleTypeUpsertArgs<ExtArgs>>
    ): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * @param {VehicleTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicleType = await prisma.vehicleType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VehicleTypeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VehicleType.
     * @param {VehicleTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicleType = await prisma.vehicleType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VehicleTypeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): Prisma.PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleType model
   */
  readonly fields: VehicleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Vehicle<T extends VehicleType$VehicleArgs<ExtArgs> = {}>(args?: Subset<T, VehicleType$VehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VehicleType model
   */ 
  interface VehicleTypeFieldRefs {
    readonly id: FieldRef<"VehicleType", 'String'>
    readonly name: FieldRef<"VehicleType", 'String'>
    readonly createdAt: FieldRef<"VehicleType", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleType", 'DateTime'>
    readonly deleted: FieldRef<"VehicleType", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VehicleType findUnique
   */
  export type VehicleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType findFirst
   */
  export type VehicleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }


  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }


  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleTypes to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }


  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleType.
     */
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }


  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
  }


  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleType.
     */
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     */
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
  }


  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     */
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     */
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }


  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter which VehicleType to delete.
     */
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleTypes to delete
     */
    where?: VehicleTypeWhereInput
  }


  /**
   * VehicleType findRaw
   */
  export type VehicleTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * VehicleType aggregateRaw
   */
  export type VehicleTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * VehicleType.Vehicle
   */
  export type VehicleType$VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * VehicleType without action
   */
  export type VehicleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
  }



  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vin: string | null
    modelId: string | null
    seriesId: string | null
    vehicleTypeId: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vin: string | null
    modelId: string | null
    seriesId: string | null
    vehicleTypeId: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vin: number
    modelId: number
    seriesId: number
    vehicleTypeId: number
    year: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vin?: true
    modelId?: true
    seriesId?: true
    vehicleTypeId?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vin?: true
    modelId?: true
    seriesId?: true
    vehicleTypeId?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vin?: true
    modelId?: true
    seriesId?: true
    vehicleTypeId?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vin: string | null
    modelId: string
    seriesId: string | null
    vehicleTypeId: string | null
    year: number
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    modelId?: boolean
    seriesId?: boolean
    vehicleTypeId?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    unprocessed?: boolean | VehicleUnprocessedDefaultArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
    series?: boolean | Vehicle$seriesArgs<ExtArgs>
    vehicleType?: boolean | Vehicle$vehicleTypeArgs<ExtArgs>
    lots?: boolean | Vehicle$lotsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vin?: boolean
    modelId?: boolean
    seriesId?: boolean
    vehicleTypeId?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    series?: boolean | Vehicle$seriesArgs<ExtArgs>
    vehicleType?: boolean | Vehicle$vehicleTypeArgs<ExtArgs>
    lots?: boolean | Vehicle$lotsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      series: Prisma.$SeriesPayload<ExtArgs> | null
      vehicleType: Prisma.$VehicleTypePayload<ExtArgs> | null
      lots: Prisma.$LotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vin: string | null
      modelId: string
      seriesId: string | null
      vehicleTypeId: string | null
      year: number
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {
      unprocessed: Prisma.$VehicleUnprocessedPayload
    }
  }


  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
    **/
    create<T extends VehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vehicles.
     *     @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
    **/
    delete<T extends VehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * @param {VehicleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VehicleFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vehicle.
     * @param {VehicleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VehicleAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    series<T extends Vehicle$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$seriesArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    vehicleType<T extends Vehicle$vehicleTypeArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$vehicleTypeArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    lots<T extends Vehicle$lotsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly modelId: FieldRef<"Vehicle", 'String'>
    readonly seriesId: FieldRef<"Vehicle", 'String'>
    readonly vehicleTypeId: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
    readonly deleted: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }


  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }


  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }


  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle findRaw
   */
  export type VehicleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Vehicle aggregateRaw
   */
  export type VehicleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Vehicle.series
   */
  export type Vehicle$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
  }


  /**
   * Vehicle.vehicleType
   */
  export type Vehicle$vehicleTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    where?: VehicleTypeWhereInput
  }


  /**
   * Vehicle.lots
   */
  export type Vehicle$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    where?: LotWhereInput
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    cursor?: LotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }


  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
  }



  /**
   * Model Lot
   */

  export type AggregateLot = {
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  export type LotAvgAggregateOutputType = {
    lotNumber: number | null
    lastPreBid: number | null
    finalBid: number | null
    odometer: number | null
    buyNowPrice: number | null
    cylinders: number | null
  }

  export type LotSumAggregateOutputType = {
    lotNumber: number | null
    lastPreBid: number | null
    finalBid: number | null
    odometer: number | null
    buyNowPrice: number | null
    cylinders: number | null
  }

  export type LotMinAggregateOutputType = {
    id: string | null
    auction: $Enums.Auction | null
    lotNumber: number | null
    sellingBranch: string | null
    saleLocation: string | null
    location: string | null
    auctionDateTime: Date | null
    seller: string | null
    preAccidentValue: string | null
    actualCashValue: string | null
    estimatedRepairCost: string | null
    lastPreBid: number | null
    finalBid: number | null
    saleStatus: string | null
    titleType: string | null
    titleBrand: string | null
    titleNotes: string | null
    primaryDamage: string | null
    secondaryDamage: string | null
    loss: string | null
    startCode: string | null
    highlights: string | null
    key: string | null
    odometer: number | null
    engine: string | null
    fuelType: string | null
    transmission: string | null
    drivelineType: string | null
    interiorColor: string | null
    exteriorColor: string | null
    buyNowPrice: number | null
    bodyStyle: string | null
    airbagsStatus: string | null
    cylinders: number | null
    manufacturedIn: string | null
    sourceLastUpdated: string | null
    vehicleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type LotMaxAggregateOutputType = {
    id: string | null
    auction: $Enums.Auction | null
    lotNumber: number | null
    sellingBranch: string | null
    saleLocation: string | null
    location: string | null
    auctionDateTime: Date | null
    seller: string | null
    preAccidentValue: string | null
    actualCashValue: string | null
    estimatedRepairCost: string | null
    lastPreBid: number | null
    finalBid: number | null
    saleStatus: string | null
    titleType: string | null
    titleBrand: string | null
    titleNotes: string | null
    primaryDamage: string | null
    secondaryDamage: string | null
    loss: string | null
    startCode: string | null
    highlights: string | null
    key: string | null
    odometer: number | null
    engine: string | null
    fuelType: string | null
    transmission: string | null
    drivelineType: string | null
    interiorColor: string | null
    exteriorColor: string | null
    buyNowPrice: number | null
    bodyStyle: string | null
    airbagsStatus: string | null
    cylinders: number | null
    manufacturedIn: string | null
    sourceLastUpdated: string | null
    vehicleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type LotCountAggregateOutputType = {
    id: number
    auction: number
    lotNumber: number
    sellingBranch: number
    saleLocation: number
    location: number
    auctionDateTime: number
    seller: number
    preAccidentValue: number
    actualCashValue: number
    estimatedRepairCost: number
    lastPreBid: number
    finalBid: number
    saleStatus: number
    titleType: number
    titleBrand: number
    titleNotes: number
    primaryDamage: number
    secondaryDamage: number
    loss: number
    startCode: number
    highlights: number
    key: number
    odometer: number
    engine: number
    fuelType: number
    transmission: number
    drivelineType: number
    interiorColor: number
    exteriorColor: number
    buyNowPrice: number
    bodyStyle: number
    airbagsStatus: number
    cylinders: number
    manufacturedIn: number
    sourceLastUpdated: number
    vehicleId: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type LotAvgAggregateInputType = {
    lotNumber?: true
    lastPreBid?: true
    finalBid?: true
    odometer?: true
    buyNowPrice?: true
    cylinders?: true
  }

  export type LotSumAggregateInputType = {
    lotNumber?: true
    lastPreBid?: true
    finalBid?: true
    odometer?: true
    buyNowPrice?: true
    cylinders?: true
  }

  export type LotMinAggregateInputType = {
    id?: true
    auction?: true
    lotNumber?: true
    sellingBranch?: true
    saleLocation?: true
    location?: true
    auctionDateTime?: true
    seller?: true
    preAccidentValue?: true
    actualCashValue?: true
    estimatedRepairCost?: true
    lastPreBid?: true
    finalBid?: true
    saleStatus?: true
    titleType?: true
    titleBrand?: true
    titleNotes?: true
    primaryDamage?: true
    secondaryDamage?: true
    loss?: true
    startCode?: true
    highlights?: true
    key?: true
    odometer?: true
    engine?: true
    fuelType?: true
    transmission?: true
    drivelineType?: true
    interiorColor?: true
    exteriorColor?: true
    buyNowPrice?: true
    bodyStyle?: true
    airbagsStatus?: true
    cylinders?: true
    manufacturedIn?: true
    sourceLastUpdated?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type LotMaxAggregateInputType = {
    id?: true
    auction?: true
    lotNumber?: true
    sellingBranch?: true
    saleLocation?: true
    location?: true
    auctionDateTime?: true
    seller?: true
    preAccidentValue?: true
    actualCashValue?: true
    estimatedRepairCost?: true
    lastPreBid?: true
    finalBid?: true
    saleStatus?: true
    titleType?: true
    titleBrand?: true
    titleNotes?: true
    primaryDamage?: true
    secondaryDamage?: true
    loss?: true
    startCode?: true
    highlights?: true
    key?: true
    odometer?: true
    engine?: true
    fuelType?: true
    transmission?: true
    drivelineType?: true
    interiorColor?: true
    exteriorColor?: true
    buyNowPrice?: true
    bodyStyle?: true
    airbagsStatus?: true
    cylinders?: true
    manufacturedIn?: true
    sourceLastUpdated?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type LotCountAggregateInputType = {
    id?: true
    auction?: true
    lotNumber?: true
    sellingBranch?: true
    saleLocation?: true
    location?: true
    auctionDateTime?: true
    seller?: true
    preAccidentValue?: true
    actualCashValue?: true
    estimatedRepairCost?: true
    lastPreBid?: true
    finalBid?: true
    saleStatus?: true
    titleType?: true
    titleBrand?: true
    titleNotes?: true
    primaryDamage?: true
    secondaryDamage?: true
    loss?: true
    startCode?: true
    highlights?: true
    key?: true
    odometer?: true
    engine?: true
    fuelType?: true
    transmission?: true
    drivelineType?: true
    interiorColor?: true
    exteriorColor?: true
    buyNowPrice?: true
    bodyStyle?: true
    airbagsStatus?: true
    cylinders?: true
    manufacturedIn?: true
    sourceLastUpdated?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type LotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lot to aggregate.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lots
    **/
    _count?: true | LotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotMaxAggregateInputType
  }

  export type GetLotAggregateType<T extends LotAggregateArgs> = {
        [P in keyof T & keyof AggregateLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLot[P]>
      : GetScalarType<T[P], AggregateLot[P]>
  }




  export type LotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
    orderBy?: LotOrderByWithAggregationInput | LotOrderByWithAggregationInput[]
    by: LotScalarFieldEnum[] | LotScalarFieldEnum
    having?: LotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotCountAggregateInputType | true
    _avg?: LotAvgAggregateInputType
    _sum?: LotSumAggregateInputType
    _min?: LotMinAggregateInputType
    _max?: LotMaxAggregateInputType
  }

  export type LotGroupByOutputType = {
    id: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid: number | null
    finalBid: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    vehicleId: string
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  type GetLotGroupByPayload<T extends LotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotGroupByOutputType[P]>
            : GetScalarType<T[P], LotGroupByOutputType[P]>
        }
      >
    >


  export type LotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auction?: boolean
    lotNumber?: boolean
    sellingBranch?: boolean
    saleLocation?: boolean
    location?: boolean
    auctionDateTime?: boolean
    seller?: boolean
    preAccidentValue?: boolean
    actualCashValue?: boolean
    estimatedRepairCost?: boolean
    lastPreBid?: boolean
    finalBid?: boolean
    saleStatus?: boolean
    titleType?: boolean
    titleBrand?: boolean
    titleNotes?: boolean
    primaryDamage?: boolean
    secondaryDamage?: boolean
    loss?: boolean
    startCode?: boolean
    highlights?: boolean
    key?: boolean
    odometer?: boolean
    engine?: boolean
    fuelType?: boolean
    transmission?: boolean
    drivelineType?: boolean
    interiorColor?: boolean
    exteriorColor?: boolean
    buyNowPrice?: boolean
    bodyStyle?: boolean
    airbagsStatus?: boolean
    cylinders?: boolean
    manufacturedIn?: boolean
    sourceLastUpdated?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    unprocessed?: boolean | LotUnprocessedDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectScalar = {
    id?: boolean
    auction?: boolean
    lotNumber?: boolean
    sellingBranch?: boolean
    saleLocation?: boolean
    location?: boolean
    auctionDateTime?: boolean
    seller?: boolean
    preAccidentValue?: boolean
    actualCashValue?: boolean
    estimatedRepairCost?: boolean
    lastPreBid?: boolean
    finalBid?: boolean
    saleStatus?: boolean
    titleType?: boolean
    titleBrand?: boolean
    titleNotes?: boolean
    primaryDamage?: boolean
    secondaryDamage?: boolean
    loss?: boolean
    startCode?: boolean
    highlights?: boolean
    key?: boolean
    odometer?: boolean
    engine?: boolean
    fuelType?: boolean
    transmission?: boolean
    drivelineType?: boolean
    interiorColor?: boolean
    exteriorColor?: boolean
    buyNowPrice?: boolean
    bodyStyle?: boolean
    airbagsStatus?: boolean
    cylinders?: boolean
    manufacturedIn?: boolean
    sourceLastUpdated?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type LotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }


  export type $LotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lot"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auction: $Enums.Auction
      lotNumber: number
      sellingBranch: string
      saleLocation: string
      location: string
      auctionDateTime: Date
      seller: string
      preAccidentValue: string
      actualCashValue: string
      estimatedRepairCost: string
      lastPreBid: number | null
      finalBid: number | null
      saleStatus: string
      titleType: string
      titleBrand: string
      titleNotes: string
      primaryDamage: string
      secondaryDamage: string
      loss: string
      startCode: string
      highlights: string
      key: string
      odometer: number
      engine: string
      fuelType: string
      transmission: string
      drivelineType: string
      interiorColor: string
      exteriorColor: string
      buyNowPrice: number | null
      bodyStyle: string
      airbagsStatus: string
      cylinders: number | null
      manufacturedIn: string
      sourceLastUpdated: string
      vehicleId: string
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["lot"]>
    composites: {
      unprocessed: Prisma.$LotUnprocessedPayload
    }
  }


  type LotGetPayload<S extends boolean | null | undefined | LotDefaultArgs> = $Result.GetResult<Prisma.$LotPayload, S>

  type LotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LotFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LotCountAggregateInputType | true
    }

  export interface LotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lot'], meta: { name: 'Lot' } }
    /**
     * Find zero or one Lot that matches the filter.
     * @param {LotFindUniqueArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LotFindUniqueArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LotFindUniqueOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LotFindFirstArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lots
     * const lots = await prisma.lot.findMany()
     * 
     * // Get first 10 Lots
     * const lots = await prisma.lot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotWithIdOnly = await prisma.lot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lot.
     * @param {LotCreateArgs} args - Arguments to create a Lot.
     * @example
     * // Create one Lot
     * const Lot = await prisma.lot.create({
     *   data: {
     *     // ... data to create a Lot
     *   }
     * })
     * 
    **/
    create<T extends LotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LotCreateArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lots.
     *     @param {LotCreateManyArgs} args - Arguments to create many Lots.
     *     @example
     *     // Create many Lots
     *     const lot = await prisma.lot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lot.
     * @param {LotDeleteArgs} args - Arguments to delete one Lot.
     * @example
     * // Delete one Lot
     * const Lot = await prisma.lot.delete({
     *   where: {
     *     // ... filter to delete one Lot
     *   }
     * })
     * 
    **/
    delete<T extends LotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LotDeleteArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lot.
     * @param {LotUpdateArgs} args - Arguments to update one Lot.
     * @example
     * // Update one Lot
     * const lot = await prisma.lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LotUpdateArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lots.
     * @param {LotDeleteManyArgs} args - Arguments to filter Lots to delete.
     * @example
     * // Delete a few Lots
     * const { count } = await prisma.lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lot.
     * @param {LotUpsertArgs} args - Arguments to update or create a Lot.
     * @example
     * // Update or create a Lot
     * const lot = await prisma.lot.upsert({
     *   create: {
     *     // ... data to create a Lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lot we want to update
     *   }
     * })
    **/
    upsert<T extends LotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LotUpsertArgs<ExtArgs>>
    ): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Lots that matches the filter.
     * @param {LotFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lot = await prisma.lot.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LotFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Lot.
     * @param {LotAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lot = await prisma.lot.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LotAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotCountArgs} args - Arguments to filter Lots to count.
     * @example
     * // Count the number of Lots
     * const count = await prisma.lot.count({
     *   where: {
     *     // ... the filter for the Lots we want to count
     *   }
     * })
    **/
    count<T extends LotCountArgs>(
      args?: Subset<T, LotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotAggregateArgs>(args: Subset<T, LotAggregateArgs>): Prisma.PrismaPromise<GetLotAggregateType<T>>

    /**
     * Group by Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotGroupByArgs['orderBy'] }
        : { orderBy?: LotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lot model
   */
  readonly fields: LotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lot model
   */ 
  interface LotFieldRefs {
    readonly id: FieldRef<"Lot", 'String'>
    readonly auction: FieldRef<"Lot", 'Auction'>
    readonly lotNumber: FieldRef<"Lot", 'Int'>
    readonly sellingBranch: FieldRef<"Lot", 'String'>
    readonly saleLocation: FieldRef<"Lot", 'String'>
    readonly location: FieldRef<"Lot", 'String'>
    readonly auctionDateTime: FieldRef<"Lot", 'DateTime'>
    readonly seller: FieldRef<"Lot", 'String'>
    readonly preAccidentValue: FieldRef<"Lot", 'String'>
    readonly actualCashValue: FieldRef<"Lot", 'String'>
    readonly estimatedRepairCost: FieldRef<"Lot", 'String'>
    readonly lastPreBid: FieldRef<"Lot", 'Float'>
    readonly finalBid: FieldRef<"Lot", 'Int'>
    readonly saleStatus: FieldRef<"Lot", 'String'>
    readonly titleType: FieldRef<"Lot", 'String'>
    readonly titleBrand: FieldRef<"Lot", 'String'>
    readonly titleNotes: FieldRef<"Lot", 'String'>
    readonly primaryDamage: FieldRef<"Lot", 'String'>
    readonly secondaryDamage: FieldRef<"Lot", 'String'>
    readonly loss: FieldRef<"Lot", 'String'>
    readonly startCode: FieldRef<"Lot", 'String'>
    readonly highlights: FieldRef<"Lot", 'String'>
    readonly key: FieldRef<"Lot", 'String'>
    readonly odometer: FieldRef<"Lot", 'Int'>
    readonly engine: FieldRef<"Lot", 'String'>
    readonly fuelType: FieldRef<"Lot", 'String'>
    readonly transmission: FieldRef<"Lot", 'String'>
    readonly drivelineType: FieldRef<"Lot", 'String'>
    readonly interiorColor: FieldRef<"Lot", 'String'>
    readonly exteriorColor: FieldRef<"Lot", 'String'>
    readonly buyNowPrice: FieldRef<"Lot", 'Int'>
    readonly bodyStyle: FieldRef<"Lot", 'String'>
    readonly airbagsStatus: FieldRef<"Lot", 'String'>
    readonly cylinders: FieldRef<"Lot", 'Int'>
    readonly manufacturedIn: FieldRef<"Lot", 'String'>
    readonly sourceLastUpdated: FieldRef<"Lot", 'String'>
    readonly vehicleId: FieldRef<"Lot", 'String'>
    readonly createdAt: FieldRef<"Lot", 'DateTime'>
    readonly updatedAt: FieldRef<"Lot", 'DateTime'>
    readonly deleted: FieldRef<"Lot", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Lot findUnique
   */
  export type LotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }


  /**
   * Lot findUniqueOrThrow
   */
  export type LotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }


  /**
   * Lot findFirst
   */
  export type LotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }


  /**
   * Lot findFirstOrThrow
   */
  export type LotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }


  /**
   * Lot findMany
   */
  export type LotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lots to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }


  /**
   * Lot create
   */
  export type LotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to create a Lot.
     */
    data: XOR<LotCreateInput, LotUncheckedCreateInput>
  }


  /**
   * Lot createMany
   */
  export type LotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
  }


  /**
   * Lot update
   */
  export type LotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to update a Lot.
     */
    data: XOR<LotUpdateInput, LotUncheckedUpdateInput>
    /**
     * Choose, which Lot to update.
     */
    where: LotWhereUniqueInput
  }


  /**
   * Lot updateMany
   */
  export type LotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
  }


  /**
   * Lot upsert
   */
  export type LotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The filter to search for the Lot to update in case it exists.
     */
    where: LotWhereUniqueInput
    /**
     * In case the Lot found by the `where` argument doesn't exist, create a new Lot with this data.
     */
    create: XOR<LotCreateInput, LotUncheckedCreateInput>
    /**
     * In case the Lot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotUpdateInput, LotUncheckedUpdateInput>
  }


  /**
   * Lot delete
   */
  export type LotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter which Lot to delete.
     */
    where: LotWhereUniqueInput
  }


  /**
   * Lot deleteMany
   */
  export type LotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lots to delete
     */
    where?: LotWhereInput
  }


  /**
   * Lot findRaw
   */
  export type LotFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Lot aggregateRaw
   */
  export type LotAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Lot without action
   */
  export type LotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LotInclude<ExtArgs> | null
  }



  /**
   * Model ResumableProcessMirror
   */

  export type AggregateResumableProcessMirror = {
    _count: ResumableProcessMirrorCountAggregateOutputType | null
    _avg: ResumableProcessMirrorAvgAggregateOutputType | null
    _sum: ResumableProcessMirrorSumAggregateOutputType | null
    _min: ResumableProcessMirrorMinAggregateOutputType | null
    _max: ResumableProcessMirrorMaxAggregateOutputType | null
  }

  export type ResumableProcessMirrorAvgAggregateOutputType = {
    parentProcessStep: number | null
    currentStep: number | null
  }

  export type ResumableProcessMirrorSumAggregateOutputType = {
    parentProcessStep: number | null
    currentStep: number | null
  }

  export type ResumableProcessMirrorMinAggregateOutputType = {
    id: string | null
    parentProcessId: string | null
    parentProcessStep: number | null
    parentProcessStepKey: string | null
    type: $Enums.ResumableProcessType | null
    status: $Enums.Status | null
    currentStep: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type ResumableProcessMirrorMaxAggregateOutputType = {
    id: string | null
    parentProcessId: string | null
    parentProcessStep: number | null
    parentProcessStepKey: string | null
    type: $Enums.ResumableProcessType | null
    status: $Enums.Status | null
    currentStep: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type ResumableProcessMirrorCountAggregateOutputType = {
    id: number
    parentProcessId: number
    parentProcessStep: number
    parentProcessStepKey: number
    type: number
    status: number
    currentStep: number
    props: number
    state: number
    result: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type ResumableProcessMirrorAvgAggregateInputType = {
    parentProcessStep?: true
    currentStep?: true
  }

  export type ResumableProcessMirrorSumAggregateInputType = {
    parentProcessStep?: true
    currentStep?: true
  }

  export type ResumableProcessMirrorMinAggregateInputType = {
    id?: true
    parentProcessId?: true
    parentProcessStep?: true
    parentProcessStepKey?: true
    type?: true
    status?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type ResumableProcessMirrorMaxAggregateInputType = {
    id?: true
    parentProcessId?: true
    parentProcessStep?: true
    parentProcessStepKey?: true
    type?: true
    status?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type ResumableProcessMirrorCountAggregateInputType = {
    id?: true
    parentProcessId?: true
    parentProcessStep?: true
    parentProcessStepKey?: true
    type?: true
    status?: true
    currentStep?: true
    props?: true
    state?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type ResumableProcessMirrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumableProcessMirror to aggregate.
     */
    where?: ResumableProcessMirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumableProcessMirrors to fetch.
     */
    orderBy?: ResumableProcessMirrorOrderByWithRelationInput | ResumableProcessMirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumableProcessMirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumableProcessMirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumableProcessMirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumableProcessMirrors
    **/
    _count?: true | ResumableProcessMirrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumableProcessMirrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumableProcessMirrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumableProcessMirrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumableProcessMirrorMaxAggregateInputType
  }

  export type GetResumableProcessMirrorAggregateType<T extends ResumableProcessMirrorAggregateArgs> = {
        [P in keyof T & keyof AggregateResumableProcessMirror]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumableProcessMirror[P]>
      : GetScalarType<T[P], AggregateResumableProcessMirror[P]>
  }




  export type ResumableProcessMirrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumableProcessMirrorWhereInput
    orderBy?: ResumableProcessMirrorOrderByWithAggregationInput | ResumableProcessMirrorOrderByWithAggregationInput[]
    by: ResumableProcessMirrorScalarFieldEnum[] | ResumableProcessMirrorScalarFieldEnum
    having?: ResumableProcessMirrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumableProcessMirrorCountAggregateInputType | true
    _avg?: ResumableProcessMirrorAvgAggregateInputType
    _sum?: ResumableProcessMirrorSumAggregateInputType
    _min?: ResumableProcessMirrorMinAggregateInputType
    _max?: ResumableProcessMirrorMaxAggregateInputType
  }

  export type ResumableProcessMirrorGroupByOutputType = {
    id: string
    parentProcessId: string | null
    parentProcessStep: number | null
    parentProcessStepKey: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep: number
    props: JsonValue
    state: JsonValue
    result: JsonValue | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: ResumableProcessMirrorCountAggregateOutputType | null
    _avg: ResumableProcessMirrorAvgAggregateOutputType | null
    _sum: ResumableProcessMirrorSumAggregateOutputType | null
    _min: ResumableProcessMirrorMinAggregateOutputType | null
    _max: ResumableProcessMirrorMaxAggregateOutputType | null
  }

  type GetResumableProcessMirrorGroupByPayload<T extends ResumableProcessMirrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumableProcessMirrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumableProcessMirrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumableProcessMirrorGroupByOutputType[P]>
            : GetScalarType<T[P], ResumableProcessMirrorGroupByOutputType[P]>
        }
      >
    >


  export type ResumableProcessMirrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentProcessId?: boolean
    parentProcessStep?: boolean
    parentProcessStepKey?: boolean
    type?: boolean
    status?: boolean
    currentStep?: boolean
    props?: boolean
    state?: boolean
    result?: boolean
    log?: boolean | LogRecordDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    parentProcess?: boolean | ResumableProcessMirror$parentProcessArgs<ExtArgs>
    subProcesses?: boolean | ResumableProcessMirror$subProcessesArgs<ExtArgs>
    _count?: boolean | ResumableProcessMirrorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumableProcessMirror"]>

  export type ResumableProcessMirrorSelectScalar = {
    id?: boolean
    parentProcessId?: boolean
    parentProcessStep?: boolean
    parentProcessStepKey?: boolean
    type?: boolean
    status?: boolean
    currentStep?: boolean
    props?: boolean
    state?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type ResumableProcessMirrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentProcess?: boolean | ResumableProcessMirror$parentProcessArgs<ExtArgs>
    subProcesses?: boolean | ResumableProcessMirror$subProcessesArgs<ExtArgs>
    _count?: boolean | ResumableProcessMirrorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResumableProcessMirrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumableProcessMirror"
    objects: {
      parentProcess: Prisma.$ResumableProcessMirrorPayload<ExtArgs> | null
      subProcesses: Prisma.$ResumableProcessMirrorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentProcessId: string | null
      parentProcessStep: number | null
      parentProcessStepKey: string | null
      type: $Enums.ResumableProcessType
      status: $Enums.Status
      currentStep: number
      props: Prisma.JsonValue
      state: Prisma.JsonValue
      result: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["resumableProcessMirror"]>
    composites: {
      log: Prisma.$LogRecordPayload[]
    }
  }


  type ResumableProcessMirrorGetPayload<S extends boolean | null | undefined | ResumableProcessMirrorDefaultArgs> = $Result.GetResult<Prisma.$ResumableProcessMirrorPayload, S>

  type ResumableProcessMirrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumableProcessMirrorFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ResumableProcessMirrorCountAggregateInputType | true
    }

  export interface ResumableProcessMirrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumableProcessMirror'], meta: { name: 'ResumableProcessMirror' } }
    /**
     * Find zero or one ResumableProcessMirror that matches the filter.
     * @param {ResumableProcessMirrorFindUniqueArgs} args - Arguments to find a ResumableProcessMirror
     * @example
     * // Get one ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResumableProcessMirrorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorFindUniqueArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResumableProcessMirror that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResumableProcessMirrorFindUniqueOrThrowArgs} args - Arguments to find a ResumableProcessMirror
     * @example
     * // Get one ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResumableProcessMirrorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResumableProcessMirror that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorFindFirstArgs} args - Arguments to find a ResumableProcessMirror
     * @example
     * // Get one ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResumableProcessMirrorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorFindFirstArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResumableProcessMirror that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorFindFirstOrThrowArgs} args - Arguments to find a ResumableProcessMirror
     * @example
     * // Get one ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResumableProcessMirrorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResumableProcessMirrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumableProcessMirrors
     * const resumableProcessMirrors = await prisma.resumableProcessMirror.findMany()
     * 
     * // Get first 10 ResumableProcessMirrors
     * const resumableProcessMirrors = await prisma.resumableProcessMirror.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumableProcessMirrorWithIdOnly = await prisma.resumableProcessMirror.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResumableProcessMirrorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResumableProcessMirror.
     * @param {ResumableProcessMirrorCreateArgs} args - Arguments to create a ResumableProcessMirror.
     * @example
     * // Create one ResumableProcessMirror
     * const ResumableProcessMirror = await prisma.resumableProcessMirror.create({
     *   data: {
     *     // ... data to create a ResumableProcessMirror
     *   }
     * })
     * 
    **/
    create<T extends ResumableProcessMirrorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorCreateArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResumableProcessMirrors.
     *     @param {ResumableProcessMirrorCreateManyArgs} args - Arguments to create many ResumableProcessMirrors.
     *     @example
     *     // Create many ResumableProcessMirrors
     *     const resumableProcessMirror = await prisma.resumableProcessMirror.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResumableProcessMirrorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResumableProcessMirror.
     * @param {ResumableProcessMirrorDeleteArgs} args - Arguments to delete one ResumableProcessMirror.
     * @example
     * // Delete one ResumableProcessMirror
     * const ResumableProcessMirror = await prisma.resumableProcessMirror.delete({
     *   where: {
     *     // ... filter to delete one ResumableProcessMirror
     *   }
     * })
     * 
    **/
    delete<T extends ResumableProcessMirrorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorDeleteArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResumableProcessMirror.
     * @param {ResumableProcessMirrorUpdateArgs} args - Arguments to update one ResumableProcessMirror.
     * @example
     * // Update one ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResumableProcessMirrorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorUpdateArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResumableProcessMirrors.
     * @param {ResumableProcessMirrorDeleteManyArgs} args - Arguments to filter ResumableProcessMirrors to delete.
     * @example
     * // Delete a few ResumableProcessMirrors
     * const { count } = await prisma.resumableProcessMirror.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResumableProcessMirrorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumableProcessMirrorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumableProcessMirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumableProcessMirrors
     * const resumableProcessMirror = await prisma.resumableProcessMirror.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResumableProcessMirrorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResumableProcessMirror.
     * @param {ResumableProcessMirrorUpsertArgs} args - Arguments to update or create a ResumableProcessMirror.
     * @example
     * // Update or create a ResumableProcessMirror
     * const resumableProcessMirror = await prisma.resumableProcessMirror.upsert({
     *   create: {
     *     // ... data to create a ResumableProcessMirror
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumableProcessMirror we want to update
     *   }
     * })
    **/
    upsert<T extends ResumableProcessMirrorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResumableProcessMirrorUpsertArgs<ExtArgs>>
    ): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ResumableProcessMirrors that matches the filter.
     * @param {ResumableProcessMirrorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resumableProcessMirror = await prisma.resumableProcessMirror.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ResumableProcessMirrorFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResumableProcessMirror.
     * @param {ResumableProcessMirrorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resumableProcessMirror = await prisma.resumableProcessMirror.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ResumableProcessMirrorAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ResumableProcessMirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorCountArgs} args - Arguments to filter ResumableProcessMirrors to count.
     * @example
     * // Count the number of ResumableProcessMirrors
     * const count = await prisma.resumableProcessMirror.count({
     *   where: {
     *     // ... the filter for the ResumableProcessMirrors we want to count
     *   }
     * })
    **/
    count<T extends ResumableProcessMirrorCountArgs>(
      args?: Subset<T, ResumableProcessMirrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumableProcessMirrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumableProcessMirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumableProcessMirrorAggregateArgs>(args: Subset<T, ResumableProcessMirrorAggregateArgs>): Prisma.PrismaPromise<GetResumableProcessMirrorAggregateType<T>>

    /**
     * Group by ResumableProcessMirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumableProcessMirrorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumableProcessMirrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumableProcessMirrorGroupByArgs['orderBy'] }
        : { orderBy?: ResumableProcessMirrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumableProcessMirrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumableProcessMirrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumableProcessMirror model
   */
  readonly fields: ResumableProcessMirrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumableProcessMirror.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumableProcessMirrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parentProcess<T extends ResumableProcessMirror$parentProcessArgs<ExtArgs> = {}>(args?: Subset<T, ResumableProcessMirror$parentProcessArgs<ExtArgs>>): Prisma__ResumableProcessMirrorClient<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    subProcesses<T extends ResumableProcessMirror$subProcessesArgs<ExtArgs> = {}>(args?: Subset<T, ResumableProcessMirror$subProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumableProcessMirrorPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ResumableProcessMirror model
   */ 
  interface ResumableProcessMirrorFieldRefs {
    readonly id: FieldRef<"ResumableProcessMirror", 'String'>
    readonly parentProcessId: FieldRef<"ResumableProcessMirror", 'String'>
    readonly parentProcessStep: FieldRef<"ResumableProcessMirror", 'Int'>
    readonly parentProcessStepKey: FieldRef<"ResumableProcessMirror", 'String'>
    readonly type: FieldRef<"ResumableProcessMirror", 'ResumableProcessType'>
    readonly status: FieldRef<"ResumableProcessMirror", 'Status'>
    readonly currentStep: FieldRef<"ResumableProcessMirror", 'Int'>
    readonly props: FieldRef<"ResumableProcessMirror", 'Json'>
    readonly state: FieldRef<"ResumableProcessMirror", 'Json'>
    readonly result: FieldRef<"ResumableProcessMirror", 'Json'>
    readonly createdAt: FieldRef<"ResumableProcessMirror", 'DateTime'>
    readonly updatedAt: FieldRef<"ResumableProcessMirror", 'DateTime'>
    readonly deleted: FieldRef<"ResumableProcessMirror", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ResumableProcessMirror findUnique
   */
  export type ResumableProcessMirrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter, which ResumableProcessMirror to fetch.
     */
    where: ResumableProcessMirrorWhereUniqueInput
  }


  /**
   * ResumableProcessMirror findUniqueOrThrow
   */
  export type ResumableProcessMirrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter, which ResumableProcessMirror to fetch.
     */
    where: ResumableProcessMirrorWhereUniqueInput
  }


  /**
   * ResumableProcessMirror findFirst
   */
  export type ResumableProcessMirrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter, which ResumableProcessMirror to fetch.
     */
    where?: ResumableProcessMirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumableProcessMirrors to fetch.
     */
    orderBy?: ResumableProcessMirrorOrderByWithRelationInput | ResumableProcessMirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumableProcessMirrors.
     */
    cursor?: ResumableProcessMirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumableProcessMirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumableProcessMirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumableProcessMirrors.
     */
    distinct?: ResumableProcessMirrorScalarFieldEnum | ResumableProcessMirrorScalarFieldEnum[]
  }


  /**
   * ResumableProcessMirror findFirstOrThrow
   */
  export type ResumableProcessMirrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter, which ResumableProcessMirror to fetch.
     */
    where?: ResumableProcessMirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumableProcessMirrors to fetch.
     */
    orderBy?: ResumableProcessMirrorOrderByWithRelationInput | ResumableProcessMirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumableProcessMirrors.
     */
    cursor?: ResumableProcessMirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumableProcessMirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumableProcessMirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumableProcessMirrors.
     */
    distinct?: ResumableProcessMirrorScalarFieldEnum | ResumableProcessMirrorScalarFieldEnum[]
  }


  /**
   * ResumableProcessMirror findMany
   */
  export type ResumableProcessMirrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter, which ResumableProcessMirrors to fetch.
     */
    where?: ResumableProcessMirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumableProcessMirrors to fetch.
     */
    orderBy?: ResumableProcessMirrorOrderByWithRelationInput | ResumableProcessMirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumableProcessMirrors.
     */
    cursor?: ResumableProcessMirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumableProcessMirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumableProcessMirrors.
     */
    skip?: number
    distinct?: ResumableProcessMirrorScalarFieldEnum | ResumableProcessMirrorScalarFieldEnum[]
  }


  /**
   * ResumableProcessMirror create
   */
  export type ResumableProcessMirrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumableProcessMirror.
     */
    data: XOR<ResumableProcessMirrorCreateInput, ResumableProcessMirrorUncheckedCreateInput>
  }


  /**
   * ResumableProcessMirror createMany
   */
  export type ResumableProcessMirrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumableProcessMirrors.
     */
    data: ResumableProcessMirrorCreateManyInput | ResumableProcessMirrorCreateManyInput[]
  }


  /**
   * ResumableProcessMirror update
   */
  export type ResumableProcessMirrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumableProcessMirror.
     */
    data: XOR<ResumableProcessMirrorUpdateInput, ResumableProcessMirrorUncheckedUpdateInput>
    /**
     * Choose, which ResumableProcessMirror to update.
     */
    where: ResumableProcessMirrorWhereUniqueInput
  }


  /**
   * ResumableProcessMirror updateMany
   */
  export type ResumableProcessMirrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumableProcessMirrors.
     */
    data: XOR<ResumableProcessMirrorUpdateManyMutationInput, ResumableProcessMirrorUncheckedUpdateManyInput>
    /**
     * Filter which ResumableProcessMirrors to update
     */
    where?: ResumableProcessMirrorWhereInput
  }


  /**
   * ResumableProcessMirror upsert
   */
  export type ResumableProcessMirrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumableProcessMirror to update in case it exists.
     */
    where: ResumableProcessMirrorWhereUniqueInput
    /**
     * In case the ResumableProcessMirror found by the `where` argument doesn't exist, create a new ResumableProcessMirror with this data.
     */
    create: XOR<ResumableProcessMirrorCreateInput, ResumableProcessMirrorUncheckedCreateInput>
    /**
     * In case the ResumableProcessMirror was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumableProcessMirrorUpdateInput, ResumableProcessMirrorUncheckedUpdateInput>
  }


  /**
   * ResumableProcessMirror delete
   */
  export type ResumableProcessMirrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    /**
     * Filter which ResumableProcessMirror to delete.
     */
    where: ResumableProcessMirrorWhereUniqueInput
  }


  /**
   * ResumableProcessMirror deleteMany
   */
  export type ResumableProcessMirrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumableProcessMirrors to delete
     */
    where?: ResumableProcessMirrorWhereInput
  }


  /**
   * ResumableProcessMirror findRaw
   */
  export type ResumableProcessMirrorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ResumableProcessMirror aggregateRaw
   */
  export type ResumableProcessMirrorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ResumableProcessMirror.parentProcess
   */
  export type ResumableProcessMirror$parentProcessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    where?: ResumableProcessMirrorWhereInput
  }


  /**
   * ResumableProcessMirror.subProcesses
   */
  export type ResumableProcessMirror$subProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
    where?: ResumableProcessMirrorWhereInput
    orderBy?: ResumableProcessMirrorOrderByWithRelationInput | ResumableProcessMirrorOrderByWithRelationInput[]
    cursor?: ResumableProcessMirrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumableProcessMirrorScalarFieldEnum | ResumableProcessMirrorScalarFieldEnum[]
  }


  /**
   * ResumableProcessMirror without action
   */
  export type ResumableProcessMirrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumableProcessMirror
     */
    select?: ResumableProcessMirrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResumableProcessMirrorInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const MakeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MakeScalarFieldEnum = (typeof MakeScalarFieldEnum)[keyof typeof MakeScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    makeId: 'makeId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    name: 'name',
    minYear: 'minYear',
    maxYear: 'maxYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vin: 'vin',
    modelId: 'modelId',
    seriesId: 'seriesId',
    vehicleTypeId: 'vehicleTypeId',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const LotScalarFieldEnum: {
    id: 'id',
    auction: 'auction',
    lotNumber: 'lotNumber',
    sellingBranch: 'sellingBranch',
    saleLocation: 'saleLocation',
    location: 'location',
    auctionDateTime: 'auctionDateTime',
    seller: 'seller',
    preAccidentValue: 'preAccidentValue',
    actualCashValue: 'actualCashValue',
    estimatedRepairCost: 'estimatedRepairCost',
    lastPreBid: 'lastPreBid',
    finalBid: 'finalBid',
    saleStatus: 'saleStatus',
    titleType: 'titleType',
    titleBrand: 'titleBrand',
    titleNotes: 'titleNotes',
    primaryDamage: 'primaryDamage',
    secondaryDamage: 'secondaryDamage',
    loss: 'loss',
    startCode: 'startCode',
    highlights: 'highlights',
    key: 'key',
    odometer: 'odometer',
    engine: 'engine',
    fuelType: 'fuelType',
    transmission: 'transmission',
    drivelineType: 'drivelineType',
    interiorColor: 'interiorColor',
    exteriorColor: 'exteriorColor',
    buyNowPrice: 'buyNowPrice',
    bodyStyle: 'bodyStyle',
    airbagsStatus: 'airbagsStatus',
    cylinders: 'cylinders',
    manufacturedIn: 'manufacturedIn',
    sourceLastUpdated: 'sourceLastUpdated',
    vehicleId: 'vehicleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type LotScalarFieldEnum = (typeof LotScalarFieldEnum)[keyof typeof LotScalarFieldEnum]


  export const ResumableProcessMirrorScalarFieldEnum: {
    id: 'id',
    parentProcessId: 'parentProcessId',
    parentProcessStep: 'parentProcessStep',
    parentProcessStepKey: 'parentProcessStepKey',
    type: 'type',
    status: 'status',
    currentStep: 'currentStep',
    props: 'props',
    state: 'state',
    result: 'result',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type ResumableProcessMirrorScalarFieldEnum = (typeof ResumableProcessMirrorScalarFieldEnum)[keyof typeof ResumableProcessMirrorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Auction'
   */
  export type EnumAuctionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Auction'>
    


  /**
   * Reference to a field of type 'Auction[]'
   */
  export type ListEnumAuctionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Auction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ResumableProcessType'
   */
  export type EnumResumableProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumableProcessType'>
    


  /**
   * Reference to a field of type 'ResumableProcessType[]'
   */
  export type ListEnumResumableProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResumableProcessType[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'LogRecordType'
   */
  export type EnumLogRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogRecordType'>
    


  /**
   * Reference to a field of type 'LogRecordType[]'
   */
  export type ListEnumLogRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogRecordType[]'>
    
  /**
   * Deep Input Types
   */


  export type MakeWhereInput = {
    AND?: MakeWhereInput | MakeWhereInput[]
    OR?: MakeWhereInput[]
    NOT?: MakeWhereInput | MakeWhereInput[]
    id?: StringFilter<"Make"> | string
    name?: StringFilter<"Make"> | string
    createdAt?: DateTimeFilter<"Make"> | Date | string
    updatedAt?: DateTimeFilter<"Make"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Make"> | Date | string | null
    models?: ModelListRelationFilter
  }

  export type MakeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    models?: ModelOrderByRelationAggregateInput
  }

  export type MakeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MakeWhereInput | MakeWhereInput[]
    OR?: MakeWhereInput[]
    NOT?: MakeWhereInput | MakeWhereInput[]
    createdAt?: DateTimeFilter<"Make"> | Date | string
    updatedAt?: DateTimeFilter<"Make"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Make"> | Date | string | null
    models?: ModelListRelationFilter
  }, "id" | "name">

  export type MakeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: MakeCountOrderByAggregateInput
    _max?: MakeMaxOrderByAggregateInput
    _min?: MakeMinOrderByAggregateInput
  }

  export type MakeScalarWhereWithAggregatesInput = {
    AND?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[]
    OR?: MakeScalarWhereWithAggregatesInput[]
    NOT?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Make"> | string
    name?: StringWithAggregatesFilter<"Make"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Make"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Make"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Make"> | Date | string | null
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: StringFilter<"Model"> | string
    makeId?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    deleted?: DateTimeNullableFilter<"Model"> | Date | string | null
    make?: XOR<MakeRelationFilter, MakeWhereInput>
    vehicles?: VehicleListRelationFilter
    serieses?: SeriesListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    makeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    make?: MakeOrderByWithRelationInput
    vehicles?: VehicleOrderByRelationAggregateInput
    serieses?: SeriesOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    makeId_name?: ModelMakeIdNameCompoundUniqueInput
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    makeId?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    deleted?: DateTimeNullableFilter<"Model"> | Date | string | null
    make?: XOR<MakeRelationFilter, MakeWhereInput>
    vehicles?: VehicleListRelationFilter
    serieses?: SeriesListRelationFilter
  }, "id" | "makeId_name">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    makeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Model"> | string
    makeId?: StringWithAggregatesFilter<"Model"> | string
    name?: StringWithAggregatesFilter<"Model"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"Model"> | Date | string | null
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: StringFilter<"Series"> | string
    modelId?: StringFilter<"Series"> | string
    name?: StringFilter<"Series"> | string
    minYear?: IntFilter<"Series"> | number
    maxYear?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    deleted?: DateTimeNullableFilter<"Series"> | Date | string | null
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    vehicles?: VehicleListRelationFilter
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    minYear?: SortOrder
    maxYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    model?: ModelOrderByWithRelationInput
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    modelId_name?: SeriesModelIdNameCompoundUniqueInput
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    modelId?: StringFilter<"Series"> | string
    name?: StringFilter<"Series"> | string
    minYear?: IntFilter<"Series"> | number
    maxYear?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    deleted?: DateTimeNullableFilter<"Series"> | Date | string | null
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    vehicles?: VehicleListRelationFilter
  }, "id" | "modelId_name">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    minYear?: SortOrder
    maxYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Series"> | string
    modelId?: StringWithAggregatesFilter<"Series"> | string
    name?: StringWithAggregatesFilter<"Series"> | string
    minYear?: IntWithAggregatesFilter<"Series"> | number
    maxYear?: IntWithAggregatesFilter<"Series"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"Series"> | Date | string | null
  }

  export type VehicleTypeWhereInput = {
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    id?: StringFilter<"VehicleType"> | string
    name?: StringFilter<"VehicleType"> | string
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    deleted?: DateTimeNullableFilter<"VehicleType"> | Date | string | null
    Vehicle?: VehicleListRelationFilter
  }

  export type VehicleTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    Vehicle?: VehicleOrderByRelationAggregateInput
  }

  export type VehicleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    deleted?: DateTimeNullableFilter<"VehicleType"> | Date | string | null
    Vehicle?: VehicleListRelationFilter
  }, "id" | "name">

  export type VehicleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    OR?: VehicleTypeScalarWhereWithAggregatesInput[]
    NOT?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleType"> | string
    name?: StringWithAggregatesFilter<"VehicleType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"VehicleType"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vin?: StringNullableFilter<"Vehicle"> | string | null
    modelId?: StringFilter<"Vehicle"> | string
    seriesId?: StringNullableFilter<"Vehicle"> | string | null
    vehicleTypeId?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deleted?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedCompositeFilter, VehicleUnprocessedObjectEqualityInput>
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    series?: XOR<SeriesNullableRelationFilter, SeriesWhereInput> | null
    vehicleType?: XOR<VehicleTypeNullableRelationFilter, VehicleTypeWhereInput> | null
    lots?: LotListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vin?: SortOrder
    modelId?: SortOrder
    seriesId?: SortOrder
    vehicleTypeId?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    unprocessed?: VehicleUnprocessedOrderByInput
    model?: ModelOrderByWithRelationInput
    series?: SeriesOrderByWithRelationInput
    vehicleType?: VehicleTypeOrderByWithRelationInput
    lots?: LotOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vin?: StringNullableFilter<"Vehicle"> | string | null
    modelId?: StringFilter<"Vehicle"> | string
    seriesId?: StringNullableFilter<"Vehicle"> | string | null
    vehicleTypeId?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deleted?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedCompositeFilter, VehicleUnprocessedObjectEqualityInput>
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    series?: XOR<SeriesNullableRelationFilter, SeriesWhereInput> | null
    vehicleType?: XOR<VehicleTypeNullableRelationFilter, VehicleTypeWhereInput> | null
    lots?: LotListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vin?: SortOrder
    modelId?: SortOrder
    seriesId?: SortOrder
    vehicleTypeId?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vin?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    modelId?: StringWithAggregatesFilter<"Vehicle"> | string
    seriesId?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    vehicleTypeId?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
  }

  export type LotWhereInput = {
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    id?: StringFilter<"Lot"> | string
    auction?: EnumAuctionFilter<"Lot"> | $Enums.Auction
    lotNumber?: IntFilter<"Lot"> | number
    sellingBranch?: StringFilter<"Lot"> | string
    saleLocation?: StringFilter<"Lot"> | string
    location?: StringFilter<"Lot"> | string
    auctionDateTime?: DateTimeFilter<"Lot"> | Date | string
    seller?: StringFilter<"Lot"> | string
    preAccidentValue?: StringFilter<"Lot"> | string
    actualCashValue?: StringFilter<"Lot"> | string
    estimatedRepairCost?: StringFilter<"Lot"> | string
    lastPreBid?: FloatNullableFilter<"Lot"> | number | null
    finalBid?: IntNullableFilter<"Lot"> | number | null
    saleStatus?: StringFilter<"Lot"> | string
    titleType?: StringFilter<"Lot"> | string
    titleBrand?: StringFilter<"Lot"> | string
    titleNotes?: StringFilter<"Lot"> | string
    primaryDamage?: StringFilter<"Lot"> | string
    secondaryDamage?: StringFilter<"Lot"> | string
    loss?: StringFilter<"Lot"> | string
    startCode?: StringFilter<"Lot"> | string
    highlights?: StringFilter<"Lot"> | string
    key?: StringFilter<"Lot"> | string
    odometer?: IntFilter<"Lot"> | number
    engine?: StringFilter<"Lot"> | string
    fuelType?: StringFilter<"Lot"> | string
    transmission?: StringFilter<"Lot"> | string
    drivelineType?: StringFilter<"Lot"> | string
    interiorColor?: StringFilter<"Lot"> | string
    exteriorColor?: StringFilter<"Lot"> | string
    buyNowPrice?: IntNullableFilter<"Lot"> | number | null
    bodyStyle?: StringFilter<"Lot"> | string
    airbagsStatus?: StringFilter<"Lot"> | string
    cylinders?: IntNullableFilter<"Lot"> | number | null
    manufacturedIn?: StringFilter<"Lot"> | string
    sourceLastUpdated?: StringFilter<"Lot"> | string
    vehicleId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
    deleted?: DateTimeNullableFilter<"Lot"> | Date | string | null
    unprocessed?: XOR<LotUnprocessedCompositeFilter, LotUnprocessedObjectEqualityInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }

  export type LotOrderByWithRelationInput = {
    id?: SortOrder
    auction?: SortOrder
    lotNumber?: SortOrder
    sellingBranch?: SortOrder
    saleLocation?: SortOrder
    location?: SortOrder
    auctionDateTime?: SortOrder
    seller?: SortOrder
    preAccidentValue?: SortOrder
    actualCashValue?: SortOrder
    estimatedRepairCost?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    saleStatus?: SortOrder
    titleType?: SortOrder
    titleBrand?: SortOrder
    titleNotes?: SortOrder
    primaryDamage?: SortOrder
    secondaryDamage?: SortOrder
    loss?: SortOrder
    startCode?: SortOrder
    highlights?: SortOrder
    key?: SortOrder
    odometer?: SortOrder
    engine?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    drivelineType?: SortOrder
    interiorColor?: SortOrder
    exteriorColor?: SortOrder
    buyNowPrice?: SortOrder
    bodyStyle?: SortOrder
    airbagsStatus?: SortOrder
    cylinders?: SortOrder
    manufacturedIn?: SortOrder
    sourceLastUpdated?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    unprocessed?: LotUnprocessedOrderByInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type LotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auction_lotNumber?: LotAuctionLotNumberCompoundUniqueInput
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    auction?: EnumAuctionFilter<"Lot"> | $Enums.Auction
    lotNumber?: IntFilter<"Lot"> | number
    sellingBranch?: StringFilter<"Lot"> | string
    saleLocation?: StringFilter<"Lot"> | string
    location?: StringFilter<"Lot"> | string
    auctionDateTime?: DateTimeFilter<"Lot"> | Date | string
    seller?: StringFilter<"Lot"> | string
    preAccidentValue?: StringFilter<"Lot"> | string
    actualCashValue?: StringFilter<"Lot"> | string
    estimatedRepairCost?: StringFilter<"Lot"> | string
    lastPreBid?: FloatNullableFilter<"Lot"> | number | null
    finalBid?: IntNullableFilter<"Lot"> | number | null
    saleStatus?: StringFilter<"Lot"> | string
    titleType?: StringFilter<"Lot"> | string
    titleBrand?: StringFilter<"Lot"> | string
    titleNotes?: StringFilter<"Lot"> | string
    primaryDamage?: StringFilter<"Lot"> | string
    secondaryDamage?: StringFilter<"Lot"> | string
    loss?: StringFilter<"Lot"> | string
    startCode?: StringFilter<"Lot"> | string
    highlights?: StringFilter<"Lot"> | string
    key?: StringFilter<"Lot"> | string
    odometer?: IntFilter<"Lot"> | number
    engine?: StringFilter<"Lot"> | string
    fuelType?: StringFilter<"Lot"> | string
    transmission?: StringFilter<"Lot"> | string
    drivelineType?: StringFilter<"Lot"> | string
    interiorColor?: StringFilter<"Lot"> | string
    exteriorColor?: StringFilter<"Lot"> | string
    buyNowPrice?: IntNullableFilter<"Lot"> | number | null
    bodyStyle?: StringFilter<"Lot"> | string
    airbagsStatus?: StringFilter<"Lot"> | string
    cylinders?: IntNullableFilter<"Lot"> | number | null
    manufacturedIn?: StringFilter<"Lot"> | string
    sourceLastUpdated?: StringFilter<"Lot"> | string
    vehicleId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
    deleted?: DateTimeNullableFilter<"Lot"> | Date | string | null
    unprocessed?: XOR<LotUnprocessedCompositeFilter, LotUnprocessedObjectEqualityInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }, "id" | "auction_lotNumber">

  export type LotOrderByWithAggregationInput = {
    id?: SortOrder
    auction?: SortOrder
    lotNumber?: SortOrder
    sellingBranch?: SortOrder
    saleLocation?: SortOrder
    location?: SortOrder
    auctionDateTime?: SortOrder
    seller?: SortOrder
    preAccidentValue?: SortOrder
    actualCashValue?: SortOrder
    estimatedRepairCost?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    saleStatus?: SortOrder
    titleType?: SortOrder
    titleBrand?: SortOrder
    titleNotes?: SortOrder
    primaryDamage?: SortOrder
    secondaryDamage?: SortOrder
    loss?: SortOrder
    startCode?: SortOrder
    highlights?: SortOrder
    key?: SortOrder
    odometer?: SortOrder
    engine?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    drivelineType?: SortOrder
    interiorColor?: SortOrder
    exteriorColor?: SortOrder
    buyNowPrice?: SortOrder
    bodyStyle?: SortOrder
    airbagsStatus?: SortOrder
    cylinders?: SortOrder
    manufacturedIn?: SortOrder
    sourceLastUpdated?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: LotCountOrderByAggregateInput
    _avg?: LotAvgOrderByAggregateInput
    _max?: LotMaxOrderByAggregateInput
    _min?: LotMinOrderByAggregateInput
    _sum?: LotSumOrderByAggregateInput
  }

  export type LotScalarWhereWithAggregatesInput = {
    AND?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    OR?: LotScalarWhereWithAggregatesInput[]
    NOT?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lot"> | string
    auction?: EnumAuctionWithAggregatesFilter<"Lot"> | $Enums.Auction
    lotNumber?: IntWithAggregatesFilter<"Lot"> | number
    sellingBranch?: StringWithAggregatesFilter<"Lot"> | string
    saleLocation?: StringWithAggregatesFilter<"Lot"> | string
    location?: StringWithAggregatesFilter<"Lot"> | string
    auctionDateTime?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    seller?: StringWithAggregatesFilter<"Lot"> | string
    preAccidentValue?: StringWithAggregatesFilter<"Lot"> | string
    actualCashValue?: StringWithAggregatesFilter<"Lot"> | string
    estimatedRepairCost?: StringWithAggregatesFilter<"Lot"> | string
    lastPreBid?: FloatNullableWithAggregatesFilter<"Lot"> | number | null
    finalBid?: IntNullableWithAggregatesFilter<"Lot"> | number | null
    saleStatus?: StringWithAggregatesFilter<"Lot"> | string
    titleType?: StringWithAggregatesFilter<"Lot"> | string
    titleBrand?: StringWithAggregatesFilter<"Lot"> | string
    titleNotes?: StringWithAggregatesFilter<"Lot"> | string
    primaryDamage?: StringWithAggregatesFilter<"Lot"> | string
    secondaryDamage?: StringWithAggregatesFilter<"Lot"> | string
    loss?: StringWithAggregatesFilter<"Lot"> | string
    startCode?: StringWithAggregatesFilter<"Lot"> | string
    highlights?: StringWithAggregatesFilter<"Lot"> | string
    key?: StringWithAggregatesFilter<"Lot"> | string
    odometer?: IntWithAggregatesFilter<"Lot"> | number
    engine?: StringWithAggregatesFilter<"Lot"> | string
    fuelType?: StringWithAggregatesFilter<"Lot"> | string
    transmission?: StringWithAggregatesFilter<"Lot"> | string
    drivelineType?: StringWithAggregatesFilter<"Lot"> | string
    interiorColor?: StringWithAggregatesFilter<"Lot"> | string
    exteriorColor?: StringWithAggregatesFilter<"Lot"> | string
    buyNowPrice?: IntNullableWithAggregatesFilter<"Lot"> | number | null
    bodyStyle?: StringWithAggregatesFilter<"Lot"> | string
    airbagsStatus?: StringWithAggregatesFilter<"Lot"> | string
    cylinders?: IntNullableWithAggregatesFilter<"Lot"> | number | null
    manufacturedIn?: StringWithAggregatesFilter<"Lot"> | string
    sourceLastUpdated?: StringWithAggregatesFilter<"Lot"> | string
    vehicleId?: StringWithAggregatesFilter<"Lot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"Lot"> | Date | string | null
  }

  export type ResumableProcessMirrorWhereInput = {
    AND?: ResumableProcessMirrorWhereInput | ResumableProcessMirrorWhereInput[]
    OR?: ResumableProcessMirrorWhereInput[]
    NOT?: ResumableProcessMirrorWhereInput | ResumableProcessMirrorWhereInput[]
    id?: StringFilter<"ResumableProcessMirror"> | string
    parentProcessId?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    parentProcessStep?: IntNullableFilter<"ResumableProcessMirror"> | number | null
    parentProcessStepKey?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    type?: EnumResumableProcessTypeFilter<"ResumableProcessMirror"> | $Enums.ResumableProcessType
    status?: EnumStatusFilter<"ResumableProcessMirror"> | $Enums.Status
    currentStep?: IntFilter<"ResumableProcessMirror"> | number
    props?: JsonFilter<"ResumableProcessMirror">
    state?: JsonFilter<"ResumableProcessMirror">
    result?: JsonNullableFilter<"ResumableProcessMirror">
    log?: LogRecordCompositeListFilter | LogRecordObjectEqualityInput[]
    createdAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    updatedAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    deleted?: DateTimeNullableFilter<"ResumableProcessMirror"> | Date | string | null
    parentProcess?: XOR<ResumableProcessMirrorNullableRelationFilter, ResumableProcessMirrorWhereInput> | null
    subProcesses?: ResumableProcessMirrorListRelationFilter
  }

  export type ResumableProcessMirrorOrderByWithRelationInput = {
    id?: SortOrder
    parentProcessId?: SortOrder
    parentProcessStep?: SortOrder
    parentProcessStepKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    props?: SortOrder
    state?: SortOrder
    result?: SortOrder
    log?: LogRecordOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    parentProcess?: ResumableProcessMirrorOrderByWithRelationInput
    subProcesses?: ResumableProcessMirrorOrderByRelationAggregateInput
  }

  export type ResumableProcessMirrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumableProcessMirrorWhereInput | ResumableProcessMirrorWhereInput[]
    OR?: ResumableProcessMirrorWhereInput[]
    NOT?: ResumableProcessMirrorWhereInput | ResumableProcessMirrorWhereInput[]
    parentProcessId?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    parentProcessStep?: IntNullableFilter<"ResumableProcessMirror"> | number | null
    parentProcessStepKey?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    type?: EnumResumableProcessTypeFilter<"ResumableProcessMirror"> | $Enums.ResumableProcessType
    status?: EnumStatusFilter<"ResumableProcessMirror"> | $Enums.Status
    currentStep?: IntFilter<"ResumableProcessMirror"> | number
    props?: JsonFilter<"ResumableProcessMirror">
    state?: JsonFilter<"ResumableProcessMirror">
    result?: JsonNullableFilter<"ResumableProcessMirror">
    log?: LogRecordCompositeListFilter | LogRecordObjectEqualityInput[]
    createdAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    updatedAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    deleted?: DateTimeNullableFilter<"ResumableProcessMirror"> | Date | string | null
    parentProcess?: XOR<ResumableProcessMirrorNullableRelationFilter, ResumableProcessMirrorWhereInput> | null
    subProcesses?: ResumableProcessMirrorListRelationFilter
  }, "id">

  export type ResumableProcessMirrorOrderByWithAggregationInput = {
    id?: SortOrder
    parentProcessId?: SortOrder
    parentProcessStep?: SortOrder
    parentProcessStepKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    props?: SortOrder
    state?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: ResumableProcessMirrorCountOrderByAggregateInput
    _avg?: ResumableProcessMirrorAvgOrderByAggregateInput
    _max?: ResumableProcessMirrorMaxOrderByAggregateInput
    _min?: ResumableProcessMirrorMinOrderByAggregateInput
    _sum?: ResumableProcessMirrorSumOrderByAggregateInput
  }

  export type ResumableProcessMirrorScalarWhereWithAggregatesInput = {
    AND?: ResumableProcessMirrorScalarWhereWithAggregatesInput | ResumableProcessMirrorScalarWhereWithAggregatesInput[]
    OR?: ResumableProcessMirrorScalarWhereWithAggregatesInput[]
    NOT?: ResumableProcessMirrorScalarWhereWithAggregatesInput | ResumableProcessMirrorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumableProcessMirror"> | string
    parentProcessId?: StringNullableWithAggregatesFilter<"ResumableProcessMirror"> | string | null
    parentProcessStep?: IntNullableWithAggregatesFilter<"ResumableProcessMirror"> | number | null
    parentProcessStepKey?: StringNullableWithAggregatesFilter<"ResumableProcessMirror"> | string | null
    type?: EnumResumableProcessTypeWithAggregatesFilter<"ResumableProcessMirror"> | $Enums.ResumableProcessType
    status?: EnumStatusWithAggregatesFilter<"ResumableProcessMirror"> | $Enums.Status
    currentStep?: IntWithAggregatesFilter<"ResumableProcessMirror"> | number
    props?: JsonWithAggregatesFilter<"ResumableProcessMirror">
    state?: JsonWithAggregatesFilter<"ResumableProcessMirror">
    result?: JsonNullableWithAggregatesFilter<"ResumableProcessMirror">
    createdAt?: DateTimeWithAggregatesFilter<"ResumableProcessMirror"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResumableProcessMirror"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"ResumableProcessMirror"> | Date | string | null
  }

  export type MakeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    models?: ModelCreateNestedManyWithoutMakeInput
  }

  export type MakeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    models?: ModelUncheckedCreateNestedManyWithoutMakeInput
  }

  export type MakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    models?: ModelUpdateManyWithoutMakeNestedInput
  }

  export type MakeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    models?: ModelUncheckedUpdateManyWithoutMakeNestedInput
  }

  export type MakeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MakeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModelCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    make: MakeCreateNestedOneWithoutModelsInput
    vehicles?: VehicleCreateNestedManyWithoutModelInput
    serieses?: SeriesCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    makeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
    serieses?: SeriesUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
    serieses?: SeriesUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    makeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
    serieses?: SeriesUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    makeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type ModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModelUncheckedUpdateManyInput = {
    makeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeriesCreateInput = {
    id?: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    model: ModelCreateNestedOneWithoutSeriesesInput
    vehicles?: VehicleCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: string
    modelId: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutSeriesesNestedInput
    vehicles?: VehicleUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesCreateManyInput = {
    id?: string
    modelId: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type SeriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeriesUncheckedUpdateManyInput = {
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    Vehicle?: VehicleCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUncheckedUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type VehicleTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    vin?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    model: ModelCreateNestedOneWithoutVehiclesInput
    series?: SeriesCreateNestedOneWithoutVehiclesInput
    vehicleType?: VehicleTypeCreateNestedOneWithoutVehicleInput
    lots?: LotCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    vin?: string | null
    modelId: string
    seriesId?: string | null
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    model?: ModelUpdateOneRequiredWithoutVehiclesNestedInput
    series?: SeriesUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneWithoutVehicleNestedInput
    lots?: LotUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    vin?: string | null
    modelId: string
    seriesId?: string | null
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleUpdateManyMutationInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleUncheckedUpdateManyInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type LotCreateInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
    vehicle: VehicleCreateNestedOneWithoutLotsInput
  }

  export type LotUncheckedCreateInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    vehicleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUpdateInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
    vehicle?: VehicleUpdateOneRequiredWithoutLotsNestedInput
  }

  export type LotUncheckedUpdateInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotCreateManyInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    vehicleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUpdateManyMutationInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUncheckedUpdateManyInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type ResumableProcessMirrorCreateInput = {
    id?: string
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    parentProcess?: ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput
    subProcesses?: ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput
  }

  export type ResumableProcessMirrorUncheckedCreateInput = {
    id?: string
    parentProcessId?: string | null
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    subProcesses?: ResumableProcessMirrorUncheckedCreateNestedManyWithoutParentProcessInput
  }

  export type ResumableProcessMirrorUpdateInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentProcess?: ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput
    subProcesses?: ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput
  }

  export type ResumableProcessMirrorUncheckedUpdateInput = {
    parentProcessId?: NullableStringFieldUpdateOperationsInput | string | null
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subProcesses?: ResumableProcessMirrorUncheckedUpdateManyWithoutParentProcessNestedInput
  }

  export type ResumableProcessMirrorCreateManyInput = {
    id?: string
    parentProcessId?: string | null
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type ResumableProcessMirrorUpdateManyMutationInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResumableProcessMirrorUncheckedUpdateManyInput = {
    parentProcessId?: NullableStringFieldUpdateOperationsInput | string | null
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MakeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MakeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MakeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MakeRelationFilter = {
    is?: MakeWhereInput
    isNot?: MakeWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type SeriesListRelationFilter = {
    every?: SeriesWhereInput
    some?: SeriesWhereInput
    none?: SeriesWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelMakeIdNameCompoundUniqueInput = {
    makeId: string
    name: string
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ModelRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type SeriesModelIdNameCompoundUniqueInput = {
    modelId: string
    name: string
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    minYear?: SortOrder
    maxYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    minYear?: SortOrder
    maxYear?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    minYear?: SortOrder
    maxYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    minYear?: SortOrder
    maxYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    minYear?: SortOrder
    maxYear?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type VehicleUnprocessedCompositeFilter = {
    equals?: VehicleUnprocessedObjectEqualityInput
    is?: VehicleUnprocessedWhereInput
    isNot?: VehicleUnprocessedWhereInput
  }

  export type VehicleUnprocessedObjectEqualityInput = {
    name: string
  }

  export type SeriesNullableRelationFilter = {
    is?: SeriesWhereInput | null
    isNot?: SeriesWhereInput | null
  }

  export type VehicleTypeNullableRelationFilter = {
    is?: VehicleTypeWhereInput | null
    isNot?: VehicleTypeWhereInput | null
  }

  export type LotListRelationFilter = {
    every?: LotWhereInput
    some?: LotWhereInput
    none?: LotWhereInput
  }

  export type VehicleUnprocessedOrderByInput = {
    name?: SortOrder
  }

  export type LotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    modelId?: SortOrder
    seriesId?: SortOrder
    vehicleTypeId?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    modelId?: SortOrder
    seriesId?: SortOrder
    vehicleTypeId?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    modelId?: SortOrder
    seriesId?: SortOrder
    vehicleTypeId?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumAuctionFilter<$PrismaModel = never> = {
    equals?: $Enums.Auction | EnumAuctionFieldRefInput<$PrismaModel>
    in?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionFilter<$PrismaModel> | $Enums.Auction
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type LotUnprocessedCompositeFilter = {
    equals?: LotUnprocessedObjectEqualityInput
    is?: LotUnprocessedWhereInput
    isNot?: LotUnprocessedWhereInput
  }

  export type LotUnprocessedObjectEqualityInput = {
    leftTrans: string
    prebidClosedTrans: string
    buyNowCloseTime?: Date | string | null
    soldBefore?: number | null
    status: number
    imgs?: string[]
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type LotUnprocessedOrderByInput = {
    leftTrans?: SortOrder
    prebidClosedTrans?: SortOrder
    buyNowCloseTime?: SortOrder
    soldBefore?: SortOrder
    status?: SortOrder
    imgs?: SortOrder
  }

  export type LotAuctionLotNumberCompoundUniqueInput = {
    auction: $Enums.Auction
    lotNumber: number
  }

  export type LotCountOrderByAggregateInput = {
    id?: SortOrder
    auction?: SortOrder
    lotNumber?: SortOrder
    sellingBranch?: SortOrder
    saleLocation?: SortOrder
    location?: SortOrder
    auctionDateTime?: SortOrder
    seller?: SortOrder
    preAccidentValue?: SortOrder
    actualCashValue?: SortOrder
    estimatedRepairCost?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    saleStatus?: SortOrder
    titleType?: SortOrder
    titleBrand?: SortOrder
    titleNotes?: SortOrder
    primaryDamage?: SortOrder
    secondaryDamage?: SortOrder
    loss?: SortOrder
    startCode?: SortOrder
    highlights?: SortOrder
    key?: SortOrder
    odometer?: SortOrder
    engine?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    drivelineType?: SortOrder
    interiorColor?: SortOrder
    exteriorColor?: SortOrder
    buyNowPrice?: SortOrder
    bodyStyle?: SortOrder
    airbagsStatus?: SortOrder
    cylinders?: SortOrder
    manufacturedIn?: SortOrder
    sourceLastUpdated?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type LotAvgOrderByAggregateInput = {
    lotNumber?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    odometer?: SortOrder
    buyNowPrice?: SortOrder
    cylinders?: SortOrder
  }

  export type LotMaxOrderByAggregateInput = {
    id?: SortOrder
    auction?: SortOrder
    lotNumber?: SortOrder
    sellingBranch?: SortOrder
    saleLocation?: SortOrder
    location?: SortOrder
    auctionDateTime?: SortOrder
    seller?: SortOrder
    preAccidentValue?: SortOrder
    actualCashValue?: SortOrder
    estimatedRepairCost?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    saleStatus?: SortOrder
    titleType?: SortOrder
    titleBrand?: SortOrder
    titleNotes?: SortOrder
    primaryDamage?: SortOrder
    secondaryDamage?: SortOrder
    loss?: SortOrder
    startCode?: SortOrder
    highlights?: SortOrder
    key?: SortOrder
    odometer?: SortOrder
    engine?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    drivelineType?: SortOrder
    interiorColor?: SortOrder
    exteriorColor?: SortOrder
    buyNowPrice?: SortOrder
    bodyStyle?: SortOrder
    airbagsStatus?: SortOrder
    cylinders?: SortOrder
    manufacturedIn?: SortOrder
    sourceLastUpdated?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type LotMinOrderByAggregateInput = {
    id?: SortOrder
    auction?: SortOrder
    lotNumber?: SortOrder
    sellingBranch?: SortOrder
    saleLocation?: SortOrder
    location?: SortOrder
    auctionDateTime?: SortOrder
    seller?: SortOrder
    preAccidentValue?: SortOrder
    actualCashValue?: SortOrder
    estimatedRepairCost?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    saleStatus?: SortOrder
    titleType?: SortOrder
    titleBrand?: SortOrder
    titleNotes?: SortOrder
    primaryDamage?: SortOrder
    secondaryDamage?: SortOrder
    loss?: SortOrder
    startCode?: SortOrder
    highlights?: SortOrder
    key?: SortOrder
    odometer?: SortOrder
    engine?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    drivelineType?: SortOrder
    interiorColor?: SortOrder
    exteriorColor?: SortOrder
    buyNowPrice?: SortOrder
    bodyStyle?: SortOrder
    airbagsStatus?: SortOrder
    cylinders?: SortOrder
    manufacturedIn?: SortOrder
    sourceLastUpdated?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type LotSumOrderByAggregateInput = {
    lotNumber?: SortOrder
    lastPreBid?: SortOrder
    finalBid?: SortOrder
    odometer?: SortOrder
    buyNowPrice?: SortOrder
    cylinders?: SortOrder
  }

  export type EnumAuctionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Auction | EnumAuctionFieldRefInput<$PrismaModel>
    in?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionWithAggregatesFilter<$PrismaModel> | $Enums.Auction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionFilter<$PrismaModel>
    _max?: NestedEnumAuctionFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumResumableProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumableProcessType | EnumResumableProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResumableProcessTypeFilter<$PrismaModel> | $Enums.ResumableProcessType
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type LogRecordCompositeListFilter = {
    equals?: LogRecordObjectEqualityInput[]
    every?: LogRecordWhereInput
    some?: LogRecordWhereInput
    none?: LogRecordWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type LogRecordObjectEqualityInput = {
    type: $Enums.LogRecordType
    value: InputJsonValue
  }

  export type ResumableProcessMirrorNullableRelationFilter = {
    is?: ResumableProcessMirrorWhereInput | null
    isNot?: ResumableProcessMirrorWhereInput | null
  }

  export type ResumableProcessMirrorListRelationFilter = {
    every?: ResumableProcessMirrorWhereInput
    some?: ResumableProcessMirrorWhereInput
    none?: ResumableProcessMirrorWhereInput
  }

  export type LogRecordOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ResumableProcessMirrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumableProcessMirrorCountOrderByAggregateInput = {
    id?: SortOrder
    parentProcessId?: SortOrder
    parentProcessStep?: SortOrder
    parentProcessStepKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    props?: SortOrder
    state?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type ResumableProcessMirrorAvgOrderByAggregateInput = {
    parentProcessStep?: SortOrder
    currentStep?: SortOrder
  }

  export type ResumableProcessMirrorMaxOrderByAggregateInput = {
    id?: SortOrder
    parentProcessId?: SortOrder
    parentProcessStep?: SortOrder
    parentProcessStepKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type ResumableProcessMirrorMinOrderByAggregateInput = {
    id?: SortOrder
    parentProcessId?: SortOrder
    parentProcessStep?: SortOrder
    parentProcessStepKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type ResumableProcessMirrorSumOrderByAggregateInput = {
    parentProcessStep?: SortOrder
    currentStep?: SortOrder
  }

  export type EnumResumableProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumableProcessType | EnumResumableProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResumableProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResumableProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumableProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumResumableProcessTypeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ModelCreateNestedManyWithoutMakeInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[]
    createMany?: ModelCreateManyMakeInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[]
    createMany?: ModelCreateManyMakeInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ModelUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutMakeInput | ModelUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: ModelCreateManyMakeInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutMakeInput | ModelUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutMakeInput | ModelUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutMakeInput | ModelUpsertWithWhereUniqueWithoutMakeInput[]
    createMany?: ModelCreateManyMakeInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutMakeInput | ModelUpdateWithWhereUniqueWithoutMakeInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutMakeInput | ModelUpdateManyWithWhereWithoutMakeInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type MakeCreateNestedOneWithoutModelsInput = {
    create?: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: MakeCreateOrConnectWithoutModelsInput
    connect?: MakeWhereUniqueInput
  }

  export type VehicleCreateNestedManyWithoutModelInput = {
    create?: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput> | VehicleCreateWithoutModelInput[] | VehicleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutModelInput | VehicleCreateOrConnectWithoutModelInput[]
    createMany?: VehicleCreateManyModelInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type SeriesCreateNestedManyWithoutModelInput = {
    create?: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput> | SeriesCreateWithoutModelInput[] | SeriesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutModelInput | SeriesCreateOrConnectWithoutModelInput[]
    createMany?: SeriesCreateManyModelInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput> | VehicleCreateWithoutModelInput[] | VehicleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutModelInput | VehicleCreateOrConnectWithoutModelInput[]
    createMany?: VehicleCreateManyModelInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput> | SeriesCreateWithoutModelInput[] | SeriesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutModelInput | SeriesCreateOrConnectWithoutModelInput[]
    createMany?: SeriesCreateManyModelInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type MakeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: MakeCreateOrConnectWithoutModelsInput
    upsert?: MakeUpsertWithoutModelsInput
    connect?: MakeWhereUniqueInput
    update?: XOR<XOR<MakeUpdateToOneWithWhereWithoutModelsInput, MakeUpdateWithoutModelsInput>, MakeUncheckedUpdateWithoutModelsInput>
  }

  export type VehicleUpdateManyWithoutModelNestedInput = {
    create?: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput> | VehicleCreateWithoutModelInput[] | VehicleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutModelInput | VehicleCreateOrConnectWithoutModelInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutModelInput | VehicleUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: VehicleCreateManyModelInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutModelInput | VehicleUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutModelInput | VehicleUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type SeriesUpdateManyWithoutModelNestedInput = {
    create?: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput> | SeriesCreateWithoutModelInput[] | SeriesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutModelInput | SeriesCreateOrConnectWithoutModelInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutModelInput | SeriesUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: SeriesCreateManyModelInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutModelInput | SeriesUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutModelInput | SeriesUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput> | VehicleCreateWithoutModelInput[] | VehicleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutModelInput | VehicleCreateOrConnectWithoutModelInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutModelInput | VehicleUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: VehicleCreateManyModelInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutModelInput | VehicleUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutModelInput | VehicleUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type SeriesUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput> | SeriesCreateWithoutModelInput[] | SeriesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutModelInput | SeriesCreateOrConnectWithoutModelInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutModelInput | SeriesUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: SeriesCreateManyModelInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutModelInput | SeriesUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutModelInput | SeriesUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutSeriesesInput = {
    create?: XOR<ModelCreateWithoutSeriesesInput, ModelUncheckedCreateWithoutSeriesesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutSeriesesInput
    connect?: ModelWhereUniqueInput
  }

  export type VehicleCreateNestedManyWithoutSeriesInput = {
    create?: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput> | VehicleCreateWithoutSeriesInput[] | VehicleUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput | VehicleCreateOrConnectWithoutSeriesInput[]
    createMany?: VehicleCreateManySeriesInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput> | VehicleCreateWithoutSeriesInput[] | VehicleUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput | VehicleCreateOrConnectWithoutSeriesInput[]
    createMany?: VehicleCreateManySeriesInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModelUpdateOneRequiredWithoutSeriesesNestedInput = {
    create?: XOR<ModelCreateWithoutSeriesesInput, ModelUncheckedCreateWithoutSeriesesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutSeriesesInput
    upsert?: ModelUpsertWithoutSeriesesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutSeriesesInput, ModelUpdateWithoutSeriesesInput>, ModelUncheckedUpdateWithoutSeriesesInput>
  }

  export type VehicleUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput> | VehicleCreateWithoutSeriesInput[] | VehicleUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput | VehicleCreateOrConnectWithoutSeriesInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutSeriesInput | VehicleUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: VehicleCreateManySeriesInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutSeriesInput | VehicleUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutSeriesInput | VehicleUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput> | VehicleCreateWithoutSeriesInput[] | VehicleUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput | VehicleCreateOrConnectWithoutSeriesInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutSeriesInput | VehicleUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: VehicleCreateManySeriesInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutSeriesInput | VehicleUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutSeriesInput | VehicleUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput | VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput | VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleTypeInput | VehicleUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput> | VehicleCreateWithoutVehicleTypeInput[] | VehicleUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput | VehicleCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput | VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: VehicleCreateManyVehicleTypeInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput | VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleTypeInput | VehicleUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUnprocessedCreateEnvelopeInput = {
    set?: VehicleUnprocessedCreateInput
  }

  export type VehicleUnprocessedCreateInput = {
    name: string
  }

  export type ModelCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<ModelCreateWithoutVehiclesInput, ModelUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutVehiclesInput
    connect?: ModelWhereUniqueInput
  }

  export type SeriesCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<SeriesCreateWithoutVehiclesInput, SeriesUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutVehiclesInput
    connect?: SeriesWhereUniqueInput
  }

  export type VehicleTypeCreateNestedOneWithoutVehicleInput = {
    create?: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput
    connect?: VehicleTypeWhereUniqueInput
  }

  export type LotCreateNestedManyWithoutVehicleInput = {
    create?: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput> | LotCreateWithoutVehicleInput[] | LotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVehicleInput | LotCreateOrConnectWithoutVehicleInput[]
    createMany?: LotCreateManyVehicleInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type LotUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput> | LotCreateWithoutVehicleInput[] | LotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVehicleInput | LotCreateOrConnectWithoutVehicleInput[]
    createMany?: LotCreateManyVehicleInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type VehicleUnprocessedUpdateEnvelopeInput = {
    set?: VehicleUnprocessedCreateInput
    update?: VehicleUnprocessedUpdateInput
  }

  export type ModelUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<ModelCreateWithoutVehiclesInput, ModelUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutVehiclesInput
    upsert?: ModelUpsertWithoutVehiclesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutVehiclesInput, ModelUpdateWithoutVehiclesInput>, ModelUncheckedUpdateWithoutVehiclesInput>
  }

  export type SeriesUpdateOneWithoutVehiclesNestedInput = {
    create?: XOR<SeriesCreateWithoutVehiclesInput, SeriesUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutVehiclesInput
    upsert?: SeriesUpsertWithoutVehiclesInput
    disconnect?: boolean
    delete?: SeriesWhereInput | boolean
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutVehiclesInput, SeriesUpdateWithoutVehiclesInput>, SeriesUncheckedUpdateWithoutVehiclesInput>
  }

  export type VehicleTypeUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput
    upsert?: VehicleTypeUpsertWithoutVehicleInput
    disconnect?: boolean
    delete?: VehicleTypeWhereInput | boolean
    connect?: VehicleTypeWhereUniqueInput
    update?: XOR<XOR<VehicleTypeUpdateToOneWithWhereWithoutVehicleInput, VehicleTypeUpdateWithoutVehicleInput>, VehicleTypeUncheckedUpdateWithoutVehicleInput>
  }

  export type LotUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput> | LotCreateWithoutVehicleInput[] | LotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVehicleInput | LotCreateOrConnectWithoutVehicleInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutVehicleInput | LotUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: LotCreateManyVehicleInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutVehicleInput | LotUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: LotUpdateManyWithWhereWithoutVehicleInput | LotUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput> | LotCreateWithoutVehicleInput[] | LotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LotCreateOrConnectWithoutVehicleInput | LotCreateOrConnectWithoutVehicleInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutVehicleInput | LotUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: LotCreateManyVehicleInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutVehicleInput | LotUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: LotUpdateManyWithWhereWithoutVehicleInput | LotUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUnprocessedCreateEnvelopeInput = {
    set?: LotUnprocessedCreateInput
  }

  export type LotUnprocessedCreateInput = {
    leftTrans: string
    prebidClosedTrans: string
    buyNowCloseTime?: Date | string | null
    soldBefore?: number | null
    status: number
    imgs?: LotUnprocessedCreateimgsInput | string[]
  }

  export type VehicleCreateNestedOneWithoutLotsInput = {
    create?: XOR<VehicleCreateWithoutLotsInput, VehicleUncheckedCreateWithoutLotsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutLotsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumAuctionFieldUpdateOperationsInput = {
    set?: $Enums.Auction
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type LotUnprocessedUpdateEnvelopeInput = {
    set?: LotUnprocessedCreateInput
    update?: LotUnprocessedUpdateInput
  }

  export type VehicleUpdateOneRequiredWithoutLotsNestedInput = {
    create?: XOR<VehicleCreateWithoutLotsInput, VehicleUncheckedCreateWithoutLotsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutLotsInput
    upsert?: VehicleUpsertWithoutLotsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutLotsInput, VehicleUpdateWithoutLotsInput>, VehicleUncheckedUpdateWithoutLotsInput>
  }

  export type LogRecordListCreateEnvelopeInput = {
    set?: LogRecordCreateInput | LogRecordCreateInput[]
  }

  export type LogRecordCreateInput = {
    type: $Enums.LogRecordType
    value: InputJsonValue
  }

  export type ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedCreateWithoutSubProcessesInput>
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput
    connect?: ResumableProcessMirrorWhereUniqueInput
  }

  export type ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput> | ResumableProcessMirrorCreateWithoutParentProcessInput[] | ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput[]
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput | ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[]
    createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope
    connect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
  }

  export type ResumableProcessMirrorUncheckedCreateNestedManyWithoutParentProcessInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput> | ResumableProcessMirrorCreateWithoutParentProcessInput[] | ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput[]
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput | ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[]
    createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope
    connect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
  }

  export type EnumResumableProcessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResumableProcessType
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type LogRecordListUpdateEnvelopeInput = {
    set?: LogRecordCreateInput | LogRecordCreateInput[]
    push?: LogRecordCreateInput | LogRecordCreateInput[]
    updateMany?: LogRecordUpdateManyInput
    deleteMany?: LogRecordDeleteManyInput
  }

  export type ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedCreateWithoutSubProcessesInput>
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput
    upsert?: ResumableProcessMirrorUpsertWithoutSubProcessesInput
    disconnect?: boolean
    delete?: ResumableProcessMirrorWhereInput | boolean
    connect?: ResumableProcessMirrorWhereUniqueInput
    update?: XOR<XOR<ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput, ResumableProcessMirrorUpdateWithoutSubProcessesInput>, ResumableProcessMirrorUncheckedUpdateWithoutSubProcessesInput>
  }

  export type ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput> | ResumableProcessMirrorCreateWithoutParentProcessInput[] | ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput[]
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput | ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[]
    upsert?: ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput | ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput[]
    createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope
    set?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    disconnect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    delete?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    connect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    update?: ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput | ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput[]
    updateMany?: ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput | ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput[]
    deleteMany?: ResumableProcessMirrorScalarWhereInput | ResumableProcessMirrorScalarWhereInput[]
  }

  export type ResumableProcessMirrorUncheckedUpdateManyWithoutParentProcessNestedInput = {
    create?: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput> | ResumableProcessMirrorCreateWithoutParentProcessInput[] | ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput[]
    connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput | ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[]
    upsert?: ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput | ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput[]
    createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope
    set?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    disconnect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    delete?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    connect?: ResumableProcessMirrorWhereUniqueInput | ResumableProcessMirrorWhereUniqueInput[]
    update?: ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput | ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput[]
    updateMany?: ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput | ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput[]
    deleteMany?: ResumableProcessMirrorScalarWhereInput | ResumableProcessMirrorScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type VehicleUnprocessedWhereInput = {
    AND?: VehicleUnprocessedWhereInput | VehicleUnprocessedWhereInput[]
    OR?: VehicleUnprocessedWhereInput[]
    NOT?: VehicleUnprocessedWhereInput | VehicleUnprocessedWhereInput[]
    name?: StringFilter<"VehicleUnprocessed"> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumAuctionFilter<$PrismaModel = never> = {
    equals?: $Enums.Auction | EnumAuctionFieldRefInput<$PrismaModel>
    in?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionFilter<$PrismaModel> | $Enums.Auction
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type LotUnprocessedWhereInput = {
    AND?: LotUnprocessedWhereInput | LotUnprocessedWhereInput[]
    OR?: LotUnprocessedWhereInput[]
    NOT?: LotUnprocessedWhereInput | LotUnprocessedWhereInput[]
    leftTrans?: StringFilter<"LotUnprocessed"> | string
    prebidClosedTrans?: StringFilter<"LotUnprocessed"> | string
    buyNowCloseTime?: DateTimeNullableFilter<"LotUnprocessed"> | Date | string | null
    soldBefore?: IntNullableFilter<"LotUnprocessed"> | number | null
    status?: IntFilter<"LotUnprocessed"> | number
    imgs?: StringNullableListFilter<"LotUnprocessed">
  }

  export type NestedEnumAuctionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Auction | EnumAuctionFieldRefInput<$PrismaModel>
    in?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Auction[] | ListEnumAuctionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionWithAggregatesFilter<$PrismaModel> | $Enums.Auction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionFilter<$PrismaModel>
    _max?: NestedEnumAuctionFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumResumableProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumableProcessType | EnumResumableProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResumableProcessTypeFilter<$PrismaModel> | $Enums.ResumableProcessType
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type LogRecordWhereInput = {
    AND?: LogRecordWhereInput | LogRecordWhereInput[]
    OR?: LogRecordWhereInput[]
    NOT?: LogRecordWhereInput | LogRecordWhereInput[]
    type?: EnumLogRecordTypeFilter<"LogRecord"> | $Enums.LogRecordType
    value?: JsonFilter<"LogRecord">
  }

  export type NestedEnumResumableProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResumableProcessType | EnumResumableProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResumableProcessType[] | ListEnumResumableProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResumableProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResumableProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResumableProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumResumableProcessTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type ModelCreateWithoutMakeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutModelInput
    serieses?: SeriesCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutMakeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
    serieses?: SeriesUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutMakeInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput>
  }

  export type ModelCreateManyMakeInputEnvelope = {
    data: ModelCreateManyMakeInput | ModelCreateManyMakeInput[]
  }

  export type ModelUpsertWithWhereUniqueWithoutMakeInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutMakeInput, ModelUncheckedUpdateWithoutMakeInput>
    create: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutMakeInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutMakeInput, ModelUncheckedUpdateWithoutMakeInput>
  }

  export type ModelUpdateManyWithWhereWithoutMakeInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutMakeInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: StringFilter<"Model"> | string
    makeId?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    deleted?: DateTimeNullableFilter<"Model"> | Date | string | null
  }

  export type MakeCreateWithoutModelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MakeUncheckedCreateWithoutModelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MakeCreateOrConnectWithoutModelsInput = {
    where: MakeWhereUniqueInput
    create: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
  }

  export type VehicleCreateWithoutModelInput = {
    id?: string
    vin?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    series?: SeriesCreateNestedOneWithoutVehiclesInput
    vehicleType?: VehicleTypeCreateNestedOneWithoutVehicleInput
    lots?: LotCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutModelInput = {
    id?: string
    vin?: string | null
    seriesId?: string | null
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutModelInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput>
  }

  export type VehicleCreateManyModelInputEnvelope = {
    data: VehicleCreateManyModelInput | VehicleCreateManyModelInput[]
  }

  export type SeriesCreateWithoutModelInput = {
    id?: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutModelInput = {
    id?: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutModelInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput>
  }

  export type SeriesCreateManyModelInputEnvelope = {
    data: SeriesCreateManyModelInput | SeriesCreateManyModelInput[]
  }

  export type MakeUpsertWithoutModelsInput = {
    update: XOR<MakeUpdateWithoutModelsInput, MakeUncheckedUpdateWithoutModelsInput>
    create: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
    where?: MakeWhereInput
  }

  export type MakeUpdateToOneWithWhereWithoutModelsInput = {
    where?: MakeWhereInput
    data: XOR<MakeUpdateWithoutModelsInput, MakeUncheckedUpdateWithoutModelsInput>
  }

  export type MakeUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MakeUncheckedUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUpsertWithWhereUniqueWithoutModelInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutModelInput, VehicleUncheckedUpdateWithoutModelInput>
    create: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutModelInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutModelInput, VehicleUncheckedUpdateWithoutModelInput>
  }

  export type VehicleUpdateManyWithWhereWithoutModelInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutModelInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vin?: StringNullableFilter<"Vehicle"> | string | null
    modelId?: StringFilter<"Vehicle"> | string
    seriesId?: StringNullableFilter<"Vehicle"> | string | null
    vehicleTypeId?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntFilter<"Vehicle"> | number
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deleted?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
  }

  export type SeriesUpsertWithWhereUniqueWithoutModelInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutModelInput, SeriesUncheckedUpdateWithoutModelInput>
    create: XOR<SeriesCreateWithoutModelInput, SeriesUncheckedCreateWithoutModelInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutModelInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutModelInput, SeriesUncheckedUpdateWithoutModelInput>
  }

  export type SeriesUpdateManyWithWhereWithoutModelInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutModelInput>
  }

  export type SeriesScalarWhereInput = {
    AND?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    OR?: SeriesScalarWhereInput[]
    NOT?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    id?: StringFilter<"Series"> | string
    modelId?: StringFilter<"Series"> | string
    name?: StringFilter<"Series"> | string
    minYear?: IntFilter<"Series"> | number
    maxYear?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    deleted?: DateTimeNullableFilter<"Series"> | Date | string | null
  }

  export type ModelCreateWithoutSeriesesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    make: MakeCreateNestedOneWithoutModelsInput
    vehicles?: VehicleCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutSeriesesInput = {
    id?: string
    makeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutSeriesesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutSeriesesInput, ModelUncheckedCreateWithoutSeriesesInput>
  }

  export type VehicleCreateWithoutSeriesInput = {
    id?: string
    vin?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    model: ModelCreateNestedOneWithoutVehiclesInput
    vehicleType?: VehicleTypeCreateNestedOneWithoutVehicleInput
    lots?: LotCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutSeriesInput = {
    id?: string
    vin?: string | null
    modelId: string
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutSeriesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput>
  }

  export type VehicleCreateManySeriesInputEnvelope = {
    data: VehicleCreateManySeriesInput | VehicleCreateManySeriesInput[]
  }

  export type ModelUpsertWithoutSeriesesInput = {
    update: XOR<ModelUpdateWithoutSeriesesInput, ModelUncheckedUpdateWithoutSeriesesInput>
    create: XOR<ModelCreateWithoutSeriesesInput, ModelUncheckedCreateWithoutSeriesesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutSeriesesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutSeriesesInput, ModelUncheckedUpdateWithoutSeriesesInput>
  }

  export type ModelUpdateWithoutSeriesesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutSeriesesInput = {
    makeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
  }

  export type VehicleUpsertWithWhereUniqueWithoutSeriesInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutSeriesInput, VehicleUncheckedUpdateWithoutSeriesInput>
    create: XOR<VehicleCreateWithoutSeriesInput, VehicleUncheckedCreateWithoutSeriesInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutSeriesInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutSeriesInput, VehicleUncheckedUpdateWithoutSeriesInput>
  }

  export type VehicleUpdateManyWithWhereWithoutSeriesInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutSeriesInput>
  }

  export type VehicleCreateWithoutVehicleTypeInput = {
    id?: string
    vin?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    model: ModelCreateNestedOneWithoutVehiclesInput
    series?: SeriesCreateNestedOneWithoutVehiclesInput
    lots?: LotCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleTypeInput = {
    id?: string
    vin?: string | null
    modelId: string
    seriesId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput>
  }

  export type VehicleCreateManyVehicleTypeInputEnvelope = {
    data: VehicleCreateManyVehicleTypeInput | VehicleCreateManyVehicleTypeInput[]
  }

  export type VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutVehicleTypeInput, VehicleUncheckedUpdateWithoutVehicleTypeInput>
    create: XOR<VehicleCreateWithoutVehicleTypeInput, VehicleUncheckedCreateWithoutVehicleTypeInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutVehicleTypeInput, VehicleUncheckedUpdateWithoutVehicleTypeInput>
  }

  export type VehicleUpdateManyWithWhereWithoutVehicleTypeInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleTypeInput>
  }

  export type ModelCreateWithoutVehiclesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    make: MakeCreateNestedOneWithoutModelsInput
    serieses?: SeriesCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutVehiclesInput = {
    id?: string
    makeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    serieses?: SeriesUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutVehiclesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutVehiclesInput, ModelUncheckedCreateWithoutVehiclesInput>
  }

  export type SeriesCreateWithoutVehiclesInput = {
    id?: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    model: ModelCreateNestedOneWithoutSeriesesInput
  }

  export type SeriesUncheckedCreateWithoutVehiclesInput = {
    id?: string
    modelId: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type SeriesCreateOrConnectWithoutVehiclesInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutVehiclesInput, SeriesUncheckedCreateWithoutVehiclesInput>
  }

  export type VehicleTypeCreateWithoutVehicleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type VehicleTypeUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type VehicleTypeCreateOrConnectWithoutVehicleInput = {
    where: VehicleTypeWhereUniqueInput
    create: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
  }

  export type LotCreateWithoutVehicleInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUncheckedCreateWithoutVehicleInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotCreateOrConnectWithoutVehicleInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput>
  }

  export type LotCreateManyVehicleInputEnvelope = {
    data: LotCreateManyVehicleInput | LotCreateManyVehicleInput[]
  }

  export type VehicleUnprocessedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUpsertWithoutVehiclesInput = {
    update: XOR<ModelUpdateWithoutVehiclesInput, ModelUncheckedUpdateWithoutVehiclesInput>
    create: XOR<ModelCreateWithoutVehiclesInput, ModelUncheckedCreateWithoutVehiclesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutVehiclesInput, ModelUncheckedUpdateWithoutVehiclesInput>
  }

  export type ModelUpdateWithoutVehiclesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput
    serieses?: SeriesUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutVehiclesInput = {
    makeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serieses?: SeriesUncheckedUpdateManyWithoutModelNestedInput
  }

  export type SeriesUpsertWithoutVehiclesInput = {
    update: XOR<SeriesUpdateWithoutVehiclesInput, SeriesUncheckedUpdateWithoutVehiclesInput>
    create: XOR<SeriesCreateWithoutVehiclesInput, SeriesUncheckedCreateWithoutVehiclesInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutVehiclesInput, SeriesUncheckedUpdateWithoutVehiclesInput>
  }

  export type SeriesUpdateWithoutVehiclesInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model?: ModelUpdateOneRequiredWithoutSeriesesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutVehiclesInput = {
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleTypeUpsertWithoutVehicleInput = {
    update: XOR<VehicleTypeUpdateWithoutVehicleInput, VehicleTypeUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleTypeCreateWithoutVehicleInput, VehicleTypeUncheckedCreateWithoutVehicleInput>
    where?: VehicleTypeWhereInput
  }

  export type VehicleTypeUpdateToOneWithWhereWithoutVehicleInput = {
    where?: VehicleTypeWhereInput
    data: XOR<VehicleTypeUpdateWithoutVehicleInput, VehicleTypeUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleTypeUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleTypeUncheckedUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LotUpsertWithWhereUniqueWithoutVehicleInput = {
    where: LotWhereUniqueInput
    update: XOR<LotUpdateWithoutVehicleInput, LotUncheckedUpdateWithoutVehicleInput>
    create: XOR<LotCreateWithoutVehicleInput, LotUncheckedCreateWithoutVehicleInput>
  }

  export type LotUpdateWithWhereUniqueWithoutVehicleInput = {
    where: LotWhereUniqueInput
    data: XOR<LotUpdateWithoutVehicleInput, LotUncheckedUpdateWithoutVehicleInput>
  }

  export type LotUpdateManyWithWhereWithoutVehicleInput = {
    where: LotScalarWhereInput
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyWithoutVehicleInput>
  }

  export type LotScalarWhereInput = {
    AND?: LotScalarWhereInput | LotScalarWhereInput[]
    OR?: LotScalarWhereInput[]
    NOT?: LotScalarWhereInput | LotScalarWhereInput[]
    id?: StringFilter<"Lot"> | string
    auction?: EnumAuctionFilter<"Lot"> | $Enums.Auction
    lotNumber?: IntFilter<"Lot"> | number
    sellingBranch?: StringFilter<"Lot"> | string
    saleLocation?: StringFilter<"Lot"> | string
    location?: StringFilter<"Lot"> | string
    auctionDateTime?: DateTimeFilter<"Lot"> | Date | string
    seller?: StringFilter<"Lot"> | string
    preAccidentValue?: StringFilter<"Lot"> | string
    actualCashValue?: StringFilter<"Lot"> | string
    estimatedRepairCost?: StringFilter<"Lot"> | string
    lastPreBid?: FloatNullableFilter<"Lot"> | number | null
    finalBid?: IntNullableFilter<"Lot"> | number | null
    saleStatus?: StringFilter<"Lot"> | string
    titleType?: StringFilter<"Lot"> | string
    titleBrand?: StringFilter<"Lot"> | string
    titleNotes?: StringFilter<"Lot"> | string
    primaryDamage?: StringFilter<"Lot"> | string
    secondaryDamage?: StringFilter<"Lot"> | string
    loss?: StringFilter<"Lot"> | string
    startCode?: StringFilter<"Lot"> | string
    highlights?: StringFilter<"Lot"> | string
    key?: StringFilter<"Lot"> | string
    odometer?: IntFilter<"Lot"> | number
    engine?: StringFilter<"Lot"> | string
    fuelType?: StringFilter<"Lot"> | string
    transmission?: StringFilter<"Lot"> | string
    drivelineType?: StringFilter<"Lot"> | string
    interiorColor?: StringFilter<"Lot"> | string
    exteriorColor?: StringFilter<"Lot"> | string
    buyNowPrice?: IntNullableFilter<"Lot"> | number | null
    bodyStyle?: StringFilter<"Lot"> | string
    airbagsStatus?: StringFilter<"Lot"> | string
    cylinders?: IntNullableFilter<"Lot"> | number | null
    manufacturedIn?: StringFilter<"Lot"> | string
    sourceLastUpdated?: StringFilter<"Lot"> | string
    vehicleId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
    deleted?: DateTimeNullableFilter<"Lot"> | Date | string | null
  }

  export type LotUnprocessedCreateimgsInput = {
    set: string[]
  }

  export type VehicleCreateWithoutLotsInput = {
    id?: string
    vin?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
    model: ModelCreateNestedOneWithoutVehiclesInput
    series?: SeriesCreateNestedOneWithoutVehiclesInput
    vehicleType?: VehicleTypeCreateNestedOneWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutLotsInput = {
    id?: string
    vin?: string | null
    modelId: string
    seriesId?: string | null
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleCreateOrConnectWithoutLotsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutLotsInput, VehicleUncheckedCreateWithoutLotsInput>
  }

  export type LotUnprocessedUpdateInput = {
    leftTrans?: StringFieldUpdateOperationsInput | string
    prebidClosedTrans?: StringFieldUpdateOperationsInput | string
    buyNowCloseTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldBefore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    imgs?: LotUnprocessedUpdateimgsInput | string[]
  }

  export type VehicleUpsertWithoutLotsInput = {
    update: XOR<VehicleUpdateWithoutLotsInput, VehicleUncheckedUpdateWithoutLotsInput>
    create: XOR<VehicleCreateWithoutLotsInput, VehicleUncheckedCreateWithoutLotsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutLotsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutLotsInput, VehicleUncheckedUpdateWithoutLotsInput>
  }

  export type VehicleUpdateWithoutLotsInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    model?: ModelUpdateOneRequiredWithoutVehiclesNestedInput
    series?: SeriesUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutLotsInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type ResumableProcessMirrorCreateWithoutSubProcessesInput = {
    id?: string
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    parentProcess?: ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput
  }

  export type ResumableProcessMirrorUncheckedCreateWithoutSubProcessesInput = {
    id?: string
    parentProcessId?: string | null
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput = {
    where: ResumableProcessMirrorWhereUniqueInput
    create: XOR<ResumableProcessMirrorCreateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedCreateWithoutSubProcessesInput>
  }

  export type ResumableProcessMirrorCreateWithoutParentProcessInput = {
    id?: string
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    subProcesses?: ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput
  }

  export type ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput = {
    id?: string
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    subProcesses?: ResumableProcessMirrorUncheckedCreateNestedManyWithoutParentProcessInput
  }

  export type ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput = {
    where: ResumableProcessMirrorWhereUniqueInput
    create: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput>
  }

  export type ResumableProcessMirrorCreateManyParentProcessInputEnvelope = {
    data: ResumableProcessMirrorCreateManyParentProcessInput | ResumableProcessMirrorCreateManyParentProcessInput[]
  }

  export type LogRecordUpdateManyInput = {
    where: LogRecordWhereInput
    data: LogRecordUpdateInput
  }

  export type LogRecordDeleteManyInput = {
    where: LogRecordWhereInput
  }

  export type ResumableProcessMirrorUpsertWithoutSubProcessesInput = {
    update: XOR<ResumableProcessMirrorUpdateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedUpdateWithoutSubProcessesInput>
    create: XOR<ResumableProcessMirrorCreateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedCreateWithoutSubProcessesInput>
    where?: ResumableProcessMirrorWhereInput
  }

  export type ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput = {
    where?: ResumableProcessMirrorWhereInput
    data: XOR<ResumableProcessMirrorUpdateWithoutSubProcessesInput, ResumableProcessMirrorUncheckedUpdateWithoutSubProcessesInput>
  }

  export type ResumableProcessMirrorUpdateWithoutSubProcessesInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentProcess?: ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput
  }

  export type ResumableProcessMirrorUncheckedUpdateWithoutSubProcessesInput = {
    parentProcessId?: NullableStringFieldUpdateOperationsInput | string | null
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput = {
    where: ResumableProcessMirrorWhereUniqueInput
    update: XOR<ResumableProcessMirrorUpdateWithoutParentProcessInput, ResumableProcessMirrorUncheckedUpdateWithoutParentProcessInput>
    create: XOR<ResumableProcessMirrorCreateWithoutParentProcessInput, ResumableProcessMirrorUncheckedCreateWithoutParentProcessInput>
  }

  export type ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput = {
    where: ResumableProcessMirrorWhereUniqueInput
    data: XOR<ResumableProcessMirrorUpdateWithoutParentProcessInput, ResumableProcessMirrorUncheckedUpdateWithoutParentProcessInput>
  }

  export type ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput = {
    where: ResumableProcessMirrorScalarWhereInput
    data: XOR<ResumableProcessMirrorUpdateManyMutationInput, ResumableProcessMirrorUncheckedUpdateManyWithoutParentProcessInput>
  }

  export type ResumableProcessMirrorScalarWhereInput = {
    AND?: ResumableProcessMirrorScalarWhereInput | ResumableProcessMirrorScalarWhereInput[]
    OR?: ResumableProcessMirrorScalarWhereInput[]
    NOT?: ResumableProcessMirrorScalarWhereInput | ResumableProcessMirrorScalarWhereInput[]
    id?: StringFilter<"ResumableProcessMirror"> | string
    parentProcessId?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    parentProcessStep?: IntNullableFilter<"ResumableProcessMirror"> | number | null
    parentProcessStepKey?: StringNullableFilter<"ResumableProcessMirror"> | string | null
    type?: EnumResumableProcessTypeFilter<"ResumableProcessMirror"> | $Enums.ResumableProcessType
    status?: EnumStatusFilter<"ResumableProcessMirror"> | $Enums.Status
    currentStep?: IntFilter<"ResumableProcessMirror"> | number
    props?: JsonFilter<"ResumableProcessMirror">
    state?: JsonFilter<"ResumableProcessMirror">
    result?: JsonNullableFilter<"ResumableProcessMirror">
    createdAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    updatedAt?: DateTimeFilter<"ResumableProcessMirror"> | Date | string
    deleted?: DateTimeNullableFilter<"ResumableProcessMirror"> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumLogRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogRecordType | EnumLogRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogRecordType[] | ListEnumLogRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogRecordType[] | ListEnumLogRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogRecordTypeFilter<$PrismaModel> | $Enums.LogRecordType
  }

  export type ModelCreateManyMakeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type ModelUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
    serieses?: SeriesUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
    serieses?: SeriesUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateManyModelInput = {
    id?: string
    vin?: string | null
    seriesId?: string | null
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type SeriesCreateManyModelInput = {
    id?: string
    name: string
    minYear: number
    maxYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type VehicleUpdateWithoutModelInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    series?: SeriesUpdateOneWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneWithoutVehicleNestedInput
    lots?: LotUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutModelInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutModelInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type SeriesUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateManyWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    minYear?: IntFieldUpdateOperationsInput | number
    maxYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateManySeriesInput = {
    id?: string
    vin?: string | null
    modelId: string
    vehicleTypeId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleUpdateWithoutSeriesInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    model?: ModelUpdateOneRequiredWithoutVehiclesNestedInput
    vehicleType?: VehicleTypeUpdateOneWithoutVehicleNestedInput
    lots?: LotUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSeriesInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutSeriesInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleCreateManyVehicleTypeInput = {
    id?: string
    vin?: string | null
    modelId: string
    seriesId?: string | null
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<VehicleUnprocessedCreateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type VehicleUpdateWithoutVehicleTypeInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    model?: ModelUpdateOneRequiredWithoutVehiclesNestedInput
    series?: SeriesUpdateOneWithoutVehiclesNestedInput
    lots?: LotUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleTypeInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
    lots?: LotUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleTypeInput = {
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: StringFieldUpdateOperationsInput | string
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<VehicleUnprocessedUpdateEnvelopeInput, VehicleUnprocessedCreateInput>
  }

  export type LotCreateManyVehicleInput = {
    id?: string
    auction: $Enums.Auction
    lotNumber: number
    sellingBranch: string
    saleLocation: string
    location: string
    auctionDateTime: Date | string
    seller: string
    preAccidentValue: string
    actualCashValue: string
    estimatedRepairCost: string
    lastPreBid?: number | null
    finalBid?: number | null
    saleStatus: string
    titleType: string
    titleBrand: string
    titleNotes: string
    primaryDamage: string
    secondaryDamage: string
    loss: string
    startCode: string
    highlights: string
    key: string
    odometer: number
    engine: string
    fuelType: string
    transmission: string
    drivelineType: string
    interiorColor: string
    exteriorColor: string
    buyNowPrice?: number | null
    bodyStyle: string
    airbagsStatus: string
    cylinders?: number | null
    manufacturedIn: string
    sourceLastUpdated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    unprocessed: XOR<LotUnprocessedCreateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUpdateWithoutVehicleInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUncheckedUpdateWithoutVehicleInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUncheckedUpdateManyWithoutVehicleInput = {
    auction?: EnumAuctionFieldUpdateOperationsInput | $Enums.Auction
    lotNumber?: IntFieldUpdateOperationsInput | number
    sellingBranch?: StringFieldUpdateOperationsInput | string
    saleLocation?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    auctionDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: StringFieldUpdateOperationsInput | string
    preAccidentValue?: StringFieldUpdateOperationsInput | string
    actualCashValue?: StringFieldUpdateOperationsInput | string
    estimatedRepairCost?: StringFieldUpdateOperationsInput | string
    lastPreBid?: NullableFloatFieldUpdateOperationsInput | number | null
    finalBid?: NullableIntFieldUpdateOperationsInput | number | null
    saleStatus?: StringFieldUpdateOperationsInput | string
    titleType?: StringFieldUpdateOperationsInput | string
    titleBrand?: StringFieldUpdateOperationsInput | string
    titleNotes?: StringFieldUpdateOperationsInput | string
    primaryDamage?: StringFieldUpdateOperationsInput | string
    secondaryDamage?: StringFieldUpdateOperationsInput | string
    loss?: StringFieldUpdateOperationsInput | string
    startCode?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    odometer?: IntFieldUpdateOperationsInput | number
    engine?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    drivelineType?: StringFieldUpdateOperationsInput | string
    interiorColor?: StringFieldUpdateOperationsInput | string
    exteriorColor?: StringFieldUpdateOperationsInput | string
    buyNowPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bodyStyle?: StringFieldUpdateOperationsInput | string
    airbagsStatus?: StringFieldUpdateOperationsInput | string
    cylinders?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturedIn?: StringFieldUpdateOperationsInput | string
    sourceLastUpdated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unprocessed?: XOR<LotUnprocessedUpdateEnvelopeInput, LotUnprocessedCreateInput>
  }

  export type LotUnprocessedUpdateimgsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ResumableProcessMirrorCreateManyParentProcessInput = {
    id?: string
    parentProcessStep?: number | null
    parentProcessStepKey?: string | null
    type: $Enums.ResumableProcessType
    status: $Enums.Status
    currentStep?: number
    props: InputJsonValue
    state: InputJsonValue
    result?: InputJsonValue | null
    log?: XOR<LogRecordListCreateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type LogRecordUpdateInput = {
    type?: EnumLogRecordTypeFieldUpdateOperationsInput | $Enums.LogRecordType
    value?: InputJsonValue | InputJsonValue
  }

  export type ResumableProcessMirrorUpdateWithoutParentProcessInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subProcesses?: ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput
  }

  export type ResumableProcessMirrorUncheckedUpdateWithoutParentProcessInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subProcesses?: ResumableProcessMirrorUncheckedUpdateManyWithoutParentProcessNestedInput
  }

  export type ResumableProcessMirrorUncheckedUpdateManyWithoutParentProcessInput = {
    parentProcessStep?: NullableIntFieldUpdateOperationsInput | number | null
    parentProcessStepKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResumableProcessTypeFieldUpdateOperationsInput | $Enums.ResumableProcessType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    currentStep?: IntFieldUpdateOperationsInput | number
    props?: InputJsonValue | InputJsonValue
    state?: InputJsonValue | InputJsonValue
    result?: InputJsonValue | InputJsonValue | null
    log?: XOR<LogRecordListUpdateEnvelopeInput, LogRecordCreateInput> | LogRecordCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NestedEnumLogRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogRecordType | EnumLogRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogRecordType[] | ListEnumLogRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogRecordType[] | ListEnumLogRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogRecordTypeFilter<$PrismaModel> | $Enums.LogRecordType
  }

  export type EnumLogRecordTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogRecordType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MakeCountOutputTypeDefaultArgs instead
     */
    export type MakeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelCountOutputTypeDefaultArgs instead
     */
    export type ModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeriesCountOutputTypeDefaultArgs instead
     */
    export type SeriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleTypeCountOutputTypeDefaultArgs instead
     */
    export type VehicleTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumableProcessMirrorCountOutputTypeDefaultArgs instead
     */
    export type ResumableProcessMirrorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumableProcessMirrorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleUnprocessedDefaultArgs instead
     */
    export type VehicleUnprocessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleUnprocessedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LotUnprocessedDefaultArgs instead
     */
    export type LotUnprocessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LotUnprocessedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogRecordDefaultArgs instead
     */
    export type LogRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MakeDefaultArgs instead
     */
    export type MakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelDefaultArgs instead
     */
    export type ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeriesDefaultArgs instead
     */
    export type SeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleTypeDefaultArgs instead
     */
    export type VehicleTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LotDefaultArgs instead
     */
    export type LotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumableProcessMirrorDefaultArgs instead
     */
    export type ResumableProcessMirrorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumableProcessMirrorDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}