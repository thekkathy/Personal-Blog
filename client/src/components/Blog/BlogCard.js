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


  const cardContent = (
    <div>
      {post.pic_url &&
        <a onClick={() => { handleClick() }} className="thumbnail-img">
          <img src={post.pic_url} alt="nothing found" className="w-100 h-100" />
        </a>
      }
    </div>
  );

  const cardBottom = (
    <div>
      <div className="container-fluid white-text">
        <div className="row mx-auto d-flex justify-content-center my-4">
          <h2 className="h4 font-weight-light text-center">
            <a href={`/blog/${post.doc_id}`} className="white-text link-light">{post.title}</a>
          </h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="container-fluid d-flex">
          <div className="mr-auto">
            <button
              class="btn-icon"
              onClick={() => {
                console.log("edit was pressed");
                history.push("/home");
              }}
            >
              <i class="fas fa-edit white-text icon-light"></i>
            </button>
            <button class="btn-icon">
              <i class="fas fa-trash-alt white-text icon-light"></i>
            </button>
          </div>
          <div className="white-text">
            <span className="mr-3 ">
              <i class="far fa-heart"></i> {post.num_likes}
            </span>
            <span>
              <i class="far fa-comment"></i> {post.num_comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card
      cardContent={cardContent}
      cardBottom={cardBottom}
      outerCardClassName="my-4 mx-1"
      bottomRowClassName="mx-auto"
      noInnerCard={!post.pic_url && true}
    ></Card>
  );

  //return <div>BlogCard - uses the design from card</div>;
};

export default BlogCard;
