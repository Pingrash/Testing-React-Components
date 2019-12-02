import React from 'react';
import PropTypes from 'prop-types';

const Headline = props => {
  if (!props.header) {
    return null;
  }

  return (
    <div data-test='headlineComponent'>
      <h1 data-test='header'>{props.header}</h1>
      <p data-test='description'>{props.description}</p>
    </div>
  );
};

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
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

export default Headline;
