import { create } from "zustand";
import { User } from "@/types/interface";
import { STORAGE_KEYS } from "@/constant";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<UserState>((set) => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_KEY);

  return {
    user: null,
    isLoggedIn: !!accessToken,
    setUser: (user) => set({ user }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    clearUser: () => set({ user: null }),
  };
});
