import { create } from "zustand";

interface MediaQueryState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const useMediaQueryStore = create<MediaQueryState>((set) => ({
  isMobile: window.innerWidth <= 641,
  setIsMobile: (isMobile) => set({ isMobile }),
}));
