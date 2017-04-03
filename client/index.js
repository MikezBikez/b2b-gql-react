import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Routes from './router'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
