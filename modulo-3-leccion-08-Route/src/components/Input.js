import React from 'react';

const Input = (props) => {
  const handleChange = (ev) => {
    props.handleInput(ev.target.value, ev.target.id);
  };
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form__input-text"
        type="text"
        id={props.id}
        value={props.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
