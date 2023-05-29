import { aliasPath } from 'esbuild-plugin-alias-path'
import { resolve } from 'node:path'
import { defineConfig } from 'tsup'

const environment = process.env.NODE_ENV || 'development'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  clean: true,
  esbuildPlugins: [
    aliasPath({
      alias: {
        '@fastify-base/config': resolve(
          process.cwd(),
          `src/config/${environment}.ts`
        ),
      },
    }),
  ],
})
