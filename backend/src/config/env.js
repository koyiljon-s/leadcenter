import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3000,

  mongoURI: process.env.MONGO_URI,

  // JWT
  jwtSecret: process.env.JWT_SECRET || "supersecret",

  // Admin
  adminUsername: (process.env.ADMIN_USERNAME || "").trim(),
  adminPassword: (process.env.ADMIN_PASSWORD || "").trim(), // Hashed

  // AWS S3
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,        
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
  awsRegion: process.env.AWS_REGION,
  s3Bucket: process.env.S3_BUCKET,
  s3Prefix: process.env.S3_PREFIX || "products/",     
};

if (!env.mongoURI) throw new Error("MONGO_URI is not defined. Put it in backend/.env");
if (!env.adminUsername || !env.adminPassword) {
  console.warn("ADMIN_USERNAME or ADMIN_PASSWORD is not defined. Login will fail.");
}
