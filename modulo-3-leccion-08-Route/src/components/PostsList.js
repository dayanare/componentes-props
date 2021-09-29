import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';

const PostList = (props) => {
  const renderPosts = () => {
    return props.postsList.map((post, i) => {
      return (
        <li key={i}>
          {/* Asigno  el componente Link con la dinamica compuesta por el 
          id de cada post */}
          <Link className="text--decoration--none" to={`./post/${post.id}`}>
            <PostDetail postItem={post} />
          </Link>
        </li>
      );
    });
  };
  return (
    <section>
      <h2>Listados de post</h2>
      <ul className="cards"> {renderPosts()}</ul>
    </section>
  );
};
export default PostList;
