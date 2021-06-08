import React, { createContext, useState } from "react";

const BlogPostsContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState({
    title: "this is the title",
    text: "This is a the meat of the blog post. skjhkjsdhkjsdhfkjsdhfk",
    pic_url:
      "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale",
  });

  return (
    <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  );
};

export default BlogPostsProvider;

export { BlogPostsContext };
