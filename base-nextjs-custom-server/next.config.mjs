import { resolve } from 'node:path'

const configEnv = process.env.NODE_CONFIG_ENV || 'local'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, context) => {
    config.resolve.alias['@app/config'] = resolve(
      process.cwd(),
      `src/config/${configEnv}.ts`
    )
    return config
  },
}

export default nextConfig
