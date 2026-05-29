import useDataSourceStore from "../store/useDataSourceStore.js";
import fetchSupabaseData from "../service/api/fetchSupabaseData";
import useRefreshMockData from "./useRefreshMockData.js";

const useReloadDashboardData = () => {
  const reloadMockData = useRefreshMockData();
  const reloadDashboardData = () => {
    const dataSource = useDataSourceStore.getState().dataSource;
    const isMockData = dataSource === "mockData";

    return isMockData ? reloadMockData() : fetchSupabaseData();
  };

  return reloadDashboardData;
};

export default useReloadDashboardData;
