import express from "express";
import morgan from "morgan";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";
import authRouter from "./routers/authRouter.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());

app.use(morgan("dev")); // for prod -> app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("LeadCenter API running"))

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// Auth endpoints
app.use("/api/auth", authRouter);

// Product endpoints (Protected)
app.use("/api", authMiddleware, productRouter);

// Order endpoints (Protected)
app.use("/api", authMiddleware, orderRouter);


export default app;
