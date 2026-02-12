import { useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";

import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import dashboardData from "../data/dashboardData";

const DashboardPrimaryChart = () => {
  const { dailyData30, dailyData90, monthlyData6m } = dashboardData;

  const rangeConfig = {
    d30: { data: dailyData30, xKey: "date", yKey: "revenue", label: "30 Days" },
    d90: { data: dailyData90, xKey: "date", yKey: "revenue", label: "90 Days" },
    m6: {
      data: monthlyData6m,
      xKey: "month",
      yKey: "revenue",
      label: "6 Months",
    },
  };

  const [range, setRange] = useState("d30");

  return (
    <div
      className="primary-pie-chart
    grid lg:grid-cols-4 gap-3"
    >
      <div
        className="primary-chart h-96
            rounded-2xl p-4 cursor-pointer lg:col-span-3
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
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Monthly Revenue
            </h3>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              $48k <span className="text-sm text-gray-500">+6.2%</span>
            </p>
          </div>
          <div className="Button date range ">
            <RadioGroup
              value={range}
              onChange={setRange}
              aria-label="Server size"
              className="flex gap-4"
            >
              {Object.keys(rangeConfig).map((date) => (
                <Field
                  key={date}
                  className="flex flex-col md:flex-row justify-between md:items-center gap-2"
                >
                  <Radio
                    value={date}
                    className={({ checked }) =>
                      `px-3 py-1.5 rounded-md text-sm font-medium transition w-fit
                      ${
                        checked
                          ? "bg-gray-700 dark:bg-white shadow text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }`
                    }
                  >
                    <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                  </Radio>
                  <Label className="cursor-pointer text-sm font-medium text-gray-500 dark:text-gray-400">
                    {rangeConfig[date].label}
                  </Label>
                </Field>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rangeConfig[range].data}>
              <CartesianGrid
                strokeDasharray="3 3"
                strokeOpacity={0.3}
                vertical={false}
              />
              <XAxis
                dataKey={rangeConfig[range].xKey}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => `$${value}k`}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(v) => [`$${v}k`, "Revenue"]}
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
                dataKey={rangeConfig[range].yKey}
                stroke="#6366F1"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div
        className="primary-chart h-96
            rounded-2xl p-4 cursor-pointer lg:col-span-1

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
      ></div>
    </div>
  );
};

export default DashboardPrimaryChart;
