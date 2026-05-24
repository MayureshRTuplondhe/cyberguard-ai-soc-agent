const sampleLogs = [
  {
    id: 1,
    title: "Brute Force Attack Detected",
    severity: "Critical",
    sourceIP: "45.22.11.90",
    riskScore: 92,
    timestamp: "10:01 AM",

    aiAnalysis:
      "Multiple failed login attempts detected from a known malicious IP address. This resembles a credential stuffing attack targeting privileged accounts.",

    rawLog:
      "Failed password for admin from 45.22.11.90 port 22 ssh2 repeated 50 times",

    status: "Active",
  },

  {
    id: 2,
    title: "Suspicious Admin Login",
    severity: "High",
    sourceIP: "102.44.11.12",
    riskScore: 78,
    timestamp: "10:12 AM",

    aiAnalysis:
      "Administrative login activity detected from an unusual geographic region outside normal user behavior patterns.",

    rawLog:
      "Admin login successful from Russia using VPN endpoint",

    status: "Investigating",
  },

  {
    id: 3,
    title: "Malware Communication",
    severity: "Critical",
    sourceIP: "77.88.23.19",
    riskScore: 95,
    timestamp: "10:18 AM",

    aiAnalysis:
      "Outbound communication detected with a command-and-control server associated with malware activity.",

    rawLog:
      "DNS requests made to suspicious domain linked with malware infrastructure",

    status: "Blocked",
  },

  {
    id: 4,
    title: "Privilege Escalation Attempt",
    severity: "High",
    sourceIP: "192.168.1.44",
    riskScore: 84,
    timestamp: "10:27 AM",

    aiAnalysis:
      "User attempted unauthorized privilege escalation using sudo exploit techniques.",

    rawLog:
      "User testuser attempted sudo access without authorization",

    status: "Active",
  },

  {
    id: 5,
    title: "Data Exfiltration Activity",
    severity: "Critical",
    sourceIP: "34.90.77.11",
    riskScore: 97,
    timestamp: "10:40 AM",

    aiAnalysis:
      "Large outbound encrypted traffic detected to external unknown server indicating possible data theft.",

    rawLog:
      "2.5GB outbound traffic transferred outside organization network",

    status: "Critical",
  },
];

export default sampleLogs;