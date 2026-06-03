import { useState } from "react";

import DataOperationPanel from "./DataOperationPanel.jsx";

import useRefreshMockData from "../../../hooks/useRefreshMockData.ts";
import useMockData from "../../../hooks/useMockData.ts";
import useMockDataStore from "../../../store/useMockDataStore.ts";

import useGenerateMockDataSettings from "../hooks/useGenerateMockDataSettings.js";

import SelectListbox from "../../../components/SelectListbox.jsx";

const GenerateMockDataSetting = () => {
  const [isGenerated, setGenerated] = useState(true);

  const timelineLimit = useMockDataStore((state) => state.timelineLimit);
  const setTimelineLimit = useMockDataStore((state) => state.setTimelineLimit);

  const refreshMockData = useRefreshMockData();
  const { mockData } = useMockData();
  const { isLoading } = mockData;

  const { GenerateMockDataConfig, TimelineOptions } =
    useGenerateMockDataSettings();

  return (
    <div className="body-container my-4">
      <div className="flex-row justify-between items-center py-2 mb-2">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Generate Mock Data
        </p>
        <span className="text-gray-600 dark:text-gray-400">
          Generate sample analytics data for testing and portfolio
          demonstrations.
        </span>
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
        buttonLabel={"Generate"}
        loadingButtonLabel={"Loading.."}
        isLoading={isLoading}
        isOperated={isGenerated}
        setOperation={setGenerated}
        refreshOperation={refreshMockData}
        operationConfig={GenerateMockDataConfig}
      />
    </div>
  );
};

export default GenerateMockDataSetting;
