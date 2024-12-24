import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html suppressHydrationWarning lang="en">
      <Head>
        <title>Californica Nursery</title>
        <meta name="description" content="Long Beach California Native Plant Landscaping and Nursery" />
        <meta property="og:title" content="Californica Nursery" />
        <meta property="og:description" content="Long Beach California Native Plant Landscaping and Nursery" />
        <meta property="og:image" content="Glyph_Logo_Simplified_nobackground.png" />
        <meta property="og:url" content="https://www.californicanursery.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
