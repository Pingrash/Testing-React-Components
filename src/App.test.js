import React from 'react';
import { mount } from 'enzyme';
import { findByDataTest, testStore } from '../Utilities';
import App from './App';
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  ).childAt(0);
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Test Title 1',
          body: 'Example text'
        },
        {
          title: 'Test Title 2',
          body: 'Example text'
        },
        {
          title: 'Test Title 3',
          body: 'Example text'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByDataTest(
      wrapper,
      'appComponent'
    );
    expect(component.length).toBe(1);
  });
});
