export const config: DeepReadonly<Config> = {
  env: 'production',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'production',
    database: 'example_db',
  },
} as const
