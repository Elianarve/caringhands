import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://chatbot.politecoast-0202b033.germanywestcentral.azurecontainerapps.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    
  },
  test: {
    globals: true, // Habilita el uso de describe y test sin necesidad de importar
    environment: 'jsdom', // Usa jsdom como entorno para pruebas de componentes React
  },
});
