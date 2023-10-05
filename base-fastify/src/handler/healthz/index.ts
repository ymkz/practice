import type { FastifyPluginAsync } from 'fastify'

export const healthzHandler: FastifyPluginAsync = async (app) => {
  app.route({
    method: 'GET',
    url: '/healthz',
    schema: {
      hide: true,
    },
    handler: async (_, reply) => {
      return reply.status(200).send('OK')
    },
  })
}
