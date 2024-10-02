import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/nav/Nav';
import Chatbot from '../components/chatbot/Chatbot';

const LayoutPublic = () => { 
  return ( 
      <div>
          <Nav/>
              <Outlet />
              <Chatbot/>
          <Footer/>
      </div>
  );
};
export default LayoutPublic;