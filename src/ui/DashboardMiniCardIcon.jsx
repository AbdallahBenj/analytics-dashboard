import dashboardMiniCardData from "../data/dashboardMiniCardData.js";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

const DashboardMiniCardIcon = () => {
  return (
    <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {dashboardMiniCardData.map((card) => {
        const { id, title, type, newValue, lastValue, unit, Icon } = card;

        const percentageValue =
          lastValue && lastValue !== 0
            ? ((newValue - lastValue) / lastValue) * 100
            : null;

        const isUp = percentageValue > 0;

        const isGoodChange = type === "churn" ? !isUp : isUp;

        const hasChange = percentageValue !== null && percentageValue !== 0;

        return (
          <div
            key={id}
            className="mini-card flex-1 min-h-16
            rounded-2xl p-4 cursor-pointer
            flex flex-row items-center gap-3

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5
            transition-all duration-300"
          >
            <div
              className="rounded-lg
              flex items-center justify-center
              h-12 w-12 bg-indigo-500"
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {title}
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {newValue.toFixed(2)}{" "}
                <span className="text-md text-indigo-500">{unit}</span>
                {hasChange && (
                  <span
                    className={`text-[1.3rem] ml-1
                  ${isGoodChange ? "text-green-500" : "text-red-500"}
                    `}
                  >
                    {" "}
                    {isUp ? (
                      <ArrowUpIcon className="inline size-5" />
                    ) : (
                      <ArrowDownIcon className="inline size-5" />
                    )}
                    {`${Math.abs(percentageValue).toFixed(2)} %`}
                  </span>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardMiniCardIcon;
