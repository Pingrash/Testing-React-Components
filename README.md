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

## Testing PropTypes

Uses the Prop-Types library.
Define what data types are expected from each prop received.
This will return a console error if the incorrect data type is used teliing the developer what was passed and what was expected.

### Example

```js
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
