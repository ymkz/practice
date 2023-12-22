import { Head, Html, Main, NextScript } from 'next/document'

// biome-ignore lint/nursery/noDefaultExport: nextjs pages required default export
export default function CustomDocument() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
