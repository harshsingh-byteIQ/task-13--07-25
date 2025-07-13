import { useEffect, useState } from "react";
import "./App.css";
import type { SensorReading, MachineStatus } from "./types/sensor";
import { evaluateStatus } from "./utils/status";
import { STATUS_COLORS } from "./constants/status";
import SensorChart from "./components/sensorChat";

function App() {
  const [data, setData] = useState<SensorReading[]>([]);
  const [status, setStatus] = useState<MachineStatus>("Healthy");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/sensor-data");
      const json = await res.json();
      const timestamp = new Date().toLocaleTimeString();
      const sensorReading: SensorReading = { ...json, time: timestamp };
      const newStatus = evaluateStatus(sensorReading.temperature, sensorReading.vibration);

      setData((prev) => [...prev.slice(-9), sensorReading]);
      setStatus(newStatus);
    } catch (error) {
      console.error("Failed to fetch sensor data", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>MachineWise IoT Dashboard</h1>
      <div className="status-box" style={{ borderColor: STATUS_COLORS[status] }}>
        <h2>Status: <span style={{ color: STATUS_COLORS[status] }}>{status}</span></h2>
      </div>
      <div className="chart-section">
        <SensorChart data={data} />
      </div>
    </div>
  );
}

export default App;
