import React from 'react';
import Post from '../Post';

const BlogPost = ({ match: { params: { id } } }) => {
    return (
        <div>
            {id}
            BlogPost - Uses the design from post
        </div>
    )
}

export default BlogPost
