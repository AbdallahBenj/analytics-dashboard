import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreLogin = {
  isLoading: boolean;
  loginOpen: boolean;
  userLogin: { name: string; email: string } | null;
  notification: string | null;

  setLoading: (value: boolean) => void;
  setLoginOpen: (value: boolean) => void;
  resetNotification: () => void;
  setUserLogin: (user: { name: string; email: string }) => void;
  resetLogin: () => void;
};

type PersistedState = {
  userLogin: { name: string; email: string } | null;
};

const useStoreLogin = create<StoreLogin>()(
  // Persist only user session (userLogin) to keep login after refresh
  persist<StoreLogin>(
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
      partialize: (state): any => ({
        userLogin: state.userLogin,
      }),
    },
  ),
);

export default useStoreLogin;
