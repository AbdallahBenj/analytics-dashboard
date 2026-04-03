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
    return [
      time.error && `Time Data ${time.error}`,
      users.error && `Users Data ${users.error}`,
      subs.error && `Subscriptions Data ${subs.error}`,
      payments.error && `Payments Data ${payments.error}`,
    ].filter(Boolean);
  }, [time.error, users.error, subs.error, payments.error]);

  const isDataErrors = dataErrors.length !== 0;

  const fetchedGenerateData = {
    isDataLoading, // boolean
    isDataErrors, // boolean
    dataErrors, // []
    timeData: time.data, // []
    usersData: users.data, // []
    subsData: subs.data, // []
    paymentsData: payments.data, // []
  };

  return fetchedGenerateData;
};

export default useFetchedGenerateData;
