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

app.get("/things/:thingId", (req, res) => {
  const id = req.params.thingId;
  const thing = knownThings.find((thing) => thing.id === +id);

  res.status(200).json({ thing });
});

app.delete("/things/:thingId", (req, res) => {
  const id = req.params.thingId;

  const filteredThings = knownThings.filter((thing) => thing.id !== +id);

  debug(chalk.bgGreen(`Delete item with id:`, id));
  res.status(200).json({ filteredThings });
});

// App.post("/things", (req, res) => {
//   const thing = req.body;
//   debug(chalk.bgGreen(`Adding new item: `, thing));
//   knownThings.push(thing);
//   res.status(201).json({ knownThings });
// });

app.listen(port, () => {
  debug(chalk.cyan.bold(`Server started at http://localhost:${port}`));
});
