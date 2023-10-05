import type { FastifyReply, FastifyRequest } from 'fastify'

import { logger } from '~/util/log'
import { incrementWarnCount } from '~/util/metric'

export const notfoundHandler = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  incrementWarnCount('handler.notfound')
  logger.warn(`route ${req.method}:${req.url} not found`)
  return reply.status(404).send()
}
