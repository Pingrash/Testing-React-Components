import React from 'react';
import { shallow } from 'enzyme';
import {
  findByDataTest,
  checkProps
} from '../../../Utilities';
import SharedButton from './index';

describe('Shared Button component', () => {
  describe('Checking prop-types', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Button Text',
        emitEvent: () => {}
      };
      const propsError = checkProps(
        SharedButton,
        expectedProps
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Button Text',
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      const button = findByDataTest(
        wrapper,
        'buttonComponent'
      );
      expect(button.length).toBe(1);
    });
  });
});
