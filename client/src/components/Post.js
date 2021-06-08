import React from 'react';
import '../styles/base.css';

import Comments from './Comments/Comments';
import PostContentFormat from './PostContentFormat';

//heading = the title, author, and any other header info of the post
//text = the main article/content of the post
//postType = either 'blog' for blog post or 'forum' for forum post
const Post = ({ title, author, text, postType }) => {
    return (
        <div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="container-fluid">
                        <h1>{title}</h1>
                        <h2 className="h5 font-weight-normal">By: {author}</h2>
                    </div>
                </div>
                <div className="row my-4">
                    <PostContentFormat 
                    text={text}
                    outerBlueWrap={postType === 'blog' ? false : true} 
                    />
                </div>
                <div className="row">
                    <Comments />
                </div>
            </div>
        </div>
    )
}

export default Post
