const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const firestore = require("./../firebase").firestore;
const firebaseConfig = require('../firebaseConfig')
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

//If there is a user with matching id get their info, if there isn't one create one
app.get("/users/signin", async (req, res) => {
  const data = {
    uid: req.query.uid,
    displayName: req.query.displayName,
    email:req.query.email,
    photoURL: req.query.photoURL,
    liked_posts: [],
    commented_posts: [],
  };
  const userCheck = await db.collection("users").doc(req.query.uid).get();
  if (!userCheck.exists) {
    const userInsert = await db.collection('users').doc(req.query.uid).set(data);
    // console.log(data)
    res.send(data)
  } else {
    // console.log(userCheck.data())
    res.send(userCheck.data());
  }
})


module.exports = app;
