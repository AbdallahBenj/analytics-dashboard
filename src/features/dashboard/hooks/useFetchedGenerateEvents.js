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
    const errors = [];
    if (users.error)
      errors.push({ id: "users", message: users.error, label: "Users events" });
    if (subs.error)
      errors.push({
        id: "subscriptions",
        message: subs.error,
        label: "Subscriptions events",
      });
    if (payments.error)
      errors.push({
        id: "payments",
        message: payments.error,
        label: "Payments events",
      });
    return errors;
  }, [users.error, subs.error, payments.error]);

  const fetchedGenerateEvents = {
    isEventsLoading, // boolean
    eventsErrors, // []
    usersEvents: users.data, // []
    subsEvents: subs.data, // []
    paymentsEvents: payments.data, // []
  };

  return fetchedGenerateEvents;
};

export default useFetchedGenerateEvents;
