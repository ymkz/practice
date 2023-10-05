import { resolve } from 'node:path'

import type { FastifyStaticOptions } from '@fastify/static'

export { fastifyStatic } from '@fastify/static'

export const fastifyStaticOptions: FastifyStaticOptions = {
  root: [resolve(process.cwd(), 'spec')],
}
