import { RouteHandlerMethod } from 'fastify'
import { logger } from '../../util/logger'
import { warnCounter } from '../../util/metrics'

export const itemSubmitController: RouteHandlerMethod = (req, reply) => {
  logger.info('itemSubmitController')
  warnCounter.labels('E_ITEM_SUBMIT').inc()
  return reply.send({})
}
