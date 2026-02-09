import dashboardMiniCardData from "../data/dashboardMiniCardData.js";

const DashboardMiniCardTrend = () => {
  return (
    <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {dashboardMiniCardData.map((card) => {
        const { id, name, title, value } = card;
        const gradientValue = Math.min(100, Math.max(0, value));
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
              className={`w-12 h-12
              rounded-full
              flex items-center justify-center
              `}
              style={{
                background: `conic-gradient(
                #6366f1 ${gradientValue}%,
                #e5e7eb ${gradientValue}% 100%
    )`,
              }}
            >
              <span
                className="
              flex items-center justify-center
              rounded-full p-2 w-8 h-8
              bg-gray-200 dark:bg-gray-900"
              >
                <span className=" text-indigo-500 text-xl font-bold">
                  {gradientValue}
                </span>
              </span>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-500">{name}</p>
              <p className="text-small text-gray-900 dark:text-white">
                {title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardMiniCardTrend;
