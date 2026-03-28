import {
  lastSubsEvents,
  lastUsersEvents,
  lastPaymentsEvents,
} from "../../../service/events/generateEvents.js";

import useFetchData from "../../../hooks/useFetchData.js";

const useFetchedGenerateEvents = () => {
  const { data: fetchedLastUsersEvents, loading: lastUsersEventsLoading } =
    useFetchData(lastUsersEvents);

  const { data: fetchedLastSubsEvents, loading: lastSubsEventsLoading } =
    useFetchData(lastSubsEvents);

  const {
    data: fetchedLastPaymentsEvents,
    loading: lastPaymentsEventsLoading,
  } = useFetchData(lastPaymentsEvents);

  const isLoading =
    // true;
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

export default useFetchedGenerateEvents;
