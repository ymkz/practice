import { Type } from '@fastify/type-provider-typebox'

export const reqIdHeader = Type.Object({
  'x-request-id': Type.Optional(Type.String()),
})

export const response400 = Type.String()
export const response404 = Type.String()
export const response500 = Type.String()
