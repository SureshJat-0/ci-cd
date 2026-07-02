import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log("Error: ", err));

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Hello from Node.js server!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
