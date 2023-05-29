import { ZodError, z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { logger } from '../util/logger'

const processEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
  NODE_CONFIG_ENV: z
    .enum(['development', 'staging', 'production', 'test', 'local'])
    .optional(),
})

export const validateProcessEnv = () => {
  try {
    processEnvSchema.parse(process.env)
  } catch (err) {
    if (err instanceof ZodError) {
      logger.fatal(fromZodError(err).message)
    } else {
      logger.fatal('unexpected process.env parse failure')
    }
    process.exit(1)
  }
}
