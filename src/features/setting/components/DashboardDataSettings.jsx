import useDataSourceStore from "../../../store/useDataSourceStore.ts";
import RadioGroupButtons from "../../../components/RadioGroupButtons.js";
import GenerateMockDataSetting from "./GenerateMockDataSetting.jsx";
import UpsertSupabaseDataSettings from "./UpsertSupabaseDataSettings.jsx";

const DashboardDataSettings = () => {
  const dataSource = useDataSourceStore((state) => state.dataSource);
  const setDataSource = useDataSourceStore((state) => state.setDataSource);
  const isSupabaseData = dataSource === "supabaseData";

  const dataSourceOptions = {
    mockData: { label: "Mock Data" },
    supabaseData: { label: "Supabase Data" },
  };
  const dataSources = dataSourceOptions[dataSource];

  return (
    <div
      className="relative primary-chart h-auto
    cursor-default rounded-2xl
    p-6 lg:p-8 xl:p-12
    col-span-4 md:col-span-4 lg:col-span-4
    flex flex-col  items-center
    
    bg-white/60 dark:bg-gray-900/40
    backdrop-blur-md
    
    border border-white/20 dark:border-white/10
    
    shadow-md shadow-black/10
    hover:shadow-xl hover:shadow-black/20
    hover:-translate-y-0.5
    transition-all duration-300"
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="header-container flex flex-col md:flex-row justify-between sm:items-center gap-x-2 gap-y-6 py-2 mb-4">
          <div className="basis-1/3">
            <h3 className="text-xl font-bold mb-1 text-gray-700 dark:text-gray-200">
              Data Sources
            </h3>
            <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
              <span
                className={`${isSupabaseData ? "text-emerald-500" : "text-indigo-500"}`}
              >
                {dataSources?.label}{" "}
              </span>

              <span className="text-gray-600 dark:text-gray-300">Options</span>
            </p>
          </div>

          <div className="basis-2/3 mb-2">
            <RadioGroupButtons
              state={dataSource}
              setState={setDataSource}
              stateConfig={dataSourceOptions}
              RadioGroupClass={"w-full min-h-9 sm:min-w-36"}
              RadioGroupOptionsClass={"w-full sm:w-[calc(50%-16px)]"}
            />
          </div>
        </div>

        <div className="border-b border-gray-500/25"></div>

        <GenerateMockDataSetting />
      </div>
    </div>
  );
};

export default DashboardDataSettings;
