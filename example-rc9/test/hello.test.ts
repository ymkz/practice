import { testClient } from 'hono/testing'
import { describe, expect, test } from 'vitest'
import { helloHandler } from '~/presentation/hello'

describe('/hello', () => {
  test('Hello World', async () => {
    const response = await testClient(helloHandler).hello.$get()
    const actual = await response.text()

    expect(actual).toEqual('Hello World')
  })
})
