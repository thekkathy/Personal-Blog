import React, { useEffect, useState } from "react";
import NavigateButton from "../NavigateButton";
import "../../styles/home.css";
import BlogCard from "../../components/Blog/BlogCard";
import getBlogPosts from "../../utils/getBlogPosts";
import { BlogPostsContext } from "../../context/blogPostsContext";

const Home = () => {
  const { blogPosts, setBlogPosts } = React.useContext(BlogPostsContext);

  useEffect(() => {
    getBlogPosts().then((posts) => {
      setBlogPosts(posts);
      console.log(posts);
    });
  }, []);

  return (
    <div>
      <div className="jumbotron">
        <h1 class="display-1 text">Camille's Corner</h1>
      </div>
      <div className="container">
        <h1>Recent Blog Posts</h1>
        <div className="row">
          {/* Conditional added to map to limit number of blog posts displayed on home page */}
          {blogPosts
            ? blogPosts.map((post, index) => {
                if (index <= 2) {
                  return <BlogCard post={post} />;
                }
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
