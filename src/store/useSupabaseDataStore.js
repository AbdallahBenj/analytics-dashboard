import { create } from "zustand";

const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

// Clear Data  loading states
const clearedDefaultState = {
  loading: false,
  errors: [],
};

// Upsert Data  loading states
const upsertDefaultState = {
  loading: false,
  errors: [],
};

// test Sync Data  loading states
const syncDefaultState = {
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

  // Clear Data loading states
  clearedData: {
    timeline: { ...clearedDefaultState },
    users: { ...clearedDefaultState },
    usersEvents: { ...clearedDefaultState },
    subscriptions: { ...clearedDefaultState },
    subscriptionsEvents: { ...clearedDefaultState },
    payments: { ...clearedDefaultState },
    paymentsEvents: { ...clearedDefaultState },
  },

  // Clear Data loading states
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

  // Upsert Data loading states
  upsertData: {
    timeline: { ...upsertDefaultState },
    users: { ...upsertDefaultState },
    usersEvents: { ...upsertDefaultState },
    subscriptions: { ...upsertDefaultState },
    subscriptionsEvents: { ...upsertDefaultState },
    payments: { ...upsertDefaultState },
    paymentsEvents: { ...upsertDefaultState },
  },

  // Upsert Data loading states
  setUpsertData: (dataType, newData) =>
    set((state) => ({
      upsertData: {
        ...state.upsertData,
        [dataType]: {
          ...state.upsertData[dataType],
          ...newData,
        },
      },
    })),

  // test Sync Data loading states
  syncData: {
    timeline: { ...syncDefaultState },
    users: { ...syncDefaultState },
    usersEvents: { ...syncDefaultState },
    subscriptions: { ...syncDefaultState },
    subscriptionsEvents: { ...syncDefaultState },
    payments: { ...syncDefaultState },
    paymentsEvents: { ...syncDefaultState },
  },

  // test Sync Data loading states
  setSyncData: (dataType, newData) =>
    set((state) => ({
      syncData: {
        ...state.syncData,
        [dataType]: {
          ...state.syncData[dataType],
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
