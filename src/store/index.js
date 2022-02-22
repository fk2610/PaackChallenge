import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import requestsReducer from './requests/reducer';
import deliveriesReducer from './deliveries/reducer';
import userReducer from './user/reducer';
import deliveriesSagas from './deliveries/sagas';

/**
 * Setup the root reducer.
 */
const reducer = combineReducers({
  request: requestsReducer,
  deliveries: deliveriesReducer,
  user: userReducer,
});

/**
 * Setup the middlewares.
 */
const saga = createSagaMiddleware();
// const enhancer = composeWithDevTools(applyMiddleware(saga));

/**
 * Setup the store.
 */
const store = createStore(reducer, applyMiddleware(saga));

/**
 * Start the sagas.
 */
saga.run(deliveriesSagas);

export default store;
