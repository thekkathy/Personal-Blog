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
        <div>
            <div className="row mx-auto">
                128
            </div>
            <div className="row mx-auto">
                <i class="far fa-heart m-2"></i>
            </div>
        </div>
    );

    return (
        <div className="container-fluid">
            <Card
                sideCol={true}
                cardSide={cardSide}
                sideColClassName=""
                noOuterCard={false}
                outerCardClassName="w-75"
                cardContent={text}
                noSetWidth={true}
            />
        </div>
    )
}

export default PostContentFormat
