import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logotipo.png';
import '../nav/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <img src={logo} alt="App Logo" className="logo" />
      
      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icono de menú hamburguesa */}
      </button>

      {/* Enlaces de navegación */}
      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="navLink" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/benefits" className="navLink" onClick={closeMenu}>Beneficios</Link>
        </li>
        <li>
          <Link to="/register" className="navLink" onClick={closeMenu}>Registro</Link>
        </li>
        <li>
          <Link to="/Login" className="navLink" onClick={closeMenu}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
