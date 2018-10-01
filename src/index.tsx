import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import graphcool from 'src/assets/badge.2cbac90a.svg';

import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { client, store } from './store';

ReactDOM.render(
  <>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  <img className="logo" src={graphcool} alt="graphcool" />
  </>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
