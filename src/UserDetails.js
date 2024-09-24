import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = (props) => {
  const Location = useLocation();

  const { email, password, selectedOption, selectyear, selectday, gender } =
    Location.state || {};

  return (
    <div>
      <h4>User Email</h4> {email}
      <h4>User Password</h4> {password}
      <h4>User Birthday Month</h4> {selectedOption}
      <h4>User Birth Year</h4> {selectyear}
      <h4>User Birth Day</h4> {selectday}
      <h4>User Gender</h4> {gender}
    </div>
  );
};

export default UserDetails;
