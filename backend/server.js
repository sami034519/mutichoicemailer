import express from "express";
import cors from "cors";
import router from "./controllers/controllers.js";

const app = express();

app.use(cors({
  origin: "https://multichoice-home-security.vercel.app"
}));
app.use(express.json());
app.use("/api/order", router);

export default app; // important for Vercel serverless function
