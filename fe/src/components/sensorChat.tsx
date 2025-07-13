import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { SensorReading } from "../types/sensor";

interface Props {
  data: SensorReading[];
}

const SensorChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#ff4d4f" />
        <Line type="monotone" dataKey="vibration" stroke="#ffc107" />
        <Line type="monotone" dataKey="current" stroke="#1890ff" />
        <Line type="monotone" dataKey="voltage" stroke="#52c41a" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SensorChart;
