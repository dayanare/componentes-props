import React, { useState } from 'react';
import Header from './Header';
import PostList from './PostList';
import data from '../data/data.json';
import '../stylesheet/index.scss';

const App = () => {
  const [posts] = useState(data);
  return (
    <div>
      <Header />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
