import useGlobalMockData from "./useGlobalMockData";
import useGlobalSupabaseData from "./useGlobalSupabaseData";
import useDataModeStore from "../store/useDataModeStore";

const useDashboardData = () => {
  const isSupabaseData = useDataModeStore((state) => state.isSupabaseData);
  const { mockData } = useGlobalMockData();
  const { supabaseData } = useGlobalSupabaseData();

  const dashboardData = isSupabaseData ? supabaseData : mockData;

  // console.log("dashboardData", dashboardData);
  return { dashboardData };
};

export default useDashboardData;
