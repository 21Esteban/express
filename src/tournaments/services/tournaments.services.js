import { ChefModel } from "../../chef/model/chef.model.js";
import { TournamentModel } from "../model/tournament.model.js";

const tournamentServices = {};

// ** servicio para listar los Tournaments
tournamentServices.getTournaments = async (req, res) => {
  try {
    const tournament = await TournamentModel.find().populate(
      "chefs.chefId",
      "name"
    );
    return res
      .status(200)
      .send({ ok: true, data: tournament, message: "tournament list" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para obtener un Tournament por id
tournamentServices.getTournamentById = async (req, res) => {
  try {
    const { id } = req.params;
    const tournament = await TournamentModel.findById(id);

    if (!tournament) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    return res
      .status(200)
      .send({ ok: true, data: tournament, message: "tournament founded" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para obtener el ranking de un torneo
tournamentServices.getRanking = async (req, res) => {
  try {
    const { id } = req.params;
    const tournament = await TournamentModel.findById(id).populate(
      "chefs.chefId",
      "name"
    );

    if (!tournament) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    const ranking = tournament.chefs
      .filter((c) => c.score !== null)
      .sort((a, b) => b.score - a.score)
      .map((entry) => ({ chef: entry.chefId.name, score: entry.score }));

    return res.status(200).send({ok: true,data: {tournament: tournament.name,location: tournament.location,ranking: ranking},message: "ranking",});
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para crear un Tournament
tournamentServices.createTournaments = async (req, res) => {
  try {
    const { name, location, maxChefs } = req.body;

    const newTournament = await TournamentModel.create({
      name,
      location,
      maxChefs,
      chefs: [],
    });

    return res
      .status(200)
      .send({ ok: true, data: newTournament, message: "Tournament created" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para actualizar un Tournament
tournamentServices.updateTournament = async (req, res) => {
  try {
    const { id } = req.params;

    const tournamentFound = await TournamentModel.findById(id);

    if (!tournamentFound) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    const { name, location, maxChefs } = req.body;

    await tournamentFound.updateOne({ name, location, maxChefs });

    return res.status(200).send({
      ok: true,
      data: { ...tournamentFound._doc, name, location, maxChefs },
      message: "tournament updated",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para registrar un chefs en el tournament
tournamentServices.registerChef = async (req, res) => {
  try {
    const { id } = req.params;

    const tournamentFound = await TournamentModel.findById(id);

    if (!tournamentFound) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    if (tournamentFound.chefs.length >= tournamentFound.maxChefs) {
      return res.status(400).send({ ok: false, message: "Tournament is full" });
    }
    const { chefId } = req.body;

    const chef = await ChefModel.findById(chefId);

    if (!chef) {
      return res.status(404).send({ ok: false, message: "chef not found" });
    }

    if (tournamentFound.chefs.some((chef) => chef._id == chefId)) {
      return res.status(400).send({
        ok: false,
        message: "Chef is already registered in the tournament",
      });
    }

    await tournamentFound.updateOne({ $push: { chefs: { chefId } } });

    return res.status(200).send({
      ok: true,
      data: { ...tournamentFound._doc },
      message: "chef registed into tournament",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para registrar el score de un chef en un tournament
tournamentServices.submitScore = async (req, res) => {
  try {
    const { id } = req.params;

    const tournamentFound = await TournamentModel.findById(id);

    if (!tournamentFound) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    const { chefId, score } = req.body;

    if (score < 0 || score > 100) {
      return res
        .status(400)
        .send({ ok: false, message: "Score must be between 0 and 100" });
    }

    const chefIsInTournament = tournamentFound.chefs.find(
      (chef) => chef._id == chefId
    );
    if (!chefIsInTournament) {
      return res
        .status(404)
        .send({ ok: false, message: "Chef not in tournament" });
    }

    chefIsInTournament.score = score;
    await tournamentFound.save();

    return res.status(200).send({
      ok: true,
      data: tournamentFound,
      message: "Score updated successfully",
    });
  } catch (error) {}
};

// ** servicio para eliminar un Tournament
tournamentServices.deleteTournament = async (req, res) => {
  try {
    const { id } = req.params;

    const tournamentFound = await TournamentModel.findById(id);

    if (!tournamentFound) {
      return res
        .status(404)
        .send({ ok: false, message: "tournament not found" });
    }

    await tournamentFound.deleteOne();
    return res.status(200).send({ ok: true, message: "tournament deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

export default tournamentServices;
