import { useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationlink from "./Navigationlink";
import UserDetails from "./UserDetails";

export default function Greeting() {
  const location = useLocation();
  const {
    firstName,
    lastName,
    email,
    password,
    selectedOption,
    selectyear,
    selectday,
    gender,
  } = location.state || {};

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
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                ></img>
                <span className="d-none d-sm-inline mx-1">
                  {firstName} {lastName}
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li className="dropdown-divider"> </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          <UserDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            selectedOption={selectedOption}
            selectyear={selectyear}
            selectday={selectday}
            gender={gender}
          />
        </div>
      </div>
    </div>
  );
}
