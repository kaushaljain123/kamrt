const User = require("../model/userModel");
const nodemailer = require("nodemailer");

exports.registerUser = async (req, res) => {
  const findExistsEmail = await User.findOne({ email: req.body.email });

  if (findExistsEmail) {
    return res.json({
      status: true,
      message: "Email is Already Register with us!",
    });
  } else {
    const user = await User.create(req.body);

    if (user) {
      res.json({ status: true, message: "User Register Successfully!" });
    } else {
      res.json({ status: false, message: "Server Error!" });
    }
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.json({ status: false, message: "Invalid Login Details!" });
  }

  // check if password match
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.json({ status: false, message: "Invalid Login Details!" });
  }

  const token = user.getSignToken();

  res.json({ status: true, loginToken: token });
};

exports.emailSend = async (req, res) => {
  let data = await User.findOne({ email: req.body.email });

  if (data) {
    console.log(data);
    sendEmail(data);
  }
};

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: "jainkaushal123456@gmail.com", // generated ethereal user
      pass: "mphmlruzdjtsxyeo", // generated ethereal password
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: "Welcome Message",
    text: "Welcome to KMART thank you for shopping with US !",
  };

  const info = await transporter.sendMail(message);
};
