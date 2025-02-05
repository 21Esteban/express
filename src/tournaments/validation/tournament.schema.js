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

// Esquema de validación para el registro de un puntaje (score) en un torneo.
export const submitScoreSchema = yup.object().shape({
  chefId: yup.string().required("Chef ID is required"),
  score: yup
    .number()
    .min(0, "Score must be at least 0")
    .max(100, "Score must be at most 100")
    .required("Score is required"),
});