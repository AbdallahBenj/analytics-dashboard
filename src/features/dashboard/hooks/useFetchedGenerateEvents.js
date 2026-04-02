import {
  lastSubsEvents,
  lastUsersEvents,
  lastPaymentsEvents,
} from "../../../service/events/generateEvents.js";

import useFetchData from "../../../service/hooks/useFetchData.js";

const useFetchedGenerateEvents = () => {
  const users = useFetchData(lastUsersEvents);
  const subs = useFetchData(lastSubsEvents);
  const payments = useFetchData(lastPaymentsEvents);

  const isLoading = users.loading || subs.loading || payments.loading;

  const errors = [
    users.error && `Users Events ${users.error}`,
    subs.error && `Subscriptions Events ${subs.error}`,
    payments.error && `Payments Events ${payments.error}`,
  ].filter(Boolean);

  const isErrors = errors.length !== 0;

  const fetchedGenerateEvents = {
    isLoading, // boolean
    isErrors, // boolean
    errors, // []
    fetchedLastUsersEvents: users.data, // []
    fetchedLastSubsEvents: subs.data, // []
    fetchedLastPaymentsEvents: payments.data, // []
  };

  return fetchedGenerateEvents;
};

export default useFetchedGenerateEvents;
