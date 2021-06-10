/**
 * This file styles the main content of a blog, forum, or any othe rpost we have in the site.
 */
import React from "react";

import Card from "./Card";
import { useContext } from "react";
import { UsersContext } from '../context/usersContext'
import { BlogIdContext } from '../context/blogIdContext'
import { BlogPostsContext } from "../context/blogPostsContext";
import "../styles/base.css";
import NavigateButton from './NavigateButton';
import axios from "axios";


//numLikes = the number of likes the post has
//numComments = the number of comments the post has
//text = the main text that should be displayed in the post
// outerBlueWrap = boolean, if true there will be an outer blue card wrapping the post

let numLines = 0;

const PostContentFormat = ({
  numLikes,
  numComments,
  text,
  imageLink,
  outerBlueWrap,
}) => {

  const { users, setUsers } = useContext(UsersContext);
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  const { blogIdG, setBlogIdG } = useContext(BlogIdContext);
  const [likeNum,setLikeNum] = useState(0);
  const [isLiked,setIsLiked] = useState(false)

  function handleLike(){
    axios.post('http://localhost:8000/blog_posts/like',{
      user: users,
      blogid: blogIdG,
      isLiked: isLiked
    })
    if(!isLiked){
      setLikeNum(likeNum+1);
      setIsLiked(true)
    }else{
      setLikeNum(likeNum-1);
      setIsLiked(false)
    }
  }


  const cardSide = (
    <div className={`${outerBlueWrap && "white-text"}`}>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <button onClick={()=>handleLike()}class="btn mt-3 mx-auto">
              {isLiked 
              ? <i class="fas fa-heart mx-auto" aria-hidden="true"></i>
              : <i class="far fa-heart mx-auto" aria-hidden="true"></i>}<br></br>
              {numLikes+likeNum}
            </button>
          </div>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <i class="far fa-comment mt-3 mx-auto"></i>
          </div>
          <div className="row">
            <div className="small-text text-center mx-auto">
              {numComments} Comments
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <a target="_blank" href={'https://twitter.com/intent/tweet?url=' + window.location.href.toString()}>
              <button class="btn btn-icon icon-dark">
                <div className="container mx-auto">
                  <div className="row">
                    <i class="fas fa-share mt-2 mx-auto"></i>
                  </div>
                  <div className="row">
                    <div className="small-text text-center mx-auto">
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
      <div className="row p-4" style={{whiteSpace: 'pre-line'}}>
      {text}
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
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
        cardTopImage={imageLink}
      />
    </div>
  );
};

export default PostContentFormat;
