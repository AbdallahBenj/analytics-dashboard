import { create } from "zustand";

const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

const useSupabaseDataStore = create((set) => ({
  data: {
    timeData: { ...defaultState },
    usersData: { ...defaultState },
    subsData: { ...defaultState },
    paymentsData: { ...defaultState },
  },

  updateData: (dataType, newData) =>
    set((state) => ({
      data: {
        ...state.data,
        [dataType]: {
          ...state.data[dataType],
          ...newData,
        },
      },
    })),
}));

export default useSupabaseDataStore;
