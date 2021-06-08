import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import NewPostCard from "./NewPostCard";
import { BlogPostsContext } from "./../../context/blogPostsContext";
import PostInput from "./PostInput";
import "../../styles/base.css";

const Blog = () => {
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  let isAuth = true;
  //This function gets the blog posts from the database and updates state
  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    setBlogPosts(res);
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div class="container">
      <h1>{"The Blog"}</h1>
      <div class="row">
        {blogPosts.map((post) => {
          return (
            <div class="col">
              <BlogCard post={post} auth={false} />
            </div>
          );
        })}
        {isAuth ? <NewPostCard></NewPostCard> : null}
        {<PostInput />}
      </div>
    </div>
  );
};

export default Blog;
