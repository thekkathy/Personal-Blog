import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import NewPostCard from "./NewPostCard";
import { BlogPostsContext } from "./../../context/blogPostsContext";
import "../../styles/base.css";
import { UsersContext } from '../../context/usersContext'
const Blog = () => {

  const { users} = useContext(UsersContext);
  
  const adminUID = process.env.REACT_APP_ADMIN_UID;

  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  //This function gets the blog posts from the database and updates state
  /*
  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    console.log(res);
    setBlogPosts(res);
  };
  */

  useEffect(() => { 
    console.log(users); 
    const getBlogPosts = async () => {
      console.log("fetching blog posts ");
      const url = new URL("http://localhost:8000/blog_posts/get");
      let res = await fetch(url).then((resp) => resp.json());
      console.log(res);
      setBlogPosts(res);
    };
    getBlogPosts() 
  }, [users, setBlogPosts])

  return (
    <div className="container p-4">
      <h1>The Blog</h1>
      <div className="row m-4" style={users && users.uid ===adminUID? {} : {display: 'none'}}>
        {users && users.uid===adminUID ? <NewPostCard></NewPostCard> : null}
      </div>
      <div class="row mt-4 cards d-flex justify-content-center">
        {blogPosts.map((post) => {
          return (
            <div class="col-4-sm">
              <BlogCard post={post} auth={false}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
