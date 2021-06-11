import React, { useContext } from "react";
import Card from "../Card";
import { useHistory } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/blogCard.css";
import { UsersContext } from '../../context/usersContext'
import { BlogIdContext } from '../../context/blogIdContext'
import { BlogPostsContext } from '../../context/blogPostsContext'

const BlogCard = ({ post, auth }) => {
  const { setBlogPosts } = useContext(BlogPostsContext);

  const { users } = useContext(UsersContext);
  const { setBlogIdG } = useContext(BlogIdContext);
  const history = useHistory();

  //This function redirects to the corresponding blog page when a blog card is clicked
  const handleClick = () => {
    setBlogIdG(post.doc_id);
    console.log('post id updated to '+post.doc_id)
    history.push(`/blog/${post.doc_id}`);
  };


  //this function handles edit of a blog post, redirecting to an edit page
  const handleEdit = () => {
    history.push(`/blog/edit/${post.doc_id}`)
  }

  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    console.log(res);
    setBlogPosts(res);
  };

  //this function deletes a blog post by using the doc_id
  const handleDelete = async () => {
    fetch("http://localhost:8000/blog_posts/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doc_id: post.doc_id }),
    }).then((resp) => {
      resp.json();
      getBlogPosts();
      //TODO: need to rerender here
    });
  }



  const cardContent = (
    <div>
      <div className="container-fluid white-text blog-card">
        <div className="row mx-auto d-flex justify-content-center my-4">
          <h2 className="h4 font-weight-normal text-center">
            <button style={{all: 'unset',color:'white'}} onClick={handleClick}>{post.title}</button>
          </h2>
        </div>
      </div>
    </div>
  );

  const cardBottom = (
    <div>
      <div className="row d-flex border-top">
        <div className="container-fluid d-flex">
          <div className="mr-auto" style={users && users.uid === process.env.REACT_APP_ADMIN_UID ? null : { display: 'none' }}>
            <button
              class="btn-icon"
              onClick={handleEdit}
            >
              <i class="fas fa-edit white-text icon-light"></i>
            </button>
            <button class="btn-icon" onClick={handleDelete}>
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
      outerCardClassName="my-4 mx-1 d-flex"
      bottomRowClassName="justify-content-center align-items-end blog-card-bottom"
      noInnerCard={!post.pic_url && true}
      innerCardClassName="h-75"
      noCardTop={false}
      cardTopImage={post.pic_url}
    ></Card>
  );

  //return <div>BlogCard - uses the design from card</div>;
};

export default BlogCard;
