import { create } from "zustand";

import type { StoreType } from "../types/storeTypes.js";

const useStoreFetchedData = create<StoreType>((set, get) => ({
  // Initialization flag to prevent duplicate fetches
  hasFetched: false,

  // Initial Data Object // data: {dataType: {isLoading, error, dataValue}}
  data: {
    timeData: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    usersData: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    subsData: {
      loading: false,
      errors: [],
      dataValue: [],
    },
    paymentsData: {
      loading: false,
      errors: [],
      dataValue: [],
    },
  },

  // Initial Events Object // events: {eventType: {isLoading, error, {eventsTitle, eventValue}}}

  events: {
    paymentsEvents: {
      loading: false,
      errors: [],
      eventsValue: {
        events: [],
        eventsTitle: [],
      },
    },

    subsEvents: {
      loading: false,
      errors: [],
      eventsValue: {
        events: [],
        eventsTitle: [],
      },
    },
    usersEvents: {
      loading: false,
      errors: [],
      eventsValue: {
        events: [],
        eventsTitle: [],
      },
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

  fetchEvents: async (eventsType, realEvents, label) => {
    const state = get();

    if (state.events[eventsType]?.loading) return;
    set({
      events: {
        ...state.events,
        [eventsType]: {
          ...state.events[eventsType],
          loading: true,
          errors: [],
          eventsValue: {
            events: [],
            eventsTitle: [],
          },
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
              eventsValue: {
                events: [],
                eventsTitle: [],
              },
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
            eventsValue: {
              events: [],
              eventsTitle: [],
            },
          },
        },
      }));
    }
  },

  retryFetchData: (dataType, realData, label) => {
    get().fetchData(dataType, realData, label);
  },

  retryFetchEvents: (eventsType, realEvents, label) => {
    get().fetchEvents(eventsType, realEvents, label);
  },

  // Mark that initial fetch has been completed
  setHasFetched: (value) => {
    set({ hasFetched: value });
  },
}));

export default useStoreFetchedData;
