import { create } from "zustand";

type DataModeStoreType = {
  // isSupabaseData: boolean;
  dataSource: string;
  setDataSource: (value: string) => void;
  // setIsSupabaseData: (value: boolean) => void;
};

const useDataSourceStore = create<DataModeStoreType>((set) => ({
  // isSupabaseData: false,
  dataSource: "mockData", // mockData || supabaseData
  setDataSource: (value) => set((state) => ({ ...state, dataSource: value })),
  // setIsSupabaseData: (value) => set({ isSupabaseData: value }),
}));

export default useDataSourceStore;
