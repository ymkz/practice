import promBundle from 'express-prom-bundle'

export const metricsMiddleware = promBundle({
  includePath: true,
  includeMethod: true,
  excludeRoutes: ['/health', '/favicon.ico', /\/_next/],
  normalizePath: [],
  percentiles: [0.5, 0.95, 0.99],
  metricType: 'summary',
  maxAgeSeconds: 300,
  ageBuckets: 5,
  promClient: { collectDefaultMetrics: {} },
})
