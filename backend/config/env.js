import dotenv from "dotenv";
dotenv.config();

export const env = {
   port: Number(process.env.PORT) || 3000,
   mongoURI: process.env.MONGO_URI,
 };
 
 if (!env.mongoURI) {
   throw new Error("MONGO_URI is not defined. Put it in backend/.env");
 }