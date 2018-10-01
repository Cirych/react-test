import { combineReducers } from 'redux';
import { apolloReducer } from 'apollo-cache-redux';
import { order } from './order';

export const rootReducer = combineReducers({
  order,
  apollo: apolloReducer
});

export type RootState = ReturnType<typeof rootReducer>;
