import { useState, useEffect } from 'react';


import UserContext from "./UserContext"; 
export default function UserDetails() {
  const user = useContext(UserContext);

const UserDetails = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Hello World');
  }, []);

  return message;
};

export default UserDetails;


// useCalculator
// result, setCalclate(3) =>  6


