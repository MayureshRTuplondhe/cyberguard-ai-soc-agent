
import { useState } from "react";
import axios from "axios";

export default function LogAnalyzer() {

const [log, setLog] = useState("");

const [loading, setLoading] =
  useState(false);

const [result, setResult] =
  useState(null);

const handleAnalyze = async () => {

  if (!log) return;

  try {

    setLoading(true);

    const response = await axios.post(
      "http://localhost:5000/api/analyze",
      {
        log,
      }
    );

    setResult(response.data);

const newAlert = {
  id: Date.now(),
  title: response.data.threatType,
  severity: response.data.severity,
  riskScore: response.data.riskScore,
  explanation: response.data.explanation,
};

setAlerts((prev) => [
  newAlert,
  ...prev,
]);

if (
  response.data.severity ===
  "Critical"
) {

  setCriticalCount(
    (prev) => prev + 1
  );

} else if (
  response.data.severity ===
  "High"
) {

  setHighCount(
    (prev) => prev + 1
  );
}

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);
  }
};

  return (
    <div className="bg-[#111827] p-6 rounded-xl text-white">

      <h2 className="text-2xl font-bold mb-4">
        Analyze Security Log
      </h2>

      <textarea
        rows="8"
        value={log}
        onChange={(e) =>
          setLog(e.target.value)
        }
        placeholder="Paste security logs here..."
        className="w-full p-4 rounded-lg bg-black border border-gray-700"
      />

      <button
        onClick={handleAnalyze}
        className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
      >
        {loading
          ? "Analyzing..."
          : "Analyze Threat"}
      </button>

      {result && (
        <div className="mt-6 bg-[#1f2937] p-4 rounded-lg">

          <h3 className="text-xl font-bold mb-2">
            Threat Analysis
          </h3>

          <p>
            <strong>Threat:</strong>{" "}
            {result.threatType}
          </p>

          <p>
            <strong>Severity:</strong>{" "}
            {result.severity}
          </p>

          <p>
            <strong>Risk Score:</strong>{" "}
            {result.riskScore}
          </p>

          <p className="mt-3">
            <strong>Explanation:</strong>
            <br />
            {result.explanation}
          </p>

          <div className="mt-3">
            <strong>Recommendations:</strong>

            <ul className="list-disc ml-6 mt-2">

              {Array.isArray(
                result.recommendation
              ) ? (
                result.recommendation.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )
              ) : (
                <li>
                  {result.recommendation}
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}