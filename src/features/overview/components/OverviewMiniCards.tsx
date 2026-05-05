import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

import type { ReactNode } from "react";

// Loading snipper icon
import { DotPulse } from "ldrs/react";
import "ldrs/react/DotPulse.css";

import useOverviewMiniCardsStats from "../hooks/useOverviewMiniCards.js";
import formatPercent from "../../../utils/formatPercent.js";

const OverviewMiniCards = () => {
  const { miniCardsData } = useOverviewMiniCardsStats();

  return (
    <div className="col-span-4">
      <div className="mini-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {miniCardsData.map((card) => {
          const {
            id,
            title,
            isDataAndEventsLoading,
            isDataAndEventsErrors,
            value,
            growthRateValue,
            isGoodChange,
            Icon,
          } = card;

          const hasChange =
            growthRateValue != null && Math.abs(growthRateValue) > 0.01;

          const changeColorClass =
            isGoodChange === true
              ? "text-green-500"
              : isGoodChange === false
                ? "text-red-500"
                : "text-gray-400 dark:text-gray-500";

          const loadingContent = (
            <DotPulse size="43" speed="1.3" color="#615fff" />
          );

          const errorsContent = (
            <span className="text-lg font-semibold text-red-500">N/A</span>
          );

          const valueContent = (
            <p className="text-gray-900 dark:text-white">
              {value ?? "-"}
              {hasChange && (
                <span
                  className={`text-[1rem] ml-1 inline-block ${changeColorClass}`}
                >
                  {" "}
                  {isGoodChange === true ? (
                    <ArrowUpIcon className="inline size-5" />
                  ) : isGoodChange === false ? (
                    <ArrowDownIcon className="inline size-5" />
                  ) : null}
                  {formatPercent(growthRateValue, 2)}
                </span>
              )}
            </p>
          );

          let content: ReactNode;
          if (isDataAndEventsLoading) {
            content = loadingContent;
          } else if (isDataAndEventsErrors) {
            content = errorsContent;
          } else {
            content = valueContent;
          }

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
                {Icon && <Icon className="h-8 w-8 text-white" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {title}
                </p>
                <div className="text-2xl font-semibold text-gray-500">
                  {content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewMiniCards;
