import chalk from "chalk";
import debug from "debug";
import { type Request, type Response } from "express";
import {
  knownThings,
  type ThingKnownStructure,
  type ThingsKnown,
} from "../thingsIKnow";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json({ knownThings });
};

export const getKnownThingById = (req: Request, res: Response) => {
  const id = req.params.thingId;
  const thingById = knownThings.find((thing) => thing.id === +id);

  res.status(200).json({ thing: thingById });
};

export const deleteKnownThingById = (req: Request, res: Response) => {
  const id = req.params.thingId;

  const filteredThings = knownThings.filter((thing) => thing.id !== +id);

  res.status(200).json({ filteredThings });
  debug(chalk.bgGreen(`Delete item with id:`, id));
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
  knownThings.push(newThing);
  res.status(201).json({ knownThings });
  debug(chalk.bgGreen(`Adding new item: `, newThing));
};
