import dashboardMiniCardData from "../data/dashboardMiniCardData.js";

const DashboardMiniCardIcon = () => {
  return (
    <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {dashboardMiniCardData.map((card) => {
        const { id, title, value, Icon } = card;
        return (
          <div
            key={id}
            className="mini-card flex-1 min-h-16
            rounded-xl p-4 cursor-pointer
            shadow-sm hover:shadow-md dark:shadow-white/25
            flex flex-row items-center gap-3
            bg-gray-200 dark:bg-gray-950/50"
          >
            <div
              className="p-2 rounded-lg 
              h-12 w-12
              bg-indigo-500"
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {title}
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {value.toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardMiniCardIcon;
