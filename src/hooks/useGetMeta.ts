import {useQuery} from 'react-query'
import {gql} from 'graphql-request'
import {graphQLClient} from '@/config/GraphQL'

export function useGetMeta() {
  return useQuery('meta', async () => {
    const {_meta} = await graphQLClient.request(gql`
      query {
        _meta {
          block {
            number
          }
          hasIndexingErrors
        }
      }
    `)
    return _meta
  })
}
