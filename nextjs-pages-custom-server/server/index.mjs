import url from 'node:url'
import express from 'express'
import next from 'next'
import { healthcheckHandler } from './healthcheck.mjs'
import { metricsMiddleware } from './metrics.mjs'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const appPort = 3000
const metricsPort = 3001
const nextServer = next({ dev, hostname, port: appPort })
const handle = nextServer.getRequestHandler()

nextServer.prepare().then(() => {
  const app = express()
  app.disable('x-powered-by')
  app.use(metricsMiddleware)
  app.use(healthcheckHandler)
  app.all('*', (req, res) => handle(req, res, url.parse(req.url, true)))

  const metrics = express()
  metrics.disable('x-powered-by')
  metrics.use(metricsMiddleware.metricsMiddleware)

  app.listen(appPort, () => {
    console.info(`> app ready on NODE_ENV=${process.env.NODE_ENV}`)
    console.info(`> app ready on APP_ENV=${process.env.APP_ENV}`)
    console.info(`> app ready on http://${hostname}:${appPort}`)
  })
  metrics.listen(metricsPort, () => {
    console.info(`> metrics ready on http://${hostname}:${metricsPort}/metrics`)
  })
})
