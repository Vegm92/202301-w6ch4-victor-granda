import { Router } from "express";
import {
  createNewThing,
  deleteKnownThingById,
  getKnownThingById,
  getKnownThings,
  modifyKownThing,
} from "../controllers/knownThingsControllers.js";

// eslint-disable-next-line new-cap
export const knownThingsRouter = Router();

knownThingsRouter.get("/things", getKnownThings);
knownThingsRouter.get("/things/:idThing", getKnownThingById);
knownThingsRouter.get("/things/:idThing", deleteKnownThingById);
knownThingsRouter.get("/things", createNewThing);
knownThingsRouter.get("/things", modifyKownThing);
