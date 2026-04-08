import { useEffect } from "react";
import useStoreFetchedData from "../../../store/useStoreFetchedData.js";

import {
  timeData,
  usersData,
  subsData,
  paymentsData,
} from "../../../service/mock/generateData.js";

import {
  lastSubsEvents,
  lastUsersEvents,
  lastPaymentsEvents,
} from "../../../service/events/generateEvents.js";

const useGlobalFetchedData = () => {
  // Data and Events

  const dataStore = useStoreFetchedData((state) => state.data);
  const eventsStore = useStoreFetchedData((state) => state.events);

  const fetchData = useStoreFetchedData((state) => state.fetchData);
  const fetchEvents = useStoreFetchedData((state) => state.fetchEvents);

  const hasErrors = (arr) => Array.isArray(arr) && arr.length > 0;

  useEffect(() => {
    fetchData("timeData", timeData, "Time data");
    fetchData("usersData", usersData, "Users data");
    fetchData("subsData", subsData, "Subscriptions data");
    fetchData("paymentsData", paymentsData, "Payments data");

    fetchEvents("lastUsersEvents", lastUsersEvents, "Users events");
    fetchEvents("lastSubsEvents", lastSubsEvents, "Subscriptions events");
    fetchEvents("lastPaymentsEvents", lastPaymentsEvents, "Payments events");
  }, [fetchData, fetchEvents]);

  const data = {
    timeData: dataStore.timeData?.dataValue || [],
    usersData: dataStore.usersData?.dataValue || [],
    subsData: dataStore.subsData?.dataValue || [],
    paymentsData: dataStore.paymentsData?.dataValue || [],
  };

  const events = {
    usersEvents: eventsStore.lastUsersEvents?.eventsValue || [],
    subsEvents: eventsStore.lastSubsEvents?.eventsValue || [],
    paymentsEvents: eventsStore.lastPaymentsEvents?.eventsValue || [],
  };

  const isDataLoading =
    dataStore.timeData?.loading ||
    dataStore.usersData?.loading ||
    dataStore.subsData?.loading ||
    dataStore.paymentsData?.loading;

  const isEventsLoading =
    eventsStore.lastUsersEvents?.loading ||
    eventsStore.lastSubsEvents?.loading ||
    eventsStore.lastPaymentsEvents?.loading;

  const isDataAndEventsLoading = isDataLoading || isEventsLoading;

  const dataErrors = [
    ...(dataStore?.timeData?.errors || []),
    ...(dataStore?.usersData?.errors || []),
    ...(dataStore?.subsData?.errors || []),
    ...(dataStore?.paymentsData?.errors || []),
  ];

  const eventsErrors = [
    ...(eventsStore?.lastUsersEvents?.errors || []),
    ...(eventsStore?.lastSubsEvents?.errors || []),
    ...(eventsStore?.lastPaymentsEvents?.errors || []),
  ];

  const dataAndEventsErrors = [...dataErrors, ...eventsErrors];

  const isDataAndEventsErrors = hasErrors(dataAndEventsErrors);

  const globalStatus = {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    dataAndEventsErrors,
  };

  return { globalStatus, data, events };
};

export default useGlobalFetchedData;
