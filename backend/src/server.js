import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { connectDB } from "./config/db.js";

await connectDB();

app.listen(env.port, () => {
  logger.info(`Server listening on port ${env.port}`);
});