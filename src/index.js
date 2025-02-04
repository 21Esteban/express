process.loadEnvFile();

import express from "express";
import morgan from "morgan";
import { connectDb } from "./database.js";

// ** Rutas
import chefRoutes from "./chef/routes/chef.routes.js";
import tournamentsRoutes from "./tournaments/routes/tournament.routes.js"

connectDb();
const app = express();

app.set("Port", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/chef", chefRoutes);
app.use("/api/tournaments",tournamentsRoutes)

app.get("/", (req, res) => {
  res.status(200).send("Server running");
});

app.listen(app.get("Port"), () => {
  console.log("server running at port " + app.get("Port"));
});
