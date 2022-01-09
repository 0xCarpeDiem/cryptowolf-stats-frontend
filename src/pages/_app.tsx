import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

import '../styles/globals.css'

interface Props extends AppProps {
}

const queryClient = new QueryClient()

export default function App(props: Props) {
  const {Component, pageProps} = props
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
