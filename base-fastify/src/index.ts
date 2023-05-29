import { config } from '@fastify-base/config'
import { fastify } from 'fastify'
import fastifyMetrics from 'fastify-metrics'
import { healthzController } from './controller/healthz'
import { itemFindController } from './controller/item/find'
import { itemSubmitController } from './controller/item/submit'
import { logger } from './util/logger'

const run = async () => {
  const app = fastify({ logger })

  await app.register(fastifyMetrics, {
    routeMetrics: {
      overrides: {
        histogram: {
          buckets: [0.5, 0.95, 0.99],
        },
        summary: {
          percentiles: [0.5, 0.95, 0.99],
        },
      },
    },
  })

  app.get('/healthz', healthzController)
  app.get('/item/find', itemFindController)
  app.post('/item/submit', itemSubmitController)

  await app.listen({ port: 3000 })

  logger.info(`config as ${config.env}`)
}

run().catch((err) => {
  logger.fatal(err, 'server crashed')
  process.exit(1)
})
