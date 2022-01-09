import {GraphQLClient} from 'graphql-request'

const API_URL = 'https://api.thegraph.com/subgraphs/name/0xcarpediem/cryptowolf'

export const graphQLClient = new GraphQLClient(API_URL, {})
