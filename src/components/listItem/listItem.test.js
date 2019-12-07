import React from 'react';
import { shallow } from 'enzyme';
import {
  findByDataTest,
  checkProps
} from '../../../Utilities';
import ListItem from './index';

describe('ListItem component', () => {
  describe('Checking prop-types', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Test Title',
        description: 'Test description'
      };
      const propsError = checkProps(
        ListItem,
        expectedProps
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Test Title',
        description: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render without error', () => {
      const component = findByDataTest(
        wrapper,
        'listItemComponent'
      );
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByDataTest(
        wrapper,
        'listItemTitle'
      );
      expect(component.length).toBe(1);
    });

    it('Should render a description', () => {
      const component = findByDataTest(
        wrapper,
        'listItemDescription'
      );
      expect(component.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByDataTest(
        wrapper,
        'listItemComponent'
      );
      expect(component.length).toBe(0);
    });
  });
});
