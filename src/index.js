import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Layout";
import FromCard from "./Fromcard";
import Greeting from "./Greeting";
import React from "react";
import useLocalStorage from "use-local-storage";
import useLocalStorageState from 'use-local-storage-state'


const LayoutTwow = () => {

  return (
   
      <div className="cols-lg-4">
        
      <Outlet />
      </div>

  );
};


export default function App() {
  const [todos, setTodos] = useLocalStorageState('todos',false)
  console.log('--------todo--ddd----',todos);
  return (
    <BrowserRouter>
      <Routes>
        
        {todos === undefined && <Route path="/" element={<Layout />}>
          <Route path="NewHeader" element={<FromCard />} />
        </Route>}
        {todos === true &&  <Route path="/" element={<LayoutTwow />}>
          <Route path="/" element={<Greeting />} />
        </Route>}
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
