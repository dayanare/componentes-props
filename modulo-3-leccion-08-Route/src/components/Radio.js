import React from 'react';

const Input = (props) => {
  const handleInput = (ev) => {
    // subo los datos hacia arriba con lifting
    props.handleInput(ev.target.value, ev.target.name);
    // en inputs de tipo radio necesito trabajar con el name
  };
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form__input-text"
        type="radio"
        name={props.name}
        value={props.value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
