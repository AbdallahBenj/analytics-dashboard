import { create } from "zustand";

const useStoreFetchedData = create((set, get) => ({
  data: {}, // data: {dataType: {isLoading, error, dataValue}}
  events: {}, // events: {eventType: {isLoading, error, eventValue}}

  fetchData: async (dataType, realData, label = "") => {
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
      const isSuccess = Math.random() >= 0.1;

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
            errors: [{ id: Date.now(), label, message: err.message }],
            dataValue: [],
          },
        },
      }));
    }
  },

  fetchEvents: async (eventsType, realEvents, label = "") => {
    const state = get();

    if (state.events[eventsType]?.loading) return;
    set({
      events: {
        ...state.events,
        [eventsType]: {
          ...state.events[eventsType],
          loading: true,
          errors: [],
          eventsValue: [],
        },
      },
    });

    try {
      await new Promise((res) => setTimeout(res, 500));
      const isSuccess = Math.random() >= 0.1;

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
            errors: [{ id: Date.now(), label, message: err.message }],
            eventsValue: [],
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
}));

export default useStoreFetchedData;
