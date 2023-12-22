import url from 'node:url'
import express from 'express'
import promBundle from 'express-prom-bundle'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(
    promBundle({
      includePath: true,
      includeMethod: true,
      excludeRoutes: ['/healthz', '/favicon.ico', /\/_next/],
      normalizePath: [],
      percentiles: [0.5, 0.95, 0.99],
      metricType: 'summary',
      maxAgeSeconds: 300,
      ageBuckets: 5,
      promClient: { collectDefaultMetrics: {} },
    }),
  )
  server.get('/healthz', (_, res) => {
    return res.status(200).send('OK')
  })
  server.all('*', (req, res) => {
    return handle(req, res, url.parse(req.url, true))
  })
  server.listen(port, () => {
    console.info(`> ready on NODE_ENV=${process.env.NODE_ENV}`)
    console.info(`> ready on APP_ENV=${process.env.APP_ENV}`)
    console.info(`> ready on http://${hostname}:${port}`)
  })
})
