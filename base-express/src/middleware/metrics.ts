import promBundle from 'express-prom-bundle'

export const metricsMiddleware = promBundle({
  autoregister: false,
  includeMethod: true,
  includePath: true,
  percentiles: [0.5, 0.95, 0.99],
  excludeRoutes: ['/healthz', '/metrics'],
  metricType: 'summary',
  maxAgeSeconds: 300,
  ageBuckets: 5,
  promClient: {
    collectDefaultMetrics: {},
  },
})
