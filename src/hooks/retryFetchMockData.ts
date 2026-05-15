// Not used yet

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

import useMockDataStore from "../store/useMockDataStore.js";

import type { DataTypesMap, EventsTypesMap } from "../types/storeTypes.js";

const retryLoadMockData = () => {
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

  // Retry fetch data and events functions:
  const retryData = () => {
    (Object.keys(dataMap) as (keyof DataTypesMap)[]).forEach((key) => {
      retryFetchData(key, dataMap[key], LabelDataMap[key]);
    });
  };

  const retryEvents = () => {
    (Object.keys(eventsMap) as (keyof EventsTypesMap)[]).forEach((key) => {
      retryFetchEvents(key, eventsMap[key], LabelEventsMap[key]);
    });
  };

  const retryLoadMockData = () => {
    retryData();
    retryEvents();
  };

  return retryLoadMockData;
};

export default retryLoadMockData;
