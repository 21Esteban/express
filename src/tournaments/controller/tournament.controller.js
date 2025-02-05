import tournamentServices from "../services/tournaments.services.js";

const tournamentsController = {};

// ** controlador para listar los tournaments
tournamentsController.getTournaments = (req, res) => {
  return tournamentServices.getTournaments(req, res);
};

// ** controlador para listar un solo tournaments
tournamentsController.getTournamentsById = (req, res) => {
  return tournamentServices.getTournamentById(req, res);
};

// ** controlador para obtener el rankin de un tournament
tournamentsController.getRanking = (req, res) => {
  return tournamentServices.getRanking(req, res);
};

// ** controlador para crear un tournaments
tournamentsController.createTournaments = (req, res) => {
  return tournamentServices.createTournaments(req, res);
};

// ** controlador para actualizar un tournaments
tournamentsController.updateTournaments = (req, res) => {
  return tournamentServices.updateTournament(req,res)
};

// ** controlador para registar un chef dentro de un torneo
tournamentsController.registerChef = (req, res) => {
  return tournamentServices.registerChef(req,res)
}

// ** controlador para registar un score en un tournament
tournamentsController.submitScore = (req, res) => {
  return tournamentServices.submitScore(req,res)
}

// ** controlador para eliminar un tournaments
tournamentsController.deleteTournaments = (req, res) => {
  return tournamentServices.deleteTournament(req,res)
};

export default tournamentsController;
