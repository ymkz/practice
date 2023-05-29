import { defineConfig } from '@kubb/core'
import createSwagger from '@kubb/swagger'
import createSwaggerTs from '@kubb/swagger-ts'
import createSwaggerZod from '@kubb/swagger-zod'

export default defineConfig({
  root: '.',
  input: {
    path: './specs/openapi.yaml',
  },
  output: {
    path: './src/generated',
    clean: true,
  },
  hooks: {
    done: 'prettier --write .',
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTs({ output: 'models' }),
    createSwaggerZod({ output: 'schemas' }),
  ],
})
