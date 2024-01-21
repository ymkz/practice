import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(process.cwd(), 'src'),
    },
  },
  test: {
    environment: 'node',
    restoreMocks: true,
    silent: true,
  },
})
