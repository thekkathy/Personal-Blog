import SignOut from '../auth/SignOut'
import {useContext, useState, useEffect} from "react";
import {UsersContext} from '../../context/usersContext'
import BlogCard from "../Blog/BlogCard";
import {Link} from "react-router-dom";

export default function UserLikes(){

    const { users, setUsers } = useContext(UsersContext);
    const [userLikedPosts,setUserLikedPosts] = useState([]);
    useEffect(() => {getBlogPosts()}, []);

    const getBlogPosts = async () => {
        console.log("fetching blog posts ");
        const url = new URL("http://localhost:8000/blog_posts/get");
        let res = await fetch(url).then((resp) => resp.json());
        console.log(res);
        users.liked_posts.map((post)=>{
            setUserLikedPosts(...userLikedPosts,res.filter(it=>it.doc_id.includes( 'RmKgM8TxCkyGiRhNrXOg')));
        })
    };

    return(
        <div>
            <br></br>
            <h1>Liked Posts</h1>
            {userLikedPosts.map((post) => {return <BlogCard post={post}/>})};
        </div>
    )
}