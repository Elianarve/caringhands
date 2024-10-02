import React from 'react';
import './Home.css'; // Importa el CSS específico para la página Home

const Home = () => {
  return (
    <div>
          <div className="home-content">
        <h1>Bienvenido a Caring Hands</h1>
        <div className="presentation-text">
          <p>
            Caring Hands es tu asistente de salud personal, diseñado para ofrecerte respuestas rápidas y precisas a tus dudas médicas a través de un chatbot inteligente. Además, te ayuda a mantener un registro de tu actividad diaria, especialmente de tus pasos, incentivándote con beneficios únicos como bonos culturales y exoneraciones de impuestos.
          </p>
          <p>
            Nuestra misión es promover un estilo de vida saludable y sostenible, alentándote a caminar más y reducir el uso de transporte público y privado, contribuyendo así a la disminución de tu huella de carbono. ¡Con Caring Hands, cuidar de tu salud y del planeta nunca ha sido tan fácil y gratificante!
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
