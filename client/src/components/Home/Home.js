import React, {useEffect, useState} from "react";
import NavigateButton from "../NavigateButton";
import "../../styles/home.css";
import BlogCard from "../../components/Blog/BlogCard";
import getBlogPosts from "../../utils/getBlogPosts";

const Home = () => {
  
  const [recentPosts, setRecentPosts] = useState([]);
    
  useEffect(() => {
        getBlogPosts().then((posts) => {setRecentPosts(posts); console.log(posts)});
    }, [])

   
    return (
    <div>
      <div className="jumbotron">
        <h1 class="display-1 text">Camille's Corner</h1>
      </div>
      <div className="container">
        <h1>Recent Blog Posts</h1>
        <div className="row">
          {recentPosts ? recentPosts.map((post) => {return <BlogCard post={post}/>}) : ""}
        </div>
      </div>
      <NavigateButton buttonName="Home" url="/" />
    </div>
  );
};

export default Home;
