import useMockDataStore from "../store/useMockDataStore.js";
import generateMockData from "../service/mock/generateMockData.js";
import MockDataLabel from "../service/mock/MockDataLabel.js";

import type { DataTypesMap } from "../types/MockDataStoreTypes.js";

const useRefreshMockData = () => {
  const retryFetchData = useMockDataStore((state) => state.retryFetchData);

  const refreshMockData = () => {
    const mockData = generateMockData();

    // Retry fetch data and events functions:
    (Object.keys(mockData) as (keyof DataTypesMap)[]).forEach((key) => {
      retryFetchData(key, mockData[key], MockDataLabel[key]);
    });
  };

  return refreshMockData;
};

export default useRefreshMockData;
