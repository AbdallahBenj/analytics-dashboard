import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";

import generateTrendingDailyRevenue from "../utils/generateTrendingDailyRevenue.js";
import getMonthlyRevenue from "../utils/getMonthlyRevenue.js";
import getPerCentRevenue from "../utils/getPerCentRevenue.js";
import convertToKilo from "../utils/convertToKilo.js";

const DashboardMiniCardIcon = () => {
  const data = generateTrendingDailyRevenue({ days: 180 });
  const dailyData30 = data.slice(-30);
  const prevDailyData30 = data.slice(-60, -30);

  const miniCardsData = [
    {
      id: 1,
      name: "MRR",
      title: "Monthly Revenue",
      value: getMonthlyRevenue(dailyData30) || 0.0, // 10.00
      prevValue: getMonthlyRevenue(prevDailyData30) || 0.0, // 10.00
      unit: "$",
      Icon: CurrencyDollarIcon,
    },
    {
      id: 2,
      name: "AS",
      title: "Active Subscriptions",
      value: 1.12,
      unit: "K",
      Icon: UserIcon,
    },
    {
      id: 3,
      name: "CR",
      title: "Churn Rate",
      type: "churn",
      value: 3.1,
      prevValue: 3.0,
      unit: "%",
      Icon: ArrowTrendingDownIcon,
    },
    {
      id: 4,
      name: "CR",
      title: "Conversion Rate",
      value: 6.4,
      unit: "%",
      Icon: ArrowPathIcon,
    },
  ];

  return (
    <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {miniCardsData.map((card) => {
        const { id, title, type, value, prevValue, unit, Icon } = card;

        const percentageValue = getPerCentRevenue(value, prevValue);

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
                {unit === "$" && (
                  <span className="text-md text-indigo-500">{unit}</span>
                )}
                {convertToKilo(value)}
                {unit !== "$" && (
                  <span className="text-md text-indigo-500"> {unit}</span>
                )}{" "}
                {hasChange && prevValue && (
                  <span
                    className={`text-[1rem] ml-1 inline-block
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
