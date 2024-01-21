declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'production' | 'development' | 'test'
    readonly PROFILE: 'local' | 'development' | 'staging' | 'production' | 'test'
    readonly PORT?: string
    readonly DB_PASSWORD: string
  }
}
