import React, { createContext, useState } from "react";

const ForumContext = createContext();

const ForumProvider = ({ children }) => {
  const [forum, setForum] = useState(null);
  
  return (
    <ForumContext.Provider
      value={{ forum, setForum }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;

export { ForumContext };
