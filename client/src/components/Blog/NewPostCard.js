import React from "react";
import Card from "../Card";
import { useHistory } from "react-router-dom";

const NewPostCard = ({ post }) => {
  //const { blogPosts } = useContext(BlogPostsContext);

  const history = useHistory();

  //This function redirects to the corresponding blog page when a blog card is clicked
  const handleClick = () => {
    history.push(`/blog/add/new_post`);
  };
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
        cardContent={<h1>+</h1>}
        //   cardBottom={
        //     <div>
        //       <b>{post.title}</b>
        //       <div
        //         className="container d-flex justify-content-end"
        //         style={{ float: "right" }}
        //       >
        //         <i class="far fa-heart mt-4 mx-2"> {post.num_likes}</i>
        //         <i class="far fa-comment mt-4 mx-2"> {post.num_comments}</i>
        //       </div>
        //     </div>
        //   }
      ></Card>
    </button>
  );

  //return <div>BlogCard - uses the design from card</div>;
};

export default NewPostCard;
