const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./firebase").firestore();
const firestore = require("./firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/blog_posts/get", async (req, res) => {
  const blogPosts = [];
  const snapshot = await db.collection("blog_posts").get();
  snapshot.forEach((doc) => {
    blogPosts.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(blogPosts);
});

app.get("/forum_posts/get", async (req, res) => {
  const forumPosts = [];
  const snapshot = await db.collection("forum_posts").get();
  snapshot.forEach((doc) => {
    forumPosts.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(forumPosts);
});

app.get("/store/get", async (req, res) => {
  const store = [];
  const snapshot = await db.collection("store").get();
  snapshot.forEach((doc) => {
    store.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(store);
});

app.get("/users/get", async (req, res) => {
  const users = [];
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc) => {
    users.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}...`);
});
