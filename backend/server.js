import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import analyzeRoutes from "./routes/analyzeRoutes.js";



const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "CyberGuard AI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});