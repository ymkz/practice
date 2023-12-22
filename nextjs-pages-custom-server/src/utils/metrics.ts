import { Counter } from 'prom-client'

const HelloCounter = new Counter({
  name: 'hello_count',
  help: 'count of hello',
})

export const incrementHelloCounter = () => HelloCounter.inc()
