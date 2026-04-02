import { create } from "zustand";

const useStoreFetchedData = create((set) => ({
  fetchedData: {
    isLoading: false, // boolean
    isErrors: false, // boolean
    errors: [], // []
    fetchedTimeData: [], // []
    fetchedUsersData: [], // []
    fetchedSubsData: [], // []
    fetchedPaymentsData: [], // []
  },

  setLoading: (value) =>
    set((state) => ({
      fetchedData: { ...state.fetchedData, isLoading: value },
    })),

  setErrors: (value) =>
    set((state) => ({
      fetchedData: {
        ...state.fetchedData,
        errors: value,
        isErrors: value.length > 0,
      },
    })),

  setFetchedData: ({ key, value }) =>
    set((state) => ({
      fetchedData: { ...state.fetchedData, [key]: value },
    })),
}));

export default useStoreFetchedData;
