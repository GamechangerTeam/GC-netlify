import { create } from "zustand";

export const useModal = create((set) => ({
  name: null,
  isOpen: false,
  videoSrc: "/video/Logo.mp4",
  openPopup: (name, videoSrc) => set({ isOpen: true, name , videoSrc}),
  // openVideoPopup: (name, videoSrc) => set({ isOpen: true, name, videoSrc }),
  closePopup: () => set({ name: null, isOpen: false }),
}));
