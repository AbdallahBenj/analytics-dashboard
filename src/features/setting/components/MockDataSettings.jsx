// import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.js";
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
            rounded-2xl p-4 cursor-pointer 
            col-span-4 md:col-span-4 lg:col-span-2
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
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="header-container mb-2 md:mb-4">
          <h3 className="text-xl font-bold mb-2 md:mb-4 text-gray-700 dark:text-gray-200">
            Data Sources
          </h3>
          <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
            {dataSources?.label}{" "}
            <span className="text-gray-600 dark:text-gray-300">Options</span>
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Test 02
          </p>
        </div>

        <div className="mb-6">
          <RadioGroupButtons
            state={dataSource}
            setState={setDataSource}
            stateConfig={dataSourceOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default MockDataSettings;
