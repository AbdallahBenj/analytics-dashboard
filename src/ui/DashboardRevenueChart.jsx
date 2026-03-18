import { useState } from "react";
import RadioGroupButtons from "./RadioGroupButtons.jsx";

import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import calculateRevenue from "../service/calculateRevenue.js";
import { timeData, paymentsData } from "../service/generateData.js";

const dailyRevenue = calculateRevenue(timeData, paymentsData);
const monthlyRevenue = calculateRevenue(timeData, paymentsData, "month");

import getMonthlyRevenue from "../utils/getMonthlyRevenue.js";
import getPerCentValue from "../utils/getPerCentValue.js";
import convertToKilo from "../utils/convertToKilo.js";

const RevenueChart = () => {
  const dailyRevenueLast30days = dailyRevenue.slice(-30);
  const dailyRevenuePrev30days = dailyRevenue.slice(-60, -30);
  const dailyRevenueLast90days = dailyRevenue.slice(-90);

  const LastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const prevMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const perCentMonthlyRevenue = getPerCentValue(
    LastMonthRevenue,
    prevMonthRevenue,
  );

  const revenueRangeConfig = {
    d30: {
      data: dailyRevenueLast30days,
      xKey: "date",
      yKey: "revenue",
      label: "30 Days",
    },
    d90: {
      data: dailyRevenueLast90days,
      xKey: "date",
      yKey: "revenue",
      label: "90 Days",
    },
    m6: {
      data: monthlyRevenue,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
    },
  };

  const [range, setRange] = useState("d30");

  return (
    <div
      className="primary-chart h-96
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
      <div className="flex justify-between">
        <div className="Title-chart mb-3">
          <h3 className="text-md font-medium text-gray-600 dark:text-gray-300">
            Monthly Revenue
          </h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            ${convertToKilo(LastMonthRevenue)}
            <span className="text-sm text-gray-500">
              {" "}
              {`${perCentMonthlyRevenue >= 0 ? "+" : ""}${perCentMonthlyRevenue}%`}
            </span>
          </p>
        </div>
        <div className="Button date range ">
          <RadioGroupButtons
            state={range}
            setState={setRange}
            stateConfig={revenueRangeConfig}
          />
        </div>
      </div>
      <div className="flex-1 min-h-0">
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
      </div>
    </div>
  );
};

export default RevenueChart;
