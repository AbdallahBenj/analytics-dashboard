import RadioGroupButtons from "../../../components/RadioGroupButtons.js";
import SwitchButton from "../../../components/SwitchButton.jsx";
import PrimaryButton from "../../../components/PrimaryButton.jsx";

import useDataSourceStore from "../../../store/useDataSourceStore.js";

const MockDataSettings = () => {
  const dataSource = useDataSourceStore((state) => state.dataSource);
  const setDataSource = useDataSourceStore((state) => state.setDataSource);

  const dataSourceOptions = {
    mockData: { label: "Mock Data" },
    supabaseData: { label: "Supabase Data" },
  };
  const dataSources = dataSourceOptions[dataSource];

  return (
    <div
      className="relative primary-chart h-auto
            rounded-2xl p-6  cursor-default
            col-span-4 md:col-span-4 lg:col-span-4
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-0.5
            transition-all duration-300"
    >
      {/* Header */}
      <div className="header-container flex flex-col md:flex-row justify-between gap-2 mb-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1 text-gray-700 dark:text-gray-200">
            Data Sources
          </h3>
          <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
            {dataSources?.label}{" "}
            <span className="text-gray-600 dark:text-gray-300">Options</span>
          </p>
          {/* <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Test 02
          </p> */}
        </div>

        <div className="mb-2">
          <RadioGroupButtons
            state={dataSource}
            setState={setDataSource}
            stateConfig={dataSourceOptions}
          />
        </div>
      </div>
      <div className="border-b border-gray-500/25"></div>

      <div className="body-container py-6 px-2">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 pt-2 pb-4">
          Options title
        </p>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-700 dark:text-gray-200">option 1</span>
          <SwitchButton />
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-700 dark:text-gray-200">option 2</span>
          <PrimaryButton onClick={() => {}} />
        </div>
      </div>
      {/* <div className="border-b border-gray-500/25"></div> */}
    </div>
  );
};

export default MockDataSettings;
