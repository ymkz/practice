import pinoHttp from 'pino-http'
import { logger } from '../util/logger'

export const accesslogMiddleware = pinoHttp({
  logger,
  redact: {
    paths: ['req.remoteAddress', 'req.remotePort', 'res.headers.etag'],
    remove: true,
  },
  autoLogging: {
    ignore: (req) => {
      if (!req.url) {
        return false
      }
      return (
        req.url.includes('/healthz') ||
        req.url.includes('/metrics') ||
        req.url.includes('/favicon.ico') ||
        req.url.includes('/_next')
      )
    },
  },
  customAttributeKeys: {
    responseTime: 'responseTimeMs',
  },
})
