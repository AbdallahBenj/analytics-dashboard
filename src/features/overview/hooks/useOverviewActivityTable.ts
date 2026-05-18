import useGlobalMockData from "../../../hooks/useGlobalMockData.js";

import type { OverviewActivityTableAllEventsType } from "../../../types/featuresTypes.js";

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
      data: {
        events: usersEvents.events.slice(0, limit),
        eventsTitle: usersEvents.eventsTitle,
      },
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
      data: {
        events: subscriptionsEvents.events.slice(0, limit),
        eventsTitle: subscriptionsEvents.eventsTitle,
      },
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
      data: {
        events: paymentsEvents.events.slice(0, limit),
        eventsTitle: paymentsEvents.eventsTitle,
      },
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
