import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = (props) => {
  const Location = useLocation();

  const { email, password, selectedOption, selectyear, selectday, gender } =
    Location.state || {};

  return (
    <div>
      <h4>User Email</h4> {props.email}
      <h4>User Password</h4> {props.password}
      <h4>User Birthday Month</h4> {props.selectedOption}
      <h4>User Birth Year</h4> {props.selectyear}
      <h4>User Birth Day</h4> {props.selectday}
      <h4>User Gender</h4> {props.gender}
    </div>
  );
};

export default UserDetails;
