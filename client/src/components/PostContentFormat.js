/**
 * This file styles the main content of a blog, forum, or any othe rpost we have in the site.
 */
import React from 'react';
import Card from './Card';


import '../styles/base.css';

//text = the main text that should be displayed in the post
// outerBlueWrap = boolean, if true there will be an outer blue card wrapping the post
const PostContentFormat = ({ text, outerBlueWrap }) => {
    const cardSide = (
        <div className={`${outerBlueWrap && "white-text"}`}>
            <div className="row mx-auto">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="mx-auto">
                            128
                </div>
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
                            60 Comments
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="container mx-auto">
                    <div className="row">
                        <i class="fas fa-share mt-3 mx-auto"></i>
                    </div>
                    <div className="row">
                        <div className="small-text text-center mx-auto">
                            Share
                        </div>
                    </div>
                </div>
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
                cardContent={text}
                noSetWidth={true}
            />
        </div>
    )
}

export default PostContentFormat
