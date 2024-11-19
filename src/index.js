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

const LayoutTwow = () => {
  return (
    <div className="cols-lg-4">
      <Outlet />
    </div>
  );
};

export default function App() {
  const [user, setUser] = useLocalStorageState("user", null);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          {!isLogin && (
            <Route path="/" element={<Layout />}>
              <Route
                path="login"
                element={<FromCard setIsLogin={setIsLogin} setUser={setUser} />}
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Route>
          )}

          {isLogin && (
            <Route path="/" element={<LayoutTwow />}>
              <Route path="/" element={<Greeting />} />
            </Route>
          )}

          {/* Handle all other paths */}
          <Route
            path="*"
            element={<Navigate to={isLogin ? "/" : "/login"} />}
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
