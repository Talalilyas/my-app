
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

export default UserDetails;
