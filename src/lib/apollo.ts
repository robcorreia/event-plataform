import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4w1thco22k001t74w32e9sv/master',
  cache: new InMemoryCache()
})