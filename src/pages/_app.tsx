
import '@/styles/globals.css'
import { QueryClientProvider } from 'react-query'

import iconHead from "@/assets/person-simple.png"
import { queryClient } from '@/queries/queryClient'

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={iconHead.src} />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
