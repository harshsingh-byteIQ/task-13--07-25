MachineWise IoT Dashboard

This project simulates a real-time Industrial IoT dashboard that fetches mock machine sensor data and visualizes it using a clean, responsive React interface. The dashboard displays key metrics like temperature, vibration, current, and voltage, updating every 5 seconds. It also evaluates the machine's health status based on thresholds, categorizing the system as Healthy, Warning, or Critical. These insights are presented visually using Recharts, enabling clear monitoring of live trends.

The project is divided into two folders — fe/ (frontend in React + TypeScript) and be/ (backend using Node.js + Express). The backend simulates sensor readings by generating random values on each API call. On the frontend, the data is fetched and displayed in a live-updating line chart, accompanied by a color-coded status box for clarity. TypeScript has been used for type safety across both data and component logic, and the folder structure follows clean, production-ready practices with separated constants, utils, and component files.

In a production-grade system, this could be extended by integrating real sensor data via MQTT or WebSocket, adding historical charts with filters, exporting data to CSV, or persisting readings in a time-series database. For now, this project demonstrates the core idea of how a modern, real-time industrial dashboard might be built and structured using standard open-source tools.

Getting Started (Local Setup)
Prerequisites:
Node.js installed (v16+ recommended)

Package manager: npm or yarn

1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/machinewise-iot-dashboard.git
cd machinewise-iot-dashboard
2. Setup & Run Backend
bash
Copy
Edit
cd be
npm install
npm run dev   # or: node index.js
By default, the backend runs at: http://localhost:5000/api/sensor-data

3. Setup & Run Frontend
In a new terminal:

bash
Copy
Edit
cd ../fe
npm install
npm start
The React app runs at: http://localhost:3000

Project Folder Structure
bash
Copy
Edit
root/
├── fe/                # Frontend (React + TypeScript)
│   ├── components/
│   ├── constants/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── ...
├── be/                # Backend (Node.js + Express)
│   └── app.js
└── README.md


