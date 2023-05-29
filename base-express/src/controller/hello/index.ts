import express from 'express'
import { logger } from '../../util/logger'

export const hello: express.Handler = (req, res) => {
  logger.info({ msg: { nested: 'Hello, World' } })
  return res.status(200).send('Hello, World')
}
