import React, { useState } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    // Aquí puedes guardar la preferencia en localStorage o en cookies
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleDecline = () => {
    setVisible(false);
    // Puedes guardar esta preferencia si lo deseas
  };

  // Verifica si el usuario ya ha aceptado las cookies
  const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

  if (hasAcceptedCookies) {
    return null;
  }

  return (
    <div className={`cookie-banner ${visible ? 'visible' : ''}`}>
      <p>
        Este sitio web utiliza cookies para mejorar tu experiencia. 
        Al hacer clic en "Aceptar", aceptas nuestro uso de cookies.
      </p>
      <button onClick={handleAccept}>Aceptar</button>
      <button onClick={handleDecline}>Rechazar</button>
    </div>
  );
};

export default CookieBanner;
