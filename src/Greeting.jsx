import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationlink from "./Navigationlink";
import UserDetails from "./UserDetails";
import Username from "./Username";
import useLocalStorageState from "use-local-storage-state";
import UserContext  from "./Usercontext"; 

export default function Greeting() {
  const [user, setuser] = useLocalStorageState("user", false);

  console.log(user, "-------user----");

  return (
      <UserContext.Provider value={user}>
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
              <Username />
            </div>
          </div>
          <div className="col py-3">
            <UserDetails />
          </div>
        </div>
      </div>
      </UserContext.Provider>
  );
}
