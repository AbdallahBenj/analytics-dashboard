import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreLogin = create(
  persist(
    (set) => ({
      isLoading: false,
      loginOpen: false,
      userLogin: null,

      setLoading: (value) => set({ isLoading: value }),

      setLoginOpen: (value) => set({ loginOpen: value }),

      setUserLogin: async (user) => {
        set({ isLoading: true });
        try {
          await new Promise((res) => setTimeout(res, 1000));
          set(() => ({
            userLogin: user,
          }));
        } catch (err) {
          console.err(err);
        } finally {
          set({ isLoading: false });
          set({ loginOpen: false });
        }
      },

      resetLogin: () => set({ userLogin: null }),
    }),
    { name: "user-storage" },
  ),
);

export default useStoreLogin;
