import { useMemo } from "react";

import {
  timeData,
  usersData,
  subscriptionsData,
  paymentsData,
} from "../../../service/mock/generateData.js";

import useFetchData from "../../../service/hooks/useFetchData.js";

const useFetchedGenerateData = () => {
  const time = useFetchData(timeData);
  const users = useFetchData(usersData);
  const subs = useFetchData(subscriptionsData);
  const payments = useFetchData(paymentsData);

  const isDataLoading =
    time.loading || users.loading || subs.loading || payments.loading;

  const dataErrors = useMemo(() => {
    const errors = [];
    if (time.error)
      errors.push({ id: "time", message: time.error, label: "Time Data" });
    if (users.error)
      errors.push({
        id: "users",
        message: users.error,
        label: "Users Data",
      });
    if (subs.error)
      errors.push({
        id: "subscriptions",
        message: subs.error,
        label: "Subscriptions Data",
      });
    if (payments.error)
      errors.push({
        id: "payments",
        message: payments.error,
        label: "Payments Data",
      });
    return errors;
  }, [time.error, users.error, subs.error, payments.error]);

  const fetchedGenerateData = {
    isDataLoading, // boolean
    dataErrors, // []
    timeData: time.data, // []
    usersData: users.data, // []
    subsData: subs.data, // []
    paymentsData: payments.data, // []
  };

  return fetchedGenerateData;
};

export default useFetchedGenerateData;
