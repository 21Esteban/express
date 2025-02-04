import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGO_URI}${process.env.DATABASE_NAME}`);
    console.log("codigo conectado a la base de datos", db.connection.name);
  } catch (error) {
    console.log("Error connection to database");
  }
};
