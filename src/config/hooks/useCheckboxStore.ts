import { create } from "zustand";

interface CheckboxState {
  aghkcCheck: boolean;
  agzcCheck: boolean;
  azcCheck: boolean;
  digitized: boolean;
  nDigitized: boolean;
  toggleAghkcCheck: () => void;
  toggleAgzcCheck: () => void;
  toggleAzcCheck: () => void;
  toggleDigitized: () => void;
  toggleNDigitized: () => void;
}

const useCheckboxStore = create<CheckboxState>((set) => ({
  aghkcCheck: true,
  agzcCheck: false,
  azcCheck: false,
  digitized: true,
  nDigitized: true,
  toggleAghkcCheck: () => set((state) => ({ aghkcCheck: !state.aghkcCheck })),
  toggleAgzcCheck: () => set((state) => ({ agzcCheck: !state.agzcCheck })),
  toggleAzcCheck: () => set((state) => ({ azcCheck: !state.azcCheck })),
  toggleDigitized: () => set((state) => ({ digitized: !state.digitized })),
  toggleNDigitized: () => set((state) => ({ nDigitized: !state.nDigitized })),
}));

export default useCheckboxStore;
