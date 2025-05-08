import { create } from "zustand";
import { User } from "@/types/interface";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: null,
  setUser: (user) => set({ user }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn: isLoggedIn }),
  clearUser: () => set({ user: null }),
}));
