const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({status: "fail", message: "Missing fields"});
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || process.env.REACT_APP_USER,
      pass: process.env.EMAIL_PASS || process.env.REACT_APP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "me.achemlal@gmail.com",
    subject: "🎉 Meryem, tu as reçu un message depuis ton Portfolio !",
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({status: "success"});
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({status: "fail"});
  }
};
