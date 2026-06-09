import useMockDataStore from "../store/useMockDataStore.js";
import MockDataLabel from "../service/mock/MockDataLabel.js";

import type { DataTypesMap } from "../types/MockDataStoreTypes.js";

const useReloadMockData = () => {
  const retryFetchData = useMockDataStore((state) => state.retryFetchData);
  const generatedData = useMockDataStore((state) => state.generatedData);

  const reloadMockData = () => {
    const mockData = generatedData;

    // Retry fetch data and events functions:
    (Object.keys(mockData) as (keyof DataTypesMap)[]).forEach((key) => {
      retryFetchData(key, mockData[key], MockDataLabel[key]);
    });
  };

  return reloadMockData;
};

export default useReloadMockData;
