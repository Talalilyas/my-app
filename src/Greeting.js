import { useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Greeting() {
  const location = useLocation();
  const { firstName, lastName, email } = location.state;
  const isSignUpRoute = location.pathname === "/NewHeader";

  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "310px", height:"820px" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32"></svg>
        <span class="fs-4">Sidebar</span>
      </a>

      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Customers
          </a>
        </li>
      </ul>

      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          ></img>
          <strong>{firstName} {lastName}</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <div class="dropdown-item" >
              New project...
            </div>
          </li>
          <li>
            <div class="dropdown-item" >
              Settings
            </div>
          </li>
          <li>
            <div class="dropdown-item" >
              Profile
            </div>
          </li>
          <li>
            <hr class="dropdown-divider"></hr>
          </li>

          <li>
            <div class="dropdown-item" >
              Sign out
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  );
}
