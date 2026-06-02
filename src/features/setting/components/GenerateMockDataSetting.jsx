import { useState } from "react";

import useRefreshMockData from "../../../hooks/useRefreshMockData.ts";
import useMockData from "../../../hooks/useMockData.ts";
import useMockDataStore from "../../../store/useMockDataStore.ts";

import useGenerateMockDataSettings from "../hooks/useGenerateMockDataSettings.js";

import PrimaryButton from "../../../components/PrimaryButton.jsx";
import SelectListbox from "../../../components/SelectListbox.jsx";

const GenerateMockDataSetting = () => {
  const [isGenerated, setGenerated] = useState(false);

  const timelineLimit = useMockDataStore((state) => state.timelineLimit);
  const setTimelineLimit = useMockDataStore((state) => state.setTimelineLimit);

  const refreshMockData = useRefreshMockData();
  const { mockData } = useMockData();
  const { isLoading } = mockData;

  const { GenerateMockDataConfig, TimelineOptions } =
    useGenerateMockDataSettings();

  return (
    <div className="body-container py-6">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 py-2">
        Generate Mock Data
      </p>
      <div className="flex justify-between items-center pb-4 mb-2">
        <span className="text-gray-600 dark:text-gray-400">
          Generate sample analytics data for testing and portfolio
          demonstrations.
        </span>
      </div>
      {/* // Select Listbox */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2 mb-4">
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
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Generate New Data
        </span>
        <PrimaryButton
          ariaLabel={"generate new mock data "}
          onClick={() => {
            setGenerated(true);
            refreshMockData();
          }}
          label={isLoading ? "Loading.." : "Generate"}
        />
      </div>
      {isGenerated && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4">
            <p className="text-base font-medium text-gray-700 dark:text-gray-200">
              Generated Data
            </p>
            <div className="border-b border-gray-500/25 my-4"></div>
            <ul className="space-y-1">
              {GenerateMockDataConfig.map(
                (data) =>
                  data?.data && (
                    <li key={data?.label} className="flex justify-between">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {data?.label}:
                      </span>{" "}
                      <span className="font-mono font-semibold text-green-500">
                        {data?.data?.length}
                      </span>
                    </li>
                  ),
              )}
            </ul>
          </div>
          <div className="p-4">
            <p className="text-base font-medium text-gray-700 dark:text-gray-200">
              Generated Events
            </p>
            <div className="border-b border-gray-500/25 my-4"></div>
            <ul className="space-y-1">
              {GenerateMockDataConfig.map(
                (data) =>
                  data?.events && (
                    <li key={data?.label} className="flex justify-between">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {data?.label}:
                      </span>{" "}
                      <span className="font-mono font-semibold text-green-500">
                        {data?.events?.length}
                      </span>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateMockDataSetting;
