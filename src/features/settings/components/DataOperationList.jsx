import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { LineSpinner, DotPulse } from "ldrs/react";
import "ldrs/react/LineSpinner.css";
import "ldrs/react/DotPulse.css";

const DataOperationList = ({
  listTitle,
  dataType,
  loadingType = "loading",
  icon = CheckCircleIcon,
  iconColor = "#00bc7d",
  operationConfig,
}) => {
  const Icon = icon;
  return (
    <div className="px-4">
      <p className="text-base font-medium text-gray-700 dark:text-gray-200">
        {listTitle}
      </p>
      <div className="border-b border-gray-500/25 my-4"></div>
      <ul className="space-y-1">
        {operationConfig
          .filter((data) => data[dataType])
          .map((data) => {
            const loadingState = data[loadingType];

            return (
              <li key={data.label} className="flex justify-between">
                <span className="flex justify-center items-center text-indigo-600 dark:text-indigo-400">
                  {loadingState ? (
                    <span className="flex items-center justify-center h-full mr-2">
                      <LineSpinner
                        size="24"
                        stroke="3"
                        speed="1"
                        color={iconColor}
                      />
                    </span>
                  ) : (
                    <Icon
                      className="inline-block size-6  mr-2"
                      style={{ color: `${iconColor}` }}
                    />
                  )}
                  <span>{data.label}</span>
                </span>
                <span
                  className="font-mono font-semibold"
                  style={{ color: `${iconColor}` }}
                >
                  {loadingState ? (
                    <DotPulse size="32" speed="1.3" color={iconColor} />
                  ) : (
                    (data[dataType].dataValue || data[dataType]).length
                  )}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DataOperationList;
