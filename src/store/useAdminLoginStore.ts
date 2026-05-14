import { create } from "zustand";

type AdminLoginStore = {
  isLoading: boolean;
  isDialogOpen: boolean;
  loginError: string;
  setLoading: (value: boolean) => void;
  setDialogOpen: (value: boolean) => void;
  setLoginError: (value: string) => void;
};

const useAdminLoginStore = create<AdminLoginStore>((set) => ({
  isLoading: false,
  isDialogOpen: false,
  loginError: "",
  setLoading: (value) => set({ isLoading: value }),
  setDialogOpen: (value) => set({ isDialogOpen: value }),
  setLoginError: (value) => set({ loginError: value }),
}));

export default useAdminLoginStore;
