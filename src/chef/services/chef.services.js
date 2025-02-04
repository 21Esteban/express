import { ChefModel } from "../model/chef.model.js";

const chefServices = {};

// ** servicio para listar los chefs
chefServices.getChefs = async (req, res) => {
  try {
    const chefs = await ChefModel.find();
    return res
      .status(200)
      .send({ ok: true, data: chefs, message: "chefs list" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para obtener un chef
chefServices.getChef = async (req, res) => {
  try {
    const { id } = req.params;
    const chef = await ChefModel.findById(id);

    if (!chef) {
      return res.status(404).send({ ok: false, message: "chefs not found" });
    }

    return res
      .status(200)
      .send({ ok: true, data: chef, message: "chef founded" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

chefServices.createChef = async (req, res) => {
  try {
    const { name, specialty, experienceYears } = req.body;

    const newChef = await ChefModel.create({
      name,
      specialty,
      experienceYears,
    });

    return res
      .status(200)
      .send({ ok: true, data: newChef, message: "chef create" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para actualizar un chef
chefServices.updateChef = async (req, res) => {
  try {
    const { id } = req.params;

    const chefFound = await ChefModel.findById(id);

    if (!chefFound) {
      return res.status(404).send({ ok: false, message: "chef not found" });
    }

    const { name, specialty, experienceYears } = req.body;

    await chefFound.updateOne({ name, specialty, experienceYears });

    return res
      .status(200)
      .send({ ok: true, data: chefFound, message: "chef updated" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

// ** servicio para eliminar un chef
chefServices.deleteChef = async (req, res) => {
  try {
    const { id } = req.params;

    const chefFound = await ChefModel.findById(id);

    if (!chefFound) {
      return res.status(404).send({ ok: false, message: "chef not found" });
    }

    await chefFound.deleteOne();
    return res.status(200).send({ ok: true, message: "chef deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Server Error : ${error}` });
  }
};

export default chefServices;
