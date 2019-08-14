import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './ducks';

const middlewares = [__DEV__ && logger];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);