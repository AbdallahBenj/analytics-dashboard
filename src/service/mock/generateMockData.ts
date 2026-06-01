import useMockDataStore from "../../store/useMockDataStore.js";
import type { DataTypesMap } from "../../types/MockDataStoreTypes.js";

import generateTimeline from "./generateTimeline.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

import generateUsersEvents from "./generateUsersEvents.js";
import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const generateMockData = () => {
  const timelineLimit = useMockDataStore.getState().timelineLimit;
  const timeline = generateTimeline(timelineLimit);
  const users = generateUsers(timeline);
  const subscriptions = generateSubscriptions(users);
  const payments = generatePayments(subscriptions);

  const usersEvents = generateUsersEvents(users);
  const subscriptionsEvents = generateSubscriptionsEvents(subscriptions);
  const paymentsEvents = generatePaymentsEvents(payments);

  const mockData = {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  };

  const setGenerateData = useMockDataStore.getState().setGenerateData;

  (Object.keys(mockData) as (keyof DataTypesMap)[]).forEach((key) =>
    setGenerateData(key, mockData[key]),
  );

  // console.log("generateMockData", mockData);

  return mockData;
};

export default generateMockData;
