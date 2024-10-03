import React, { useState } from 'react';
import './Benefits.css';



const cardsData = [
  {
    title: 'CAMINAR TIENE RECOMPENSA',
    image: 'src/assets/Bene1.jpg',
    text: 'Camina siempre que sea posible dentro de tus posibilidades y obtendrás beneficios ecónomicos dependendiendo de la distancia mensual recorrida',
  },
  {
    title: 'MEJORAR TUS ANÁLISIS CLÍNICOS TE DA UN DOBLE BENEFICIO',
    image: 'src/assets/Bene5.jpg',
    text: 'Sube tu análisis clínico a tu perfil en el apartado de Análisis y si el siguiente que subas pasados 3 o 6 meses tiene mejoras, obtendrás recompensa económica',
  },
  {
    title: 'APORTA TU GRANITO PARA SALVAR EL PLANETA',
    image: 'src/assets/Bene3.jpg',
    text: 'No necesitas el coche ni la moto para distancias cortas, evitando la contaminación en pequeñas distancias puedes conseguir grandes resultados para la naturaleza',
  },
  {
    title: 'LISTA DE BENEFICIOS',
    image: 'src/assets/Bene4.jpg',
    text: '100-140km mensuales = 50€  , 140-180km mensuales = 100€, 190-300km mensuales = 150€',
  },
];

const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="benefits-container">
      <h1 className="title">Beneficios</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div 
            className="card" 
            key={index} 
            onClick={() => handleCardClick(card)}
            style={{ backgroundImage: `url(${card.image})`,opacity: 0.9 }}
          >
            <h2 className="card-title">{card.title}</h2>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.text}</p>
            <button className="close-btn" onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefits;
