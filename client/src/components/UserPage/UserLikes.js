import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../context/usersContext";
import BlogCard from "../Blog/BlogCard";
import "../../styles/home.css";

import { signInWithGoogle, auth } from "../../firebase";

export default function UserLikes() {
  const { users, setUsers } = useContext(UsersContext);
  const [userLikedPosts, setUserLikedPosts] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:8000/blog_posts/user-likes',{
    //     params:{
    //         userid: users.uid
    //     }
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    getBlogPosts()

  }, []);

  function handleSignIn() {
    console.log('sign in')
    signInWithGoogle(users, setUsers);
  }

  const getUserLikes = async () => {
    //const url = new URL("http://localhost:8000/blog_posts/user-likes");
    if (users) {
      console.log(users.uid);
      let res = await fetch(
        "http://localhost:8000/blog_posts/user-likes?" +
        new URLSearchParams({
          userid: users.uid,
        })
      ).then((resp) => resp.json());
      setUserLikes(res);
      return res;
    }

  };

  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    console.log(res);
    let likes = await getUserLikes();
    console.log(userLikes);
    //console.log(users.liked_posts);
    var tempArr = [];
    if (likes) {
      for (var i = 0; i < likes.length; i++) {
        for (var j = 0; j < res.length; j++) {
          if (likes[i] === res[j].doc_id) {
            console.log('match found')
            tempArr.push(res[j]);
          }
        }
      }
    }

    console.log(tempArr);
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

  return (
    <div className="container" style={{ minHeight: "40rem" }}>
      {users ?
        <div>
          <div className="row mt-4 mx-4">
            <h1>Liked Posts</h1>
          </div>
          <div class="row cards mb-2">
            {userLikedPosts.length > 0 ? (
              userLikedPosts.map((post) => {
                return <BlogCard post={post} />;
              })
            ) : (
              <div className="m-4 h5 font-weight-light">No liked posts yet</div>
            )}
          </div>
        </div>
        :
        <div className="container">
          <div className="row m-4 d-flex justify-content-center mt-5">
            <h2>Please sign in to like posts</h2>
          </div>
          <div className="row m-4 d-flex justify-content-center">
              <button 
              className="btn btn-dark"
              onClick={() => handleSignIn()}
              >
                Sign In
              </button>
          </div>
        </div>
      }
    </div>
  );
}
