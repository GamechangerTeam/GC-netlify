import { create } from "zustand";

export const useModal = create((set) => ({
  name: null,
  isOpen: false,
  openPopup: (name) => set({ isOpen: true, name }),
  closePopup: () => set({ name: null, isOpen: false }),
}));
