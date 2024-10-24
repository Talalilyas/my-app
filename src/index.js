import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate, 
} from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Greeting from "./Greeting";

import React from "react";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./userContext"; 

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

  console.log("isLogin status:", isLogin);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          {/* Route for non-logged-in users */}
          {!isLogin && (
            <Route path="/" element={<Layout />}>
              <Route
                path="NewHeader"
                element={<FromCard setIsLogin={setIsLogin} setUser={setUser} />} // Pass setUser to FromCard for setting user info
              />
              <Route path="/" element={<Navigate to="/NewHeader" />} />
            </Route>
          )}

          {/* Route for logged-in users */}
          {isLogin && (
            <Route path="/" element={<LayoutTwow />}>
              <Route path="/" element={<Greeting />} />
             
            </Route>
          )}

          {/* Default route if no match is found */}
          <Route path="*" element={<Navigate to={isLogin ? "/" : "/NewHeader"} />} />
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
