import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress options={{showSpinner: false}} />
    <Component {...pageProps} />
  </>
}
