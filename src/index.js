import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Login from "./Login";
import Greeting from "./Greeting";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="NewHeader" element={<FromCard />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Greeting" element={<Greeting />} />
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