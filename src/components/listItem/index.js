import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  if (!props.title) {
    return null;
  }

  return (
    <div data-test='listItemComponent'>
      <h2 data-test='listItemTitle'>{props.title}</h2>
      <p data-test='listItemDescription'>
        {props.description}
      </p>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ListItem;
