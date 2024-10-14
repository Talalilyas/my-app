import { useContext } from "react";
import useCalculate from "./useCalculate";
import UserContext from "./UserContext"; 
import useLocalStorageState from "use-local-storage-state";
export default function UserDetails() {
  const user = useContext(UserContext);
  const [useCalculator, handleClick] = useCalculate(3); 
  console.log(useCalculator)

  return (
    <div>
      {user ? (
        <div>
          <h3>User Details</h3>
          <p>password: {user.password}</p>
          <p>Email: {user.email}</p>
          <p>Birth month: {user.selectyear}</p>
          <p>Birth Date: {user.selectday}</p>
          <div>
            <h4>value : {useCalculator}</h4>
            <button onClick={handleClick}>3</button>
          </div>
        </div>
      ) : (
        <p></p>
      )}

    </div>

  );
}
