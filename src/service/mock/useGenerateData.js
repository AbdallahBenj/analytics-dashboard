import generateTimeLine from "./generateTimeLine.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

const timeData = generateTimeLine(180);
const usersData = generateUsers(timeData);
const subscriptionsData = generateSubscriptions(usersData);
const paymentsData = generatePayments(subscriptionsData);

// test start

import useFetchData from "../../hooks/useFetchData.js";

const useGenerateData = () => {
  const { data: fetchedTimeData, loading: timeDataLoading } =
    useFetchData(timeData);

  const { data: fetchedUsersData, loading: usersDataLoading } =
    useFetchData(usersData);

  const { data: fetchedSubsData, loading: subsDataLoading } =
    useFetchData(subscriptionsData);

  const { data: fetchedPaymentsData, loading: paymentsDataLoading } =
    useFetchData(paymentsData);

  const isLoading =
    timeDataLoading ||
    usersDataLoading ||
    subsDataLoading ||
    paymentsDataLoading;

  return {
    isLoading,
    fetchedTimeData,
    fetchedUsersData,
    fetchedSubsData,
    fetchedPaymentsData,
  };
};

export default useGenerateData;

// test end
