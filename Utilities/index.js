import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/createStore';

/*
  For tests. Finds all of a data-test attribute within a component and returns total.
*/
export const findByDataTest = (component, attribute) => {
  const wrapper = component.find(
    `[data-test='${attribute}']`
  );
  return wrapper;
};

/*
  For tests. Refactored check props function.
*/
export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component
  );
  return propsError;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore);
  return createStoreWithMiddleware(
    rootReducer,
    initialState
  );
};
