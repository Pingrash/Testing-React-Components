# Creating An App Using Testing Methods

## About

## Starting Off

### Dev Dependencies

```console
yarn add -D enzyme enzyme-adaptor-react-16 jest jest-enzyme
```

### Configuring Enzyme

Create a new file in the src folder called 'setupTests.js'.

The file should include the following:

```js
// setupTests.js
import Enzyme from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdaptor(),
  disableLifecycleMethods: true
});
```

## Testing The Component

Some basic checks for a component include:

- Rendering without errors
- Has/Hasn't props
- Renders the correct amount of each section of the component

Each section of tests should be set inside of describe blocks to improve readability. Describe blocks can be nested inside of each other.

### Examples

```js
import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

// Headline component describe
describe('Headline Component', () => {
  // Test for props.
  describe('Has props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        description: 'Test description'
      };
      component = setup(props);
    });

    // Check that the component renders without errors.
    it('Renders without errors', () => {
      const wrapper = findByDataTest(
        component,
        'headlineComponent'
      );
      expect(wrapper.length).toBe(1);
    });

    // Check that a header h1 is rendered and that there is only one.
    it('Should render a h1', () => {
      const h1 = findByDataTest(component, 'header');
      expect(h1.length).toBe(1);
    });

    // Check that a description paragraph is rendered and that there is only one.
    it('Should render a paragraph', () => {
      const paragraph = findByDataTest(
        component,
        'description'
      );
      expect(paragraph.length).toBe(1);
    });
  });

  // Test that if there is no props, then compoenent is not rendered.
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
```

## Testing PropTypes

Uses the Prop-Types library.
Define what data types are expected from each prop received.
This will return a console error if the incorrect data type is used teliing the developer what was passed and what was expected.

### Dependencies

```console
yarn add -D check-prop-types
```

### Example

```js
// index.js (Headline Component)

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,

  // Array of objects example
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};
```

```js
// PropTypes tests
describe('Check PropTypes', () => {
  it('Should not throw a warning', () => {
    // An object of all props with an appropriate type example for the component.
    const expectedProps = {
      header: 'Test header',
      description: 'Test description',
      tempArr: [
        {
          fName: 'test fName',
          lName: 'test lName',
          email: 'test@email.com',
          age: 29,
          onlineStatus: true
        }
      ]
    };

    // Pass the component and expectedProps object into the checkProps function for testing.
    const propsError = checkProps(Headline, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
```

**_Note_** - checkProps is a utility function.
Function is as follows:

```js
import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component
  );
  return propsError;
};
```
