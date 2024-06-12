var express = require("express");
require("dotenv").config();
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const app = express();

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use SSL
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_PASS,
  },
};
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages", success);
  }
});
router.post("/send", (req, res, next) => {
  const { name, email, message } = req.body;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: "me.achemlal@gmail.com",
    subject: "🎉 Meryem, tu as reçu un message depuis ton Portfolio ! 🎉",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });

      console.log("first");
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.REACT_APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
