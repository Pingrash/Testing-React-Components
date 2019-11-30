import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataTest } from '../../../Utilities';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without errors', () => {
    const wrapper = findByDataTest(
      component,
      'headerComponent'
    );
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const wrapper = findByDataTest(component, 'logoText');
    expect(wrapper.length).toBe(1);
  });
});
