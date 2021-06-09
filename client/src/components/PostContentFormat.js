/**
 * This file styles the main content of a blog, forum, or any othe rpost we have in the site.
 */
import React, {useEffect, useState} from "react";
import Card from "./Card";


import "../styles/base.css";
import NavigateButton from './NavigateButton';

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
  const cardSide = (
    <div className={`${outerBlueWrap && "white-text"}`}>
      <div className="row mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <div className="mx-auto">{numLikes}</div>
          </div>
          <div className="row">
            <i class="far fa-heart mx-auto"></i>
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
            <a target="_blank" href={'https://twitter.com/intent/tweet?url='+window.location.href.toString()}>
              <button class="btn mt-3 mx-auto">
                <i class="fas fa-share" aria-hidden="true"></i><br></br>
                Share
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
