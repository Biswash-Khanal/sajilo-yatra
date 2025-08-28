import express from "express";

import { env } from "./config/config.js";
import { errorMiddleWare } from "./middlewares/error.middleware.js";
import { homeRouter } from "./routers/home.router.js.js";
import { fareRouter } from "./routers/fare.router.js";
import { routeRouter } from "./routers/route.router.js";
import { vehicleRouter } from "./routers/vehicle.router.js";
import { adminRouter } from "./routers/admin.router.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(express.urlencoded({ extended: true }));

app.use("/api/home", homeRouter);
app.use("/api/fare", fareRouter);
app.use("/api/routes", routeRouter);
app.use("/api/vehicles", vehicleRouter);

app.use("/api/admin", adminRouter);

app.use(errorMiddleWare);

app.listen(env.port, () => {
  console.log(`backend running successfully!\nhttp://localhost:${env.port}`);
});
