import React, { createContext, useState } from "react";

const BlogPostsContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState(null);
  
  return (
    <BlogPostsContext.Provider
      value={{ blogPosts, setBlogPosts }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
};

export default BlogPostsProvider;

export { BlogPostsContext };
