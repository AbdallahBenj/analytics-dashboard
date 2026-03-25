import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";

import {
  timeData,
  usersData,
  subscriptionsData,
  paymentsData,
} from "../service/mock/generateData.js";

import calculateRevenue from "../service/analytics/calculateRevenue.js";
import getMonthlyRevenue from "../service/analytics/getMonthlyRevenue.js";
import getActiveSubscriptions from "../service/analytics/getActiveSubscriptions.js";

import getChurnRate from "../service/analytics/getChurnRate.js";
import getConversionRate from "../service/analytics/getConversionRate.js";

import getPerCentValue from "../utils/getPerCentValue.js";
import convertToKilo from "../utils/convertToKilo.js";

const MiniCards = () => {
  const dailyRevenue = calculateRevenue(timeData, paymentsData);
  const dailyRevenueLast30days = dailyRevenue.slice(-30);
  const dailyRevenuePrev30days = dailyRevenue.slice(-60, -30);

  const LastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const prevMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const activeSubscriptions = getActiveSubscriptions(subscriptionsData);
  const totalActiveSubscriptions = activeSubscriptions.length;

  const lastMonthChurnRate = getChurnRate(subscriptionsData);
  const prevMonthChurnRate = getChurnRate(subscriptionsData, 30);
  const churnRate = (lastMonthChurnRate * 100).toFixed(2);
  const churnRateChange = getPerCentValue(
    lastMonthChurnRate,
    prevMonthChurnRate,
  );

  const currentConversionRate = getConversionRate(usersData, subscriptionsData);
  const conversionRate = (currentConversionRate * 100).toFixed(2);

  const miniCardsData = [
    {
      id: 1,
      name: "MRR",
      title: "Monthly Revenue",
      value: LastMonthRevenue || 0.0, // 10.00
      prevValue: prevMonthRevenue || 0.0, // 10.00
      unit: "$",
      Icon: CurrencyDollarIcon,
    },
    {
      id: 2,
      name: "AS",
      title: "Active Subscriptions",
      value: totalActiveSubscriptions || 0.0,
      unit: "user",
      Icon: UserIcon,
    },
    {
      id: 3,
      name: "CR",
      title: "Churn Rate",
      type: "churn",
      value: churnRate || 0.0,
      prevValue: churnRateChange || 0.0,
      unit: "%",
      Icon: ArrowTrendingDownIcon,
    },
    {
      id: 4,
      name: "CR",
      title: "Conversion Rate",
      value: conversionRate || 0.0,
      unit: "%",
      Icon: ArrowPathIcon,
    },
  ];

  return (
    <div className="col-span-4">
      <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {miniCardsData.map((card) => {
          const { id, title, type, value, prevValue, unit, Icon } = card;

          const percentageValue = getPerCentValue(value, prevValue);

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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
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
    </div>
  );
};

export default MiniCards;
