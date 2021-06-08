import React, {useContext} from 'react'
import BlogCard from './BlogCard';
import {BlogPostsContext} from "./../../context/blogPostsContext"


const Blog = () => {
    const {blogPosts} = useContext(BlogPostsContext);

    return (
        <div>
            <h1>{JSON.stringify(blogPosts)}</h1>
            <img src={blogPosts.pic_url} alt='Nothing Found' style={{width:'300px', height:"200px"}}></img>
            Blog
            contains a bunch of blog cards
        </div>
    )
}

export default Blog
