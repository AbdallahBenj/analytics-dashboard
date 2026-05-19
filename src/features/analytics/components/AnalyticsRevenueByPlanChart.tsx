import { useState } from "react";
import RadioGroupButtons from "../../../components/RadioGroupButtons.js";

// Loading snipper icon
import { DotPulse, Cardio } from "ldrs/react";
import "ldrs/react/DotPulse.css";
import "ldrs/react/Cardio.css";

import useAnalyticsRevenueByPlanChart from "../hooks/useAnalyticsRevenueByPlanChart.js";

import type { AnalyticsRevenueByPlanChartConfigType } from "../../../types/analyticsSectionTypes.js";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import formatCurrencyCompact from "../../../utils/formatCurrencyCompact.js";
import formatPercent from "../../../utils/formatPercent.js";

const AnalyticsRevenueByPlanChart = () => {
  const {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    revenueByPlanChartConfig,
  } = useAnalyticsRevenueByPlanChart();

  type Range = keyof AnalyticsRevenueByPlanChartConfigType;

  const [range, setRange] = useState<Range>("d30");

  // Safe access
  const activeRange = revenueByPlanChartConfig?.[range];

  const revenueValueRange = revenueByPlanChartConfig?.[range].revenueValue;
  const revenueGrowthRateRange =
    revenueByPlanChartConfig?.[range].revenueGrowthRate;

  const loadingContent = <DotPulse size="43" speed="1.3" color="#615fff" />;
  const errorsContent = (
    <span className="text-lg font-semibold text-red-500">N/A</span>
  );

  const valueContent = !revenueValueRange ? (
    <span className="text-gray-500">-</span>
  ) : (
    <p className="text-xl font-semibold mb-2 md:mb-4 text-gray-900 dark:text-white">
      {formatCurrencyCompact(revenueValueRange, 2)}
      <span
        className={`text-sm text-gray-500
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
              revenueGrowthRateRange >= 0 ? "+" : ""
            }${formatPercent(revenueGrowthRateRange)}`}
      </span>
    </p>
  );

  return (
    <div
      className="analytics-chart-revenue h-auto
            rounded-2xl p-4 cursor-pointer 
            col-span-4 md:col-span-4 lg:col-span-4
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-0.5
            transition-all duration-300"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2 md:mb-4 text-gray-700 dark:text-gray-200">
          {/* Revenue Trend Chart By Plan */}
          Revenue by Plan
        </h3>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="Title-chart mb-2 md:mb-4">
            <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
              {activeRange?.label}{" "}
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
              stateConfig={revenueByPlanChartConfig}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-70 min-w-0 overflow-hidden">
        {isDataAndEventsLoading ? (
          // Loading snipper icon
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Cardio size="70" stroke="4" speed="2" color="#615fff" />
          </div>
        ) : (
          !isDataAndEventsErrors && (
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart responsive data={activeRange?.data}>
                <defs>
                  {/* Total Revenue (Primary - Indigo) */}
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>

                  {/* Basic Revenue (Orange) */}
                  <linearGradient id="colorBasic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fe9a00" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#fe9a00" stopOpacity={0} />
                  </linearGradient>

                  {/* Pro Revenue (Green) */}
                  <linearGradient id="colorPro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00bc7d" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00bc7d" stopOpacity={0} />
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
                  formatter={(value, name) => {
                    if (typeof value !== "number") return ["N/A", "Revenue"];
                    return [formatCurrencyCompact(value, 2), name];
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
                <Legend verticalAlign="bottom" />
                <Area
                  type="monotone"
                  name="Total Revenue"
                  dataKey={activeRange?.yKey}
                  fillOpacity={1}
                  fill="url(#colorPv)"
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  name="Basic Revenue"
                  dataKey={activeRange?.basicKey}
                  fillOpacity={1}
                  fill="url(#colorBasic)"
                  stroke="#fe9a00"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  name="Pro Revenue"
                  dataKey={activeRange?.proKey}
                  fillOpacity={1}
                  fill="url(#colorPro)"
                  stroke="#00bc7d"
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

export default AnalyticsRevenueByPlanChart;
