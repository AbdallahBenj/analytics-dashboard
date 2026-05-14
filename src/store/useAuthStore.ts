import { create } from "zustand";
import type { User } from "@supabase/supabase-js";

type AuthStore = {
  user: User | null;
  isAdmin: boolean;
  setUser: (value: User | null) => void;
  setIsAdmin: (value: boolean) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAdmin: false,
  setUser: (value) => set({ user: value }),
  setIsAdmin: (value) => set({ isAdmin: value }),
}));

export default useAuthStore;
