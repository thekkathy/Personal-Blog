import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/base.css";

const NewPostCard = ({ post }) => {
  //const { blogPosts } = useContext(BlogPostsContext);

  const history = useHistory();

  //This function redirects to the corresponding blog page when a blog card is clicked
  const handleClick = () => {
    history.push(`/blog/add/new_post`);
  };
  return (
    <div className="container d-flex justify-content-center">
      <button
        class="btn-icon icon-dark"
        onClick={handleClick}
      >
        <div className="row d-flex justify-content-center m-4">

          <i class="fas fa-plus-circle fa-3x"></i>
        </div>
        <div className="row d-flex justify-content-center">
          <h2 className="h5 font-weight-light text-center">Add Blog Post</h2>
        </div>
      </button>
    </div>
  );
};

export default NewPostCard;
