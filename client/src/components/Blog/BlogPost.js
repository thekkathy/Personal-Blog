import React, { useEffect, useState } from 'react';
import Post from '../Post';

import getBlogPosts from "../../utils/getBlogPosts";
import CommentMaker from '../Comments/CommentMaker';
import NavigateButton from '../NavigateButton';

const BlogPost = ({ match: { params: { id } } }) => {
    const [post, setPost] = useState({});

     //get all blog posts
     useEffect(() => {
        getSpecificPost()
    }, []);

    
    const getSpecificPost = async () => {
        getBlogPosts()
            .then((posts) => {
                posts.forEach(element => {
                    if (element.doc_id === id) {
                        setPost(element);
                        console.log("getting specific blogpost:");
                        console.log(element);
                    }
                });
            });
    };

    return (
        <div className="container-fluid">
            <Post post={post} author="Camille Cooper" postType="blog"  getSpecificPost={getSpecificPost}/>
            <CommentMaker isBlog={true} post_id={post.doc_id} />
            <div className="row d-flex justify-content-center m-5">
                <NavigateButton buttonName="Back To Blog" url="/blog" color="dark" />
            </div>
        </div>
    )
}

export default BlogPost