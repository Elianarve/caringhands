import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Benefits from '../src/pages/benefits/Benefits';
import { describe, it, expect } from 'vitest'; // Importa de vitest

describe('Benefits Component', () => {
    it('renders Benefits title', () => {
        render(<Benefits />);
        const titleElements = screen.getAllByRole('heading', { name: /Beneficios/i });
        expect(titleElements.length).toBeGreaterThan(0); // Verifica que al menos un elemento esté presente
      });

  it('renders all cards', () => {
    render(<Benefits />);
    const cardTitles = [
      'CAMINAR TIENE RECOMPENSA',
      'MEJORAR TUS ANÁLISIS CLÍNICOS TE DA UN DOBLE BENEFICIO',
      'APORTA TU GRANITO PARA SALVAR EL PLANETA',
      'LISTA DE BENEFICIOS',
    ];

    cardTitles.forEach((title) => {
      const cardElement = screen.getByText(title);
      expect(cardElement).toBeTruthy(); // Cambiado a toBeTruthy
    });
  });
  

  
});


