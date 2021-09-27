import '../stylesheet/item.scss';
const PostItem = (props) => {
  return (
    <article className="card">
      <img
        className="card__img"
        src={props.post.imageUrl}
        alt={`Imagen de ${props.post.name}`}
      />
      <h3 className="card__title text--decoration--none">{props.post.name}</h3>
      <p className="card__description">Pais: {props.post.country}</p>
      <p className="card__description">Descripción: {props.post.description}</p>
    </article>
  );
};

export default PostItem;
