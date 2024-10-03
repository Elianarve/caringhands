// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Esto asegura que jsdom sea el entorno de prueba
  },
});
