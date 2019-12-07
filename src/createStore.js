import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

/*
  Middleware is split into a seperate array from the createStore function so that we can utilise the same middleware in tests.
*/
export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);

export const store = createStoreWithMiddleware(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
