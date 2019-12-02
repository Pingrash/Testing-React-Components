import React from 'react';
import './App.scss';

import Header from './components/header';
import Headline from './components/headline';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Blogs',
    email: 'jblogs@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          description='Click the button to render posts.'
          tempArr={tempArr}
        />
      </section>
    </div>
  );
};

export default App;
