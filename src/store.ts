import { createStore, compose } from 'redux';
import { ApolloClient, HttpLink } from 'apollo-boost';
import { ReduxCache } from 'apollo-cache-redux';
import { rootReducer } from 'src/reducers';

const uri = 'https://api.graph.cool/simple/v1/cjmkvty4w4xpn0162dgwx8si9';

export const store = createStore(
  rootReducer,
  {}, // initial state
  compose(
    // applyMiddleware(client.middleware()),
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

const link = new HttpLink({
  uri
});

const cache = new ReduxCache({
  store
});

export const client = new ApolloClient({
  link,
  cache
});
