import { useState } from 'react';
import Header from './Header';
import PostList from './PostsList';
import Form from './Form';
import data from '../data/data.json';
import '../stylesheet/index.scss';

const App = () => {
  const [posts, setPosts] = useState(data);

  const [name, setName] = useState('');
  const [desc, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [country, setCountry] = useState('');

  const handleInput = (inputId, inputValue) => {
    console.log(`Ha cambiado el ${inputId} con el valor: ${inputValue}`);
    if (inputId === 'country') {
      setCountry(inputValue);
    } else if (inputId === 'name') {
      setName(inputValue);
    } else if (inputId === 'description') {
      setDescription(inputValue);
    } else if (inputId === 'img') {
      setImgUrl(inputValue);
    }
  };
  const handleNewPost = () => {
    console.log('me llamaron');
    const data = {
      id: `e-${posts.length + 1}`,
      name: name,
      country: country,
      imageUrl: imgUrl,
      description: desc,
    };
    posts.push(data);
    setPosts([...posts]);
  };

  return (
    <div>
      <Header title="Las maravillas del mundo" />
      <Form
        handleInput={handleInput}
        handleNewPost={handleNewPost}
        name={name}
        descrip={desc}
        img={imgUrl}
        country={country}
      />
      <PostList postsList={posts} />
    </div>
  );
};

export default App;
