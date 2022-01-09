import {useQuery} from 'react-query'
import {gql} from 'graphql-request'
import {graphQLClient} from '@/config/GraphQL'
import {HuntingInfos} from '@/models/HuntingInfo'
import {BigNumber} from 'ethers'

export function useGetHuntingInfos() {
  return useQuery('huntingInfos', async () => {
    const {huntingInfos} = await graphQLClient.request(gql`
      query {
        huntingInfos {
          id
          count
          win
          winPerc
          loss
          lossPerc
          totalRewards
        }
      }
    `)
    huntingInfos.forEach((v: any) => {
      v.id = BigNumber.from(v.id).toNumber()
      v.count = parseInt(v.count)
      v.win = parseInt(v.win)
      v.loss = parseInt(v.loss)
    })

    huntingInfos.sort((a:any, b:any) => a.id - b.id)
    return huntingInfos as HuntingInfos
  })
}
