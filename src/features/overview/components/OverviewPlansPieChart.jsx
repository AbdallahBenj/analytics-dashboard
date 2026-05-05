import { Pie, PieChart, Legend, Tooltip, ResponsiveContainer } from "recharts";

// Loading snipper icon
import { dotPulse, lineSpinner } from "ldrs";
dotPulse.register();
lineSpinner.register();

import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const pieColors = {
  free: "var(--color-pie-free)",
  basic: "var(--color-pie-basic)",
  pro: "var(--color-pie-pro)",
};

import useDashboardPlansPieChartStats from "../hooks/useOverviewPlansPieChartStats.js";
import formatPercent from "../../../utils/formatPercent.js";

const loadingContent = (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <LineSpinner size="70" stroke="4" speed="1" color="#615fff" />
  </div>
);
const errorsContent = (
  <span className="text-lg font-semibold text-red-500">N/A</span>
);

const DashboardPlansPieChart = () => {
  const {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    totalUsers,
    usersByPlan,
  } = useDashboardPlansPieChartStats(pieColors);

  return (
    <div
      className="relative primary-chart h-96 md:h-auto
            rounded-2xl p-4 cursor-pointer
            col-span-4 md:col-span-2 lg:col-span-1 

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
    >
      <h3
        className="title-pie-chart mb-3
        text-md font-medium 
        text-gray-600 dark:text-gray-300"
      >
        Subscription Plans
      </h3>
      {isDataAndEventsLoading
        ? loadingContent // Loading snipper icon
        : isDataAndEventsErrors
          ? errorsContent
          : !isDataAndEventsErrors && (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <text
                    x="50%"
                    y="45%"
                    pointerEvents="none"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold fill-gray-800 dark:fill-white"
                  >
                    {!totalUsers ? (
                      <span className="text-gray-500">---</span>
                    ) : (
                      totalUsers
                    )}
                  </text>
                  <text
                    x="50%"
                    y="55%"
                    pointerEvents="none"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-sm fill-gray-500"
                  >
                    {!totalUsers ? "" : "Total Users"}
                  </text>
                  <Pie
                    data={usersByPlan || []}
                    nameKey="name"
                    label={({ percent = 0 }) => formatPercent(percent)}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={3}
                    stroke="#99a1af"
                    labelLine={false}
                    isAnimationActive={true}
                    animationDuration={500}
                  ></Pie>
                  {totalUsers && usersByPlan && !isDataAndEventsLoading && (
                    <Legend />
                  )}
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.9)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                    itemStyle={{ color: "#ffffff" }}
                  />{" "}
                </PieChart>
              </ResponsiveContainer>
            )}
    </div>
  );
};

export default DashboardPlansPieChart;
