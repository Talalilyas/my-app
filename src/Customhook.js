import React from 'react';
import UserDetails from './useTalal'; 

const Customhook = () => {
  const message = UserDetails();

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Customhook;
