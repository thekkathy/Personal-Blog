import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import NewPostCard from "./NewPostCard";
import { BlogPostsContext } from "./../../context/blogPostsContext";
import PostInput from "./PostInput";
import "../../styles/base.css";
import { UsersContext } from '../../context/usersContext'
const Blog = () => {

  const { users, setUsers } = useContext(UsersContext);
  
  const adminUID = process.env.REACT_APP_ADMIN_UID;

  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  let isAuth = true;
  //This function gets the blog posts from the database and updates state
  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    console.log(res);
    setBlogPosts(res);
  };


  useEffect(() => { console.log(users); getBlogPosts() }, [users])

  return (
    <div class="container-fluid p-4">
      <h1>The Blog</h1>
      <div className="row m-4">
        {users && users.uid===adminUID ? <NewPostCard></NewPostCard> : null}
      </div>
      <div className="row m-4">
        {/* {<PostInput />} */}
      </div>
      <div class="row mt-4">
        {blogPosts.map((post) => {
          return (
            <div class="col-4-sm">
              <BlogCard post={post} auth={false} getBlogPosts={getBlogPosts}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
