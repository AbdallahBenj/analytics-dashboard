import { create } from "zustand";

// Fetch Data default loading states
const fetchDefaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

// Clear, Upsert, and Sync Data default loading states
const updateDefaultState = {
  loading: false,
  errors: [],
};

// Helper function for Data default states

const defaultData = (defaultState) => ({
  timeline: { ...defaultState },
  users: { ...defaultState },
  usersEvents: { ...defaultState },
  subscriptions: { ...defaultState },
  subscriptionsEvents: { ...defaultState },
  payments: { ...defaultState },
  paymentsEvents: { ...defaultState },
});

const setDefaultData = (set, storedData, dataType, newData) =>
  set((state) => ({
    [storedData]: {
      ...state[storedData],
      [dataType]: {
        ...(state[storedData][dataType] ?? {}),
        ...newData,
      },
    },
  }));

const resetDefaultData = (set, storedData, defaultState) =>
  set({
    [storedData]: defaultData(defaultState),
  });

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
  clearedData: defaultData(updateDefaultState),

  setClearData: (dataType, newData) =>
    setDefaultData(set, "clearedData", dataType, newData),

  resetClearData: () =>
    resetDefaultData(set, "clearedData", updateDefaultState),

  // Upsert Data loading and errors * Individuals states
  upsertData: defaultData(updateDefaultState),

  setUpsertData: (dataType, newData) =>
    setDefaultData(set, "upsertData", dataType, newData),

  resetUpsertData: () =>
    resetDefaultData(set, "upsertData", updateDefaultState),

  // Sync Data loading and errors * Individuals states
  syncData: defaultData(updateDefaultState),

  setSyncData: (dataType, newData) =>
    setDefaultData(set, "syncData", dataType, newData),

  resetSyncData: () => resetDefaultData(set, "syncData", updateDefaultState),

  // Fetch Supabase data
  fetchedData: defaultData(fetchDefaultState),

  setFetchData: (dataType, newData) =>
    setDefaultData(set, "fetchedData", dataType, newData),

  resetFetchData: () => resetDefaultData(set, "fetchedData", fetchDefaultState),
}));

export default useSupabaseDataStore;
