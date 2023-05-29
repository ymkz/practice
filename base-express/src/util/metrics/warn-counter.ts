import { Counter } from 'prom-client'

export const warnCounter = new Counter({
  name: 'warn_counter',
  help: 'counter of warn by code',
  labelNames: ['code'],
})
