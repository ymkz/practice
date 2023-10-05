import { register } from '~/register'
import { logger } from '~/util/log'

try {
  const app = await register()

  await app.ready()
  await app.listen({ port: 4000 })

  logger.info(`NODE_ENV is ${process.env.NODE_ENV}`)
  logger.info(`APP_ENV is ${process.env.APP_ENV}`)
} catch (err) {
  logger.fatal(err, `SERVER_CRASHED`)
  process.exit(1)
}
