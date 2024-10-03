import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import logo from '../../assets/images/logotipo.png';
import '../nav/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userAuth, setUserAuth } = useUserContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUserAuth(null);
    closeMenu();
    history.push('/');
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <Link to="/">  {'/'}
      <img src={logo} alt="App Logo" className="logo" />
      </Link>
      
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="navLink" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/benefits" className="navLink" onClick={closeMenu}>Beneficios</Link>
        </li>
        {!userAuth ? (
          <>
            <li>
              <Link to="/register" className="navLink" onClick={closeMenu}>Registro</Link>
            </li>
            <li>
              <Link to="/login" className="navLink" onClick={closeMenu}>Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={`/profile/${userAuth.id}`} className="navLink" onClick={closeMenu}>Perfil</Link>
            </li>
            <li>
              <button className="navLink" onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;