import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { register } from '~/register'

describe('/debug', () => {
  let app: Awaited<ReturnType<typeof register>>

  beforeAll(async () => {
    app = await register()
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test.each([
    { path: '/debug' },
    { path: '/debug?status=ok' },
    { path: '/debug?id=1' },
    { path: '/debug?unknown=query' },
  ])(
    '期待したリクエストの場合、200でレスポンスされること path=$path',
    async ({ path }) => {
      const response = await app.inject({
        method: 'GET',
        url: path,
      })

      expect(response.statusCode).toBe(200)
      expect(response.body).toBe('DEBUG RESPONSE')
    },
  )

  test.each([{ path: '/debug?id=string' }])(
    '期待しないリクエストクエリの場合、400でレスポンスされること path=$path',
    async ({ path }) => {
      const response = await app.inject({
        method: 'GET',
        url: path,
      })

      expect(response.statusCode).toBe(400)
      expect(response.body).toBe('querystring/id Expected number')
    },
  )

  test('例外が発生した場合、500でレスポンスされること', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/debug?status=error',
    })

    expect(response.statusCode).toBe(500)
    expect(response.body).toBe('カスタムエラー')
  })
})
