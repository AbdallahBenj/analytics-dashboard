import { create } from "zustand";

import type {
  Timeline,
  User,
  Subscription,
  Payment,
} from "../types/dataTypes.js";

import type {
  EventsTitle,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
} from "../types/eventsTypes.js";

type StoreType = {
  hasFetched: boolean;
  data: {
    [key: string]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      dataValue: (Timeline | User | Subscription | Payment)[];
    };
  };
  events: {
    [key: string]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      eventsValue: {
        events: (UsersEvents | SubsEvents | PaymentsEvents)[];
        eventsTitle: EventsTitle[];
      };
    };
  };
  fetchData: (
    dataType: string,
    realData: (Timeline | User | Subscription | Payment)[],
    label: string,
  ) => void;
  fetchEvents: (
    eventsType: string,
    realEvents: {
      events: (UsersEvents | SubsEvents | PaymentsEvents)[];
      eventsTitle: EventsTitle[];
    },
    label: string,
  ) => void;

  retryFetchData: (
    dataType: string,
    realData: (Timeline | User | Subscription | Payment)[],
    label: string,
  ) => void;
  retryFetchEvents: (
    eventsType: string,
    realEvents: {
      events: (UsersEvents | SubsEvents | PaymentsEvents)[];
      eventsTitle: EventsTitle[];
    },
    label: string,
  ) => void;

  setHasFetched: (value: boolean) => void;
};

const useStoreFetchedData = create<StoreType>((set, get) => ({
  // Initialization flag to prevent duplicate fetches
  hasFetched: false,

  data: {}, // data: {dataType: {isLoading, error, dataValue}}
  events: {}, // events: {eventType: {isLoading, error, {eventsTitle, eventValue}}}

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
