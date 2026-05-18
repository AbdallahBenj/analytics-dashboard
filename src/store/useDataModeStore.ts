import { create } from "zustand";

type DataModeStoreType = {
  isSupabaseData: boolean;
  setIsSupabaseData: (value: boolean) => void;
};

const useDataModeStore = create<DataModeStoreType>((set) => ({
  isSupabaseData: false,
  setIsSupabaseData: (value) => set({ isSupabaseData: value }),
}));

export default useDataModeStore;
