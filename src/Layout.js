import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewHeader from "./NewHeader";

import Loginbutton from "./Loginbutton";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <NewHeader />

      <Loginbutton />
      {location.pathname === "/" ? (
        <div>
          <h1>Welcome! Good evening </h1>
        </div>
      ) : (
        <Outlet />
      )}
      <Loginbutton />
    </>
  );
}
