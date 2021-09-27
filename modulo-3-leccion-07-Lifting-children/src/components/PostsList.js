import PostDetail from './PostDetail';
const PostList = (props) => {
  const renderPosts = () => {
    return props.postsList.map((post, i) => {
      return (
        <li key={i}>
          <PostDetail postItem={post} />
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
