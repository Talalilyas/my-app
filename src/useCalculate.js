import { useState } from "react";

const useCalculate = (val) => {
  const [value, setValue] = useState(val);

  const handleClick = () => {
    setValue(value * 3);
  };

  return [value, handleClick];
};

export default useCalculate;
