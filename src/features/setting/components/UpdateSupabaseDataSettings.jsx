import { useState } from "react";

import useRefreshMockData from "../../../hooks/useRefreshMockData.ts";
import useMockData from "../../../hooks/useMockData.ts";

import SwitchButton from "../../../components/SwitchButton.jsx";
import PrimaryButton from "../../../components/PrimaryButton.jsx";

const UpdateSupabaseDataSettings = () => {
  const [enableGenerate, setEnableGenerate] = useState(false);

  const refreshMockData = useRefreshMockData();
  const { mockData } = useMockData();
  const { isLoading } = mockData;

  return (
    <div className="body-container py-6 px-2">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 pt-2 pb-4">
        Generate Mock Data
      </p>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 dark:text-gray-200">
          Enable generation
        </span>
        <SwitchButton
          enabled={enableGenerate}
          ariaLabel={"Enable mock data generation"}
          setEnabled={() => setEnableGenerate(!enableGenerate)}
        />
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 dark:text-gray-200">
          Generate New Data
        </span>
        <PrimaryButton
          disabled={!enableGenerate}
          ariaLabel={"generate new mock data "}
          onClick={() => {
            if (!enableGenerate) return;
            refreshMockData();
          }}
          label={isLoading ? "Loading.." : "Generate"}
        />
      </div>
    </div>
  );
};

export default UpdateSupabaseDataSettings;
