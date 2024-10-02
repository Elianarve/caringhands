import React from 'react';
import '../footer/Footer.css';
import ig from '../../assets/images/Instagram.svg';
import email from '../../assets/images/Email.svg';
import ws from '../../assets/images/WhatsApp.svg';
import fcb from '../../assets/images/Facebook.svg';
import github from '../../assets/images/Github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="icon" />
          </a>
          <a href="https://facebook.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src={fcb} alt="Facebook" className="icon" />
          </a>
          <a href="https://instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className="icon" />
          </a>
          <a href="mailto:tuEmail@example.com">
            <img src={email} alt="Email" className="icon" />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
            <img src={ws} alt="WhatsApp" className="icon" />
          </a>
        </div>
        <p>&copy; 2024 CaringHands - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
