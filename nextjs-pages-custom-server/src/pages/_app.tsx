import { AppProps } from 'next/app'

// biome-ignore lint/nursery/noDefaultExport: nextjs pages required default export
// biome-ignore lint/style/useNamingConvention: JSX component normally pascal case
export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
