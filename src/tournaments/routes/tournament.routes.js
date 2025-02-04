import { Router } from "express";
import tournamentsController from "../controller/tournament.controller.js";
import { createTournamentSchema, updateTournamentSchema } from "../validation/tournament.schema.js";
import validateSchema from "../../middleware/validateSchema.js";

const route = Router();

route.get("/", tournamentsController.getTournaments);
route.get("/:id", tournamentsController.getTournamentsById);
route.post("/",validateSchema(createTournamentSchema),tournamentsController.createTournaments);
route.put("/:id", validateSchema(updateTournamentSchema), tournamentsController.updateTournaments);
route.delete("/:id", tournamentsController.deleteTournaments);

export default route;
