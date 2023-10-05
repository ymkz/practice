import type { onResponseHookHandler, preHandlerHookHandler } from 'fastify'

import { logger } from '~/util/log'
import { context } from '~/util/log/context'
import { incrementAccessCount } from '~/util/metric'

export const initializeContext: preHandlerHookHandler = (_, __, done) => {
  context.run(new Map(), done)
}

export const setReqIdToContext: preHandlerHookHandler = (req, _, done) => {
  context.getStore()?.set('reqId', req.id)
  return done()
}

export const logRequestIncoming: preHandlerHookHandler = (req, _, done) => {
  if (req.url.includes('/healthz')) {
    return done()
  }

  incrementAccessCount(req.url, req.method)
  logger.info(
    {
      req: {
        method: req.method,
        url: req.url,
        query: req.query,
        params: req.params,
        body: req.body,
      },
    },
    'request incoming',
  )

  return done()
}

export const logRequestCompleted: onResponseHookHandler = (
  req,
  reply,
  done,
) => {
  if (req.url.includes('/healthz')) {
    return done()
  }

  logger.info(
    {
      res: {
        statusCode: reply.statusCode,
        responseTimeMs: reply.getResponseTime(),
      },
    },
    'request completed',
  )

  return done()
}
