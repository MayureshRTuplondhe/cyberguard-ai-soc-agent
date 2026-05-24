import express from "express";

import {
  analyzeThreat,
} from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzeThreat);

export default router;