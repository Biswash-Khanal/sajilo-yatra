import { Router } from "express";

export const fareRouter = Router();

fareRouter.get("", (req, res) => {
  res.send("Accessing fareRouter");
});

