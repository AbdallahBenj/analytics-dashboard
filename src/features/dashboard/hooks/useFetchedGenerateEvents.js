import { useMemo } from "react";
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

  const isEventsLoading = users.loading || subs.loading || payments.loading;

  const eventsErrors = useMemo(() => {
    return [
      users.error && `Users Events ${users.error}`,
      subs.error && `Subscriptions Events ${subs.error}`,
      payments.error && `Payments Events ${payments.error}`,
    ].filter(Boolean);
  }, [users.error, subs.error, payments.error]);

  const isEventsErrors = eventsErrors.length !== 0;

  const fetchedGenerateEvents = {
    isEventsLoading, // boolean
    isEventsErrors, // boolean
    eventsErrors, // []
    usersEvents: users.data, // []
    subsEvents: subs.data, // []
    paymentsEvents: payments.data, // []
  };

  return fetchedGenerateEvents;
};

export default useFetchedGenerateEvents;
