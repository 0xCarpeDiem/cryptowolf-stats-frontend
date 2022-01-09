import {useEffect} from 'react'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import {initGA} from '@/utils/analytics'

import '@/styles/globals.css'

interface Props extends AppProps {
}

const queryClient = new QueryClient()

export default function App(props: Props) {
  const {Component, pageProps} = props

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
