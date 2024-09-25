import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Greeting from "./Greeting";
import React from "react";
import useLocalStorageState from 'use-local-storage-state';

// Layout for after login
const LayoutTwow = () => {
  return (
    <div className="cols-lg-4">
      <Outlet />
    </div>
  );
};

export default function App() {
  // Use localStorage to manage login state
  const [isLogin, setIsLogin] = useLocalStorageState('isLogin', false);

  console.log('isLogin status:', isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for when not logged in */}
        {!isLogin && (
          <Route path="/" element={<Layout />}>
            <Route path="NewHeader" element={<FromCard setIsLogin={setIsLogin} />} />
            {/* Redirect to NewHeader if not logged in */}
            <Route path="*" element={<Navigate to="/NewHeader" />} />
          </Route>
        )}

        {/* Route for when logged in */}
        {isLogin && (
          <Route path="/" element={<LayoutTwow />}>
            <Route path="/" element={<Greeting />} />
            {/* Redirect to Greeting if logged in */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
