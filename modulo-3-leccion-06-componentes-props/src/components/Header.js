import '../stylesheet/header.scss';
const Header = () => {
  return (
    <div>
      <h1 className="title">Listado de Maravillas del mundo </h1>
      <nav>
        Menu:
        <ul className="display-inline-block pl-1">
          <li className="nav__item ">Home</li>
          <li className="nav__item ">Quiénes somos</li>
          <li className="nav__item ">Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
