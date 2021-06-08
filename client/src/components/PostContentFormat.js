/**
 * This file styles the main content of a blog, forum, or any othe rpost we have in the site.
 */
import React from 'react';
import '../styles/base.css';

//text = the main text that should be displayed in the post
// outerBlueWrap = boolean, if true there will be an outer blue card wrapping the post
const PostContentFormat = ({text, outerBlueWrap}) => {
    return (
        <div className="container-fluid">
            <div className={`card m-4 ${outerBlueWrap && "outer-card"}`}>
                <div className="card m-4 p-4">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default PostContentFormat
