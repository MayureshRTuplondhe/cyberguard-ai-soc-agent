# 🛡️ CyberGuard AI - SOC Threat Monitoring System

## 🔥 AI-Powered Security Threat Monitoring Agent

CyberGuard AI is an intelligent SOC (Security Operations Center) dashboard that analyzes security logs, detects cyber threats, prioritizes alerts, and explains attack behavior using **Google Gemini AI**.

It helps reduce alert fatigue by automatically filtering and explaining suspicious activities in simple language.

---

## 🚀 Features

- 🤖 AI-powered log analysis using Gemini AI
- 🚨 Detects threats (Brute Force, Suspicious Login, etc.)
- 📊 Real-time SOC dashboard
- 📈 Dynamic alert system
- 🧠 Human-readable attack explanations
- 🎯 Severity filtering (Critical / High / Medium / Low)
- ⏱️ Attack timeline visualization
- 📉 Live metric updates

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Custom CSS UI

### Backend
- Node.js
- Express.js
- Google Gemini API (`@google/genai`)
- dotenv
- cors

---

## 📁 Project Structure

```
CyberGuard-AI/
│
├── frontend/
│   ├── src/
│   │   ├── pages/Dashboard.jsx
│   │   ├── components/
│   │   ├── data/sampleLogs.js
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── controllers/
│   │   └── analyzeController.js
│   ├── routes/
│   │   └── analyzeRoutes.js
│   ├── services/
│   │   └── openaiService.js   (Gemini AI logic)
│   ├── server.js
│   ├── .env
│   ├── .env.example
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/cyberguard-ai-soc-agent.git
cd cyberguard-ai-soc-agent
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### 🔐 Environment Variables (IMPORTANT)

Create a `.env` file inside the `backend` folder:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

#### 🧪 Get API Key

1. Go to: [https://aistudio.google.com/](https://aistudio.google.com/)
2. Login with your Google account
3. Create an API key
4. Paste it in `.env`

#### ▶️ Run Backend

```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔌 API Reference

### Analyze Security Log

**POST** `/api/analyze`

**Request Body:**
```json
{
  "log": "Failed password for admin from 45.22.11.90 repeated 50 times"
}
```

**Response Example:**
```json
{
  "threatType": "Brute Force Attack",
  "severity": "High",
  "riskScore": 92,
  "explanation": "Multiple failed login attempts detected on admin account..."
}
```

---

## 🧠 How It Works

1. User enters a security log into the dashboard
2. Backend forwards the log to Google Gemini AI
3. AI analyzes the threat pattern
4. Returns a structured response:
   - Threat type
   - Severity level
   - Risk score
   - Explanation
5. Frontend updates the dashboard dynamically

---

## 🔐 API Key Security

> ⚠️ The API key is **NOT** included in this repository for security reasons.

**Why?**
- Prevents misuse of AI quota
- Protects developer account
- Follows production security standards

**How to test AI features:**
- Add your own Gemini API key in `.env`
- Or use the `.env.example` file provided in the repo

---

## 🎯 Example Logs

**Brute Force Attack:**
```
Failed password for admin from 45.22.11.90 repeated 50 times
```

**Suspicious Login:**
```
Admin login detected from unusual location
```

---

## 📊 Dashboard Features

- Live SOC monitoring UI
- Dynamic alert feed
- Severity-based filtering
- Attack timeline visualization
- Real-time metrics update

---

## 🚀 Future Improvements

- [ ] File upload support (`.log` / `.csv` parsing)
- [ ] Real-time WebSocket alerts
- [ ] Email alert notification system
- [ ] Cloud deployment (Vercel + Render)
- [ ] Advanced anomaly detection AI

---

## 🏆 Hackathon Highlights

| Feature | Details |
|--------|---------|
| ✔ Real-world Simulation | Authentic SOC environment |
| ✔ AI-Powered Detection | Gemini AI threat classification |
| ✔ Cybersecurity + AI | Practical integration |
| ✔ Interactive Dashboard | Live metrics & timeline |
| ✔ Production-Ready | Industry-level architecture |

---

## 👨‍💻 Author

Cyber Security AI Monitoring System  
Built for Hackathon Submission

---

## 📌 License

Open-source for learning and hackathon use.



