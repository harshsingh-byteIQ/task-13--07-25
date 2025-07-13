import type { MachineStatus } from "../types/sensor";

export const STATUS_COLORS: Record<MachineStatus, string> = {
  Healthy: "green",
  Warning: "orange",
  Critical: "red",
};
