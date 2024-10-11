<<<<<<< Updated upstream
import { useContext } from "react";

import UserContext from "./Usercontext"; 
export default function UserDetails() {
  const user = useContext(UserContext);

=======
<<<<<<< Updated upstream
export default function UserDetails({ user }) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

=======
import { useState, useEffect } from 'react';

const UserDetails = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Hello World');
  }, []);

  return message;
};

export default UserDetails;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
