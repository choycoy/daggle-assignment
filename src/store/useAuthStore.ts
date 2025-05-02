import { create } from "zustand";
import { User } from "@/types/interface";

interface userState {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<userState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn: isLoggedIn }),
  clearUser: () => set({ user: null }),
}));
