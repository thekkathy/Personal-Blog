import React, { createContext, useState } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  
  return (
    <UsersContext.Provider
      value={{ users, setUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export { UsersContext };
