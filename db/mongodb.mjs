import mongoose from "mongoose";
import { config } from "dotenv";
config();

export async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected");
  } catch (e) {
    console.error("Error connecting to database");
    console.error(e);
  }
}

export async function disconnectFromMongo() {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected");
  } catch (e) {
    console.error("Error disconnecting from database");
    console.error(e);
  }
}
