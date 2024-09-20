import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Greeting from "./Greeting";
import React from "react";



const LayoutTwow = () => {

  return (
   
      <div className="cols-lg-4">
        
      <Outlet />
      </div>

  );
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="NewHeader" element={<FromCard />} />
        </Route>
        <Route path="/" element={<LayoutTwow />}>
          <Route path="/profile/greeting" element={<Greeting />} />
        </Route>
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
