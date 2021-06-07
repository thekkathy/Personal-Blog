const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./../firebase").firestore();
const firestore = require("./../firebase").firestore;

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/store/get", async (req, res) => {
  const store = [];
  const snapshot = await db.collection("store").get();
  snapshot.forEach((doc) => {
    store.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(store);
});

module.exports = app;
