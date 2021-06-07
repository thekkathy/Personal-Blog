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

module.exports = app;