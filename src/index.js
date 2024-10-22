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

const LayoutTwow = () => {
  return (
    <div className="cols-lg-4">
      <Outlet />
    </div>
  );
};




export default function App() {
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);

  console.log("isLogin status:", isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {!isLogin && (
          <Route path="/" element={<Layout />}>
            <Route
              path="NewHeader"
              element={<FromCard setIsLogin={setIsLogin} />}
            />
            <Route path="/" element={<Navigate to="/NewHeader" />} />
          </Route>
        )}

        {isLogin && (
          <Route path="/" element={<LayoutTwow />}>
            <Route path="/" element={<Greeting />} />
          </Route>
        )}

        {/* New table route */}
      

        <Route path="*" element={<Navigate to="/" />} />
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
