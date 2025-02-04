// chef.schema.js

import * as Yup from "yup";

// Esquema para crear un registro (todos los campos son obligatorios)
export const createChefSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  specialty: Yup.string().required("the specialty is required"),
  experienceYears: Yup.number().required("Years of experience are required")
});

// Esquema para actualizar un registro (campos opcionales)
export const updateChefSchema = Yup.object().shape({
  name: Yup.string(),
  specialty: Yup.string(),
  experienceYears: Yup.number()
});
