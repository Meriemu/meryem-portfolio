const nodemailer = require("../back/node_modules/nodemailer");

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.REACT_APP_USER,
        pass: process.env.REACT_APP_PASS,
      },
    });

    const mailOptions = {
      from: name,
      to: "me.achemlal@gmail.com",
      subject: "🎉 Meryem, tu as reçu un message depuis ton Portfolio ! 🎉",
      text: `name: ${name} \n email: ${email} \n message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ status: "fail" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
