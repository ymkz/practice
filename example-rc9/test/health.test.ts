import { testClient } from 'hono/testing'
import { describe, expect, test } from 'vitest'
import { config } from '~/config'
import { healthHandler } from '~/presentation/health'

describe('/health', () => {
  test('UP', async () => {
    const response = await testClient(healthHandler).health.$get()
    const actual = await response.text()

    expect(actual).toEqual('UP')
  })

  test('DOWN', async () => {
    config.up = false

    const response = await testClient(healthHandler).health.$get()
    const actual = await response.text()

    expect(actual).toEqual('DOWN')
  })
})
