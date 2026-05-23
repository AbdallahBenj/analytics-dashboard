import useGlobalMockData from "./useGlobalMockData";
import useGlobalSupabaseData from "./useGlobalSupabaseData";
import useDataModeStore from "../store/useDataModeStore";

const useDashboardData = () => {
  const isSupabaseData = useDataModeStore((state) => state.isSupabaseData);
  const { mockData } = useGlobalMockData();
  const { supabaseData } = useGlobalSupabaseData();

  let dashboardData;
  if (isSupabaseData) {
    dashboardData = supabaseData;
    // console.table("supabaseData", dashboardData);
  } else {
    dashboardData = mockData;
    // console.table("mockData", dashboardData);
  }
  // const dashboardData = isSupabaseData ? supabaseData : mockData;

  return { dashboardData };
};

export default useDashboardData;
