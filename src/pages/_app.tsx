
import '@/styles/globals.css'
import iconHead from "@/assets/person-simple.png"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <link rel="icon" type="image/png" href={iconHead.src} />
      <Component {...pageProps} />
    </>
  )
}
