import React, { createContext, useState } from "react";

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(null);
  
  return (
    <CommentsContext.Provider
      value={{ comments, setComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;

export { CommentsContext };
