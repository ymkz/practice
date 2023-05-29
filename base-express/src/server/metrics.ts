import express from 'express'
import { metricsMiddleware } from '../middleware/metrics'

const metricsServer = express()

// Settings
metricsServer.disable('x-powered-by')

// Middlewares
metricsServer.use(metricsMiddleware.metricsMiddleware)

export { metricsServer }
