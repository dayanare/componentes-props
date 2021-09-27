import '../stylesheet/item.scss';
const PostDetail = (props) => {
  return (
    <article className="card">
      <img src={props.postItem.imageUrl} alt="img" />
      <h3>{props.postItem.name}</h3>
      <p>{props.postItem.country}</p>
      <p>{props.postItem.description}</p>
    </article>
  );
};

export default PostDetail;
