import Input from './Input';
import Radio from './Radio';

const Form = (props) => {
  const handleButton = (ev) => {
    ev.preventDefault();
    props.newPost();
  };
  return (
    <form>
      <Input
        label="Indique el nombre "
        id="name"
        value={props.name}
        handleInput={props.handleInput}
      />
      <Input
        label="Indique el descripcion "
        id="description"
        value={props.desc}
        handleInput={props.handleInput}
      />
      <Input
        label="Indique la url de la img "
        id="img"
        value={props.img}
        handleInput={props.handleInput}
      />
      <Radio
        label="Francia "
        id="country1"
        name="country"
        value="francia"
        handleInput={props.handleInput}
      />
      <Radio
        label="España "
        id="country2"
        name="country"
        value="españa"
        handleInput={props.handleInput}
      />
      <button onClick={handleButton}>Añadir post</button>
    </form>
  );
};
export default Form;
