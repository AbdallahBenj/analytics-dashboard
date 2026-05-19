import useGlobalMockData from "../../../hooks/useGlobalMockData.js";

import type { OverviewActivityTableAllEventsType } from "../../../types/overviewSectionTypes.js";

type AllEventsTypes = {
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  allEvents: OverviewActivityTableAllEventsType;
};

const useOverviewActivityTable = (limit: number = 10): AllEventsTypes => {
  // Get mockData
  const { mockData } = useGlobalMockData();

  const {
    isLoading,
    isErrors,

    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = mockData;

  const allEvents = {
    usersEvents: {
      label: "Users",
      eventsTitle: ["Time", "User", "Email", "Created At"],
      events: usersEvents.slice(0, limit),
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
      eventsTitle: ["Time", "User", "Date", "Plan", "Status"],
      events: subscriptionsEvents.slice(0, limit),
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
      eventsTitle: [
        "Time",
        "User",
        "Paid At",
        "Invoice Price",
        "Invoice Status",
      ],
      events: paymentsEvents.slice(0, limit),
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
    isDataAndEventsLoading: isLoading,
    isDataAndEventsErrors: isErrors,
    allEvents,
  };
};

export default useOverviewActivityTable;
