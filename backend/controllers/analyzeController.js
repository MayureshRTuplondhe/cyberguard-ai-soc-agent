import analyzeLog from "../services/openaiService.js";

export const analyzeThreat = async (
  req,
  res,
  next
) => {
  try {
    const { log } = req.body;

    if (!log) {
      return res.status(400).json({
        error: "Security log required",
      });
    }

    const result = await analyzeLog(log);

    res.json(result);

  } catch (error) {
    next(error);
  }
};