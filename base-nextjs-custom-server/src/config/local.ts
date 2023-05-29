export const config: DeepReadonly<Config> = {
  env: 'local',
  mysql: {
    host: 'localhost',
    port: 5432,
    user: 'app',
    database: 'test_db',
  },
} as const
