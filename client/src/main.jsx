import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import UserContextProvider from './context/UserContext';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserContextProvider>
          <RouterProvider router={router} />
      </UserContextProvider>
  </React.StrictMode>
);