import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { profile } from '~/config'
import { healthHandler } from '~/presentation/health'
import { helloHandler } from '~/presentation/hello'

const app = new Hono()

app.route('', healthHandler)
app.route('', helloHandler)

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT) || 3000,
  },
  (info) => {
    showRoutes(app)
    console.info(`> ready on NODE_ENV=${process.env.NODE_ENV}`)
    console.info(`> ready on PROFILE=${profile}`)
    console.info(`> ready on http://localhost:${info.port}`)
  },
)
