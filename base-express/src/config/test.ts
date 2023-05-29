export const config: DeepReadonly<Config> = {
  env: 'test',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'test',
    database: 'example_db',
  },
} as const
