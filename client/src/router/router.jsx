
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Benefits from '../pages/benefits/Benefits';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/benefits',
    element: <Benefits />,
  },
]);

export default router;
