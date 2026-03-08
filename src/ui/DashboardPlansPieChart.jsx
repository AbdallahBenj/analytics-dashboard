import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

const plans = [
  { name: "free", value: 1200, fill: "#c6d2ff" },
  { name: "basic", value: 620, fill: "#7c86ff" },
  { name: "pro", value: 250, fill: "#4f39f6" },
];

const DashboardPlansPieChart = () => {
  console.log("DashboardPlansPieChart");
  return (
    <div
      className="primary-chart h-96
            rounded-2xl p-4 cursor-pointer
            col-span-4 lg:col-span-1 

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
        text-gray-500 dark:text-gray-400"
      >
        Subscription Plans
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={plans}
            nameKey="name"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed()}%`
            }
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            stroke="#99a1af"
            labelLine={false}
          ></Pie>
          <Tooltip
            formatter={(value, name) => [value, name]}
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
    </div>
  );
};

export default DashboardPlansPieChart;
