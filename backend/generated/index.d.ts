
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Wall
 * 
 */
export type Wall = $Result.DefaultSelection<Prisma.$WallPayload>
/**
 * Model Library
 * 
 */
export type Library = $Result.DefaultSelection<Prisma.$LibraryPayload>
/**
 * Model Shelf
 * 
 */
export type Shelf = $Result.DefaultSelection<Prisma.$ShelfPayload>
/**
 * Model Volume
 * 
 */
export type Volume = $Result.DefaultSelection<Prisma.$VolumePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Walls
 * const walls = await prisma.wall.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Walls
   * const walls = await prisma.wall.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.wall`: Exposes CRUD operations for the **Wall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Walls
    * const walls = await prisma.wall.findMany()
    * ```
    */
  get wall(): Prisma.WallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.library`: Exposes CRUD operations for the **Library** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.library.findMany()
    * ```
    */
  get library(): Prisma.LibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelf`: Exposes CRUD operations for the **Shelf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelves
    * const shelves = await prisma.shelf.findMany()
    * ```
    */
  get shelf(): Prisma.ShelfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volume`: Exposes CRUD operations for the **Volume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volumes
    * const volumes = await prisma.volume.findMany()
    * ```
    */
  get volume(): Prisma.VolumeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Wall: 'Wall',
    Library: 'Library',
    Shelf: 'Shelf',
    Volume: 'Volume'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "wall" | "library" | "shelf" | "volume"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wall: {
        payload: Prisma.$WallPayload<ExtArgs>
        fields: Prisma.WallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          findFirst: {
            args: Prisma.WallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          findMany: {
            args: Prisma.WallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>[]
          }
          create: {
            args: Prisma.WallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          createMany: {
            args: Prisma.WallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>[]
          }
          delete: {
            args: Prisma.WallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          update: {
            args: Prisma.WallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          deleteMany: {
            args: Prisma.WallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>[]
          }
          upsert: {
            args: Prisma.WallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallPayload>
          }
          aggregate: {
            args: Prisma.WallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWall>
          }
          groupBy: {
            args: Prisma.WallGroupByArgs<ExtArgs>
            result: $Utils.Optional<WallGroupByOutputType>[]
          }
          count: {
            args: Prisma.WallCountArgs<ExtArgs>
            result: $Utils.Optional<WallCountAggregateOutputType> | number
          }
        }
      }
      Library: {
        payload: Prisma.$LibraryPayload<ExtArgs>
        fields: Prisma.LibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findFirst: {
            args: Prisma.LibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findMany: {
            args: Prisma.LibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          create: {
            args: Prisma.LibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          createMany: {
            args: Prisma.LibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          delete: {
            args: Prisma.LibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          update: {
            args: Prisma.LibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          upsert: {
            args: Prisma.LibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          aggregate: {
            args: Prisma.LibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrary>
          }
          groupBy: {
            args: Prisma.LibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryCountAggregateOutputType> | number
          }
        }
      }
      Shelf: {
        payload: Prisma.$ShelfPayload<ExtArgs>
        fields: Prisma.ShelfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          findFirst: {
            args: Prisma.ShelfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          findMany: {
            args: Prisma.ShelfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          create: {
            args: Prisma.ShelfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          createMany: {
            args: Prisma.ShelfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          delete: {
            args: Prisma.ShelfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          update: {
            args: Prisma.ShelfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          deleteMany: {
            args: Prisma.ShelfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          upsert: {
            args: Prisma.ShelfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          aggregate: {
            args: Prisma.ShelfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelf>
          }
          groupBy: {
            args: Prisma.ShelfGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelfGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelfCountArgs<ExtArgs>
            result: $Utils.Optional<ShelfCountAggregateOutputType> | number
          }
        }
      }
      Volume: {
        payload: Prisma.$VolumePayload<ExtArgs>
        fields: Prisma.VolumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          findFirst: {
            args: Prisma.VolumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          findMany: {
            args: Prisma.VolumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          create: {
            args: Prisma.VolumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          createMany: {
            args: Prisma.VolumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          delete: {
            args: Prisma.VolumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          update: {
            args: Prisma.VolumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          deleteMany: {
            args: Prisma.VolumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          upsert: {
            args: Prisma.VolumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          aggregate: {
            args: Prisma.VolumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolume>
          }
          groupBy: {
            args: Prisma.VolumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolumeCountArgs<ExtArgs>
            result: $Utils.Optional<VolumeCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    wall?: WallOmit
    library?: LibraryOmit
    shelf?: ShelfOmit
    volume?: VolumeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type WallCountOutputType
   */

  export type WallCountOutputType = {
    libraries: number
  }

  export type WallCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libraries?: boolean | WallCountOutputTypeCountLibrariesArgs
  }

  // Custom InputTypes
  /**
   * WallCountOutputType without action
   */
  export type WallCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallCountOutputType
     */
    select?: WallCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WallCountOutputType without action
   */
  export type WallCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
  }


  /**
   * Count Type LibraryCountOutputType
   */

  export type LibraryCountOutputType = {
    shelves: number
  }

  export type LibraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelves?: boolean | LibraryCountOutputTypeCountShelvesArgs
  }

  // Custom InputTypes
  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryCountOutputType
     */
    select?: LibraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountShelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelfWhereInput
  }


  /**
   * Count Type ShelfCountOutputType
   */

  export type ShelfCountOutputType = {
    volumes: number
  }

  export type ShelfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volumes?: boolean | ShelfCountOutputTypeCountVolumesArgs
  }

  // Custom InputTypes
  /**
   * ShelfCountOutputType without action
   */
  export type ShelfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelfCountOutputType
     */
    select?: ShelfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelfCountOutputType without action
   */
  export type ShelfCountOutputTypeCountVolumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolumeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Wall
   */

  export type AggregateWall = {
    _count: WallCountAggregateOutputType | null
    _avg: WallAvgAggregateOutputType | null
    _sum: WallSumAggregateOutputType | null
    _min: WallMinAggregateOutputType | null
    _max: WallMaxAggregateOutputType | null
  }

  export type WallAvgAggregateOutputType = {
    id: number | null
  }

  export type WallSumAggregateOutputType = {
    id: number | null
  }

  export type WallMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type WallMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type WallCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type WallAvgAggregateInputType = {
    id?: true
  }

  export type WallSumAggregateInputType = {
    id?: true
  }

  export type WallMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type WallMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type WallCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type WallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wall to aggregate.
     */
    where?: WallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Walls to fetch.
     */
    orderBy?: WallOrderByWithRelationInput | WallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Walls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Walls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Walls
    **/
    _count?: true | WallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WallMaxAggregateInputType
  }

  export type GetWallAggregateType<T extends WallAggregateArgs> = {
        [P in keyof T & keyof AggregateWall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWall[P]>
      : GetScalarType<T[P], AggregateWall[P]>
  }




  export type WallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallWhereInput
    orderBy?: WallOrderByWithAggregationInput | WallOrderByWithAggregationInput[]
    by: WallScalarFieldEnum[] | WallScalarFieldEnum
    having?: WallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WallCountAggregateInputType | true
    _avg?: WallAvgAggregateInputType
    _sum?: WallSumAggregateInputType
    _min?: WallMinAggregateInputType
    _max?: WallMaxAggregateInputType
  }

  export type WallGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: WallCountAggregateOutputType | null
    _avg: WallAvgAggregateOutputType | null
    _sum: WallSumAggregateOutputType | null
    _min: WallMinAggregateOutputType | null
    _max: WallMaxAggregateOutputType | null
  }

  type GetWallGroupByPayload<T extends WallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WallGroupByOutputType[P]>
            : GetScalarType<T[P], WallGroupByOutputType[P]>
        }
      >
    >


  export type WallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    libraries?: boolean | Wall$librariesArgs<ExtArgs>
    _count?: boolean | WallCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wall"]>

  export type WallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["wall"]>

  export type WallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["wall"]>

  export type WallSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type WallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["wall"]>
  export type WallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libraries?: boolean | Wall$librariesArgs<ExtArgs>
    _count?: boolean | WallCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wall"
    objects: {
      libraries: Prisma.$LibraryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["wall"]>
    composites: {}
  }

  type WallGetPayload<S extends boolean | null | undefined | WallDefaultArgs> = $Result.GetResult<Prisma.$WallPayload, S>

  type WallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WallCountAggregateInputType | true
    }

  export interface WallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wall'], meta: { name: 'Wall' } }
    /**
     * Find zero or one Wall that matches the filter.
     * @param {WallFindUniqueArgs} args - Arguments to find a Wall
     * @example
     * // Get one Wall
     * const wall = await prisma.wall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WallFindUniqueArgs>(args: SelectSubset<T, WallFindUniqueArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WallFindUniqueOrThrowArgs} args - Arguments to find a Wall
     * @example
     * // Get one Wall
     * const wall = await prisma.wall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WallFindUniqueOrThrowArgs>(args: SelectSubset<T, WallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallFindFirstArgs} args - Arguments to find a Wall
     * @example
     * // Get one Wall
     * const wall = await prisma.wall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WallFindFirstArgs>(args?: SelectSubset<T, WallFindFirstArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallFindFirstOrThrowArgs} args - Arguments to find a Wall
     * @example
     * // Get one Wall
     * const wall = await prisma.wall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WallFindFirstOrThrowArgs>(args?: SelectSubset<T, WallFindFirstOrThrowArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Walls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Walls
     * const walls = await prisma.wall.findMany()
     * 
     * // Get first 10 Walls
     * const walls = await prisma.wall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallWithIdOnly = await prisma.wall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WallFindManyArgs>(args?: SelectSubset<T, WallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wall.
     * @param {WallCreateArgs} args - Arguments to create a Wall.
     * @example
     * // Create one Wall
     * const Wall = await prisma.wall.create({
     *   data: {
     *     // ... data to create a Wall
     *   }
     * })
     * 
     */
    create<T extends WallCreateArgs>(args: SelectSubset<T, WallCreateArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Walls.
     * @param {WallCreateManyArgs} args - Arguments to create many Walls.
     * @example
     * // Create many Walls
     * const wall = await prisma.wall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WallCreateManyArgs>(args?: SelectSubset<T, WallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Walls and returns the data saved in the database.
     * @param {WallCreateManyAndReturnArgs} args - Arguments to create many Walls.
     * @example
     * // Create many Walls
     * const wall = await prisma.wall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Walls and only return the `id`
     * const wallWithIdOnly = await prisma.wall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WallCreateManyAndReturnArgs>(args?: SelectSubset<T, WallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wall.
     * @param {WallDeleteArgs} args - Arguments to delete one Wall.
     * @example
     * // Delete one Wall
     * const Wall = await prisma.wall.delete({
     *   where: {
     *     // ... filter to delete one Wall
     *   }
     * })
     * 
     */
    delete<T extends WallDeleteArgs>(args: SelectSubset<T, WallDeleteArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wall.
     * @param {WallUpdateArgs} args - Arguments to update one Wall.
     * @example
     * // Update one Wall
     * const wall = await prisma.wall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WallUpdateArgs>(args: SelectSubset<T, WallUpdateArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Walls.
     * @param {WallDeleteManyArgs} args - Arguments to filter Walls to delete.
     * @example
     * // Delete a few Walls
     * const { count } = await prisma.wall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WallDeleteManyArgs>(args?: SelectSubset<T, WallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Walls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Walls
     * const wall = await prisma.wall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WallUpdateManyArgs>(args: SelectSubset<T, WallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Walls and returns the data updated in the database.
     * @param {WallUpdateManyAndReturnArgs} args - Arguments to update many Walls.
     * @example
     * // Update many Walls
     * const wall = await prisma.wall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Walls and only return the `id`
     * const wallWithIdOnly = await prisma.wall.updateManyAndReturn({
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
    updateManyAndReturn<T extends WallUpdateManyAndReturnArgs>(args: SelectSubset<T, WallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wall.
     * @param {WallUpsertArgs} args - Arguments to update or create a Wall.
     * @example
     * // Update or create a Wall
     * const wall = await prisma.wall.upsert({
     *   create: {
     *     // ... data to create a Wall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wall we want to update
     *   }
     * })
     */
    upsert<T extends WallUpsertArgs>(args: SelectSubset<T, WallUpsertArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Walls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallCountArgs} args - Arguments to filter Walls to count.
     * @example
     * // Count the number of Walls
     * const count = await prisma.wall.count({
     *   where: {
     *     // ... the filter for the Walls we want to count
     *   }
     * })
    **/
    count<T extends WallCountArgs>(
      args?: Subset<T, WallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WallAggregateArgs>(args: Subset<T, WallAggregateArgs>): Prisma.PrismaPromise<GetWallAggregateType<T>>

    /**
     * Group by Wall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallGroupByArgs} args - Group by arguments.
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
      T extends WallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WallGroupByArgs['orderBy'] }
        : { orderBy?: WallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wall model
   */
  readonly fields: WallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libraries<T extends Wall$librariesArgs<ExtArgs> = {}>(args?: Subset<T, Wall$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wall model
   */
  interface WallFieldRefs {
    readonly id: FieldRef<"Wall", 'Int'>
    readonly name: FieldRef<"Wall", 'String'>
    readonly description: FieldRef<"Wall", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wall findUnique
   */
  export type WallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter, which Wall to fetch.
     */
    where: WallWhereUniqueInput
  }

  /**
   * Wall findUniqueOrThrow
   */
  export type WallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter, which Wall to fetch.
     */
    where: WallWhereUniqueInput
  }

  /**
   * Wall findFirst
   */
  export type WallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter, which Wall to fetch.
     */
    where?: WallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Walls to fetch.
     */
    orderBy?: WallOrderByWithRelationInput | WallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Walls.
     */
    cursor?: WallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Walls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Walls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Walls.
     */
    distinct?: WallScalarFieldEnum | WallScalarFieldEnum[]
  }

  /**
   * Wall findFirstOrThrow
   */
  export type WallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter, which Wall to fetch.
     */
    where?: WallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Walls to fetch.
     */
    orderBy?: WallOrderByWithRelationInput | WallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Walls.
     */
    cursor?: WallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Walls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Walls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Walls.
     */
    distinct?: WallScalarFieldEnum | WallScalarFieldEnum[]
  }

  /**
   * Wall findMany
   */
  export type WallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter, which Walls to fetch.
     */
    where?: WallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Walls to fetch.
     */
    orderBy?: WallOrderByWithRelationInput | WallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Walls.
     */
    cursor?: WallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Walls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Walls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Walls.
     */
    distinct?: WallScalarFieldEnum | WallScalarFieldEnum[]
  }

  /**
   * Wall create
   */
  export type WallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * The data needed to create a Wall.
     */
    data: XOR<WallCreateInput, WallUncheckedCreateInput>
  }

  /**
   * Wall createMany
   */
  export type WallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Walls.
     */
    data: WallCreateManyInput | WallCreateManyInput[]
  }

  /**
   * Wall createManyAndReturn
   */
  export type WallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * The data used to create many Walls.
     */
    data: WallCreateManyInput | WallCreateManyInput[]
  }

  /**
   * Wall update
   */
  export type WallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * The data needed to update a Wall.
     */
    data: XOR<WallUpdateInput, WallUncheckedUpdateInput>
    /**
     * Choose, which Wall to update.
     */
    where: WallWhereUniqueInput
  }

  /**
   * Wall updateMany
   */
  export type WallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Walls.
     */
    data: XOR<WallUpdateManyMutationInput, WallUncheckedUpdateManyInput>
    /**
     * Filter which Walls to update
     */
    where?: WallWhereInput
    /**
     * Limit how many Walls to update.
     */
    limit?: number
  }

  /**
   * Wall updateManyAndReturn
   */
  export type WallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * The data used to update Walls.
     */
    data: XOR<WallUpdateManyMutationInput, WallUncheckedUpdateManyInput>
    /**
     * Filter which Walls to update
     */
    where?: WallWhereInput
    /**
     * Limit how many Walls to update.
     */
    limit?: number
  }

  /**
   * Wall upsert
   */
  export type WallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * The filter to search for the Wall to update in case it exists.
     */
    where: WallWhereUniqueInput
    /**
     * In case the Wall found by the `where` argument doesn't exist, create a new Wall with this data.
     */
    create: XOR<WallCreateInput, WallUncheckedCreateInput>
    /**
     * In case the Wall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WallUpdateInput, WallUncheckedUpdateInput>
  }

  /**
   * Wall delete
   */
  export type WallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    /**
     * Filter which Wall to delete.
     */
    where: WallWhereUniqueInput
  }

  /**
   * Wall deleteMany
   */
  export type WallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Walls to delete
     */
    where?: WallWhereInput
    /**
     * Limit how many Walls to delete.
     */
    limit?: number
  }

  /**
   * Wall.libraries
   */
  export type Wall$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    cursor?: LibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Wall without action
   */
  export type WallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
  }


  /**
   * Model Library
   */

  export type AggregateLibrary = {
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  export type LibraryAvgAggregateOutputType = {
    id: number | null
    wallId: number | null
  }

  export type LibrarySumAggregateOutputType = {
    id: number | null
    wallId: number | null
  }

  export type LibraryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    wallId: number | null
  }

  export type LibraryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    wallId: number | null
  }

  export type LibraryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    wallId: number
    _all: number
  }


  export type LibraryAvgAggregateInputType = {
    id?: true
    wallId?: true
  }

  export type LibrarySumAggregateInputType = {
    id?: true
    wallId?: true
  }

  export type LibraryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    wallId?: true
  }

  export type LibraryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    wallId?: true
  }

  export type LibraryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    wallId?: true
    _all?: true
  }

  export type LibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Library to aggregate.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryMaxAggregateInputType
  }

  export type GetLibraryAggregateType<T extends LibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrary[P]>
      : GetScalarType<T[P], AggregateLibrary[P]>
  }




  export type LibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithAggregationInput | LibraryOrderByWithAggregationInput[]
    by: LibraryScalarFieldEnum[] | LibraryScalarFieldEnum
    having?: LibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryCountAggregateInputType | true
    _avg?: LibraryAvgAggregateInputType
    _sum?: LibrarySumAggregateInputType
    _min?: LibraryMinAggregateInputType
    _max?: LibraryMaxAggregateInputType
  }

  export type LibraryGroupByOutputType = {
    id: number
    name: string
    description: string
    wallId: number | null
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  type GetLibraryGroupByPayload<T extends LibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryGroupByOutputType[P]>
        }
      >
    >


  export type LibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    wallId?: boolean
    wall?: boolean | Library$wallArgs<ExtArgs>
    shelves?: boolean | Library$shelvesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    wallId?: boolean
    wall?: boolean | Library$wallArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    wallId?: boolean
    wall?: boolean | Library$wallArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    wallId?: boolean
  }

  export type LibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "wallId", ExtArgs["result"]["library"]>
  export type LibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wall?: boolean | Library$wallArgs<ExtArgs>
    shelves?: boolean | Library$shelvesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wall?: boolean | Library$wallArgs<ExtArgs>
  }
  export type LibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wall?: boolean | Library$wallArgs<ExtArgs>
  }

  export type $LibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Library"
    objects: {
      wall: Prisma.$WallPayload<ExtArgs> | null
      shelves: Prisma.$ShelfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      wallId: number | null
    }, ExtArgs["result"]["library"]>
    composites: {}
  }

  type LibraryGetPayload<S extends boolean | null | undefined | LibraryDefaultArgs> = $Result.GetResult<Prisma.$LibraryPayload, S>

  type LibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryCountAggregateInputType | true
    }

  export interface LibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Library'], meta: { name: 'Library' } }
    /**
     * Find zero or one Library that matches the filter.
     * @param {LibraryFindUniqueArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryFindUniqueArgs>(args: SelectSubset<T, LibraryFindUniqueArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Library that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryFindUniqueOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryFindFirstArgs>(args?: SelectSubset<T, LibraryFindFirstArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.library.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.library.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryWithIdOnly = await prisma.library.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryFindManyArgs>(args?: SelectSubset<T, LibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Library.
     * @param {LibraryCreateArgs} args - Arguments to create a Library.
     * @example
     * // Create one Library
     * const Library = await prisma.library.create({
     *   data: {
     *     // ... data to create a Library
     *   }
     * })
     * 
     */
    create<T extends LibraryCreateArgs>(args: SelectSubset<T, LibraryCreateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {LibraryCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryCreateManyArgs>(args?: SelectSubset<T, LibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {LibraryCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Library.
     * @param {LibraryDeleteArgs} args - Arguments to delete one Library.
     * @example
     * // Delete one Library
     * const Library = await prisma.library.delete({
     *   where: {
     *     // ... filter to delete one Library
     *   }
     * })
     * 
     */
    delete<T extends LibraryDeleteArgs>(args: SelectSubset<T, LibraryDeleteArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Library.
     * @param {LibraryUpdateArgs} args - Arguments to update one Library.
     * @example
     * // Update one Library
     * const library = await prisma.library.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryUpdateArgs>(args: SelectSubset<T, LibraryUpdateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {LibraryDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.library.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryDeleteManyArgs>(args?: SelectSubset<T, LibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryUpdateManyArgs>(args: SelectSubset<T, LibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {LibraryUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.updateManyAndReturn({
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
    updateManyAndReturn<T extends LibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Library.
     * @param {LibraryUpsertArgs} args - Arguments to update or create a Library.
     * @example
     * // Update or create a Library
     * const library = await prisma.library.upsert({
     *   create: {
     *     // ... data to create a Library
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Library we want to update
     *   }
     * })
     */
    upsert<T extends LibraryUpsertArgs>(args: SelectSubset<T, LibraryUpsertArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.library.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibraryCountArgs>(
      args?: Subset<T, LibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryAggregateArgs>(args: Subset<T, LibraryAggregateArgs>): Prisma.PrismaPromise<GetLibraryAggregateType<T>>

    /**
     * Group by Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryGroupByArgs} args - Group by arguments.
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
      T extends LibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Library model
   */
  readonly fields: LibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Library.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wall<T extends Library$wallArgs<ExtArgs> = {}>(args?: Subset<T, Library$wallArgs<ExtArgs>>): Prisma__WallClient<$Result.GetResult<Prisma.$WallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shelves<T extends Library$shelvesArgs<ExtArgs> = {}>(args?: Subset<T, Library$shelvesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Library model
   */
  interface LibraryFieldRefs {
    readonly id: FieldRef<"Library", 'Int'>
    readonly name: FieldRef<"Library", 'String'>
    readonly description: FieldRef<"Library", 'String'>
    readonly wallId: FieldRef<"Library", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Library findUnique
   */
  export type LibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findUniqueOrThrow
   */
  export type LibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findFirst
   */
  export type LibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findFirstOrThrow
   */
  export type LibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findMany
   */
  export type LibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library create
   */
  export type LibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Library.
     */
    data: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
  }

  /**
   * Library createMany
   */
  export type LibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
  }

  /**
   * Library createManyAndReturn
   */
  export type LibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library update
   */
  export type LibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Library.
     */
    data: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
    /**
     * Choose, which Library to update.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library updateMany
   */
  export type LibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Library updateManyAndReturn
   */
  export type LibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library upsert
   */
  export type LibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Library to update in case it exists.
     */
    where: LibraryWhereUniqueInput
    /**
     * In case the Library found by the `where` argument doesn't exist, create a new Library with this data.
     */
    create: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
    /**
     * In case the Library was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
  }

  /**
   * Library delete
   */
  export type LibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter which Library to delete.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library deleteMany
   */
  export type LibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to delete.
     */
    limit?: number
  }

  /**
   * Library.wall
   */
  export type Library$wallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wall
     */
    select?: WallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wall
     */
    omit?: WallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallInclude<ExtArgs> | null
    where?: WallWhereInput
  }

  /**
   * Library.shelves
   */
  export type Library$shelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    where?: ShelfWhereInput
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    cursor?: ShelfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Library without action
   */
  export type LibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
  }


  /**
   * Model Shelf
   */

  export type AggregateShelf = {
    _count: ShelfCountAggregateOutputType | null
    _avg: ShelfAvgAggregateOutputType | null
    _sum: ShelfSumAggregateOutputType | null
    _min: ShelfMinAggregateOutputType | null
    _max: ShelfMaxAggregateOutputType | null
  }

  export type ShelfAvgAggregateOutputType = {
    id: number | null
    libraryId: number | null
  }

  export type ShelfSumAggregateOutputType = {
    id: number | null
    libraryId: number | null
  }

  export type ShelfMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    libraryId: number | null
  }

  export type ShelfMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    libraryId: number | null
  }

  export type ShelfCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    libraryId: number
    _all: number
  }


  export type ShelfAvgAggregateInputType = {
    id?: true
    libraryId?: true
  }

  export type ShelfSumAggregateInputType = {
    id?: true
    libraryId?: true
  }

  export type ShelfMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    libraryId?: true
  }

  export type ShelfMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    libraryId?: true
  }

  export type ShelfCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    libraryId?: true
    _all?: true
  }

  export type ShelfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelf to aggregate.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shelves
    **/
    _count?: true | ShelfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShelfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShelfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelfMaxAggregateInputType
  }

  export type GetShelfAggregateType<T extends ShelfAggregateArgs> = {
        [P in keyof T & keyof AggregateShelf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelf[P]>
      : GetScalarType<T[P], AggregateShelf[P]>
  }




  export type ShelfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelfWhereInput
    orderBy?: ShelfOrderByWithAggregationInput | ShelfOrderByWithAggregationInput[]
    by: ShelfScalarFieldEnum[] | ShelfScalarFieldEnum
    having?: ShelfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelfCountAggregateInputType | true
    _avg?: ShelfAvgAggregateInputType
    _sum?: ShelfSumAggregateInputType
    _min?: ShelfMinAggregateInputType
    _max?: ShelfMaxAggregateInputType
  }

  export type ShelfGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    libraryId: number
    _count: ShelfCountAggregateOutputType | null
    _avg: ShelfAvgAggregateOutputType | null
    _sum: ShelfSumAggregateOutputType | null
    _min: ShelfMinAggregateOutputType | null
    _max: ShelfMaxAggregateOutputType | null
  }

  type GetShelfGroupByPayload<T extends ShelfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelfGroupByOutputType[P]>
            : GetScalarType<T[P], ShelfGroupByOutputType[P]>
        }
      >
    >


  export type ShelfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    volumes?: boolean | Shelf$volumesArgs<ExtArgs>
    _count?: boolean | ShelfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryId?: boolean
  }

  export type ShelfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "libraryId", ExtArgs["result"]["shelf"]>
  export type ShelfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    volumes?: boolean | Shelf$volumesArgs<ExtArgs>
    _count?: boolean | ShelfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShelfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type ShelfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $ShelfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shelf"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      volumes: Prisma.$VolumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      libraryId: number
    }, ExtArgs["result"]["shelf"]>
    composites: {}
  }

  type ShelfGetPayload<S extends boolean | null | undefined | ShelfDefaultArgs> = $Result.GetResult<Prisma.$ShelfPayload, S>

  type ShelfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelfCountAggregateInputType | true
    }

  export interface ShelfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shelf'], meta: { name: 'Shelf' } }
    /**
     * Find zero or one Shelf that matches the filter.
     * @param {ShelfFindUniqueArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelfFindUniqueArgs>(args: SelectSubset<T, ShelfFindUniqueArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelfFindUniqueOrThrowArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelfFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindFirstArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelfFindFirstArgs>(args?: SelectSubset<T, ShelfFindFirstArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindFirstOrThrowArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelfFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelfFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelves
     * const shelves = await prisma.shelf.findMany()
     * 
     * // Get first 10 Shelves
     * const shelves = await prisma.shelf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelfWithIdOnly = await prisma.shelf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelfFindManyArgs>(args?: SelectSubset<T, ShelfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelf.
     * @param {ShelfCreateArgs} args - Arguments to create a Shelf.
     * @example
     * // Create one Shelf
     * const Shelf = await prisma.shelf.create({
     *   data: {
     *     // ... data to create a Shelf
     *   }
     * })
     * 
     */
    create<T extends ShelfCreateArgs>(args: SelectSubset<T, ShelfCreateArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelves.
     * @param {ShelfCreateManyArgs} args - Arguments to create many Shelves.
     * @example
     * // Create many Shelves
     * const shelf = await prisma.shelf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelfCreateManyArgs>(args?: SelectSubset<T, ShelfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelves and returns the data saved in the database.
     * @param {ShelfCreateManyAndReturnArgs} args - Arguments to create many Shelves.
     * @example
     * // Create many Shelves
     * const shelf = await prisma.shelf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelves and only return the `id`
     * const shelfWithIdOnly = await prisma.shelf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelfCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelf.
     * @param {ShelfDeleteArgs} args - Arguments to delete one Shelf.
     * @example
     * // Delete one Shelf
     * const Shelf = await prisma.shelf.delete({
     *   where: {
     *     // ... filter to delete one Shelf
     *   }
     * })
     * 
     */
    delete<T extends ShelfDeleteArgs>(args: SelectSubset<T, ShelfDeleteArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelf.
     * @param {ShelfUpdateArgs} args - Arguments to update one Shelf.
     * @example
     * // Update one Shelf
     * const shelf = await prisma.shelf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelfUpdateArgs>(args: SelectSubset<T, ShelfUpdateArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelves.
     * @param {ShelfDeleteManyArgs} args - Arguments to filter Shelves to delete.
     * @example
     * // Delete a few Shelves
     * const { count } = await prisma.shelf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelfDeleteManyArgs>(args?: SelectSubset<T, ShelfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelves
     * const shelf = await prisma.shelf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelfUpdateManyArgs>(args: SelectSubset<T, ShelfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelves and returns the data updated in the database.
     * @param {ShelfUpdateManyAndReturnArgs} args - Arguments to update many Shelves.
     * @example
     * // Update many Shelves
     * const shelf = await prisma.shelf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelves and only return the `id`
     * const shelfWithIdOnly = await prisma.shelf.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShelfUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelf.
     * @param {ShelfUpsertArgs} args - Arguments to update or create a Shelf.
     * @example
     * // Update or create a Shelf
     * const shelf = await prisma.shelf.upsert({
     *   create: {
     *     // ... data to create a Shelf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelf we want to update
     *   }
     * })
     */
    upsert<T extends ShelfUpsertArgs>(args: SelectSubset<T, ShelfUpsertArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfCountArgs} args - Arguments to filter Shelves to count.
     * @example
     * // Count the number of Shelves
     * const count = await prisma.shelf.count({
     *   where: {
     *     // ... the filter for the Shelves we want to count
     *   }
     * })
    **/
    count<T extends ShelfCountArgs>(
      args?: Subset<T, ShelfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelfAggregateArgs>(args: Subset<T, ShelfAggregateArgs>): Prisma.PrismaPromise<GetShelfAggregateType<T>>

    /**
     * Group by Shelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfGroupByArgs} args - Group by arguments.
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
      T extends ShelfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelfGroupByArgs['orderBy'] }
        : { orderBy?: ShelfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShelfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shelf model
   */
  readonly fields: ShelfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shelf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volumes<T extends Shelf$volumesArgs<ExtArgs> = {}>(args?: Subset<T, Shelf$volumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shelf model
   */
  interface ShelfFieldRefs {
    readonly id: FieldRef<"Shelf", 'Int'>
    readonly name: FieldRef<"Shelf", 'String'>
    readonly description: FieldRef<"Shelf", 'String'>
    readonly createdAt: FieldRef<"Shelf", 'DateTime'>
    readonly updatedAt: FieldRef<"Shelf", 'DateTime'>
    readonly libraryId: FieldRef<"Shelf", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shelf findUnique
   */
  export type ShelfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf findUniqueOrThrow
   */
  export type ShelfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf findFirst
   */
  export type ShelfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelves.
     */
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf findFirstOrThrow
   */
  export type ShelfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelves.
     */
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf findMany
   */
  export type ShelfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelves to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelves.
     */
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf create
   */
  export type ShelfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The data needed to create a Shelf.
     */
    data: XOR<ShelfCreateInput, ShelfUncheckedCreateInput>
  }

  /**
   * Shelf createMany
   */
  export type ShelfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shelves.
     */
    data: ShelfCreateManyInput | ShelfCreateManyInput[]
  }

  /**
   * Shelf createManyAndReturn
   */
  export type ShelfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * The data used to create many Shelves.
     */
    data: ShelfCreateManyInput | ShelfCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelf update
   */
  export type ShelfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The data needed to update a Shelf.
     */
    data: XOR<ShelfUpdateInput, ShelfUncheckedUpdateInput>
    /**
     * Choose, which Shelf to update.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf updateMany
   */
  export type ShelfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shelves.
     */
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyInput>
    /**
     * Filter which Shelves to update
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to update.
     */
    limit?: number
  }

  /**
   * Shelf updateManyAndReturn
   */
  export type ShelfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * The data used to update Shelves.
     */
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyInput>
    /**
     * Filter which Shelves to update
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelf upsert
   */
  export type ShelfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The filter to search for the Shelf to update in case it exists.
     */
    where: ShelfWhereUniqueInput
    /**
     * In case the Shelf found by the `where` argument doesn't exist, create a new Shelf with this data.
     */
    create: XOR<ShelfCreateInput, ShelfUncheckedCreateInput>
    /**
     * In case the Shelf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelfUpdateInput, ShelfUncheckedUpdateInput>
  }

  /**
   * Shelf delete
   */
  export type ShelfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter which Shelf to delete.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf deleteMany
   */
  export type ShelfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelves to delete
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to delete.
     */
    limit?: number
  }

  /**
   * Shelf.volumes
   */
  export type Shelf$volumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    where?: VolumeWhereInput
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    cursor?: VolumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Shelf without action
   */
  export type ShelfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
  }


  /**
   * Model Volume
   */

  export type AggregateVolume = {
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  export type VolumeAvgAggregateOutputType = {
    id: number | null
    shelfId: number | null
  }

  export type VolumeSumAggregateOutputType = {
    id: number | null
    shelfId: number | null
  }

  export type VolumeMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    shelfId: number | null
  }

  export type VolumeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    shelfId: number | null
  }

  export type VolumeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    shelfId: number
    _all: number
  }


  export type VolumeAvgAggregateInputType = {
    id?: true
    shelfId?: true
  }

  export type VolumeSumAggregateInputType = {
    id?: true
    shelfId?: true
  }

  export type VolumeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    shelfId?: true
  }

  export type VolumeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    shelfId?: true
  }

  export type VolumeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    shelfId?: true
    _all?: true
  }

  export type VolumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volume to aggregate.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volumes
    **/
    _count?: true | VolumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolumeMaxAggregateInputType
  }

  export type GetVolumeAggregateType<T extends VolumeAggregateArgs> = {
        [P in keyof T & keyof AggregateVolume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolume[P]>
      : GetScalarType<T[P], AggregateVolume[P]>
  }




  export type VolumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolumeWhereInput
    orderBy?: VolumeOrderByWithAggregationInput | VolumeOrderByWithAggregationInput[]
    by: VolumeScalarFieldEnum[] | VolumeScalarFieldEnum
    having?: VolumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolumeCountAggregateInputType | true
    _avg?: VolumeAvgAggregateInputType
    _sum?: VolumeSumAggregateInputType
    _min?: VolumeMinAggregateInputType
    _max?: VolumeMaxAggregateInputType
  }

  export type VolumeGroupByOutputType = {
    id: number
    title: string
    content: string
    shelfId: number
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  type GetVolumeGroupByPayload<T extends VolumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolumeGroupByOutputType[P]>
            : GetScalarType<T[P], VolumeGroupByOutputType[P]>
        }
      >
    >


  export type VolumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    shelfId?: boolean
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    shelfId?: boolean
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    shelfId?: boolean
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    shelfId?: boolean
  }

  export type VolumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "shelfId", ExtArgs["result"]["volume"]>
  export type VolumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }
  export type VolumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }
  export type VolumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }

  export type $VolumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volume"
    objects: {
      shelf: Prisma.$ShelfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      shelfId: number
    }, ExtArgs["result"]["volume"]>
    composites: {}
  }

  type VolumeGetPayload<S extends boolean | null | undefined | VolumeDefaultArgs> = $Result.GetResult<Prisma.$VolumePayload, S>

  type VolumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolumeCountAggregateInputType | true
    }

  export interface VolumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volume'], meta: { name: 'Volume' } }
    /**
     * Find zero or one Volume that matches the filter.
     * @param {VolumeFindUniqueArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolumeFindUniqueArgs>(args: SelectSubset<T, VolumeFindUniqueArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolumeFindUniqueOrThrowArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolumeFindUniqueOrThrowArgs>(args: SelectSubset<T, VolumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindFirstArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolumeFindFirstArgs>(args?: SelectSubset<T, VolumeFindFirstArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindFirstOrThrowArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolumeFindFirstOrThrowArgs>(args?: SelectSubset<T, VolumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volumes
     * const volumes = await prisma.volume.findMany()
     * 
     * // Get first 10 Volumes
     * const volumes = await prisma.volume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volumeWithIdOnly = await prisma.volume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolumeFindManyArgs>(args?: SelectSubset<T, VolumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volume.
     * @param {VolumeCreateArgs} args - Arguments to create a Volume.
     * @example
     * // Create one Volume
     * const Volume = await prisma.volume.create({
     *   data: {
     *     // ... data to create a Volume
     *   }
     * })
     * 
     */
    create<T extends VolumeCreateArgs>(args: SelectSubset<T, VolumeCreateArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volumes.
     * @param {VolumeCreateManyArgs} args - Arguments to create many Volumes.
     * @example
     * // Create many Volumes
     * const volume = await prisma.volume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolumeCreateManyArgs>(args?: SelectSubset<T, VolumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volumes and returns the data saved in the database.
     * @param {VolumeCreateManyAndReturnArgs} args - Arguments to create many Volumes.
     * @example
     * // Create many Volumes
     * const volume = await prisma.volume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volumes and only return the `id`
     * const volumeWithIdOnly = await prisma.volume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolumeCreateManyAndReturnArgs>(args?: SelectSubset<T, VolumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volume.
     * @param {VolumeDeleteArgs} args - Arguments to delete one Volume.
     * @example
     * // Delete one Volume
     * const Volume = await prisma.volume.delete({
     *   where: {
     *     // ... filter to delete one Volume
     *   }
     * })
     * 
     */
    delete<T extends VolumeDeleteArgs>(args: SelectSubset<T, VolumeDeleteArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volume.
     * @param {VolumeUpdateArgs} args - Arguments to update one Volume.
     * @example
     * // Update one Volume
     * const volume = await prisma.volume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolumeUpdateArgs>(args: SelectSubset<T, VolumeUpdateArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volumes.
     * @param {VolumeDeleteManyArgs} args - Arguments to filter Volumes to delete.
     * @example
     * // Delete a few Volumes
     * const { count } = await prisma.volume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolumeDeleteManyArgs>(args?: SelectSubset<T, VolumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volumes
     * const volume = await prisma.volume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolumeUpdateManyArgs>(args: SelectSubset<T, VolumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volumes and returns the data updated in the database.
     * @param {VolumeUpdateManyAndReturnArgs} args - Arguments to update many Volumes.
     * @example
     * // Update many Volumes
     * const volume = await prisma.volume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volumes and only return the `id`
     * const volumeWithIdOnly = await prisma.volume.updateManyAndReturn({
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
    updateManyAndReturn<T extends VolumeUpdateManyAndReturnArgs>(args: SelectSubset<T, VolumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volume.
     * @param {VolumeUpsertArgs} args - Arguments to update or create a Volume.
     * @example
     * // Update or create a Volume
     * const volume = await prisma.volume.upsert({
     *   create: {
     *     // ... data to create a Volume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volume we want to update
     *   }
     * })
     */
    upsert<T extends VolumeUpsertArgs>(args: SelectSubset<T, VolumeUpsertArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeCountArgs} args - Arguments to filter Volumes to count.
     * @example
     * // Count the number of Volumes
     * const count = await prisma.volume.count({
     *   where: {
     *     // ... the filter for the Volumes we want to count
     *   }
     * })
    **/
    count<T extends VolumeCountArgs>(
      args?: Subset<T, VolumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolumeAggregateArgs>(args: Subset<T, VolumeAggregateArgs>): Prisma.PrismaPromise<GetVolumeAggregateType<T>>

    /**
     * Group by Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeGroupByArgs} args - Group by arguments.
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
      T extends VolumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolumeGroupByArgs['orderBy'] }
        : { orderBy?: VolumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volume model
   */
  readonly fields: VolumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelf<T extends ShelfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelfDefaultArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Volume model
   */
  interface VolumeFieldRefs {
    readonly id: FieldRef<"Volume", 'Int'>
    readonly title: FieldRef<"Volume", 'String'>
    readonly content: FieldRef<"Volume", 'String'>
    readonly shelfId: FieldRef<"Volume", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Volume findUnique
   */
  export type VolumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume findUniqueOrThrow
   */
  export type VolumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume findFirst
   */
  export type VolumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     */
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume findFirstOrThrow
   */
  export type VolumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     */
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume findMany
   */
  export type VolumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volumes to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     */
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume create
   */
  export type VolumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Volume.
     */
    data: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
  }

  /**
   * Volume createMany
   */
  export type VolumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volumes.
     */
    data: VolumeCreateManyInput | VolumeCreateManyInput[]
  }

  /**
   * Volume createManyAndReturn
   */
  export type VolumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * The data used to create many Volumes.
     */
    data: VolumeCreateManyInput | VolumeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volume update
   */
  export type VolumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Volume.
     */
    data: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
    /**
     * Choose, which Volume to update.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume updateMany
   */
  export type VolumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volumes.
     */
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyInput>
    /**
     * Filter which Volumes to update
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to update.
     */
    limit?: number
  }

  /**
   * Volume updateManyAndReturn
   */
  export type VolumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * The data used to update Volumes.
     */
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyInput>
    /**
     * Filter which Volumes to update
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volume upsert
   */
  export type VolumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Volume to update in case it exists.
     */
    where: VolumeWhereUniqueInput
    /**
     * In case the Volume found by the `where` argument doesn't exist, create a new Volume with this data.
     */
    create: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
    /**
     * In case the Volume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
  }

  /**
   * Volume delete
   */
  export type VolumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter which Volume to delete.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume deleteMany
   */
  export type VolumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volumes to delete
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to delete.
     */
    limit?: number
  }

  /**
   * Volume without action
   */
  export type VolumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WallScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type WallScalarFieldEnum = (typeof WallScalarFieldEnum)[keyof typeof WallScalarFieldEnum]


  export const LibraryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    wallId: 'wallId'
  };

  export type LibraryScalarFieldEnum = (typeof LibraryScalarFieldEnum)[keyof typeof LibraryScalarFieldEnum]


  export const ShelfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    libraryId: 'libraryId'
  };

  export type ShelfScalarFieldEnum = (typeof ShelfScalarFieldEnum)[keyof typeof ShelfScalarFieldEnum]


  export const VolumeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    shelfId: 'shelfId'
  };

  export type VolumeScalarFieldEnum = (typeof VolumeScalarFieldEnum)[keyof typeof VolumeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WallWhereInput = {
    AND?: WallWhereInput | WallWhereInput[]
    OR?: WallWhereInput[]
    NOT?: WallWhereInput | WallWhereInput[]
    id?: IntFilter<"Wall"> | number
    name?: StringFilter<"Wall"> | string
    description?: StringFilter<"Wall"> | string
    libraries?: LibraryListRelationFilter
  }

  export type WallOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    libraries?: LibraryOrderByRelationAggregateInput
  }

  export type WallWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WallWhereInput | WallWhereInput[]
    OR?: WallWhereInput[]
    NOT?: WallWhereInput | WallWhereInput[]
    name?: StringFilter<"Wall"> | string
    description?: StringFilter<"Wall"> | string
    libraries?: LibraryListRelationFilter
  }, "id">

  export type WallOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: WallCountOrderByAggregateInput
    _avg?: WallAvgOrderByAggregateInput
    _max?: WallMaxOrderByAggregateInput
    _min?: WallMinOrderByAggregateInput
    _sum?: WallSumOrderByAggregateInput
  }

  export type WallScalarWhereWithAggregatesInput = {
    AND?: WallScalarWhereWithAggregatesInput | WallScalarWhereWithAggregatesInput[]
    OR?: WallScalarWhereWithAggregatesInput[]
    NOT?: WallScalarWhereWithAggregatesInput | WallScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wall"> | number
    name?: StringWithAggregatesFilter<"Wall"> | string
    description?: StringWithAggregatesFilter<"Wall"> | string
  }

  export type LibraryWhereInput = {
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    id?: IntFilter<"Library"> | number
    name?: StringFilter<"Library"> | string
    description?: StringFilter<"Library"> | string
    wallId?: IntNullableFilter<"Library"> | number | null
    wall?: XOR<WallNullableScalarRelationFilter, WallWhereInput> | null
    shelves?: ShelfListRelationFilter
  }

  export type LibraryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    wallId?: SortOrderInput | SortOrder
    wall?: WallOrderByWithRelationInput
    shelves?: ShelfOrderByRelationAggregateInput
  }

  export type LibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    name?: StringFilter<"Library"> | string
    description?: StringFilter<"Library"> | string
    wallId?: IntNullableFilter<"Library"> | number | null
    wall?: XOR<WallNullableScalarRelationFilter, WallWhereInput> | null
    shelves?: ShelfListRelationFilter
  }, "id">

  export type LibraryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    wallId?: SortOrderInput | SortOrder
    _count?: LibraryCountOrderByAggregateInput
    _avg?: LibraryAvgOrderByAggregateInput
    _max?: LibraryMaxOrderByAggregateInput
    _min?: LibraryMinOrderByAggregateInput
    _sum?: LibrarySumOrderByAggregateInput
  }

  export type LibraryScalarWhereWithAggregatesInput = {
    AND?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    OR?: LibraryScalarWhereWithAggregatesInput[]
    NOT?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Library"> | number
    name?: StringWithAggregatesFilter<"Library"> | string
    description?: StringWithAggregatesFilter<"Library"> | string
    wallId?: IntNullableWithAggregatesFilter<"Library"> | number | null
  }

  export type ShelfWhereInput = {
    AND?: ShelfWhereInput | ShelfWhereInput[]
    OR?: ShelfWhereInput[]
    NOT?: ShelfWhereInput | ShelfWhereInput[]
    id?: IntFilter<"Shelf"> | number
    name?: StringFilter<"Shelf"> | string
    description?: StringFilter<"Shelf"> | string
    createdAt?: DateTimeFilter<"Shelf"> | Date | string
    updatedAt?: DateTimeFilter<"Shelf"> | Date | string
    libraryId?: IntFilter<"Shelf"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    volumes?: VolumeListRelationFilter
  }

  export type ShelfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryId?: SortOrder
    library?: LibraryOrderByWithRelationInput
    volumes?: VolumeOrderByRelationAggregateInput
  }

  export type ShelfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShelfWhereInput | ShelfWhereInput[]
    OR?: ShelfWhereInput[]
    NOT?: ShelfWhereInput | ShelfWhereInput[]
    name?: StringFilter<"Shelf"> | string
    description?: StringFilter<"Shelf"> | string
    createdAt?: DateTimeFilter<"Shelf"> | Date | string
    updatedAt?: DateTimeFilter<"Shelf"> | Date | string
    libraryId?: IntFilter<"Shelf"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    volumes?: VolumeListRelationFilter
  }, "id">

  export type ShelfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryId?: SortOrder
    _count?: ShelfCountOrderByAggregateInput
    _avg?: ShelfAvgOrderByAggregateInput
    _max?: ShelfMaxOrderByAggregateInput
    _min?: ShelfMinOrderByAggregateInput
    _sum?: ShelfSumOrderByAggregateInput
  }

  export type ShelfScalarWhereWithAggregatesInput = {
    AND?: ShelfScalarWhereWithAggregatesInput | ShelfScalarWhereWithAggregatesInput[]
    OR?: ShelfScalarWhereWithAggregatesInput[]
    NOT?: ShelfScalarWhereWithAggregatesInput | ShelfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shelf"> | number
    name?: StringWithAggregatesFilter<"Shelf"> | string
    description?: StringWithAggregatesFilter<"Shelf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shelf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shelf"> | Date | string
    libraryId?: IntWithAggregatesFilter<"Shelf"> | number
  }

  export type VolumeWhereInput = {
    AND?: VolumeWhereInput | VolumeWhereInput[]
    OR?: VolumeWhereInput[]
    NOT?: VolumeWhereInput | VolumeWhereInput[]
    id?: IntFilter<"Volume"> | number
    title?: StringFilter<"Volume"> | string
    content?: StringFilter<"Volume"> | string
    shelfId?: IntFilter<"Volume"> | number
    shelf?: XOR<ShelfScalarRelationFilter, ShelfWhereInput>
  }

  export type VolumeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    shelfId?: SortOrder
    shelf?: ShelfOrderByWithRelationInput
  }

  export type VolumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VolumeWhereInput | VolumeWhereInput[]
    OR?: VolumeWhereInput[]
    NOT?: VolumeWhereInput | VolumeWhereInput[]
    title?: StringFilter<"Volume"> | string
    content?: StringFilter<"Volume"> | string
    shelfId?: IntFilter<"Volume"> | number
    shelf?: XOR<ShelfScalarRelationFilter, ShelfWhereInput>
  }, "id">

  export type VolumeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    shelfId?: SortOrder
    _count?: VolumeCountOrderByAggregateInput
    _avg?: VolumeAvgOrderByAggregateInput
    _max?: VolumeMaxOrderByAggregateInput
    _min?: VolumeMinOrderByAggregateInput
    _sum?: VolumeSumOrderByAggregateInput
  }

  export type VolumeScalarWhereWithAggregatesInput = {
    AND?: VolumeScalarWhereWithAggregatesInput | VolumeScalarWhereWithAggregatesInput[]
    OR?: VolumeScalarWhereWithAggregatesInput[]
    NOT?: VolumeScalarWhereWithAggregatesInput | VolumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Volume"> | number
    title?: StringWithAggregatesFilter<"Volume"> | string
    content?: StringWithAggregatesFilter<"Volume"> | string
    shelfId?: IntWithAggregatesFilter<"Volume"> | number
  }

  export type WallCreateInput = {
    name: string
    description: string
    libraries?: LibraryCreateNestedManyWithoutWallInput
  }

  export type WallUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    libraries?: LibraryUncheckedCreateNestedManyWithoutWallInput
  }

  export type WallUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    libraries?: LibraryUpdateManyWithoutWallNestedInput
  }

  export type WallUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    libraries?: LibraryUncheckedUpdateManyWithoutWallNestedInput
  }

  export type WallCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type WallUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WallUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryCreateInput = {
    name: string
    description: string
    wall?: WallCreateNestedOneWithoutLibrariesInput
    shelves?: ShelfCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    wallId?: number | null
    shelves?: ShelfUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    wall?: WallUpdateOneWithoutLibrariesNestedInput
    shelves?: ShelfUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    wallId?: NullableIntFieldUpdateOperationsInput | number | null
    shelves?: ShelfUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyInput = {
    id?: number
    name: string
    description: string
    wallId?: number | null
  }

  export type LibraryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    wallId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShelfCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    library: LibraryCreateNestedOneWithoutShelvesInput
    volumes?: VolumeCreateNestedManyWithoutShelfInput
  }

  export type ShelfUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    libraryId: number
    volumes?: VolumeUncheckedCreateNestedManyWithoutShelfInput
  }

  export type ShelfUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutShelvesNestedInput
    volumes?: VolumeUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryId?: IntFieldUpdateOperationsInput | number
    volumes?: VolumeUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type ShelfCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    libraryId: number
  }

  export type ShelfUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryId?: IntFieldUpdateOperationsInput | number
  }

  export type VolumeCreateInput = {
    title: string
    content?: string
    shelf: ShelfCreateNestedOneWithoutVolumesInput
  }

  export type VolumeUncheckedCreateInput = {
    id?: number
    title: string
    content?: string
    shelfId: number
  }

  export type VolumeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    shelf?: ShelfUpdateOneRequiredWithoutVolumesNestedInput
  }

  export type VolumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    shelfId?: IntFieldUpdateOperationsInput | number
  }

  export type VolumeCreateManyInput = {
    id?: number
    title: string
    content?: string
    shelfId: number
  }

  export type VolumeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type VolumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    shelfId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LibraryListRelationFilter = {
    every?: LibraryWhereInput
    some?: LibraryWhereInput
    none?: LibraryWhereInput
  }

  export type LibraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WallCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WallAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WallMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WallMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WallSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WallNullableScalarRelationFilter = {
    is?: WallWhereInput | null
    isNot?: WallWhereInput | null
  }

  export type ShelfListRelationFilter = {
    every?: ShelfWhereInput
    some?: ShelfWhereInput
    none?: ShelfWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShelfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    wallId?: SortOrder
  }

  export type LibraryAvgOrderByAggregateInput = {
    id?: SortOrder
    wallId?: SortOrder
  }

  export type LibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    wallId?: SortOrder
  }

  export type LibraryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    wallId?: SortOrder
  }

  export type LibrarySumOrderByAggregateInput = {
    id?: SortOrder
    wallId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LibraryScalarRelationFilter = {
    is?: LibraryWhereInput
    isNot?: LibraryWhereInput
  }

  export type VolumeListRelationFilter = {
    every?: VolumeWhereInput
    some?: VolumeWhereInput
    none?: VolumeWhereInput
  }

  export type VolumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShelfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfAvgOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfSumOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShelfScalarRelationFilter = {
    is?: ShelfWhereInput
    isNot?: ShelfWhereInput
  }

  export type VolumeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    shelfId?: SortOrder
  }

  export type VolumeAvgOrderByAggregateInput = {
    id?: SortOrder
    shelfId?: SortOrder
  }

  export type VolumeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    shelfId?: SortOrder
  }

  export type VolumeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    shelfId?: SortOrder
  }

  export type VolumeSumOrderByAggregateInput = {
    id?: SortOrder
    shelfId?: SortOrder
  }

  export type LibraryCreateNestedManyWithoutWallInput = {
    create?: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput> | LibraryCreateWithoutWallInput[] | LibraryUncheckedCreateWithoutWallInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutWallInput | LibraryCreateOrConnectWithoutWallInput[]
    createMany?: LibraryCreateManyWallInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type LibraryUncheckedCreateNestedManyWithoutWallInput = {
    create?: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput> | LibraryCreateWithoutWallInput[] | LibraryUncheckedCreateWithoutWallInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutWallInput | LibraryCreateOrConnectWithoutWallInput[]
    createMany?: LibraryCreateManyWallInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LibraryUpdateManyWithoutWallNestedInput = {
    create?: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput> | LibraryCreateWithoutWallInput[] | LibraryUncheckedCreateWithoutWallInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutWallInput | LibraryCreateOrConnectWithoutWallInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutWallInput | LibraryUpsertWithWhereUniqueWithoutWallInput[]
    createMany?: LibraryCreateManyWallInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutWallInput | LibraryUpdateWithWhereUniqueWithoutWallInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutWallInput | LibraryUpdateManyWithWhereWithoutWallInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibraryUncheckedUpdateManyWithoutWallNestedInput = {
    create?: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput> | LibraryCreateWithoutWallInput[] | LibraryUncheckedCreateWithoutWallInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutWallInput | LibraryCreateOrConnectWithoutWallInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutWallInput | LibraryUpsertWithWhereUniqueWithoutWallInput[]
    createMany?: LibraryCreateManyWallInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutWallInput | LibraryUpdateWithWhereUniqueWithoutWallInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutWallInput | LibraryUpdateManyWithWhereWithoutWallInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type WallCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<WallCreateWithoutLibrariesInput, WallUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: WallCreateOrConnectWithoutLibrariesInput
    connect?: WallWhereUniqueInput
  }

  export type ShelfCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
  }

  export type ShelfUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
  }

  export type WallUpdateOneWithoutLibrariesNestedInput = {
    create?: XOR<WallCreateWithoutLibrariesInput, WallUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: WallCreateOrConnectWithoutLibrariesInput
    upsert?: WallUpsertWithoutLibrariesInput
    disconnect?: WallWhereInput | boolean
    delete?: WallWhereInput | boolean
    connect?: WallWhereUniqueInput
    update?: XOR<XOR<WallUpdateToOneWithWhereWithoutLibrariesInput, WallUpdateWithoutLibrariesInput>, WallUncheckedUpdateWithoutLibrariesInput>
  }

  export type ShelfUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    upsert?: ShelfUpsertWithWhereUniqueWithoutLibraryInput | ShelfUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    set?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    disconnect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    delete?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    update?: ShelfUpdateWithWhereUniqueWithoutLibraryInput | ShelfUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShelfUpdateManyWithWhereWithoutLibraryInput | ShelfUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShelfUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    upsert?: ShelfUpsertWithWhereUniqueWithoutLibraryInput | ShelfUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    set?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    disconnect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    delete?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    update?: ShelfUpdateWithWhereUniqueWithoutLibraryInput | ShelfUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShelfUpdateManyWithWhereWithoutLibraryInput | ShelfUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
  }

  export type LibraryCreateNestedOneWithoutShelvesInput = {
    create?: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShelvesInput
    connect?: LibraryWhereUniqueInput
  }

  export type VolumeCreateNestedManyWithoutShelfInput = {
    create?: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput> | VolumeCreateWithoutShelfInput[] | VolumeUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: VolumeCreateOrConnectWithoutShelfInput | VolumeCreateOrConnectWithoutShelfInput[]
    createMany?: VolumeCreateManyShelfInputEnvelope
    connect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
  }

  export type VolumeUncheckedCreateNestedManyWithoutShelfInput = {
    create?: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput> | VolumeCreateWithoutShelfInput[] | VolumeUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: VolumeCreateOrConnectWithoutShelfInput | VolumeCreateOrConnectWithoutShelfInput[]
    createMany?: VolumeCreateManyShelfInputEnvelope
    connect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LibraryUpdateOneRequiredWithoutShelvesNestedInput = {
    create?: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShelvesInput
    upsert?: LibraryUpsertWithoutShelvesInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutShelvesInput, LibraryUpdateWithoutShelvesInput>, LibraryUncheckedUpdateWithoutShelvesInput>
  }

  export type VolumeUpdateManyWithoutShelfNestedInput = {
    create?: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput> | VolumeCreateWithoutShelfInput[] | VolumeUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: VolumeCreateOrConnectWithoutShelfInput | VolumeCreateOrConnectWithoutShelfInput[]
    upsert?: VolumeUpsertWithWhereUniqueWithoutShelfInput | VolumeUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: VolumeCreateManyShelfInputEnvelope
    set?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    disconnect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    delete?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    connect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    update?: VolumeUpdateWithWhereUniqueWithoutShelfInput | VolumeUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: VolumeUpdateManyWithWhereWithoutShelfInput | VolumeUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: VolumeScalarWhereInput | VolumeScalarWhereInput[]
  }

  export type VolumeUncheckedUpdateManyWithoutShelfNestedInput = {
    create?: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput> | VolumeCreateWithoutShelfInput[] | VolumeUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: VolumeCreateOrConnectWithoutShelfInput | VolumeCreateOrConnectWithoutShelfInput[]
    upsert?: VolumeUpsertWithWhereUniqueWithoutShelfInput | VolumeUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: VolumeCreateManyShelfInputEnvelope
    set?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    disconnect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    delete?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    connect?: VolumeWhereUniqueInput | VolumeWhereUniqueInput[]
    update?: VolumeUpdateWithWhereUniqueWithoutShelfInput | VolumeUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: VolumeUpdateManyWithWhereWithoutShelfInput | VolumeUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: VolumeScalarWhereInput | VolumeScalarWhereInput[]
  }

  export type ShelfCreateNestedOneWithoutVolumesInput = {
    create?: XOR<ShelfCreateWithoutVolumesInput, ShelfUncheckedCreateWithoutVolumesInput>
    connectOrCreate?: ShelfCreateOrConnectWithoutVolumesInput
    connect?: ShelfWhereUniqueInput
  }

  export type ShelfUpdateOneRequiredWithoutVolumesNestedInput = {
    create?: XOR<ShelfCreateWithoutVolumesInput, ShelfUncheckedCreateWithoutVolumesInput>
    connectOrCreate?: ShelfCreateOrConnectWithoutVolumesInput
    upsert?: ShelfUpsertWithoutVolumesInput
    connect?: ShelfWhereUniqueInput
    update?: XOR<XOR<ShelfUpdateToOneWithWhereWithoutVolumesInput, ShelfUpdateWithoutVolumesInput>, ShelfUncheckedUpdateWithoutVolumesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LibraryCreateWithoutWallInput = {
    name: string
    description: string
    shelves?: ShelfCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutWallInput = {
    id?: number
    name: string
    description: string
    shelves?: ShelfUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutWallInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput>
  }

  export type LibraryCreateManyWallInputEnvelope = {
    data: LibraryCreateManyWallInput | LibraryCreateManyWallInput[]
  }

  export type LibraryUpsertWithWhereUniqueWithoutWallInput = {
    where: LibraryWhereUniqueInput
    update: XOR<LibraryUpdateWithoutWallInput, LibraryUncheckedUpdateWithoutWallInput>
    create: XOR<LibraryCreateWithoutWallInput, LibraryUncheckedCreateWithoutWallInput>
  }

  export type LibraryUpdateWithWhereUniqueWithoutWallInput = {
    where: LibraryWhereUniqueInput
    data: XOR<LibraryUpdateWithoutWallInput, LibraryUncheckedUpdateWithoutWallInput>
  }

  export type LibraryUpdateManyWithWhereWithoutWallInput = {
    where: LibraryScalarWhereInput
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyWithoutWallInput>
  }

  export type LibraryScalarWhereInput = {
    AND?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    OR?: LibraryScalarWhereInput[]
    NOT?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    id?: IntFilter<"Library"> | number
    name?: StringFilter<"Library"> | string
    description?: StringFilter<"Library"> | string
    wallId?: IntNullableFilter<"Library"> | number | null
  }

  export type WallCreateWithoutLibrariesInput = {
    name: string
    description: string
  }

  export type WallUncheckedCreateWithoutLibrariesInput = {
    id?: number
    name: string
    description: string
  }

  export type WallCreateOrConnectWithoutLibrariesInput = {
    where: WallWhereUniqueInput
    create: XOR<WallCreateWithoutLibrariesInput, WallUncheckedCreateWithoutLibrariesInput>
  }

  export type ShelfCreateWithoutLibraryInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    volumes?: VolumeCreateNestedManyWithoutShelfInput
  }

  export type ShelfUncheckedCreateWithoutLibraryInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    volumes?: VolumeUncheckedCreateNestedManyWithoutShelfInput
  }

  export type ShelfCreateOrConnectWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    create: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput>
  }

  export type ShelfCreateManyLibraryInputEnvelope = {
    data: ShelfCreateManyLibraryInput | ShelfCreateManyLibraryInput[]
  }

  export type WallUpsertWithoutLibrariesInput = {
    update: XOR<WallUpdateWithoutLibrariesInput, WallUncheckedUpdateWithoutLibrariesInput>
    create: XOR<WallCreateWithoutLibrariesInput, WallUncheckedCreateWithoutLibrariesInput>
    where?: WallWhereInput
  }

  export type WallUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: WallWhereInput
    data: XOR<WallUpdateWithoutLibrariesInput, WallUncheckedUpdateWithoutLibrariesInput>
  }

  export type WallUpdateWithoutLibrariesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WallUncheckedUpdateWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShelfUpsertWithWhereUniqueWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    update: XOR<ShelfUpdateWithoutLibraryInput, ShelfUncheckedUpdateWithoutLibraryInput>
    create: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput>
  }

  export type ShelfUpdateWithWhereUniqueWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    data: XOR<ShelfUpdateWithoutLibraryInput, ShelfUncheckedUpdateWithoutLibraryInput>
  }

  export type ShelfUpdateManyWithWhereWithoutLibraryInput = {
    where: ShelfScalarWhereInput
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyWithoutLibraryInput>
  }

  export type ShelfScalarWhereInput = {
    AND?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
    OR?: ShelfScalarWhereInput[]
    NOT?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
    id?: IntFilter<"Shelf"> | number
    name?: StringFilter<"Shelf"> | string
    description?: StringFilter<"Shelf"> | string
    createdAt?: DateTimeFilter<"Shelf"> | Date | string
    updatedAt?: DateTimeFilter<"Shelf"> | Date | string
    libraryId?: IntFilter<"Shelf"> | number
  }

  export type LibraryCreateWithoutShelvesInput = {
    name: string
    description: string
    wall?: WallCreateNestedOneWithoutLibrariesInput
  }

  export type LibraryUncheckedCreateWithoutShelvesInput = {
    id?: number
    name: string
    description: string
    wallId?: number | null
  }

  export type LibraryCreateOrConnectWithoutShelvesInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
  }

  export type VolumeCreateWithoutShelfInput = {
    title: string
    content?: string
  }

  export type VolumeUncheckedCreateWithoutShelfInput = {
    id?: number
    title: string
    content?: string
  }

  export type VolumeCreateOrConnectWithoutShelfInput = {
    where: VolumeWhereUniqueInput
    create: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput>
  }

  export type VolumeCreateManyShelfInputEnvelope = {
    data: VolumeCreateManyShelfInput | VolumeCreateManyShelfInput[]
  }

  export type LibraryUpsertWithoutShelvesInput = {
    update: XOR<LibraryUpdateWithoutShelvesInput, LibraryUncheckedUpdateWithoutShelvesInput>
    create: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutShelvesInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutShelvesInput, LibraryUncheckedUpdateWithoutShelvesInput>
  }

  export type LibraryUpdateWithoutShelvesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    wall?: WallUpdateOneWithoutLibrariesNestedInput
  }

  export type LibraryUncheckedUpdateWithoutShelvesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    wallId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VolumeUpsertWithWhereUniqueWithoutShelfInput = {
    where: VolumeWhereUniqueInput
    update: XOR<VolumeUpdateWithoutShelfInput, VolumeUncheckedUpdateWithoutShelfInput>
    create: XOR<VolumeCreateWithoutShelfInput, VolumeUncheckedCreateWithoutShelfInput>
  }

  export type VolumeUpdateWithWhereUniqueWithoutShelfInput = {
    where: VolumeWhereUniqueInput
    data: XOR<VolumeUpdateWithoutShelfInput, VolumeUncheckedUpdateWithoutShelfInput>
  }

  export type VolumeUpdateManyWithWhereWithoutShelfInput = {
    where: VolumeScalarWhereInput
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyWithoutShelfInput>
  }

  export type VolumeScalarWhereInput = {
    AND?: VolumeScalarWhereInput | VolumeScalarWhereInput[]
    OR?: VolumeScalarWhereInput[]
    NOT?: VolumeScalarWhereInput | VolumeScalarWhereInput[]
    id?: IntFilter<"Volume"> | number
    title?: StringFilter<"Volume"> | string
    content?: StringFilter<"Volume"> | string
    shelfId?: IntFilter<"Volume"> | number
  }

  export type ShelfCreateWithoutVolumesInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    library: LibraryCreateNestedOneWithoutShelvesInput
  }

  export type ShelfUncheckedCreateWithoutVolumesInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    libraryId: number
  }

  export type ShelfCreateOrConnectWithoutVolumesInput = {
    where: ShelfWhereUniqueInput
    create: XOR<ShelfCreateWithoutVolumesInput, ShelfUncheckedCreateWithoutVolumesInput>
  }

  export type ShelfUpsertWithoutVolumesInput = {
    update: XOR<ShelfUpdateWithoutVolumesInput, ShelfUncheckedUpdateWithoutVolumesInput>
    create: XOR<ShelfCreateWithoutVolumesInput, ShelfUncheckedCreateWithoutVolumesInput>
    where?: ShelfWhereInput
  }

  export type ShelfUpdateToOneWithWhereWithoutVolumesInput = {
    where?: ShelfWhereInput
    data: XOR<ShelfUpdateWithoutVolumesInput, ShelfUncheckedUpdateWithoutVolumesInput>
  }

  export type ShelfUpdateWithoutVolumesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutShelvesNestedInput
  }

  export type ShelfUncheckedUpdateWithoutVolumesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryId?: IntFieldUpdateOperationsInput | number
  }

  export type LibraryCreateManyWallInput = {
    id?: number
    name: string
    description: string
  }

  export type LibraryUpdateWithoutWallInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shelves?: ShelfUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutWallInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shelves?: ShelfUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateManyWithoutWallInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShelfCreateManyLibraryInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelfUpdateWithoutLibraryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volumes?: VolumeUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volumes?: VolumeUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolumeCreateManyShelfInput = {
    id?: number
    title: string
    content?: string
  }

  export type VolumeUpdateWithoutShelfInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type VolumeUncheckedUpdateWithoutShelfInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type VolumeUncheckedUpdateManyWithoutShelfInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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