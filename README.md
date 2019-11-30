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
