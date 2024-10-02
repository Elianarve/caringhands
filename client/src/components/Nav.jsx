import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/caringHandsLogo.jpg';
// import '../styles/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      {/* <img src={require('../assets/images/caringHandsLogo.jpg')}  alt="App Logo" className="logo" /> */}
      
      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icono de menú hamburguesa */}
      </button>

      {/* Enlaces de navegación */}
      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="navLink" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/benefits" className="navLink" onClick={() => setIsOpen(false)}>Beneficios</Link>
        </li>
        <li>
          <Link to="/user" className="navLink" onClick={() => setIsOpen(false)}>Usuario</Link>
        </li>
        <li>
          <Link to="/register" className="navLink" onClick={() => setIsOpen(false)}>Registro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

