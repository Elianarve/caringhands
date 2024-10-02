import React, { useState } from 'react';
import './Benefits.css';

const cardsData = [
  {
    title: 'Card 1',
    image: 'https://via.placeholder.com/300',
    text: 'Aquí el texto 1, hsgsdghdjdjfdjfdjfdjffjdhfdjhfdjhfdjhfd',
  },
  {
    title: 'Card 2',
    image: 'https://via.placeholder.com/300',
    text: 'TEXTO 2.',
  },
  {
    title: 'Card 3',
    image: 'https://via.placeholder.com/300',
    text: 'TEXTO 3.',
  },
  {
    title: 'Card 4',
    image: 'https://via.placeholder.com/300',
    text: 'TEXTO 4.',
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
            style={{ backgroundImage: `url(${card.image})` }}
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
