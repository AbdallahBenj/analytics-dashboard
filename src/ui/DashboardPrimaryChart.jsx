import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DashboardPrimaryChart = () => {
  const data = [
    { name: "Aug", revenue: 39 },
    { name: "Sep", revenue: 41 },
    { name: "Oct", revenue: 44 },
    { name: "Nov", revenue: 46 },
    { name: "Dec", revenue: 47 },
    { name: "Jan", revenue: 48 },
  ];
  return (
    <div
      className="primary-pie-chart
    grid lg:grid-cols-4 gap-3"
    >
      <div
        className="primary-chart h-96
            rounded-2xl p-4 cursor-pointer lg:col-span-3

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
      >
        <div className="mb-3">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Monthly Revenue
          </h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            $48k <span className="text-sm text-gray-500">+6.2%</span>
          </p>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              strokeOpacity={0.3}
              vertical={false}
            />
            <XAxis
              dataKey="name"
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
              formatter={(v) => ["Revenue", `$${v}k`]}
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
              dataKey="revenue"
              stroke="#6366F1"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
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
