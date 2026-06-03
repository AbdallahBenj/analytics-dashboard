import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

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
      {/* // Generated MockData */}
      {/* {isGenerated && ( */}
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <div className="px-4">
            <p className="text-base font-medium text-gray-700 dark:text-gray-200">
              Generated Data
            </p>
            <div className="border-b border-gray-500/25 my-4"></div>
            <ul className="space-y-1">
              {GenerateMockDataConfig.map(
                (data) =>
                  data.data && (
                    <li key={data?.label} className="flex justify-between">
                      <span className="flex justify-center items-center text-indigo-600 dark:text-indigo-400">
                        {isLoading ? (
                          <span className="flex items-center justify-center h-full mr-2">
                            <LineSpinner
                              size="24"
                              stroke="3"
                              speed="1"
                              color="#615fff"
                            />
                          </span>
                        ) : (
                          <CheckCircleIcon className="inline-block size-6 text-emerald-500 mr-2" />
                        )}
                        <span>{data.label}</span>
                      </span>
                      <span className="font-mono font-semibold text-emerald-500">
                        {data.data.length}
                      </span>
                    </li>
                  ),
              )}
            </ul>
          </div>
          <div className="px-4">
            <p className="text-base font-medium text-gray-700 dark:text-gray-200">
              Generated Events
            </p>
            <div className="border-b border-gray-500/25 my-4"></div>
            <ul className="space-y-1">
              {GenerateMockDataConfig.map(
                (data) =>
                  data.events && (
                    <li key={data?.label} className="flex justify-between">
                      <span className="flex justify-center items-center text-indigo-600 dark:text-indigo-400">
                        {isLoading ? (
                          <span className="flex items-center justify-center h-full mr-2">
                            <LineSpinner
                              size="24"
                              stroke="3"
                              speed="1"
                              color="#615fff"
                            />
                          </span>
                        ) : (
                          <CheckCircleIcon className="inline-block size-6 text-emerald-500 mr-2" />
                        )}
                        <span>{data.label}</span>
                      </span>
                      <span className="font-mono font-semibold text-emerald-500">
                        {data.events.length}
                      </span>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default GenerateMockDataSetting;
