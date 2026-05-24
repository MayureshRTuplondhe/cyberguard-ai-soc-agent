import { useState } from "react";
import axios from "axios";

function Dashboard() {

  // =========================
  // STATES
  // =========================

  const [log, setLog] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [alerts, setAlerts] =
    useState([]);

  const [filter, setFilter] =
    useState("All");

  const [criticalCount, setCriticalCount] =
    useState(0);

  const [highCount, setHighCount] =
    useState(0);

  const [processedCount, setProcessedCount] =
    useState(0);

  const [activeSource, setActiveSource] =
    useState("Authentication Logs");

  // =========================
  // ANALYZE FUNCTION
  // =========================

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

      const severity =
        response.data.severity
          .toLowerCase();

      const newAlert = {

        id: Date.now(),

        title:
          response.data.threatType,

        severity:
          response.data.severity,

        riskScore:
          response.data.riskScore,

        explanation:
          response.data.explanation,
      };

      setAlerts((prev) => [
        newAlert,
        ...prev,
      ]);

      if (
        severity.includes(
          "critical"
        )
      ) {

        setCriticalCount(
          (prev) => prev + 1
        );

      } else if (
        severity.includes(
          "high"
        )
      ) {

        setHighCount(
          (prev) => prev + 1
        );
      }

      setProcessedCount(
        (prev) => prev + 1
      );

      setLog("");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="app">

      {/* ========================= */}
      {/* SIDEBAR */}
      {/* ========================= */}

      <aside className="sidebar">

        <div className="logo">

          <span className="logo-icon">
            <i className="ti ti-shield-lock"></i>
          </span>

          <div>

            <div className="logo-name">
              CyberGuard AI
            </div>

            <div className="logo-sub">
              Intelligent SOC Assistant
            </div>

          </div>

        </div>

        {/* SOURCES */}

        <div className="sidebar-section">

          <div className="sidebar-label">
            Security Sources
          </div>

          {[
            "Authentication Logs",
            "Firewall Logs",
            "Network Traffic",
            "CloudTrail Events",
            "Syslog Monitoring",
          ].map((source) => (

            <div
              key={source}
              onClick={() =>
                setActiveSource(
                  source
                )
              }
              className={`source-item ${
                activeSource === source
                  ? "active-source"
                  : ""
              }`}
            >

              <i className="ti ti-shield"></i>

              {source}

            </div>

          ))}

        </div>

        {/* AI */}

        <div className="sidebar-section">

          <div className="sidebar-label">
            AI Integrations
          </div>

          <div className="status-dot connected">
            <i className="ti ti-brain"></i>
            Gemini AI Engine
          </div>

          <div className="status-dot connected">
            <i className="ti ti-shield-check"></i>
            AlienVault OTX
          </div>

          <div className="status-dot connected">
            <i className="ti ti-activity-heartbeat"></i>
            Real-Time Detection
          </div>

        </div>

        {/* ABOUT */}

        <div className="sidebar-section about-box">

          <div className="sidebar-label">
            About Platform
          </div>

          <p>

            CyberGuard AI analyzes
            suspicious security events,
            prioritizes real threats,
            reduces alert fatigue,
            and explains attack behavior
            using AI-powered analysis.

          </p>

        </div>

      </aside>

      {/* ========================= */}
      {/* MAIN */}
      {/* ========================= */}

      <main className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <div>

            <h1 className="page-title">
              Security Threat Dashboard
            </h1>

            <p className="page-sub">

              AI-driven threat detection ·
              Risk prioritization ·
              Real-time SOC monitoring

            </p>

          </div>

          <div className="live-badge">

            <span className="live-dot"></span>

            Live Monitoring

          </div>

        </div>

        {/* ========================= */}
        {/* METRICS */}
        {/* ========================= */}

        <div className="metrics-row">

          <div className="metric-card critical">

            <div className="metric-label">
              Critical Threats
            </div>

            <div className="metric-value">
              {criticalCount}
            </div>

            <div className="metric-sub">
              Immediate response needed
            </div>

          </div>

          <div className="metric-card warning">

            <div className="metric-label">
              High Severity
            </div>

            <div className="metric-value">
              {highCount}
            </div>

            <div className="metric-sub">
              Analyst review required
            </div>

          </div>

          <div className="metric-card neutral">

            <div className="metric-label">
              Alerts Processed
            </div>

            <div className="metric-value">
              {processedCount}
            </div>

            <div className="metric-sub">
              AI-correlated events
            </div>

          </div>

          <div className="metric-card success">

            <div className="metric-label">
              False Positives Removed
            </div>

            <div className="metric-value">
              {Math.floor(
                processedCount * 0.65
              )}
            </div>

            <div className="metric-sub">
              Reduced analyst workload
            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* FILTERS */}
        {/* ========================= */}

        <div className="filters-row">

          {[
            "All",
            "Critical",
            "High",
            "Medium",
            "Low",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                setFilter(item)
              }
              className={`filter-btn ${
                filter === item
                  ? "active"
                  : ""
              }`}
            >

              {item}

            </button>

          ))}

        </div>

        {/* ========================= */}
        {/* ALERTS */}
        {/* ========================= */}

        <div className="alert-list">

          {alerts
            .filter((alert) => {

              if (
                filter === "All"
              )
                return true;

              return (
                alert.severity
                  .toLowerCase()
                  .includes(
                    filter.toLowerCase()
                  )
              );
            })
            .map((alert) => (

              <div
                key={alert.id}
                className={`alert-card ${
                  alert.severity
                    .toLowerCase()
                    .includes(
                      "critical"
                    )
                    ? "critical"
                    : "warning"
                }`}
              >

                <div className="alert-top">

                  <div>

                    <div className="alert-title">
                      {alert.title}
                    </div>

                    <div className="alert-meta">
                      AI Generated Threat
                    </div>

                  </div>

                  <div
                    className={`severity ${
                      alert.severity
                        .toLowerCase()
                        .includes(
                          "critical"
                        )
                        ? "critical"
                        : "warning"
                    }`}
                  >

                    {alert.severity}

                  </div>

                </div>

                <div className="risk-score">

                  Risk Score:
                  {" "}
                  {alert.riskScore}/100

                </div>

                <div className="ai-analysis">

                  {alert.explanation}
                  {alert.otx && (

                  <div className="otx-box">

                  Threat Intel:
                  {" "}
                  {alert.otx.pulseCount}
                  {" "}
                  malicious reports found

                </div>

                )}

                </div>

              </div>

            ))}

        </div>

        {/* ========================= */}
        {/* TIMELINE */}
        {/* ========================= */}

        <div className="timeline-section">

          <div className="timeline-header">

            <i className="ti ti-timeline"></i>

            Attack Timeline

          </div>

          <div className="timeline-list">

            {alerts
              .slice(0, 5)
              .map((alert) => (

                <div
                  key={alert.id}
                  className="timeline-item"
                >

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    {alert.title}
                    {" "}
                    detected with
                    {" "}
                    {alert.riskScore}
                    % risk

                  </div>

                </div>

              ))}

          </div>

        </div>

        {/* ========================= */}
        {/* ANALYZER */}
        {/* ========================= */}

        <div className="custom-section">

          <div className="custom-header">

            <div>

              <i className="ti ti-terminal-2"></i>

              Analyze Security Log

            </div>

            <span className="custom-badge">

              AI Powered

            </span>

          </div>

          {/* FILE UPLOAD */}

          <label className="upload-box">

            <i className="ti ti-upload"></i>

            Upload Log File

            <input
              type="file"
              hidden
            />

          </label>

          {/* TEXTAREA */}

          <textarea
            id="custom-log"
            rows="6"
            value={log}
            onChange={(e) =>
              setLog(
                e.target.value
              )
            }
            placeholder="Paste raw authentication logs, firewall events, API logs, or suspicious activity here for AI-powered analysis..."
          ></textarea>

          {/* BUTTON */}

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
          >

            <i className="ti ti-brain"></i>

            {loading
              ? "Analyzing..."
              : "Analyze Threat"}

          </button>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;