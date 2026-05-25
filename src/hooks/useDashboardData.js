import useMockData from "./useMockData";
import useSupabaseData from "./useSupabaseData";
import useDataModeStore from "../store/useDataModeStore";

const useDashboardData = () => {
  const isSupabaseData = useDataModeStore((state) => state.isSupabaseData);
  const { mockData } = useMockData();
  const { supabaseData } = useSupabaseData();

  const dashboardData = isSupabaseData ? supabaseData : mockData;

  // console.log("mockData", mockData);
  // console.log("supabaseData", supabaseData);

  return { dashboardData };
};

export default useDashboardData;
