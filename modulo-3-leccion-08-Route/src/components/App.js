import { useState } from 'react';
//incluimos estos componentes para gestion de router
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from './Header';
import PostList from './PostsList';
import Form from './Form';
import Home from './Home';

//este es un nuevo componente que me muestra solo el detalle de un post
import PostId from './PostId.js';
import data from '../data/data.json';
import '../stylesheet/index.scss';

const App = () => {
  const [posts, setPosts] = useState(data);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [country, setCountry] = useState('');
  const [img, setImg] = useState('');

  const routeData = useRouteMatch('/posts/:postId');
  const postId = routeData !== null ? routeData.params.postId : '';
  console.log(postId);

  const handleInput = (value, id) => {
    if (id === 'name') {
      setName(value);
    } else if (id === 'description') {
      setDesc(value);
    } else if (id === 'description') {
      setDesc(value);
    } else if (id === 'country') {
      setCountry(value);
    } else if (id === 'img') {
      setImg(value);
    }
  };

  const newPost = () => {
    const data = {
      id: `e-${posts.length + 1}`,
      name: name,
      country: country,
      imageUrl: img,
      description: desc,
    };
    posts.push(data);
    setPosts([...posts]);
  };

  return (
    <div>
      <Header title="Las maravillas del mundo" />
      <Form
        name={name}
        desc={desc}
        img={img}
        handleInput={handleInput}
        newPost={newPost}
      />
      {/* Hacemos uso del Switch para gestionar que voya mostrar 
dependiendo de la ruta selecciona por la usuario*/}
      <Switch>
        {/* El exact entra en esta ruta si y solo si es exactamente 
        igual a la indicada*/}
        <Route path="/" exact>
          {/* aquí puedo poner todo el código JSX que quiera */}
          <Home />
        </Route>

        <Route path="/posts">
          <PostList postsList={posts} />
        </Route>

        {/* Con este path declararmos una ruta dinámica */}
        <Route path="/post/:postId">
          <PostId routeData={postId} />
          <h2>Holaaaa</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
