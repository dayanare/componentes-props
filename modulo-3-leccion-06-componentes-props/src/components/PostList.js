import PostItem from './PostItem';

const PostList = (props) => {
  const renderPosts = () => {
    return props.posts.map((post) => {
      return (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      );
    });
  };

  return (
    <section className="border--medium">
      <h2>Página de Maravillas</h2>
      <ul className="cards mt-1">{renderPosts()}</ul>
    </section>
  );
};

export default PostList;
