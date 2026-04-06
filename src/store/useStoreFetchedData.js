import { create } from "zustand";

const useStoreFetchedData = create((set) => ({
  // Data
  fetchedData: {
    isDataLoading: false, // boolean
    dataErrors: [], // []
    timeData: [], // []
    usersData: [], // []
    subsData: [], // []
    paymentsData: [], // []
  },

  fetchedEvents: {
    isEventsLoading: false, // boolean
    eventsErrors: [], // []
    usersEvents: [], // []
    subsEvents: [], // []
    paymentsEvents: [], // []
  },

  setFetchedData: (data) =>
    set((state) => ({
      fetchedData: { ...state.fetchedData, ...data },
    })),

  setFetchedEvents: (events) =>
    set((state) => ({
      fetchedEvents: { ...state.fetchedEvents, ...events },
    })),
}));

export default useStoreFetchedData;
