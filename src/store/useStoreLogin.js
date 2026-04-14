import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreLogin = create(
  // Persist only user session (userLogin) to keep login after refresh
  persist(
    (set) => ({
      isLoading: false,
      loginOpen: false,
      userLogin: null,
      notification: null,

      setLoading: (value) => set({ isLoading: value }),

      setLoginOpen: (value) => set({ loginOpen: value }),
      resetNotification: () => set({ notification: null }),

      setUserLogin: async (user) => {
        set({ isLoading: true });
        try {
          await new Promise((res) => setTimeout(res, 2000));
          set(() => ({
            userLogin: user,
            notification: "You logged in successfully!",
          }));
        } catch (err) {
          console.error(err);
        } finally {
          set({ isLoading: false });
          set({ loginOpen: false });
        }
      },

      resetLogin: () =>
        set({ userLogin: null, notification: "You’ve been logged out!" }),
    }),
    {
      name: "user-storage",
      // Exclude notification  (should reset on reload)
      partialize: (state) => ({
        userLogin: state.userLogin,
      }),
    },
  ),
);

export default useStoreLogin;
