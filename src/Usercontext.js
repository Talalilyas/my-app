import { createContext } from "react";

const UserContext = createContext(null);
export default UserContext;
// const [user, setUser] = useLocalStorageState("user", null);
//   const [Sginup, setSginup] = useLocalStorageState("Sginup", false);
//   const [login, setIsLogin] = useLocalStorageState("isLogin", false);



// return (
    //     // <UserContext.Provider value={user}>
    //     //   {/* <BrowserRouter>
    //     //     <Routes>
    //     //       {!Sginup && (
    //     //         <Route path="/" element={<Layout />}>
    //     //           <Route
    //     //             path="Sginup"
    //     //             element={<FromCard setIsLogin={setSginup} setUser={setUser} />}
    //     //           />
    //     //           <Route index element={<Navigate to="Sginup" />} />
    //     //         </Route>
    //     //       )}
    //     //       {Sginup && (
    //     //         <Route path="/" element={<LayoutTwow />}>
    //     //           <Route index element={<Greeting />} />
    //     //         </Route>
    //     //       )}
    //     //       {!login && (
    //     //         <Route
    //     //           path="/login"
    //     //           element={<Login setIsLogin={setIsLogin} setUser={setUser} />}
    //     //         />
    //     //       )}
    //     //       {login && <Route path="/login" element={<Profile />} />}
    //     //       <Route path="*" element={<Navigate to={Sginup ? "/" : "/login"} />} />
    //     //     </Routes>
            
    //     //   </BrowserRouter> */}
    //     //   <BrowserRouter>
    //     //   <Routes>
            
    //     //      <Route></Route>
            
    //     //     </Routes> exact path="/" component={ResultFrom} />
          
    //     // </BrowserRouter>
    //     // </UserContext.Provider>
    //   // );
    
    
    