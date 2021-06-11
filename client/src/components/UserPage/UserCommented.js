import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../context/usersContext";
import BlogCard from "../Blog/BlogCard";
import "../../styles/home.css";

import { signInWithGoogle, auth } from "../../firebase";

export default function UserCommented() {
  const { users, setUsers } = useContext(UsersContext);
  const [blogPosts, setBlogPosts] = useState([]);
  const [userCommentedPosts, setUserCommentedPosts] = useState([]);

  useEffect(() => {
    getBlogPosts()
  }, []);

  function handleSignIn() {
    console.log('sign in')
    signInWithGoogle(users, setUsers);
  }

  const getBlogPosts = async () => {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url).then((resp) => resp.json());
    console.log(res);
    let commented = await getUserCommented(); 
    const userComments = [];
    res.forEach(e => {
        if(commented.indexOf(e.doc_id) !== -1){
            userComments.push(e);
        }
    });
    setUserCommentedPosts(userComments);  
    }

  const getUserCommented = async () => {
    //const url = new URL("http://localhost:8000/blog_posts/user-commented");
    if (users) {
      console.log(users.uid);
      let res = await fetch(
        "http://localhost:8000/blog_posts/user-commented?" +
        new URLSearchParams({
          userid: users.uid,
        })
      ).then((resp) => resp.json());
      setUserCommentedPosts(res);
      return res;
    }
    };

  return (
    <div className="container" style={{ minHeight: "40rem" }}>
      {users ?
        <div>
          <div className="row mt-4 mx-4">
            <h1>Commented Posts</h1>
          </div>
          <div class="row cards mb-2">
            {userCommentedPosts.length > 0 ? (
              userCommentedPosts.map((post) => {
                return <BlogCard post={post} />;
              })
            ) : (
              <div className="m-4 h5 font-weight-light">No commented posts yet</div>
            )}
          </div>
        </div>
        :
        <div className="container">
          <div className="row m-4 d-flex justify-content-center mt-5">
            <h2>Please sign in to view posts</h2>
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
