import {
  usersData,
  subscriptionsData,
  paymentsData,
} from "../service/generateData.js";

const DashboardRecentActivity = () => {
  console.log("usersData:", usersData);
  console.log("subscriptionsData:", subscriptionsData);
  console.log("paymentsData:", paymentsData);

  const lastSubs5 = subscriptionsData.sort((a, b) => b.id - a.id).slice(-5);
  console.log("lastSubs5:", lastSubs5);

  return (
    <div
      className="recent-activity-table h-fit overflow-auto
            rounded-2xl p-4 cursor-pointer
            col-span-4 lg:col-span-3
            
            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300"
    >
      <h3
        className="recent-activity-title mb-3
        text-md font-medium 
        text-gray-600 dark:text-gray-300"
      >
        Subscription Plans
      </h3>
      <table className="border-separate border-spacing-2 w-full">
        <thead>
          <tr
            className="text-left text-gray-600 dark:text-gray-300
            bg-indigo-500/10 
            "
          >
            <th className="px-4 py-2 rounded-l-lg">time</th>
            <th className="px-4 py-2">user</th>
            <th className="px-4 py-2">plan</th>
            <th className="px-4 py-2 rounded-r-lg">status</th>
          </tr>
        </thead>
        <tbody>
          {lastSubs5.map((sub, i) => {
            return (
              <tr
                key={sub.id}
                className={`text-gray-600 dark:text-gray-400
                hover:bg-gray-500/10
                ${i % 2 !== 0 && "bg-indigo-50 dark:bg-indigo-50/5"}`}
              >
                <td className="px-4 py-2 rounded-l-lg">
                  {new Date(sub.startDate).toDateString()}
                </td>
                <td className="px-4 py-2">{sub.userName.split(" ")[0]}</td>
                <td
                  className={`px-4 py-2
                  ${sub.plan === "basic" && "text-indigo-400"}
                  ${sub.plan === "pro" && "text-indigo-500"}`}
                >
                  {sub.plan}
                </td>
                <td
                  className={`px-4 py-2 rounded-r-lg
                  ${sub.subsStatus === "active" && "text-emerald-500"}
                  ${sub.subsStatus === "canceled" && "text-red-500"}`}
                >
                  {sub.subsStatus}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardRecentActivity;
