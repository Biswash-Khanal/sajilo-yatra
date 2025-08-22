//this is the app.js file

import express from "express";

import { env } from "./config/config.js";
import { errorMiddleWare } from "./middlewares/error.middleware.js";
import { AppError } from "./utils/AppError.js";

const app = express();

app.get("/", (req, res, next) => {
  try {
    throw new AppError("abcd", 400);
    
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleWare);

app.listen(env.port, () => {
  console.log(`backend running successfully!\nhttp://localhost:${env.port}`);
});
