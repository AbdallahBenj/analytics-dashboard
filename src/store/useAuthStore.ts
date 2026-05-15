import { create } from "zustand";
import type { User } from "@supabase/supabase-js";

type AuthStore = {
  editor: User | null;
  isAdmin: boolean;
  setEditor: (value: User | null) => void;
  setIsAdmin: (value: boolean) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  editor: null,
  isAdmin: false,
  setEditor: (value) => set({ editor: value }),
  setIsAdmin: (value) => set({ isAdmin: value }),
}));

export default useAuthStore;
