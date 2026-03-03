import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "./logger.js";

export async function connectDB() {
  await mongoose.connect(env.mongoURI);
  logger.info("MongoDB connected");
}