declare namespace NodeJS {
  type ProcessEnv = {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly APP_ENV: 'local' | 'dev' | 'stg' | 'prod' | 'test'
  }
}
