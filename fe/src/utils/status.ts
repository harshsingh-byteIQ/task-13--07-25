import type { MachineStatus } from "../types/sensor";

export function evaluateStatus(temperature: number, vibration: number): MachineStatus {
  if (temperature > 80 && vibration > 20) return "Critical";
  if (temperature > 80 || vibration > 20) return "Warning";
  return "Healthy";
}
