import express from 'express'
import { healthz } from '../controller/healthz'
import { hello } from '../controller/hello'
import { accesslogMiddleware } from '../middleware/accesslog'
import { metricsMiddleware } from '../middleware/metrics'

const appServer = express()

// Settings
appServer.disable('x-powered-by')

// Middlewares
appServer.use(accesslogMiddleware)
appServer.use(metricsMiddleware)

// Routes
appServer.get('/healthz', healthz)
appServer.get('/hello', hello)

// Non matched routes
appServer.all('*', (req, res) => {
  return res.status(404).send('Not Found')
})

export { appServer }
