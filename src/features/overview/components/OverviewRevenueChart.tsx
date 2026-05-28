import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.js";

// Loading snipper icon
import { DotPulse, Cardio } from "ldrs/react";
import "ldrs/react/DotPulse.css";
import "ldrs/react/Cardio.css";

import useOverviewRevenueChart from "../hooks/useOverviewRevenueChart.js";
import type { OverviewRevenueChartConfigType } from "../../../types/overviewSectionTypes.js";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import formatCurrencyCompact from "../../../utils/formatCurrencyCompact.js";
import formatPercent from "../../../utils/formatPercent.js";

const OverviewRevenueChart = () => {
  const {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    revenueOverTimeChartConfig,
  } = useOverviewRevenueChart();

  type Range = keyof OverviewRevenueChartConfigType;

  const [range, setRange] = useState<Range>("d30");

  // Safe access
  const activeRange = revenueOverTimeChartConfig?.[range];

  //test
  const revenueValueRange = revenueOverTimeChartConfig?.[range].revenueValue;
  const revenueGrowthRateRange =
    revenueOverTimeChartConfig?.[range].revenueGrowthRate;

  const loadingContent = <DotPulse size="43" speed="1.3" color="#615fff" />;
  const errorsContent = (
    <span className="text-lg font-semibold text-red-500 mb-2 md:mb-4">N/A</span>
  );

  const valueContent = !revenueValueRange ? (
    <span className="text-gray-500">-</span>
  ) : (
    <p className="text-xl font-semibold text-gray-900 dark:text-white">
      {formatCurrencyCompact(revenueValueRange, 2)}
      <span
        className={`text-sm
        ${
          revenueGrowthRateRange !== null && revenueGrowthRateRange >= 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {" "}
        {!revenueGrowthRateRange
          ? ""
          : `${
              revenueGrowthRateRange >= 0 ? "+" : "-"
            }${formatPercent(revenueGrowthRateRange)}`}
      </span>
    </p>
  );

  return (
    <div
      className="relative primary-chart h-auto
            rounded-2xl p-4 cursor-default 
            col-span-4 md:col-span-2 lg:col-span-3
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-0.5
            transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="Title-chart mb-2 md:mb-4">
          <h3 className="text-lg font-bold mb-2 md:mb-4 text-gray-700 dark:text-gray-200">
            Revenue Over Time
          </h3>
          <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
            {revenueOverTimeChartConfig[range].label}{" "}
            <span className="text-gray-600 dark:text-gray-300">Revenue</span>
          </p>
          {isDataAndEventsLoading
            ? loadingContent
            : isDataAndEventsErrors
              ? errorsContent
              : valueContent}
        </div>

        {/* Chart */}
        <div className="Button date range mb-6">
          <RadioGroupButtons
            state={range}
            setState={setRange}
            stateConfig={revenueOverTimeChartConfig}
          />
        </div>
      </div>
      <div className="w-full h-70 min-w-0">
        {isDataAndEventsLoading ? (
          // Loading snipper icon
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Cardio size="70" stroke="4" speed="2" color="#615fff" />
          </div>
        ) : (
          !isDataAndEventsErrors && (
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart
                responsive
                width={500}
                height={300}
                data={activeRange?.data || []}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  strokeOpacity={0.3}
                  vertical={false}
                />
                <XAxis
                  dataKey={activeRange?.xKey}
                  tick={{ fill: "var(--color-chart-gray)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => formatCurrencyCompact(value)}
                  tick={{ fill: "var(--color-chart-gray)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  labelFormatter={(label) => `Date: ${label}`}
                  formatter={(value) => {
                    if (typeof value !== "number") return ["N/A", "Revenue"];
                    return [formatCurrencyCompact(value, 2), "Revenue"];
                  }}
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#9CA3AF" }}
                  cursor={{ stroke: "#6366F1", strokeWidth: 1 }}
                />
                <Area
                  type="monotone"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                  dataKey={activeRange?.yKey}
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )
        )}
      </div>
    </div>
  );
};

export default OverviewRevenueChart;
