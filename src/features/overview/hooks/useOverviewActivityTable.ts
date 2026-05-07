import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.js";

import type { OverviewActivityTableAllEventsType } from "../../../types/featuresTypes.js";

type AllEventsTypes = {
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  allEvents: OverviewActivityTableAllEventsType;
};

const useOverviewActivityTable = (): AllEventsTypes => {
  const { globalStatus, events } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;

  const { usersEvents, subsEvents, paymentsEvents } = events;

  const allEvents = {
    usersEvents: {
      label: "Users",
      data: usersEvents,
      config: {
        id: "userId",
        columns: [
          { key: "eventTimeAgo" },
          { key: "userName" },
          { key: "userEmail" },
          { key: "eventDate" },
        ],
      },
    },
    subsEvents: {
      label: "Subscriptions",
      data: subsEvents,
      config: {
        id: "subsId",
        columns: [
          { key: "eventTimeAgo" },
          { key: "userName" },
          { key: "eventDate" },
          { key: "subsPlan", colored: true },
          { key: "subsStatus", colored: true },
        ],
      },
    },
    paymentsEvents: {
      label: "Payments",
      data: paymentsEvents,
      config: {
        id: "paymentId",
        columns: [
          { key: "paymentTimeAgo" },
          { key: "userName" },
          { key: "paidDate" },
          { key: "invoicePrice", colored: true },
          { key: "paymentStatus", colored: true },
        ],
      },
    },
  } satisfies OverviewActivityTableAllEventsType;

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    allEvents,
  };
};

export default useOverviewActivityTable;
