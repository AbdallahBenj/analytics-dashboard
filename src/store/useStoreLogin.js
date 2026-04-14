import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreLogin = create(
  persist(
    (set) => ({
      loginOpen: false,
      setLoginOpen: (value) => set({ loginOpen: value }),

      userLogin: null,
      setUserLogin: (user) =>
        set(() => ({
          userLogin: user,
        })),
      resetLogin: () => set({ userLogin: null }),
    }),
    { name: "user-storage" },
  ),
);

export default useStoreLogin;
