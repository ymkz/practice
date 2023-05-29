import { config } from '@app/config'
import express from 'express'
import next from 'next'
import { parse } from 'node:url'
import { validateProcessEnv } from './helper/validate-process-env'
import { accesslogMiddleware } from './middleware/accesslog'
import { metricsMiddleware } from './middleware/metrics'
import { logger } from './util/logger'

const appPort = 3000
const metricsPort = 9000
const dev = process.env.NODE_ENV !== 'production'

const appServer = express()
const metricsServer = express()
const nextServer = next({ dev })
const handle = nextServer.getRequestHandler()

validateProcessEnv()

nextServer
  .prepare()
  .then(() => {
    logger.info(`config for [${config.env}]`)
    logger.info(`build for prodcution [${Boolean(!dev).toString()}]`)

    metricsServer.disable('x-powered-by')
    metricsServer.use(metricsMiddleware.metricsMiddleware)

    appServer.disable('x-powered-by')
    appServer.use(metricsMiddleware)
    appServer.use(accesslogMiddleware)

    appServer.all('*', (req, res) => {
      return handle(req, res, parse(req.url, true))
    })

    metricsServer.listen(metricsPort, () => {
      logger.info(
        `metrics server ready on http://localhost:${metricsPort}/metrics`
      )
    })
    appServer.listen(appPort, () => {
      logger.info(`app server ready on http://localhost:${appPort}`)
    })
  })
  .catch((err) => {
    logger.fatal(err)
  })
