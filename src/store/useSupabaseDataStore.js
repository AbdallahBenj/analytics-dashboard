import { create } from "zustand";

const defaultState = {
  loading: false,
  errors: [],
  dataValue: [],
};

// Clear loading states
const clearedDefaultState = {
  loading: false,
  errors: [],
};

// test Upsert loading states
// const upsertDefaultState = {
//   loading: false,
//   errors: [],
// };

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

  // Clear loading states
  clearedData: {
    timeline: { ...clearedDefaultState },
    users: { ...clearedDefaultState },
    usersEvents: { ...clearedDefaultState },
    subscriptions: { ...clearedDefaultState },
    subscriptionsEvents: { ...clearedDefaultState },
    payments: { ...clearedDefaultState },
    paymentsEvents: { ...clearedDefaultState },
  },

  // Clear loading states
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

  // test Upsert loading states
  // upsertData: {
  //   timeline: { ...upsertDefaultState },
  //   users: { ...upsertDefaultState },
  //   usersEvents: { ...upsertDefaultState },
  //   subscriptions: { ...upsertDefaultState },
  //   subscriptionsEvents: { ...upsertDefaultState },
  //   payments: { ...upsertDefaultState },
  //   paymentsEvents: { ...upsertDefaultState },
  // },

  // // test Upsert loading states
  // setUpsertDataVersion2: (dataType, newData) =>
  //   set((state) => ({
  //     upsertData: {
  //       ...state.upsertData,
  //       [dataType]: {
  //         ...state.upsertData[dataType],
  //         ...newData,
  //       },
  //     },
  //   })),

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
