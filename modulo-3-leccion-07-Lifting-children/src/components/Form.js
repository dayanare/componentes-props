import React from 'react';
import Input from './Input';
import Radio from './Radio';

// si te das cuenta estamos dividiendo una web en 2 tipos
//de componentes:
// - componente App o Madre superiora: maneja todos los datos,
//    es lista, es inteligente sabe todo lo que hay que hacer
// - resto de componentes: son menos listos, simplemente:
//   - reciben datos por props y los pintan
//   - escuchan eventos y suben para arriba por lifting
//    los datos, pero ni si quiera procesan los datos,
//   eso que lo haga la madre que es más lista

const Form = (props) => {
  const handleButton = (ev) => {
    ev.preventDefault();
    props.handleNewPost();
  };
  return (
    <form className="border--medium">
      <h2>Formulario</h2>
      <Input
        labelText="Escribe el nombre"
        id="name"
        name="name"
        handleInput={props.handleInput}
      />
      <Input
        labelText="Escribe la url de la img"
        id="img"
        name="img"
        handleInput={props.handleInput}
      />
      <Input
        labelText="Escribe la descripcion"
        id="description"
        name="description"
        handleInput={props.handleInput}
      />
      <Radio
        labelText="España"
        id="country-1"
        name="country"
        value="españa"
        handleInput={props.handleInput}
      />
      <Radio
        labelText="Francia"
        id="country-2"
        name="country"
        value="francia"
        handleInput={props.handleInput}
      />
      <button onClick={handleButton}>Añadir post</button>
    </form>
  );
};

export default Form;
