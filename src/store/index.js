import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import webSocketAdapter from './webSocketAdapter';

import * as reducers from '../reducer';

export default function configureStore(initialState, endpoint) {
  let logger;
  if (process.env.NODE_ENV === 'production') {
    logger = () => next => action => next(action);
  } else {
    logger = createLogger();
  }
  let reducer = combineReducers(reducers);
  let middlewares = applyMiddleware(
    webSocketAdapter(endpoint),
    thunkMiddleware,
    promiseMiddleware,
    logger,
  );
  let store = middlewares(createStore)(reducer, initialState);
  store.dispatch({ type: '@@start' });
  return store;
}
