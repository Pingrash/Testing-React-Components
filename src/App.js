import React from 'react';
import './App.scss';

import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import {
  useDispatch,
  useSelector,
  connect
} from 'react-redux';
import { fetchPosts } from './actions';

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
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  const fetch = () => dispatch(fetchPosts());

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: fetch
  };

  return (
    <div>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          description='Click the button to render posts.'
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 ? (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                description: body
              };
              return (
                <ListItem key={index} {...configListItem} />
              );
            })}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default connect(null, { fetchPosts })(App);
