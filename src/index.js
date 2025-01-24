

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Greeting from "./Greeting";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./Usercontext";
import Login from "./Login";
import Profile from "./Profile"; // Import the Profile component

const LayoutTwow = () => (
  <div className="cols-lg-4">
    <Outlet />
  </div>
);

export default function App() {
  const [user, setUser] = useLocalStorageState("user", null);
  const [Sginup, setSginup] = useLocalStorageState("Sginup", false);
  const [login, setIsLogin] = useLocalStorageState("isLogin", false);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          {/* Signup Routes */}
          {!Sginup && (
            <Route path="/" element={<Layout />}>
              <Route
                path="Sginup"
                element={<FromCard setIsLogin={setSginup} setUser={setUser} />}
              />
              <Route index element={<Navigate to="Sginup" />} />
            </Route>
          )}

          {/* Greeting Routes */}
          {Sginup && (
            <Route path="/" element={<LayoutTwow />}>
              <Route index element={<Greeting />} />
            </Route>
          )}

          {/* Login Routes */}
          {!login && (
            <Route path="/Loginbutton" element={<Layout />}>
              <Route
                path="Login"
                element={<Login setIsLogin={setIsLogin} setUser={setUser} />}
              />
              <Route index element={<Navigate to="Login" />} />
            </Route>
          )}

          {/* Profile Route */}
          {login && (
            <Route path="/profile" element={<LayoutTwow />}>
              <Route index element={<Profile />} />
            </Route>
          )}

          {/* Default Redirect */}
          <Route
            path="/"
            element={<Navigate to={Sginup ? "/" : "/Loginbutton/Login"} />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
