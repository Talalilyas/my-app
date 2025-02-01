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
import Profile from "./Profile"; 

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

         
          {Sginup && (
            <Route path="/" element={<LayoutTwow />}>
              <Route index element={<Greeting />} />
            </Route>
          )}

          
          {!login && (
            <Route path="/login" element={<Login setIsLogin={setIsLogin} setUser={setUser} />} />
          )}

          
          {login && (
            <Route path="/login" element={<Profile />} />
          )}

         
          <Route
            path="*"
            element={<Navigate to={Sginup ? "/" : "/login"} />}
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
