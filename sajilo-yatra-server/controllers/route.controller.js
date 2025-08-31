import { Router } from "express";

export const routeRouter = Router();

routeRouter.get("", (req, res) => {
  res.send("Accessing routeRouter");
});

