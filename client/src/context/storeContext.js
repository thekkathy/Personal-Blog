import React, { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(null);
  
  return (
    <StoreContext.Provider
      value={{ store, setStore }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export { StoreContext };
