import { useEffect } from "react";
import useStoreFetchedData from "../store/useStoreFetchedData.js";

import {
  timeData,
  usersData,
  subsData,
  paymentsData,
} from "../service/mock/generateData.js";

import {
  usersEvents,
  subsEvents,
  paymentsEvents,
} from "../service/events/generateEvents.js";

const useGlobalFetchedData = () => {
  // Data and Events

  const dataStore = useStoreFetchedData((state) => state.data);
  const eventsStore = useStoreFetchedData((state) => state.events);

  const fetchData = useStoreFetchedData((state) => state.fetchData);
  const fetchEvents = useStoreFetchedData((state) => state.fetchEvents);

  const retryFetchData = useStoreFetchedData((state) => state.retryFetchData);
  const retryFetchEvents = useStoreFetchedData(
    (state) => state.retryFetchEvents,
  );

  const dataMap = {
    timeData,
    usersData,
    subsData,
    paymentsData,
  };

  const LabelDataMap = {
    timeData: "Time data",
    usersData: "Users data",
    subsData: "Subscriptions data",
    paymentsData: "Payments data",
  };

  const eventsMap = {
    usersEvents,
    subsEvents,
    paymentsEvents,
  };

  const LabelEventsMap = {
    usersEvents: "Users events",
    subsEvents: "Subscriptions events",
    paymentsEvents: "Payments events",
  };

  // Fetch data and events on mount:
  useEffect(() => {
    Object.entries(dataMap).forEach(([key, value]) => {
      fetchData(key, value, LabelDataMap[key]);
    });

    Object.entries(eventsMap).forEach(([key, value]) => {
      fetchEvents(key, value, LabelEventsMap[key]);
    });
  }, [fetchData, fetchEvents]);

  // Get data and events values:
  const data = {
    timeData: dataStore.timeData?.dataValue || [],
    usersData: dataStore.usersData?.dataValue || [],
    subsData: dataStore.subsData?.dataValue || [],
    paymentsData: dataStore.paymentsData?.dataValue || [],
  };

  const events = {
    usersEvents: eventsStore.usersEvents?.eventsValue || [],
    subsEvents: eventsStore.subsEvents?.eventsValue || [],
    paymentsEvents: eventsStore.paymentsEvents?.eventsValue || [],
  };

  // Retry fetch data and events functions:
  const retryData = () => {
    Object.entries(dataMap).forEach(([key, value]) => {
      retryFetchData(key, value, LabelDataMap[key]);
    });
  };

  const retryEvents = () => {
    Object.entries(eventsMap).forEach(([key, value]) => {
      retryFetchEvents(key, value, LabelEventsMap[key]);
    });
  };

  const retryDataAndEvents = () => {
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

  const isDataAndEventsLoading = isDataLoading || isEventsLoading;

  // Get errors:
  const dataErrors = Object.values(dataStore || {}).flatMap(
    (item) => item?.errors || [],
  );

  const eventsErrors = Object.values(eventsStore || {}).flatMap(
    (item) => item?.errors || [],
  );

  const dataAndEventsErrors = [...dataErrors, ...eventsErrors];

  const isDataAndEventsErrors = dataAndEventsErrors.length > 0;

  const globalStatus = {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    dataAndEventsErrors,
  };

  return { globalStatus, data, events, retryDataAndEvents };
};

export default useGlobalFetchedData;
