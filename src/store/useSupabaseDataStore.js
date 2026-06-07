import { create } from "zustand";

// Fetch Data default loading states
const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

// Clear, Upsert, and Sync Data default loading states
const updateDefaultState = {
  loading: false,
  errors: [],
};

const useSupabaseDataStore = create((set) => ({
  // Clear Supabase data * Global State
  isClearEnabled: true,
  isClearLoading: false,

  setClearLoading: (value) => set({ isClearLoading: value }),

  // Upsert Supabase data * Global State
  isUpsertEnabled: true,
  isUpsertLoading: false,

  setUpsertLoading: (value) => set({ isUpsertLoading: value }),

  // Sync Supabase data * Global State
  isSyncEnabled: true,
  isSyncLoading: false,

  setSyncLoading: (value) => set({ isSyncLoading: value }),

  // Clear Data loading and errors * Individuals states
  clearedData: {
    timeline: { ...updateDefaultState },
    users: { ...updateDefaultState },
    usersEvents: { ...updateDefaultState },
    subscriptions: { ...updateDefaultState },
    subscriptionsEvents: { ...updateDefaultState },
    payments: { ...updateDefaultState },
    paymentsEvents: { ...updateDefaultState },
  },

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

  // Upsert Data loading and errors * Individuals states
  upsertData: {
    timeline: { ...updateDefaultState },
    users: { ...updateDefaultState },
    usersEvents: { ...updateDefaultState },
    subscriptions: { ...updateDefaultState },
    subscriptionsEvents: { ...updateDefaultState },
    payments: { ...updateDefaultState },
    paymentsEvents: { ...updateDefaultState },
  },

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

  // Sync Data loading and errors * Individuals states
  syncData: {
    timeline: { ...updateDefaultState },
    users: { ...updateDefaultState },
    usersEvents: { ...updateDefaultState },
    subscriptions: { ...updateDefaultState },
    subscriptionsEvents: { ...updateDefaultState },
    payments: { ...updateDefaultState },
    paymentsEvents: { ...updateDefaultState },
  },

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
