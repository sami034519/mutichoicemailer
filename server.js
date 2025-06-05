import express from "express";
import cors from "cors";
import router from "./controllers/controllers.js";

const app = express();

app.use(cors({
  origin: "https://multichoice-home-security.vercel.app",
}));
app.use(express.json());

// Mount your router at /api/order
app.use("/api/order", router);

// Simple test endpoint
app.get("/api/ping", (req, res) => {
  res.send("pong");
});

// Export as default handler for Vercel
export default function handler(req, res) {
  return app(req, res);
}
