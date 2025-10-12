
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MuridProfile
 * 
 */
export type MuridProfile = $Result.DefaultSelection<Prisma.$MuridProfilePayload>
/**
 * Model WaliMurid
 * 
 */
export type WaliMurid = $Result.DefaultSelection<Prisma.$WaliMuridPayload>
/**
 * Model GuruProfile
 * 
 */
export type GuruProfile = $Result.DefaultSelection<Prisma.$GuruProfilePayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>
/**
 * Model JadwalTugas
 * 
 */
export type JadwalTugas = $Result.DefaultSelection<Prisma.$JadwalTugasPayload>
/**
 * Model Rfid
 * 
 */
export type Rfid = $Result.DefaultSelection<Prisma.$RfidPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MURID: 'MURID',
  GURU: 'GURU',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Keterangan: {
  HADIR: 'HADIR',
  ALFA: 'ALFA',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  PULANG: 'PULANG'
};

export type Keterangan = (typeof Keterangan)[keyof typeof Keterangan]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Keterangan = $Enums.Keterangan

export const Keterangan: typeof $Enums.Keterangan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muridProfile`: Exposes CRUD operations for the **MuridProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MuridProfiles
    * const muridProfiles = await prisma.muridProfile.findMany()
    * ```
    */
  get muridProfile(): Prisma.MuridProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waliMurid`: Exposes CRUD operations for the **WaliMurid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaliMurids
    * const waliMurids = await prisma.waliMurid.findMany()
    * ```
    */
  get waliMurid(): Prisma.WaliMuridDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guruProfile`: Exposes CRUD operations for the **GuruProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuruProfiles
    * const guruProfiles = await prisma.guruProfile.findMany()
    * ```
    */
  get guruProfile(): Prisma.GuruProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalTugas`: Exposes CRUD operations for the **JadwalTugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalTugases
    * const jadwalTugases = await prisma.jadwalTugas.findMany()
    * ```
    */
  get jadwalTugas(): Prisma.JadwalTugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rfid`: Exposes CRUD operations for the **Rfid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rfids
    * const rfids = await prisma.rfid.findMany()
    * ```
    */
  get rfid(): Prisma.RfidDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    MuridProfile: 'MuridProfile',
    WaliMurid: 'WaliMurid',
    GuruProfile: 'GuruProfile',
    Kelas: 'Kelas',
    Absensi: 'Absensi',
    JadwalTugas: 'JadwalTugas',
    Rfid: 'Rfid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "muridProfile" | "waliMurid" | "guruProfile" | "kelas" | "absensi" | "jadwalTugas" | "rfid"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MuridProfile: {
        payload: Prisma.$MuridProfilePayload<ExtArgs>
        fields: Prisma.MuridProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuridProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuridProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          findFirst: {
            args: Prisma.MuridProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuridProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          findMany: {
            args: Prisma.MuridProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>[]
          }
          create: {
            args: Prisma.MuridProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          createMany: {
            args: Prisma.MuridProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuridProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>[]
          }
          delete: {
            args: Prisma.MuridProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          update: {
            args: Prisma.MuridProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          deleteMany: {
            args: Prisma.MuridProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuridProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuridProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>[]
          }
          upsert: {
            args: Prisma.MuridProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuridProfilePayload>
          }
          aggregate: {
            args: Prisma.MuridProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuridProfile>
          }
          groupBy: {
            args: Prisma.MuridProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuridProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuridProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MuridProfileCountAggregateOutputType> | number
          }
        }
      }
      WaliMurid: {
        payload: Prisma.$WaliMuridPayload<ExtArgs>
        fields: Prisma.WaliMuridFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaliMuridFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaliMuridFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          findFirst: {
            args: Prisma.WaliMuridFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaliMuridFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          findMany: {
            args: Prisma.WaliMuridFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>[]
          }
          create: {
            args: Prisma.WaliMuridCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          createMany: {
            args: Prisma.WaliMuridCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaliMuridCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>[]
          }
          delete: {
            args: Prisma.WaliMuridDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          update: {
            args: Prisma.WaliMuridUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          deleteMany: {
            args: Prisma.WaliMuridDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaliMuridUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaliMuridUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>[]
          }
          upsert: {
            args: Prisma.WaliMuridUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliMuridPayload>
          }
          aggregate: {
            args: Prisma.WaliMuridAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaliMurid>
          }
          groupBy: {
            args: Prisma.WaliMuridGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaliMuridGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaliMuridCountArgs<ExtArgs>
            result: $Utils.Optional<WaliMuridCountAggregateOutputType> | number
          }
        }
      }
      GuruProfile: {
        payload: Prisma.$GuruProfilePayload<ExtArgs>
        fields: Prisma.GuruProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuruProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuruProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          findFirst: {
            args: Prisma.GuruProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuruProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          findMany: {
            args: Prisma.GuruProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>[]
          }
          create: {
            args: Prisma.GuruProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          createMany: {
            args: Prisma.GuruProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuruProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>[]
          }
          delete: {
            args: Prisma.GuruProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          update: {
            args: Prisma.GuruProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          deleteMany: {
            args: Prisma.GuruProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuruProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuruProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>[]
          }
          upsert: {
            args: Prisma.GuruProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruProfilePayload>
          }
          aggregate: {
            args: Prisma.GuruProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuruProfile>
          }
          groupBy: {
            args: Prisma.GuruProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuruProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuruProfileCountArgs<ExtArgs>
            result: $Utils.Optional<GuruProfileCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
      JadwalTugas: {
        payload: Prisma.$JadwalTugasPayload<ExtArgs>
        fields: Prisma.JadwalTugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalTugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalTugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          findFirst: {
            args: Prisma.JadwalTugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalTugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          findMany: {
            args: Prisma.JadwalTugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>[]
          }
          create: {
            args: Prisma.JadwalTugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          createMany: {
            args: Prisma.JadwalTugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalTugasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>[]
          }
          delete: {
            args: Prisma.JadwalTugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          update: {
            args: Prisma.JadwalTugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          deleteMany: {
            args: Prisma.JadwalTugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalTugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalTugasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>[]
          }
          upsert: {
            args: Prisma.JadwalTugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalTugasPayload>
          }
          aggregate: {
            args: Prisma.JadwalTugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalTugas>
          }
          groupBy: {
            args: Prisma.JadwalTugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalTugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalTugasCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalTugasCountAggregateOutputType> | number
          }
        }
      }
      Rfid: {
        payload: Prisma.$RfidPayload<ExtArgs>
        fields: Prisma.RfidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RfidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RfidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          findFirst: {
            args: Prisma.RfidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RfidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          findMany: {
            args: Prisma.RfidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>[]
          }
          create: {
            args: Prisma.RfidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          createMany: {
            args: Prisma.RfidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RfidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>[]
          }
          delete: {
            args: Prisma.RfidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          update: {
            args: Prisma.RfidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          deleteMany: {
            args: Prisma.RfidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RfidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RfidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>[]
          }
          upsert: {
            args: Prisma.RfidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidPayload>
          }
          aggregate: {
            args: Prisma.RfidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfid>
          }
          groupBy: {
            args: Prisma.RfidGroupByArgs<ExtArgs>
            result: $Utils.Optional<RfidGroupByOutputType>[]
          }
          count: {
            args: Prisma.RfidCountArgs<ExtArgs>
            result: $Utils.Optional<RfidCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    muridProfile?: MuridProfileOmit
    waliMurid?: WaliMuridOmit
    guruProfile?: GuruProfileOmit
    kelas?: KelasOmit
    absensi?: AbsensiOmit
    jadwalTugas?: JadwalTugasOmit
    rfid?: RfidOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type MuridProfileCountOutputType
   */

  export type MuridProfileCountOutputType = {
    waliMurids: number
    absensi: number
  }

  export type MuridProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliMurids?: boolean | MuridProfileCountOutputTypeCountWaliMuridsArgs
    absensi?: boolean | MuridProfileCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * MuridProfileCountOutputType without action
   */
  export type MuridProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfileCountOutputType
     */
    select?: MuridProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuridProfileCountOutputType without action
   */
  export type MuridProfileCountOutputTypeCountWaliMuridsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliMuridWhereInput
  }

  /**
   * MuridProfileCountOutputType without action
   */
  export type MuridProfileCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Count Type GuruProfileCountOutputType
   */

  export type GuruProfileCountOutputType = {
    JadwalTugas: number
  }

  export type GuruProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JadwalTugas?: boolean | GuruProfileCountOutputTypeCountJadwalTugasArgs
  }

  // Custom InputTypes
  /**
   * GuruProfileCountOutputType without action
   */
  export type GuruProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfileCountOutputType
     */
    select?: GuruProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuruProfileCountOutputType without action
   */
  export type GuruProfileCountOutputTypeCountJadwalTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalTugasWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    muridProfile: number
    JadwalTugas: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | KelasCountOutputTypeCountMuridProfileArgs
    JadwalTugas?: boolean | KelasCountOutputTypeCountJadwalTugasArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountMuridProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuridProfileWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountJadwalTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalTugasWhereInput
  }


  /**
   * Count Type RfidCountOutputType
   */

  export type RfidCountOutputType = {
    absensi: number
  }

  export type RfidCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | RfidCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * RfidCountOutputType without action
   */
  export type RfidCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCountOutputType
     */
    select?: RfidCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RfidCountOutputType without action
   */
  export type RfidCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    muridProfileId: number
    guruProfileId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    muridProfileId?: true
    guruProfileId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    muridProfileId: number | null
    guruProfileId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "muridProfileId" | "guruProfileId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | User$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | User$guruProfileArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      muridProfile: Prisma.$MuridProfilePayload<ExtArgs> | null
      guruProfile: Prisma.$GuruProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      muridProfileId: number | null
      guruProfileId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muridProfile<T extends User$muridProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$muridProfileArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guruProfile<T extends User$guruProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$guruProfileArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly muridProfileId: FieldRef<"User", 'Int'>
    readonly guruProfileId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.muridProfile
   */
  export type User$muridProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    where?: MuridProfileWhereInput
  }

  /**
   * User.guruProfile
   */
  export type User$guruProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    where?: GuruProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MuridProfile
   */

  export type AggregateMuridProfile = {
    _count: MuridProfileCountAggregateOutputType | null
    _avg: MuridProfileAvgAggregateOutputType | null
    _sum: MuridProfileSumAggregateOutputType | null
    _min: MuridProfileMinAggregateOutputType | null
    _max: MuridProfileMaxAggregateOutputType | null
  }

  export type MuridProfileAvgAggregateOutputType = {
    id: number | null
    nis: number | null
    kelasId: number | null
  }

  export type MuridProfileSumAggregateOutputType = {
    id: number | null
    nis: number | null
    kelasId: number | null
  }

  export type MuridProfileMinAggregateOutputType = {
    id: number | null
    nis: number | null
    name: string | null
    noMurid: string | null
    kelasId: number | null
  }

  export type MuridProfileMaxAggregateOutputType = {
    id: number | null
    nis: number | null
    name: string | null
    noMurid: string | null
    kelasId: number | null
  }

  export type MuridProfileCountAggregateOutputType = {
    id: number
    nis: number
    name: number
    noMurid: number
    kelasId: number
    _all: number
  }


  export type MuridProfileAvgAggregateInputType = {
    id?: true
    nis?: true
    kelasId?: true
  }

  export type MuridProfileSumAggregateInputType = {
    id?: true
    nis?: true
    kelasId?: true
  }

  export type MuridProfileMinAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    noMurid?: true
    kelasId?: true
  }

  export type MuridProfileMaxAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    noMurid?: true
    kelasId?: true
  }

  export type MuridProfileCountAggregateInputType = {
    id?: true
    nis?: true
    name?: true
    noMurid?: true
    kelasId?: true
    _all?: true
  }

  export type MuridProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuridProfile to aggregate.
     */
    where?: MuridProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuridProfiles to fetch.
     */
    orderBy?: MuridProfileOrderByWithRelationInput | MuridProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuridProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuridProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuridProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MuridProfiles
    **/
    _count?: true | MuridProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MuridProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MuridProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuridProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuridProfileMaxAggregateInputType
  }

  export type GetMuridProfileAggregateType<T extends MuridProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMuridProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuridProfile[P]>
      : GetScalarType<T[P], AggregateMuridProfile[P]>
  }




  export type MuridProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuridProfileWhereInput
    orderBy?: MuridProfileOrderByWithAggregationInput | MuridProfileOrderByWithAggregationInput[]
    by: MuridProfileScalarFieldEnum[] | MuridProfileScalarFieldEnum
    having?: MuridProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuridProfileCountAggregateInputType | true
    _avg?: MuridProfileAvgAggregateInputType
    _sum?: MuridProfileSumAggregateInputType
    _min?: MuridProfileMinAggregateInputType
    _max?: MuridProfileMaxAggregateInputType
  }

  export type MuridProfileGroupByOutputType = {
    id: number
    nis: number
    name: string
    noMurid: string | null
    kelasId: number | null
    _count: MuridProfileCountAggregateOutputType | null
    _avg: MuridProfileAvgAggregateOutputType | null
    _sum: MuridProfileSumAggregateOutputType | null
    _min: MuridProfileMinAggregateOutputType | null
    _max: MuridProfileMaxAggregateOutputType | null
  }

  type GetMuridProfileGroupByPayload<T extends MuridProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuridProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuridProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuridProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MuridProfileGroupByOutputType[P]>
        }
      >
    >


  export type MuridProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    name?: boolean
    noMurid?: boolean
    kelasId?: boolean
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
    rfid?: boolean | MuridProfile$rfidArgs<ExtArgs>
    User?: boolean | MuridProfile$UserArgs<ExtArgs>
    waliMurids?: boolean | MuridProfile$waliMuridsArgs<ExtArgs>
    absensi?: boolean | MuridProfile$absensiArgs<ExtArgs>
    _count?: boolean | MuridProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muridProfile"]>

  export type MuridProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    name?: boolean
    noMurid?: boolean
    kelasId?: boolean
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["muridProfile"]>

  export type MuridProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    name?: boolean
    noMurid?: boolean
    kelasId?: boolean
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["muridProfile"]>

  export type MuridProfileSelectScalar = {
    id?: boolean
    nis?: boolean
    name?: boolean
    noMurid?: boolean
    kelasId?: boolean
  }

  export type MuridProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "name" | "noMurid" | "kelasId", ExtArgs["result"]["muridProfile"]>
  export type MuridProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
    rfid?: boolean | MuridProfile$rfidArgs<ExtArgs>
    User?: boolean | MuridProfile$UserArgs<ExtArgs>
    waliMurids?: boolean | MuridProfile$waliMuridsArgs<ExtArgs>
    absensi?: boolean | MuridProfile$absensiArgs<ExtArgs>
    _count?: boolean | MuridProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuridProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
  }
  export type MuridProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | MuridProfile$kelasArgs<ExtArgs>
  }

  export type $MuridProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MuridProfile"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs> | null
      rfid: Prisma.$RfidPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
      waliMurids: Prisma.$WaliMuridPayload<ExtArgs>[]
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nis: number
      name: string
      noMurid: string | null
      kelasId: number | null
    }, ExtArgs["result"]["muridProfile"]>
    composites: {}
  }

  type MuridProfileGetPayload<S extends boolean | null | undefined | MuridProfileDefaultArgs> = $Result.GetResult<Prisma.$MuridProfilePayload, S>

  type MuridProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuridProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuridProfileCountAggregateInputType | true
    }

  export interface MuridProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MuridProfile'], meta: { name: 'MuridProfile' } }
    /**
     * Find zero or one MuridProfile that matches the filter.
     * @param {MuridProfileFindUniqueArgs} args - Arguments to find a MuridProfile
     * @example
     * // Get one MuridProfile
     * const muridProfile = await prisma.muridProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuridProfileFindUniqueArgs>(args: SelectSubset<T, MuridProfileFindUniqueArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MuridProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuridProfileFindUniqueOrThrowArgs} args - Arguments to find a MuridProfile
     * @example
     * // Get one MuridProfile
     * const muridProfile = await prisma.muridProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuridProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MuridProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuridProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileFindFirstArgs} args - Arguments to find a MuridProfile
     * @example
     * // Get one MuridProfile
     * const muridProfile = await prisma.muridProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuridProfileFindFirstArgs>(args?: SelectSubset<T, MuridProfileFindFirstArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuridProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileFindFirstOrThrowArgs} args - Arguments to find a MuridProfile
     * @example
     * // Get one MuridProfile
     * const muridProfile = await prisma.muridProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuridProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MuridProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MuridProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MuridProfiles
     * const muridProfiles = await prisma.muridProfile.findMany()
     * 
     * // Get first 10 MuridProfiles
     * const muridProfiles = await prisma.muridProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muridProfileWithIdOnly = await prisma.muridProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuridProfileFindManyArgs>(args?: SelectSubset<T, MuridProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MuridProfile.
     * @param {MuridProfileCreateArgs} args - Arguments to create a MuridProfile.
     * @example
     * // Create one MuridProfile
     * const MuridProfile = await prisma.muridProfile.create({
     *   data: {
     *     // ... data to create a MuridProfile
     *   }
     * })
     * 
     */
    create<T extends MuridProfileCreateArgs>(args: SelectSubset<T, MuridProfileCreateArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MuridProfiles.
     * @param {MuridProfileCreateManyArgs} args - Arguments to create many MuridProfiles.
     * @example
     * // Create many MuridProfiles
     * const muridProfile = await prisma.muridProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuridProfileCreateManyArgs>(args?: SelectSubset<T, MuridProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MuridProfiles and returns the data saved in the database.
     * @param {MuridProfileCreateManyAndReturnArgs} args - Arguments to create many MuridProfiles.
     * @example
     * // Create many MuridProfiles
     * const muridProfile = await prisma.muridProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MuridProfiles and only return the `id`
     * const muridProfileWithIdOnly = await prisma.muridProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuridProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MuridProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MuridProfile.
     * @param {MuridProfileDeleteArgs} args - Arguments to delete one MuridProfile.
     * @example
     * // Delete one MuridProfile
     * const MuridProfile = await prisma.muridProfile.delete({
     *   where: {
     *     // ... filter to delete one MuridProfile
     *   }
     * })
     * 
     */
    delete<T extends MuridProfileDeleteArgs>(args: SelectSubset<T, MuridProfileDeleteArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MuridProfile.
     * @param {MuridProfileUpdateArgs} args - Arguments to update one MuridProfile.
     * @example
     * // Update one MuridProfile
     * const muridProfile = await prisma.muridProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuridProfileUpdateArgs>(args: SelectSubset<T, MuridProfileUpdateArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MuridProfiles.
     * @param {MuridProfileDeleteManyArgs} args - Arguments to filter MuridProfiles to delete.
     * @example
     * // Delete a few MuridProfiles
     * const { count } = await prisma.muridProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuridProfileDeleteManyArgs>(args?: SelectSubset<T, MuridProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuridProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MuridProfiles
     * const muridProfile = await prisma.muridProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuridProfileUpdateManyArgs>(args: SelectSubset<T, MuridProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuridProfiles and returns the data updated in the database.
     * @param {MuridProfileUpdateManyAndReturnArgs} args - Arguments to update many MuridProfiles.
     * @example
     * // Update many MuridProfiles
     * const muridProfile = await prisma.muridProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MuridProfiles and only return the `id`
     * const muridProfileWithIdOnly = await prisma.muridProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MuridProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MuridProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MuridProfile.
     * @param {MuridProfileUpsertArgs} args - Arguments to update or create a MuridProfile.
     * @example
     * // Update or create a MuridProfile
     * const muridProfile = await prisma.muridProfile.upsert({
     *   create: {
     *     // ... data to create a MuridProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MuridProfile we want to update
     *   }
     * })
     */
    upsert<T extends MuridProfileUpsertArgs>(args: SelectSubset<T, MuridProfileUpsertArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MuridProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileCountArgs} args - Arguments to filter MuridProfiles to count.
     * @example
     * // Count the number of MuridProfiles
     * const count = await prisma.muridProfile.count({
     *   where: {
     *     // ... the filter for the MuridProfiles we want to count
     *   }
     * })
    **/
    count<T extends MuridProfileCountArgs>(
      args?: Subset<T, MuridProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuridProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MuridProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MuridProfileAggregateArgs>(args: Subset<T, MuridProfileAggregateArgs>): Prisma.PrismaPromise<GetMuridProfileAggregateType<T>>

    /**
     * Group by MuridProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridProfileGroupByArgs} args - Group by arguments.
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
      T extends MuridProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuridProfileGroupByArgs['orderBy'] }
        : { orderBy?: MuridProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MuridProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuridProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MuridProfile model
   */
  readonly fields: MuridProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MuridProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuridProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends MuridProfile$kelasArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfile$kelasArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rfid<T extends MuridProfile$rfidArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfile$rfidArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends MuridProfile$UserArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfile$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    waliMurids<T extends MuridProfile$waliMuridsArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfile$waliMuridsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    absensi<T extends MuridProfile$absensiArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfile$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MuridProfile model
   */
  interface MuridProfileFieldRefs {
    readonly id: FieldRef<"MuridProfile", 'Int'>
    readonly nis: FieldRef<"MuridProfile", 'Int'>
    readonly name: FieldRef<"MuridProfile", 'String'>
    readonly noMurid: FieldRef<"MuridProfile", 'String'>
    readonly kelasId: FieldRef<"MuridProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MuridProfile findUnique
   */
  export type MuridProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter, which MuridProfile to fetch.
     */
    where: MuridProfileWhereUniqueInput
  }

  /**
   * MuridProfile findUniqueOrThrow
   */
  export type MuridProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter, which MuridProfile to fetch.
     */
    where: MuridProfileWhereUniqueInput
  }

  /**
   * MuridProfile findFirst
   */
  export type MuridProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter, which MuridProfile to fetch.
     */
    where?: MuridProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuridProfiles to fetch.
     */
    orderBy?: MuridProfileOrderByWithRelationInput | MuridProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuridProfiles.
     */
    cursor?: MuridProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuridProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuridProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuridProfiles.
     */
    distinct?: MuridProfileScalarFieldEnum | MuridProfileScalarFieldEnum[]
  }

  /**
   * MuridProfile findFirstOrThrow
   */
  export type MuridProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter, which MuridProfile to fetch.
     */
    where?: MuridProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuridProfiles to fetch.
     */
    orderBy?: MuridProfileOrderByWithRelationInput | MuridProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuridProfiles.
     */
    cursor?: MuridProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuridProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuridProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuridProfiles.
     */
    distinct?: MuridProfileScalarFieldEnum | MuridProfileScalarFieldEnum[]
  }

  /**
   * MuridProfile findMany
   */
  export type MuridProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter, which MuridProfiles to fetch.
     */
    where?: MuridProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuridProfiles to fetch.
     */
    orderBy?: MuridProfileOrderByWithRelationInput | MuridProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MuridProfiles.
     */
    cursor?: MuridProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuridProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuridProfiles.
     */
    skip?: number
    distinct?: MuridProfileScalarFieldEnum | MuridProfileScalarFieldEnum[]
  }

  /**
   * MuridProfile create
   */
  export type MuridProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MuridProfile.
     */
    data: XOR<MuridProfileCreateInput, MuridProfileUncheckedCreateInput>
  }

  /**
   * MuridProfile createMany
   */
  export type MuridProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MuridProfiles.
     */
    data: MuridProfileCreateManyInput | MuridProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuridProfile createManyAndReturn
   */
  export type MuridProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MuridProfiles.
     */
    data: MuridProfileCreateManyInput | MuridProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MuridProfile update
   */
  export type MuridProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MuridProfile.
     */
    data: XOR<MuridProfileUpdateInput, MuridProfileUncheckedUpdateInput>
    /**
     * Choose, which MuridProfile to update.
     */
    where: MuridProfileWhereUniqueInput
  }

  /**
   * MuridProfile updateMany
   */
  export type MuridProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MuridProfiles.
     */
    data: XOR<MuridProfileUpdateManyMutationInput, MuridProfileUncheckedUpdateManyInput>
    /**
     * Filter which MuridProfiles to update
     */
    where?: MuridProfileWhereInput
    /**
     * Limit how many MuridProfiles to update.
     */
    limit?: number
  }

  /**
   * MuridProfile updateManyAndReturn
   */
  export type MuridProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * The data used to update MuridProfiles.
     */
    data: XOR<MuridProfileUpdateManyMutationInput, MuridProfileUncheckedUpdateManyInput>
    /**
     * Filter which MuridProfiles to update
     */
    where?: MuridProfileWhereInput
    /**
     * Limit how many MuridProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MuridProfile upsert
   */
  export type MuridProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MuridProfile to update in case it exists.
     */
    where: MuridProfileWhereUniqueInput
    /**
     * In case the MuridProfile found by the `where` argument doesn't exist, create a new MuridProfile with this data.
     */
    create: XOR<MuridProfileCreateInput, MuridProfileUncheckedCreateInput>
    /**
     * In case the MuridProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuridProfileUpdateInput, MuridProfileUncheckedUpdateInput>
  }

  /**
   * MuridProfile delete
   */
  export type MuridProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    /**
     * Filter which MuridProfile to delete.
     */
    where: MuridProfileWhereUniqueInput
  }

  /**
   * MuridProfile deleteMany
   */
  export type MuridProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuridProfiles to delete
     */
    where?: MuridProfileWhereInput
    /**
     * Limit how many MuridProfiles to delete.
     */
    limit?: number
  }

  /**
   * MuridProfile.kelas
   */
  export type MuridProfile$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
  }

  /**
   * MuridProfile.rfid
   */
  export type MuridProfile$rfidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    where?: RfidWhereInput
  }

  /**
   * MuridProfile.User
   */
  export type MuridProfile$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MuridProfile.waliMurids
   */
  export type MuridProfile$waliMuridsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    where?: WaliMuridWhereInput
    orderBy?: WaliMuridOrderByWithRelationInput | WaliMuridOrderByWithRelationInput[]
    cursor?: WaliMuridWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaliMuridScalarFieldEnum | WaliMuridScalarFieldEnum[]
  }

  /**
   * MuridProfile.absensi
   */
  export type MuridProfile$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * MuridProfile without action
   */
  export type MuridProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
  }


  /**
   * Model WaliMurid
   */

  export type AggregateWaliMurid = {
    _count: WaliMuridCountAggregateOutputType | null
    _avg: WaliMuridAvgAggregateOutputType | null
    _sum: WaliMuridSumAggregateOutputType | null
    _min: WaliMuridMinAggregateOutputType | null
    _max: WaliMuridMaxAggregateOutputType | null
  }

  export type WaliMuridAvgAggregateOutputType = {
    id: number | null
    muridId: number | null
  }

  export type WaliMuridSumAggregateOutputType = {
    id: number | null
    muridId: number | null
  }

  export type WaliMuridMinAggregateOutputType = {
    id: number | null
    nameWaliMurid: string | null
    noWaliMurid: string | null
    muridId: number | null
  }

  export type WaliMuridMaxAggregateOutputType = {
    id: number | null
    nameWaliMurid: string | null
    noWaliMurid: string | null
    muridId: number | null
  }

  export type WaliMuridCountAggregateOutputType = {
    id: number
    nameWaliMurid: number
    noWaliMurid: number
    muridId: number
    _all: number
  }


  export type WaliMuridAvgAggregateInputType = {
    id?: true
    muridId?: true
  }

  export type WaliMuridSumAggregateInputType = {
    id?: true
    muridId?: true
  }

  export type WaliMuridMinAggregateInputType = {
    id?: true
    nameWaliMurid?: true
    noWaliMurid?: true
    muridId?: true
  }

  export type WaliMuridMaxAggregateInputType = {
    id?: true
    nameWaliMurid?: true
    noWaliMurid?: true
    muridId?: true
  }

  export type WaliMuridCountAggregateInputType = {
    id?: true
    nameWaliMurid?: true
    noWaliMurid?: true
    muridId?: true
    _all?: true
  }

  export type WaliMuridAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliMurid to aggregate.
     */
    where?: WaliMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliMurids to fetch.
     */
    orderBy?: WaliMuridOrderByWithRelationInput | WaliMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaliMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaliMurids
    **/
    _count?: true | WaliMuridCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaliMuridAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaliMuridSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaliMuridMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaliMuridMaxAggregateInputType
  }

  export type GetWaliMuridAggregateType<T extends WaliMuridAggregateArgs> = {
        [P in keyof T & keyof AggregateWaliMurid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaliMurid[P]>
      : GetScalarType<T[P], AggregateWaliMurid[P]>
  }




  export type WaliMuridGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliMuridWhereInput
    orderBy?: WaliMuridOrderByWithAggregationInput | WaliMuridOrderByWithAggregationInput[]
    by: WaliMuridScalarFieldEnum[] | WaliMuridScalarFieldEnum
    having?: WaliMuridScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaliMuridCountAggregateInputType | true
    _avg?: WaliMuridAvgAggregateInputType
    _sum?: WaliMuridSumAggregateInputType
    _min?: WaliMuridMinAggregateInputType
    _max?: WaliMuridMaxAggregateInputType
  }

  export type WaliMuridGroupByOutputType = {
    id: number
    nameWaliMurid: string
    noWaliMurid: string
    muridId: number
    _count: WaliMuridCountAggregateOutputType | null
    _avg: WaliMuridAvgAggregateOutputType | null
    _sum: WaliMuridSumAggregateOutputType | null
    _min: WaliMuridMinAggregateOutputType | null
    _max: WaliMuridMaxAggregateOutputType | null
  }

  type GetWaliMuridGroupByPayload<T extends WaliMuridGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaliMuridGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaliMuridGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaliMuridGroupByOutputType[P]>
            : GetScalarType<T[P], WaliMuridGroupByOutputType[P]>
        }
      >
    >


  export type WaliMuridSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameWaliMurid?: boolean
    noWaliMurid?: boolean
    muridId?: boolean
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliMurid"]>

  export type WaliMuridSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameWaliMurid?: boolean
    noWaliMurid?: boolean
    muridId?: boolean
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliMurid"]>

  export type WaliMuridSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameWaliMurid?: boolean
    noWaliMurid?: boolean
    muridId?: boolean
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliMurid"]>

  export type WaliMuridSelectScalar = {
    id?: boolean
    nameWaliMurid?: boolean
    noWaliMurid?: boolean
    muridId?: boolean
  }

  export type WaliMuridOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameWaliMurid" | "noWaliMurid" | "muridId", ExtArgs["result"]["waliMurid"]>
  export type WaliMuridInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }
  export type WaliMuridIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }
  export type WaliMuridIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    murid?: boolean | MuridProfileDefaultArgs<ExtArgs>
  }

  export type $WaliMuridPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaliMurid"
    objects: {
      murid: Prisma.$MuridProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameWaliMurid: string
      noWaliMurid: string
      muridId: number
    }, ExtArgs["result"]["waliMurid"]>
    composites: {}
  }

  type WaliMuridGetPayload<S extends boolean | null | undefined | WaliMuridDefaultArgs> = $Result.GetResult<Prisma.$WaliMuridPayload, S>

  type WaliMuridCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaliMuridFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaliMuridCountAggregateInputType | true
    }

  export interface WaliMuridDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaliMurid'], meta: { name: 'WaliMurid' } }
    /**
     * Find zero or one WaliMurid that matches the filter.
     * @param {WaliMuridFindUniqueArgs} args - Arguments to find a WaliMurid
     * @example
     * // Get one WaliMurid
     * const waliMurid = await prisma.waliMurid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaliMuridFindUniqueArgs>(args: SelectSubset<T, WaliMuridFindUniqueArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaliMurid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaliMuridFindUniqueOrThrowArgs} args - Arguments to find a WaliMurid
     * @example
     * // Get one WaliMurid
     * const waliMurid = await prisma.waliMurid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaliMuridFindUniqueOrThrowArgs>(args: SelectSubset<T, WaliMuridFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliMurid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridFindFirstArgs} args - Arguments to find a WaliMurid
     * @example
     * // Get one WaliMurid
     * const waliMurid = await prisma.waliMurid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaliMuridFindFirstArgs>(args?: SelectSubset<T, WaliMuridFindFirstArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliMurid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridFindFirstOrThrowArgs} args - Arguments to find a WaliMurid
     * @example
     * // Get one WaliMurid
     * const waliMurid = await prisma.waliMurid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaliMuridFindFirstOrThrowArgs>(args?: SelectSubset<T, WaliMuridFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaliMurids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaliMurids
     * const waliMurids = await prisma.waliMurid.findMany()
     * 
     * // Get first 10 WaliMurids
     * const waliMurids = await prisma.waliMurid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waliMuridWithIdOnly = await prisma.waliMurid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaliMuridFindManyArgs>(args?: SelectSubset<T, WaliMuridFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaliMurid.
     * @param {WaliMuridCreateArgs} args - Arguments to create a WaliMurid.
     * @example
     * // Create one WaliMurid
     * const WaliMurid = await prisma.waliMurid.create({
     *   data: {
     *     // ... data to create a WaliMurid
     *   }
     * })
     * 
     */
    create<T extends WaliMuridCreateArgs>(args: SelectSubset<T, WaliMuridCreateArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaliMurids.
     * @param {WaliMuridCreateManyArgs} args - Arguments to create many WaliMurids.
     * @example
     * // Create many WaliMurids
     * const waliMurid = await prisma.waliMurid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaliMuridCreateManyArgs>(args?: SelectSubset<T, WaliMuridCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaliMurids and returns the data saved in the database.
     * @param {WaliMuridCreateManyAndReturnArgs} args - Arguments to create many WaliMurids.
     * @example
     * // Create many WaliMurids
     * const waliMurid = await prisma.waliMurid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaliMurids and only return the `id`
     * const waliMuridWithIdOnly = await prisma.waliMurid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaliMuridCreateManyAndReturnArgs>(args?: SelectSubset<T, WaliMuridCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaliMurid.
     * @param {WaliMuridDeleteArgs} args - Arguments to delete one WaliMurid.
     * @example
     * // Delete one WaliMurid
     * const WaliMurid = await prisma.waliMurid.delete({
     *   where: {
     *     // ... filter to delete one WaliMurid
     *   }
     * })
     * 
     */
    delete<T extends WaliMuridDeleteArgs>(args: SelectSubset<T, WaliMuridDeleteArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaliMurid.
     * @param {WaliMuridUpdateArgs} args - Arguments to update one WaliMurid.
     * @example
     * // Update one WaliMurid
     * const waliMurid = await prisma.waliMurid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaliMuridUpdateArgs>(args: SelectSubset<T, WaliMuridUpdateArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaliMurids.
     * @param {WaliMuridDeleteManyArgs} args - Arguments to filter WaliMurids to delete.
     * @example
     * // Delete a few WaliMurids
     * const { count } = await prisma.waliMurid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaliMuridDeleteManyArgs>(args?: SelectSubset<T, WaliMuridDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliMurids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaliMurids
     * const waliMurid = await prisma.waliMurid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaliMuridUpdateManyArgs>(args: SelectSubset<T, WaliMuridUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliMurids and returns the data updated in the database.
     * @param {WaliMuridUpdateManyAndReturnArgs} args - Arguments to update many WaliMurids.
     * @example
     * // Update many WaliMurids
     * const waliMurid = await prisma.waliMurid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaliMurids and only return the `id`
     * const waliMuridWithIdOnly = await prisma.waliMurid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaliMuridUpdateManyAndReturnArgs>(args: SelectSubset<T, WaliMuridUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaliMurid.
     * @param {WaliMuridUpsertArgs} args - Arguments to update or create a WaliMurid.
     * @example
     * // Update or create a WaliMurid
     * const waliMurid = await prisma.waliMurid.upsert({
     *   create: {
     *     // ... data to create a WaliMurid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaliMurid we want to update
     *   }
     * })
     */
    upsert<T extends WaliMuridUpsertArgs>(args: SelectSubset<T, WaliMuridUpsertArgs<ExtArgs>>): Prisma__WaliMuridClient<$Result.GetResult<Prisma.$WaliMuridPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaliMurids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridCountArgs} args - Arguments to filter WaliMurids to count.
     * @example
     * // Count the number of WaliMurids
     * const count = await prisma.waliMurid.count({
     *   where: {
     *     // ... the filter for the WaliMurids we want to count
     *   }
     * })
    **/
    count<T extends WaliMuridCountArgs>(
      args?: Subset<T, WaliMuridCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaliMuridCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaliMurid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaliMuridAggregateArgs>(args: Subset<T, WaliMuridAggregateArgs>): Prisma.PrismaPromise<GetWaliMuridAggregateType<T>>

    /**
     * Group by WaliMurid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliMuridGroupByArgs} args - Group by arguments.
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
      T extends WaliMuridGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaliMuridGroupByArgs['orderBy'] }
        : { orderBy?: WaliMuridGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaliMuridGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaliMuridGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaliMurid model
   */
  readonly fields: WaliMuridFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaliMurid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaliMuridClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    murid<T extends MuridProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuridProfileDefaultArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaliMurid model
   */
  interface WaliMuridFieldRefs {
    readonly id: FieldRef<"WaliMurid", 'Int'>
    readonly nameWaliMurid: FieldRef<"WaliMurid", 'String'>
    readonly noWaliMurid: FieldRef<"WaliMurid", 'String'>
    readonly muridId: FieldRef<"WaliMurid", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WaliMurid findUnique
   */
  export type WaliMuridFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter, which WaliMurid to fetch.
     */
    where: WaliMuridWhereUniqueInput
  }

  /**
   * WaliMurid findUniqueOrThrow
   */
  export type WaliMuridFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter, which WaliMurid to fetch.
     */
    where: WaliMuridWhereUniqueInput
  }

  /**
   * WaliMurid findFirst
   */
  export type WaliMuridFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter, which WaliMurid to fetch.
     */
    where?: WaliMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliMurids to fetch.
     */
    orderBy?: WaliMuridOrderByWithRelationInput | WaliMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliMurids.
     */
    cursor?: WaliMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliMurids.
     */
    distinct?: WaliMuridScalarFieldEnum | WaliMuridScalarFieldEnum[]
  }

  /**
   * WaliMurid findFirstOrThrow
   */
  export type WaliMuridFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter, which WaliMurid to fetch.
     */
    where?: WaliMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliMurids to fetch.
     */
    orderBy?: WaliMuridOrderByWithRelationInput | WaliMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliMurids.
     */
    cursor?: WaliMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliMurids.
     */
    distinct?: WaliMuridScalarFieldEnum | WaliMuridScalarFieldEnum[]
  }

  /**
   * WaliMurid findMany
   */
  export type WaliMuridFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter, which WaliMurids to fetch.
     */
    where?: WaliMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliMurids to fetch.
     */
    orderBy?: WaliMuridOrderByWithRelationInput | WaliMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaliMurids.
     */
    cursor?: WaliMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliMurids.
     */
    skip?: number
    distinct?: WaliMuridScalarFieldEnum | WaliMuridScalarFieldEnum[]
  }

  /**
   * WaliMurid create
   */
  export type WaliMuridCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * The data needed to create a WaliMurid.
     */
    data: XOR<WaliMuridCreateInput, WaliMuridUncheckedCreateInput>
  }

  /**
   * WaliMurid createMany
   */
  export type WaliMuridCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaliMurids.
     */
    data: WaliMuridCreateManyInput | WaliMuridCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaliMurid createManyAndReturn
   */
  export type WaliMuridCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * The data used to create many WaliMurids.
     */
    data: WaliMuridCreateManyInput | WaliMuridCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliMurid update
   */
  export type WaliMuridUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * The data needed to update a WaliMurid.
     */
    data: XOR<WaliMuridUpdateInput, WaliMuridUncheckedUpdateInput>
    /**
     * Choose, which WaliMurid to update.
     */
    where: WaliMuridWhereUniqueInput
  }

  /**
   * WaliMurid updateMany
   */
  export type WaliMuridUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaliMurids.
     */
    data: XOR<WaliMuridUpdateManyMutationInput, WaliMuridUncheckedUpdateManyInput>
    /**
     * Filter which WaliMurids to update
     */
    where?: WaliMuridWhereInput
    /**
     * Limit how many WaliMurids to update.
     */
    limit?: number
  }

  /**
   * WaliMurid updateManyAndReturn
   */
  export type WaliMuridUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * The data used to update WaliMurids.
     */
    data: XOR<WaliMuridUpdateManyMutationInput, WaliMuridUncheckedUpdateManyInput>
    /**
     * Filter which WaliMurids to update
     */
    where?: WaliMuridWhereInput
    /**
     * Limit how many WaliMurids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliMurid upsert
   */
  export type WaliMuridUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * The filter to search for the WaliMurid to update in case it exists.
     */
    where: WaliMuridWhereUniqueInput
    /**
     * In case the WaliMurid found by the `where` argument doesn't exist, create a new WaliMurid with this data.
     */
    create: XOR<WaliMuridCreateInput, WaliMuridUncheckedCreateInput>
    /**
     * In case the WaliMurid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaliMuridUpdateInput, WaliMuridUncheckedUpdateInput>
  }

  /**
   * WaliMurid delete
   */
  export type WaliMuridDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
    /**
     * Filter which WaliMurid to delete.
     */
    where: WaliMuridWhereUniqueInput
  }

  /**
   * WaliMurid deleteMany
   */
  export type WaliMuridDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliMurids to delete
     */
    where?: WaliMuridWhereInput
    /**
     * Limit how many WaliMurids to delete.
     */
    limit?: number
  }

  /**
   * WaliMurid without action
   */
  export type WaliMuridDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliMurid
     */
    select?: WaliMuridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliMurid
     */
    omit?: WaliMuridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliMuridInclude<ExtArgs> | null
  }


  /**
   * Model GuruProfile
   */

  export type AggregateGuruProfile = {
    _count: GuruProfileCountAggregateOutputType | null
    _avg: GuruProfileAvgAggregateOutputType | null
    _sum: GuruProfileSumAggregateOutputType | null
    _min: GuruProfileMinAggregateOutputType | null
    _max: GuruProfileMaxAggregateOutputType | null
  }

  export type GuruProfileAvgAggregateOutputType = {
    id: number | null
    nik: number | null
  }

  export type GuruProfileSumAggregateOutputType = {
    id: number | null
    nik: number | null
  }

  export type GuruProfileMinAggregateOutputType = {
    id: number | null
    nik: number | null
    name: string | null
    noGuru: string | null
  }

  export type GuruProfileMaxAggregateOutputType = {
    id: number | null
    nik: number | null
    name: string | null
    noGuru: string | null
  }

  export type GuruProfileCountAggregateOutputType = {
    id: number
    nik: number
    name: number
    noGuru: number
    _all: number
  }


  export type GuruProfileAvgAggregateInputType = {
    id?: true
    nik?: true
  }

  export type GuruProfileSumAggregateInputType = {
    id?: true
    nik?: true
  }

  export type GuruProfileMinAggregateInputType = {
    id?: true
    nik?: true
    name?: true
    noGuru?: true
  }

  export type GuruProfileMaxAggregateInputType = {
    id?: true
    nik?: true
    name?: true
    noGuru?: true
  }

  export type GuruProfileCountAggregateInputType = {
    id?: true
    nik?: true
    name?: true
    noGuru?: true
    _all?: true
  }

  export type GuruProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuruProfile to aggregate.
     */
    where?: GuruProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuruProfiles to fetch.
     */
    orderBy?: GuruProfileOrderByWithRelationInput | GuruProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuruProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuruProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuruProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuruProfiles
    **/
    _count?: true | GuruProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuruProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuruProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuruProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuruProfileMaxAggregateInputType
  }

  export type GetGuruProfileAggregateType<T extends GuruProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateGuruProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuruProfile[P]>
      : GetScalarType<T[P], AggregateGuruProfile[P]>
  }




  export type GuruProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuruProfileWhereInput
    orderBy?: GuruProfileOrderByWithAggregationInput | GuruProfileOrderByWithAggregationInput[]
    by: GuruProfileScalarFieldEnum[] | GuruProfileScalarFieldEnum
    having?: GuruProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuruProfileCountAggregateInputType | true
    _avg?: GuruProfileAvgAggregateInputType
    _sum?: GuruProfileSumAggregateInputType
    _min?: GuruProfileMinAggregateInputType
    _max?: GuruProfileMaxAggregateInputType
  }

  export type GuruProfileGroupByOutputType = {
    id: number
    nik: number
    name: string
    noGuru: string
    _count: GuruProfileCountAggregateOutputType | null
    _avg: GuruProfileAvgAggregateOutputType | null
    _sum: GuruProfileSumAggregateOutputType | null
    _min: GuruProfileMinAggregateOutputType | null
    _max: GuruProfileMaxAggregateOutputType | null
  }

  type GetGuruProfileGroupByPayload<T extends GuruProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuruProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuruProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuruProfileGroupByOutputType[P]>
            : GetScalarType<T[P], GuruProfileGroupByOutputType[P]>
        }
      >
    >


  export type GuruProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    name?: boolean
    noGuru?: boolean
    rfid?: boolean | GuruProfile$rfidArgs<ExtArgs>
    User?: boolean | GuruProfile$UserArgs<ExtArgs>
    Kelas?: boolean | GuruProfile$KelasArgs<ExtArgs>
    JadwalTugas?: boolean | GuruProfile$JadwalTugasArgs<ExtArgs>
    _count?: boolean | GuruProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guruProfile"]>

  export type GuruProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    name?: boolean
    noGuru?: boolean
  }, ExtArgs["result"]["guruProfile"]>

  export type GuruProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nik?: boolean
    name?: boolean
    noGuru?: boolean
  }, ExtArgs["result"]["guruProfile"]>

  export type GuruProfileSelectScalar = {
    id?: boolean
    nik?: boolean
    name?: boolean
    noGuru?: boolean
  }

  export type GuruProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nik" | "name" | "noGuru", ExtArgs["result"]["guruProfile"]>
  export type GuruProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfid?: boolean | GuruProfile$rfidArgs<ExtArgs>
    User?: boolean | GuruProfile$UserArgs<ExtArgs>
    Kelas?: boolean | GuruProfile$KelasArgs<ExtArgs>
    JadwalTugas?: boolean | GuruProfile$JadwalTugasArgs<ExtArgs>
    _count?: boolean | GuruProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuruProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuruProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuruProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuruProfile"
    objects: {
      rfid: Prisma.$RfidPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
      Kelas: Prisma.$KelasPayload<ExtArgs> | null
      JadwalTugas: Prisma.$JadwalTugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nik: number
      name: string
      noGuru: string
    }, ExtArgs["result"]["guruProfile"]>
    composites: {}
  }

  type GuruProfileGetPayload<S extends boolean | null | undefined | GuruProfileDefaultArgs> = $Result.GetResult<Prisma.$GuruProfilePayload, S>

  type GuruProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuruProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuruProfileCountAggregateInputType | true
    }

  export interface GuruProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuruProfile'], meta: { name: 'GuruProfile' } }
    /**
     * Find zero or one GuruProfile that matches the filter.
     * @param {GuruProfileFindUniqueArgs} args - Arguments to find a GuruProfile
     * @example
     * // Get one GuruProfile
     * const guruProfile = await prisma.guruProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuruProfileFindUniqueArgs>(args: SelectSubset<T, GuruProfileFindUniqueArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuruProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuruProfileFindUniqueOrThrowArgs} args - Arguments to find a GuruProfile
     * @example
     * // Get one GuruProfile
     * const guruProfile = await prisma.guruProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuruProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, GuruProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuruProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileFindFirstArgs} args - Arguments to find a GuruProfile
     * @example
     * // Get one GuruProfile
     * const guruProfile = await prisma.guruProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuruProfileFindFirstArgs>(args?: SelectSubset<T, GuruProfileFindFirstArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuruProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileFindFirstOrThrowArgs} args - Arguments to find a GuruProfile
     * @example
     * // Get one GuruProfile
     * const guruProfile = await prisma.guruProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuruProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, GuruProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuruProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuruProfiles
     * const guruProfiles = await prisma.guruProfile.findMany()
     * 
     * // Get first 10 GuruProfiles
     * const guruProfiles = await prisma.guruProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guruProfileWithIdOnly = await prisma.guruProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuruProfileFindManyArgs>(args?: SelectSubset<T, GuruProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuruProfile.
     * @param {GuruProfileCreateArgs} args - Arguments to create a GuruProfile.
     * @example
     * // Create one GuruProfile
     * const GuruProfile = await prisma.guruProfile.create({
     *   data: {
     *     // ... data to create a GuruProfile
     *   }
     * })
     * 
     */
    create<T extends GuruProfileCreateArgs>(args: SelectSubset<T, GuruProfileCreateArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuruProfiles.
     * @param {GuruProfileCreateManyArgs} args - Arguments to create many GuruProfiles.
     * @example
     * // Create many GuruProfiles
     * const guruProfile = await prisma.guruProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuruProfileCreateManyArgs>(args?: SelectSubset<T, GuruProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuruProfiles and returns the data saved in the database.
     * @param {GuruProfileCreateManyAndReturnArgs} args - Arguments to create many GuruProfiles.
     * @example
     * // Create many GuruProfiles
     * const guruProfile = await prisma.guruProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuruProfiles and only return the `id`
     * const guruProfileWithIdOnly = await prisma.guruProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuruProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, GuruProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuruProfile.
     * @param {GuruProfileDeleteArgs} args - Arguments to delete one GuruProfile.
     * @example
     * // Delete one GuruProfile
     * const GuruProfile = await prisma.guruProfile.delete({
     *   where: {
     *     // ... filter to delete one GuruProfile
     *   }
     * })
     * 
     */
    delete<T extends GuruProfileDeleteArgs>(args: SelectSubset<T, GuruProfileDeleteArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuruProfile.
     * @param {GuruProfileUpdateArgs} args - Arguments to update one GuruProfile.
     * @example
     * // Update one GuruProfile
     * const guruProfile = await prisma.guruProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuruProfileUpdateArgs>(args: SelectSubset<T, GuruProfileUpdateArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuruProfiles.
     * @param {GuruProfileDeleteManyArgs} args - Arguments to filter GuruProfiles to delete.
     * @example
     * // Delete a few GuruProfiles
     * const { count } = await prisma.guruProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuruProfileDeleteManyArgs>(args?: SelectSubset<T, GuruProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuruProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuruProfiles
     * const guruProfile = await prisma.guruProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuruProfileUpdateManyArgs>(args: SelectSubset<T, GuruProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuruProfiles and returns the data updated in the database.
     * @param {GuruProfileUpdateManyAndReturnArgs} args - Arguments to update many GuruProfiles.
     * @example
     * // Update many GuruProfiles
     * const guruProfile = await prisma.guruProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuruProfiles and only return the `id`
     * const guruProfileWithIdOnly = await prisma.guruProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuruProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, GuruProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuruProfile.
     * @param {GuruProfileUpsertArgs} args - Arguments to update or create a GuruProfile.
     * @example
     * // Update or create a GuruProfile
     * const guruProfile = await prisma.guruProfile.upsert({
     *   create: {
     *     // ... data to create a GuruProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuruProfile we want to update
     *   }
     * })
     */
    upsert<T extends GuruProfileUpsertArgs>(args: SelectSubset<T, GuruProfileUpsertArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuruProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileCountArgs} args - Arguments to filter GuruProfiles to count.
     * @example
     * // Count the number of GuruProfiles
     * const count = await prisma.guruProfile.count({
     *   where: {
     *     // ... the filter for the GuruProfiles we want to count
     *   }
     * })
    **/
    count<T extends GuruProfileCountArgs>(
      args?: Subset<T, GuruProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuruProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuruProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuruProfileAggregateArgs>(args: Subset<T, GuruProfileAggregateArgs>): Prisma.PrismaPromise<GetGuruProfileAggregateType<T>>

    /**
     * Group by GuruProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruProfileGroupByArgs} args - Group by arguments.
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
      T extends GuruProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuruProfileGroupByArgs['orderBy'] }
        : { orderBy?: GuruProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuruProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuruProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuruProfile model
   */
  readonly fields: GuruProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuruProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuruProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rfid<T extends GuruProfile$rfidArgs<ExtArgs> = {}>(args?: Subset<T, GuruProfile$rfidArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends GuruProfile$UserArgs<ExtArgs> = {}>(args?: Subset<T, GuruProfile$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Kelas<T extends GuruProfile$KelasArgs<ExtArgs> = {}>(args?: Subset<T, GuruProfile$KelasArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    JadwalTugas<T extends GuruProfile$JadwalTugasArgs<ExtArgs> = {}>(args?: Subset<T, GuruProfile$JadwalTugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuruProfile model
   */
  interface GuruProfileFieldRefs {
    readonly id: FieldRef<"GuruProfile", 'Int'>
    readonly nik: FieldRef<"GuruProfile", 'Int'>
    readonly name: FieldRef<"GuruProfile", 'String'>
    readonly noGuru: FieldRef<"GuruProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuruProfile findUnique
   */
  export type GuruProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter, which GuruProfile to fetch.
     */
    where: GuruProfileWhereUniqueInput
  }

  /**
   * GuruProfile findUniqueOrThrow
   */
  export type GuruProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter, which GuruProfile to fetch.
     */
    where: GuruProfileWhereUniqueInput
  }

  /**
   * GuruProfile findFirst
   */
  export type GuruProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter, which GuruProfile to fetch.
     */
    where?: GuruProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuruProfiles to fetch.
     */
    orderBy?: GuruProfileOrderByWithRelationInput | GuruProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuruProfiles.
     */
    cursor?: GuruProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuruProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuruProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuruProfiles.
     */
    distinct?: GuruProfileScalarFieldEnum | GuruProfileScalarFieldEnum[]
  }

  /**
   * GuruProfile findFirstOrThrow
   */
  export type GuruProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter, which GuruProfile to fetch.
     */
    where?: GuruProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuruProfiles to fetch.
     */
    orderBy?: GuruProfileOrderByWithRelationInput | GuruProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuruProfiles.
     */
    cursor?: GuruProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuruProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuruProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuruProfiles.
     */
    distinct?: GuruProfileScalarFieldEnum | GuruProfileScalarFieldEnum[]
  }

  /**
   * GuruProfile findMany
   */
  export type GuruProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter, which GuruProfiles to fetch.
     */
    where?: GuruProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuruProfiles to fetch.
     */
    orderBy?: GuruProfileOrderByWithRelationInput | GuruProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuruProfiles.
     */
    cursor?: GuruProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuruProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuruProfiles.
     */
    skip?: number
    distinct?: GuruProfileScalarFieldEnum | GuruProfileScalarFieldEnum[]
  }

  /**
   * GuruProfile create
   */
  export type GuruProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a GuruProfile.
     */
    data: XOR<GuruProfileCreateInput, GuruProfileUncheckedCreateInput>
  }

  /**
   * GuruProfile createMany
   */
  export type GuruProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuruProfiles.
     */
    data: GuruProfileCreateManyInput | GuruProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuruProfile createManyAndReturn
   */
  export type GuruProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * The data used to create many GuruProfiles.
     */
    data: GuruProfileCreateManyInput | GuruProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuruProfile update
   */
  export type GuruProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a GuruProfile.
     */
    data: XOR<GuruProfileUpdateInput, GuruProfileUncheckedUpdateInput>
    /**
     * Choose, which GuruProfile to update.
     */
    where: GuruProfileWhereUniqueInput
  }

  /**
   * GuruProfile updateMany
   */
  export type GuruProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuruProfiles.
     */
    data: XOR<GuruProfileUpdateManyMutationInput, GuruProfileUncheckedUpdateManyInput>
    /**
     * Filter which GuruProfiles to update
     */
    where?: GuruProfileWhereInput
    /**
     * Limit how many GuruProfiles to update.
     */
    limit?: number
  }

  /**
   * GuruProfile updateManyAndReturn
   */
  export type GuruProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * The data used to update GuruProfiles.
     */
    data: XOR<GuruProfileUpdateManyMutationInput, GuruProfileUncheckedUpdateManyInput>
    /**
     * Filter which GuruProfiles to update
     */
    where?: GuruProfileWhereInput
    /**
     * Limit how many GuruProfiles to update.
     */
    limit?: number
  }

  /**
   * GuruProfile upsert
   */
  export type GuruProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the GuruProfile to update in case it exists.
     */
    where: GuruProfileWhereUniqueInput
    /**
     * In case the GuruProfile found by the `where` argument doesn't exist, create a new GuruProfile with this data.
     */
    create: XOR<GuruProfileCreateInput, GuruProfileUncheckedCreateInput>
    /**
     * In case the GuruProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuruProfileUpdateInput, GuruProfileUncheckedUpdateInput>
  }

  /**
   * GuruProfile delete
   */
  export type GuruProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    /**
     * Filter which GuruProfile to delete.
     */
    where: GuruProfileWhereUniqueInput
  }

  /**
   * GuruProfile deleteMany
   */
  export type GuruProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuruProfiles to delete
     */
    where?: GuruProfileWhereInput
    /**
     * Limit how many GuruProfiles to delete.
     */
    limit?: number
  }

  /**
   * GuruProfile.rfid
   */
  export type GuruProfile$rfidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    where?: RfidWhereInput
  }

  /**
   * GuruProfile.User
   */
  export type GuruProfile$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GuruProfile.Kelas
   */
  export type GuruProfile$KelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
  }

  /**
   * GuruProfile.JadwalTugas
   */
  export type GuruProfile$JadwalTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    where?: JadwalTugasWhereInput
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    cursor?: JadwalTugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalTugasScalarFieldEnum | JadwalTugasScalarFieldEnum[]
  }

  /**
   * GuruProfile without action
   */
  export type GuruProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    id: number | null
    waliKelasId: number | null
  }

  export type KelasSumAggregateOutputType = {
    id: number | null
    waliKelasId: number | null
  }

  export type KelasMinAggregateOutputType = {
    id: number | null
    name: string | null
    waliKelasId: number | null
  }

  export type KelasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    waliKelasId: number | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    name: number
    waliKelasId: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    id?: true
    waliKelasId?: true
  }

  export type KelasSumAggregateInputType = {
    id?: true
    waliKelasId?: true
  }

  export type KelasMinAggregateInputType = {
    id?: true
    name?: true
    waliKelasId?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    name?: true
    waliKelasId?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    name?: true
    waliKelasId?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: number
    name: string
    waliKelasId: number | null
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    waliKelasId?: boolean
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
    muridProfile?: boolean | Kelas$muridProfileArgs<ExtArgs>
    JadwalTugas?: boolean | Kelas$JadwalTugasArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    waliKelasId?: boolean
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    waliKelasId?: boolean
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    name?: boolean
    waliKelasId?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "waliKelasId", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
    muridProfile?: boolean | Kelas$muridProfileArgs<ExtArgs>
    JadwalTugas?: boolean | Kelas$JadwalTugasArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      waliKelas: Prisma.$GuruProfilePayload<ExtArgs> | null
      muridProfile: Prisma.$MuridProfilePayload<ExtArgs>[]
      JadwalTugas: Prisma.$JadwalTugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      waliKelasId: number | null
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
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
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas model
   */
  readonly fields: KelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waliKelas<T extends Kelas$waliKelasArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$waliKelasArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    muridProfile<T extends Kelas$muridProfileArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$muridProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JadwalTugas<T extends Kelas$JadwalTugasArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$JadwalTugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'Int'>
    readonly name: FieldRef<"Kelas", 'String'>
    readonly waliKelasId: FieldRef<"Kelas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.waliKelas
   */
  export type Kelas$waliKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    where?: GuruProfileWhereInput
  }

  /**
   * Kelas.muridProfile
   */
  export type Kelas$muridProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    where?: MuridProfileWhereInput
    orderBy?: MuridProfileOrderByWithRelationInput | MuridProfileOrderByWithRelationInput[]
    cursor?: MuridProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuridProfileScalarFieldEnum | MuridProfileScalarFieldEnum[]
  }

  /**
   * Kelas.JadwalTugas
   */
  export type Kelas$JadwalTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    where?: JadwalTugasWhereInput
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    cursor?: JadwalTugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalTugasScalarFieldEnum | JadwalTugasScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiAvgAggregateOutputType = {
    id: number | null
    muridId: number | null
  }

  export type AbsensiSumAggregateOutputType = {
    id: number | null
    muridId: number | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: number | null
    rfidNumb: string | null
    muridId: number | null
    keterangan: $Enums.Keterangan | null
    tanggal: Date | null
    jamHadir: Date | null
    jamPulang: Date | null
    catatan: string | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: number | null
    rfidNumb: string | null
    muridId: number | null
    keterangan: $Enums.Keterangan | null
    tanggal: Date | null
    jamHadir: Date | null
    jamPulang: Date | null
    catatan: string | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    rfidNumb: number
    muridId: number
    keterangan: number
    tanggal: number
    jamHadir: number
    jamPulang: number
    catatan: number
    _all: number
  }


  export type AbsensiAvgAggregateInputType = {
    id?: true
    muridId?: true
  }

  export type AbsensiSumAggregateInputType = {
    id?: true
    muridId?: true
  }

  export type AbsensiMinAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridId?: true
    keterangan?: true
    tanggal?: true
    jamHadir?: true
    jamPulang?: true
    catatan?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridId?: true
    keterangan?: true
    tanggal?: true
    jamHadir?: true
    jamPulang?: true
    catatan?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridId?: true
    keterangan?: true
    tanggal?: true
    jamHadir?: true
    jamPulang?: true
    catatan?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _avg?: AbsensiAvgAggregateInputType
    _sum?: AbsensiSumAggregateInputType
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: number
    rfidNumb: string | null
    muridId: number | null
    keterangan: $Enums.Keterangan
    tanggal: Date | null
    jamHadir: Date | null
    jamPulang: Date | null
    catatan: string | null
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridId?: boolean
    keterangan?: boolean
    tanggal?: boolean
    jamHadir?: boolean
    jamPulang?: boolean
    catatan?: boolean
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridId?: boolean
    keterangan?: boolean
    tanggal?: boolean
    jamHadir?: boolean
    jamPulang?: boolean
    catatan?: boolean
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridId?: boolean
    keterangan?: boolean
    tanggal?: boolean
    jamHadir?: boolean
    jamPulang?: boolean
    catatan?: boolean
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectScalar = {
    id?: boolean
    rfidNumb?: boolean
    muridId?: boolean
    keterangan?: boolean
    tanggal?: boolean
    jamHadir?: boolean
    jamPulang?: boolean
    catatan?: boolean
  }

  export type AbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rfidNumb" | "muridId" | "keterangan" | "tanggal" | "jamHadir" | "jamPulang" | "catatan", ExtArgs["result"]["absensi"]>
  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }
  export type AbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }
  export type AbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfid?: boolean | Absensi$rfidArgs<ExtArgs>
    murid?: boolean | Absensi$muridArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      rfid: Prisma.$RfidPayload<ExtArgs> | null
      murid: Prisma.$MuridProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rfidNumb: string | null
      muridId: number | null
      keterangan: $Enums.Keterangan
      tanggal: Date | null
      jamHadir: Date | null
      jamPulang: Date | null
      catatan: string | null
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiFindUniqueArgs>(args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiFindFirstArgs>(args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiFindManyArgs>(args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
     */
    create<T extends AbsensiCreateArgs>(args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiCreateManyArgs>(args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absensis and returns the data saved in the database.
     * @param {AbsensiCreateManyAndReturnArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
     */
    delete<T extends AbsensiDeleteArgs>(args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiUpdateArgs>(args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiDeleteManyArgs>(args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiUpdateManyArgs>(args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis and returns the data updated in the database.
     * @param {AbsensiUpdateManyAndReturnArgs} args - Arguments to update many Absensis.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiUpsertArgs>(args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
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
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rfid<T extends Absensi$rfidArgs<ExtArgs> = {}>(args?: Subset<T, Absensi$rfidArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    murid<T extends Absensi$muridArgs<ExtArgs> = {}>(args?: Subset<T, Absensi$muridArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absensi model
   */
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'Int'>
    readonly rfidNumb: FieldRef<"Absensi", 'String'>
    readonly muridId: FieldRef<"Absensi", 'Int'>
    readonly keterangan: FieldRef<"Absensi", 'Keterangan'>
    readonly tanggal: FieldRef<"Absensi", 'DateTime'>
    readonly jamHadir: FieldRef<"Absensi", 'DateTime'>
    readonly jamPulang: FieldRef<"Absensi", 'DateTime'>
    readonly catatan: FieldRef<"Absensi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi createManyAndReturn
   */
  export type AbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
  }

  /**
   * Absensi updateManyAndReturn
   */
  export type AbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to delete.
     */
    limit?: number
  }

  /**
   * Absensi.rfid
   */
  export type Absensi$rfidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    where?: RfidWhereInput
  }

  /**
   * Absensi.murid
   */
  export type Absensi$muridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    where?: MuridProfileWhereInput
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Model JadwalTugas
   */

  export type AggregateJadwalTugas = {
    _count: JadwalTugasCountAggregateOutputType | null
    _avg: JadwalTugasAvgAggregateOutputType | null
    _sum: JadwalTugasSumAggregateOutputType | null
    _min: JadwalTugasMinAggregateOutputType | null
    _max: JadwalTugasMaxAggregateOutputType | null
  }

  export type JadwalTugasAvgAggregateOutputType = {
    id: number | null
    guruId: number | null
    kelasId: number | null
  }

  export type JadwalTugasSumAggregateOutputType = {
    id: number | null
    guruId: number | null
    kelasId: number | null
  }

  export type JadwalTugasMinAggregateOutputType = {
    id: number | null
    title: string | null
    start: Date | null
    end: Date | null
    description: string | null
    guruId: number | null
    kelasId: number | null
    createdAt: Date | null
  }

  export type JadwalTugasMaxAggregateOutputType = {
    id: number | null
    title: string | null
    start: Date | null
    end: Date | null
    description: string | null
    guruId: number | null
    kelasId: number | null
    createdAt: Date | null
  }

  export type JadwalTugasCountAggregateOutputType = {
    id: number
    title: number
    start: number
    end: number
    description: number
    guruId: number
    kelasId: number
    createdAt: number
    _all: number
  }


  export type JadwalTugasAvgAggregateInputType = {
    id?: true
    guruId?: true
    kelasId?: true
  }

  export type JadwalTugasSumAggregateInputType = {
    id?: true
    guruId?: true
    kelasId?: true
  }

  export type JadwalTugasMinAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    guruId?: true
    kelasId?: true
    createdAt?: true
  }

  export type JadwalTugasMaxAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    guruId?: true
    kelasId?: true
    createdAt?: true
  }

  export type JadwalTugasCountAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    guruId?: true
    kelasId?: true
    createdAt?: true
    _all?: true
  }

  export type JadwalTugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalTugas to aggregate.
     */
    where?: JadwalTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalTugases to fetch.
     */
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalTugases
    **/
    _count?: true | JadwalTugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalTugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalTugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalTugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalTugasMaxAggregateInputType
  }

  export type GetJadwalTugasAggregateType<T extends JadwalTugasAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalTugas[P]>
      : GetScalarType<T[P], AggregateJadwalTugas[P]>
  }




  export type JadwalTugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalTugasWhereInput
    orderBy?: JadwalTugasOrderByWithAggregationInput | JadwalTugasOrderByWithAggregationInput[]
    by: JadwalTugasScalarFieldEnum[] | JadwalTugasScalarFieldEnum
    having?: JadwalTugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalTugasCountAggregateInputType | true
    _avg?: JadwalTugasAvgAggregateInputType
    _sum?: JadwalTugasSumAggregateInputType
    _min?: JadwalTugasMinAggregateInputType
    _max?: JadwalTugasMaxAggregateInputType
  }

  export type JadwalTugasGroupByOutputType = {
    id: number
    title: string
    start: Date
    end: Date | null
    description: string
    guruId: number
    kelasId: number
    createdAt: Date
    _count: JadwalTugasCountAggregateOutputType | null
    _avg: JadwalTugasAvgAggregateOutputType | null
    _sum: JadwalTugasSumAggregateOutputType | null
    _min: JadwalTugasMinAggregateOutputType | null
    _max: JadwalTugasMaxAggregateOutputType | null
  }

  type GetJadwalTugasGroupByPayload<T extends JadwalTugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalTugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalTugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalTugasGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalTugasGroupByOutputType[P]>
        }
      >
    >


  export type JadwalTugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    guruId?: boolean
    kelasId?: boolean
    createdAt?: boolean
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalTugas"]>

  export type JadwalTugasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    guruId?: boolean
    kelasId?: boolean
    createdAt?: boolean
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalTugas"]>

  export type JadwalTugasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    guruId?: boolean
    kelasId?: boolean
    createdAt?: boolean
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalTugas"]>

  export type JadwalTugasSelectScalar = {
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    guruId?: boolean
    kelasId?: boolean
    createdAt?: boolean
  }

  export type JadwalTugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start" | "end" | "description" | "guruId" | "kelasId" | "createdAt", ExtArgs["result"]["jadwalTugas"]>
  export type JadwalTugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type JadwalTugasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type JadwalTugasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | GuruProfileDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $JadwalTugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalTugas"
    objects: {
      guru: Prisma.$GuruProfilePayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      start: Date
      end: Date | null
      description: string
      guruId: number
      kelasId: number
      createdAt: Date
    }, ExtArgs["result"]["jadwalTugas"]>
    composites: {}
  }

  type JadwalTugasGetPayload<S extends boolean | null | undefined | JadwalTugasDefaultArgs> = $Result.GetResult<Prisma.$JadwalTugasPayload, S>

  type JadwalTugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalTugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalTugasCountAggregateInputType | true
    }

  export interface JadwalTugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalTugas'], meta: { name: 'JadwalTugas' } }
    /**
     * Find zero or one JadwalTugas that matches the filter.
     * @param {JadwalTugasFindUniqueArgs} args - Arguments to find a JadwalTugas
     * @example
     * // Get one JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalTugasFindUniqueArgs>(args: SelectSubset<T, JadwalTugasFindUniqueArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalTugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalTugasFindUniqueOrThrowArgs} args - Arguments to find a JadwalTugas
     * @example
     * // Get one JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalTugasFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalTugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalTugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasFindFirstArgs} args - Arguments to find a JadwalTugas
     * @example
     * // Get one JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalTugasFindFirstArgs>(args?: SelectSubset<T, JadwalTugasFindFirstArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalTugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasFindFirstOrThrowArgs} args - Arguments to find a JadwalTugas
     * @example
     * // Get one JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalTugasFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalTugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalTugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalTugases
     * const jadwalTugases = await prisma.jadwalTugas.findMany()
     * 
     * // Get first 10 JadwalTugases
     * const jadwalTugases = await prisma.jadwalTugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalTugasWithIdOnly = await prisma.jadwalTugas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalTugasFindManyArgs>(args?: SelectSubset<T, JadwalTugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalTugas.
     * @param {JadwalTugasCreateArgs} args - Arguments to create a JadwalTugas.
     * @example
     * // Create one JadwalTugas
     * const JadwalTugas = await prisma.jadwalTugas.create({
     *   data: {
     *     // ... data to create a JadwalTugas
     *   }
     * })
     * 
     */
    create<T extends JadwalTugasCreateArgs>(args: SelectSubset<T, JadwalTugasCreateArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalTugases.
     * @param {JadwalTugasCreateManyArgs} args - Arguments to create many JadwalTugases.
     * @example
     * // Create many JadwalTugases
     * const jadwalTugas = await prisma.jadwalTugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalTugasCreateManyArgs>(args?: SelectSubset<T, JadwalTugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalTugases and returns the data saved in the database.
     * @param {JadwalTugasCreateManyAndReturnArgs} args - Arguments to create many JadwalTugases.
     * @example
     * // Create many JadwalTugases
     * const jadwalTugas = await prisma.jadwalTugas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalTugases and only return the `id`
     * const jadwalTugasWithIdOnly = await prisma.jadwalTugas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalTugasCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalTugasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalTugas.
     * @param {JadwalTugasDeleteArgs} args - Arguments to delete one JadwalTugas.
     * @example
     * // Delete one JadwalTugas
     * const JadwalTugas = await prisma.jadwalTugas.delete({
     *   where: {
     *     // ... filter to delete one JadwalTugas
     *   }
     * })
     * 
     */
    delete<T extends JadwalTugasDeleteArgs>(args: SelectSubset<T, JadwalTugasDeleteArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalTugas.
     * @param {JadwalTugasUpdateArgs} args - Arguments to update one JadwalTugas.
     * @example
     * // Update one JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalTugasUpdateArgs>(args: SelectSubset<T, JadwalTugasUpdateArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalTugases.
     * @param {JadwalTugasDeleteManyArgs} args - Arguments to filter JadwalTugases to delete.
     * @example
     * // Delete a few JadwalTugases
     * const { count } = await prisma.jadwalTugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalTugasDeleteManyArgs>(args?: SelectSubset<T, JadwalTugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalTugases
     * const jadwalTugas = await prisma.jadwalTugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalTugasUpdateManyArgs>(args: SelectSubset<T, JadwalTugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalTugases and returns the data updated in the database.
     * @param {JadwalTugasUpdateManyAndReturnArgs} args - Arguments to update many JadwalTugases.
     * @example
     * // Update many JadwalTugases
     * const jadwalTugas = await prisma.jadwalTugas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalTugases and only return the `id`
     * const jadwalTugasWithIdOnly = await prisma.jadwalTugas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JadwalTugasUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalTugasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalTugas.
     * @param {JadwalTugasUpsertArgs} args - Arguments to update or create a JadwalTugas.
     * @example
     * // Update or create a JadwalTugas
     * const jadwalTugas = await prisma.jadwalTugas.upsert({
     *   create: {
     *     // ... data to create a JadwalTugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalTugas we want to update
     *   }
     * })
     */
    upsert<T extends JadwalTugasUpsertArgs>(args: SelectSubset<T, JadwalTugasUpsertArgs<ExtArgs>>): Prisma__JadwalTugasClient<$Result.GetResult<Prisma.$JadwalTugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasCountArgs} args - Arguments to filter JadwalTugases to count.
     * @example
     * // Count the number of JadwalTugases
     * const count = await prisma.jadwalTugas.count({
     *   where: {
     *     // ... the filter for the JadwalTugases we want to count
     *   }
     * })
    **/
    count<T extends JadwalTugasCountArgs>(
      args?: Subset<T, JadwalTugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalTugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalTugasAggregateArgs>(args: Subset<T, JadwalTugasAggregateArgs>): Prisma.PrismaPromise<GetJadwalTugasAggregateType<T>>

    /**
     * Group by JadwalTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalTugasGroupByArgs} args - Group by arguments.
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
      T extends JadwalTugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalTugasGroupByArgs['orderBy'] }
        : { orderBy?: JadwalTugasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalTugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalTugas model
   */
  readonly fields: JadwalTugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalTugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalTugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guru<T extends GuruProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuruProfileDefaultArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JadwalTugas model
   */
  interface JadwalTugasFieldRefs {
    readonly id: FieldRef<"JadwalTugas", 'Int'>
    readonly title: FieldRef<"JadwalTugas", 'String'>
    readonly start: FieldRef<"JadwalTugas", 'DateTime'>
    readonly end: FieldRef<"JadwalTugas", 'DateTime'>
    readonly description: FieldRef<"JadwalTugas", 'String'>
    readonly guruId: FieldRef<"JadwalTugas", 'Int'>
    readonly kelasId: FieldRef<"JadwalTugas", 'Int'>
    readonly createdAt: FieldRef<"JadwalTugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JadwalTugas findUnique
   */
  export type JadwalTugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter, which JadwalTugas to fetch.
     */
    where: JadwalTugasWhereUniqueInput
  }

  /**
   * JadwalTugas findUniqueOrThrow
   */
  export type JadwalTugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter, which JadwalTugas to fetch.
     */
    where: JadwalTugasWhereUniqueInput
  }

  /**
   * JadwalTugas findFirst
   */
  export type JadwalTugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter, which JadwalTugas to fetch.
     */
    where?: JadwalTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalTugases to fetch.
     */
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalTugases.
     */
    cursor?: JadwalTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalTugases.
     */
    distinct?: JadwalTugasScalarFieldEnum | JadwalTugasScalarFieldEnum[]
  }

  /**
   * JadwalTugas findFirstOrThrow
   */
  export type JadwalTugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter, which JadwalTugas to fetch.
     */
    where?: JadwalTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalTugases to fetch.
     */
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalTugases.
     */
    cursor?: JadwalTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalTugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalTugases.
     */
    distinct?: JadwalTugasScalarFieldEnum | JadwalTugasScalarFieldEnum[]
  }

  /**
   * JadwalTugas findMany
   */
  export type JadwalTugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter, which JadwalTugases to fetch.
     */
    where?: JadwalTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalTugases to fetch.
     */
    orderBy?: JadwalTugasOrderByWithRelationInput | JadwalTugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalTugases.
     */
    cursor?: JadwalTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalTugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalTugases.
     */
    skip?: number
    distinct?: JadwalTugasScalarFieldEnum | JadwalTugasScalarFieldEnum[]
  }

  /**
   * JadwalTugas create
   */
  export type JadwalTugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalTugas.
     */
    data: XOR<JadwalTugasCreateInput, JadwalTugasUncheckedCreateInput>
  }

  /**
   * JadwalTugas createMany
   */
  export type JadwalTugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalTugases.
     */
    data: JadwalTugasCreateManyInput | JadwalTugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalTugas createManyAndReturn
   */
  export type JadwalTugasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalTugases.
     */
    data: JadwalTugasCreateManyInput | JadwalTugasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalTugas update
   */
  export type JadwalTugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalTugas.
     */
    data: XOR<JadwalTugasUpdateInput, JadwalTugasUncheckedUpdateInput>
    /**
     * Choose, which JadwalTugas to update.
     */
    where: JadwalTugasWhereUniqueInput
  }

  /**
   * JadwalTugas updateMany
   */
  export type JadwalTugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalTugases.
     */
    data: XOR<JadwalTugasUpdateManyMutationInput, JadwalTugasUncheckedUpdateManyInput>
    /**
     * Filter which JadwalTugases to update
     */
    where?: JadwalTugasWhereInput
    /**
     * Limit how many JadwalTugases to update.
     */
    limit?: number
  }

  /**
   * JadwalTugas updateManyAndReturn
   */
  export type JadwalTugasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * The data used to update JadwalTugases.
     */
    data: XOR<JadwalTugasUpdateManyMutationInput, JadwalTugasUncheckedUpdateManyInput>
    /**
     * Filter which JadwalTugases to update
     */
    where?: JadwalTugasWhereInput
    /**
     * Limit how many JadwalTugases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalTugas upsert
   */
  export type JadwalTugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalTugas to update in case it exists.
     */
    where: JadwalTugasWhereUniqueInput
    /**
     * In case the JadwalTugas found by the `where` argument doesn't exist, create a new JadwalTugas with this data.
     */
    create: XOR<JadwalTugasCreateInput, JadwalTugasUncheckedCreateInput>
    /**
     * In case the JadwalTugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalTugasUpdateInput, JadwalTugasUncheckedUpdateInput>
  }

  /**
   * JadwalTugas delete
   */
  export type JadwalTugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
    /**
     * Filter which JadwalTugas to delete.
     */
    where: JadwalTugasWhereUniqueInput
  }

  /**
   * JadwalTugas deleteMany
   */
  export type JadwalTugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalTugases to delete
     */
    where?: JadwalTugasWhereInput
    /**
     * Limit how many JadwalTugases to delete.
     */
    limit?: number
  }

  /**
   * JadwalTugas without action
   */
  export type JadwalTugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalTugas
     */
    select?: JadwalTugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalTugas
     */
    omit?: JadwalTugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalTugasInclude<ExtArgs> | null
  }


  /**
   * Model Rfid
   */

  export type AggregateRfid = {
    _count: RfidCountAggregateOutputType | null
    _avg: RfidAvgAggregateOutputType | null
    _sum: RfidSumAggregateOutputType | null
    _min: RfidMinAggregateOutputType | null
    _max: RfidMaxAggregateOutputType | null
  }

  export type RfidAvgAggregateOutputType = {
    id: number | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type RfidSumAggregateOutputType = {
    id: number | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type RfidMinAggregateOutputType = {
    id: number | null
    rfidNumb: string | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type RfidMaxAggregateOutputType = {
    id: number | null
    rfidNumb: string | null
    muridProfileId: number | null
    guruProfileId: number | null
  }

  export type RfidCountAggregateOutputType = {
    id: number
    rfidNumb: number
    muridProfileId: number
    guruProfileId: number
    _all: number
  }


  export type RfidAvgAggregateInputType = {
    id?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type RfidSumAggregateInputType = {
    id?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type RfidMinAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type RfidMaxAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridProfileId?: true
    guruProfileId?: true
  }

  export type RfidCountAggregateInputType = {
    id?: true
    rfidNumb?: true
    muridProfileId?: true
    guruProfileId?: true
    _all?: true
  }

  export type RfidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rfid to aggregate.
     */
    where?: RfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfids to fetch.
     */
    orderBy?: RfidOrderByWithRelationInput | RfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rfids
    **/
    _count?: true | RfidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RfidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RfidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RfidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RfidMaxAggregateInputType
  }

  export type GetRfidAggregateType<T extends RfidAggregateArgs> = {
        [P in keyof T & keyof AggregateRfid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfid[P]>
      : GetScalarType<T[P], AggregateRfid[P]>
  }




  export type RfidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfidWhereInput
    orderBy?: RfidOrderByWithAggregationInput | RfidOrderByWithAggregationInput[]
    by: RfidScalarFieldEnum[] | RfidScalarFieldEnum
    having?: RfidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RfidCountAggregateInputType | true
    _avg?: RfidAvgAggregateInputType
    _sum?: RfidSumAggregateInputType
    _min?: RfidMinAggregateInputType
    _max?: RfidMaxAggregateInputType
  }

  export type RfidGroupByOutputType = {
    id: number
    rfidNumb: string | null
    muridProfileId: number | null
    guruProfileId: number | null
    _count: RfidCountAggregateOutputType | null
    _avg: RfidAvgAggregateOutputType | null
    _sum: RfidSumAggregateOutputType | null
    _min: RfidMinAggregateOutputType | null
    _max: RfidMaxAggregateOutputType | null
  }

  type GetRfidGroupByPayload<T extends RfidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RfidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RfidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RfidGroupByOutputType[P]>
            : GetScalarType<T[P], RfidGroupByOutputType[P]>
        }
      >
    >


  export type RfidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
    absensi?: boolean | Rfid$absensiArgs<ExtArgs>
    _count?: boolean | RfidCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfid"]>

  export type RfidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
  }, ExtArgs["result"]["rfid"]>

  export type RfidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfidNumb?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
  }, ExtArgs["result"]["rfid"]>

  export type RfidSelectScalar = {
    id?: boolean
    rfidNumb?: boolean
    muridProfileId?: boolean
    guruProfileId?: boolean
  }

  export type RfidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rfidNumb" | "muridProfileId" | "guruProfileId", ExtArgs["result"]["rfid"]>
  export type RfidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
    absensi?: boolean | Rfid$absensiArgs<ExtArgs>
    _count?: boolean | RfidCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RfidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
  }
  export type RfidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muridProfile?: boolean | Rfid$muridProfileArgs<ExtArgs>
    guruProfile?: boolean | Rfid$guruProfileArgs<ExtArgs>
  }

  export type $RfidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rfid"
    objects: {
      muridProfile: Prisma.$MuridProfilePayload<ExtArgs> | null
      guruProfile: Prisma.$GuruProfilePayload<ExtArgs> | null
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rfidNumb: string | null
      muridProfileId: number | null
      guruProfileId: number | null
    }, ExtArgs["result"]["rfid"]>
    composites: {}
  }

  type RfidGetPayload<S extends boolean | null | undefined | RfidDefaultArgs> = $Result.GetResult<Prisma.$RfidPayload, S>

  type RfidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RfidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RfidCountAggregateInputType | true
    }

  export interface RfidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rfid'], meta: { name: 'Rfid' } }
    /**
     * Find zero or one Rfid that matches the filter.
     * @param {RfidFindUniqueArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RfidFindUniqueArgs>(args: SelectSubset<T, RfidFindUniqueArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rfid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RfidFindUniqueOrThrowArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RfidFindUniqueOrThrowArgs>(args: SelectSubset<T, RfidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidFindFirstArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RfidFindFirstArgs>(args?: SelectSubset<T, RfidFindFirstArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidFindFirstOrThrowArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RfidFindFirstOrThrowArgs>(args?: SelectSubset<T, RfidFindFirstOrThrowArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rfids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rfids
     * const rfids = await prisma.rfid.findMany()
     * 
     * // Get first 10 Rfids
     * const rfids = await prisma.rfid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfidWithIdOnly = await prisma.rfid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RfidFindManyArgs>(args?: SelectSubset<T, RfidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rfid.
     * @param {RfidCreateArgs} args - Arguments to create a Rfid.
     * @example
     * // Create one Rfid
     * const Rfid = await prisma.rfid.create({
     *   data: {
     *     // ... data to create a Rfid
     *   }
     * })
     * 
     */
    create<T extends RfidCreateArgs>(args: SelectSubset<T, RfidCreateArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rfids.
     * @param {RfidCreateManyArgs} args - Arguments to create many Rfids.
     * @example
     * // Create many Rfids
     * const rfid = await prisma.rfid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RfidCreateManyArgs>(args?: SelectSubset<T, RfidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rfids and returns the data saved in the database.
     * @param {RfidCreateManyAndReturnArgs} args - Arguments to create many Rfids.
     * @example
     * // Create many Rfids
     * const rfid = await prisma.rfid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rfids and only return the `id`
     * const rfidWithIdOnly = await prisma.rfid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RfidCreateManyAndReturnArgs>(args?: SelectSubset<T, RfidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rfid.
     * @param {RfidDeleteArgs} args - Arguments to delete one Rfid.
     * @example
     * // Delete one Rfid
     * const Rfid = await prisma.rfid.delete({
     *   where: {
     *     // ... filter to delete one Rfid
     *   }
     * })
     * 
     */
    delete<T extends RfidDeleteArgs>(args: SelectSubset<T, RfidDeleteArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rfid.
     * @param {RfidUpdateArgs} args - Arguments to update one Rfid.
     * @example
     * // Update one Rfid
     * const rfid = await prisma.rfid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RfidUpdateArgs>(args: SelectSubset<T, RfidUpdateArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rfids.
     * @param {RfidDeleteManyArgs} args - Arguments to filter Rfids to delete.
     * @example
     * // Delete a few Rfids
     * const { count } = await prisma.rfid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RfidDeleteManyArgs>(args?: SelectSubset<T, RfidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rfids
     * const rfid = await prisma.rfid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RfidUpdateManyArgs>(args: SelectSubset<T, RfidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfids and returns the data updated in the database.
     * @param {RfidUpdateManyAndReturnArgs} args - Arguments to update many Rfids.
     * @example
     * // Update many Rfids
     * const rfid = await prisma.rfid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rfids and only return the `id`
     * const rfidWithIdOnly = await prisma.rfid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RfidUpdateManyAndReturnArgs>(args: SelectSubset<T, RfidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rfid.
     * @param {RfidUpsertArgs} args - Arguments to update or create a Rfid.
     * @example
     * // Update or create a Rfid
     * const rfid = await prisma.rfid.upsert({
     *   create: {
     *     // ... data to create a Rfid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rfid we want to update
     *   }
     * })
     */
    upsert<T extends RfidUpsertArgs>(args: SelectSubset<T, RfidUpsertArgs<ExtArgs>>): Prisma__RfidClient<$Result.GetResult<Prisma.$RfidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rfids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCountArgs} args - Arguments to filter Rfids to count.
     * @example
     * // Count the number of Rfids
     * const count = await prisma.rfid.count({
     *   where: {
     *     // ... the filter for the Rfids we want to count
     *   }
     * })
    **/
    count<T extends RfidCountArgs>(
      args?: Subset<T, RfidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RfidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rfid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RfidAggregateArgs>(args: Subset<T, RfidAggregateArgs>): Prisma.PrismaPromise<GetRfidAggregateType<T>>

    /**
     * Group by Rfid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidGroupByArgs} args - Group by arguments.
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
      T extends RfidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RfidGroupByArgs['orderBy'] }
        : { orderBy?: RfidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RfidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rfid model
   */
  readonly fields: RfidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rfid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RfidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muridProfile<T extends Rfid$muridProfileArgs<ExtArgs> = {}>(args?: Subset<T, Rfid$muridProfileArgs<ExtArgs>>): Prisma__MuridProfileClient<$Result.GetResult<Prisma.$MuridProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guruProfile<T extends Rfid$guruProfileArgs<ExtArgs> = {}>(args?: Subset<T, Rfid$guruProfileArgs<ExtArgs>>): Prisma__GuruProfileClient<$Result.GetResult<Prisma.$GuruProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    absensi<T extends Rfid$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Rfid$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rfid model
   */
  interface RfidFieldRefs {
    readonly id: FieldRef<"Rfid", 'Int'>
    readonly rfidNumb: FieldRef<"Rfid", 'String'>
    readonly muridProfileId: FieldRef<"Rfid", 'Int'>
    readonly guruProfileId: FieldRef<"Rfid", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rfid findUnique
   */
  export type RfidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter, which Rfid to fetch.
     */
    where: RfidWhereUniqueInput
  }

  /**
   * Rfid findUniqueOrThrow
   */
  export type RfidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter, which Rfid to fetch.
     */
    where: RfidWhereUniqueInput
  }

  /**
   * Rfid findFirst
   */
  export type RfidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter, which Rfid to fetch.
     */
    where?: RfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfids to fetch.
     */
    orderBy?: RfidOrderByWithRelationInput | RfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rfids.
     */
    cursor?: RfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rfids.
     */
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * Rfid findFirstOrThrow
   */
  export type RfidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter, which Rfid to fetch.
     */
    where?: RfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfids to fetch.
     */
    orderBy?: RfidOrderByWithRelationInput | RfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rfids.
     */
    cursor?: RfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rfids.
     */
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * Rfid findMany
   */
  export type RfidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter, which Rfids to fetch.
     */
    where?: RfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfids to fetch.
     */
    orderBy?: RfidOrderByWithRelationInput | RfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rfids.
     */
    cursor?: RfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfids.
     */
    skip?: number
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * Rfid create
   */
  export type RfidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * The data needed to create a Rfid.
     */
    data?: XOR<RfidCreateInput, RfidUncheckedCreateInput>
  }

  /**
   * Rfid createMany
   */
  export type RfidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rfids.
     */
    data: RfidCreateManyInput | RfidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rfid createManyAndReturn
   */
  export type RfidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * The data used to create many Rfids.
     */
    data: RfidCreateManyInput | RfidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rfid update
   */
  export type RfidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * The data needed to update a Rfid.
     */
    data: XOR<RfidUpdateInput, RfidUncheckedUpdateInput>
    /**
     * Choose, which Rfid to update.
     */
    where: RfidWhereUniqueInput
  }

  /**
   * Rfid updateMany
   */
  export type RfidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rfids.
     */
    data: XOR<RfidUpdateManyMutationInput, RfidUncheckedUpdateManyInput>
    /**
     * Filter which Rfids to update
     */
    where?: RfidWhereInput
    /**
     * Limit how many Rfids to update.
     */
    limit?: number
  }

  /**
   * Rfid updateManyAndReturn
   */
  export type RfidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * The data used to update Rfids.
     */
    data: XOR<RfidUpdateManyMutationInput, RfidUncheckedUpdateManyInput>
    /**
     * Filter which Rfids to update
     */
    where?: RfidWhereInput
    /**
     * Limit how many Rfids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rfid upsert
   */
  export type RfidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * The filter to search for the Rfid to update in case it exists.
     */
    where: RfidWhereUniqueInput
    /**
     * In case the Rfid found by the `where` argument doesn't exist, create a new Rfid with this data.
     */
    create: XOR<RfidCreateInput, RfidUncheckedCreateInput>
    /**
     * In case the Rfid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RfidUpdateInput, RfidUncheckedUpdateInput>
  }

  /**
   * Rfid delete
   */
  export type RfidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
    /**
     * Filter which Rfid to delete.
     */
    where: RfidWhereUniqueInput
  }

  /**
   * Rfid deleteMany
   */
  export type RfidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rfids to delete
     */
    where?: RfidWhereInput
    /**
     * Limit how many Rfids to delete.
     */
    limit?: number
  }

  /**
   * Rfid.muridProfile
   */
  export type Rfid$muridProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuridProfile
     */
    select?: MuridProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuridProfile
     */
    omit?: MuridProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuridProfileInclude<ExtArgs> | null
    where?: MuridProfileWhereInput
  }

  /**
   * Rfid.guruProfile
   */
  export type Rfid$guruProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruProfile
     */
    select?: GuruProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuruProfile
     */
    omit?: GuruProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruProfileInclude<ExtArgs> | null
    where?: GuruProfileWhereInput
  }

  /**
   * Rfid.absensi
   */
  export type Rfid$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Rfid without action
   */
  export type RfidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfid
     */
    select?: RfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rfid
     */
    omit?: RfidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    muridProfileId: 'muridProfileId',
    guruProfileId: 'guruProfileId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MuridProfileScalarFieldEnum: {
    id: 'id',
    nis: 'nis',
    name: 'name',
    noMurid: 'noMurid',
    kelasId: 'kelasId'
  };

  export type MuridProfileScalarFieldEnum = (typeof MuridProfileScalarFieldEnum)[keyof typeof MuridProfileScalarFieldEnum]


  export const WaliMuridScalarFieldEnum: {
    id: 'id',
    nameWaliMurid: 'nameWaliMurid',
    noWaliMurid: 'noWaliMurid',
    muridId: 'muridId'
  };

  export type WaliMuridScalarFieldEnum = (typeof WaliMuridScalarFieldEnum)[keyof typeof WaliMuridScalarFieldEnum]


  export const GuruProfileScalarFieldEnum: {
    id: 'id',
    nik: 'nik',
    name: 'name',
    noGuru: 'noGuru'
  };

  export type GuruProfileScalarFieldEnum = (typeof GuruProfileScalarFieldEnum)[keyof typeof GuruProfileScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    waliKelasId: 'waliKelasId'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    rfidNumb: 'rfidNumb',
    muridId: 'muridId',
    keterangan: 'keterangan',
    tanggal: 'tanggal',
    jamHadir: 'jamHadir',
    jamPulang: 'jamPulang',
    catatan: 'catatan'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const JadwalTugasScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start: 'start',
    end: 'end',
    description: 'description',
    guruId: 'guruId',
    kelasId: 'kelasId',
    createdAt: 'createdAt'
  };

  export type JadwalTugasScalarFieldEnum = (typeof JadwalTugasScalarFieldEnum)[keyof typeof JadwalTugasScalarFieldEnum]


  export const RfidScalarFieldEnum: {
    id: 'id',
    rfidNumb: 'rfidNumb',
    muridProfileId: 'muridProfileId',
    guruProfileId: 'guruProfileId'
  };

  export type RfidScalarFieldEnum = (typeof RfidScalarFieldEnum)[keyof typeof RfidScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Keterangan'
   */
  export type EnumKeteranganFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Keterangan'>
    


  /**
   * Reference to a field of type 'Keterangan[]'
   */
  export type ListEnumKeteranganFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Keterangan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    muridProfileId?: IntNullableFilter<"User"> | number | null
    guruProfileId?: IntNullableFilter<"User"> | number | null
    muridProfile?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
    guruProfile?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    muridProfileId?: SortOrderInput | SortOrder
    guruProfileId?: SortOrderInput | SortOrder
    muridProfile?: MuridProfileOrderByWithRelationInput
    guruProfile?: GuruProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    muridProfileId?: number
    guruProfileId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    muridProfile?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
    guruProfile?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
  }, "id" | "email" | "muridProfileId" | "guruProfileId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    muridProfileId?: SortOrderInput | SortOrder
    guruProfileId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    muridProfileId?: IntNullableWithAggregatesFilter<"User"> | number | null
    guruProfileId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type MuridProfileWhereInput = {
    AND?: MuridProfileWhereInput | MuridProfileWhereInput[]
    OR?: MuridProfileWhereInput[]
    NOT?: MuridProfileWhereInput | MuridProfileWhereInput[]
    id?: IntFilter<"MuridProfile"> | number
    nis?: IntFilter<"MuridProfile"> | number
    name?: StringFilter<"MuridProfile"> | string
    noMurid?: StringNullableFilter<"MuridProfile"> | string | null
    kelasId?: IntNullableFilter<"MuridProfile"> | number | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    waliMurids?: WaliMuridListRelationFilter
    absensi?: AbsensiListRelationFilter
  }

  export type MuridProfileOrderByWithRelationInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    noMurid?: SortOrderInput | SortOrder
    kelasId?: SortOrderInput | SortOrder
    kelas?: KelasOrderByWithRelationInput
    rfid?: RfidOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    waliMurids?: WaliMuridOrderByRelationAggregateInput
    absensi?: AbsensiOrderByRelationAggregateInput
  }

  export type MuridProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nis?: number
    noMurid?: string
    AND?: MuridProfileWhereInput | MuridProfileWhereInput[]
    OR?: MuridProfileWhereInput[]
    NOT?: MuridProfileWhereInput | MuridProfileWhereInput[]
    name?: StringFilter<"MuridProfile"> | string
    kelasId?: IntNullableFilter<"MuridProfile"> | number | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    waliMurids?: WaliMuridListRelationFilter
    absensi?: AbsensiListRelationFilter
  }, "id" | "nis" | "noMurid">

  export type MuridProfileOrderByWithAggregationInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    noMurid?: SortOrderInput | SortOrder
    kelasId?: SortOrderInput | SortOrder
    _count?: MuridProfileCountOrderByAggregateInput
    _avg?: MuridProfileAvgOrderByAggregateInput
    _max?: MuridProfileMaxOrderByAggregateInput
    _min?: MuridProfileMinOrderByAggregateInput
    _sum?: MuridProfileSumOrderByAggregateInput
  }

  export type MuridProfileScalarWhereWithAggregatesInput = {
    AND?: MuridProfileScalarWhereWithAggregatesInput | MuridProfileScalarWhereWithAggregatesInput[]
    OR?: MuridProfileScalarWhereWithAggregatesInput[]
    NOT?: MuridProfileScalarWhereWithAggregatesInput | MuridProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MuridProfile"> | number
    nis?: IntWithAggregatesFilter<"MuridProfile"> | number
    name?: StringWithAggregatesFilter<"MuridProfile"> | string
    noMurid?: StringNullableWithAggregatesFilter<"MuridProfile"> | string | null
    kelasId?: IntNullableWithAggregatesFilter<"MuridProfile"> | number | null
  }

  export type WaliMuridWhereInput = {
    AND?: WaliMuridWhereInput | WaliMuridWhereInput[]
    OR?: WaliMuridWhereInput[]
    NOT?: WaliMuridWhereInput | WaliMuridWhereInput[]
    id?: IntFilter<"WaliMurid"> | number
    nameWaliMurid?: StringFilter<"WaliMurid"> | string
    noWaliMurid?: StringFilter<"WaliMurid"> | string
    muridId?: IntFilter<"WaliMurid"> | number
    murid?: XOR<MuridProfileScalarRelationFilter, MuridProfileWhereInput>
  }

  export type WaliMuridOrderByWithRelationInput = {
    id?: SortOrder
    nameWaliMurid?: SortOrder
    noWaliMurid?: SortOrder
    muridId?: SortOrder
    murid?: MuridProfileOrderByWithRelationInput
  }

  export type WaliMuridWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WaliMuridWhereInput | WaliMuridWhereInput[]
    OR?: WaliMuridWhereInput[]
    NOT?: WaliMuridWhereInput | WaliMuridWhereInput[]
    nameWaliMurid?: StringFilter<"WaliMurid"> | string
    noWaliMurid?: StringFilter<"WaliMurid"> | string
    muridId?: IntFilter<"WaliMurid"> | number
    murid?: XOR<MuridProfileScalarRelationFilter, MuridProfileWhereInput>
  }, "id">

  export type WaliMuridOrderByWithAggregationInput = {
    id?: SortOrder
    nameWaliMurid?: SortOrder
    noWaliMurid?: SortOrder
    muridId?: SortOrder
    _count?: WaliMuridCountOrderByAggregateInput
    _avg?: WaliMuridAvgOrderByAggregateInput
    _max?: WaliMuridMaxOrderByAggregateInput
    _min?: WaliMuridMinOrderByAggregateInput
    _sum?: WaliMuridSumOrderByAggregateInput
  }

  export type WaliMuridScalarWhereWithAggregatesInput = {
    AND?: WaliMuridScalarWhereWithAggregatesInput | WaliMuridScalarWhereWithAggregatesInput[]
    OR?: WaliMuridScalarWhereWithAggregatesInput[]
    NOT?: WaliMuridScalarWhereWithAggregatesInput | WaliMuridScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaliMurid"> | number
    nameWaliMurid?: StringWithAggregatesFilter<"WaliMurid"> | string
    noWaliMurid?: StringWithAggregatesFilter<"WaliMurid"> | string
    muridId?: IntWithAggregatesFilter<"WaliMurid"> | number
  }

  export type GuruProfileWhereInput = {
    AND?: GuruProfileWhereInput | GuruProfileWhereInput[]
    OR?: GuruProfileWhereInput[]
    NOT?: GuruProfileWhereInput | GuruProfileWhereInput[]
    id?: IntFilter<"GuruProfile"> | number
    nik?: IntFilter<"GuruProfile"> | number
    name?: StringFilter<"GuruProfile"> | string
    noGuru?: StringFilter<"GuruProfile"> | string
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    JadwalTugas?: JadwalTugasListRelationFilter
  }

  export type GuruProfileOrderByWithRelationInput = {
    id?: SortOrder
    nik?: SortOrder
    name?: SortOrder
    noGuru?: SortOrder
    rfid?: RfidOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Kelas?: KelasOrderByWithRelationInput
    JadwalTugas?: JadwalTugasOrderByRelationAggregateInput
  }

  export type GuruProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nik?: number
    noGuru?: string
    AND?: GuruProfileWhereInput | GuruProfileWhereInput[]
    OR?: GuruProfileWhereInput[]
    NOT?: GuruProfileWhereInput | GuruProfileWhereInput[]
    name?: StringFilter<"GuruProfile"> | string
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    JadwalTugas?: JadwalTugasListRelationFilter
  }, "id" | "nik" | "noGuru">

  export type GuruProfileOrderByWithAggregationInput = {
    id?: SortOrder
    nik?: SortOrder
    name?: SortOrder
    noGuru?: SortOrder
    _count?: GuruProfileCountOrderByAggregateInput
    _avg?: GuruProfileAvgOrderByAggregateInput
    _max?: GuruProfileMaxOrderByAggregateInput
    _min?: GuruProfileMinOrderByAggregateInput
    _sum?: GuruProfileSumOrderByAggregateInput
  }

  export type GuruProfileScalarWhereWithAggregatesInput = {
    AND?: GuruProfileScalarWhereWithAggregatesInput | GuruProfileScalarWhereWithAggregatesInput[]
    OR?: GuruProfileScalarWhereWithAggregatesInput[]
    NOT?: GuruProfileScalarWhereWithAggregatesInput | GuruProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuruProfile"> | number
    nik?: IntWithAggregatesFilter<"GuruProfile"> | number
    name?: StringWithAggregatesFilter<"GuruProfile"> | string
    noGuru?: StringWithAggregatesFilter<"GuruProfile"> | string
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: IntFilter<"Kelas"> | number
    name?: StringFilter<"Kelas"> | string
    waliKelasId?: IntNullableFilter<"Kelas"> | number | null
    waliKelas?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
    muridProfile?: MuridProfileListRelationFilter
    JadwalTugas?: JadwalTugasListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    waliKelas?: GuruProfileOrderByWithRelationInput
    muridProfile?: MuridProfileOrderByRelationAggregateInput
    JadwalTugas?: JadwalTugasOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    waliKelasId?: number
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    waliKelas?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
    muridProfile?: MuridProfileListRelationFilter
    JadwalTugas?: JadwalTugasListRelationFilter
  }, "id" | "name" | "waliKelasId">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    _count?: KelasCountOrderByAggregateInput
    _avg?: KelasAvgOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
    _sum?: KelasSumOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kelas"> | number
    name?: StringWithAggregatesFilter<"Kelas"> | string
    waliKelasId?: IntNullableWithAggregatesFilter<"Kelas"> | number | null
  }

  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: IntFilter<"Absensi"> | number
    rfidNumb?: StringNullableFilter<"Absensi"> | string | null
    muridId?: IntNullableFilter<"Absensi"> | number | null
    keterangan?: EnumKeteranganFilter<"Absensi"> | $Enums.Keterangan
    tanggal?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamHadir?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    catatan?: StringNullableFilter<"Absensi"> | string | null
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    murid?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    rfidNumb?: SortOrderInput | SortOrder
    muridId?: SortOrderInput | SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrderInput | SortOrder
    jamHadir?: SortOrderInput | SortOrder
    jamPulang?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    rfid?: RfidOrderByWithRelationInput
    murid?: MuridProfileOrderByWithRelationInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rfidNumb_tanggal?: AbsensiRfidNumbTanggalCompoundUniqueInput
    muridId_tanggal?: AbsensiMuridIdTanggalCompoundUniqueInput
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    rfidNumb?: StringNullableFilter<"Absensi"> | string | null
    muridId?: IntNullableFilter<"Absensi"> | number | null
    keterangan?: EnumKeteranganFilter<"Absensi"> | $Enums.Keterangan
    tanggal?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamHadir?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    catatan?: StringNullableFilter<"Absensi"> | string | null
    rfid?: XOR<RfidNullableScalarRelationFilter, RfidWhereInput> | null
    murid?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
  }, "id" | "rfidNumb_tanggal" | "muridId_tanggal">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    rfidNumb?: SortOrderInput | SortOrder
    muridId?: SortOrderInput | SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrderInput | SortOrder
    jamHadir?: SortOrderInput | SortOrder
    jamPulang?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _avg?: AbsensiAvgOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
    _sum?: AbsensiSumOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Absensi"> | number
    rfidNumb?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    muridId?: IntNullableWithAggregatesFilter<"Absensi"> | number | null
    keterangan?: EnumKeteranganWithAggregatesFilter<"Absensi"> | $Enums.Keterangan
    tanggal?: DateTimeNullableWithAggregatesFilter<"Absensi"> | Date | string | null
    jamHadir?: DateTimeNullableWithAggregatesFilter<"Absensi"> | Date | string | null
    jamPulang?: DateTimeNullableWithAggregatesFilter<"Absensi"> | Date | string | null
    catatan?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
  }

  export type JadwalTugasWhereInput = {
    AND?: JadwalTugasWhereInput | JadwalTugasWhereInput[]
    OR?: JadwalTugasWhereInput[]
    NOT?: JadwalTugasWhereInput | JadwalTugasWhereInput[]
    id?: IntFilter<"JadwalTugas"> | number
    title?: StringFilter<"JadwalTugas"> | string
    start?: DateTimeFilter<"JadwalTugas"> | Date | string
    end?: DateTimeNullableFilter<"JadwalTugas"> | Date | string | null
    description?: StringFilter<"JadwalTugas"> | string
    guruId?: IntFilter<"JadwalTugas"> | number
    kelasId?: IntFilter<"JadwalTugas"> | number
    createdAt?: DateTimeFilter<"JadwalTugas"> | Date | string
    guru?: XOR<GuruProfileScalarRelationFilter, GuruProfileWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }

  export type JadwalTugasOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    description?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    guru?: GuruProfileOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
  }

  export type JadwalTugasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guruId_start_kelasId_title?: JadwalTugasGuruIdStartKelasIdTitleCompoundUniqueInput
    AND?: JadwalTugasWhereInput | JadwalTugasWhereInput[]
    OR?: JadwalTugasWhereInput[]
    NOT?: JadwalTugasWhereInput | JadwalTugasWhereInput[]
    title?: StringFilter<"JadwalTugas"> | string
    start?: DateTimeFilter<"JadwalTugas"> | Date | string
    end?: DateTimeNullableFilter<"JadwalTugas"> | Date | string | null
    description?: StringFilter<"JadwalTugas"> | string
    guruId?: IntFilter<"JadwalTugas"> | number
    kelasId?: IntFilter<"JadwalTugas"> | number
    createdAt?: DateTimeFilter<"JadwalTugas"> | Date | string
    guru?: XOR<GuruProfileScalarRelationFilter, GuruProfileWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }, "id" | "guruId_start_kelasId_title">

  export type JadwalTugasOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    description?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    _count?: JadwalTugasCountOrderByAggregateInput
    _avg?: JadwalTugasAvgOrderByAggregateInput
    _max?: JadwalTugasMaxOrderByAggregateInput
    _min?: JadwalTugasMinOrderByAggregateInput
    _sum?: JadwalTugasSumOrderByAggregateInput
  }

  export type JadwalTugasScalarWhereWithAggregatesInput = {
    AND?: JadwalTugasScalarWhereWithAggregatesInput | JadwalTugasScalarWhereWithAggregatesInput[]
    OR?: JadwalTugasScalarWhereWithAggregatesInput[]
    NOT?: JadwalTugasScalarWhereWithAggregatesInput | JadwalTugasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JadwalTugas"> | number
    title?: StringWithAggregatesFilter<"JadwalTugas"> | string
    start?: DateTimeWithAggregatesFilter<"JadwalTugas"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"JadwalTugas"> | Date | string | null
    description?: StringWithAggregatesFilter<"JadwalTugas"> | string
    guruId?: IntWithAggregatesFilter<"JadwalTugas"> | number
    kelasId?: IntWithAggregatesFilter<"JadwalTugas"> | number
    createdAt?: DateTimeWithAggregatesFilter<"JadwalTugas"> | Date | string
  }

  export type RfidWhereInput = {
    AND?: RfidWhereInput | RfidWhereInput[]
    OR?: RfidWhereInput[]
    NOT?: RfidWhereInput | RfidWhereInput[]
    id?: IntFilter<"Rfid"> | number
    rfidNumb?: StringNullableFilter<"Rfid"> | string | null
    muridProfileId?: IntNullableFilter<"Rfid"> | number | null
    guruProfileId?: IntNullableFilter<"Rfid"> | number | null
    muridProfile?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
    guruProfile?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
    absensi?: AbsensiListRelationFilter
  }

  export type RfidOrderByWithRelationInput = {
    id?: SortOrder
    rfidNumb?: SortOrderInput | SortOrder
    muridProfileId?: SortOrderInput | SortOrder
    guruProfileId?: SortOrderInput | SortOrder
    muridProfile?: MuridProfileOrderByWithRelationInput
    guruProfile?: GuruProfileOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
  }

  export type RfidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rfidNumb?: string
    muridProfileId?: number
    guruProfileId?: number
    AND?: RfidWhereInput | RfidWhereInput[]
    OR?: RfidWhereInput[]
    NOT?: RfidWhereInput | RfidWhereInput[]
    muridProfile?: XOR<MuridProfileNullableScalarRelationFilter, MuridProfileWhereInput> | null
    guruProfile?: XOR<GuruProfileNullableScalarRelationFilter, GuruProfileWhereInput> | null
    absensi?: AbsensiListRelationFilter
  }, "id" | "rfidNumb" | "muridProfileId" | "guruProfileId">

  export type RfidOrderByWithAggregationInput = {
    id?: SortOrder
    rfidNumb?: SortOrderInput | SortOrder
    muridProfileId?: SortOrderInput | SortOrder
    guruProfileId?: SortOrderInput | SortOrder
    _count?: RfidCountOrderByAggregateInput
    _avg?: RfidAvgOrderByAggregateInput
    _max?: RfidMaxOrderByAggregateInput
    _min?: RfidMinOrderByAggregateInput
    _sum?: RfidSumOrderByAggregateInput
  }

  export type RfidScalarWhereWithAggregatesInput = {
    AND?: RfidScalarWhereWithAggregatesInput | RfidScalarWhereWithAggregatesInput[]
    OR?: RfidScalarWhereWithAggregatesInput[]
    NOT?: RfidScalarWhereWithAggregatesInput | RfidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rfid"> | number
    rfidNumb?: StringNullableWithAggregatesFilter<"Rfid"> | string | null
    muridProfileId?: IntNullableWithAggregatesFilter<"Rfid"> | number | null
    guruProfileId?: IntNullableWithAggregatesFilter<"Rfid"> | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    muridProfile?: MuridProfileCreateNestedOneWithoutUserInput
    guruProfile?: GuruProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    muridProfileId?: number | null
    guruProfileId?: number | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    muridProfile?: MuridProfileUpdateOneWithoutUserNestedInput
    guruProfile?: GuruProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    muridProfileId?: number | null
    guruProfileId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MuridProfileCreateInput = {
    nis: number
    name: string
    noMurid?: string | null
    kelas?: KelasCreateNestedOneWithoutMuridProfileInput
    rfid?: RfidCreateNestedOneWithoutMuridProfileInput
    User?: UserCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridCreateNestedManyWithoutMuridInput
    absensi?: AbsensiCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
    rfid?: RfidUncheckedCreateNestedOneWithoutMuridProfileInput
    User?: UserUncheckedCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridUncheckedCreateNestedManyWithoutMuridInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUpdateInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: KelasUpdateOneWithoutMuridProfileNestedInput
    rfid?: RfidUpdateOneWithoutMuridProfileNestedInput
    User?: UserUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: RfidUncheckedUpdateOneWithoutMuridProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUncheckedUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileCreateManyInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
  }

  export type MuridProfileUpdateManyMutationInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MuridProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WaliMuridCreateInput = {
    nameWaliMurid: string
    noWaliMurid: string
    murid: MuridProfileCreateNestedOneWithoutWaliMuridsInput
  }

  export type WaliMuridUncheckedCreateInput = {
    id?: number
    nameWaliMurid: string
    noWaliMurid: string
    muridId: number
  }

  export type WaliMuridUpdateInput = {
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
    murid?: MuridProfileUpdateOneRequiredWithoutWaliMuridsNestedInput
  }

  export type WaliMuridUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
    muridId?: IntFieldUpdateOperationsInput | number
  }

  export type WaliMuridCreateManyInput = {
    id?: number
    nameWaliMurid: string
    noWaliMurid: string
    muridId: number
  }

  export type WaliMuridUpdateManyMutationInput = {
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
  }

  export type WaliMuridUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
    muridId?: IntFieldUpdateOperationsInput | number
  }

  export type GuruProfileCreateInput = {
    nik: number
    name: string
    noGuru: string
    rfid?: RfidCreateNestedOneWithoutGuruProfileInput
    User?: UserCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileUncheckedCreateInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
    rfid?: RfidUncheckedCreateNestedOneWithoutGuruProfileInput
    User?: UserUncheckedCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileUpdateInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUpdateOneWithoutGuruProfileNestedInput
    User?: UserUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutGuruNestedInput
  }

  export type GuruProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUncheckedUpdateOneWithoutGuruProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type GuruProfileCreateManyInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
  }

  export type GuruProfileUpdateManyMutationInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
  }

  export type GuruProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
  }

  export type KelasCreateInput = {
    name: string
    waliKelas?: GuruProfileCreateNestedOneWithoutKelasInput
    muridProfile?: MuridProfileCreateNestedManyWithoutKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: number
    name: string
    waliKelasId?: number | null
    muridProfile?: MuridProfileUncheckedCreateNestedManyWithoutKelasInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    waliKelas?: GuruProfileUpdateOneWithoutKelasNestedInput
    muridProfile?: MuridProfileUpdateManyWithoutKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableIntFieldUpdateOperationsInput | number | null
    muridProfile?: MuridProfileUncheckedUpdateManyWithoutKelasNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: number
    name: string
    waliKelasId?: number | null
  }

  export type KelasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AbsensiCreateInput = {
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
    rfid?: RfidCreateNestedOneWithoutAbsensiInput
    murid?: MuridProfileCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: number
    rfidNumb?: string | null
    muridId?: number | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type AbsensiUpdateInput = {
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: RfidUpdateOneWithoutAbsensiNestedInput
    murid?: MuridProfileUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridId?: NullableIntFieldUpdateOperationsInput | number | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsensiCreateManyInput = {
    id?: number
    rfidNumb?: string | null
    muridId?: number | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type AbsensiUpdateManyMutationInput = {
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridId?: NullableIntFieldUpdateOperationsInput | number | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalTugasCreateInput = {
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    createdAt?: Date | string
    guru: GuruProfileCreateNestedOneWithoutJadwalTugasInput
    kelas: KelasCreateNestedOneWithoutJadwalTugasInput
  }

  export type JadwalTugasUncheckedCreateInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    guruId: number
    kelasId: number
    createdAt?: Date | string
  }

  export type JadwalTugasUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruProfileUpdateOneRequiredWithoutJadwalTugasNestedInput
    kelas?: KelasUpdateOneRequiredWithoutJadwalTugasNestedInput
  }

  export type JadwalTugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    guruId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalTugasCreateManyInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    guruId: number
    kelasId: number
    createdAt?: Date | string
  }

  export type JadwalTugasUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalTugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    guruId?: IntFieldUpdateOperationsInput | number
    kelasId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfidCreateInput = {
    rfidNumb?: string | null
    muridProfile?: MuridProfileCreateNestedOneWithoutRfidInput
    guruProfile?: GuruProfileCreateNestedOneWithoutRfidInput
    absensi?: AbsensiCreateNestedManyWithoutRfidInput
  }

  export type RfidUncheckedCreateInput = {
    id?: number
    rfidNumb?: string | null
    muridProfileId?: number | null
    guruProfileId?: number | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutRfidInput
  }

  export type RfidUpdateInput = {
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfile?: MuridProfileUpdateOneWithoutRfidNestedInput
    guruProfile?: GuruProfileUpdateOneWithoutRfidNestedInput
    absensi?: AbsensiUpdateManyWithoutRfidNestedInput
  }

  export type RfidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    absensi?: AbsensiUncheckedUpdateManyWithoutRfidNestedInput
  }

  export type RfidCreateManyInput = {
    id?: number
    rfidNumb?: string | null
    muridProfileId?: number | null
    guruProfileId?: number | null
  }

  export type RfidUpdateManyMutationInput = {
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RfidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
  }

  export type MuridProfileNullableScalarRelationFilter = {
    is?: MuridProfileWhereInput | null
    isNot?: MuridProfileWhereInput | null
  }

  export type GuruProfileNullableScalarRelationFilter = {
    is?: GuruProfileWhereInput | null
    isNot?: GuruProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
  }

  export type KelasNullableScalarRelationFilter = {
    is?: KelasWhereInput | null
    isNot?: KelasWhereInput | null
  }

  export type RfidNullableScalarRelationFilter = {
    is?: RfidWhereInput | null
    isNot?: RfidWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WaliMuridListRelationFilter = {
    every?: WaliMuridWhereInput
    some?: WaliMuridWhereInput
    none?: WaliMuridWhereInput
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type WaliMuridOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuridProfileCountOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    noMurid?: SortOrder
    kelasId?: SortOrder
  }

  export type MuridProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    kelasId?: SortOrder
  }

  export type MuridProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    noMurid?: SortOrder
    kelasId?: SortOrder
  }

  export type MuridProfileMinOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    noMurid?: SortOrder
    kelasId?: SortOrder
  }

  export type MuridProfileSumOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    kelasId?: SortOrder
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
  }

  export type MuridProfileScalarRelationFilter = {
    is?: MuridProfileWhereInput
    isNot?: MuridProfileWhereInput
  }

  export type WaliMuridCountOrderByAggregateInput = {
    id?: SortOrder
    nameWaliMurid?: SortOrder
    noWaliMurid?: SortOrder
    muridId?: SortOrder
  }

  export type WaliMuridAvgOrderByAggregateInput = {
    id?: SortOrder
    muridId?: SortOrder
  }

  export type WaliMuridMaxOrderByAggregateInput = {
    id?: SortOrder
    nameWaliMurid?: SortOrder
    noWaliMurid?: SortOrder
    muridId?: SortOrder
  }

  export type WaliMuridMinOrderByAggregateInput = {
    id?: SortOrder
    nameWaliMurid?: SortOrder
    noWaliMurid?: SortOrder
    muridId?: SortOrder
  }

  export type WaliMuridSumOrderByAggregateInput = {
    id?: SortOrder
    muridId?: SortOrder
  }

  export type JadwalTugasListRelationFilter = {
    every?: JadwalTugasWhereInput
    some?: JadwalTugasWhereInput
    none?: JadwalTugasWhereInput
  }

  export type JadwalTugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuruProfileCountOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    name?: SortOrder
    noGuru?: SortOrder
  }

  export type GuruProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
  }

  export type GuruProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    name?: SortOrder
    noGuru?: SortOrder
  }

  export type GuruProfileMinOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
    name?: SortOrder
    noGuru?: SortOrder
  }

  export type GuruProfileSumOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
  }

  export type MuridProfileListRelationFilter = {
    every?: MuridProfileWhereInput
    some?: MuridProfileWhereInput
    none?: MuridProfileWhereInput
  }

  export type MuridProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasAvgOrderByAggregateInput = {
    id?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasSumOrderByAggregateInput = {
    id?: SortOrder
    waliKelasId?: SortOrder
  }

  export type EnumKeteranganFilter<$PrismaModel = never> = {
    equals?: $Enums.Keterangan | EnumKeteranganFieldRefInput<$PrismaModel>
    in?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    notIn?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    not?: NestedEnumKeteranganFilter<$PrismaModel> | $Enums.Keterangan
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
  }

  export type AbsensiRfidNumbTanggalCompoundUniqueInput = {
    rfidNumb: string
    tanggal: Date | string
  }

  export type AbsensiMuridIdTanggalCompoundUniqueInput = {
    muridId: number
    tanggal: Date | string
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridId?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    jamHadir?: SortOrder
    jamPulang?: SortOrder
    catatan?: SortOrder
  }

  export type AbsensiAvgOrderByAggregateInput = {
    id?: SortOrder
    muridId?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridId?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    jamHadir?: SortOrder
    jamPulang?: SortOrder
    catatan?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridId?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    jamHadir?: SortOrder
    jamPulang?: SortOrder
    catatan?: SortOrder
  }

  export type AbsensiSumOrderByAggregateInput = {
    id?: SortOrder
    muridId?: SortOrder
  }

  export type EnumKeteranganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Keterangan | EnumKeteranganFieldRefInput<$PrismaModel>
    in?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    notIn?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    not?: NestedEnumKeteranganWithAggregatesFilter<$PrismaModel> | $Enums.Keterangan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeteranganFilter<$PrismaModel>
    _max?: NestedEnumKeteranganFilter<$PrismaModel>
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

  export type GuruProfileScalarRelationFilter = {
    is?: GuruProfileWhereInput
    isNot?: GuruProfileWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type JadwalTugasGuruIdStartKelasIdTitleCompoundUniqueInput = {
    guruId: number
    start: Date | string
    kelasId: number
    title: string
  }

  export type JadwalTugasCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalTugasAvgOrderByAggregateInput = {
    id?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
  }

  export type JadwalTugasMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalTugasMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
  }

  export type JadwalTugasSumOrderByAggregateInput = {
    id?: SortOrder
    guruId?: SortOrder
    kelasId?: SortOrder
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

  export type RfidCountOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type RfidAvgOrderByAggregateInput = {
    id?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type RfidMaxOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type RfidMinOrderByAggregateInput = {
    id?: SortOrder
    rfidNumb?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type RfidSumOrderByAggregateInput = {
    id?: SortOrder
    muridProfileId?: SortOrder
    guruProfileId?: SortOrder
  }

  export type MuridProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MuridProfileCreateWithoutUserInput, MuridProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutUserInput
    connect?: MuridProfileWhereUniqueInput
  }

  export type GuruProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<GuruProfileCreateWithoutUserInput, GuruProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutUserInput
    connect?: GuruProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type MuridProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MuridProfileCreateWithoutUserInput, MuridProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutUserInput
    upsert?: MuridProfileUpsertWithoutUserInput
    disconnect?: MuridProfileWhereInput | boolean
    delete?: MuridProfileWhereInput | boolean
    connect?: MuridProfileWhereUniqueInput
    update?: XOR<XOR<MuridProfileUpdateToOneWithWhereWithoutUserInput, MuridProfileUpdateWithoutUserInput>, MuridProfileUncheckedUpdateWithoutUserInput>
  }

  export type GuruProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuruProfileCreateWithoutUserInput, GuruProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutUserInput
    upsert?: GuruProfileUpsertWithoutUserInput
    disconnect?: GuruProfileWhereInput | boolean
    delete?: GuruProfileWhereInput | boolean
    connect?: GuruProfileWhereUniqueInput
    update?: XOR<XOR<GuruProfileUpdateToOneWithWhereWithoutUserInput, GuruProfileUpdateWithoutUserInput>, GuruProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KelasCreateNestedOneWithoutMuridProfileInput = {
    create?: XOR<KelasCreateWithoutMuridProfileInput, KelasUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: KelasCreateOrConnectWithoutMuridProfileInput
    connect?: KelasWhereUniqueInput
  }

  export type RfidCreateNestedOneWithoutMuridProfileInput = {
    create?: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutMuridProfileInput
    connect?: RfidWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMuridProfileInput = {
    create?: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuridProfileInput
    connect?: UserWhereUniqueInput
  }

  export type WaliMuridCreateNestedManyWithoutMuridInput = {
    create?: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput> | WaliMuridCreateWithoutMuridInput[] | WaliMuridUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: WaliMuridCreateOrConnectWithoutMuridInput | WaliMuridCreateOrConnectWithoutMuridInput[]
    createMany?: WaliMuridCreateManyMuridInputEnvelope
    connect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
  }

  export type AbsensiCreateNestedManyWithoutMuridInput = {
    create?: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput> | AbsensiCreateWithoutMuridInput[] | AbsensiUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMuridInput | AbsensiCreateOrConnectWithoutMuridInput[]
    createMany?: AbsensiCreateManyMuridInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type RfidUncheckedCreateNestedOneWithoutMuridProfileInput = {
    create?: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutMuridProfileInput
    connect?: RfidWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutMuridProfileInput = {
    create?: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuridProfileInput
    connect?: UserWhereUniqueInput
  }

  export type WaliMuridUncheckedCreateNestedManyWithoutMuridInput = {
    create?: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput> | WaliMuridCreateWithoutMuridInput[] | WaliMuridUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: WaliMuridCreateOrConnectWithoutMuridInput | WaliMuridCreateOrConnectWithoutMuridInput[]
    createMany?: WaliMuridCreateManyMuridInputEnvelope
    connect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutMuridInput = {
    create?: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput> | AbsensiCreateWithoutMuridInput[] | AbsensiUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMuridInput | AbsensiCreateOrConnectWithoutMuridInput[]
    createMany?: AbsensiCreateManyMuridInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KelasUpdateOneWithoutMuridProfileNestedInput = {
    create?: XOR<KelasCreateWithoutMuridProfileInput, KelasUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: KelasCreateOrConnectWithoutMuridProfileInput
    upsert?: KelasUpsertWithoutMuridProfileInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutMuridProfileInput, KelasUpdateWithoutMuridProfileInput>, KelasUncheckedUpdateWithoutMuridProfileInput>
  }

  export type RfidUpdateOneWithoutMuridProfileNestedInput = {
    create?: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutMuridProfileInput
    upsert?: RfidUpsertWithoutMuridProfileInput
    disconnect?: RfidWhereInput | boolean
    delete?: RfidWhereInput | boolean
    connect?: RfidWhereUniqueInput
    update?: XOR<XOR<RfidUpdateToOneWithWhereWithoutMuridProfileInput, RfidUpdateWithoutMuridProfileInput>, RfidUncheckedUpdateWithoutMuridProfileInput>
  }

  export type UserUpdateOneWithoutMuridProfileNestedInput = {
    create?: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuridProfileInput
    upsert?: UserUpsertWithoutMuridProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMuridProfileInput, UserUpdateWithoutMuridProfileInput>, UserUncheckedUpdateWithoutMuridProfileInput>
  }

  export type WaliMuridUpdateManyWithoutMuridNestedInput = {
    create?: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput> | WaliMuridCreateWithoutMuridInput[] | WaliMuridUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: WaliMuridCreateOrConnectWithoutMuridInput | WaliMuridCreateOrConnectWithoutMuridInput[]
    upsert?: WaliMuridUpsertWithWhereUniqueWithoutMuridInput | WaliMuridUpsertWithWhereUniqueWithoutMuridInput[]
    createMany?: WaliMuridCreateManyMuridInputEnvelope
    set?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    disconnect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    delete?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    connect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    update?: WaliMuridUpdateWithWhereUniqueWithoutMuridInput | WaliMuridUpdateWithWhereUniqueWithoutMuridInput[]
    updateMany?: WaliMuridUpdateManyWithWhereWithoutMuridInput | WaliMuridUpdateManyWithWhereWithoutMuridInput[]
    deleteMany?: WaliMuridScalarWhereInput | WaliMuridScalarWhereInput[]
  }

  export type AbsensiUpdateManyWithoutMuridNestedInput = {
    create?: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput> | AbsensiCreateWithoutMuridInput[] | AbsensiUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMuridInput | AbsensiCreateOrConnectWithoutMuridInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutMuridInput | AbsensiUpsertWithWhereUniqueWithoutMuridInput[]
    createMany?: AbsensiCreateManyMuridInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutMuridInput | AbsensiUpdateWithWhereUniqueWithoutMuridInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutMuridInput | AbsensiUpdateManyWithWhereWithoutMuridInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type RfidUncheckedUpdateOneWithoutMuridProfileNestedInput = {
    create?: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutMuridProfileInput
    upsert?: RfidUpsertWithoutMuridProfileInput
    disconnect?: RfidWhereInput | boolean
    delete?: RfidWhereInput | boolean
    connect?: RfidWhereUniqueInput
    update?: XOR<XOR<RfidUpdateToOneWithWhereWithoutMuridProfileInput, RfidUpdateWithoutMuridProfileInput>, RfidUncheckedUpdateWithoutMuridProfileInput>
  }

  export type UserUncheckedUpdateOneWithoutMuridProfileNestedInput = {
    create?: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuridProfileInput
    upsert?: UserUpsertWithoutMuridProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMuridProfileInput, UserUpdateWithoutMuridProfileInput>, UserUncheckedUpdateWithoutMuridProfileInput>
  }

  export type WaliMuridUncheckedUpdateManyWithoutMuridNestedInput = {
    create?: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput> | WaliMuridCreateWithoutMuridInput[] | WaliMuridUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: WaliMuridCreateOrConnectWithoutMuridInput | WaliMuridCreateOrConnectWithoutMuridInput[]
    upsert?: WaliMuridUpsertWithWhereUniqueWithoutMuridInput | WaliMuridUpsertWithWhereUniqueWithoutMuridInput[]
    createMany?: WaliMuridCreateManyMuridInputEnvelope
    set?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    disconnect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    delete?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    connect?: WaliMuridWhereUniqueInput | WaliMuridWhereUniqueInput[]
    update?: WaliMuridUpdateWithWhereUniqueWithoutMuridInput | WaliMuridUpdateWithWhereUniqueWithoutMuridInput[]
    updateMany?: WaliMuridUpdateManyWithWhereWithoutMuridInput | WaliMuridUpdateManyWithWhereWithoutMuridInput[]
    deleteMany?: WaliMuridScalarWhereInput | WaliMuridScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutMuridNestedInput = {
    create?: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput> | AbsensiCreateWithoutMuridInput[] | AbsensiUncheckedCreateWithoutMuridInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMuridInput | AbsensiCreateOrConnectWithoutMuridInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutMuridInput | AbsensiUpsertWithWhereUniqueWithoutMuridInput[]
    createMany?: AbsensiCreateManyMuridInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutMuridInput | AbsensiUpdateWithWhereUniqueWithoutMuridInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutMuridInput | AbsensiUpdateManyWithWhereWithoutMuridInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type MuridProfileCreateNestedOneWithoutWaliMuridsInput = {
    create?: XOR<MuridProfileCreateWithoutWaliMuridsInput, MuridProfileUncheckedCreateWithoutWaliMuridsInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutWaliMuridsInput
    connect?: MuridProfileWhereUniqueInput
  }

  export type MuridProfileUpdateOneRequiredWithoutWaliMuridsNestedInput = {
    create?: XOR<MuridProfileCreateWithoutWaliMuridsInput, MuridProfileUncheckedCreateWithoutWaliMuridsInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutWaliMuridsInput
    upsert?: MuridProfileUpsertWithoutWaliMuridsInput
    connect?: MuridProfileWhereUniqueInput
    update?: XOR<XOR<MuridProfileUpdateToOneWithWhereWithoutWaliMuridsInput, MuridProfileUpdateWithoutWaliMuridsInput>, MuridProfileUncheckedUpdateWithoutWaliMuridsInput>
  }

  export type RfidCreateNestedOneWithoutGuruProfileInput = {
    create?: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutGuruProfileInput
    connect?: RfidWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGuruProfileInput = {
    create?: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfileInput
    connect?: UserWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutWaliKelasInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    connect?: KelasWhereUniqueInput
  }

  export type JadwalTugasCreateNestedManyWithoutGuruInput = {
    create?: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput> | JadwalTugasCreateWithoutGuruInput[] | JadwalTugasUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutGuruInput | JadwalTugasCreateOrConnectWithoutGuruInput[]
    createMany?: JadwalTugasCreateManyGuruInputEnvelope
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
  }

  export type RfidUncheckedCreateNestedOneWithoutGuruProfileInput = {
    create?: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutGuruProfileInput
    connect?: RfidWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutGuruProfileInput = {
    create?: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfileInput
    connect?: UserWhereUniqueInput
  }

  export type KelasUncheckedCreateNestedOneWithoutWaliKelasInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    connect?: KelasWhereUniqueInput
  }

  export type JadwalTugasUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput> | JadwalTugasCreateWithoutGuruInput[] | JadwalTugasUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutGuruInput | JadwalTugasCreateOrConnectWithoutGuruInput[]
    createMany?: JadwalTugasCreateManyGuruInputEnvelope
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
  }

  export type RfidUpdateOneWithoutGuruProfileNestedInput = {
    create?: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutGuruProfileInput
    upsert?: RfidUpsertWithoutGuruProfileInput
    disconnect?: RfidWhereInput | boolean
    delete?: RfidWhereInput | boolean
    connect?: RfidWhereUniqueInput
    update?: XOR<XOR<RfidUpdateToOneWithWhereWithoutGuruProfileInput, RfidUpdateWithoutGuruProfileInput>, RfidUncheckedUpdateWithoutGuruProfileInput>
  }

  export type UserUpdateOneWithoutGuruProfileNestedInput = {
    create?: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfileInput
    upsert?: UserUpsertWithoutGuruProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuruProfileInput, UserUpdateWithoutGuruProfileInput>, UserUncheckedUpdateWithoutGuruProfileInput>
  }

  export type KelasUpdateOneWithoutWaliKelasNestedInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    upsert?: KelasUpsertWithoutWaliKelasInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutWaliKelasInput, KelasUpdateWithoutWaliKelasInput>, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type JadwalTugasUpdateManyWithoutGuruNestedInput = {
    create?: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput> | JadwalTugasCreateWithoutGuruInput[] | JadwalTugasUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutGuruInput | JadwalTugasCreateOrConnectWithoutGuruInput[]
    upsert?: JadwalTugasUpsertWithWhereUniqueWithoutGuruInput | JadwalTugasUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: JadwalTugasCreateManyGuruInputEnvelope
    set?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    disconnect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    delete?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    update?: JadwalTugasUpdateWithWhereUniqueWithoutGuruInput | JadwalTugasUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: JadwalTugasUpdateManyWithWhereWithoutGuruInput | JadwalTugasUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
  }

  export type RfidUncheckedUpdateOneWithoutGuruProfileNestedInput = {
    create?: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: RfidCreateOrConnectWithoutGuruProfileInput
    upsert?: RfidUpsertWithoutGuruProfileInput
    disconnect?: RfidWhereInput | boolean
    delete?: RfidWhereInput | boolean
    connect?: RfidWhereUniqueInput
    update?: XOR<XOR<RfidUpdateToOneWithWhereWithoutGuruProfileInput, RfidUpdateWithoutGuruProfileInput>, RfidUncheckedUpdateWithoutGuruProfileInput>
  }

  export type UserUncheckedUpdateOneWithoutGuruProfileNestedInput = {
    create?: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfileInput
    upsert?: UserUpsertWithoutGuruProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuruProfileInput, UserUpdateWithoutGuruProfileInput>, UserUncheckedUpdateWithoutGuruProfileInput>
  }

  export type KelasUncheckedUpdateOneWithoutWaliKelasNestedInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    upsert?: KelasUpsertWithoutWaliKelasInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutWaliKelasInput, KelasUpdateWithoutWaliKelasInput>, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type JadwalTugasUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput> | JadwalTugasCreateWithoutGuruInput[] | JadwalTugasUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutGuruInput | JadwalTugasCreateOrConnectWithoutGuruInput[]
    upsert?: JadwalTugasUpsertWithWhereUniqueWithoutGuruInput | JadwalTugasUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: JadwalTugasCreateManyGuruInputEnvelope
    set?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    disconnect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    delete?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    update?: JadwalTugasUpdateWithWhereUniqueWithoutGuruInput | JadwalTugasUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: JadwalTugasUpdateManyWithWhereWithoutGuruInput | JadwalTugasUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
  }

  export type GuruProfileCreateNestedOneWithoutKelasInput = {
    create?: XOR<GuruProfileCreateWithoutKelasInput, GuruProfileUncheckedCreateWithoutKelasInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutKelasInput
    connect?: GuruProfileWhereUniqueInput
  }

  export type MuridProfileCreateNestedManyWithoutKelasInput = {
    create?: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput> | MuridProfileCreateWithoutKelasInput[] | MuridProfileUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MuridProfileCreateOrConnectWithoutKelasInput | MuridProfileCreateOrConnectWithoutKelasInput[]
    createMany?: MuridProfileCreateManyKelasInputEnvelope
    connect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
  }

  export type JadwalTugasCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput> | JadwalTugasCreateWithoutKelasInput[] | JadwalTugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutKelasInput | JadwalTugasCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalTugasCreateManyKelasInputEnvelope
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
  }

  export type MuridProfileUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput> | MuridProfileCreateWithoutKelasInput[] | MuridProfileUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MuridProfileCreateOrConnectWithoutKelasInput | MuridProfileCreateOrConnectWithoutKelasInput[]
    createMany?: MuridProfileCreateManyKelasInputEnvelope
    connect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
  }

  export type JadwalTugasUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput> | JadwalTugasCreateWithoutKelasInput[] | JadwalTugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutKelasInput | JadwalTugasCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalTugasCreateManyKelasInputEnvelope
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
  }

  export type GuruProfileUpdateOneWithoutKelasNestedInput = {
    create?: XOR<GuruProfileCreateWithoutKelasInput, GuruProfileUncheckedCreateWithoutKelasInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutKelasInput
    upsert?: GuruProfileUpsertWithoutKelasInput
    disconnect?: GuruProfileWhereInput | boolean
    delete?: GuruProfileWhereInput | boolean
    connect?: GuruProfileWhereUniqueInput
    update?: XOR<XOR<GuruProfileUpdateToOneWithWhereWithoutKelasInput, GuruProfileUpdateWithoutKelasInput>, GuruProfileUncheckedUpdateWithoutKelasInput>
  }

  export type MuridProfileUpdateManyWithoutKelasNestedInput = {
    create?: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput> | MuridProfileCreateWithoutKelasInput[] | MuridProfileUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MuridProfileCreateOrConnectWithoutKelasInput | MuridProfileCreateOrConnectWithoutKelasInput[]
    upsert?: MuridProfileUpsertWithWhereUniqueWithoutKelasInput | MuridProfileUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: MuridProfileCreateManyKelasInputEnvelope
    set?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    disconnect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    delete?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    connect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    update?: MuridProfileUpdateWithWhereUniqueWithoutKelasInput | MuridProfileUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: MuridProfileUpdateManyWithWhereWithoutKelasInput | MuridProfileUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: MuridProfileScalarWhereInput | MuridProfileScalarWhereInput[]
  }

  export type JadwalTugasUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput> | JadwalTugasCreateWithoutKelasInput[] | JadwalTugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutKelasInput | JadwalTugasCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalTugasUpsertWithWhereUniqueWithoutKelasInput | JadwalTugasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalTugasCreateManyKelasInputEnvelope
    set?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    disconnect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    delete?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    update?: JadwalTugasUpdateWithWhereUniqueWithoutKelasInput | JadwalTugasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalTugasUpdateManyWithWhereWithoutKelasInput | JadwalTugasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
  }

  export type MuridProfileUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput> | MuridProfileCreateWithoutKelasInput[] | MuridProfileUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MuridProfileCreateOrConnectWithoutKelasInput | MuridProfileCreateOrConnectWithoutKelasInput[]
    upsert?: MuridProfileUpsertWithWhereUniqueWithoutKelasInput | MuridProfileUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: MuridProfileCreateManyKelasInputEnvelope
    set?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    disconnect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    delete?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    connect?: MuridProfileWhereUniqueInput | MuridProfileWhereUniqueInput[]
    update?: MuridProfileUpdateWithWhereUniqueWithoutKelasInput | MuridProfileUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: MuridProfileUpdateManyWithWhereWithoutKelasInput | MuridProfileUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: MuridProfileScalarWhereInput | MuridProfileScalarWhereInput[]
  }

  export type JadwalTugasUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput> | JadwalTugasCreateWithoutKelasInput[] | JadwalTugasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalTugasCreateOrConnectWithoutKelasInput | JadwalTugasCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalTugasUpsertWithWhereUniqueWithoutKelasInput | JadwalTugasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalTugasCreateManyKelasInputEnvelope
    set?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    disconnect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    delete?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    connect?: JadwalTugasWhereUniqueInput | JadwalTugasWhereUniqueInput[]
    update?: JadwalTugasUpdateWithWhereUniqueWithoutKelasInput | JadwalTugasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalTugasUpdateManyWithWhereWithoutKelasInput | JadwalTugasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
  }

  export type RfidCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<RfidCreateWithoutAbsensiInput, RfidUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: RfidCreateOrConnectWithoutAbsensiInput
    connect?: RfidWhereUniqueInput
  }

  export type MuridProfileCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<MuridProfileCreateWithoutAbsensiInput, MuridProfileUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutAbsensiInput
    connect?: MuridProfileWhereUniqueInput
  }

  export type EnumKeteranganFieldUpdateOperationsInput = {
    set?: $Enums.Keterangan
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RfidUpdateOneWithoutAbsensiNestedInput = {
    create?: XOR<RfidCreateWithoutAbsensiInput, RfidUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: RfidCreateOrConnectWithoutAbsensiInput
    upsert?: RfidUpsertWithoutAbsensiInput
    disconnect?: RfidWhereInput | boolean
    delete?: RfidWhereInput | boolean
    connect?: RfidWhereUniqueInput
    update?: XOR<XOR<RfidUpdateToOneWithWhereWithoutAbsensiInput, RfidUpdateWithoutAbsensiInput>, RfidUncheckedUpdateWithoutAbsensiInput>
  }

  export type MuridProfileUpdateOneWithoutAbsensiNestedInput = {
    create?: XOR<MuridProfileCreateWithoutAbsensiInput, MuridProfileUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutAbsensiInput
    upsert?: MuridProfileUpsertWithoutAbsensiInput
    disconnect?: MuridProfileWhereInput | boolean
    delete?: MuridProfileWhereInput | boolean
    connect?: MuridProfileWhereUniqueInput
    update?: XOR<XOR<MuridProfileUpdateToOneWithWhereWithoutAbsensiInput, MuridProfileUpdateWithoutAbsensiInput>, MuridProfileUncheckedUpdateWithoutAbsensiInput>
  }

  export type GuruProfileCreateNestedOneWithoutJadwalTugasInput = {
    create?: XOR<GuruProfileCreateWithoutJadwalTugasInput, GuruProfileUncheckedCreateWithoutJadwalTugasInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutJadwalTugasInput
    connect?: GuruProfileWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutJadwalTugasInput = {
    create?: XOR<KelasCreateWithoutJadwalTugasInput, KelasUncheckedCreateWithoutJadwalTugasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalTugasInput
    connect?: KelasWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuruProfileUpdateOneRequiredWithoutJadwalTugasNestedInput = {
    create?: XOR<GuruProfileCreateWithoutJadwalTugasInput, GuruProfileUncheckedCreateWithoutJadwalTugasInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutJadwalTugasInput
    upsert?: GuruProfileUpsertWithoutJadwalTugasInput
    connect?: GuruProfileWhereUniqueInput
    update?: XOR<XOR<GuruProfileUpdateToOneWithWhereWithoutJadwalTugasInput, GuruProfileUpdateWithoutJadwalTugasInput>, GuruProfileUncheckedUpdateWithoutJadwalTugasInput>
  }

  export type KelasUpdateOneRequiredWithoutJadwalTugasNestedInput = {
    create?: XOR<KelasCreateWithoutJadwalTugasInput, KelasUncheckedCreateWithoutJadwalTugasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalTugasInput
    upsert?: KelasUpsertWithoutJadwalTugasInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutJadwalTugasInput, KelasUpdateWithoutJadwalTugasInput>, KelasUncheckedUpdateWithoutJadwalTugasInput>
  }

  export type MuridProfileCreateNestedOneWithoutRfidInput = {
    create?: XOR<MuridProfileCreateWithoutRfidInput, MuridProfileUncheckedCreateWithoutRfidInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutRfidInput
    connect?: MuridProfileWhereUniqueInput
  }

  export type GuruProfileCreateNestedOneWithoutRfidInput = {
    create?: XOR<GuruProfileCreateWithoutRfidInput, GuruProfileUncheckedCreateWithoutRfidInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutRfidInput
    connect?: GuruProfileWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutRfidInput = {
    create?: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput> | AbsensiCreateWithoutRfidInput[] | AbsensiUncheckedCreateWithoutRfidInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutRfidInput | AbsensiCreateOrConnectWithoutRfidInput[]
    createMany?: AbsensiCreateManyRfidInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutRfidInput = {
    create?: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput> | AbsensiCreateWithoutRfidInput[] | AbsensiUncheckedCreateWithoutRfidInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutRfidInput | AbsensiCreateOrConnectWithoutRfidInput[]
    createMany?: AbsensiCreateManyRfidInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type MuridProfileUpdateOneWithoutRfidNestedInput = {
    create?: XOR<MuridProfileCreateWithoutRfidInput, MuridProfileUncheckedCreateWithoutRfidInput>
    connectOrCreate?: MuridProfileCreateOrConnectWithoutRfidInput
    upsert?: MuridProfileUpsertWithoutRfidInput
    disconnect?: MuridProfileWhereInput | boolean
    delete?: MuridProfileWhereInput | boolean
    connect?: MuridProfileWhereUniqueInput
    update?: XOR<XOR<MuridProfileUpdateToOneWithWhereWithoutRfidInput, MuridProfileUpdateWithoutRfidInput>, MuridProfileUncheckedUpdateWithoutRfidInput>
  }

  export type GuruProfileUpdateOneWithoutRfidNestedInput = {
    create?: XOR<GuruProfileCreateWithoutRfidInput, GuruProfileUncheckedCreateWithoutRfidInput>
    connectOrCreate?: GuruProfileCreateOrConnectWithoutRfidInput
    upsert?: GuruProfileUpsertWithoutRfidInput
    disconnect?: GuruProfileWhereInput | boolean
    delete?: GuruProfileWhereInput | boolean
    connect?: GuruProfileWhereUniqueInput
    update?: XOR<XOR<GuruProfileUpdateToOneWithWhereWithoutRfidInput, GuruProfileUpdateWithoutRfidInput>, GuruProfileUncheckedUpdateWithoutRfidInput>
  }

  export type AbsensiUpdateManyWithoutRfidNestedInput = {
    create?: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput> | AbsensiCreateWithoutRfidInput[] | AbsensiUncheckedCreateWithoutRfidInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutRfidInput | AbsensiCreateOrConnectWithoutRfidInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutRfidInput | AbsensiUpsertWithWhereUniqueWithoutRfidInput[]
    createMany?: AbsensiCreateManyRfidInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutRfidInput | AbsensiUpdateWithWhereUniqueWithoutRfidInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutRfidInput | AbsensiUpdateManyWithWhereWithoutRfidInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutRfidNestedInput = {
    create?: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput> | AbsensiCreateWithoutRfidInput[] | AbsensiUncheckedCreateWithoutRfidInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutRfidInput | AbsensiCreateOrConnectWithoutRfidInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutRfidInput | AbsensiUpsertWithWhereUniqueWithoutRfidInput[]
    createMany?: AbsensiCreateManyRfidInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutRfidInput | AbsensiUpdateWithWhereUniqueWithoutRfidInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutRfidInput | AbsensiUpdateManyWithWhereWithoutRfidInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
  }

  export type NestedEnumKeteranganFilter<$PrismaModel = never> = {
    equals?: $Enums.Keterangan | EnumKeteranganFieldRefInput<$PrismaModel>
    in?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    notIn?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    not?: NestedEnumKeteranganFilter<$PrismaModel> | $Enums.Keterangan
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
  }

  export type NestedEnumKeteranganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Keterangan | EnumKeteranganFieldRefInput<$PrismaModel>
    in?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    notIn?: $Enums.Keterangan[] | ListEnumKeteranganFieldRefInput<$PrismaModel>
    not?: NestedEnumKeteranganWithAggregatesFilter<$PrismaModel> | $Enums.Keterangan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeteranganFilter<$PrismaModel>
    _max?: NestedEnumKeteranganFilter<$PrismaModel>
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

  export type MuridProfileCreateWithoutUserInput = {
    nis: number
    name: string
    noMurid?: string | null
    kelas?: KelasCreateNestedOneWithoutMuridProfileInput
    rfid?: RfidCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridCreateNestedManyWithoutMuridInput
    absensi?: AbsensiCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateWithoutUserInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
    rfid?: RfidUncheckedCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridUncheckedCreateNestedManyWithoutMuridInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileCreateOrConnectWithoutUserInput = {
    where: MuridProfileWhereUniqueInput
    create: XOR<MuridProfileCreateWithoutUserInput, MuridProfileUncheckedCreateWithoutUserInput>
  }

  export type GuruProfileCreateWithoutUserInput = {
    nik: number
    name: string
    noGuru: string
    rfid?: RfidCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileUncheckedCreateWithoutUserInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
    rfid?: RfidUncheckedCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileCreateOrConnectWithoutUserInput = {
    where: GuruProfileWhereUniqueInput
    create: XOR<GuruProfileCreateWithoutUserInput, GuruProfileUncheckedCreateWithoutUserInput>
  }

  export type MuridProfileUpsertWithoutUserInput = {
    update: XOR<MuridProfileUpdateWithoutUserInput, MuridProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MuridProfileCreateWithoutUserInput, MuridProfileUncheckedCreateWithoutUserInput>
    where?: MuridProfileWhereInput
  }

  export type MuridProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MuridProfileWhereInput
    data: XOR<MuridProfileUpdateWithoutUserInput, MuridProfileUncheckedUpdateWithoutUserInput>
  }

  export type MuridProfileUpdateWithoutUserInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: KelasUpdateOneWithoutMuridProfileNestedInput
    rfid?: RfidUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: RfidUncheckedUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUncheckedUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type GuruProfileUpsertWithoutUserInput = {
    update: XOR<GuruProfileUpdateWithoutUserInput, GuruProfileUncheckedUpdateWithoutUserInput>
    create: XOR<GuruProfileCreateWithoutUserInput, GuruProfileUncheckedCreateWithoutUserInput>
    where?: GuruProfileWhereInput
  }

  export type GuruProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: GuruProfileWhereInput
    data: XOR<GuruProfileUpdateWithoutUserInput, GuruProfileUncheckedUpdateWithoutUserInput>
  }

  export type GuruProfileUpdateWithoutUserInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutGuruNestedInput
  }

  export type GuruProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUncheckedUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type KelasCreateWithoutMuridProfileInput = {
    name: string
    waliKelas?: GuruProfileCreateNestedOneWithoutKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutMuridProfileInput = {
    id?: number
    name: string
    waliKelasId?: number | null
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutMuridProfileInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutMuridProfileInput, KelasUncheckedCreateWithoutMuridProfileInput>
  }

  export type RfidCreateWithoutMuridProfileInput = {
    rfidNumb?: string | null
    guruProfile?: GuruProfileCreateNestedOneWithoutRfidInput
    absensi?: AbsensiCreateNestedManyWithoutRfidInput
  }

  export type RfidUncheckedCreateWithoutMuridProfileInput = {
    id?: number
    rfidNumb?: string | null
    guruProfileId?: number | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutRfidInput
  }

  export type RfidCreateOrConnectWithoutMuridProfileInput = {
    where: RfidWhereUniqueInput
    create: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
  }

  export type UserCreateWithoutMuridProfileInput = {
    email: string
    password: string
    role: $Enums.Role
    guruProfile?: GuruProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMuridProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    guruProfileId?: number | null
  }

  export type UserCreateOrConnectWithoutMuridProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
  }

  export type WaliMuridCreateWithoutMuridInput = {
    nameWaliMurid: string
    noWaliMurid: string
  }

  export type WaliMuridUncheckedCreateWithoutMuridInput = {
    id?: number
    nameWaliMurid: string
    noWaliMurid: string
  }

  export type WaliMuridCreateOrConnectWithoutMuridInput = {
    where: WaliMuridWhereUniqueInput
    create: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput>
  }

  export type WaliMuridCreateManyMuridInputEnvelope = {
    data: WaliMuridCreateManyMuridInput | WaliMuridCreateManyMuridInput[]
    skipDuplicates?: boolean
  }

  export type AbsensiCreateWithoutMuridInput = {
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
    rfid?: RfidCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutMuridInput = {
    id?: number
    rfidNumb?: string | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type AbsensiCreateOrConnectWithoutMuridInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput>
  }

  export type AbsensiCreateManyMuridInputEnvelope = {
    data: AbsensiCreateManyMuridInput | AbsensiCreateManyMuridInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithoutMuridProfileInput = {
    update: XOR<KelasUpdateWithoutMuridProfileInput, KelasUncheckedUpdateWithoutMuridProfileInput>
    create: XOR<KelasCreateWithoutMuridProfileInput, KelasUncheckedCreateWithoutMuridProfileInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutMuridProfileInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutMuridProfileInput, KelasUncheckedUpdateWithoutMuridProfileInput>
  }

  export type KelasUpdateWithoutMuridProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    waliKelas?: GuruProfileUpdateOneWithoutKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutMuridProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableIntFieldUpdateOperationsInput | number | null
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type RfidUpsertWithoutMuridProfileInput = {
    update: XOR<RfidUpdateWithoutMuridProfileInput, RfidUncheckedUpdateWithoutMuridProfileInput>
    create: XOR<RfidCreateWithoutMuridProfileInput, RfidUncheckedCreateWithoutMuridProfileInput>
    where?: RfidWhereInput
  }

  export type RfidUpdateToOneWithWhereWithoutMuridProfileInput = {
    where?: RfidWhereInput
    data: XOR<RfidUpdateWithoutMuridProfileInput, RfidUncheckedUpdateWithoutMuridProfileInput>
  }

  export type RfidUpdateWithoutMuridProfileInput = {
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    guruProfile?: GuruProfileUpdateOneWithoutRfidNestedInput
    absensi?: AbsensiUpdateManyWithoutRfidNestedInput
  }

  export type RfidUncheckedUpdateWithoutMuridProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    absensi?: AbsensiUncheckedUpdateManyWithoutRfidNestedInput
  }

  export type UserUpsertWithoutMuridProfileInput = {
    update: XOR<UserUpdateWithoutMuridProfileInput, UserUncheckedUpdateWithoutMuridProfileInput>
    create: XOR<UserCreateWithoutMuridProfileInput, UserUncheckedCreateWithoutMuridProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMuridProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMuridProfileInput, UserUncheckedUpdateWithoutMuridProfileInput>
  }

  export type UserUpdateWithoutMuridProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guruProfile?: GuruProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMuridProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WaliMuridUpsertWithWhereUniqueWithoutMuridInput = {
    where: WaliMuridWhereUniqueInput
    update: XOR<WaliMuridUpdateWithoutMuridInput, WaliMuridUncheckedUpdateWithoutMuridInput>
    create: XOR<WaliMuridCreateWithoutMuridInput, WaliMuridUncheckedCreateWithoutMuridInput>
  }

  export type WaliMuridUpdateWithWhereUniqueWithoutMuridInput = {
    where: WaliMuridWhereUniqueInput
    data: XOR<WaliMuridUpdateWithoutMuridInput, WaliMuridUncheckedUpdateWithoutMuridInput>
  }

  export type WaliMuridUpdateManyWithWhereWithoutMuridInput = {
    where: WaliMuridScalarWhereInput
    data: XOR<WaliMuridUpdateManyMutationInput, WaliMuridUncheckedUpdateManyWithoutMuridInput>
  }

  export type WaliMuridScalarWhereInput = {
    AND?: WaliMuridScalarWhereInput | WaliMuridScalarWhereInput[]
    OR?: WaliMuridScalarWhereInput[]
    NOT?: WaliMuridScalarWhereInput | WaliMuridScalarWhereInput[]
    id?: IntFilter<"WaliMurid"> | number
    nameWaliMurid?: StringFilter<"WaliMurid"> | string
    noWaliMurid?: StringFilter<"WaliMurid"> | string
    muridId?: IntFilter<"WaliMurid"> | number
  }

  export type AbsensiUpsertWithWhereUniqueWithoutMuridInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutMuridInput, AbsensiUncheckedUpdateWithoutMuridInput>
    create: XOR<AbsensiCreateWithoutMuridInput, AbsensiUncheckedCreateWithoutMuridInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutMuridInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutMuridInput, AbsensiUncheckedUpdateWithoutMuridInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutMuridInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutMuridInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: IntFilter<"Absensi"> | number
    rfidNumb?: StringNullableFilter<"Absensi"> | string | null
    muridId?: IntNullableFilter<"Absensi"> | number | null
    keterangan?: EnumKeteranganFilter<"Absensi"> | $Enums.Keterangan
    tanggal?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamHadir?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    catatan?: StringNullableFilter<"Absensi"> | string | null
  }

  export type MuridProfileCreateWithoutWaliMuridsInput = {
    nis: number
    name: string
    noMurid?: string | null
    kelas?: KelasCreateNestedOneWithoutMuridProfileInput
    rfid?: RfidCreateNestedOneWithoutMuridProfileInput
    User?: UserCreateNestedOneWithoutMuridProfileInput
    absensi?: AbsensiCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateWithoutWaliMuridsInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
    rfid?: RfidUncheckedCreateNestedOneWithoutMuridProfileInput
    User?: UserUncheckedCreateNestedOneWithoutMuridProfileInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileCreateOrConnectWithoutWaliMuridsInput = {
    where: MuridProfileWhereUniqueInput
    create: XOR<MuridProfileCreateWithoutWaliMuridsInput, MuridProfileUncheckedCreateWithoutWaliMuridsInput>
  }

  export type MuridProfileUpsertWithoutWaliMuridsInput = {
    update: XOR<MuridProfileUpdateWithoutWaliMuridsInput, MuridProfileUncheckedUpdateWithoutWaliMuridsInput>
    create: XOR<MuridProfileCreateWithoutWaliMuridsInput, MuridProfileUncheckedCreateWithoutWaliMuridsInput>
    where?: MuridProfileWhereInput
  }

  export type MuridProfileUpdateToOneWithWhereWithoutWaliMuridsInput = {
    where?: MuridProfileWhereInput
    data: XOR<MuridProfileUpdateWithoutWaliMuridsInput, MuridProfileUncheckedUpdateWithoutWaliMuridsInput>
  }

  export type MuridProfileUpdateWithoutWaliMuridsInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: KelasUpdateOneWithoutMuridProfileNestedInput
    rfid?: RfidUpdateOneWithoutMuridProfileNestedInput
    User?: UserUpdateOneWithoutMuridProfileNestedInput
    absensi?: AbsensiUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateWithoutWaliMuridsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: RfidUncheckedUpdateOneWithoutMuridProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutMuridProfileNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type RfidCreateWithoutGuruProfileInput = {
    rfidNumb?: string | null
    muridProfile?: MuridProfileCreateNestedOneWithoutRfidInput
    absensi?: AbsensiCreateNestedManyWithoutRfidInput
  }

  export type RfidUncheckedCreateWithoutGuruProfileInput = {
    id?: number
    rfidNumb?: string | null
    muridProfileId?: number | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutRfidInput
  }

  export type RfidCreateOrConnectWithoutGuruProfileInput = {
    where: RfidWhereUniqueInput
    create: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
  }

  export type UserCreateWithoutGuruProfileInput = {
    email: string
    password: string
    role: $Enums.Role
    muridProfile?: MuridProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuruProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    muridProfileId?: number | null
  }

  export type UserCreateOrConnectWithoutGuruProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
  }

  export type KelasCreateWithoutWaliKelasInput = {
    name: string
    muridProfile?: MuridProfileCreateNestedManyWithoutKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutWaliKelasInput = {
    id?: number
    name: string
    muridProfile?: MuridProfileUncheckedCreateNestedManyWithoutKelasInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutWaliKelasInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
  }

  export type JadwalTugasCreateWithoutGuruInput = {
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    createdAt?: Date | string
    kelas: KelasCreateNestedOneWithoutJadwalTugasInput
  }

  export type JadwalTugasUncheckedCreateWithoutGuruInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    kelasId: number
    createdAt?: Date | string
  }

  export type JadwalTugasCreateOrConnectWithoutGuruInput = {
    where: JadwalTugasWhereUniqueInput
    create: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput>
  }

  export type JadwalTugasCreateManyGuruInputEnvelope = {
    data: JadwalTugasCreateManyGuruInput | JadwalTugasCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type RfidUpsertWithoutGuruProfileInput = {
    update: XOR<RfidUpdateWithoutGuruProfileInput, RfidUncheckedUpdateWithoutGuruProfileInput>
    create: XOR<RfidCreateWithoutGuruProfileInput, RfidUncheckedCreateWithoutGuruProfileInput>
    where?: RfidWhereInput
  }

  export type RfidUpdateToOneWithWhereWithoutGuruProfileInput = {
    where?: RfidWhereInput
    data: XOR<RfidUpdateWithoutGuruProfileInput, RfidUncheckedUpdateWithoutGuruProfileInput>
  }

  export type RfidUpdateWithoutGuruProfileInput = {
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfile?: MuridProfileUpdateOneWithoutRfidNestedInput
    absensi?: AbsensiUpdateManyWithoutRfidNestedInput
  }

  export type RfidUncheckedUpdateWithoutGuruProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    absensi?: AbsensiUncheckedUpdateManyWithoutRfidNestedInput
  }

  export type UserUpsertWithoutGuruProfileInput = {
    update: XOR<UserUpdateWithoutGuruProfileInput, UserUncheckedUpdateWithoutGuruProfileInput>
    create: XOR<UserCreateWithoutGuruProfileInput, UserUncheckedCreateWithoutGuruProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuruProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuruProfileInput, UserUncheckedUpdateWithoutGuruProfileInput>
  }

  export type UserUpdateWithoutGuruProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    muridProfile?: MuridProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuruProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KelasUpsertWithoutWaliKelasInput = {
    update: XOR<KelasUpdateWithoutWaliKelasInput, KelasUncheckedUpdateWithoutWaliKelasInput>
    create: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutWaliKelasInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutWaliKelasInput, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type KelasUpdateWithoutWaliKelasInput = {
    name?: StringFieldUpdateOperationsInput | string
    muridProfile?: MuridProfileUpdateManyWithoutKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutWaliKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muridProfile?: MuridProfileUncheckedUpdateManyWithoutKelasNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type JadwalTugasUpsertWithWhereUniqueWithoutGuruInput = {
    where: JadwalTugasWhereUniqueInput
    update: XOR<JadwalTugasUpdateWithoutGuruInput, JadwalTugasUncheckedUpdateWithoutGuruInput>
    create: XOR<JadwalTugasCreateWithoutGuruInput, JadwalTugasUncheckedCreateWithoutGuruInput>
  }

  export type JadwalTugasUpdateWithWhereUniqueWithoutGuruInput = {
    where: JadwalTugasWhereUniqueInput
    data: XOR<JadwalTugasUpdateWithoutGuruInput, JadwalTugasUncheckedUpdateWithoutGuruInput>
  }

  export type JadwalTugasUpdateManyWithWhereWithoutGuruInput = {
    where: JadwalTugasScalarWhereInput
    data: XOR<JadwalTugasUpdateManyMutationInput, JadwalTugasUncheckedUpdateManyWithoutGuruInput>
  }

  export type JadwalTugasScalarWhereInput = {
    AND?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
    OR?: JadwalTugasScalarWhereInput[]
    NOT?: JadwalTugasScalarWhereInput | JadwalTugasScalarWhereInput[]
    id?: IntFilter<"JadwalTugas"> | number
    title?: StringFilter<"JadwalTugas"> | string
    start?: DateTimeFilter<"JadwalTugas"> | Date | string
    end?: DateTimeNullableFilter<"JadwalTugas"> | Date | string | null
    description?: StringFilter<"JadwalTugas"> | string
    guruId?: IntFilter<"JadwalTugas"> | number
    kelasId?: IntFilter<"JadwalTugas"> | number
    createdAt?: DateTimeFilter<"JadwalTugas"> | Date | string
  }

  export type GuruProfileCreateWithoutKelasInput = {
    nik: number
    name: string
    noGuru: string
    rfid?: RfidCreateNestedOneWithoutGuruProfileInput
    User?: UserCreateNestedOneWithoutGuruProfileInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileUncheckedCreateWithoutKelasInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
    rfid?: RfidUncheckedCreateNestedOneWithoutGuruProfileInput
    User?: UserUncheckedCreateNestedOneWithoutGuruProfileInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileCreateOrConnectWithoutKelasInput = {
    where: GuruProfileWhereUniqueInput
    create: XOR<GuruProfileCreateWithoutKelasInput, GuruProfileUncheckedCreateWithoutKelasInput>
  }

  export type MuridProfileCreateWithoutKelasInput = {
    nis: number
    name: string
    noMurid?: string | null
    rfid?: RfidCreateNestedOneWithoutMuridProfileInput
    User?: UserCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridCreateNestedManyWithoutMuridInput
    absensi?: AbsensiCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateWithoutKelasInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    rfid?: RfidUncheckedCreateNestedOneWithoutMuridProfileInput
    User?: UserUncheckedCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridUncheckedCreateNestedManyWithoutMuridInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileCreateOrConnectWithoutKelasInput = {
    where: MuridProfileWhereUniqueInput
    create: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput>
  }

  export type MuridProfileCreateManyKelasInputEnvelope = {
    data: MuridProfileCreateManyKelasInput | MuridProfileCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type JadwalTugasCreateWithoutKelasInput = {
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    createdAt?: Date | string
    guru: GuruProfileCreateNestedOneWithoutJadwalTugasInput
  }

  export type JadwalTugasUncheckedCreateWithoutKelasInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    guruId: number
    createdAt?: Date | string
  }

  export type JadwalTugasCreateOrConnectWithoutKelasInput = {
    where: JadwalTugasWhereUniqueInput
    create: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput>
  }

  export type JadwalTugasCreateManyKelasInputEnvelope = {
    data: JadwalTugasCreateManyKelasInput | JadwalTugasCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type GuruProfileUpsertWithoutKelasInput = {
    update: XOR<GuruProfileUpdateWithoutKelasInput, GuruProfileUncheckedUpdateWithoutKelasInput>
    create: XOR<GuruProfileCreateWithoutKelasInput, GuruProfileUncheckedCreateWithoutKelasInput>
    where?: GuruProfileWhereInput
  }

  export type GuruProfileUpdateToOneWithWhereWithoutKelasInput = {
    where?: GuruProfileWhereInput
    data: XOR<GuruProfileUpdateWithoutKelasInput, GuruProfileUncheckedUpdateWithoutKelasInput>
  }

  export type GuruProfileUpdateWithoutKelasInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUpdateOneWithoutGuruProfileNestedInput
    User?: UserUpdateOneWithoutGuruProfileNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutGuruNestedInput
  }

  export type GuruProfileUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUncheckedUpdateOneWithoutGuruProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutGuruProfileNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type MuridProfileUpsertWithWhereUniqueWithoutKelasInput = {
    where: MuridProfileWhereUniqueInput
    update: XOR<MuridProfileUpdateWithoutKelasInput, MuridProfileUncheckedUpdateWithoutKelasInput>
    create: XOR<MuridProfileCreateWithoutKelasInput, MuridProfileUncheckedCreateWithoutKelasInput>
  }

  export type MuridProfileUpdateWithWhereUniqueWithoutKelasInput = {
    where: MuridProfileWhereUniqueInput
    data: XOR<MuridProfileUpdateWithoutKelasInput, MuridProfileUncheckedUpdateWithoutKelasInput>
  }

  export type MuridProfileUpdateManyWithWhereWithoutKelasInput = {
    where: MuridProfileScalarWhereInput
    data: XOR<MuridProfileUpdateManyMutationInput, MuridProfileUncheckedUpdateManyWithoutKelasInput>
  }

  export type MuridProfileScalarWhereInput = {
    AND?: MuridProfileScalarWhereInput | MuridProfileScalarWhereInput[]
    OR?: MuridProfileScalarWhereInput[]
    NOT?: MuridProfileScalarWhereInput | MuridProfileScalarWhereInput[]
    id?: IntFilter<"MuridProfile"> | number
    nis?: IntFilter<"MuridProfile"> | number
    name?: StringFilter<"MuridProfile"> | string
    noMurid?: StringNullableFilter<"MuridProfile"> | string | null
    kelasId?: IntNullableFilter<"MuridProfile"> | number | null
  }

  export type JadwalTugasUpsertWithWhereUniqueWithoutKelasInput = {
    where: JadwalTugasWhereUniqueInput
    update: XOR<JadwalTugasUpdateWithoutKelasInput, JadwalTugasUncheckedUpdateWithoutKelasInput>
    create: XOR<JadwalTugasCreateWithoutKelasInput, JadwalTugasUncheckedCreateWithoutKelasInput>
  }

  export type JadwalTugasUpdateWithWhereUniqueWithoutKelasInput = {
    where: JadwalTugasWhereUniqueInput
    data: XOR<JadwalTugasUpdateWithoutKelasInput, JadwalTugasUncheckedUpdateWithoutKelasInput>
  }

  export type JadwalTugasUpdateManyWithWhereWithoutKelasInput = {
    where: JadwalTugasScalarWhereInput
    data: XOR<JadwalTugasUpdateManyMutationInput, JadwalTugasUncheckedUpdateManyWithoutKelasInput>
  }

  export type RfidCreateWithoutAbsensiInput = {
    rfidNumb?: string | null
    muridProfile?: MuridProfileCreateNestedOneWithoutRfidInput
    guruProfile?: GuruProfileCreateNestedOneWithoutRfidInput
  }

  export type RfidUncheckedCreateWithoutAbsensiInput = {
    id?: number
    rfidNumb?: string | null
    muridProfileId?: number | null
    guruProfileId?: number | null
  }

  export type RfidCreateOrConnectWithoutAbsensiInput = {
    where: RfidWhereUniqueInput
    create: XOR<RfidCreateWithoutAbsensiInput, RfidUncheckedCreateWithoutAbsensiInput>
  }

  export type MuridProfileCreateWithoutAbsensiInput = {
    nis: number
    name: string
    noMurid?: string | null
    kelas?: KelasCreateNestedOneWithoutMuridProfileInput
    rfid?: RfidCreateNestedOneWithoutMuridProfileInput
    User?: UserCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateWithoutAbsensiInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
    rfid?: RfidUncheckedCreateNestedOneWithoutMuridProfileInput
    User?: UserUncheckedCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileCreateOrConnectWithoutAbsensiInput = {
    where: MuridProfileWhereUniqueInput
    create: XOR<MuridProfileCreateWithoutAbsensiInput, MuridProfileUncheckedCreateWithoutAbsensiInput>
  }

  export type RfidUpsertWithoutAbsensiInput = {
    update: XOR<RfidUpdateWithoutAbsensiInput, RfidUncheckedUpdateWithoutAbsensiInput>
    create: XOR<RfidCreateWithoutAbsensiInput, RfidUncheckedCreateWithoutAbsensiInput>
    where?: RfidWhereInput
  }

  export type RfidUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: RfidWhereInput
    data: XOR<RfidUpdateWithoutAbsensiInput, RfidUncheckedUpdateWithoutAbsensiInput>
  }

  export type RfidUpdateWithoutAbsensiInput = {
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfile?: MuridProfileUpdateOneWithoutRfidNestedInput
    guruProfile?: GuruProfileUpdateOneWithoutRfidNestedInput
  }

  export type RfidUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    muridProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    guruProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MuridProfileUpsertWithoutAbsensiInput = {
    update: XOR<MuridProfileUpdateWithoutAbsensiInput, MuridProfileUncheckedUpdateWithoutAbsensiInput>
    create: XOR<MuridProfileCreateWithoutAbsensiInput, MuridProfileUncheckedCreateWithoutAbsensiInput>
    where?: MuridProfileWhereInput
  }

  export type MuridProfileUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: MuridProfileWhereInput
    data: XOR<MuridProfileUpdateWithoutAbsensiInput, MuridProfileUncheckedUpdateWithoutAbsensiInput>
  }

  export type MuridProfileUpdateWithoutAbsensiInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: KelasUpdateOneWithoutMuridProfileNestedInput
    rfid?: RfidUpdateOneWithoutMuridProfileNestedInput
    User?: UserUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: RfidUncheckedUpdateOneWithoutMuridProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type GuruProfileCreateWithoutJadwalTugasInput = {
    nik: number
    name: string
    noGuru: string
    rfid?: RfidCreateNestedOneWithoutGuruProfileInput
    User?: UserCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruProfileUncheckedCreateWithoutJadwalTugasInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
    rfid?: RfidUncheckedCreateNestedOneWithoutGuruProfileInput
    User?: UserUncheckedCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruProfileCreateOrConnectWithoutJadwalTugasInput = {
    where: GuruProfileWhereUniqueInput
    create: XOR<GuruProfileCreateWithoutJadwalTugasInput, GuruProfileUncheckedCreateWithoutJadwalTugasInput>
  }

  export type KelasCreateWithoutJadwalTugasInput = {
    name: string
    waliKelas?: GuruProfileCreateNestedOneWithoutKelasInput
    muridProfile?: MuridProfileCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutJadwalTugasInput = {
    id?: number
    name: string
    waliKelasId?: number | null
    muridProfile?: MuridProfileUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutJadwalTugasInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutJadwalTugasInput, KelasUncheckedCreateWithoutJadwalTugasInput>
  }

  export type GuruProfileUpsertWithoutJadwalTugasInput = {
    update: XOR<GuruProfileUpdateWithoutJadwalTugasInput, GuruProfileUncheckedUpdateWithoutJadwalTugasInput>
    create: XOR<GuruProfileCreateWithoutJadwalTugasInput, GuruProfileUncheckedCreateWithoutJadwalTugasInput>
    where?: GuruProfileWhereInput
  }

  export type GuruProfileUpdateToOneWithWhereWithoutJadwalTugasInput = {
    where?: GuruProfileWhereInput
    data: XOR<GuruProfileUpdateWithoutJadwalTugasInput, GuruProfileUncheckedUpdateWithoutJadwalTugasInput>
  }

  export type GuruProfileUpdateWithoutJadwalTugasInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUpdateOneWithoutGuruProfileNestedInput
    User?: UserUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUpdateOneWithoutWaliKelasNestedInput
  }

  export type GuruProfileUncheckedUpdateWithoutJadwalTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    rfid?: RfidUncheckedUpdateOneWithoutGuruProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
  }

  export type KelasUpsertWithoutJadwalTugasInput = {
    update: XOR<KelasUpdateWithoutJadwalTugasInput, KelasUncheckedUpdateWithoutJadwalTugasInput>
    create: XOR<KelasCreateWithoutJadwalTugasInput, KelasUncheckedCreateWithoutJadwalTugasInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutJadwalTugasInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutJadwalTugasInput, KelasUncheckedUpdateWithoutJadwalTugasInput>
  }

  export type KelasUpdateWithoutJadwalTugasInput = {
    name?: StringFieldUpdateOperationsInput | string
    waliKelas?: GuruProfileUpdateOneWithoutKelasNestedInput
    muridProfile?: MuridProfileUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutJadwalTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableIntFieldUpdateOperationsInput | number | null
    muridProfile?: MuridProfileUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type MuridProfileCreateWithoutRfidInput = {
    nis: number
    name: string
    noMurid?: string | null
    kelas?: KelasCreateNestedOneWithoutMuridProfileInput
    User?: UserCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridCreateNestedManyWithoutMuridInput
    absensi?: AbsensiCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileUncheckedCreateWithoutRfidInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
    kelasId?: number | null
    User?: UserUncheckedCreateNestedOneWithoutMuridProfileInput
    waliMurids?: WaliMuridUncheckedCreateNestedManyWithoutMuridInput
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMuridInput
  }

  export type MuridProfileCreateOrConnectWithoutRfidInput = {
    where: MuridProfileWhereUniqueInput
    create: XOR<MuridProfileCreateWithoutRfidInput, MuridProfileUncheckedCreateWithoutRfidInput>
  }

  export type GuruProfileCreateWithoutRfidInput = {
    nik: number
    name: string
    noGuru: string
    User?: UserCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileUncheckedCreateWithoutRfidInput = {
    id?: number
    nik: number
    name: string
    noGuru: string
    User?: UserUncheckedCreateNestedOneWithoutGuruProfileInput
    Kelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
    JadwalTugas?: JadwalTugasUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruProfileCreateOrConnectWithoutRfidInput = {
    where: GuruProfileWhereUniqueInput
    create: XOR<GuruProfileCreateWithoutRfidInput, GuruProfileUncheckedCreateWithoutRfidInput>
  }

  export type AbsensiCreateWithoutRfidInput = {
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
    murid?: MuridProfileCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutRfidInput = {
    id?: number
    muridId?: number | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type AbsensiCreateOrConnectWithoutRfidInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput>
  }

  export type AbsensiCreateManyRfidInputEnvelope = {
    data: AbsensiCreateManyRfidInput | AbsensiCreateManyRfidInput[]
    skipDuplicates?: boolean
  }

  export type MuridProfileUpsertWithoutRfidInput = {
    update: XOR<MuridProfileUpdateWithoutRfidInput, MuridProfileUncheckedUpdateWithoutRfidInput>
    create: XOR<MuridProfileCreateWithoutRfidInput, MuridProfileUncheckedCreateWithoutRfidInput>
    where?: MuridProfileWhereInput
  }

  export type MuridProfileUpdateToOneWithWhereWithoutRfidInput = {
    where?: MuridProfileWhereInput
    data: XOR<MuridProfileUpdateWithoutRfidInput, MuridProfileUncheckedUpdateWithoutRfidInput>
  }

  export type MuridProfileUpdateWithoutRfidInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: KelasUpdateOneWithoutMuridProfileNestedInput
    User?: UserUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateWithoutRfidInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUncheckedUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUncheckedUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type GuruProfileUpsertWithoutRfidInput = {
    update: XOR<GuruProfileUpdateWithoutRfidInput, GuruProfileUncheckedUpdateWithoutRfidInput>
    create: XOR<GuruProfileCreateWithoutRfidInput, GuruProfileUncheckedCreateWithoutRfidInput>
    where?: GuruProfileWhereInput
  }

  export type GuruProfileUpdateToOneWithWhereWithoutRfidInput = {
    where?: GuruProfileWhereInput
    data: XOR<GuruProfileUpdateWithoutRfidInput, GuruProfileUncheckedUpdateWithoutRfidInput>
  }

  export type GuruProfileUpdateWithoutRfidInput = {
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUpdateManyWithoutGuruNestedInput
  }

  export type GuruProfileUncheckedUpdateWithoutRfidInput = {
    id?: IntFieldUpdateOperationsInput | number
    nik?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noGuru?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateOneWithoutGuruProfileNestedInput
    Kelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
    JadwalTugas?: JadwalTugasUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type AbsensiUpsertWithWhereUniqueWithoutRfidInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutRfidInput, AbsensiUncheckedUpdateWithoutRfidInput>
    create: XOR<AbsensiCreateWithoutRfidInput, AbsensiUncheckedCreateWithoutRfidInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutRfidInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutRfidInput, AbsensiUncheckedUpdateWithoutRfidInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutRfidInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutRfidInput>
  }

  export type WaliMuridCreateManyMuridInput = {
    id?: number
    nameWaliMurid: string
    noWaliMurid: string
  }

  export type AbsensiCreateManyMuridInput = {
    id?: number
    rfidNumb?: string | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type WaliMuridUpdateWithoutMuridInput = {
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
  }

  export type WaliMuridUncheckedUpdateWithoutMuridInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
  }

  export type WaliMuridUncheckedUpdateManyWithoutMuridInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameWaliMurid?: StringFieldUpdateOperationsInput | string
    noWaliMurid?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiUpdateWithoutMuridInput = {
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: RfidUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutMuridInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsensiUncheckedUpdateManyWithoutMuridInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfidNumb?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalTugasCreateManyGuruInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    kelasId: number
    createdAt?: Date | string
  }

  export type JadwalTugasUpdateWithoutGuruInput = {
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutJadwalTugasNestedInput
  }

  export type JadwalTugasUncheckedUpdateWithoutGuruInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    kelasId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalTugasUncheckedUpdateManyWithoutGuruInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    kelasId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuridProfileCreateManyKelasInput = {
    id?: number
    nis: number
    name: string
    noMurid?: string | null
  }

  export type JadwalTugasCreateManyKelasInput = {
    id?: number
    title: string
    start: Date | string
    end?: Date | string | null
    description: string
    guruId: number
    createdAt?: Date | string
  }

  export type MuridProfileUpdateWithoutKelasInput = {
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: RfidUpdateOneWithoutMuridProfileNestedInput
    User?: UserUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: RfidUncheckedUpdateOneWithoutMuridProfileNestedInput
    User?: UserUncheckedUpdateOneWithoutMuridProfileNestedInput
    waliMurids?: WaliMuridUncheckedUpdateManyWithoutMuridNestedInput
    absensi?: AbsensiUncheckedUpdateManyWithoutMuridNestedInput
  }

  export type MuridProfileUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noMurid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalTugasUpdateWithoutKelasInput = {
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruProfileUpdateOneRequiredWithoutJadwalTugasNestedInput
  }

  export type JadwalTugasUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    guruId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalTugasUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    guruId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyRfidInput = {
    id?: number
    muridId?: number | null
    keterangan: $Enums.Keterangan
    tanggal?: Date | string | null
    jamHadir?: Date | string | null
    jamPulang?: Date | string | null
    catatan?: string | null
  }

  export type AbsensiUpdateWithoutRfidInput = {
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    murid?: MuridProfileUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutRfidInput = {
    id?: IntFieldUpdateOperationsInput | number
    muridId?: NullableIntFieldUpdateOperationsInput | number | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsensiUncheckedUpdateManyWithoutRfidInput = {
    id?: IntFieldUpdateOperationsInput | number
    muridId?: NullableIntFieldUpdateOperationsInput | number | null
    keterangan?: EnumKeteranganFieldUpdateOperationsInput | $Enums.Keterangan
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamHadir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }



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