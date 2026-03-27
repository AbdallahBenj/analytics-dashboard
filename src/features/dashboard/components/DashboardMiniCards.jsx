import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

import convertToKilo from "../../../utils/convertToKilo.js";

import useDashboardMiniCardsStats from "../hooks/useDashboardMiniCardsStats.js";

const MiniCards = () => {
  const { miniCardsData } = useDashboardMiniCardsStats();

  return (
    <div className="col-span-4">
      <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {miniCardsData.map((card) => {
          const {
            id,
            title,
            type,
            loading,
            value,
            percentageValue,
            unit,
            Icon,
          } = card;

          const isUp = percentageValue !== null && percentageValue > 0;
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
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {!loading ? (
                    <p>
                      {unit === "$" && (
                        <span className="text-md text-indigo-500">{unit}</span>
                      )}
                      {convertToKilo(value.toFixed(2))}
                      {unit !== "$" && (
                        <span className="text-md text-indigo-500"> {unit}</span>
                      )}{" "}
                      {hasChange && (
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
                  ) : (
                    <span className="text-xl font-medium text-gray-500">
                      Loading..
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCards;
