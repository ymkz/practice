import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { register } from '~/register'

describe('/healthz', () => {
  let app: Awaited<ReturnType<typeof register>>

  beforeAll(async () => {
    app = await register()
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('意図したリクエストの場合、200でレスポンスされること', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/healthz',
    })

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe('OK')
  })

  test('想定しないリクエストメソッドの場合、404でレスポンスされること', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/healthz',
    })

    expect(response.statusCode).toBe(404)
    expect(response.body).toBe('')
  })
})
