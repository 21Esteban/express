import mongoose from "mongoose";
const { Schema } = mongoose;

const chefSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

export const ChefModel = mongoose.model("Chef", chefSchema);
