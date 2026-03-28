import {
  timeData,
  usersData,
  subscriptionsData,
  paymentsData,
} from "../../../service/mock/generateData.js";

import useFetchData from "../../../hooks/useFetchData.js";

const useFetchedGenerateData = () => {
  const { data: fetchedTimeData, loading: timeDataLoading } =
    useFetchData(timeData);

  const { data: fetchedUsersData, loading: usersDataLoading } =
    useFetchData(usersData);

  const { data: fetchedSubsData, loading: subsDataLoading } =
    useFetchData(subscriptionsData);

  const { data: fetchedPaymentsData, loading: paymentsDataLoading } =
    useFetchData(paymentsData);

  const isLoading =
    // true;
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

export default useFetchedGenerateData;
