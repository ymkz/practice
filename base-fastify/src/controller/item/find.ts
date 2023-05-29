import { RouteHandlerMethod } from 'fastify'
import { errorCounter } from '../../util/metrics'

export const itemFindController: RouteHandlerMethod = (req, reply) => {
  req.log.info('itemFindController')
  errorCounter.labels('E_ITEM_FIND').inc()
  return reply.send({})
}
