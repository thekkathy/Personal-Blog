import React, { useEffect, useState } from 'react';
import Post from '../Post';

import getBlogPosts from "../../utils/getBlogPosts";

const BlogPost = ({ match: { params: { id } } }) => {
    const [post, setPost] = useState({});

    //get all blog posts
    useEffect(() => {
        getBlogPosts()
            .then((posts) => {
                posts.forEach(element => {
                    if(element.doc_id === id){
                        setPost(element);
                        console.log(element);
                    }
                });
            });
    }, []);

    return (
        <div>
            <Post post={post} author="Camille Cooper" postType="blog" />
        </div>
    )
}

export default BlogPost