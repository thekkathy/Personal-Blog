import React, { useContext } from "react";
import Card from "../Card";
import { BlogPostsContext } from "./../../context/blogPostsContext";
import {useHistory} from 'react-router-dom'

const BlogCard = ({post}) => {
  //const { blogPosts } = useContext(BlogPostsContext);

  const history = useHistory();
  
  //This function redirects to the corresponding blog page when a blog card is clicked
  const handleClick = () => {
      history.push(`/blog/${post.doc_id}`);
  }
    return (
      <button
        style={{
          background: "none",
          color: "inherit",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Card
          cardContent={<img src={post.pic_url} alt="nothing found" />}
          cardBottom={
            <div>
              <b>{post.title}</b>
              <div
                className="container d-flex justify-content-end"
                style={{ float: "right" }}
              >
                <i class="far fa-heart mt-4 mx-2"> {post.num_likes}</i>
                <i class="far fa-comment mt-4 mx-2"> {post.num_comments}</i>
              </div>
            </div>
          }
        ></Card>
      </button>
    );

  //return <div>BlogCard - uses the design from card</div>;
};

export default BlogCard;
