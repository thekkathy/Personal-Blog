const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO");
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}...`);
});
