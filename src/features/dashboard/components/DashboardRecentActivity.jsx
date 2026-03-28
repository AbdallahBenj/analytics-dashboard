import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.jsx";

// Loading snipper icon
import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";

import useDashboardRecentActivity from "../hooks/useDashboardRecentActivity.js";

const EVENT_TYPES = {
  USERS: "usersEvents",
  SUBSCRIPTIONS: "subsEvents",
  PAYMENTS: "paymentsEvents",
};

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

const DashboardRecentActivity = () => {
  const { isLoading, allEvents } = useDashboardRecentActivity();

  const [tableContent, setTableContent] = useState(EVENT_TYPES.USERS);

  const { eventsTitle, events } = allEvents[tableContent].data;
  const headers = eventsTitle || [];
  const rows = events || [];

  const { id } = allEvents[tableContent].config;
  const tableColumns = allEvents[tableContent].config.columns;

  return (
    <div
      className="recent-activity-table h-fit overflow-auto
            rounded-2xl p-4 cursor-pointer
            col-span-4
            
            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
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
      <table className="border-separate border-spacing-2 w-full">
        <thead>
          <tr
            className={`${isLoading ? "text-center" : "text-left"}
            text-gray-500 bg-indigo-500/10`}
          >
            {isLoading ? (
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
          {isLoading ? (
            // Loading snipper icon
            <tr className={`${isLoading ? "text-center" : "text-left"}`}>
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
            rows.map((event) => {
              return (
                <tr
                  key={event[id]}
                  className="text-gray-600 dark:text-gray-400
                hover:bg-gray-500/10
                even:bg-indigo-50 even:dark:bg-indigo-50/5"
                >
                  {tableColumns.map((col, i) => {
                    const value = event[col.key];
                    return (
                      <td
                        key={`${col.key}-${i}`}
                        className={`px-4 py-2 
                      ${i === 0 && "rounded-l-lg"} 
                      ${i === tableColumns.length - 1 && "rounded-r-lg"}
                      ${col.colored ? spanColorMap[value] || "" : ""}`}
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
  );
};

export default DashboardRecentActivity;
