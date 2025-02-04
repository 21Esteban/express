import chefServices from "../services/chef.services.js";

const chefController = {};

// ** controlador para listar los chefs
chefController.getChefs = (req, res) => {
  return chefServices.getChefs(req, res);
};

// ** controlador para listar un solo chef
chefController.getChefById = (req, res) => {
  return chefServices.getChef(req, res);
};

// ** controlador para crear un chef
chefController.createChef = (req, res) => {
  return chefServices.createChef(req, res);
};

// ** controlador para actualizar un chef
chefController.updateChef = (req, res) => {
  return chefServices.updateChef(req,res)
};

// ** controlador para eliminar un chef
chefController.deleteChef = (req, res) => {
  return chefServices.deleteChef(req,res)
};

export default chefController;
