import React, { useContext, useEffect } from 'react';
import Post from '../Post';

import { BlogPostsContext } from "../../context/blogPostsContext";

import getBlogPosts from "../../utils/getBlogPosts";

const BlogPost = ({ match: { params: { id } } }) => {
    const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);

    useEffect(() => {
        const blogs = getBlogPosts()
            .then((posts) => {
                setBlogPosts(posts);
            });
    }, []);

    return (
        <div>
            {console.log("blog posts", blogPosts)}
            {id}
            BlogPost - Uses the design from post
        </div>
    )
}

export default BlogPost
