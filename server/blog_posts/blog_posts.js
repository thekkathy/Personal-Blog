const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const firestore = require("./../firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/blog_posts/get", async (req, res) => {
  const blogPosts = [];
  const snapshot = await db.collection("blog_posts").get();
  snapshot.forEach((doc) => {
    blogPosts.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(blogPosts);
});

app.post("/blog_posts/add", async (req, res) => {
  const { title, text, pic_url, ...rest } = req.body;
  const resp = await db.collection("blog_posts").add({
    title,
    text,
    pic_url,
    num_comments: 0,
    num_likes: 0,
  });
  console.log("Created new blog post with ID: ", resp.id);


  //this is the code for adding a comment to a post, reuse this when getting to comments

  // const resp2 = await db
  //   .collection("blog_posts")
  //   .doc(resp.id)
  //   .collection("comments")
  //   .add({
  //     title: "test",
  //     text: "This is a comment",
  //     num_likes: 0,
  //     author: "this should be an id",
  //   });
  // console.log("added comment collection to new blog post");
  res.sendStatus(200);
});

app.put("/blog_posts/update", async (req, res) => {
  const { doc_id, title, text, pic_url, ...rest } = req.body;
  const resp = await db.collection("blog_posts").doc(doc_id).update({
    title,
    text,
    pic_url,
  });
  res.send("Got a PUT request to update post:" + resp.id);
});

app.delete("/blog_posts/delete", async (req, res) => {
  const { doc_id, ...rest } = req.body;
  const resp = await db.collection("blog_posts").doc(doc_id).delete();
  console.log("From blog posts, deleted: ", doc_id);
  res.send("Got a DELETE request");
});

app.post("/blog_posts/like", async (req, res) => {
  //increase number of liked posts for specific blog post
  const blogLike = await db.collection("blog_posts").doc(req.body.blogid).get();
  const love= await blogLike.data().num_likes;

  //add liked blog post to user profilePage
  const person = await db.collection("users").doc(req.body.user.uid).get();
  const personlikes= await person.data().liked_posts;
 
  if (personlikes.includes(req.body.blogid)){//unlike
    const removeLike = await db.collection("blog_posts").doc(req.body.blogid).update({num_likes:love-1});
    for( var i = 0; i < personlikes.length; i++){ 
      if ( personlikes[i] === req.body.blogid) { 
        personlikes.splice(i, 1);
        break; 
      }
    }
    const LikeUser = await db.collection("users").doc(req.body.user.uid).update({liked_posts:[...personlikes]});
  }else{//like
    const addLike = await db.collection("blog_posts").doc(req.body.blogid).update({num_likes:love+1});
    const addLikeUser = await db.collection("users").doc(req.body.user.uid).update({liked_posts:[...personlikes,req.body.blogid]});
  }
})

module.exports = app;

