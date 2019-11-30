import React from 'react';

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

export default Headline;
