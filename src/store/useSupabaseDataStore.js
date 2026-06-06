import { create } from "zustand";

const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

// test Clear loading states
const clearedDefaultState = {
  loading: false,
  errors: [],
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
    isUpsertEnabled: true,
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

  // test Clear loading states
  clearedData: {
    timeline: { ...clearedDefaultState },
    users: { ...clearedDefaultState },
    usersEvents: { ...clearedDefaultState },
    subscriptions: { ...clearedDefaultState },
    subscriptionsEvents: { ...clearedDefaultState },
    payments: { ...clearedDefaultState },
    paymentsEvents: { ...clearedDefaultState },
  },

  // test Clear loading states
  setClearData: (dataType, newData) =>
    set((state) => ({
      clearedData: {
        ...state.clearedData,
        [dataType]: {
          ...state.clearedData[dataType],
          ...newData,
        },
      },
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
