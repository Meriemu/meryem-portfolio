// /back/index.js
var sendEmail = require("../api/send");
var express = require("express");
require("dotenv").config();
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Définition de la route pour envoyer un e-mail
app.post("/api/send", sendEmail);

const PORT = process.env.REACT_APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
