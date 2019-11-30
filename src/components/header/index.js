import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header data-test='headerComponent'>
      <div className='wrapper'>
        <div className='logo'>
          <h3 className='logoText' data-test='logoText'>
            Mackenzie Design
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
