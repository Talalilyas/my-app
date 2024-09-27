 import { useLocation  } from "react-router-dom";
const Username = ({user}) => {
  const Location1   = useLocation();


    const {
        firstName,
        lastName,
       
} = Location1.state || {};
  return (
    <div className="dropdown pb-4">
      <a
        href="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="hugenerd"
          width="30"
          height="30"
          className="rounded-circle"
        ></img>
        <span className="d-none d-sm-inline mx-1">
          {user.firstName} {user.lastName}
        </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li className="dropdown-divider"> </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Username;
