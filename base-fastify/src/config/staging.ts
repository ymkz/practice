export const config: DeepReadonly<Config> = {
  env: 'staging',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'staging',
    database: 'example_db',
  },
} as const
