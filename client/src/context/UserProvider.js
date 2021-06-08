import React, { Component, createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

// useEffect(()=>{
//   auth.onAuthStateChanged(userAuth => {
//     setUser({ user: userAuth});
//    });
// },[user])

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider
      value={{ user, setUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export { UserContext };