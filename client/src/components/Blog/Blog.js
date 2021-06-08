import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import { BlogPostsContext } from "./../../context/blogPostsContext";
import "../../styles/base.css";

const Blog = () => {

  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);

   //This function gets the blog posts from the database and updates state
  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    setBlogPosts(res);
  };

  useEffect(() => {getBlogPosts()}, []);

  return (
    <div>
      <h1>{JSON.stringify(blogPosts)}</h1>
      {blogPosts.map((post) => {return <BlogCard post={post}/>})};
    </div>
  );
};

export default Blog;
