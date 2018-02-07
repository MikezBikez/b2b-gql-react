import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import Routes from './router'

const client = new ApolloClient({
  link: createHttpLink({ 
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  }}
  ),
  cache: new InMemoryCache(),
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
