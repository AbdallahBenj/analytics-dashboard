import useDataModeStore from "../store/useDataModeStore.js";

const DataSourceNotice = () => {
  const isSupabaseData = useDataModeStore((state) => state.isSupabaseData);

  const demoMode = "Demo Mode — Showing mock analytics data";
  const liveMode = "Live Mode — Connected to Supabase";
  return (
    <div
      className={`w-full h-fit min-h-7 md:min-h-8
    flex justify-center items-center
    ${isSupabaseData ? "bg-green-500" : "bg-indigo-500"}`}
    >
      <p className="text-white text-sm font-semibold">
        {isSupabaseData ? liveMode : demoMode}
      </p>
    </div>
  );
};

export default DataSourceNotice;
