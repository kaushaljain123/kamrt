const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load Routes File
const catalog = require("./routes/catalog");
const user = require("./routes/user");
const upload = require("./routes/upload");
const cart = require("./routes/cart");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// connect database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/catalog", catalog);
app.use("/api/v1/user", user);
app.use("/api/v1/upload", upload);
app.use("/api/v1/cart", cart);

app.use("/upload", express.static("upload"));

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server is Running on PORT ${port}`);
});
