import { Outlet, Navigate } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";
const LayoutPrivate = () => {  
    const { userAuth } = useUserContext();
  
    return (
      <>
        {userAuth ? (
          <>
            {/* <Nav /> */}
            <main>
              <Outlet />
            </main>
            {/* <Chatbot/> */}
            {/* <Footer /> */}
          </>
        ) : ( 
          <Navigate to="/" />
        )}
      </>
    );
  };
  
  export default LayoutPrivate;