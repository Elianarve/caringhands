import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';

const LayoutPublic = () => { 
  return ( 
      <div>
          <Nav/>
              <Outlet />
          <Footer/>
      </div>
  );
};
export default LayoutPublic;