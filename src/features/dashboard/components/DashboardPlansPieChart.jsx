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

import useDashboardPlansPieChartStats from "../hooks/useDashboardPlansPieChartStats.js";

const DashboardPlansPieChart = () => {
  const { totalUsers, usersByPlan, isLoading } =
    useDashboardPlansPieChartStats(pieColors);

  return (
    <div
      className="relative primary-chart h-96
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
      {isLoading ? ( // Loading snipper icon
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LineSpinner size="70" stroke="4" speed="1" color="#615fff" />
        </div>
      ) : (
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
              {totalUsers}
            </text>
            <text
              x="50%"
              y="55%"
              pointerEvents="none"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm fill-gray-500"
            >
              Total Users
            </text>
            <Pie
              data={usersByPlan || []}
              nameKey="name"
              label={({ percent = 0 }) => `${(percent * 100).toFixed()}%`}
              dataKey="value"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={3}
              stroke="#99a1af"
              labelLine={false}
              isAnimationActive={true}
              animationDuration={500}
            ></Pie>
            {usersByPlan && !isLoading && <Legend />}
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
