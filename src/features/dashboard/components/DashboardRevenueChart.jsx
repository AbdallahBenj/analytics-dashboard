import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.tsx";

// Loading snipper icon
import { DotPulse, Cardio } from "ldrs/react";
import "ldrs/react/DotPulse.css";
import "ldrs/react/Cardio.css";

import useDashboardRevenueChartStats from "../hooks/useDashboardRevenueChartStats.js";

import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import convertToKilo from "../../../utils/convertToKilo.ts";

const RevenueChart = () => {
  const {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    last30daysRevenue,
    perCent30daysRevenue,
    revenueRangeConfig,
  } = useDashboardRevenueChartStats();

  const [range, setRange] = useState("d30");

  const loadingContent = <DotPulse size="43" speed="1.3" color="#615fff" />;
  const errorsContent = (
    <span className="text-lg font-semibold text-red-500 mb-2 md:mb-4">N/A</span>
  );
  const valueContent = !last30daysRevenue ? (
    <span className="text-gray-500">-</span>
  ) : (
    <p className="text-xl font-semibold text-gray-900 dark:text-white">
      {`$ ${convertToKilo(last30daysRevenue)}`}
      <span className="text-sm text-gray-500">
        {" "}
        {`${perCent30daysRevenue >= 0 ? "+" : ""}${perCent30daysRevenue}%`}
      </span>
    </p>
  );

  return (
    <div
      className="relative primary-chart h-100
            rounded-2xl p-4 cursor-pointer 
            col-span-4 md:col-span-2 lg:col-span-3
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="Title-chart mb-2 md:mb-4">
          <h3 className="text-md font-medium text-gray-600 dark:text-gray-300">
            Monthly Revenue
          </h3>
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
      <div className="flex-1 min-h-0">
        {isDataAndEventsLoading ? (
          // Loading snipper icon
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Cardio size="70" stroke="4" speed="2" color="#615fff" />
          </div>
        ) : (
          !isDataAndEventsErrors && (
            <ResponsiveContainer width="100%" height="100%">
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

export default RevenueChart;
