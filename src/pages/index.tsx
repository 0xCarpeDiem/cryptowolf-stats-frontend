import Head from 'next/head'
import {useGetHuntingInfos} from '@/hooks/useGetHuntingInfos'
import {useGetMeta} from '@/hooks/useGetMeta'
import {Huntings} from '@/components/hunting/Huntings'

export default function Home(): JSX.Element {

  const meta = useGetMeta()
  const huntingInfos = useGetHuntingInfos()

  const isLoading = meta.isLoading || huntingInfos.isLoading

  return (
    <div>
      <Head>
        <title>CryptoWolf - Stats</title>
        <meta name="description" content="CryptoWolf - Stats"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="h-12 bg-gray-700 text-white flex justify-between">
        <div className="p-2">
          <p>CryptoWolf Stats</p>
        </div>
        <div className="p-2">
          {!isLoading &&
            <p>Current Block: {meta.data.block.number}</p>
          }
        </div>
      </header>

      <main className="container mx-auto py-4">
        {isLoading && <p>Loading...</p>}
        {!isLoading && huntingInfos.data &&
          <Huntings huntingInfos={huntingInfos.data}/>
        }
      </main>

      <footer className="h-12 bg-gray-700 text-white text-center">
        CryptoWolf Stats by <a className="underline text-white-600 hover:text-white-800 visited:text-white-600" href="https://twitter.com/0xCarpeDiem">0xCarpeDiem</a>
      </footer>
    </div>
  )
}
