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
import Dashboard from "./Dashborad";
import Grade from "./Grade";
import QuotesPage from "./Quotes";
import SettingsPage from "./Setting";
import ResultForm from "./ResultFrom";
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
            <Route
              path="/login"
              element={<Login setIsLogin={setIsLogin} setUser={setUser} />}
            />
          )}
          {login && <Route path="/login" element={<Login />} />}

          {login && (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<h2>Welcome, Good Evening!</h2>} />
              <Route path="profile" element={<Profile />} />
              <Route path="grade" element={<Grade />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="quotes" element={<QuotesPage />} />
              <Route path="result-form" element={<ResultForm />} />
            </Route>
          )}

          <Route path="*" element={<Navigate to={Sginup ? "/" : "/login"} />} />
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
