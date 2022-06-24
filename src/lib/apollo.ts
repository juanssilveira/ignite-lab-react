import { ApolloClient, InMemoryCache } from '@apollo/client'

const CONTENT_API_URL = import.meta.env.VITE_API_URL
const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN

export const client = new ApolloClient({
  uri: CONTENT_API_URL,
  headers: {
    'Authorization': 'Bearer ' + API_ACCESS_TOKEN
  },
  cache: new InMemoryCache()
})