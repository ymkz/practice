import { config } from '@express-base/config'
import { appServer } from './server/app'
import { metricsServer } from './server/metrics'
import { logger } from './util/logger'

const hostname = process.env.HOSTNAME || 'localhost'
const appServerPort = Number(process.env.APP_PORT) || 3000
const metricsServerPort = Number(process.env.METRICS_PORT) || 9000

const run = () => {
  try {
    appServer.listen(appServerPort, hostname)
    metricsServer.listen(metricsServerPort, hostname)
    logger.info(`ready for app on http://${hostname}:${appServerPort}`)
    logger.info(`ready for metrics on http://${hostname}:${metricsServerPort}`)
    logger.info(`config as ${config.env}`)
  } catch (err) {
    logger.fatal(err, 'server crashed')
    process.exit(1)
  }
}

run()
