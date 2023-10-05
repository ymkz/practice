import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { afterAll, beforeAll, describe, test } from 'vitest'

import { register } from '~/register'

describe('spec', () => {
  let app: Awaited<ReturnType<typeof register>>

  beforeAll(async () => {
    app = await register()
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('openapi.yamlが生成されること', async () => {
    const output = resolve(process.cwd(), 'spec/openapi.yaml')
    const data = app.swagger({ yaml: true })
    await writeFile(output, data)
  })
})
