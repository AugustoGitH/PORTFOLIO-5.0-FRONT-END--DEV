
import '@/styles/globals.css'
import iconHead from "@/assets/person-simple.png"

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={iconHead.src} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
