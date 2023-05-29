import express from 'express'

export const healthz: express.Handler = (req, res) => {
  return res.status(200).send('OK')
}
