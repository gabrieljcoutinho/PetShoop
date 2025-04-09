import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">PET Connect</h1>
      <nav>
        <ul className="navList">
          <li>
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li>
            <Link to="/Loja" className="navLink">Loja</Link>
          </li>
          <li>
            <Link to="/Contato" className="navLink">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;