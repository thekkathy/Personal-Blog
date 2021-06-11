/**
 * This file styles the main content of a blog, forum, or any othe rpost we have in the site.
 */
import React, { useEffect } from "react";

import Card from "./Card";
import { useContext, useState } from "react";
import { UsersContext } from "../context/usersContext";
import { BlogIdContext } from "../context/blogIdContext";
import { BlogPostsContext } from "../context/blogPostsContext";
import "../styles/base.css";
import "../styles/postContent.css";
import NavigateButton from "./NavigateButton";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import getBlogPosts from "../utils/getBlogPosts";

//numLikes = the number of likes the post has
//numComments = the number of comments the post has
//text = the main text that should be displayed in the post
// outerBlueWrap = boolean, if true there will be an outer blue card wrapping the post


const PostContentFormat = ({
  numLikes,
  numComments,
  text,
  imageLink,
  outerBlueWrap,
  getSpecificPost,
}) => {
  const { users, setUsers } = useContext(UsersContext);
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  const { blogIdG, setBlogIdG } = useContext(BlogIdContext);
  const [likeNum, setLikeNum] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [userLikes, setUserLikes] = useState([]);

  const getUserLikes = async () => {
    //const url = new URL("http://localhost:8000/blog_posts/user-likes");
    console.log(users.uid);
    let res = await fetch(
      "http://localhost:8000/blog_posts/user-likes?" +
        new URLSearchParams({
          userid: users.uid,
        })
    ).then((resp) => resp.json());
    setUserLikes(res);
    return res;
  };

  const checkIfLiked = async () => {
    if (users != null) {
      let likes = await getUserLikes();
      console.log("users is not null, you are logged in!");
      for (let i = 0; i < likes.length; i++) {
        if (likes[i] === blogIdG) {
          console.log("you have liked this post");
          setIsLiked(true);
        }
      }
    }
  };

  useEffect(() => {
    setLikeNum(parseInt(numLikes));
    console.log(users);
    console.log(blogIdG);
    checkIfLiked();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleLike() {
    if (users != null) {
      let curLikeStatus = JSON.parse(JSON.stringify(!isLiked));
      setIsLiked(curLikeStatus);
      axios
        .post("http://localhost:8000/blog_posts/like", {
          user: users,
          blogid: blogIdG,
          isLiked: curLikeStatus,
        }).then(() => getSpecificPost());
    } else {
      handleClickOpen();
    }
  }

  const cardSide = (
    <div className={`${outerBlueWrap && "white-text"}`}>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please sign in to like posts"}
          </DialogTitle>
          <DialogActions>
            <button
              className="btn-dark"
              onClick={handleClose}
              color="primary"
              autoFocus
            >
              Okay
            </button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row d-flex justify-content-center">
            <button
              onClick={() => handleLike()}
              class="btn btn-icon icon-dark mt-3 mx-auto"
            >
              {isLiked ? (
                <div className="container mx-auto">
                  <div className="row">
                    <i class="fas fa-heart mt-2 mx-auto fa-lg"></i>
                  </div>
                  <div className="row">
                    <div className="icon-text-bottom small-text text-center mx-auto">
                      {numLikes}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container mx-auto">
                  <div className="row">
                    <i class="far fa-heart mt-2 mx-auto fa-lg"></i>
                  </div>
                  <div className="row">
                    <div className="icon-text-bottom small-text text-center mx-auto">
                      {numLikes}
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <i class="far fa-comment mt-3 mx-auto fa-lg"></i>
          </div>
          <div className="row">
            <div className="icon-text-bottom small-text text-center mx-auto">
              {numComments}
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <a target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?url=' + window.location.href.toString()}>
              <button class="btn btn-icon icon-dark">
                <div className="container mx-auto">
                  <div className="row">
                    <i class="fas fa-share mt-2 mx-auto fa-lg"></i>
                  </div>
                  <div className="row">
                    <div className="icon-text-bottom small-text text-center mx-auto">
                      Share
                    </div>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const cardContent = (
    <div>
      <div className="row p-4 post-content" style={{ whiteSpace: "pre-line" }}>
        {text}
      </div>
    </div>
  );

  return (
    <div className="container">
      <img
        className="img-fluid"
        src={imageLink}
        alt="whoops nothing to see here"
        style={{ maxHeight: "40rem", display: "flex", margin: "auto" }}
      ></img>
      <Card
        sideCol={true}
        cardSide={cardSide}
        sideColClassName="pl-1 ml-1"
        noOuterCard={!outerBlueWrap}
        outerCardClassName="pr-4"
        innerCardClassName="mr-4"
        cardContent={cardContent}
        noSetWidthHeight={true}
        noCardTop={false}
        //cardTopImage={imageLink}
      />
    </div>
  );
};

export default PostContentFormat;
