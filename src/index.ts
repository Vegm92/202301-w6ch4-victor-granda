import "./loadEnvironments.js";
import express from "express";
import createDebug from "debug";
import chalk from "chalk";
import morgan from "morgan";

const debug = createDebug("challenge-api");
const port = process.argv[3] ?? process.env.PORT ?? 5000;
const app = express();

app.use(morgan("dev"));

app.use(
  (req, res, next) => {
    debug("I'm Alive!");
    next();
  },
  (req, res) => {
    res.status(200).json();
  }
);

app.listen(port, () => {
  debug(chalk.cyan.bold(`Server started at http://localhost:${port}`));
});
