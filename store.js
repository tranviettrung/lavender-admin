import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

export function initializeStore(state = initialState) {
    return createStore(rootReducer, state, composeWithDevTools(
        applyMiddleware(...middleware)
    ));
}