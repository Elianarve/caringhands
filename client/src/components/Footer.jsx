import React from 'react';
// import '../styles/Footer.css'; // Asegúrate de que la ruta es correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 CaringHands - Todos los derechos reservados</p>
        <div className="social-media">
          <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/github-icon.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://facebook.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" className="icon" />
          </a>
          <a href="https://instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" className="icon" />
          </a>
          <a href="mailto:tuEmail@example.com">
            <img src="/path/to/email-icon.png" alt="Email" className="icon" />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
