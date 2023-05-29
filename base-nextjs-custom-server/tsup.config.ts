import { aliasPath } from 'esbuild-plugin-alias-path'
import { resolve } from 'node:path'
import { defineConfig } from 'tsup'

const configEnv = process.env.NODE_CONFIG_ENV || 'local'

export default defineConfig({
  entry: ['src/server/index.ts'],
  format: 'esm',
  clean: true,
  esbuildPlugins: [
    aliasPath({
      alias: {
        '@app/config': resolve(process.cwd(), `src/config/${configEnv}.ts`),
      },
    }),
  ],
})
