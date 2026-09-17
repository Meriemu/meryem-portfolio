// back/index.js
const path = require("path");
require("dotenv").config({path: path.join(__dirname, "../.env")});

var sendEmail = require("../api/send");
var express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send", sendEmail);

const PORT = process.env.REACT_APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
