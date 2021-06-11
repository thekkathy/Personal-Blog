import { useContext, useState, useEffect } from "react";
import { UsersContext } from '../../context/usersContext'
import BlogCard from "../Blog/BlogCard";
import "../../styles/home.css";

export default function UserLikes() {

    const { users } = useContext(UsersContext);
    const [userLikedPosts, setUserLikedPosts] = useState([]);
    
    useEffect(() => {
        const getBlogPosts = async () => {
            console.log("fetching blog posts ");
            const url = new URL("http://localhost:8000/blog_posts/get");
            let res = await fetch(url).then((resp) => resp.json());
            console.log(res);
            console.log(users.liked_posts)
            var tempArr = [];
            for (var i =0; i<users.liked_posts.length;i++){
                for (var j=0; j<res.length; j++){
                    if(users.liked_posts[i]===res[j].doc_id){
                        tempArr.push(res[j]);
                    }
                }
            }
            setUserLikedPosts(tempArr);
        }
        
        getBlogPosts();
    }, [users.liked_posts]);
/*
    const getBlogPosts = async () => {
        console.log("fetching blog posts ");
        const url = new URL("http://localhost:8000/blog_posts/get");
        let res = await fetch(url).then((resp) => resp.json());
        console.log(res);
        console.log(users.liked_posts)
        var tempArr = [];
        for (var i =0; i<users.liked_posts.length;i++){
            for (var j=0; j<res.length; j++){
                if(users.liked_posts[i]===res[j].doc_id){
                    tempArr.push(res[j]);
                }
            }
        }
        setUserLikedPosts(tempArr);
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
*/
    return (
        <div className='container' style={{ height: "40rem" }}>
            <div className="row p-4">
                <h1>Liked Posts</h1>
            </div>
            <div class="row cards">
                {userLikedPosts.length > 0 ?
                    userLikedPosts.map((post) => { return <BlogCard post={post} /> })
                    :
                    <div className="ml-2 h5 font-weight-light">No liked posts yet</div>
                }
            </div>
        </div>
    )
}