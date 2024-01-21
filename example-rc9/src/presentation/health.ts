import { Hono } from 'hono'
import { config } from '~/config'

export const healthHandler = new Hono().get('/health', (context) => {
  if (config.up === true) {
    return context.text('UP', { status: 200 })
  }
  return context.text('DOWN', { status: 503 })
})
