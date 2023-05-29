export const config: DeepReadonly<Config> = {
  env: 'development',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'development',
    database: 'example_db',
  },
} as const
