import { useContext } from "react";

import UserContext from "./Usercontext"; 
export default function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h3>User Details</h3>
          <p>password: {user.password}</p>
          <p>Email: {user.email}</p>
          <p>Birth month: {user.selectyear}</p>
          <p>Birth Date: {user.selectday}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}
