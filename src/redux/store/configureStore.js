/* eslint-disable global-require,no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import Analytics from '../middleware/analytics';
import api from '../middleware/api';

const configureStore = (preloadedState={}) => {
  let middleware = [
    thunk,
    // Analytics,
    api
  ];
  return createStore (
      rootReducer,
      preloadedState,
      compose (
          applyMiddleware(
            ...middleware,
            createLogger()
          )
      )
  );
}

export default configureStore;

