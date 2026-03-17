import { create } from "zustand";

type Mode = "economy" | "comfort" | "resilience";

type EnergyModeState = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export const useEnergyMode = create<EnergyModeState>((set) => ({
  mode: "economy",
  setMode: (mode) => set({ mode }),
}));
