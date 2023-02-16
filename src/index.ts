import "./loadEnvironments.js";
import express from "express";
import createDebug from "debug";
import chalk from "chalk";
import morgan from "morgan";
import { knownThings, ThingKnownStructure } from "./thingsIKnow.js";

const debug = createDebug("challenge-api");
const port = process.argv[3] ?? process.env.PORT ?? 4000;
const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug("I'm Alive!");
  next();
});

app.get("/things", (req, res, next) => {
  res.status(200).json({ knownThings });
  next();
});

app.get("/things/:thingId", (req, res, next) => {
  res.status(200).json();
});

app.listen(port, () => {
  debug(chalk.cyan.bold(`Server started at http://localhost:${port}`));
});
