
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { Map } from 'immutable';
import screenTracking from './ScreenTracking';
import reducers from '../reducers';

const middlewares = [];
middlewares.push(thunkMiddleware);
middlewares.push(screenTracking);

if (__DEV__) {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}

const initialState = Map();

export const store = createStore(
    reducers,
    initialState,
    // composeWithDevTools(applyMiddleware(...middlewares))
);