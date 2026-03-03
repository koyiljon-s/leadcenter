import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { logger } from "../src/config/logger.js";

dotenv.config();

(async () => {
  const s3 = new S3Client({ region: process.env.AWS_REGION });
  try {
    await s3.send(new HeadBucketCommand({ Bucket: process.env.S3_BUCKET }));
    logger.info("S3 bucket reachable:", process.env.S3_BUCKET);
  } catch (e) {
    logger.info("S3 bucket check failed:", e.name, e.message);
    process.exit(1);
  }
})();