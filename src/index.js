import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

import FromCard from "./Fromcard";

import Login from "./Login";
import Greeting from "./Greeting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="NewHeader" element={<FromCard />} />
          <Route path="Login" element={<Login />} />
          <Route path="/greeting" element={<Greeting />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
