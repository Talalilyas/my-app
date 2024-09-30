import { useLocation,  } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationlink from "./Navigationlink";
import UserDetails from "./UserDetails";
import Username from "./Username";
import useLocalStorageState from "use-local-storage-state";

export default function Greeting() {
  const [user, setUser] = useLocalStorageState("user", true);
  const location = useLocation();
  const { userdata } = location.state || {};

  console.log(user, "-------user---");
 
  const currentUser = userdata ? JSON.parse(userdata) : user;
console.log(currentUser)
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <Navigationlink />
            <Username user={currentUser} />
          </div>
        </div>
        <div className="col py-3">
          <UserDetails user={currentUser} />
        </div>
      </div>
    </div>
  );
}
