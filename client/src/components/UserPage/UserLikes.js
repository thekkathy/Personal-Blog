
import {useContext, useState, useEffect} from "react";
import {UsersContext} from '../../context/usersContext'
import BlogCard from "../Blog/BlogCard";
import {Link} from "react-router-dom";
import axios from 'axios';
import "../../styles/home.css";

export default function UserLikes(){

    const { users, setUsers } = useContext(UsersContext);
    const [userLikedPosts,setUserLikedPosts] = useState([]);
    useEffect(() => {getBlogPosts()}, []);

    const getBlogPosts = async () => {
        console.log("fetching blog posts ");
        const url = new URL("http://localhost:8000/blog_posts/get");
        let res = await fetch(url).then((resp) => resp.json());
        console.log(res);
        setUserLikedPosts(res.filter(el => !!users.liked_posts.toString().match(new RegExp(`(?=.*${el.doc_id})`))))
        // users.liked_posts.map((post)=> {
        //     axios.get('http://localhost:8000/blog_posts/retrieve',{
        //         params:{
        //             doc_id:post
        //         }
        //     })
        //     .then(function(resp){
        //         console.log(resp.data)
        //     })
        // })
    };

    return(
        <div className='container'>
            <br></br>
            <h1>Liked Posts</h1>
            <div class="row cards">{userLikedPosts.map((post) => {return <BlogCard post={post}/>})}</div>
        </div>
    )
}