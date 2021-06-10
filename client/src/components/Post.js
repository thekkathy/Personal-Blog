import React from 'react';
import '../styles/base.css';

import Comments from './Comments/Comments';
import PostContentFormat from './PostContentFormat';

//heading = the title, and any other header info of the post
//text = the main article/content of the post
//postType = either 'blog' for blog post or 'forum' for forum post
const Post = ({ post, postType }) => {
    return (
        <div>
            <div className="container py-5">
                <div className="card p-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="container">
                                <h1 className="m-4">{post.title}</h1>
                            </div>
                        </div>
                        <div className="row my-4">
                            <PostContentFormat
                                numLikes={post.num_likes}
                                numComments={post.num_comments}
                                imageLink={post.pic_url}
                                text={post.text}
                                outerBlueWrap={postType === 'blog' ? false : true}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Comments />
                </div>
            </div>
        </div>
    )
}

export default Post
