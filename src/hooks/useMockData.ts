import { useEffect } from "react";
import useMockDataStore from "../store/useMockDataStore.js";

import generateMockData from "../service/mock/generateMockData.js";

import type { DataTypesMap } from "../types/MockDataStoreTypes.js";

const useMockData = () => {
  // Get fetched Data and Events
  const dataStore = useMockDataStore((state) => state.fetchedData);

  // Get the fetch functions and initialization flag
  const hasFetched = useMockDataStore((state) => state.hasFetched);
  const setFetchData = useMockDataStore((state) => state.setFetchData);
  const setHasFetched = useMockDataStore((state) => state.setHasFetched);

  // Fetch data and events on mount (only once):
  useEffect(() => {
    // Only fetch if we haven't already fetched
    if (hasFetched) return;
    const {
      timeline,
      users,
      subscriptions,
      payments,
      usersEvents,
      subscriptionsEvents,
      paymentsEvents,
    } = generateMockData();

    const dataMap = {
      timeline,
      users,
      subscriptions,
      payments,
      usersEvents,
      subscriptionsEvents,
      paymentsEvents,
    };

    const LabelDataMap = {
      timeline: "Time data",
      users: "Users data",
      subscriptions: "Subscriptions data",
      payments: "Payments data",
      usersEvents: "Users events",
      subscriptionsEvents: "Subscriptions events",
      paymentsEvents: "Payments events",
    };

    (Object.keys(dataMap) as (keyof DataTypesMap)[]).forEach((key) => {
      setFetchData(key, dataMap[key], LabelDataMap[key]);
    });

    // Mark that initial fetch has been done
    setHasFetched(true);
  }, [hasFetched]); // Empty dependency array - runs only once on mount

  // Get data and events values:
  const fetchedData = {
    timeline: dataStore.timeline?.dataValue || [],
    users: dataStore.users?.dataValue || [],
    subscriptions: dataStore.subscriptions?.dataValue || [],
    payments: dataStore.payments?.dataValue || [],
    usersEvents: dataStore.usersEvents?.dataValue || [],
    subscriptionsEvents: dataStore.subscriptionsEvents?.dataValue || [],
    paymentsEvents: dataStore.paymentsEvents?.dataValue || [],
  };

  // Get loading status:
  const isDataLoading = Object.values(dataStore || {}).some(
    (item) => item?.loading,
  );

  const isLoading = isDataLoading;

  // Get errors:
  const dataErrors = Object.values(dataStore || {}).flatMap(
    (item) => item?.errors || [],
  );

  const errors = [...dataErrors];

  const isErrors = errors.length > 0;

  const mockData = {
    isLoading,
    isErrors,
    errors,

    timeline: fetchedData.timeline,
    users: fetchedData.users,
    subscriptions: fetchedData.subscriptions,
    payments: fetchedData.payments,

    usersEvents: fetchedData.usersEvents,
    subscriptionsEvents: fetchedData.subscriptionsEvents,
    paymentsEvents: fetchedData.paymentsEvents,
  };

  // console.log("mockData", mockData);

  return { mockData };
};

export default useMockData;
