const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const firestore = require("./../firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users/get", async (req, res) => {
  const users = [];
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc) => {
    users.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(users);
});

module.exports = app;
