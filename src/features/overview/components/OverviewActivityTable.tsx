import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.js";

// Loading snipper icon
import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";

import useOverviewActivityTable from "../hooks/useOverviewActivityTable.js";
import type { AllEventsMap } from "../../../types/overviewSectionTypes.js";

const spanColorMap = {
  basic: "text-indigo-400",
  pro: "text-indigo-500",

  canceled: "text-red-500",
  active: "text-emerald-500",

  "5$": "text-indigo-400",
  "10$": "text-indigo-500",

  failed: "text-red-500",
  pending: "text-yellow-500",
  paid: "text-emerald-500",
};

const OverviewActivityTable = () => {
  const { isDataAndEventsLoading, isDataAndEventsErrors, allEvents } =
    useOverviewActivityTable(5);

  console.log("allEvents", allEvents);

  type EventKey = keyof AllEventsMap;
  const [tableContent, setTableContent] = useState<EventKey>("usersEvents");

  const { eventsTitle, events } = allEvents[tableContent];

  const headers = eventsTitle || [];
  const rows = events || [];

  const { id } = allEvents[tableContent].config;
  const tableColumns = allEvents[tableContent].config.columns;

  return (
    <div
      className="recent-activity-table h-fit
            rounded-2xl p-4 cursor-pointer
            col-span-4
            
            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-0.5
            transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="Title-chart mb-3">
          <h3 className="text-md font-medium text-gray-600 dark:text-gray-300">
            Recent Activity
          </h3>
        </div>
        <div className="Button date range mb-5">
          <RadioGroupButtons
            state={tableContent}
            setState={setTableContent}
            stateConfig={allEvents}
          />
        </div>
      </div>
      <div className="overflow-auto">
        <table className="border-separate border-spacing-2 w-full">
          <thead>
            <tr
              className={`${isDataAndEventsLoading ? "text-center" : "text-left"}
            text-gray-500 bg-indigo-500/10`}
            >
              {isDataAndEventsLoading ? (
                // Loading snipper icon
                <th className="text-2xl px-4 py-2 rounded-lg">
                  <Zoomies
                    size="90"
                    stroke="5"
                    bgOpacity="0.1"
                    speed="1.4"
                    color="#615fff"
                  />
                </th>
              ) : isDataAndEventsErrors ? (
                <th className="flex justify-center px-4 py-2 rounded-lg">
                  <span className="text-xl text-red-500">N/A</span>
                </th>
              ) : (
                headers.map((colTitle, i) => {
                  return (
                    <th
                      key={`${colTitle}-${i}`}
                      className={`px-4 py-2 ${i === 0 && "rounded-l-lg"} 
                ${i === headers.length - 1 && "rounded-r-lg"}`}
                    >
                      {colTitle}
                    </th>
                  );
                })
              )}
            </tr>
          </thead>
          <tbody>
            {isDataAndEventsLoading ? (
              // Loading snipper icon
              <tr
                className={`${isDataAndEventsLoading ? "text-center" : "text-left"}`}
              >
                <td className="text-xl px-4 py-2 rounded-lg">
                  <Zoomies
                    size="70"
                    stroke="5"
                    bgOpacity="0.1"
                    speed="1.4"
                    color="#615fff"
                  />{" "}
                </td>
              </tr>
            ) : (
              !isDataAndEventsErrors &&
              rows.map((event) => {
                return (
                  <tr
                    key={event[id as keyof typeof event]}
                    className="text-gray-600 dark:text-gray-400
                hover:bg-gray-500/10
                even:bg-indigo-50 even:dark:bg-indigo-50/5"
                  >
                    {tableColumns.map((col, i) => {
                      const value = event[col.key as keyof typeof event];
                      return (
                        <td
                          key={`${col.key}-${i}`}
                          className={`px-4 py-2 
                      ${i === 0 && "rounded-l-lg"} 
                      ${i === tableColumns.length - 1 && "rounded-r-lg"}
                      ${col.colored ? spanColorMap[value as keyof typeof spanColorMap] || "" : ""}`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewActivityTable;
