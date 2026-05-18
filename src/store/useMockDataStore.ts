import { create } from "zustand";

import type { StoreType } from "../types/storeTypes.js";

const useMockDataStore = create<StoreType>((set, get) => ({
  // Initialization flag to prevent duplicate fetches
  hasFetched: false,

  // Initial Data Object // data: {dataType: {isLoading, error, dataValue}}
  data: {
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
  },

  // Initial Events Object // events: {eventType: {isLoading, error, {eventsTitle, eventValue}}}

  events: {
    usersEvents: {
      loading: false,
      errors: [],
      eventsTitle: [],
      eventsValue: [],
    },

    subscriptionsEvents: {
      loading: false,
      errors: [],
      eventsTitle: [],
      eventsValue: [],
    },

    paymentsEvents: {
      loading: false,
      errors: [],
      eventsTitle: [],
      eventsValue: [],
    },
  },

  fetchData: async (dataType, realData, label) => {
    const state = get();
    if (state.data[dataType]?.loading) return;

    set({
      data: {
        ...state.data,
        [dataType]: {
          ...state.data[dataType],
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
          data: {
            ...state.data,
            [dataType]: {
              ...state.data[dataType],
              loading: false,
              errors: [],
              dataValue: realData,
            },
          },
        }));
      } else {
        set((state) => ({
          data: {
            ...state.data,
            [dataType]: {
              ...state.data[dataType],
              loading: false,
              errors: [{ id: Date.now(), label, message: "Failed to load" }],
              dataValue: [],
            },
          },
        }));
      }
    } catch (err) {
      set((state) => ({
        data: {
          ...state.data,
          [dataType]: {
            ...state.data[dataType],
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

  fetchEvents: async (eventsType, realEvents, titleEvents, label) => {
    const state = get();

    if (state.events[eventsType]?.loading) return;
    set({
      events: {
        ...state.events,
        [eventsType]: {
          ...state.events[eventsType],
          loading: true,
          errors: [],
          eventsTitle: [],
          eventsValue: [],
        },
      },
    });

    try {
      await new Promise((res) => setTimeout(res, 500));
      const isSuccess = Math.random() >= 0.05;

      if (isSuccess) {
        set((state) => ({
          events: {
            ...state.events,
            [eventsType]: {
              ...state.events[eventsType],
              loading: false,
              errors: [],
              eventsTitle: titleEvents,
              eventsValue: realEvents,
            },
          },
        }));
      } else {
        set((state) => ({
          events: {
            ...state.events,
            [eventsType]: {
              ...state.events[eventsType],
              loading: false,
              errors: [{ id: Date.now(), label, message: "Failed to load" }],
              eventsTitle: [],
              eventsValue: [],
            },
          },
        }));
      }
    } catch (err) {
      set((state) => ({
        events: {
          ...state.events,
          [eventsType]: {
            ...state.events[eventsType],
            loading: false,
            errors: [
              {
                id: Date.now(),
                label,
                message: err instanceof Error ? err.message : "Unknown error",
              },
            ],
            eventsTitle: [],
            eventsValue: [],
          },
        },
      }));
    }
  },

  retryFetchData: (dataType, realData, label) => {
    get().fetchData(dataType, realData, label);
  },

  retryFetchEvents: (eventsType, realEvents, titleEvents, label) => {
    get().fetchEvents(eventsType, realEvents, titleEvents, label);
  },

  // Mark that initial fetch has been completed
  setHasFetched: (value) => {
    set({ hasFetched: value });
  },
}));

export default useMockDataStore;
