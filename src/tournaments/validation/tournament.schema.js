// tournament.schema.js

import * as Yup from "yup";

// Esquema para crear un registro (todos los campos son obligatorios)
export const createTournamentSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  location: Yup.string().required("location is required"),
  maxChefs: Yup.number().required("maxChefs is required")
});

// Esquema para actualizar un registro (campos opcionales)
export const updateTournamentSchema = Yup.object().shape({
  name: Yup.string(),
  location: Yup.string(),
  maxChefs: Yup.number()
});
