import {
  usersData,
  subscriptionsData,
  paymentsData,
} from "../mock/generateData.js";

import useFetchData from "../../hooks/useFetchData.js";

import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generateUsersEvents from "./generateUsersEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const limit = 10;

const useGenerateEvents = () => {
  const lastUsersEvents = generateUsersEvents(usersData, limit);
  const lastSubsEvents = generateSubscriptionsEvents(subscriptionsData, limit);
  const lastPaymentsEvents = generatePaymentsEvents(paymentsData, limit);

  const { data: fetchedLastUsersEvents, loading: lastUsersEventsLoading } =
    useFetchData(lastUsersEvents);

  const { data: fetchedLastSubsEvents, loading: lastSubsEventsLoading } =
    useFetchData(lastSubsEvents);

  const {
    data: fetchedLastPaymentsEvents,
    loading: lastPaymentsEventsLoading,
  } = useFetchData(lastPaymentsEvents);

  const isLoading =
    lastUsersEventsLoading ||
    lastSubsEventsLoading ||
    lastPaymentsEventsLoading;

  return {
    isLoading,
    fetchedLastUsersEvents,
    fetchedLastSubsEvents,
    fetchedLastPaymentsEvents,
  };
};

export default useGenerateEvents;
