import { useEffect } from "react";
import useMockDataStore from "../store/useMockDataStore.js";

import {
  timeline,
  users,
  subscriptions,
  payments,
} from "../service/mock/generateData.js";

import {
  usersEvents,
  subscriptionsEvents,
  paymentsEvents,
} from "../service/events/generateEvents.js";

import type { DataTypesMap, EventsTypesMap } from "../types/storeTypes.js";

const useGlobalMockData = () => {
  // Data and Events

  const dataStore = useMockDataStore((state) => state.data);
  const eventsStore = useMockDataStore((state) => state.events);

  // Get the fetch functions and initialization flag
  const fetchData = useMockDataStore((state) => state.fetchData);
  const fetchEvents = useMockDataStore((state) => state.fetchEvents);
  const setHasFetched = useMockDataStore((state) => state.setHasFetched);
  const hasFetched = useMockDataStore((state) => state.hasFetched);
  const retryFetchData = useMockDataStore((state) => state.retryFetchData);
  const retryFetchEvents = useMockDataStore((state) => state.retryFetchEvents);

  const dataMap = {
    timeline,
    users,
    subscriptions,
    payments,
  };

  const LabelDataMap = {
    timeline: "Time data",
    users: "Users data",
    subscriptions: "Subscriptions data",
    payments: "Payments data",
  };

  const eventsMap = {
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  };

  const LabelEventsMap = {
    usersEvents: "Users events",
    subscriptionsEvents: "Subscriptions events",
    paymentsEvents: "Payments events",
  };

  // Fetch data and events on mount (only once):
  useEffect(() => {
    // Only fetch if we haven't already fetched
    if (hasFetched) return;

    (Object.keys(dataMap) as (keyof DataTypesMap)[]).forEach((key) => {
      fetchData(key, dataMap[key], LabelDataMap[key]);
    });

    (Object.keys(eventsMap) as (keyof EventsTypesMap)[]).forEach((key) => {
      fetchEvents(
        key,
        eventsMap[key].events,
        eventsMap[key].eventsTitle,
        LabelEventsMap[key],
      );
      // console.log("object", eventsMap[key].events);
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
  };

  const fetchedEvents = {
    usersEvents: eventsStore.usersEvents?.eventsValue || [],
    subscriptionsEvents: eventsStore.subscriptionsEvents?.eventsValue || [],
    paymentsEvents: eventsStore.paymentsEvents?.eventsValue || [],
  };

  // Retry fetch data and events functions:
  const retryData = () => {
    (Object.keys(dataMap) as (keyof DataTypesMap)[]).forEach((key) => {
      retryFetchData(key, dataMap[key], LabelDataMap[key]);
    });
  };

  const retryEvents = () => {
    (Object.keys(eventsMap) as (keyof EventsTypesMap)[]).forEach((key) => {
      retryFetchEvents(
        key,
        eventsMap[key].events,
        eventsMap[key].eventsTitle,
        LabelEventsMap[key],
      );
    });
  };

  const retryLoadMockData = () => {
    retryData();
    retryEvents();
  };

  // Get loading status:
  const isDataLoading = Object.values(dataStore || {}).some(
    (item) => item?.loading,
  );

  const isEventsLoading = Object.values(eventsStore || {}).some(
    (item) => item?.loading,
  );

  const isLoading = isDataLoading || isEventsLoading;

  // Get errors:
  const dataErrors = Object.values(dataStore || {}).flatMap(
    (item) => item?.errors || [],
  );

  const eventsErrors = Object.values(eventsStore || {}).flatMap(
    (item) => item?.errors || [],
  );

  const errors = [...dataErrors, ...eventsErrors];

  const isErrors = errors.length > 0;

  const mockData = {
    isLoading,
    isErrors,
    errors,

    timeline: fetchedData.timeline,
    users: fetchedData.users,
    subscriptions: fetchedData.subscriptions,
    payments: fetchedData.payments,

    usersEvents: fetchedEvents.usersEvents,
    subscriptionsEvents: fetchedEvents.subscriptionsEvents,
    paymentsEvents: fetchedEvents.paymentsEvents,

    retryLoadMockData,
  };

  console.log("usersEvents", mockData);

  return { mockData };
};

export default useGlobalMockData;
