import { Router } from "express";

export const vehicleRouter = Router();

vehicleRouter.get("", (req, res) => {
  res.send("Accessing vehicleRouter");
});
