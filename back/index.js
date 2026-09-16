// back/index.js
const path = require("path");
// Force dotenv à aller chercher le .env situé au dossier parent (racine)
require("dotenv").config({path: path.join(__dirname, "../.env")});

var sendEmail = require("../api/send");
var express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Log pour vérifier que les variables sont bien chargées au démarrage
console.log("User chargé :", process.env.REACT_APP_USER);
console.log(
  "Pass chargé :",
  process.env.REACT_APP_PASS ? "Oui (masqué)" : "NON TROUVÉ",
);

app.post("/api/send", sendEmail);

const PORT = process.env.REACT_APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
