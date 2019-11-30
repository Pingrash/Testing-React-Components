import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByDataTest } from '../../../Utilities';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Has props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        description: 'Test description'
      };
      component = setup(props);
    });

    it('Renders without errors', () => {
      const wrapper = findByDataTest(
        component,
        'headlineComponent'
      );
      expect(wrapper.length).toBe(1);
    });

    it('Should render a h1', () => {
      const h1 = findByDataTest(component, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a paragraph', () => {
      const paragraph = findByDataTest(
        component,
        'description'
      );
      expect(paragraph.length).toBe(1);
    });
  });

  describe('Has no props', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it('Should not render', () => {
      const wrapper = findByDataTest(
        component,
        'headlineComponent'
      );
      expect(wrapper.length).toBe(0);
    });
  });
});
