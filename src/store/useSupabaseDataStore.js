import { create } from "zustand";

const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

const useSupabaseDataStore = create((set) => ({
  // Clear Supabase data

  clear: {
    isClearEnabled: true,
    isClearLoading: false,
    clearError: null,
  },
  setClearLoading: (value) =>
    set((state) => ({
      clear: { ...state.clear, isClearLoading: value },
    })),
  setClearError: (value) =>
    set((state) => ({
      clear: { ...state.clear, clearError: value },
    })),

  // Upsert Supabase data

  upsert: {
    isUpsertEnabled: false,
    isUpsertLoading: false,
    upsertError: null,
  },
  setUpsertLoading: (value) =>
    set((state) => ({
      upsert: { ...state.upsert, isUpsertLoading: value },
    })),
  setUpsertError: (value) =>
    set((state) => ({
      upsert: { ...state.upsert, upsertError: value },
    })),

  // Fetch Supabase data

  fetchedData: {
    timeline: { ...defaultState },
    users: { ...defaultState },
    usersEvents: { ...defaultState },
    subscriptions: { ...defaultState },
    subscriptionsEvents: { ...defaultState },
    payments: { ...defaultState },
    paymentsEvents: { ...defaultState },
  },

  setFetchData: (dataType, newData) =>
    set((state) => ({
      fetchedData: {
        ...state.fetchedData,
        [dataType]: {
          ...state.fetchedData[dataType],
          ...newData,
        },
      },
    })),
}));

export default useSupabaseDataStore;
