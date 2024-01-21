import { Hono } from 'hono'

export const helloHandler = new Hono().get('/hello', (context) => {
  return context.text('Hello World')
})
