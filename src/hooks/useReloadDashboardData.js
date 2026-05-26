import useDataSourceStore from "../store/useDataSourceStore.js";
import fetchSupabaseData from "../service/api/fetchSupabaseData";
import useReloadMockData from "../hooks/useReloadMockData";

const useReloadDashboardData = () => {
  const reloadMockData = useReloadMockData();
  const reloadDashboardData = () => {
    const dataSource = useDataSourceStore.getState().dataSource;
    const isMockData = dataSource === "mockData";

    return isMockData ? reloadMockData() : fetchSupabaseData();
  };

  return reloadDashboardData;
};

export default useReloadDashboardData;
