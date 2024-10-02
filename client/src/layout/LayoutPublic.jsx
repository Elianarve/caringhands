import React from 'react'

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