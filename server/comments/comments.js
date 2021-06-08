const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const admin = require("firebase-admin");
const firestore = require("./../firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/comments/blog", async (req, res) => {
    
})

app.get("/comments/forum", async (req, res) => {
    
})

app.post("/comments/blog/add", async (req, res) => {
    const r = await db.collection('blog_posts').doc(req.body.post_id).collection('comments').add(
        {
            num_likes: req.body.num_likes,
            text: req.body.text,
            author: req.body.author,
        });
    const uRef = db.collection('users').doc(req.body.author);
    const u = await uRef.get();
    //if user hasn't already commented on this post, add to their array
    if(typeof u.commented_posts === 'undefined' || u.commented_posts.indexOf(req.body.post_id) === -1){
    const unionRes = await uRef.update({
        commented_posts: admin.firestore.FieldValue.arrayUnion(req.body.post_id)
    })
    }   
    res.sendStatus(200);
})

app.post("/comments/forum/add", async (req, res) => {
    const r = await db.collection('forum_posts').doc(req.body.post_id).collection('comments').add(
        {
            num_likes: req.body.num_likes,
            text: req.body.text,
            author: req.body.author,
        });
    res.sendStatus(200);
})

module.exports = app;