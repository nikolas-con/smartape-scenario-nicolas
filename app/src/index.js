import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './utilities/apollo/client'

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>

  )
}

ReactDOM.render(<ApolloApp />, document.getElementById('root'));

