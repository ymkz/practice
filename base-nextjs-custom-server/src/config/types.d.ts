type Config = {
  env: 'development' | 'staging' | 'production' | 'test' | 'local'
  mysql: {
    host: string
    port: number
    user: string
    database: string
  }
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}

declare module '@app/config' {
  export const config: DeepReadonly<Config>
}
