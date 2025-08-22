//this is the app.js file

import express from "express";

import { env } from "./config/config.js";

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Successfully reached the home path!" });
});

app.listen(env.port, () => {
  console.log(`backend running successfully!\nhttp://localhost:${env.port}`);
});
