import chalk from "chalk";
import debug from "debug";
import { type Request, type Response } from "express";
import { knownThings, type ThingKnownStructure } from "../thingsIKnow.js";

export const getKnownThings = (req: Request, res: Response) => {
  debug(chalk.bgGreen(`Here, a list of known stuff`));
  res.status(200).json({ knownThings });
};

export const getKnownThingById = (req: Request, res: Response) => {
  const id = req.params.thingId;
  const thingById = knownThings.find((thing) => thing.id === +id);

  debug(chalk.bgGreen(`Here you go!`));
  res.status(200).json({ thing: thingById });
};

export const deleteKnownThingById = (req: Request, res: Response) => {
  const id = req.params.thingId;

  const thingToDelete = knownThings.findIndex((thing) => thing.id === +id);
  const thingToDeletePosition = thingToDelete;
  knownThings.splice(thingToDeletePosition, 1);
  debug(`Deleted item with id:${id}`);
  res.status(200).json({ knownThings });
};

export const createNewThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingKnownStructure
  >,
  res: Response
) => {
  const newThing = req.body;
  knownThings.push({ ...newThing, id: Date.now() });
  debug(chalk.bgBlue(`Adding new item:`, newThing.name));
  res.status(201).json({ knownThings });
};

export const modifyKownThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingKnownStructure
  >,
  res: Response
) => {
  const { id, name } = req.body;
  const knownThingToModify = knownThings.find((thing) => thing.id === id);

  if (!knownThingToModify) {
    return res.status(404).json({ error: "Not match for given id" });
  }

  const knownThingToModifyPosition = knownThings.indexOf(knownThingToModify);
  knownThings[knownThingToModifyPosition].name = name
    ? name
    : knownThingToModify.name;

  debug(chalk.bgYellow(`Modifyed item: `, knownThingToModify.name));
  res.status(201).json({ knownThings });
};
