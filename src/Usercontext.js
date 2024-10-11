import { createContext } from "react";

const UserContext = createContext(null);
export default UserContext;

// export const useUser = () => useContext(UseContext);

// export const UserProvider = ({ children, user }) => {
//   return <UseContext.Provider value={user}>{children}</UseContext.Provider>;
// };
