
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.MakeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  makeId: 'makeId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.SeriesScalarFieldEnum = {
  id: 'id',
  modelId: 'modelId',
  name: 'name',
  minYear: 'minYear',
  maxYear: 'maxYear',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.VehicleTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.VehicleScalarFieldEnum = {
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

exports.Prisma.LotScalarFieldEnum = {
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

exports.Prisma.ResumableProcessMirrorScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Auction = exports.$Enums.Auction = {
  iaai: 'iaai',
  copart: 'copart'
};

exports.ResumableProcessType = exports.$Enums.ResumableProcessType = {
  bidCarsSearchScraper: 'bidCarsSearchScraper',
  bidCarsSearchMakeScraper: 'bidCarsSearchMakeScraper',
  bidCarsSearchModelScraper: 'bidCarsSearchModelScraper',
  bidCarsSearchOdometerFallbackScraper: 'bidCarsSearchOdometerFallbackScraper',
  bidCarsSearchResultScraper: 'bidCarsSearchResultScraper',
  bidCarsSearchResultPageScraper: 'bidCarsSearchResultPageScraper'
};

exports.Status = exports.$Enums.Status = {
  idle: 'idle',
  pending: 'pending',
  aborted: 'aborted',
  failed: 'failed',
  succeeded: 'succeeded'
};

exports.LogRecordType = exports.$Enums.LogRecordType = {
  info: 'info',
  warn: 'warn'
};

exports.Prisma.ModelName = {
  Make: 'Make',
  Model: 'Model',
  Series: 'Series',
  VehicleType: 'VehicleType',
  Vehicle: 'Vehicle',
  Lot: 'Lot',
  ResumableProcessMirror: 'ResumableProcessMirror'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
