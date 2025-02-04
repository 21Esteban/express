import mongoose from "mongoose";
const { Schema } = mongoose;

const tournamentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    maxChefs: {
      type: Number,
      required: true,
    },
    chefs: [
      {
        chefId: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
        score: { type: Number, min: 0, max: 100, default: null },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TournamentModel = mongoose.model("tournament", tournamentSchema);
