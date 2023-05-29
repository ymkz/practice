export const config: DeepReadonly<Config> = {
  env: 'development',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'app',
    database: 'test_db',
  },
} as const
