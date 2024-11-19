import { Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import NewHeader from "./NewHeader";
import Login from "./Login"; 
import FromCard from "./Fromcard"; 
import { Button} from "antd";

const Layout = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <>
      <NewHeader />
      {location.pathname === "/" ? (
        <div>
          <h1>Welcome! Good evening </h1>
          <Button onClick={() => setIsLogin(true)

          }>Go to Login</Button>
          <Button onClick={() => setIsLogin(false)}>Go to Sign Up</Button>
        </div>
      ) : (
        
        isLogin ? (
          <Login /> 
        ) : (
          <FromCard /> // Show Sign Up component (FromCard)
        )
      )}
      <Outlet />
    </>
  );
};

export default Layout;
