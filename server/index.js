const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./firebase").firestore();
const firestore = require("./firebase").firestore;

const blog_posts = require("./blog_posts/blog_posts");
const forum_posts = require("./forum_posts/forum_posts");
const comments = require("./comments/comments");
const store = require("./store/store");
const users = require("./users/users");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(blog_posts);
app.use(forum_posts);
app.use(comments);
app.use(store);
app.use(users);

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}...`);
});
