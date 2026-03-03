import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("LeadCenter API running"))

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});



export default app;