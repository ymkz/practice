export const config: DeepReadonly<Config> = {
  env: 'test',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'app',
    database: 'test_db',
  },
} as const
