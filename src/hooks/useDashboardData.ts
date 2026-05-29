import useMockData from "./useMockData.js";
import useSupabaseData from "./useSupabaseData.js";
import useDataSourceStore from "../store/useDataSourceStore.js";

const useDashboardData = () => {
  const dataSource = useDataSourceStore((state) => state.dataSource);
  const isMockData = dataSource === "mockData";

  const { mockData } = useMockData();
  const { supabaseData } = useSupabaseData();

  const dashboardData = isMockData ? mockData : supabaseData;

  // console.log("mockData", mockData);
  // console.log("supabaseData", supabaseData);

  return { dashboardData };
};

export default useDashboardData;
