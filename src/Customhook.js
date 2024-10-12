import React from 'react';
import UserDetails from './useTalal'; 

const Customhook = () => {
  const [reslt, setCalcluate] = UserDetails(3);


  setCalcluate(9)
  return (
    <div>
      <h1>{reslt}</h1>
    </div>
  );
};

export default Customhook;
