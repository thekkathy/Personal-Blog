import React, { createContext, useState } from "react";

const BlogIdContext = createContext();

const BlogIdProvider = ({ children }) => {
  const [blogIdG, setBlogIdG] = useState('placeholder');
  
  return (
    <BlogIdContext.Provider
      value={{ blogIdG, setBlogIdG }}
    >
      {children}
    </BlogIdContext.Provider>
  );
};

export default BlogIdProvider;

export { BlogIdContext };
