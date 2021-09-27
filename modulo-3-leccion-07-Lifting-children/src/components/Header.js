import '../stylesheet/header.scss';
const Header = (props) => {
  const handleClick = () => {
    console.log('me han clicado');
  };
  return (
    <div>
      <h1 className="title" onClick={handleClick}>
        {props.title}
      </h1>
      <nav>
        <ul className="display-inline-block">
          <li className="nav__item">Home</li>
          <li className="nav__item">Quienes somos</li>
          <li className="nav__item">Contacto</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
