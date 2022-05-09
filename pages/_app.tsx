import type { AppProps } from 'next/app'
import * as React from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
