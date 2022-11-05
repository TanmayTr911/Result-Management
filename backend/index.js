const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const adminRoutes=require('./routes/adminRoutes')
const studentRoutes=require('./routes/studentRoutes')
const port=5050;

app.get("/", (req, res) => {
  res.send("result management");
});
// app.get("/lavda",verifyToken,(req, res) => {
//   res.send("Token Verify karne ke lie request!!");
// });

app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

app.listen(port, () => {
  console.log(`server fired on port ${port}`);
});
