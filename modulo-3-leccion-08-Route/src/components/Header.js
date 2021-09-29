import '../stylesheet/header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// aqui gestionamos unas rutas fijas
const Home = () => {
  return (
    <div className="border--medium">
      <h1>Header: React router con rutas dinámicas</h1>
      <nav>
        Menu:
        <ul className="display-inline-block pl-1">
          <li className="nav__item ">
            <Link className="nav__link" to="/">
              Ir al inicio
            </Link>
          </li>
          <li className="nav__item ">
            <Link className="nav__link" to="/posts">
              Ir a Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
