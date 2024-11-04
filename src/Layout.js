import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewHeader from "./NewHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NewHeader />

      {location.pathname === "/" ? (
        <div>
          <h1>Welcome! Good evening </h1>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );  
};

export default Layout;
