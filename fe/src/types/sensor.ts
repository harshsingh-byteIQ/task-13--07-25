export type MachineStatus = "Healthy" | "Warning" | "Critical";

export interface SensorReading {
  temperature: number;
  vibration: number;
  current: number;
  voltage: number;
  time: string;
}
