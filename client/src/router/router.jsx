import React from 'react'

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
    {
      path: '/contact',
      element: <Contact />
    },
  ]
  },
  {
    path: '/',
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <AboutUs/>,
      },
      {
        path:"home",
        element: <Home/>
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ],
  }
]);

export default router;

    

