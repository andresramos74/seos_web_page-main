import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: new HttpLink({
    uri: 'https://i80os35q99.execute-api.us-east-1.amazonaws.com/dev/graphql'
    //uri: 'https://0s3tz0vjfh.execute-api.us-east-1.amazonaws.com/default/serverless-seos-api-dev-graphql2'
    //uri: 'http://localhost:3001/dev/graphql'
    /* Use this to development stage uri: 'http://localhost:3001/dev/graphql' */
  }),  
})

export default client