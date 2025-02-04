import { Router } from "express";
import chefController from "../controller/chef.controller.js";
import {
  createChefSchema,
  updateChefSchema,
} from "../validation/chef.schema.js";
import validateSchema from "../../middleware/validateSchema.js";

const route = Router();

route.get("/", chefController.getChefs);
route.get("/:id", chefController.getChefById);
route.post("/", validateSchema(createChefSchema), chefController.createChef);
route.put("/:id", validateSchema(updateChefSchema), chefController.updateChef);
route.delete("/:id", chefController.deleteChef);

export default route;
