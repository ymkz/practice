import { Counter } from 'prom-client'

export const errorCounter = new Counter({
  name: 'error_counter',
  help: 'counter of error by code',
  labelNames: ['code'],
})
