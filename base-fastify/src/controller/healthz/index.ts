import { RouteHandlerMethod } from 'fastify'

export const healthzController: RouteHandlerMethod = (req, reply) => {
  return reply.send('OK')
}
