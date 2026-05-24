import useDataModeStore from "../store/useDataModeStore.js";
import fetchSupabaseData from "../service/api/fetchSupabaseData";
import useReloadMockData from "../hooks/useReloadMockData";

const useReloadDashboardData = () => {
  const reloadMockData = useReloadMockData();
  const reloadDashboardData = () => {
    const isSupabaseData = useDataModeStore.getState().isSupabaseData;
    return isSupabaseData ? fetchSupabaseData() : reloadMockData();
  };

  return reloadDashboardData;
};

export default useReloadDashboardData;
