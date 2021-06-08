import React, { useContext } from "react";
import Card from "../Card";
import { BlogPostsContext } from "./../../context/blogPostsContext";

const BlogCard = () => {
  
    const { blogPosts } = useContext(BlogPostsContext);
    return blogPosts.map((post) => {
        return <Card cardContent={<img src={post.pic_url}/>} cardBottom={<b>{post.title}</b>}></Card>
    });

  //return <div>BlogCard - uses the design from card</div>;
};

export default BlogCard;
