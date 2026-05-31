import { create } from "zustand";

import type { MockDataStoreTypes } from "../types/MockDataStoreTypes.js";

const useMockDataStore = create<MockDataStoreTypes>((set, get) => ({
  // Initialization flag to prevent duplicate fetches
  hasFetched: false,

  // Initial Generated Data Object
  generatedData: {
    timeline: [],
    users: [],
    subscriptions: [],
    payments: [],
    usersEvents: [],
    subscriptionsEvents: [],
    paymentsEvents: [],
  },

  // Initial Data Object // data: {dataType: {isLoading, error, dataValue}}
  fetchedData: {
    timeline: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    users: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    subscriptions: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    payments: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    usersEvents: {
      loading: false,
      errors: [],
      dataValue: [],
    },

    subscriptionsEvents: {
      loading: false,
      errors: [],
      dataValue: [],
    },

    paymentsEvents: {
      loading: false,
      errors: [],
      dataValue: [],
    },
  },

  setGenerateData: (dataType, dataValue) =>
    set((state) => ({
      generatedData: { ...state.generatedData, [dataType]: dataValue },
    })),

  setFetchData: async (dataType, realData, label) => {
    const state = get();
    if (state.fetchedData[dataType]?.loading) return;

    set({
      fetchedData: {
        ...state.fetchedData,
        [dataType]: {
          ...state.fetchedData[dataType],
          loading: true,
          errors: [],
          dataValue: [],
        },
      },
    });

    try {
      await new Promise((res) => setTimeout(res, 500));
      const isSuccess = Math.random() >= 0.05;

      if (isSuccess) {
        set((state) => ({
          fetchedData: {
            ...state.fetchedData,
            [dataType]: {
              ...state.fetchedData[dataType],
              loading: false,
              errors: [],
              dataValue: realData,
            },
          },
        }));
      } else {
        set((state) => ({
          fetchedData: {
            ...state.fetchedData,
            [dataType]: {
              ...state.fetchedData[dataType],
              loading: false,
              errors: [{ id: Date.now(), label, message: "Failed to load" }],
              dataValue: [],
            },
          },
        }));
      }
    } catch (err) {
      set((state) => ({
        fetchedData: {
          ...state.fetchedData,
          [dataType]: {
            ...state.fetchedData[dataType],
            loading: false,
            errors: [
              {
                id: Date.now(),
                label,
                message: err instanceof Error ? err.message : "Unknown error",
              },
            ],
            dataValue: [],
          },
        },
      }));
    }
  },

  retryFetchData: (dataType, realData, label) => {
    get().setFetchData(dataType, realData, label);
  },

  // Mark that initial fetch has been completed
  setHasFetched: (value) => {
    set({ hasFetched: value });
  },
}));

export default useMockDataStore;
