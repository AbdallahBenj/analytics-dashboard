import {
  timeData,
  usersData,
  subscriptionsData,
  paymentsData,
} from "../../../service/mock/generateData.js";

import useFetchData from "../../../hooks/useFetchData.js";

const useFetchedGenerateData = () => {
  const time = useFetchData(timeData);
  const users = useFetchData(usersData);
  const subs = useFetchData(subscriptionsData);
  const payments = useFetchData(paymentsData);

  const isLoading =
    time.loading || users.loading || subs.loading || payments.loading;

  const errors = [
    time.error && `Time Data ${time.error}`,
    users.error && `Users Data ${users.error}`,
    subs.error && `Subscriptions Data ${subs.error}`,
    payments.error && `Payments Data ${payments.error}`,
  ].filter(Boolean);

  const isErrors = errors.length !== 0;

  const fetchedGenerateData = {
    isLoading, // boolean
    isErrors, // boolean
    errors, // []
    fetchedTimeData: time.data, // []
    fetchedUsersData: users.data, // []
    fetchedSubsData: subs.data, // []
    fetchedPaymentsData: payments.data, // []
  };

  if (import.meta.env.DEV) {
    console.log("fetchedGenerateData:", fetchedGenerateData);
    console.log("isErrors:", isErrors);
  }

  return fetchedGenerateData;
};

export default useFetchedGenerateData;
