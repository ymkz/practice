import type { IncomingMessage } from 'node:http'

import { TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox'
import { fastify } from 'fastify'
import { nanoid } from 'nanoid'

import { generalErrorHandler } from '~/handler/_error/general'
import { notfoundHandler } from '~/handler/_error/notfound'
import {
  initializeContext,
  logRequestCompleted,
  logRequestIncoming,
  setReqIdToContext,
} from '~/handler/_hook'
import { debugHandler } from '~/handler/debug'
import { healthzHandler } from '~/handler/healthz'
import { logger } from '~/util/log'
import { fastifySwagger, fastifySwaggerOptions } from '~/util/openapi'
import { fastifyStatic, fastifyStaticOptions } from '~/util/static'

export const genReqId = (req: IncomingMessage): string => {
  const reqIdHeader = req.headers['x-request-id']
  if (reqIdHeader) {
    return [reqIdHeader].flat()[0]
  }
  return nanoid()
}

export const register = async () => {
  const app = fastify({
    logger,
    genReqId,
    disableRequestLogging: true,
  })

  app.setValidatorCompiler(TypeBoxValidatorCompiler)

  app.setNotFoundHandler(notfoundHandler)
  app.setErrorHandler(generalErrorHandler)

  app.addHook('preHandler', initializeContext)
  app.addHook('preHandler', setReqIdToContext)
  app.addHook('preHandler', logRequestIncoming)
  app.addHook('onResponse', logRequestCompleted)

  await app.register(fastifySwagger, fastifySwaggerOptions)
  await app.register(fastifyStatic, fastifyStaticOptions)

  app.register(healthzHandler)
  app.register(debugHandler)

  return app
}
