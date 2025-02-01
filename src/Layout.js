import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewHeader from "./NewHeader";
import Login from "./Login";
import Loginbutton from "./Loginbutton";
import { useNavigate } from "react-router-dom";
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
