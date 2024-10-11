import { useState, useEffect } from 'react';

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

