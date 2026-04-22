import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.jsx";

// Loading snipper icon
import { DotPulse, Cardio } from "ldrs/react";
import "ldrs/react/DotPulse.css";
import "ldrs/react/Cardio.css";

import useAnalyticsRevenueTrendChart from "../hooks/useAnalyticsRevenueTrendChart.js";

import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import convertToKilo from "../../../utils/convertToKilo.js";

const AnalyticsRevenueTrendChart = () => {
  const {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    // last30daysRevenue,
    // perCent30daysRevenue,
    revenueRangeConfig,
  } = useAnalyticsRevenueTrendChart();

  const [range, setRange] = useState("d30");

  const loadingContent = <DotPulse size="43" speed="1.3" color="#615fff" />;
  const errorsContent = (
    <span className="text-lg font-semibold text-red-500">N/A</span>
  );
  const valueContent = !revenueRangeConfig[range].revenueValue ? (
    <span className="text-gray-500">-</span>
  ) : (
    <p className="text-xl font-semibold mb-2 md:mb-4 text-gray-900 dark:text-white">
      {`$ ${convertToKilo(revenueRangeConfig[range].revenueValue)}`}
      <span className="text-sm text-gray-500">
        {" "}
        {!revenueRangeConfig[range].perCentRevenue
          ? ""
          : `${
              revenueRangeConfig[range].perCentRevenue >= 0 ? "+" : ""
            }${revenueRangeConfig[range].perCentRevenue}%`}
      </span>
    </p>
  );

  return (
    <div
      className="analytics-chart-revenue h-120
            rounded-2xl p-4 cursor-pointer 
            col-span-4 md:col-span-4 lg:col-span-4
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
    >
      <div className="">
        <h3 className="text-lg font-bold mb-2 md:mb-4 text-gray-700 dark:text-gray-200">
          Revenue Trend Chart By Plan
        </h3>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="Title-chart mb-2 md:mb-4">
            <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
              {revenueRangeConfig[range].label}{" "}
              <span className="text-gray-600 dark:text-gray-300">Revenue</span>
            </p>
            {isDataAndEventsLoading
              ? loadingContent
              : isDataAndEventsErrors
                ? errorsContent
                : valueContent}
          </div>
          <div className="Button date range mb-6">
            <RadioGroupButtons
              state={range}
              setState={setRange}
              stateConfig={revenueRangeConfig}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        {isDataAndEventsLoading ? (
          // Loading snipper icon
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Cardio size="70" stroke="4" speed="2" color="#615fff" />
          </div>
        ) : (
          !isDataAndEventsErrors && (
            <ResponsiveContainer width="96%" height="100%">
              <LineChart data={revenueRangeConfig[range].data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  strokeOpacity={0.3}
                  vertical={false}
                />
                <XAxis
                  dataKey={revenueRangeConfig[range].xKey}
                  tick={{ fill: "var(--color-chart-gray)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `$${convertToKilo(value)}`}
                  tick={{ fill: "var(--color-chart-gray)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v) => [`$${convertToKilo(v)}`, "Revenue"]}
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#9CA3AF" }}
                  cursor={{ stroke: "#6366F1", strokeWidth: 1 }}
                />
                <Line
                  type="monotone"
                  dataKey={revenueRangeConfig[range].yKey}
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )
        )}
      </div>
    </div>
  );
};

export default AnalyticsRevenueTrendChart;
