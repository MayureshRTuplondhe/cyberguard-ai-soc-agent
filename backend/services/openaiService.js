import { GoogleGenAI } from "@google/genai";

const analyzeLog = async (log) => {
  try {

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are an advanced SOC (Security Operations Center) AI analyst.

Analyze the cybersecurity log below.

Identify:
- attack type
- severity
- risk score
- explanation
- mitigation steps

Security Log:
${log}

Rules:
- Return ONLY valid JSON
- No markdown
- Risk score must be between 0 and 100

JSON format:

{
  "threatType": "",
  "severity": "",
  "riskScore": 0,
  "explanation": "",
  "recommendation": []
}
`;

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    const text = response.text;

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);

  } catch (error) {

    console.log("Gemini Error:", error);

    return {
      threatType: "Unknown Threat",
      severity: "Low",
      riskScore: 10,
      explanation: "AI analysis failed",
      recommendation: "Retry analysis",
    };
  }
};

export default analyzeLog;