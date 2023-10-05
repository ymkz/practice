const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus')
const {
  FastifyInstrumentation,
} = require('@opentelemetry/instrumentation-fastify')
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http')
const { PinoInstrumentation } = require('@opentelemetry/instrumentation-pino')
const { Resource } = require('@opentelemetry/resources')
const { NodeSDK } = require('@opentelemetry/sdk-node')
const {
  SemanticResourceAttributes,
} = require('@opentelemetry/semantic-conventions')

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'base-fastify',
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: process.env.APP_ENV,
  }),
  instrumentations: [
    new PinoInstrumentation(),
    new HttpInstrumentation(),
    new FastifyInstrumentation(),
  ],
  metricReader: new PrometheusExporter({ port: 4001 }),
})

sdk.start()
