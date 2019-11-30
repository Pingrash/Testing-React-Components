import React from 'react';
import './App.scss';

import Header from './components/header';
import Headline from './components/headline';

const App = () => {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          description='Click the button to render posts.'
        />
      </section>
    </div>
  );
};

export default App;
