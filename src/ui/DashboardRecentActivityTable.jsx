import { useState, useEffect } from "react";
import RadioGroupButtons from "./RadioGroupButtons.jsx";

import {
  lastUsersEvents,
  lastSubsEvents,
  lastPaymentsEvents,
} from "../service/generateEvents.js";

const allEvents = {
  usersEvents: {
    data: lastUsersEvents,
    label: "Users",
  },
  subsEvents: {
    data: lastSubsEvents,
    label: "Subscriptions",
  },
  paymentsEvents: {
    data: lastPaymentsEvents,
    label: "Payments",
  },
};

const DashboardRecentActivity = () => {
  //test start

  const [tableContent, setTableContent] = useState("usersEvents");

  const { eventsTitle: headRow, events: bodyRows } =
    allEvents[tableContent]["data"];

  useEffect(() => {
    console.log("tableContent:", allEvents["usersEvents"]);
    console.log("state:", tableContent);
    console.log("TableState:", allEvents[tableContent]["data"]["events"]);
  });

  // test end

  return (
    <div
      className="recent-activity-table h-fit overflow-auto
            rounded-2xl p-4 cursor-pointer
            col-span-4 lg:col-span-3
            
            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
    >
      <div className="flex justify-between">
        <div className="Title-chart mb-3">
          <h3 className="text-md font-medium text-gray-600 dark:text-gray-300">
            Latest Events
          </h3>
        </div>
        <div className="Button date range ">
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
            className="text-left text-gray-600 dark:text-gray-300
            bg-indigo-500/10 
            "
          >
            {headRow.map((span) => {
              return (
                <th
                  key={span}
                  className={`px-4 py-2 ${span === headRow[0] && "rounded-l-lg"} 
                ${span === headRow[headRow.length - 1] && "rounded-r-lg"}`}
                >
                  {span}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((sub, i) => {
            const { id, span1, span2, span3, span4 } = sub;
            return (
              <tr
                key={id}
                className={`text-gray-600 dark:text-gray-400
                hover:bg-gray-500/10
                ${i % 2 !== 0 && "bg-indigo-50 dark:bg-indigo-50/5"}`}
              >
                <td className="px-4 py-2 rounded-l-lg">{span1}</td>
                <td className="px-4 py-2">{span2}</td>
                <td
                  className={`px-4 py-2
                  ${span3 === "basic" && "text-indigo-400"}
                  ${span3 === "pro" && "text-indigo-500"}`}
                >
                  {span3}
                </td>
                <td
                  className={`px-4 py-2 rounded-r-lg
                  ${span4 === "active" && "text-emerald-500"}
                  ${span4 === "canceled" && "text-red-500"}`}
                >
                  {span4}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardRecentActivity;
