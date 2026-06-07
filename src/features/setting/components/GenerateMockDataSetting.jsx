import { CheckCircleIcon } from "@heroicons/react/24/outline";

import DataOperationPanel from "./DataOperationPanel.jsx";

import useRefreshMockData from "../../../hooks/useRefreshMockData.ts";
import useMockDataStore from "../../../store/useMockDataStore.ts";
import useMockData from "../../../hooks/useMockData.ts";

import useGenerateMockDataSettings from "../hooks/useGenerateMockDataSettings.js";

import SelectListbox from "../../../components/SelectListbox.jsx";

const GenerateMockDataSetting = () => {
  const timelineLimit = useMockDataStore((state) => state.timelineLimit);
  const setTimelineLimit = useMockDataStore((state) => state.setTimelineLimit);

  const refreshMockData = useRefreshMockData();
  const { mockData } = useMockData();
  const { isLoading } = mockData;

  const { GenerateMockDataConfig, TimelineOptions } =
    useGenerateMockDataSettings();

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
        <div className="flex-row justify-between items-center py-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Generate Mock Data
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Generate sample analytics data for testing and portfolio
            demonstrations.
          </p>
        </div>
        {/* // Select Listbox */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2 mb-2">
          <label className="font-semibold text-gray-700 dark:text-gray-200">
            Timeline range
          </label>
          <SelectListbox
            name={"Timeline limit"}
            ariaLabel={"Select timeline limit"}
            options={TimelineOptions}
            value={timelineLimit}
            onChange={setTimelineLimit}
          />
        </div>

        {/* // Generate MockData Panel */}
        <DataOperationPanel
          title={"Generate New Data"}
          description={""}
          ariaLabel={"generate new mock data"}
          listTitleStart={"Generated"}
          buttonLabel={"Generate"}
          loadingButtonLabel={"Loading.."}
          isEnabled={!isLoading}
          isLoading={isLoading}
          action={refreshMockData}
          operationConfig={GenerateMockDataConfig}
          icon={CheckCircleIcon}
          iconColor={"#00bc7d"}
        />
      </div>
    </div>
  );
};

export default GenerateMockDataSetting;
