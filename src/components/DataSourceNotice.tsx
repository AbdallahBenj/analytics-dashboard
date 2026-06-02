import useDataSourceStore from "../store/useDataSourceStore.js";

const DataSourceNotice = () => {
  const dataSource = useDataSourceStore((state) => state.dataSource);
  const isSupabaseData = dataSource === "supabaseData";

  dataSource;

  const demoMode = "Demo Mode — Showing mock analytics data";
  const liveMode = "Live Mode — Connected to Supabase";
  return (
    <div
      className={`w-full h-fit min-h-7 md:min-h-8
    flex justify-center items-center
    ${isSupabaseData ? "bg-emerald-500" : "bg-indigo-500"}`}
    >
      <p className="text-white text-sm font-semibold">
        {isSupabaseData ? liveMode : demoMode}
      </p>
    </div>
  );
};

export default DataSourceNotice;
