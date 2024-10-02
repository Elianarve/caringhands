import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import Home from '../pages/Home';
import LayoutPrivate from '../layout/LayoutPrivate';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Benefits from '../pages/benefits/Benefits';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    children:[
    {
      index: true,
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/benefits',
      element: <Benefits />
    },
    // {
    //   path: '/contact',
    //   element: <Contact />
    // },
  ]
  },
  {
    path: '/',
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      // {
      //   path: 'profile',
      //   element: <Profile />
      // }
    ],
  }
]);

export default router;

    