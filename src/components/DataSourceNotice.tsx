import useDataSourceStore from "../store/useDataSourceStore.js";

const DataSourceNotice = () => {
  const dataSource = useDataSourceStore((state) => state.dataSource);
  const isMockData = dataSource === "mockData";

  dataSource;

  const demoMode = "Demo Mode — Showing mock analytics data";
  const liveMode = "Live Mode — Connected to Supabase";
  return (
    <div
      className={`w-full h-fit min-h-7 md:min-h-8
    flex justify-center items-center
    ${isMockData ? "bg-indigo-500" : "bg-green-500"}`}
    >
      <p className="text-white text-sm font-semibold">
        {isMockData ? demoMode : liveMode}
      </p>
    </div>
  );
};

export default DataSourceNotice;
