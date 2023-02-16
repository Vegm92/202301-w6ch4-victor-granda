import "./loadEnvironments.js";
import express from "express";
import createDebug from "debug";
import chalk from "chalk";
import morgan from "morgan";
import { knownThingsRouter } from "./routers/thingsKnownRouters.js";

const port = process.env.PORT ?? 4000;
const debug = createDebug("things");
const app = express();

app.use(() => {
  debug("Im alive");
});

app.use(morgan("dev"));
app.use(express.json());
app.use("/", knownThingsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found!" });
});

app.listen(port, () => {
  debug(chalk.cyan.bold(`Server started at http://localhost:${port}`));
});
