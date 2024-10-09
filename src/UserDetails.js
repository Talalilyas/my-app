<<<<<<< Updated upstream
import React from "react";

const UserDetails = (props) => {
  return (
    <div>
      <h4>User Email</h4> {props.email}
      <h4>User Password</h4> { props.password}
      <h4>User Birthday Month</h4> {props.electedOption}
      <h4>User Birth Year</h4> { props.selectyear}
      <h4>User Birth Day</h4> { props.selectday}
      <h4>User Gender</h4> {props.gender}
    </div>
  );
};

export default UserDetails
=======
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
>>>>>>> Stashed changes
