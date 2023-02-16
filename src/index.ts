import "./loadEnvironments.js";
import express from "express";
import createDebug from "debug";
import chalk from "chalk";
import morgan from "morgan";

const debug = createDebug("challenge-api");
const port = process.argv[3] ?? process.env.PORT ?? 5000;
const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug("I'm Alive!");
  next();
});

app.get("/", (req, res, next) => {
  res.status(200).json({ cosetas: {} });
});

app.get("/things", (req, res, next) => {
  res.status(200).json({ cosetas: ["tenis", "cocina", "paintball"] });
  next();
});

app.get("/things/:thingId", (req, res, next) => {
  res.status(200).json("tenis");
});

app.listen(port, () => {
  debug(chalk.cyan.bold(`Server started at http://localhost:${port}`));
});
