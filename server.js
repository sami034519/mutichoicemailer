import express from "express";
import cors from "cors";
import router from "./controllers/controllers.js";

const app = express();

app.use(cors({
  origin: "https://multichoice-home-security.vercel.app",
}));
app.use(express.json());
app.use("/api/order", router);

// This is required for Vercel compatibility
export default function handler(req, res) {
  return app(req, res); // allows Express to handle the request
}
