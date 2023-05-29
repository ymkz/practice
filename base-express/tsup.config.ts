import { aliasPath } from 'esbuild-plugin-alias-path'
import { resolve } from 'node:path'
import { defineConfig } from 'tsup'

const configEnv = process.env.NODE_ENV || 'development'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  clean: true,
  esbuildPlugins: [
    aliasPath({
      alias: {
        '@express-base/config': resolve(
          process.cwd(),
          `src/config/${configEnv}.ts`
        ),
      },
    }),
  ],
})
