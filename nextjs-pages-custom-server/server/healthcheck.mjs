import { Router } from 'express'

export const healthcheckHandler = Router().get('/health', (_, res) => {
  if (process.env.HEALTHCHECK_OK !== 'true') {
    return res.status(503).send('DOWN')
  }
  return res.status(200).send('UP')
})
