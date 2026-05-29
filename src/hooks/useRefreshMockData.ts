import useMockDataStore from "../store/useMockDataStore.js";
import generateMockData from "../service/mock/generateMockData.js";

import type { DataTypesMap } from "../types/MockDataStoreTypes.js";

const useRefreshMockData = () => {
  const retryFetchData = useMockDataStore((state) => state.retryFetchData);

  const refreshMockData = () => {
    const mockData = generateMockData();

    const LabelDataMap = {
      timeline: "Time data",
      users: "Users data",
      subscriptions: "Subscriptions data",
      payments: "Payments data",
      usersEvents: "Users events",
      subscriptionsEvents: "Subscriptions events",
      paymentsEvents: "Payments events",
    };

    // Retry fetch data and events functions:
    (Object.keys(mockData) as (keyof DataTypesMap)[]).forEach((key) => {
      retryFetchData(key, mockData[key], LabelDataMap[key]);
    });
  };

  return refreshMockData;
};

export default useRefreshMockData;
