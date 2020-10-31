import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './utilities/apollo/client'
import './index.scss';

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>

  )
}

ReactDOM.render(<ApolloApp />, document.getElementById('root'));

