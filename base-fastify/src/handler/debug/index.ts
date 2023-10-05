import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { Type } from '@fastify/type-provider-typebox'

import { AppError } from '~/domain/error'
import { reqIdHeader, response400, response500 } from '~/domain/schema'
import { logger } from '~/util/log'

const requestQuery = Type.Object({
  status: Type.Optional(Type.String()),
  id: Type.Optional(Type.Number()),
})

const response200 = Type.String()

export const debugHandler: FastifyPluginAsyncTypebox = async (app) => {
  app.route({
    method: 'GET',
    url: '/debug',
    schema: {
      headers: reqIdHeader,
      querystring: requestQuery,
      response: {
        200: response200,
        400: response400,
        500: response500,
      },
    },
    handler: async (req, reply) => {
      logger.info('DEBUG DEBUG DEBUG')

      if (req.query.status === 'error') {
        throw new AppError('カスタムエラー')
      }

      return reply.status(200).send('DEBUG RESPONSE')
    },
  })
}
