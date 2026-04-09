// Not Used

import { create } from "zustand";

const useStoreRetryState = create((set) => ({
  retryCount: 0,
  incrementRetry: () => set((state) => ({ retryCount: state.retryCount + 1 })),
  resetRetry: () => set(() => ({ retryCount: 0 })),
}));

export default useStoreRetryState;
