
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Quarto
 * 
 */
export type Quarto = $Result.DefaultSelection<Prisma.$QuartoPayload>
/**
 * Model QuartoCliente
 * 
 */
export type QuartoCliente = $Result.DefaultSelection<Prisma.$QuartoClientePayload>
/**
 * Model QuartoCelular
 * 
 */
export type QuartoCelular = $Result.DefaultSelection<Prisma.$QuartoCelularPayload>
/**
 * Model Tarefa
 * 
 */
export type Tarefa = $Result.DefaultSelection<Prisma.$TarefaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quarto`: Exposes CRUD operations for the **Quarto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quartos
    * const quartos = await prisma.quarto.findMany()
    * ```
    */
  get quarto(): Prisma.QuartoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quartoCliente`: Exposes CRUD operations for the **QuartoCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuartoClientes
    * const quartoClientes = await prisma.quartoCliente.findMany()
    * ```
    */
  get quartoCliente(): Prisma.QuartoClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quartoCelular`: Exposes CRUD operations for the **QuartoCelular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuartoCelulars
    * const quartoCelulars = await prisma.quartoCelular.findMany()
    * ```
    */
  get quartoCelular(): Prisma.QuartoCelularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarefa`: Exposes CRUD operations for the **Tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.TarefaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    Funcionario: 'Funcionario',
    Cliente: 'Cliente',
    Quarto: 'Quarto',
    QuartoCliente: 'QuartoCliente',
    QuartoCelular: 'QuartoCelular',
    Tarefa: 'Tarefa',
    Avaliacao: 'Avaliacao'
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
      modelProps: "usuario" | "funcionario" | "cliente" | "quarto" | "quartoCliente" | "quartoCelular" | "tarefa" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Quarto: {
        payload: Prisma.$QuartoPayload<ExtArgs>
        fields: Prisma.QuartoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuartoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuartoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findFirst: {
            args: Prisma.QuartoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuartoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findMany: {
            args: Prisma.QuartoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>[]
          }
          create: {
            args: Prisma.QuartoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          createMany: {
            args: Prisma.QuartoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuartoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          update: {
            args: Prisma.QuartoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          deleteMany: {
            args: Prisma.QuartoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuartoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuartoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          aggregate: {
            args: Prisma.QuartoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuarto>
          }
          groupBy: {
            args: Prisma.QuartoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuartoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuartoCountArgs<ExtArgs>
            result: $Utils.Optional<QuartoCountAggregateOutputType> | number
          }
        }
      }
      QuartoCliente: {
        payload: Prisma.$QuartoClientePayload<ExtArgs>
        fields: Prisma.QuartoClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuartoClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuartoClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          findFirst: {
            args: Prisma.QuartoClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuartoClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          findMany: {
            args: Prisma.QuartoClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>[]
          }
          create: {
            args: Prisma.QuartoClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          createMany: {
            args: Prisma.QuartoClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuartoClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          update: {
            args: Prisma.QuartoClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          deleteMany: {
            args: Prisma.QuartoClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuartoClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuartoClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoClientePayload>
          }
          aggregate: {
            args: Prisma.QuartoClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuartoCliente>
          }
          groupBy: {
            args: Prisma.QuartoClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuartoClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuartoClienteCountArgs<ExtArgs>
            result: $Utils.Optional<QuartoClienteCountAggregateOutputType> | number
          }
        }
      }
      QuartoCelular: {
        payload: Prisma.$QuartoCelularPayload<ExtArgs>
        fields: Prisma.QuartoCelularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuartoCelularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuartoCelularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          findFirst: {
            args: Prisma.QuartoCelularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuartoCelularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          findMany: {
            args: Prisma.QuartoCelularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>[]
          }
          create: {
            args: Prisma.QuartoCelularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          createMany: {
            args: Prisma.QuartoCelularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuartoCelularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          update: {
            args: Prisma.QuartoCelularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          deleteMany: {
            args: Prisma.QuartoCelularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuartoCelularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuartoCelularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoCelularPayload>
          }
          aggregate: {
            args: Prisma.QuartoCelularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuartoCelular>
          }
          groupBy: {
            args: Prisma.QuartoCelularGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuartoCelularGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuartoCelularCountArgs<ExtArgs>
            result: $Utils.Optional<QuartoCelularCountAggregateOutputType> | number
          }
        }
      }
      Tarefa: {
        payload: Prisma.$TarefaPayload<ExtArgs>
        fields: Prisma.TarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findFirst: {
            args: Prisma.TarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findMany: {
            args: Prisma.TarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          create: {
            args: Prisma.TarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          createMany: {
            args: Prisma.TarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          update: {
            args: Prisma.TarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          deleteMany: {
            args: Prisma.TarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.TarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    funcionario?: FuncionarioOmit
    cliente?: ClienteOmit
    quarto?: QuartoOmit
    quartoCliente?: QuartoClienteOmit
    quartoCelular?: QuartoCelularOmit
    tarefa?: TarefaOmit
    avaliacao?: AvaliacaoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    tarefas: number
    avaliacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | UsuarioCountOutputTypeCountTarefasArgs
    avaliacoes?: boolean | UsuarioCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    quartos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | ClienteCountOutputTypeCountQuartosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountQuartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoClienteWhereInput
  }


  /**
   * Count Type QuartoCountOutputType
   */

  export type QuartoCountOutputType = {
    ocupacoes: number
    tarefas: number
    celulares: number
  }

  export type QuartoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ocupacoes?: boolean | QuartoCountOutputTypeCountOcupacoesArgs
    tarefas?: boolean | QuartoCountOutputTypeCountTarefasArgs
    celulares?: boolean | QuartoCountOutputTypeCountCelularesArgs
  }

  // Custom InputTypes
  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCountOutputType
     */
    select?: QuartoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeCountOcupacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoClienteWhereInput
  }

  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }

  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeCountCelularesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoCelularWhereInput
  }


  /**
   * Count Type QuartoClienteCountOutputType
   */

  export type QuartoClienteCountOutputType = {
    celulares: number
  }

  export type QuartoClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celulares?: boolean | QuartoClienteCountOutputTypeCountCelularesArgs
  }

  // Custom InputTypes
  /**
   * QuartoClienteCountOutputType without action
   */
  export type QuartoClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoClienteCountOutputType
     */
    select?: QuartoClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuartoClienteCountOutputType without action
   */
  export type QuartoClienteCountOutputTypeCountCelularesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoCelularWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    permissao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    permissao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    permissao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    permissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    funcionario?: boolean | Usuario$funcionarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    permissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "permissao" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    funcionario?: boolean | Usuario$funcionarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      funcionario: Prisma.$FuncionarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      permissao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefas<T extends Usuario$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Usuario$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funcionario<T extends Usuario$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$funcionarioArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly permissao: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.tarefas
   */
  export type Usuario$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Usuario.avaliacoes
   */
  export type Usuario$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Usuario.funcionario
   */
  export type Usuario$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    foto: string | null
    cargo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    foto: string | null
    cargo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    foto: number
    cargo: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    foto?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    foto?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    foto?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    usuarioId: number
    foto: string | null
    cargo: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    foto?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>



  export type FuncionarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    foto?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "foto" | "cargo" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      foto: string | null
      cargo: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly usuarioId: FieldRef<"Funcionario", 'Int'>
    readonly foto: FieldRef<"Funcionario", 'String'>
    readonly cargo: FieldRef<"Funcionario", 'String'>
    readonly ativo: FieldRef<"Funcionario", 'Boolean'>
    readonly createdAt: FieldRef<"Funcionario", 'DateTime'>
    readonly updatedAt: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    email: number
    telefone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    email: string | null
    telefone: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quartos?: boolean | Cliente$quartosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "email" | "telefone" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | Cliente$quartosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      quartos: Prisma.$QuartoClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      email: string | null
      telefone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quartos<T extends Cliente$quartosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$quartosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.quartos
   */
  export type Cliente$quartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    where?: QuartoClienteWhereInput
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    cursor?: QuartoClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoClienteScalarFieldEnum | QuartoClienteScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Quarto
   */

  export type AggregateQuarto = {
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  export type QuartoAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    andar: number | null
  }

  export type QuartoSumAggregateOutputType = {
    id: number | null
    numero: number | null
    andar: number | null
  }

  export type QuartoMinAggregateOutputType = {
    id: number | null
    numero: number | null
    andar: number | null
    tipo: string | null
    status: string | null
    cliente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    andar: number | null
    tipo: string | null
    status: string | null
    cliente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoCountAggregateOutputType = {
    id: number
    numero: number
    andar: number
    tipo: number
    status: number
    cliente: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuartoAvgAggregateInputType = {
    id?: true
    numero?: true
    andar?: true
  }

  export type QuartoSumAggregateInputType = {
    id?: true
    numero?: true
    andar?: true
  }

  export type QuartoMinAggregateInputType = {
    id?: true
    numero?: true
    andar?: true
    tipo?: true
    status?: true
    cliente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoMaxAggregateInputType = {
    id?: true
    numero?: true
    andar?: true
    tipo?: true
    status?: true
    cliente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoCountAggregateInputType = {
    id?: true
    numero?: true
    andar?: true
    tipo?: true
    status?: true
    cliente?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuartoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quarto to aggregate.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quartos
    **/
    _count?: true | QuartoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuartoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuartoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuartoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuartoMaxAggregateInputType
  }

  export type GetQuartoAggregateType<T extends QuartoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuarto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuarto[P]>
      : GetScalarType<T[P], AggregateQuarto[P]>
  }




  export type QuartoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoWhereInput
    orderBy?: QuartoOrderByWithAggregationInput | QuartoOrderByWithAggregationInput[]
    by: QuartoScalarFieldEnum[] | QuartoScalarFieldEnum
    having?: QuartoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuartoCountAggregateInputType | true
    _avg?: QuartoAvgAggregateInputType
    _sum?: QuartoSumAggregateInputType
    _min?: QuartoMinAggregateInputType
    _max?: QuartoMaxAggregateInputType
  }

  export type QuartoGroupByOutputType = {
    id: number
    numero: number
    andar: number
    tipo: string
    status: string
    cliente: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  type GetQuartoGroupByPayload<T extends QuartoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuartoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuartoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuartoGroupByOutputType[P]>
            : GetScalarType<T[P], QuartoGroupByOutputType[P]>
        }
      >
    >


  export type QuartoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    andar?: boolean
    tipo?: boolean
    status?: boolean
    cliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ocupacoes?: boolean | Quarto$ocupacoesArgs<ExtArgs>
    tarefas?: boolean | Quarto$tarefasArgs<ExtArgs>
    celulares?: boolean | Quarto$celularesArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>



  export type QuartoSelectScalar = {
    id?: boolean
    numero?: boolean
    andar?: boolean
    tipo?: boolean
    status?: boolean
    cliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuartoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "andar" | "tipo" | "status" | "cliente" | "createdAt" | "updatedAt", ExtArgs["result"]["quarto"]>
  export type QuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ocupacoes?: boolean | Quarto$ocupacoesArgs<ExtArgs>
    tarefas?: boolean | Quarto$tarefasArgs<ExtArgs>
    celulares?: boolean | Quarto$celularesArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quarto"
    objects: {
      ocupacoes: Prisma.$QuartoClientePayload<ExtArgs>[]
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      celulares: Prisma.$QuartoCelularPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      andar: number
      tipo: string
      status: string
      cliente: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quarto"]>
    composites: {}
  }

  type QuartoGetPayload<S extends boolean | null | undefined | QuartoDefaultArgs> = $Result.GetResult<Prisma.$QuartoPayload, S>

  type QuartoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuartoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuartoCountAggregateInputType | true
    }

  export interface QuartoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quarto'], meta: { name: 'Quarto' } }
    /**
     * Find zero or one Quarto that matches the filter.
     * @param {QuartoFindUniqueArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuartoFindUniqueArgs>(args: SelectSubset<T, QuartoFindUniqueArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quarto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuartoFindUniqueOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuartoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuartoFindFirstArgs>(args?: SelectSubset<T, QuartoFindFirstArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuartoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuartoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quartos
     * const quartos = await prisma.quarto.findMany()
     * 
     * // Get first 10 Quartos
     * const quartos = await prisma.quarto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quartoWithIdOnly = await prisma.quarto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuartoFindManyArgs>(args?: SelectSubset<T, QuartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quarto.
     * @param {QuartoCreateArgs} args - Arguments to create a Quarto.
     * @example
     * // Create one Quarto
     * const Quarto = await prisma.quarto.create({
     *   data: {
     *     // ... data to create a Quarto
     *   }
     * })
     * 
     */
    create<T extends QuartoCreateArgs>(args: SelectSubset<T, QuartoCreateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quartos.
     * @param {QuartoCreateManyArgs} args - Arguments to create many Quartos.
     * @example
     * // Create many Quartos
     * const quarto = await prisma.quarto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuartoCreateManyArgs>(args?: SelectSubset<T, QuartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quarto.
     * @param {QuartoDeleteArgs} args - Arguments to delete one Quarto.
     * @example
     * // Delete one Quarto
     * const Quarto = await prisma.quarto.delete({
     *   where: {
     *     // ... filter to delete one Quarto
     *   }
     * })
     * 
     */
    delete<T extends QuartoDeleteArgs>(args: SelectSubset<T, QuartoDeleteArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quarto.
     * @param {QuartoUpdateArgs} args - Arguments to update one Quarto.
     * @example
     * // Update one Quarto
     * const quarto = await prisma.quarto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuartoUpdateArgs>(args: SelectSubset<T, QuartoUpdateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quartos.
     * @param {QuartoDeleteManyArgs} args - Arguments to filter Quartos to delete.
     * @example
     * // Delete a few Quartos
     * const { count } = await prisma.quarto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuartoDeleteManyArgs>(args?: SelectSubset<T, QuartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quartos
     * const quarto = await prisma.quarto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuartoUpdateManyArgs>(args: SelectSubset<T, QuartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quarto.
     * @param {QuartoUpsertArgs} args - Arguments to update or create a Quarto.
     * @example
     * // Update or create a Quarto
     * const quarto = await prisma.quarto.upsert({
     *   create: {
     *     // ... data to create a Quarto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quarto we want to update
     *   }
     * })
     */
    upsert<T extends QuartoUpsertArgs>(args: SelectSubset<T, QuartoUpsertArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCountArgs} args - Arguments to filter Quartos to count.
     * @example
     * // Count the number of Quartos
     * const count = await prisma.quarto.count({
     *   where: {
     *     // ... the filter for the Quartos we want to count
     *   }
     * })
    **/
    count<T extends QuartoCountArgs>(
      args?: Subset<T, QuartoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuartoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuartoAggregateArgs>(args: Subset<T, QuartoAggregateArgs>): Prisma.PrismaPromise<GetQuartoAggregateType<T>>

    /**
     * Group by Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoGroupByArgs} args - Group by arguments.
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
      T extends QuartoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuartoGroupByArgs['orderBy'] }
        : { orderBy?: QuartoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quarto model
   */
  readonly fields: QuartoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quarto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuartoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ocupacoes<T extends Quarto$ocupacoesArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$ocupacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tarefas<T extends Quarto$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    celulares<T extends Quarto$celularesArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$celularesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quarto model
   */
  interface QuartoFieldRefs {
    readonly id: FieldRef<"Quarto", 'Int'>
    readonly numero: FieldRef<"Quarto", 'Int'>
    readonly andar: FieldRef<"Quarto", 'Int'>
    readonly tipo: FieldRef<"Quarto", 'String'>
    readonly status: FieldRef<"Quarto", 'String'>
    readonly cliente: FieldRef<"Quarto", 'String'>
    readonly createdAt: FieldRef<"Quarto", 'DateTime'>
    readonly updatedAt: FieldRef<"Quarto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quarto findUnique
   */
  export type QuartoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findUniqueOrThrow
   */
  export type QuartoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findFirst
   */
  export type QuartoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findFirstOrThrow
   */
  export type QuartoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findMany
   */
  export type QuartoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quartos to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto create
   */
  export type QuartoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to create a Quarto.
     */
    data: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
  }

  /**
   * Quarto createMany
   */
  export type QuartoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quartos.
     */
    data: QuartoCreateManyInput | QuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quarto update
   */
  export type QuartoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to update a Quarto.
     */
    data: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
    /**
     * Choose, which Quarto to update.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto updateMany
   */
  export type QuartoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quartos.
     */
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyInput>
    /**
     * Filter which Quartos to update
     */
    where?: QuartoWhereInput
    /**
     * Limit how many Quartos to update.
     */
    limit?: number
  }

  /**
   * Quarto upsert
   */
  export type QuartoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The filter to search for the Quarto to update in case it exists.
     */
    where: QuartoWhereUniqueInput
    /**
     * In case the Quarto found by the `where` argument doesn't exist, create a new Quarto with this data.
     */
    create: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
    /**
     * In case the Quarto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
  }

  /**
   * Quarto delete
   */
  export type QuartoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter which Quarto to delete.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto deleteMany
   */
  export type QuartoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quartos to delete
     */
    where?: QuartoWhereInput
    /**
     * Limit how many Quartos to delete.
     */
    limit?: number
  }

  /**
   * Quarto.ocupacoes
   */
  export type Quarto$ocupacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    where?: QuartoClienteWhereInput
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    cursor?: QuartoClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoClienteScalarFieldEnum | QuartoClienteScalarFieldEnum[]
  }

  /**
   * Quarto.tarefas
   */
  export type Quarto$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Quarto.celulares
   */
  export type Quarto$celularesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    where?: QuartoCelularWhereInput
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    cursor?: QuartoCelularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoCelularScalarFieldEnum | QuartoCelularScalarFieldEnum[]
  }

  /**
   * Quarto without action
   */
  export type QuartoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
  }


  /**
   * Model QuartoCliente
   */

  export type AggregateQuartoCliente = {
    _count: QuartoClienteCountAggregateOutputType | null
    _avg: QuartoClienteAvgAggregateOutputType | null
    _sum: QuartoClienteSumAggregateOutputType | null
    _min: QuartoClienteMinAggregateOutputType | null
    _max: QuartoClienteMaxAggregateOutputType | null
  }

  export type QuartoClienteAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    quartoId: number | null
  }

  export type QuartoClienteSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    quartoId: number | null
  }

  export type QuartoClienteMinAggregateOutputType = {
    id: number | null
    checkin: Date | null
    checkout: Date | null
    clienteId: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoClienteMaxAggregateOutputType = {
    id: number | null
    checkin: Date | null
    checkout: Date | null
    clienteId: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoClienteCountAggregateOutputType = {
    id: number
    checkin: number
    checkout: number
    clienteId: number
    quartoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuartoClienteAvgAggregateInputType = {
    id?: true
    clienteId?: true
    quartoId?: true
  }

  export type QuartoClienteSumAggregateInputType = {
    id?: true
    clienteId?: true
    quartoId?: true
  }

  export type QuartoClienteMinAggregateInputType = {
    id?: true
    checkin?: true
    checkout?: true
    clienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoClienteMaxAggregateInputType = {
    id?: true
    checkin?: true
    checkout?: true
    clienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoClienteCountAggregateInputType = {
    id?: true
    checkin?: true
    checkout?: true
    clienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuartoClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuartoCliente to aggregate.
     */
    where?: QuartoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoClientes to fetch.
     */
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuartoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuartoClientes
    **/
    _count?: true | QuartoClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuartoClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuartoClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuartoClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuartoClienteMaxAggregateInputType
  }

  export type GetQuartoClienteAggregateType<T extends QuartoClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuartoCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuartoCliente[P]>
      : GetScalarType<T[P], AggregateQuartoCliente[P]>
  }




  export type QuartoClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoClienteWhereInput
    orderBy?: QuartoClienteOrderByWithAggregationInput | QuartoClienteOrderByWithAggregationInput[]
    by: QuartoClienteScalarFieldEnum[] | QuartoClienteScalarFieldEnum
    having?: QuartoClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuartoClienteCountAggregateInputType | true
    _avg?: QuartoClienteAvgAggregateInputType
    _sum?: QuartoClienteSumAggregateInputType
    _min?: QuartoClienteMinAggregateInputType
    _max?: QuartoClienteMaxAggregateInputType
  }

  export type QuartoClienteGroupByOutputType = {
    id: number
    checkin: Date
    checkout: Date
    clienteId: number
    quartoId: number
    createdAt: Date
    updatedAt: Date
    _count: QuartoClienteCountAggregateOutputType | null
    _avg: QuartoClienteAvgAggregateOutputType | null
    _sum: QuartoClienteSumAggregateOutputType | null
    _min: QuartoClienteMinAggregateOutputType | null
    _max: QuartoClienteMaxAggregateOutputType | null
  }

  type GetQuartoClienteGroupByPayload<T extends QuartoClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuartoClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuartoClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuartoClienteGroupByOutputType[P]>
            : GetScalarType<T[P], QuartoClienteGroupByOutputType[P]>
        }
      >
    >


  export type QuartoClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkin?: boolean
    checkout?: boolean
    clienteId?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    celulares?: boolean | QuartoCliente$celularesArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    _count?: boolean | QuartoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quartoCliente"]>



  export type QuartoClienteSelectScalar = {
    id?: boolean
    checkin?: boolean
    checkout?: boolean
    clienteId?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuartoClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkin" | "checkout" | "clienteId" | "quartoId" | "createdAt" | "updatedAt", ExtArgs["result"]["quartoCliente"]>
  export type QuartoClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celulares?: boolean | QuartoCliente$celularesArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    _count?: boolean | QuartoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuartoClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuartoCliente"
    objects: {
      celulares: Prisma.$QuartoCelularPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs>
      quarto: Prisma.$QuartoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkin: Date
      checkout: Date
      clienteId: number
      quartoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quartoCliente"]>
    composites: {}
  }

  type QuartoClienteGetPayload<S extends boolean | null | undefined | QuartoClienteDefaultArgs> = $Result.GetResult<Prisma.$QuartoClientePayload, S>

  type QuartoClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuartoClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuartoClienteCountAggregateInputType | true
    }

  export interface QuartoClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuartoCliente'], meta: { name: 'QuartoCliente' } }
    /**
     * Find zero or one QuartoCliente that matches the filter.
     * @param {QuartoClienteFindUniqueArgs} args - Arguments to find a QuartoCliente
     * @example
     * // Get one QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuartoClienteFindUniqueArgs>(args: SelectSubset<T, QuartoClienteFindUniqueArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuartoCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuartoClienteFindUniqueOrThrowArgs} args - Arguments to find a QuartoCliente
     * @example
     * // Get one QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuartoClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, QuartoClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuartoCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteFindFirstArgs} args - Arguments to find a QuartoCliente
     * @example
     * // Get one QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuartoClienteFindFirstArgs>(args?: SelectSubset<T, QuartoClienteFindFirstArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuartoCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteFindFirstOrThrowArgs} args - Arguments to find a QuartoCliente
     * @example
     * // Get one QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuartoClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, QuartoClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuartoClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuartoClientes
     * const quartoClientes = await prisma.quartoCliente.findMany()
     * 
     * // Get first 10 QuartoClientes
     * const quartoClientes = await prisma.quartoCliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quartoClienteWithIdOnly = await prisma.quartoCliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuartoClienteFindManyArgs>(args?: SelectSubset<T, QuartoClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuartoCliente.
     * @param {QuartoClienteCreateArgs} args - Arguments to create a QuartoCliente.
     * @example
     * // Create one QuartoCliente
     * const QuartoCliente = await prisma.quartoCliente.create({
     *   data: {
     *     // ... data to create a QuartoCliente
     *   }
     * })
     * 
     */
    create<T extends QuartoClienteCreateArgs>(args: SelectSubset<T, QuartoClienteCreateArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuartoClientes.
     * @param {QuartoClienteCreateManyArgs} args - Arguments to create many QuartoClientes.
     * @example
     * // Create many QuartoClientes
     * const quartoCliente = await prisma.quartoCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuartoClienteCreateManyArgs>(args?: SelectSubset<T, QuartoClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuartoCliente.
     * @param {QuartoClienteDeleteArgs} args - Arguments to delete one QuartoCliente.
     * @example
     * // Delete one QuartoCliente
     * const QuartoCliente = await prisma.quartoCliente.delete({
     *   where: {
     *     // ... filter to delete one QuartoCliente
     *   }
     * })
     * 
     */
    delete<T extends QuartoClienteDeleteArgs>(args: SelectSubset<T, QuartoClienteDeleteArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuartoCliente.
     * @param {QuartoClienteUpdateArgs} args - Arguments to update one QuartoCliente.
     * @example
     * // Update one QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuartoClienteUpdateArgs>(args: SelectSubset<T, QuartoClienteUpdateArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuartoClientes.
     * @param {QuartoClienteDeleteManyArgs} args - Arguments to filter QuartoClientes to delete.
     * @example
     * // Delete a few QuartoClientes
     * const { count } = await prisma.quartoCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuartoClienteDeleteManyArgs>(args?: SelectSubset<T, QuartoClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuartoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuartoClientes
     * const quartoCliente = await prisma.quartoCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuartoClienteUpdateManyArgs>(args: SelectSubset<T, QuartoClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuartoCliente.
     * @param {QuartoClienteUpsertArgs} args - Arguments to update or create a QuartoCliente.
     * @example
     * // Update or create a QuartoCliente
     * const quartoCliente = await prisma.quartoCliente.upsert({
     *   create: {
     *     // ... data to create a QuartoCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuartoCliente we want to update
     *   }
     * })
     */
    upsert<T extends QuartoClienteUpsertArgs>(args: SelectSubset<T, QuartoClienteUpsertArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuartoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteCountArgs} args - Arguments to filter QuartoClientes to count.
     * @example
     * // Count the number of QuartoClientes
     * const count = await prisma.quartoCliente.count({
     *   where: {
     *     // ... the filter for the QuartoClientes we want to count
     *   }
     * })
    **/
    count<T extends QuartoClienteCountArgs>(
      args?: Subset<T, QuartoClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuartoClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuartoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuartoClienteAggregateArgs>(args: Subset<T, QuartoClienteAggregateArgs>): Prisma.PrismaPromise<GetQuartoClienteAggregateType<T>>

    /**
     * Group by QuartoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoClienteGroupByArgs} args - Group by arguments.
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
      T extends QuartoClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuartoClienteGroupByArgs['orderBy'] }
        : { orderBy?: QuartoClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuartoClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuartoClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuartoCliente model
   */
  readonly fields: QuartoClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuartoCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuartoClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    celulares<T extends QuartoCliente$celularesArgs<ExtArgs> = {}>(args?: Subset<T, QuartoCliente$celularesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarto<T extends QuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuartoDefaultArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuartoCliente model
   */
  interface QuartoClienteFieldRefs {
    readonly id: FieldRef<"QuartoCliente", 'Int'>
    readonly checkin: FieldRef<"QuartoCliente", 'DateTime'>
    readonly checkout: FieldRef<"QuartoCliente", 'DateTime'>
    readonly clienteId: FieldRef<"QuartoCliente", 'Int'>
    readonly quartoId: FieldRef<"QuartoCliente", 'Int'>
    readonly createdAt: FieldRef<"QuartoCliente", 'DateTime'>
    readonly updatedAt: FieldRef<"QuartoCliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuartoCliente findUnique
   */
  export type QuartoClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCliente to fetch.
     */
    where: QuartoClienteWhereUniqueInput
  }

  /**
   * QuartoCliente findUniqueOrThrow
   */
  export type QuartoClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCliente to fetch.
     */
    where: QuartoClienteWhereUniqueInput
  }

  /**
   * QuartoCliente findFirst
   */
  export type QuartoClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCliente to fetch.
     */
    where?: QuartoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoClientes to fetch.
     */
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuartoClientes.
     */
    cursor?: QuartoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuartoClientes.
     */
    distinct?: QuartoClienteScalarFieldEnum | QuartoClienteScalarFieldEnum[]
  }

  /**
   * QuartoCliente findFirstOrThrow
   */
  export type QuartoClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCliente to fetch.
     */
    where?: QuartoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoClientes to fetch.
     */
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuartoClientes.
     */
    cursor?: QuartoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuartoClientes.
     */
    distinct?: QuartoClienteScalarFieldEnum | QuartoClienteScalarFieldEnum[]
  }

  /**
   * QuartoCliente findMany
   */
  export type QuartoClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter, which QuartoClientes to fetch.
     */
    where?: QuartoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoClientes to fetch.
     */
    orderBy?: QuartoClienteOrderByWithRelationInput | QuartoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuartoClientes.
     */
    cursor?: QuartoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoClientes.
     */
    skip?: number
    distinct?: QuartoClienteScalarFieldEnum | QuartoClienteScalarFieldEnum[]
  }

  /**
   * QuartoCliente create
   */
  export type QuartoClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a QuartoCliente.
     */
    data: XOR<QuartoClienteCreateInput, QuartoClienteUncheckedCreateInput>
  }

  /**
   * QuartoCliente createMany
   */
  export type QuartoClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuartoClientes.
     */
    data: QuartoClienteCreateManyInput | QuartoClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuartoCliente update
   */
  export type QuartoClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a QuartoCliente.
     */
    data: XOR<QuartoClienteUpdateInput, QuartoClienteUncheckedUpdateInput>
    /**
     * Choose, which QuartoCliente to update.
     */
    where: QuartoClienteWhereUniqueInput
  }

  /**
   * QuartoCliente updateMany
   */
  export type QuartoClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuartoClientes.
     */
    data: XOR<QuartoClienteUpdateManyMutationInput, QuartoClienteUncheckedUpdateManyInput>
    /**
     * Filter which QuartoClientes to update
     */
    where?: QuartoClienteWhereInput
    /**
     * Limit how many QuartoClientes to update.
     */
    limit?: number
  }

  /**
   * QuartoCliente upsert
   */
  export type QuartoClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the QuartoCliente to update in case it exists.
     */
    where: QuartoClienteWhereUniqueInput
    /**
     * In case the QuartoCliente found by the `where` argument doesn't exist, create a new QuartoCliente with this data.
     */
    create: XOR<QuartoClienteCreateInput, QuartoClienteUncheckedCreateInput>
    /**
     * In case the QuartoCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuartoClienteUpdateInput, QuartoClienteUncheckedUpdateInput>
  }

  /**
   * QuartoCliente delete
   */
  export type QuartoClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
    /**
     * Filter which QuartoCliente to delete.
     */
    where: QuartoClienteWhereUniqueInput
  }

  /**
   * QuartoCliente deleteMany
   */
  export type QuartoClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuartoClientes to delete
     */
    where?: QuartoClienteWhereInput
    /**
     * Limit how many QuartoClientes to delete.
     */
    limit?: number
  }

  /**
   * QuartoCliente.celulares
   */
  export type QuartoCliente$celularesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    where?: QuartoCelularWhereInput
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    cursor?: QuartoCelularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoCelularScalarFieldEnum | QuartoCelularScalarFieldEnum[]
  }

  /**
   * QuartoCliente without action
   */
  export type QuartoClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCliente
     */
    select?: QuartoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCliente
     */
    omit?: QuartoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoClienteInclude<ExtArgs> | null
  }


  /**
   * Model QuartoCelular
   */

  export type AggregateQuartoCelular = {
    _count: QuartoCelularCountAggregateOutputType | null
    _avg: QuartoCelularAvgAggregateOutputType | null
    _sum: QuartoCelularSumAggregateOutputType | null
    _min: QuartoCelularMinAggregateOutputType | null
    _max: QuartoCelularMaxAggregateOutputType | null
  }

  export type QuartoCelularAvgAggregateOutputType = {
    id: number | null
    quartoClienteId: number | null
    quartoId: number | null
  }

  export type QuartoCelularSumAggregateOutputType = {
    id: number | null
    quartoClienteId: number | null
    quartoId: number | null
  }

  export type QuartoCelularMinAggregateOutputType = {
    id: number | null
    nome: string | null
    celular: string | null
    quartoClienteId: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoCelularMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    celular: string | null
    quartoClienteId: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoCelularCountAggregateOutputType = {
    id: number
    nome: number
    celular: number
    quartoClienteId: number
    quartoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuartoCelularAvgAggregateInputType = {
    id?: true
    quartoClienteId?: true
    quartoId?: true
  }

  export type QuartoCelularSumAggregateInputType = {
    id?: true
    quartoClienteId?: true
    quartoId?: true
  }

  export type QuartoCelularMinAggregateInputType = {
    id?: true
    nome?: true
    celular?: true
    quartoClienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoCelularMaxAggregateInputType = {
    id?: true
    nome?: true
    celular?: true
    quartoClienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoCelularCountAggregateInputType = {
    id?: true
    nome?: true
    celular?: true
    quartoClienteId?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuartoCelularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuartoCelular to aggregate.
     */
    where?: QuartoCelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoCelulars to fetch.
     */
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuartoCelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoCelulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoCelulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuartoCelulars
    **/
    _count?: true | QuartoCelularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuartoCelularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuartoCelularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuartoCelularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuartoCelularMaxAggregateInputType
  }

  export type GetQuartoCelularAggregateType<T extends QuartoCelularAggregateArgs> = {
        [P in keyof T & keyof AggregateQuartoCelular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuartoCelular[P]>
      : GetScalarType<T[P], AggregateQuartoCelular[P]>
  }




  export type QuartoCelularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoCelularWhereInput
    orderBy?: QuartoCelularOrderByWithAggregationInput | QuartoCelularOrderByWithAggregationInput[]
    by: QuartoCelularScalarFieldEnum[] | QuartoCelularScalarFieldEnum
    having?: QuartoCelularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuartoCelularCountAggregateInputType | true
    _avg?: QuartoCelularAvgAggregateInputType
    _sum?: QuartoCelularSumAggregateInputType
    _min?: QuartoCelularMinAggregateInputType
    _max?: QuartoCelularMaxAggregateInputType
  }

  export type QuartoCelularGroupByOutputType = {
    id: number
    nome: string
    celular: string
    quartoClienteId: number
    quartoId: number | null
    createdAt: Date
    updatedAt: Date
    _count: QuartoCelularCountAggregateOutputType | null
    _avg: QuartoCelularAvgAggregateOutputType | null
    _sum: QuartoCelularSumAggregateOutputType | null
    _min: QuartoCelularMinAggregateOutputType | null
    _max: QuartoCelularMaxAggregateOutputType | null
  }

  type GetQuartoCelularGroupByPayload<T extends QuartoCelularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuartoCelularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuartoCelularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuartoCelularGroupByOutputType[P]>
            : GetScalarType<T[P], QuartoCelularGroupByOutputType[P]>
        }
      >
    >


  export type QuartoCelularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    celular?: boolean
    quartoClienteId?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quartoCliente?: boolean | QuartoClienteDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoCelular$quartoArgs<ExtArgs>
  }, ExtArgs["result"]["quartoCelular"]>



  export type QuartoCelularSelectScalar = {
    id?: boolean
    nome?: boolean
    celular?: boolean
    quartoClienteId?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuartoCelularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "celular" | "quartoClienteId" | "quartoId" | "createdAt" | "updatedAt", ExtArgs["result"]["quartoCelular"]>
  export type QuartoCelularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartoCliente?: boolean | QuartoClienteDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoCelular$quartoArgs<ExtArgs>
  }

  export type $QuartoCelularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuartoCelular"
    objects: {
      quartoCliente: Prisma.$QuartoClientePayload<ExtArgs>
      quarto: Prisma.$QuartoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      celular: string
      quartoClienteId: number
      quartoId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quartoCelular"]>
    composites: {}
  }

  type QuartoCelularGetPayload<S extends boolean | null | undefined | QuartoCelularDefaultArgs> = $Result.GetResult<Prisma.$QuartoCelularPayload, S>

  type QuartoCelularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuartoCelularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuartoCelularCountAggregateInputType | true
    }

  export interface QuartoCelularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuartoCelular'], meta: { name: 'QuartoCelular' } }
    /**
     * Find zero or one QuartoCelular that matches the filter.
     * @param {QuartoCelularFindUniqueArgs} args - Arguments to find a QuartoCelular
     * @example
     * // Get one QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuartoCelularFindUniqueArgs>(args: SelectSubset<T, QuartoCelularFindUniqueArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuartoCelular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuartoCelularFindUniqueOrThrowArgs} args - Arguments to find a QuartoCelular
     * @example
     * // Get one QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuartoCelularFindUniqueOrThrowArgs>(args: SelectSubset<T, QuartoCelularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuartoCelular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularFindFirstArgs} args - Arguments to find a QuartoCelular
     * @example
     * // Get one QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuartoCelularFindFirstArgs>(args?: SelectSubset<T, QuartoCelularFindFirstArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuartoCelular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularFindFirstOrThrowArgs} args - Arguments to find a QuartoCelular
     * @example
     * // Get one QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuartoCelularFindFirstOrThrowArgs>(args?: SelectSubset<T, QuartoCelularFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuartoCelulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuartoCelulars
     * const quartoCelulars = await prisma.quartoCelular.findMany()
     * 
     * // Get first 10 QuartoCelulars
     * const quartoCelulars = await prisma.quartoCelular.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quartoCelularWithIdOnly = await prisma.quartoCelular.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuartoCelularFindManyArgs>(args?: SelectSubset<T, QuartoCelularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuartoCelular.
     * @param {QuartoCelularCreateArgs} args - Arguments to create a QuartoCelular.
     * @example
     * // Create one QuartoCelular
     * const QuartoCelular = await prisma.quartoCelular.create({
     *   data: {
     *     // ... data to create a QuartoCelular
     *   }
     * })
     * 
     */
    create<T extends QuartoCelularCreateArgs>(args: SelectSubset<T, QuartoCelularCreateArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuartoCelulars.
     * @param {QuartoCelularCreateManyArgs} args - Arguments to create many QuartoCelulars.
     * @example
     * // Create many QuartoCelulars
     * const quartoCelular = await prisma.quartoCelular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuartoCelularCreateManyArgs>(args?: SelectSubset<T, QuartoCelularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuartoCelular.
     * @param {QuartoCelularDeleteArgs} args - Arguments to delete one QuartoCelular.
     * @example
     * // Delete one QuartoCelular
     * const QuartoCelular = await prisma.quartoCelular.delete({
     *   where: {
     *     // ... filter to delete one QuartoCelular
     *   }
     * })
     * 
     */
    delete<T extends QuartoCelularDeleteArgs>(args: SelectSubset<T, QuartoCelularDeleteArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuartoCelular.
     * @param {QuartoCelularUpdateArgs} args - Arguments to update one QuartoCelular.
     * @example
     * // Update one QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuartoCelularUpdateArgs>(args: SelectSubset<T, QuartoCelularUpdateArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuartoCelulars.
     * @param {QuartoCelularDeleteManyArgs} args - Arguments to filter QuartoCelulars to delete.
     * @example
     * // Delete a few QuartoCelulars
     * const { count } = await prisma.quartoCelular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuartoCelularDeleteManyArgs>(args?: SelectSubset<T, QuartoCelularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuartoCelulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuartoCelulars
     * const quartoCelular = await prisma.quartoCelular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuartoCelularUpdateManyArgs>(args: SelectSubset<T, QuartoCelularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuartoCelular.
     * @param {QuartoCelularUpsertArgs} args - Arguments to update or create a QuartoCelular.
     * @example
     * // Update or create a QuartoCelular
     * const quartoCelular = await prisma.quartoCelular.upsert({
     *   create: {
     *     // ... data to create a QuartoCelular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuartoCelular we want to update
     *   }
     * })
     */
    upsert<T extends QuartoCelularUpsertArgs>(args: SelectSubset<T, QuartoCelularUpsertArgs<ExtArgs>>): Prisma__QuartoCelularClient<$Result.GetResult<Prisma.$QuartoCelularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuartoCelulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularCountArgs} args - Arguments to filter QuartoCelulars to count.
     * @example
     * // Count the number of QuartoCelulars
     * const count = await prisma.quartoCelular.count({
     *   where: {
     *     // ... the filter for the QuartoCelulars we want to count
     *   }
     * })
    **/
    count<T extends QuartoCelularCountArgs>(
      args?: Subset<T, QuartoCelularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuartoCelularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuartoCelular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuartoCelularAggregateArgs>(args: Subset<T, QuartoCelularAggregateArgs>): Prisma.PrismaPromise<GetQuartoCelularAggregateType<T>>

    /**
     * Group by QuartoCelular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCelularGroupByArgs} args - Group by arguments.
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
      T extends QuartoCelularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuartoCelularGroupByArgs['orderBy'] }
        : { orderBy?: QuartoCelularGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuartoCelularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuartoCelularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuartoCelular model
   */
  readonly fields: QuartoCelularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuartoCelular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuartoCelularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quartoCliente<T extends QuartoClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuartoClienteDefaultArgs<ExtArgs>>): Prisma__QuartoClienteClient<$Result.GetResult<Prisma.$QuartoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarto<T extends QuartoCelular$quartoArgs<ExtArgs> = {}>(args?: Subset<T, QuartoCelular$quartoArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuartoCelular model
   */
  interface QuartoCelularFieldRefs {
    readonly id: FieldRef<"QuartoCelular", 'Int'>
    readonly nome: FieldRef<"QuartoCelular", 'String'>
    readonly celular: FieldRef<"QuartoCelular", 'String'>
    readonly quartoClienteId: FieldRef<"QuartoCelular", 'Int'>
    readonly quartoId: FieldRef<"QuartoCelular", 'Int'>
    readonly createdAt: FieldRef<"QuartoCelular", 'DateTime'>
    readonly updatedAt: FieldRef<"QuartoCelular", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuartoCelular findUnique
   */
  export type QuartoCelularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCelular to fetch.
     */
    where: QuartoCelularWhereUniqueInput
  }

  /**
   * QuartoCelular findUniqueOrThrow
   */
  export type QuartoCelularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCelular to fetch.
     */
    where: QuartoCelularWhereUniqueInput
  }

  /**
   * QuartoCelular findFirst
   */
  export type QuartoCelularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCelular to fetch.
     */
    where?: QuartoCelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoCelulars to fetch.
     */
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuartoCelulars.
     */
    cursor?: QuartoCelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoCelulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoCelulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuartoCelulars.
     */
    distinct?: QuartoCelularScalarFieldEnum | QuartoCelularScalarFieldEnum[]
  }

  /**
   * QuartoCelular findFirstOrThrow
   */
  export type QuartoCelularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCelular to fetch.
     */
    where?: QuartoCelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoCelulars to fetch.
     */
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuartoCelulars.
     */
    cursor?: QuartoCelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoCelulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoCelulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuartoCelulars.
     */
    distinct?: QuartoCelularScalarFieldEnum | QuartoCelularScalarFieldEnum[]
  }

  /**
   * QuartoCelular findMany
   */
  export type QuartoCelularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter, which QuartoCelulars to fetch.
     */
    where?: QuartoCelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuartoCelulars to fetch.
     */
    orderBy?: QuartoCelularOrderByWithRelationInput | QuartoCelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuartoCelulars.
     */
    cursor?: QuartoCelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuartoCelulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuartoCelulars.
     */
    skip?: number
    distinct?: QuartoCelularScalarFieldEnum | QuartoCelularScalarFieldEnum[]
  }

  /**
   * QuartoCelular create
   */
  export type QuartoCelularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * The data needed to create a QuartoCelular.
     */
    data: XOR<QuartoCelularCreateInput, QuartoCelularUncheckedCreateInput>
  }

  /**
   * QuartoCelular createMany
   */
  export type QuartoCelularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuartoCelulars.
     */
    data: QuartoCelularCreateManyInput | QuartoCelularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuartoCelular update
   */
  export type QuartoCelularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * The data needed to update a QuartoCelular.
     */
    data: XOR<QuartoCelularUpdateInput, QuartoCelularUncheckedUpdateInput>
    /**
     * Choose, which QuartoCelular to update.
     */
    where: QuartoCelularWhereUniqueInput
  }

  /**
   * QuartoCelular updateMany
   */
  export type QuartoCelularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuartoCelulars.
     */
    data: XOR<QuartoCelularUpdateManyMutationInput, QuartoCelularUncheckedUpdateManyInput>
    /**
     * Filter which QuartoCelulars to update
     */
    where?: QuartoCelularWhereInput
    /**
     * Limit how many QuartoCelulars to update.
     */
    limit?: number
  }

  /**
   * QuartoCelular upsert
   */
  export type QuartoCelularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * The filter to search for the QuartoCelular to update in case it exists.
     */
    where: QuartoCelularWhereUniqueInput
    /**
     * In case the QuartoCelular found by the `where` argument doesn't exist, create a new QuartoCelular with this data.
     */
    create: XOR<QuartoCelularCreateInput, QuartoCelularUncheckedCreateInput>
    /**
     * In case the QuartoCelular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuartoCelularUpdateInput, QuartoCelularUncheckedUpdateInput>
  }

  /**
   * QuartoCelular delete
   */
  export type QuartoCelularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
    /**
     * Filter which QuartoCelular to delete.
     */
    where: QuartoCelularWhereUniqueInput
  }

  /**
   * QuartoCelular deleteMany
   */
  export type QuartoCelularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuartoCelulars to delete
     */
    where?: QuartoCelularWhereInput
    /**
     * Limit how many QuartoCelulars to delete.
     */
    limit?: number
  }

  /**
   * QuartoCelular.quarto
   */
  export type QuartoCelular$quartoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    where?: QuartoWhereInput
  }

  /**
   * QuartoCelular without action
   */
  export type QuartoCelularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCelular
     */
    select?: QuartoCelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuartoCelular
     */
    omit?: QuartoCelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoCelularInclude<ExtArgs> | null
  }


  /**
   * Model Tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaAvgAggregateOutputType = {
    id: number | null
    quartoId: number | null
    responsavelId: number | null
  }

  export type TarefaSumAggregateOutputType = {
    id: number | null
    quartoId: number | null
    responsavelId: number | null
  }

  export type TarefaMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    quartoId: number | null
    responsavelId: number | null
    inicio: Date | null
    fim: Date | null
    status: string | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    quartoId: number | null
    responsavelId: number | null
    inicio: Date | null
    fim: Date | null
    status: string | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    tipo: number
    quartoId: number
    responsavelId: number
    inicio: number
    fim: number
    status: number
    observacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TarefaAvgAggregateInputType = {
    id?: true
    quartoId?: true
    responsavelId?: true
  }

  export type TarefaSumAggregateInputType = {
    id?: true
    quartoId?: true
    responsavelId?: true
  }

  export type TarefaMinAggregateInputType = {
    id?: true
    tipo?: true
    quartoId?: true
    responsavelId?: true
    inicio?: true
    fim?: true
    status?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    tipo?: true
    quartoId?: true
    responsavelId?: true
    inicio?: true
    fim?: true
    status?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    tipo?: true
    quartoId?: true
    responsavelId?: true
    inicio?: true
    fim?: true
    status?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefa to aggregate.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarefaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarefaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type TarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithAggregationInput | TarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: TarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _avg?: TarefaAvgAggregateInputType
    _sum?: TarefaSumAggregateInputType
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: number
    tipo: string
    quartoId: number
    responsavelId: number | null
    inicio: Date | null
    fim: Date | null
    status: string
    observacao: string | null
    createdAt: Date
    updatedAt: Date
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type TarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    quartoId?: boolean
    responsavelId?: boolean
    inicio?: boolean
    fim?: boolean
    status?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avaliacao?: boolean | Tarefa$avaliacaoArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    responsavel?: boolean | Tarefa$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>



  export type TarefaSelectScalar = {
    id?: boolean
    tipo?: boolean
    quartoId?: boolean
    responsavelId?: boolean
    inicio?: boolean
    fim?: boolean
    status?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "quartoId" | "responsavelId" | "inicio" | "fim" | "status" | "observacao" | "createdAt" | "updatedAt", ExtArgs["result"]["tarefa"]>
  export type TarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | Tarefa$avaliacaoArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    responsavel?: boolean | Tarefa$responsavelArgs<ExtArgs>
  }

  export type $TarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarefa"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs> | null
      quarto: Prisma.$QuartoPayload<ExtArgs>
      responsavel: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      quartoId: number
      responsavelId: number | null
      inicio: Date | null
      fim: Date | null
      status: string
      observacao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = $Result.GetResult<Prisma.$TarefaPayload, S>

  type TarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface TarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'], meta: { name: 'Tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {TarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarefaFindUniqueArgs>(args: SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarefaFindFirstArgs>(args?: SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarefaFindManyArgs>(args?: SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {TarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends TarefaCreateArgs>(args: SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {TarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarefaCreateManyArgs>(args?: SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tarefa.
     * @param {TarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends TarefaDeleteArgs>(args: SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {TarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarefaUpdateArgs>(args: SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {TarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarefaDeleteManyArgs>(args?: SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarefaUpdateManyArgs>(args: SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tarefa.
     * @param {TarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends TarefaUpsertArgs>(args: SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends TarefaCountArgs>(
      args?: Subset<T, TarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaGroupByArgs} args - Group by arguments.
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
      T extends TarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarefaGroupByArgs['orderBy'] }
        : { orderBy?: TarefaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarefa model
   */
  readonly fields: TarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends Tarefa$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$avaliacaoArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quarto<T extends QuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuartoDefaultArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends Tarefa$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$responsavelArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tarefa model
   */
  interface TarefaFieldRefs {
    readonly id: FieldRef<"Tarefa", 'Int'>
    readonly tipo: FieldRef<"Tarefa", 'String'>
    readonly quartoId: FieldRef<"Tarefa", 'Int'>
    readonly responsavelId: FieldRef<"Tarefa", 'Int'>
    readonly inicio: FieldRef<"Tarefa", 'DateTime'>
    readonly fim: FieldRef<"Tarefa", 'DateTime'>
    readonly status: FieldRef<"Tarefa", 'String'>
    readonly observacao: FieldRef<"Tarefa", 'String'>
    readonly createdAt: FieldRef<"Tarefa", 'DateTime'>
    readonly updatedAt: FieldRef<"Tarefa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tarefa findUnique
   */
  export type TarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findUniqueOrThrow
   */
  export type TarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findFirst
   */
  export type TarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findFirstOrThrow
   */
  export type TarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findMany
   */
  export type TarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefas to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa create
   */
  export type TarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarefa.
     */
    data: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
  }

  /**
   * Tarefa createMany
   */
  export type TarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarefa update
   */
  export type TarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarefa.
     */
    data: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
    /**
     * Choose, which Tarefa to update.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa updateMany
   */
  export type TarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
  }

  /**
   * Tarefa upsert
   */
  export type TarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarefa to update in case it exists.
     */
    where: TarefaWhereUniqueInput
    /**
     * In case the Tarefa found by the `where` argument doesn't exist, create a new Tarefa with this data.
     */
    create: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
    /**
     * In case the Tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
  }

  /**
   * Tarefa delete
   */
  export type TarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter which Tarefa to delete.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa deleteMany
   */
  export type TarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefas to delete
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to delete.
     */
    limit?: number
  }

  /**
   * Tarefa.avaliacao
   */
  export type Tarefa$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
  }

  /**
   * Tarefa.responsavel
   */
  export type Tarefa$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Tarefa without action
   */
  export type TarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    tarefaId: number | null
    nota: number | null
    supervisorId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    tarefaId: number | null
    nota: number | null
    supervisorId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    tarefaId: number | null
    nota: number | null
    supervisorId: number | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    tarefaId: number | null
    nota: number | null
    supervisorId: number | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    tarefaId: number
    nota: number
    supervisorId: number
    observacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    tarefaId?: true
    nota?: true
    supervisorId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    tarefaId?: true
    nota?: true
    supervisorId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    tarefaId?: true
    nota?: true
    supervisorId?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    tarefaId?: true
    nota?: true
    supervisorId?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    tarefaId?: true
    nota?: true
    supervisorId?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    tarefaId: number
    nota: number
    supervisorId: number
    observacao: string | null
    createdAt: Date
    updatedAt: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tarefaId?: boolean
    nota?: boolean
    supervisorId?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tarefa?: boolean | TarefaDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type AvaliacaoSelectScalar = {
    id?: boolean
    tarefaId?: boolean
    nota?: boolean
    supervisorId?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tarefaId" | "nota" | "supervisorId" | "observacao" | "createdAt" | "updatedAt", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefa?: boolean | TarefaDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      tarefa: Prisma.$TarefaPayload<ExtArgs>
      supervisor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tarefaId: number
      nota: number
      supervisorId: number
      observacao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefa<T extends TarefaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TarefaDefaultArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly tarefaId: FieldRef<"Avaliacao", 'Int'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly supervisorId: FieldRef<"Avaliacao", 'Int'>
    readonly observacao: FieldRef<"Avaliacao", 'String'>
    readonly createdAt: FieldRef<"Avaliacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    permissao: 'permissao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    foto: 'foto',
    cargo: 'cargo',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const QuartoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    andar: 'andar',
    tipo: 'tipo',
    status: 'status',
    cliente: 'cliente',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuartoScalarFieldEnum = (typeof QuartoScalarFieldEnum)[keyof typeof QuartoScalarFieldEnum]


  export const QuartoClienteScalarFieldEnum: {
    id: 'id',
    checkin: 'checkin',
    checkout: 'checkout',
    clienteId: 'clienteId',
    quartoId: 'quartoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuartoClienteScalarFieldEnum = (typeof QuartoClienteScalarFieldEnum)[keyof typeof QuartoClienteScalarFieldEnum]


  export const QuartoCelularScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    celular: 'celular',
    quartoClienteId: 'quartoClienteId',
    quartoId: 'quartoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuartoCelularScalarFieldEnum = (typeof QuartoCelularScalarFieldEnum)[keyof typeof QuartoCelularScalarFieldEnum]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    quartoId: 'quartoId',
    responsavelId: 'responsavelId',
    inicio: 'inicio',
    fim: 'fim',
    status: 'status',
    observacao: 'observacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    tarefaId: 'tarefaId',
    nota: 'nota',
    supervisorId: 'supervisorId',
    observacao: 'observacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    permissao: 'permissao'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FuncionarioOrderByRelevanceFieldEnum: {
    foto: 'foto',
    cargo: 'cargo'
  };

  export type FuncionarioOrderByRelevanceFieldEnum = (typeof FuncionarioOrderByRelevanceFieldEnum)[keyof typeof FuncionarioOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const QuartoOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    status: 'status',
    cliente: 'cliente'
  };

  export type QuartoOrderByRelevanceFieldEnum = (typeof QuartoOrderByRelevanceFieldEnum)[keyof typeof QuartoOrderByRelevanceFieldEnum]


  export const QuartoCelularOrderByRelevanceFieldEnum: {
    nome: 'nome',
    celular: 'celular'
  };

  export type QuartoCelularOrderByRelevanceFieldEnum = (typeof QuartoCelularOrderByRelevanceFieldEnum)[keyof typeof QuartoCelularOrderByRelevanceFieldEnum]


  export const TarefaOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    status: 'status',
    observacao: 'observacao'
  };

  export type TarefaOrderByRelevanceFieldEnum = (typeof TarefaOrderByRelevanceFieldEnum)[keyof typeof TarefaOrderByRelevanceFieldEnum]


  export const AvaliacaoOrderByRelevanceFieldEnum: {
    observacao: 'observacao'
  };

  export type AvaliacaoOrderByRelevanceFieldEnum = (typeof AvaliacaoOrderByRelevanceFieldEnum)[keyof typeof AvaliacaoOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    permissao?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tarefas?: TarefaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    funcionario?: FuncionarioOrderByWithRelationInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    permissao?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    permissao?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    usuarioId?: IntFilter<"Funcionario"> | number
    foto?: StringNullableFilter<"Funcionario"> | string | null
    cargo?: StringFilter<"Funcionario"> | string
    ativo?: BoolFilter<"Funcionario"> | boolean
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    foto?: SortOrderInput | SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: FuncionarioOrderByRelevanceInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    foto?: StringNullableFilter<"Funcionario"> | string | null
    cargo?: StringFilter<"Funcionario"> | string
    ativo?: BoolFilter<"Funcionario"> | boolean
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    foto?: SortOrderInput | SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    usuarioId?: IntWithAggregatesFilter<"Funcionario"> | number
    foto?: StringNullableWithAggregatesFilter<"Funcionario"> | string | null
    cargo?: StringWithAggregatesFilter<"Funcionario"> | string
    ativo?: BoolWithAggregatesFilter<"Funcionario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    quartos?: QuartoClienteListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quartos?: QuartoClienteOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    quartos?: QuartoClienteListRelationFilter
  }, "id" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type QuartoWhereInput = {
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    id?: IntFilter<"Quarto"> | number
    numero?: IntFilter<"Quarto"> | number
    andar?: IntFilter<"Quarto"> | number
    tipo?: StringFilter<"Quarto"> | string
    status?: StringFilter<"Quarto"> | string
    cliente?: StringNullableFilter<"Quarto"> | string | null
    createdAt?: DateTimeFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeFilter<"Quarto"> | Date | string
    ocupacoes?: QuartoClienteListRelationFilter
    tarefas?: TarefaListRelationFilter
    celulares?: QuartoCelularListRelationFilter
  }

  export type QuartoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    cliente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ocupacoes?: QuartoClienteOrderByRelationAggregateInput
    tarefas?: TarefaOrderByRelationAggregateInput
    celulares?: QuartoCelularOrderByRelationAggregateInput
    _relevance?: QuartoOrderByRelevanceInput
  }

  export type QuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: number
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    andar?: IntFilter<"Quarto"> | number
    tipo?: StringFilter<"Quarto"> | string
    status?: StringFilter<"Quarto"> | string
    cliente?: StringNullableFilter<"Quarto"> | string | null
    createdAt?: DateTimeFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeFilter<"Quarto"> | Date | string
    ocupacoes?: QuartoClienteListRelationFilter
    tarefas?: TarefaListRelationFilter
    celulares?: QuartoCelularListRelationFilter
  }, "id" | "numero">

  export type QuartoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    cliente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuartoCountOrderByAggregateInput
    _avg?: QuartoAvgOrderByAggregateInput
    _max?: QuartoMaxOrderByAggregateInput
    _min?: QuartoMinOrderByAggregateInput
    _sum?: QuartoSumOrderByAggregateInput
  }

  export type QuartoScalarWhereWithAggregatesInput = {
    AND?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    OR?: QuartoScalarWhereWithAggregatesInput[]
    NOT?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quarto"> | number
    numero?: IntWithAggregatesFilter<"Quarto"> | number
    andar?: IntWithAggregatesFilter<"Quarto"> | number
    tipo?: StringWithAggregatesFilter<"Quarto"> | string
    status?: StringWithAggregatesFilter<"Quarto"> | string
    cliente?: StringNullableWithAggregatesFilter<"Quarto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quarto"> | Date | string
  }

  export type QuartoClienteWhereInput = {
    AND?: QuartoClienteWhereInput | QuartoClienteWhereInput[]
    OR?: QuartoClienteWhereInput[]
    NOT?: QuartoClienteWhereInput | QuartoClienteWhereInput[]
    id?: IntFilter<"QuartoCliente"> | number
    checkin?: DateTimeFilter<"QuartoCliente"> | Date | string
    checkout?: DateTimeFilter<"QuartoCliente"> | Date | string
    clienteId?: IntFilter<"QuartoCliente"> | number
    quartoId?: IntFilter<"QuartoCliente"> | number
    createdAt?: DateTimeFilter<"QuartoCliente"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCliente"> | Date | string
    celulares?: QuartoCelularListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
  }

  export type QuartoClienteOrderByWithRelationInput = {
    id?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    celulares?: QuartoCelularOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
    quarto?: QuartoOrderByWithRelationInput
  }

  export type QuartoClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuartoClienteWhereInput | QuartoClienteWhereInput[]
    OR?: QuartoClienteWhereInput[]
    NOT?: QuartoClienteWhereInput | QuartoClienteWhereInput[]
    checkin?: DateTimeFilter<"QuartoCliente"> | Date | string
    checkout?: DateTimeFilter<"QuartoCliente"> | Date | string
    clienteId?: IntFilter<"QuartoCliente"> | number
    quartoId?: IntFilter<"QuartoCliente"> | number
    createdAt?: DateTimeFilter<"QuartoCliente"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCliente"> | Date | string
    celulares?: QuartoCelularListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
  }, "id">

  export type QuartoClienteOrderByWithAggregationInput = {
    id?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuartoClienteCountOrderByAggregateInput
    _avg?: QuartoClienteAvgOrderByAggregateInput
    _max?: QuartoClienteMaxOrderByAggregateInput
    _min?: QuartoClienteMinOrderByAggregateInput
    _sum?: QuartoClienteSumOrderByAggregateInput
  }

  export type QuartoClienteScalarWhereWithAggregatesInput = {
    AND?: QuartoClienteScalarWhereWithAggregatesInput | QuartoClienteScalarWhereWithAggregatesInput[]
    OR?: QuartoClienteScalarWhereWithAggregatesInput[]
    NOT?: QuartoClienteScalarWhereWithAggregatesInput | QuartoClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuartoCliente"> | number
    checkin?: DateTimeWithAggregatesFilter<"QuartoCliente"> | Date | string
    checkout?: DateTimeWithAggregatesFilter<"QuartoCliente"> | Date | string
    clienteId?: IntWithAggregatesFilter<"QuartoCliente"> | number
    quartoId?: IntWithAggregatesFilter<"QuartoCliente"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuartoCliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuartoCliente"> | Date | string
  }

  export type QuartoCelularWhereInput = {
    AND?: QuartoCelularWhereInput | QuartoCelularWhereInput[]
    OR?: QuartoCelularWhereInput[]
    NOT?: QuartoCelularWhereInput | QuartoCelularWhereInput[]
    id?: IntFilter<"QuartoCelular"> | number
    nome?: StringFilter<"QuartoCelular"> | string
    celular?: StringFilter<"QuartoCelular"> | string
    quartoClienteId?: IntFilter<"QuartoCelular"> | number
    quartoId?: IntNullableFilter<"QuartoCelular"> | number | null
    createdAt?: DateTimeFilter<"QuartoCelular"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCelular"> | Date | string
    quartoCliente?: XOR<QuartoClienteScalarRelationFilter, QuartoClienteWhereInput>
    quarto?: XOR<QuartoNullableScalarRelationFilter, QuartoWhereInput> | null
  }

  export type QuartoCelularOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quartoCliente?: QuartoClienteOrderByWithRelationInput
    quarto?: QuartoOrderByWithRelationInput
    _relevance?: QuartoCelularOrderByRelevanceInput
  }

  export type QuartoCelularWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuartoCelularWhereInput | QuartoCelularWhereInput[]
    OR?: QuartoCelularWhereInput[]
    NOT?: QuartoCelularWhereInput | QuartoCelularWhereInput[]
    nome?: StringFilter<"QuartoCelular"> | string
    celular?: StringFilter<"QuartoCelular"> | string
    quartoClienteId?: IntFilter<"QuartoCelular"> | number
    quartoId?: IntNullableFilter<"QuartoCelular"> | number | null
    createdAt?: DateTimeFilter<"QuartoCelular"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCelular"> | Date | string
    quartoCliente?: XOR<QuartoClienteScalarRelationFilter, QuartoClienteWhereInput>
    quarto?: XOR<QuartoNullableScalarRelationFilter, QuartoWhereInput> | null
  }, "id">

  export type QuartoCelularOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuartoCelularCountOrderByAggregateInput
    _avg?: QuartoCelularAvgOrderByAggregateInput
    _max?: QuartoCelularMaxOrderByAggregateInput
    _min?: QuartoCelularMinOrderByAggregateInput
    _sum?: QuartoCelularSumOrderByAggregateInput
  }

  export type QuartoCelularScalarWhereWithAggregatesInput = {
    AND?: QuartoCelularScalarWhereWithAggregatesInput | QuartoCelularScalarWhereWithAggregatesInput[]
    OR?: QuartoCelularScalarWhereWithAggregatesInput[]
    NOT?: QuartoCelularScalarWhereWithAggregatesInput | QuartoCelularScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuartoCelular"> | number
    nome?: StringWithAggregatesFilter<"QuartoCelular"> | string
    celular?: StringWithAggregatesFilter<"QuartoCelular"> | string
    quartoClienteId?: IntWithAggregatesFilter<"QuartoCelular"> | number
    quartoId?: IntNullableWithAggregatesFilter<"QuartoCelular"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"QuartoCelular"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuartoCelular"> | Date | string
  }

  export type TarefaWhereInput = {
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    tipo?: StringFilter<"Tarefa"> | string
    quartoId?: IntFilter<"Tarefa"> | number
    responsavelId?: IntNullableFilter<"Tarefa"> | number | null
    inicio?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    fim?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    status?: StringFilter<"Tarefa"> | string
    observacao?: StringNullableFilter<"Tarefa"> | string | null
    createdAt?: DateTimeFilter<"Tarefa"> | Date | string
    updatedAt?: DateTimeFilter<"Tarefa"> | Date | string
    avaliacao?: XOR<AvaliacaoNullableScalarRelationFilter, AvaliacaoWhereInput> | null
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
    responsavel?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type TarefaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrderInput | SortOrder
    inicio?: SortOrderInput | SortOrder
    fim?: SortOrderInput | SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacao?: AvaliacaoOrderByWithRelationInput
    quarto?: QuartoOrderByWithRelationInput
    responsavel?: UsuarioOrderByWithRelationInput
    _relevance?: TarefaOrderByRelevanceInput
  }

  export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    tipo?: StringFilter<"Tarefa"> | string
    quartoId?: IntFilter<"Tarefa"> | number
    responsavelId?: IntNullableFilter<"Tarefa"> | number | null
    inicio?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    fim?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    status?: StringFilter<"Tarefa"> | string
    observacao?: StringNullableFilter<"Tarefa"> | string | null
    createdAt?: DateTimeFilter<"Tarefa"> | Date | string
    updatedAt?: DateTimeFilter<"Tarefa"> | Date | string
    avaliacao?: XOR<AvaliacaoNullableScalarRelationFilter, AvaliacaoWhereInput> | null
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
    responsavel?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type TarefaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrderInput | SortOrder
    inicio?: SortOrderInput | SortOrder
    fim?: SortOrderInput | SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TarefaCountOrderByAggregateInput
    _avg?: TarefaAvgOrderByAggregateInput
    _max?: TarefaMaxOrderByAggregateInput
    _min?: TarefaMinOrderByAggregateInput
    _sum?: TarefaSumOrderByAggregateInput
  }

  export type TarefaScalarWhereWithAggregatesInput = {
    AND?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    OR?: TarefaScalarWhereWithAggregatesInput[]
    NOT?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tarefa"> | number
    tipo?: StringWithAggregatesFilter<"Tarefa"> | string
    quartoId?: IntWithAggregatesFilter<"Tarefa"> | number
    responsavelId?: IntNullableWithAggregatesFilter<"Tarefa"> | number | null
    inicio?: DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null
    fim?: DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null
    status?: StringWithAggregatesFilter<"Tarefa"> | string
    observacao?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tarefa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tarefa"> | Date | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    tarefaId?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    supervisorId?: IntFilter<"Avaliacao"> | number
    observacao?: StringNullableFilter<"Avaliacao"> | string | null
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    tarefa?: XOR<TarefaScalarRelationFilter, TarefaWhereInput>
    supervisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tarefa?: TarefaOrderByWithRelationInput
    supervisor?: UsuarioOrderByWithRelationInput
    _relevance?: AvaliacaoOrderByRelevanceInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tarefaId?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    supervisorId?: IntFilter<"Avaliacao"> | number
    observacao?: StringNullableFilter<"Avaliacao"> | string | null
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    tarefa?: XOR<TarefaScalarRelationFilter, TarefaWhereInput>
    supervisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "tarefaId">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    tarefaId?: IntWithAggregatesFilter<"Avaliacao"> | number
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    supervisorId?: IntWithAggregatesFilter<"Avaliacao"> | number
    observacao?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutResponsavelInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutResponsavelInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutResponsavelNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutResponsavelNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateInput = {
    foto?: string | null
    cargo: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    usuarioId: number
    foto?: string | null
    cargo: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    usuarioId: number
    foto?: string | null
    cargo: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    cpf: string
    email?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quartos?: QuartoClienteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    email?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quartos?: QuartoClienteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartos?: QuartoClienteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartos?: QuartoClienteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    email?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCreateInput = {
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteCreateNestedManyWithoutQuartoInput
    tarefas?: TarefaCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateInput = {
    id?: number
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteUncheckedCreateNestedManyWithoutQuartoInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUpdateManyWithoutQuartoNestedInput
    tarefas?: TarefaUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUncheckedUpdateManyWithoutQuartoNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoCreateManyInput = {
    id?: number
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoClienteCreateInput = {
    checkin: Date | string
    checkout: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoClienteInput
    cliente: ClienteCreateNestedOneWithoutQuartosInput
    quarto: QuartoCreateNestedOneWithoutOcupacoesInput
  }

  export type QuartoClienteUncheckedCreateInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    clienteId: number
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoClienteInput
  }

  export type QuartoClienteUpdateInput = {
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUpdateManyWithoutQuartoClienteNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutQuartosNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutOcupacoesNestedInput
  }

  export type QuartoClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoClienteNestedInput
  }

  export type QuartoClienteCreateManyInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    clienteId: number
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoClienteUpdateManyMutationInput = {
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularCreateInput = {
    nome: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quartoCliente: QuartoClienteCreateNestedOneWithoutCelularesInput
    quarto?: QuartoCreateNestedOneWithoutCelularesInput
  }

  export type QuartoCelularUncheckedCreateInput = {
    id?: number
    nome: string
    celular: string
    quartoClienteId: number
    quartoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartoCliente?: QuartoClienteUpdateOneRequiredWithoutCelularesNestedInput
    quarto?: QuartoUpdateOneWithoutCelularesNestedInput
  }

  export type QuartoCelularUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoClienteId?: IntFieldUpdateOperationsInput | number
    quartoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularCreateManyInput = {
    id?: number
    nome: string
    celular: string
    quartoClienteId: number
    quartoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoClienteId?: IntFieldUpdateOperationsInput | number
    quartoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarefaCreateInput = {
    tipo: string
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutTarefaInput
    quarto: QuartoCreateNestedOneWithoutTarefasInput
    responsavel?: UsuarioCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateInput = {
    id?: number
    tipo: string
    quartoId: number
    responsavelId?: number | null
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutTarefaInput
  }

  export type TarefaUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutTarefaNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutTarefasNestedInput
    responsavel?: UsuarioUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quartoId?: IntFieldUpdateOperationsInput | number
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutTarefaNestedInput
  }

  export type TarefaCreateManyInput = {
    id?: number
    tipo: string
    quartoId: number
    responsavelId?: number | null
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TarefaUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarefaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quartoId?: IntFieldUpdateOperationsInput | number
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateInput = {
    nota: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefa: TarefaCreateNestedOneWithoutAvaliacaoInput
    supervisor: UsuarioCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    tarefaId: number
    nota: number
    supervisorId: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneRequiredWithoutAvaliacaoNestedInput
    supervisor?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tarefaId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    tarefaId: number
    nota: number
    supervisorId: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tarefaId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type TarefaListRelationFilter = {
    every?: TarefaWhereInput
    some?: TarefaWhereInput
    none?: TarefaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type FuncionarioNullableScalarRelationFilter = {
    is?: FuncionarioWhereInput | null
    isNot?: FuncionarioWhereInput | null
  }

  export type TarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FuncionarioOrderByRelevanceInput = {
    fields: FuncionarioOrderByRelevanceFieldEnum | FuncionarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    foto?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    foto?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    foto?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuartoClienteListRelationFilter = {
    every?: QuartoClienteWhereInput
    some?: QuartoClienteWhereInput
    none?: QuartoClienteWhereInput
  }

  export type QuartoClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuartoCelularListRelationFilter = {
    every?: QuartoCelularWhereInput
    some?: QuartoCelularWhereInput
    none?: QuartoCelularWhereInput
  }

  export type QuartoCelularOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuartoOrderByRelevanceInput = {
    fields: QuartoOrderByRelevanceFieldEnum | QuartoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuartoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    cliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
  }

  export type QuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    cliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    cliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    andar?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type QuartoScalarRelationFilter = {
    is?: QuartoWhereInput
    isNot?: QuartoWhereInput
  }

  export type QuartoClienteCountOrderByAggregateInput = {
    id?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
  }

  export type QuartoClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoClienteMinOrderByAggregateInput = {
    id?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoClienteSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    quartoId?: SortOrder
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

  export type QuartoClienteScalarRelationFilter = {
    is?: QuartoClienteWhereInput
    isNot?: QuartoClienteWhereInput
  }

  export type QuartoNullableScalarRelationFilter = {
    is?: QuartoWhereInput | null
    isNot?: QuartoWhereInput | null
  }

  export type QuartoCelularOrderByRelevanceInput = {
    fields: QuartoCelularOrderByRelevanceFieldEnum | QuartoCelularOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuartoCelularCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoCelularAvgOrderByAggregateInput = {
    id?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrder
  }

  export type QuartoCelularMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoCelularMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoCelularSumOrderByAggregateInput = {
    id?: SortOrder
    quartoClienteId?: SortOrder
    quartoId?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AvaliacaoNullableScalarRelationFilter = {
    is?: AvaliacaoWhereInput | null
    isNot?: AvaliacaoWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type TarefaOrderByRelevanceInput = {
    fields: TarefaOrderByRelevanceFieldEnum | TarefaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TarefaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TarefaAvgOrderByAggregateInput = {
    id?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrder
  }

  export type TarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TarefaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TarefaSumOrderByAggregateInput = {
    id?: SortOrder
    quartoId?: SortOrder
    responsavelId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TarefaScalarRelationFilter = {
    is?: TarefaWhereInput
    isNot?: TarefaWhereInput
  }

  export type AvaliacaoOrderByRelevanceInput = {
    fields: AvaliacaoOrderByRelevanceFieldEnum | AvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    tarefaId?: SortOrder
    nota?: SortOrder
    supervisorId?: SortOrder
  }

  export type TarefaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput> | TarefaCreateWithoutResponsavelInput[] | TarefaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutResponsavelInput | TarefaCreateOrConnectWithoutResponsavelInput[]
    createMany?: TarefaCreateManyResponsavelInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FuncionarioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type TarefaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput> | TarefaCreateWithoutResponsavelInput[] | TarefaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutResponsavelInput | TarefaCreateOrConnectWithoutResponsavelInput[]
    createMany?: TarefaCreateManyResponsavelInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TarefaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput> | TarefaCreateWithoutResponsavelInput[] | TarefaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutResponsavelInput | TarefaCreateOrConnectWithoutResponsavelInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutResponsavelInput | TarefaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: TarefaCreateManyResponsavelInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutResponsavelInput | TarefaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutResponsavelInput | TarefaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutSupervisorInput | AvaliacaoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FuncionarioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    upsert?: FuncionarioUpsertWithoutUsuarioInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutUsuarioInput, FuncionarioUpdateWithoutUsuarioInput>, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TarefaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput> | TarefaCreateWithoutResponsavelInput[] | TarefaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutResponsavelInput | TarefaCreateOrConnectWithoutResponsavelInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutResponsavelInput | TarefaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: TarefaCreateManyResponsavelInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutResponsavelInput | TarefaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutResponsavelInput | TarefaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput> | AvaliacaoCreateWithoutSupervisorInput[] | AvaliacaoUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutSupervisorInput | AvaliacaoCreateOrConnectWithoutSupervisorInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: AvaliacaoCreateManySupervisorInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput | AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutSupervisorInput | AvaliacaoUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    upsert?: FuncionarioUpsertWithoutUsuarioInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutUsuarioInput, FuncionarioUpdateWithoutUsuarioInput>, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutFuncionarioInput = {
    create?: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFuncionarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutFuncionarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFuncionarioInput
    upsert?: UsuarioUpsertWithoutFuncionarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFuncionarioInput, UsuarioUpdateWithoutFuncionarioInput>, UsuarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type QuartoClienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput> | QuartoClienteCreateWithoutClienteInput[] | QuartoClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutClienteInput | QuartoClienteCreateOrConnectWithoutClienteInput[]
    createMany?: QuartoClienteCreateManyClienteInputEnvelope
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
  }

  export type QuartoClienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput> | QuartoClienteCreateWithoutClienteInput[] | QuartoClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutClienteInput | QuartoClienteCreateOrConnectWithoutClienteInput[]
    createMany?: QuartoClienteCreateManyClienteInputEnvelope
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
  }

  export type QuartoClienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput> | QuartoClienteCreateWithoutClienteInput[] | QuartoClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutClienteInput | QuartoClienteCreateOrConnectWithoutClienteInput[]
    upsert?: QuartoClienteUpsertWithWhereUniqueWithoutClienteInput | QuartoClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: QuartoClienteCreateManyClienteInputEnvelope
    set?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    disconnect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    delete?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    update?: QuartoClienteUpdateWithWhereUniqueWithoutClienteInput | QuartoClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: QuartoClienteUpdateManyWithWhereWithoutClienteInput | QuartoClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
  }

  export type QuartoClienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput> | QuartoClienteCreateWithoutClienteInput[] | QuartoClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutClienteInput | QuartoClienteCreateOrConnectWithoutClienteInput[]
    upsert?: QuartoClienteUpsertWithWhereUniqueWithoutClienteInput | QuartoClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: QuartoClienteCreateManyClienteInputEnvelope
    set?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    disconnect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    delete?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    update?: QuartoClienteUpdateWithWhereUniqueWithoutClienteInput | QuartoClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: QuartoClienteUpdateManyWithWhereWithoutClienteInput | QuartoClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
  }

  export type QuartoClienteCreateNestedManyWithoutQuartoInput = {
    create?: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput> | QuartoClienteCreateWithoutQuartoInput[] | QuartoClienteUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutQuartoInput | QuartoClienteCreateOrConnectWithoutQuartoInput[]
    createMany?: QuartoClienteCreateManyQuartoInputEnvelope
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
  }

  export type TarefaCreateNestedManyWithoutQuartoInput = {
    create?: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput> | TarefaCreateWithoutQuartoInput[] | TarefaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutQuartoInput | TarefaCreateOrConnectWithoutQuartoInput[]
    createMany?: TarefaCreateManyQuartoInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type QuartoCelularCreateNestedManyWithoutQuartoInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput> | QuartoCelularCreateWithoutQuartoInput[] | QuartoCelularUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoInput | QuartoCelularCreateOrConnectWithoutQuartoInput[]
    createMany?: QuartoCelularCreateManyQuartoInputEnvelope
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
  }

  export type QuartoClienteUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput> | QuartoClienteCreateWithoutQuartoInput[] | QuartoClienteUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutQuartoInput | QuartoClienteCreateOrConnectWithoutQuartoInput[]
    createMany?: QuartoClienteCreateManyQuartoInputEnvelope
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput> | TarefaCreateWithoutQuartoInput[] | TarefaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutQuartoInput | TarefaCreateOrConnectWithoutQuartoInput[]
    createMany?: TarefaCreateManyQuartoInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type QuartoCelularUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput> | QuartoCelularCreateWithoutQuartoInput[] | QuartoCelularUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoInput | QuartoCelularCreateOrConnectWithoutQuartoInput[]
    createMany?: QuartoCelularCreateManyQuartoInputEnvelope
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
  }

  export type QuartoClienteUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput> | QuartoClienteCreateWithoutQuartoInput[] | QuartoClienteUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutQuartoInput | QuartoClienteCreateOrConnectWithoutQuartoInput[]
    upsert?: QuartoClienteUpsertWithWhereUniqueWithoutQuartoInput | QuartoClienteUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: QuartoClienteCreateManyQuartoInputEnvelope
    set?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    disconnect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    delete?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    update?: QuartoClienteUpdateWithWhereUniqueWithoutQuartoInput | QuartoClienteUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: QuartoClienteUpdateManyWithWhereWithoutQuartoInput | QuartoClienteUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
  }

  export type TarefaUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput> | TarefaCreateWithoutQuartoInput[] | TarefaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutQuartoInput | TarefaCreateOrConnectWithoutQuartoInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutQuartoInput | TarefaUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: TarefaCreateManyQuartoInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutQuartoInput | TarefaUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutQuartoInput | TarefaUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type QuartoCelularUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput> | QuartoCelularCreateWithoutQuartoInput[] | QuartoCelularUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoInput | QuartoCelularCreateOrConnectWithoutQuartoInput[]
    upsert?: QuartoCelularUpsertWithWhereUniqueWithoutQuartoInput | QuartoCelularUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: QuartoCelularCreateManyQuartoInputEnvelope
    set?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    disconnect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    delete?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    update?: QuartoCelularUpdateWithWhereUniqueWithoutQuartoInput | QuartoCelularUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: QuartoCelularUpdateManyWithWhereWithoutQuartoInput | QuartoCelularUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
  }

  export type QuartoClienteUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput> | QuartoClienteCreateWithoutQuartoInput[] | QuartoClienteUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutQuartoInput | QuartoClienteCreateOrConnectWithoutQuartoInput[]
    upsert?: QuartoClienteUpsertWithWhereUniqueWithoutQuartoInput | QuartoClienteUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: QuartoClienteCreateManyQuartoInputEnvelope
    set?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    disconnect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    delete?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    connect?: QuartoClienteWhereUniqueInput | QuartoClienteWhereUniqueInput[]
    update?: QuartoClienteUpdateWithWhereUniqueWithoutQuartoInput | QuartoClienteUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: QuartoClienteUpdateManyWithWhereWithoutQuartoInput | QuartoClienteUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
  }

  export type TarefaUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput> | TarefaCreateWithoutQuartoInput[] | TarefaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutQuartoInput | TarefaCreateOrConnectWithoutQuartoInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutQuartoInput | TarefaUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: TarefaCreateManyQuartoInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutQuartoInput | TarefaUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutQuartoInput | TarefaUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type QuartoCelularUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput> | QuartoCelularCreateWithoutQuartoInput[] | QuartoCelularUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoInput | QuartoCelularCreateOrConnectWithoutQuartoInput[]
    upsert?: QuartoCelularUpsertWithWhereUniqueWithoutQuartoInput | QuartoCelularUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: QuartoCelularCreateManyQuartoInputEnvelope
    set?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    disconnect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    delete?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    update?: QuartoCelularUpdateWithWhereUniqueWithoutQuartoInput | QuartoCelularUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: QuartoCelularUpdateManyWithWhereWithoutQuartoInput | QuartoCelularUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
  }

  export type QuartoCelularCreateNestedManyWithoutQuartoClienteInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput> | QuartoCelularCreateWithoutQuartoClienteInput[] | QuartoCelularUncheckedCreateWithoutQuartoClienteInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoClienteInput | QuartoCelularCreateOrConnectWithoutQuartoClienteInput[]
    createMany?: QuartoCelularCreateManyQuartoClienteInputEnvelope
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutQuartosInput = {
    create?: XOR<ClienteCreateWithoutQuartosInput, ClienteUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutQuartosInput
    connect?: ClienteWhereUniqueInput
  }

  export type QuartoCreateNestedOneWithoutOcupacoesInput = {
    create?: XOR<QuartoCreateWithoutOcupacoesInput, QuartoUncheckedCreateWithoutOcupacoesInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutOcupacoesInput
    connect?: QuartoWhereUniqueInput
  }

  export type QuartoCelularUncheckedCreateNestedManyWithoutQuartoClienteInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput> | QuartoCelularCreateWithoutQuartoClienteInput[] | QuartoCelularUncheckedCreateWithoutQuartoClienteInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoClienteInput | QuartoCelularCreateOrConnectWithoutQuartoClienteInput[]
    createMany?: QuartoCelularCreateManyQuartoClienteInputEnvelope
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
  }

  export type QuartoCelularUpdateManyWithoutQuartoClienteNestedInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput> | QuartoCelularCreateWithoutQuartoClienteInput[] | QuartoCelularUncheckedCreateWithoutQuartoClienteInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoClienteInput | QuartoCelularCreateOrConnectWithoutQuartoClienteInput[]
    upsert?: QuartoCelularUpsertWithWhereUniqueWithoutQuartoClienteInput | QuartoCelularUpsertWithWhereUniqueWithoutQuartoClienteInput[]
    createMany?: QuartoCelularCreateManyQuartoClienteInputEnvelope
    set?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    disconnect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    delete?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    update?: QuartoCelularUpdateWithWhereUniqueWithoutQuartoClienteInput | QuartoCelularUpdateWithWhereUniqueWithoutQuartoClienteInput[]
    updateMany?: QuartoCelularUpdateManyWithWhereWithoutQuartoClienteInput | QuartoCelularUpdateManyWithWhereWithoutQuartoClienteInput[]
    deleteMany?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
  }

  export type ClienteUpdateOneRequiredWithoutQuartosNestedInput = {
    create?: XOR<ClienteCreateWithoutQuartosInput, ClienteUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutQuartosInput
    upsert?: ClienteUpsertWithoutQuartosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutQuartosInput, ClienteUpdateWithoutQuartosInput>, ClienteUncheckedUpdateWithoutQuartosInput>
  }

  export type QuartoUpdateOneRequiredWithoutOcupacoesNestedInput = {
    create?: XOR<QuartoCreateWithoutOcupacoesInput, QuartoUncheckedCreateWithoutOcupacoesInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutOcupacoesInput
    upsert?: QuartoUpsertWithoutOcupacoesInput
    connect?: QuartoWhereUniqueInput
    update?: XOR<XOR<QuartoUpdateToOneWithWhereWithoutOcupacoesInput, QuartoUpdateWithoutOcupacoesInput>, QuartoUncheckedUpdateWithoutOcupacoesInput>
  }

  export type QuartoCelularUncheckedUpdateManyWithoutQuartoClienteNestedInput = {
    create?: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput> | QuartoCelularCreateWithoutQuartoClienteInput[] | QuartoCelularUncheckedCreateWithoutQuartoClienteInput[]
    connectOrCreate?: QuartoCelularCreateOrConnectWithoutQuartoClienteInput | QuartoCelularCreateOrConnectWithoutQuartoClienteInput[]
    upsert?: QuartoCelularUpsertWithWhereUniqueWithoutQuartoClienteInput | QuartoCelularUpsertWithWhereUniqueWithoutQuartoClienteInput[]
    createMany?: QuartoCelularCreateManyQuartoClienteInputEnvelope
    set?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    disconnect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    delete?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    connect?: QuartoCelularWhereUniqueInput | QuartoCelularWhereUniqueInput[]
    update?: QuartoCelularUpdateWithWhereUniqueWithoutQuartoClienteInput | QuartoCelularUpdateWithWhereUniqueWithoutQuartoClienteInput[]
    updateMany?: QuartoCelularUpdateManyWithWhereWithoutQuartoClienteInput | QuartoCelularUpdateManyWithWhereWithoutQuartoClienteInput[]
    deleteMany?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
  }

  export type QuartoClienteCreateNestedOneWithoutCelularesInput = {
    create?: XOR<QuartoClienteCreateWithoutCelularesInput, QuartoClienteUncheckedCreateWithoutCelularesInput>
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutCelularesInput
    connect?: QuartoClienteWhereUniqueInput
  }

  export type QuartoCreateNestedOneWithoutCelularesInput = {
    create?: XOR<QuartoCreateWithoutCelularesInput, QuartoUncheckedCreateWithoutCelularesInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutCelularesInput
    connect?: QuartoWhereUniqueInput
  }

  export type QuartoClienteUpdateOneRequiredWithoutCelularesNestedInput = {
    create?: XOR<QuartoClienteCreateWithoutCelularesInput, QuartoClienteUncheckedCreateWithoutCelularesInput>
    connectOrCreate?: QuartoClienteCreateOrConnectWithoutCelularesInput
    upsert?: QuartoClienteUpsertWithoutCelularesInput
    connect?: QuartoClienteWhereUniqueInput
    update?: XOR<XOR<QuartoClienteUpdateToOneWithWhereWithoutCelularesInput, QuartoClienteUpdateWithoutCelularesInput>, QuartoClienteUncheckedUpdateWithoutCelularesInput>
  }

  export type QuartoUpdateOneWithoutCelularesNestedInput = {
    create?: XOR<QuartoCreateWithoutCelularesInput, QuartoUncheckedCreateWithoutCelularesInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutCelularesInput
    upsert?: QuartoUpsertWithoutCelularesInput
    disconnect?: QuartoWhereInput | boolean
    delete?: QuartoWhereInput | boolean
    connect?: QuartoWhereUniqueInput
    update?: XOR<XOR<QuartoUpdateToOneWithWhereWithoutCelularesInput, QuartoUpdateWithoutCelularesInput>, QuartoUncheckedUpdateWithoutCelularesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvaliacaoCreateNestedOneWithoutTarefaInput = {
    create?: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTarefaInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type QuartoCreateNestedOneWithoutTarefasInput = {
    create?: XOR<QuartoCreateWithoutTarefasInput, QuartoUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutTarefasInput
    connect?: QuartoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutTarefasInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AvaliacaoUncheckedCreateNestedOneWithoutTarefaInput = {
    create?: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTarefaInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AvaliacaoUpdateOneWithoutTarefaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTarefaInput
    upsert?: AvaliacaoUpsertWithoutTarefaInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutTarefaInput, AvaliacaoUpdateWithoutTarefaInput>, AvaliacaoUncheckedUpdateWithoutTarefaInput>
  }

  export type QuartoUpdateOneRequiredWithoutTarefasNestedInput = {
    create?: XOR<QuartoCreateWithoutTarefasInput, QuartoUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutTarefasInput
    upsert?: QuartoUpsertWithoutTarefasInput
    connect?: QuartoWhereUniqueInput
    update?: XOR<XOR<QuartoUpdateToOneWithWhereWithoutTarefasInput, QuartoUpdateWithoutTarefasInput>, QuartoUncheckedUpdateWithoutTarefasInput>
  }

  export type UsuarioUpdateOneWithoutTarefasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    upsert?: UsuarioUpsertWithoutTarefasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTarefasInput, UsuarioUpdateWithoutTarefasInput>, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type AvaliacaoUncheckedUpdateOneWithoutTarefaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTarefaInput
    upsert?: AvaliacaoUpsertWithoutTarefaInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutTarefaInput, AvaliacaoUpdateWithoutTarefaInput>, AvaliacaoUncheckedUpdateWithoutTarefaInput>
  }

  export type TarefaCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<TarefaCreateWithoutAvaliacaoInput, TarefaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: TarefaCreateOrConnectWithoutAvaliacaoInput
    connect?: TarefaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TarefaUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<TarefaCreateWithoutAvaliacaoInput, TarefaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: TarefaCreateOrConnectWithoutAvaliacaoInput
    upsert?: TarefaUpsertWithoutAvaliacaoInput
    connect?: TarefaWhereUniqueInput
    update?: XOR<XOR<TarefaUpdateToOneWithWhereWithoutAvaliacaoInput, TarefaUpdateWithoutAvaliacaoInput>, TarefaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    upsert?: UsuarioUpsertWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput, UsuarioUpdateWithoutAvaliacoesInput>, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TarefaCreateWithoutResponsavelInput = {
    tipo: string
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutTarefaInput
    quarto: QuartoCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutResponsavelInput = {
    id?: number
    tipo: string
    quartoId: number
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutTarefaInput
  }

  export type TarefaCreateOrConnectWithoutResponsavelInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput>
  }

  export type TarefaCreateManyResponsavelInputEnvelope = {
    data: TarefaCreateManyResponsavelInput | TarefaCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutSupervisorInput = {
    nota: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefa: TarefaCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutSupervisorInput = {
    id?: number
    tarefaId: number
    nota: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput>
  }

  export type AvaliacaoCreateManySupervisorInputEnvelope = {
    data: AvaliacaoCreateManySupervisorInput | AvaliacaoCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioCreateWithoutUsuarioInput = {
    foto?: string | null
    cargo: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    foto?: string | null
    cargo: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioCreateOrConnectWithoutUsuarioInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
  }

  export type TarefaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutResponsavelInput, TarefaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<TarefaCreateWithoutResponsavelInput, TarefaUncheckedCreateWithoutResponsavelInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutResponsavelInput, TarefaUncheckedUpdateWithoutResponsavelInput>
  }

  export type TarefaUpdateManyWithWhereWithoutResponsavelInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type TarefaScalarWhereInput = {
    AND?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    OR?: TarefaScalarWhereInput[]
    NOT?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    tipo?: StringFilter<"Tarefa"> | string
    quartoId?: IntFilter<"Tarefa"> | number
    responsavelId?: IntNullableFilter<"Tarefa"> | number | null
    inicio?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    fim?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    status?: StringFilter<"Tarefa"> | string
    observacao?: StringNullableFilter<"Tarefa"> | string | null
    createdAt?: DateTimeFilter<"Tarefa"> | Date | string
    updatedAt?: DateTimeFilter<"Tarefa"> | Date | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutSupervisorInput, AvaliacaoUncheckedUpdateWithoutSupervisorInput>
    create: XOR<AvaliacaoCreateWithoutSupervisorInput, AvaliacaoUncheckedCreateWithoutSupervisorInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutSupervisorInput, AvaliacaoUncheckedUpdateWithoutSupervisorInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutSupervisorInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    tarefaId?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    supervisorId?: IntFilter<"Avaliacao"> | number
    observacao?: StringNullableFilter<"Avaliacao"> | string | null
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type FuncionarioUpsertWithoutUsuarioInput = {
    update: XOR<FuncionarioUpdateWithoutUsuarioInput, FuncionarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutUsuarioInput, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type FuncionarioUpdateWithoutUsuarioInput = {
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutFuncionarioInput = {
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutResponsavelInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutResponsavelInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioCreateOrConnectWithoutFuncionarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type UsuarioUpsertWithoutFuncionarioInput = {
    update: XOR<UsuarioUpdateWithoutFuncionarioInput, UsuarioUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFuncionarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFuncionarioInput, UsuarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type UsuarioUpdateWithoutFuncionarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutResponsavelNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutResponsavelNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type QuartoClienteCreateWithoutClienteInput = {
    checkin: Date | string
    checkout: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoClienteInput
    quarto: QuartoCreateNestedOneWithoutOcupacoesInput
  }

  export type QuartoClienteUncheckedCreateWithoutClienteInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoClienteInput
  }

  export type QuartoClienteCreateOrConnectWithoutClienteInput = {
    where: QuartoClienteWhereUniqueInput
    create: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput>
  }

  export type QuartoClienteCreateManyClienteInputEnvelope = {
    data: QuartoClienteCreateManyClienteInput | QuartoClienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type QuartoClienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: QuartoClienteWhereUniqueInput
    update: XOR<QuartoClienteUpdateWithoutClienteInput, QuartoClienteUncheckedUpdateWithoutClienteInput>
    create: XOR<QuartoClienteCreateWithoutClienteInput, QuartoClienteUncheckedCreateWithoutClienteInput>
  }

  export type QuartoClienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: QuartoClienteWhereUniqueInput
    data: XOR<QuartoClienteUpdateWithoutClienteInput, QuartoClienteUncheckedUpdateWithoutClienteInput>
  }

  export type QuartoClienteUpdateManyWithWhereWithoutClienteInput = {
    where: QuartoClienteScalarWhereInput
    data: XOR<QuartoClienteUpdateManyMutationInput, QuartoClienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type QuartoClienteScalarWhereInput = {
    AND?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
    OR?: QuartoClienteScalarWhereInput[]
    NOT?: QuartoClienteScalarWhereInput | QuartoClienteScalarWhereInput[]
    id?: IntFilter<"QuartoCliente"> | number
    checkin?: DateTimeFilter<"QuartoCliente"> | Date | string
    checkout?: DateTimeFilter<"QuartoCliente"> | Date | string
    clienteId?: IntFilter<"QuartoCliente"> | number
    quartoId?: IntFilter<"QuartoCliente"> | number
    createdAt?: DateTimeFilter<"QuartoCliente"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCliente"> | Date | string
  }

  export type QuartoClienteCreateWithoutQuartoInput = {
    checkin: Date | string
    checkout: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoClienteInput
    cliente: ClienteCreateNestedOneWithoutQuartosInput
  }

  export type QuartoClienteUncheckedCreateWithoutQuartoInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoClienteInput
  }

  export type QuartoClienteCreateOrConnectWithoutQuartoInput = {
    where: QuartoClienteWhereUniqueInput
    create: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput>
  }

  export type QuartoClienteCreateManyQuartoInputEnvelope = {
    data: QuartoClienteCreateManyQuartoInput | QuartoClienteCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type TarefaCreateWithoutQuartoInput = {
    tipo: string
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutTarefaInput
    responsavel?: UsuarioCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutQuartoInput = {
    id?: number
    tipo: string
    responsavelId?: number | null
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutTarefaInput
  }

  export type TarefaCreateOrConnectWithoutQuartoInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput>
  }

  export type TarefaCreateManyQuartoInputEnvelope = {
    data: TarefaCreateManyQuartoInput | TarefaCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type QuartoCelularCreateWithoutQuartoInput = {
    nome: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quartoCliente: QuartoClienteCreateNestedOneWithoutCelularesInput
  }

  export type QuartoCelularUncheckedCreateWithoutQuartoInput = {
    id?: number
    nome: string
    celular: string
    quartoClienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularCreateOrConnectWithoutQuartoInput = {
    where: QuartoCelularWhereUniqueInput
    create: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput>
  }

  export type QuartoCelularCreateManyQuartoInputEnvelope = {
    data: QuartoCelularCreateManyQuartoInput | QuartoCelularCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type QuartoClienteUpsertWithWhereUniqueWithoutQuartoInput = {
    where: QuartoClienteWhereUniqueInput
    update: XOR<QuartoClienteUpdateWithoutQuartoInput, QuartoClienteUncheckedUpdateWithoutQuartoInput>
    create: XOR<QuartoClienteCreateWithoutQuartoInput, QuartoClienteUncheckedCreateWithoutQuartoInput>
  }

  export type QuartoClienteUpdateWithWhereUniqueWithoutQuartoInput = {
    where: QuartoClienteWhereUniqueInput
    data: XOR<QuartoClienteUpdateWithoutQuartoInput, QuartoClienteUncheckedUpdateWithoutQuartoInput>
  }

  export type QuartoClienteUpdateManyWithWhereWithoutQuartoInput = {
    where: QuartoClienteScalarWhereInput
    data: XOR<QuartoClienteUpdateManyMutationInput, QuartoClienteUncheckedUpdateManyWithoutQuartoInput>
  }

  export type TarefaUpsertWithWhereUniqueWithoutQuartoInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutQuartoInput, TarefaUncheckedUpdateWithoutQuartoInput>
    create: XOR<TarefaCreateWithoutQuartoInput, TarefaUncheckedCreateWithoutQuartoInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutQuartoInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutQuartoInput, TarefaUncheckedUpdateWithoutQuartoInput>
  }

  export type TarefaUpdateManyWithWhereWithoutQuartoInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutQuartoInput>
  }

  export type QuartoCelularUpsertWithWhereUniqueWithoutQuartoInput = {
    where: QuartoCelularWhereUniqueInput
    update: XOR<QuartoCelularUpdateWithoutQuartoInput, QuartoCelularUncheckedUpdateWithoutQuartoInput>
    create: XOR<QuartoCelularCreateWithoutQuartoInput, QuartoCelularUncheckedCreateWithoutQuartoInput>
  }

  export type QuartoCelularUpdateWithWhereUniqueWithoutQuartoInput = {
    where: QuartoCelularWhereUniqueInput
    data: XOR<QuartoCelularUpdateWithoutQuartoInput, QuartoCelularUncheckedUpdateWithoutQuartoInput>
  }

  export type QuartoCelularUpdateManyWithWhereWithoutQuartoInput = {
    where: QuartoCelularScalarWhereInput
    data: XOR<QuartoCelularUpdateManyMutationInput, QuartoCelularUncheckedUpdateManyWithoutQuartoInput>
  }

  export type QuartoCelularScalarWhereInput = {
    AND?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
    OR?: QuartoCelularScalarWhereInput[]
    NOT?: QuartoCelularScalarWhereInput | QuartoCelularScalarWhereInput[]
    id?: IntFilter<"QuartoCelular"> | number
    nome?: StringFilter<"QuartoCelular"> | string
    celular?: StringFilter<"QuartoCelular"> | string
    quartoClienteId?: IntFilter<"QuartoCelular"> | number
    quartoId?: IntNullableFilter<"QuartoCelular"> | number | null
    createdAt?: DateTimeFilter<"QuartoCelular"> | Date | string
    updatedAt?: DateTimeFilter<"QuartoCelular"> | Date | string
  }

  export type QuartoCelularCreateWithoutQuartoClienteInput = {
    nome: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quarto?: QuartoCreateNestedOneWithoutCelularesInput
  }

  export type QuartoCelularUncheckedCreateWithoutQuartoClienteInput = {
    id?: number
    nome: string
    celular: string
    quartoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularCreateOrConnectWithoutQuartoClienteInput = {
    where: QuartoCelularWhereUniqueInput
    create: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput>
  }

  export type QuartoCelularCreateManyQuartoClienteInputEnvelope = {
    data: QuartoCelularCreateManyQuartoClienteInput | QuartoCelularCreateManyQuartoClienteInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutQuartosInput = {
    nome: string
    cpf: string
    email?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutQuartosInput = {
    id?: number
    nome: string
    cpf: string
    email?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutQuartosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutQuartosInput, ClienteUncheckedCreateWithoutQuartosInput>
  }

  export type QuartoCreateWithoutOcupacoesInput = {
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutOcupacoesInput = {
    id?: number
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoCreateOrConnectWithoutOcupacoesInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutOcupacoesInput, QuartoUncheckedCreateWithoutOcupacoesInput>
  }

  export type QuartoCelularUpsertWithWhereUniqueWithoutQuartoClienteInput = {
    where: QuartoCelularWhereUniqueInput
    update: XOR<QuartoCelularUpdateWithoutQuartoClienteInput, QuartoCelularUncheckedUpdateWithoutQuartoClienteInput>
    create: XOR<QuartoCelularCreateWithoutQuartoClienteInput, QuartoCelularUncheckedCreateWithoutQuartoClienteInput>
  }

  export type QuartoCelularUpdateWithWhereUniqueWithoutQuartoClienteInput = {
    where: QuartoCelularWhereUniqueInput
    data: XOR<QuartoCelularUpdateWithoutQuartoClienteInput, QuartoCelularUncheckedUpdateWithoutQuartoClienteInput>
  }

  export type QuartoCelularUpdateManyWithWhereWithoutQuartoClienteInput = {
    where: QuartoCelularScalarWhereInput
    data: XOR<QuartoCelularUpdateManyMutationInput, QuartoCelularUncheckedUpdateManyWithoutQuartoClienteInput>
  }

  export type ClienteUpsertWithoutQuartosInput = {
    update: XOR<ClienteUpdateWithoutQuartosInput, ClienteUncheckedUpdateWithoutQuartosInput>
    create: XOR<ClienteCreateWithoutQuartosInput, ClienteUncheckedCreateWithoutQuartosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutQuartosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutQuartosInput, ClienteUncheckedUpdateWithoutQuartosInput>
  }

  export type ClienteUpdateWithoutQuartosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutQuartosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUpsertWithoutOcupacoesInput = {
    update: XOR<QuartoUpdateWithoutOcupacoesInput, QuartoUncheckedUpdateWithoutOcupacoesInput>
    create: XOR<QuartoCreateWithoutOcupacoesInput, QuartoUncheckedCreateWithoutOcupacoesInput>
    where?: QuartoWhereInput
  }

  export type QuartoUpdateToOneWithWhereWithoutOcupacoesInput = {
    where?: QuartoWhereInput
    data: XOR<QuartoUpdateWithoutOcupacoesInput, QuartoUncheckedUpdateWithoutOcupacoesInput>
  }

  export type QuartoUpdateWithoutOcupacoesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutOcupacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoClienteCreateWithoutCelularesInput = {
    checkin: Date | string
    checkout: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutQuartosInput
    quarto: QuartoCreateNestedOneWithoutOcupacoesInput
  }

  export type QuartoClienteUncheckedCreateWithoutCelularesInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    clienteId: number
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoClienteCreateOrConnectWithoutCelularesInput = {
    where: QuartoClienteWhereUniqueInput
    create: XOR<QuartoClienteCreateWithoutCelularesInput, QuartoClienteUncheckedCreateWithoutCelularesInput>
  }

  export type QuartoCreateWithoutCelularesInput = {
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteCreateNestedManyWithoutQuartoInput
    tarefas?: TarefaCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutCelularesInput = {
    id?: number
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteUncheckedCreateNestedManyWithoutQuartoInput
    tarefas?: TarefaUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoCreateOrConnectWithoutCelularesInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutCelularesInput, QuartoUncheckedCreateWithoutCelularesInput>
  }

  export type QuartoClienteUpsertWithoutCelularesInput = {
    update: XOR<QuartoClienteUpdateWithoutCelularesInput, QuartoClienteUncheckedUpdateWithoutCelularesInput>
    create: XOR<QuartoClienteCreateWithoutCelularesInput, QuartoClienteUncheckedCreateWithoutCelularesInput>
    where?: QuartoClienteWhereInput
  }

  export type QuartoClienteUpdateToOneWithWhereWithoutCelularesInput = {
    where?: QuartoClienteWhereInput
    data: XOR<QuartoClienteUpdateWithoutCelularesInput, QuartoClienteUncheckedUpdateWithoutCelularesInput>
  }

  export type QuartoClienteUpdateWithoutCelularesInput = {
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutQuartosNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutOcupacoesNestedInput
  }

  export type QuartoClienteUncheckedUpdateWithoutCelularesInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUpsertWithoutCelularesInput = {
    update: XOR<QuartoUpdateWithoutCelularesInput, QuartoUncheckedUpdateWithoutCelularesInput>
    create: XOR<QuartoCreateWithoutCelularesInput, QuartoUncheckedCreateWithoutCelularesInput>
    where?: QuartoWhereInput
  }

  export type QuartoUpdateToOneWithWhereWithoutCelularesInput = {
    where?: QuartoWhereInput
    data: XOR<QuartoUpdateWithoutCelularesInput, QuartoUncheckedUpdateWithoutCelularesInput>
  }

  export type QuartoUpdateWithoutCelularesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUpdateManyWithoutQuartoNestedInput
    tarefas?: TarefaUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutCelularesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUncheckedUpdateManyWithoutQuartoNestedInput
    tarefas?: TarefaUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type AvaliacaoCreateWithoutTarefaInput = {
    nota: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisor: UsuarioCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutTarefaInput = {
    id?: number
    nota: number
    supervisorId: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutTarefaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
  }

  export type QuartoCreateWithoutTarefasInput = {
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutTarefasInput = {
    id?: number
    numero: number
    andar?: number
    tipo: string
    status?: string
    cliente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ocupacoes?: QuartoClienteUncheckedCreateNestedManyWithoutQuartoInput
    celulares?: QuartoCelularUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoCreateOrConnectWithoutTarefasInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutTarefasInput, QuartoUncheckedCreateWithoutTarefasInput>
  }

  export type UsuarioCreateWithoutTarefasInput = {
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacoes?: AvaliacaoCreateNestedManyWithoutSupervisorInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTarefasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutSupervisorInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTarefasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
  }

  export type AvaliacaoUpsertWithoutTarefaInput = {
    update: XOR<AvaliacaoUpdateWithoutTarefaInput, AvaliacaoUncheckedUpdateWithoutTarefaInput>
    create: XOR<AvaliacaoCreateWithoutTarefaInput, AvaliacaoUncheckedCreateWithoutTarefaInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutTarefaInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutTarefaInput, AvaliacaoUncheckedUpdateWithoutTarefaInput>
  }

  export type AvaliacaoUpdateWithoutTarefaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutTarefaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUpsertWithoutTarefasInput = {
    update: XOR<QuartoUpdateWithoutTarefasInput, QuartoUncheckedUpdateWithoutTarefasInput>
    create: XOR<QuartoCreateWithoutTarefasInput, QuartoUncheckedCreateWithoutTarefasInput>
    where?: QuartoWhereInput
  }

  export type QuartoUpdateToOneWithWhereWithoutTarefasInput = {
    where?: QuartoWhereInput
    data: XOR<QuartoUpdateWithoutTarefasInput, QuartoUncheckedUpdateWithoutTarefasInput>
  }

  export type QuartoUpdateWithoutTarefasInput = {
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutTarefasInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    andar?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cliente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocupacoes?: QuartoClienteUncheckedUpdateManyWithoutQuartoNestedInput
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type UsuarioUpsertWithoutTarefasInput = {
    update: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTarefasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type UsuarioUpdateWithoutTarefasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUpdateManyWithoutSupervisorNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTarefasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutSupervisorNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TarefaCreateWithoutAvaliacaoInput = {
    tipo: string
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quarto: QuartoCreateNestedOneWithoutTarefasInput
    responsavel?: UsuarioCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    tipo: string
    quartoId: number
    responsavelId?: number | null
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TarefaCreateOrConnectWithoutAvaliacaoInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutAvaliacaoInput, TarefaUncheckedCreateWithoutAvaliacaoInput>
  }

  export type UsuarioCreateWithoutAvaliacoesInput = {
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutResponsavelInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    permissao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutResponsavelInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAvaliacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
  }

  export type TarefaUpsertWithoutAvaliacaoInput = {
    update: XOR<TarefaUpdateWithoutAvaliacaoInput, TarefaUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<TarefaCreateWithoutAvaliacaoInput, TarefaUncheckedCreateWithoutAvaliacaoInput>
    where?: TarefaWhereInput
  }

  export type TarefaUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: TarefaWhereInput
    data: XOR<TarefaUpdateWithoutAvaliacaoInput, TarefaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type TarefaUpdateWithoutAvaliacaoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarto?: QuartoUpdateOneRequiredWithoutTarefasNestedInput
    responsavel?: UsuarioUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quartoId?: IntFieldUpdateOperationsInput | number
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutAvaliacoesInput = {
    update: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type UsuarioUpdateWithoutAvaliacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutResponsavelNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    permissao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutResponsavelNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TarefaCreateManyResponsavelInput = {
    id?: number
    tipo: string
    quartoId: number
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateManySupervisorInput = {
    id?: number
    tarefaId: number
    nota: number
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TarefaUpdateWithoutResponsavelInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutTarefaNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quartoId?: IntFieldUpdateOperationsInput | number
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutTarefaNestedInput
  }

  export type TarefaUncheckedUpdateManyWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quartoId?: IntFieldUpdateOperationsInput | number
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutSupervisorInput = {
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefa?: TarefaUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tarefaId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tarefaId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoClienteCreateManyClienteInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoClienteUpdateWithoutClienteInput = {
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUpdateManyWithoutQuartoClienteNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutOcupacoesNestedInput
  }

  export type QuartoClienteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoClienteNestedInput
  }

  export type QuartoClienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoClienteCreateManyQuartoInput = {
    id?: number
    checkin: Date | string
    checkout: Date | string
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TarefaCreateManyQuartoInput = {
    id?: number
    tipo: string
    responsavelId?: number | null
    inicio?: Date | string | null
    fim?: Date | string | null
    status?: string
    observacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularCreateManyQuartoInput = {
    id?: number
    nome: string
    celular: string
    quartoClienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoClienteUpdateWithoutQuartoInput = {
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUpdateManyWithoutQuartoClienteNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutQuartosNestedInput
  }

  export type QuartoClienteUncheckedUpdateWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celulares?: QuartoCelularUncheckedUpdateManyWithoutQuartoClienteNestedInput
  }

  export type QuartoClienteUncheckedUpdateManyWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarefaUpdateWithoutQuartoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutTarefaNestedInput
    responsavel?: UsuarioUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutTarefaNestedInput
  }

  export type TarefaUncheckedUpdateManyWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularUpdateWithoutQuartoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartoCliente?: QuartoClienteUpdateOneRequiredWithoutCelularesNestedInput
  }

  export type QuartoCelularUncheckedUpdateWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoClienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularUncheckedUpdateManyWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoClienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularCreateManyQuartoClienteInput = {
    id?: number
    nome: string
    celular: string
    quartoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCelularUpdateWithoutQuartoClienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarto?: QuartoUpdateOneWithoutCelularesNestedInput
  }

  export type QuartoCelularUncheckedUpdateWithoutQuartoClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCelularUncheckedUpdateManyWithoutQuartoClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    quartoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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