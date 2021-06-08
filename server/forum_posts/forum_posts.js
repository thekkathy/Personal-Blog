const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const firestore = require("./../firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/forum_posts/get", async (req, res) => {
  const forumPosts = [];
  const snapshot = await db.collection("forum_posts").get();
  snapshot.forEach((doc) => {
    forumPosts.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(forumPosts);
});

module.exports = app;