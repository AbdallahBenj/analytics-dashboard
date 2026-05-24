import useDataModeStore from "../store/useDataModeStore.js";
import fetchSupabaseData from "../service/api/fetchSupabaseData";
import reloadMockData from "../hooks/useRouteLoaderData";

const useReloadDashboardData = () => {
  const isSupabaseData = useDataModeStore.getState().isSupabaseData;
  const reloadDashboardData = () =>
    isSupabaseData ? fetchSupabaseData() : reloadMockData();

  return reloadDashboardData;
};

export default useReloadDashboardData;
