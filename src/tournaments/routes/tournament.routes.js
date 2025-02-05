import { Router } from "express";
import tournamentsController from "../controller/tournament.controller.js";
import { createTournamentSchema, updateTournamentSchema, submitScoreSchema } from "../validation/tournament.schema.js";
import validateSchema from "../../middleware/validateSchema.js";


const route = Router();

// ** ruta para obtener los torneos
route.get("/", tournamentsController.getTournaments);

// ** ruta para obtener un torneo por id
route.get("/:id", tournamentsController.getTournamentsById);

// ** ruta para obtener el ranking de un torneo
route.get("/:id/ranking", tournamentsController.getRanking)

// ** ruta para crear un torneo
route.post("/",validateSchema(createTournamentSchema),tournamentsController.createTournaments);

// ** ruta para actualizar un torneo como su nombre , lugar y cantidad de chefs maximos
route.put("/:id", validateSchema(updateTournamentSchema), tournamentsController.updateTournaments);

// ** ruta para registrar un chef en un torneo 
route.post("/:id/register", tournamentsController.registerChef);

// ** ruta para registrar el score de un chef en un torneo 
route.post("/:id/submit", validateSchema(submitScoreSchema),tournamentsController.submitScore);

// ** ruta para eliminar un torneo
route.delete("/:id", tournamentsController.deleteTournaments);

export default route;

