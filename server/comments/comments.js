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
    const id = req.query.id;
    const ref = db.collection('blog_posts').doc(id).collection('comments');
    const snapshot = await ref.get();
    const comments = [];
    snapshot.forEach(doc => {
        comments.push(
            {author_name: doc._fieldsProto.author_name?.stringValue, 
            author_id: doc._fieldsProto.author_id?.stringValue, 
            text: doc._fieldsProto.text?.stringValue,
            num_likes: doc._fieldsProto?.num_likes.integerValue,
            liked_by: doc._fieldsProto?.liked_by?.arrayValue.values,
            doc_id: doc.id,});
    })
    res.send(comments);
})

app.get("/comments/forum", async (req, res) => {
    const id = req.query.id;
    const snapshot = await db.collection('forum_posts').doc(id).collection('comments').get();
    const comments = [];
    snapshot.forEach(doc => {
        comments.push(
            {author_name: doc._fieldsProto.author_name?.stringValue, 
            author_id: doc._fieldsProto.author_id?.stringValue, 
            text: doc._fieldsProto.text?.stringValue,
            num_likes: doc._fieldsProto?.num_likes.integerValue,
            liked_by: doc._fieldsProto?.liked_by?.arrayValue.values,
            doc_id: doc.id,});
    })
    res.send(comments);
})

app.post("/comments/blog/add", async (req, res) => {
    const r = await db.collection('blog_posts').doc(req.body.post_id).collection('comments').add(
        {
            num_likes: req.body.num_likes,
            text: req.body.text,
            author_name: req.body.author_name,
            author_id: req.body.author_id,
            liked_by: [],
        });
    const uRef = db.collection('users').doc(req.body.author_id);
    const u = await uRef.get();
    //if user hasn't already commented on this post, add to their array
    if(typeof u.commented_posts === 'undefined' || u.commented_posts.indexOf(req.body.post_id) === -1){
    const unionRes = await uRef.update({
        commented_posts: admin.firestore.FieldValue.arrayUnion(req.body.post_id)
    })
    } 
    const pRef = db.collection('blog_posts').doc(req.body.post_id);
    const p = await pRef.get();
    const postUnion = await pRef.update({
        num_comments: admin.firestore.FieldValue.increment(1)
    });  
    res.sendStatus(200);
})

app.post("/comments/forum/add", async (req, res) => {
    const r = await db.collection('forum_posts').doc(req.body.post_id).collection('comments').add(
        {
            num_likes: req.body.num_likes,
            text: req.body.text,
            author_name: req.body.author_name,
            author_id: req.body.author_id,
            liked_by: [],
        });
    res.sendStatus(200);
})

app.post("/comment/blog/add_like", async (req, res) => {
    const ref = db.collection('blog_posts').doc(req.body.post_id).collection('comments').doc(req.body.comment_id);
    //increase comment's likes by 1
    //const r = await ref.get();
    const u = await ref.update({
        num_likes: admin.firestore.FieldValue.increment(1),
    });
    const l = await ref.update({
        liked_by: admin.firestore.FieldValue.arrayUnion(req.body.user_id),
    });
    res.sendStatus(200);
})

app.post("/comment/forum/add_like", async (req, res) => {
    const ref = db.collection('forum_posts').doc(req.body.post_id).collection('comments').doc(req.body.comment_id);
    //increase comment's likes by 1
    //const r = await ref.get();
    const u = await ref.update({
        num_likes: admin.firestore.FieldValue.increment(1)
    });
    const l = await ref.update({
        liked_by: admin.firestore.FieldValue.arrayUnion(req.body.user_id),
    });
    res.sendStatus(200);
})

app.post("/comment/blog/remove_like", async (req, res) => {
    const ref = db.collection('blog_posts').doc(req.body.post_id).collection('comments').doc(req.body.comment_id);
    //increase comment's likes by 1
    //const r = await ref.get();
    const u = await ref.update({
        num_likes: admin.firestore.FieldValue.increment(-1)
    });
    const l = await ref.update({
        liked_by: admin.firestore.FieldValue.arrayRemove(req.body.user_id),
    });
    res.sendStatus(200);
})

app.post("/comment/forum/remove_like", async (req, res) => {
    const ref = db.collection('forum_posts').doc(req.body.post_id).collection('comments').doc(req.body.comment_id);
    //increase comment's likes by 1
    //const r = await ref.get();
    const u = await ref.update({
        num_likes: admin.firestore.FieldValue.increment(-1)
    });
    const l = await ref.update({
        liked_by: admin.firestore.FieldValue.arrayRemove(req.body.user_id),
    });
    res.sendStatus(200);
})

module.exports = app;