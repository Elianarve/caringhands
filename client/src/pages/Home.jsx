import React from 'react';
import './Home.css';
import video from '../assets/images/video-caringhands.mp4';

const Home = () => {
  return (
    <>
    <div className='general-container'>
        <div className="home-content">
        <h1 className='title-home'>Bienvenidos a Caring Hands</h1>
        <div className="presentation-text">
        <p className='paragraph-home first-paragraph'>
            Caring Hands es tu asistente de salud personal, diseñado para ofrecerte respuestas rápidas y precisas a tus dudas médicas a través de un chatbot inteligente. Además, te ayuda a mantener un registro de tu actividad diaria, especialmente de tus pasos, incentivándote con beneficios únicos como bonos culturales y exoneraciones de impuestos.
          </p> <br />
          <p className='paragraph-home second-paragraph'>
            Nuestra misión es promover un estilo de vida saludable y sostenible, alentándote a caminar más y reducir el uso de transporte público y privado, contribuyendo así a la disminución de tu huella de carbono. ¡Con Caring Hands, cuidar de tu salud y del planeta nunca ha sido tan fácil y gratificante!
          </p>
        </div>     
    </div>
     <div className="video-container">
     <video 
       className="intro-video" 
       controls 
       src={video} 
       alt="video salud"
     >
       Tu navegador no soporta la etiqueta de video.
     </video>
     </div>
     </div>
     </>
  );
};

export default Home;
