import React from 'react';

const PostId = (props) => {
  console.log(props.routeData);
  //Aqui recibimos por props el id, y este debemos buscarlo en el listado
  //de post y pintarlo
  return (
    <section className="border--medium">
      <h2>Detalle de Post</h2>
      <article className="card mt-1">
        {/* <img
          className="card__img"
          src={props.post.imageUrl}
          alt={`Imagen de ${props.post.name}`}
        />
        <h3 className="card__title text--decoration--none">
          {props.post.name}
        </h3>
        <p className="card__description">
          Descripción: {props.post.description}
       </p>*/}
      </article>
    </section>
  );
};

export default PostId;
