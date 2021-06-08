import React from 'react';
import '../styles/base.css';

import Comments from './Comments/Comments';
import PostContentFormat from './PostContentFormat';

//heading = the title, author, and any other header info of the post
//text = the main article/content of the post
const Post = ({ heading, text }) => {
    return (
        <div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="container-fluid">
                        <h1>Title</h1>
                        <div>By: Author</div>
                    </div>
                    {heading}
                </div>
                <div className="row">
                    <PostContentFormat 
                    text= "Non in ea quis sint irure ad consectetur. Proident mollit amet fugiat aliqua elit elit veniam tempor minim. Nulla duis eu ex magna sit non aute aliqua id ipsum. Occaecat consequat id aute officia anim tempor velit eu Lorem mollit amet occaecat elit."
                    outerBlueWrap={true} 
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
