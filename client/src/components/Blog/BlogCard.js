import React from "react";
import Card from "../Card";
import { useHistory } from "react-router-dom";
import "../../styles/base.css";

const BlogCard = ({ post, auth }) => {
  //const { blogPosts } = useContext(BlogPostsContext);

  const history = useHistory();

  //This function redirects to the corresponding blog page when a blog card is clicked
  const handleClick = () => {
    history.push(`/blog/${post.doc_id}`);
  };
  return (
    <Card
      cardContent={
        <button
          style={{
            background: "none",
            color: "inherit",
            border: "none",
            padding: "0",
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          }}
          onClick={handleClick}
        >
          <img src={post.pic_url} alt="nothing found" style={{height:'100%', width:'100%'}} />
        </button>
      }
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
          <div>
            <button
              class="btn btn-outline-dark"
              onClick={() => {
                console.log("edit was pressed");
                history.push("/home");
              }}
            >
              Edit
            </button>
            <button class="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      }
    ></Card>
  );

  //return <div>BlogCard - uses the design from card</div>;
};

export default BlogCard;
