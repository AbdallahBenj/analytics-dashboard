import useGlobalMockData from "../../../hooks/useGlobalMockData.js";
import useDashboardData from "../../../hooks/useDashboardData.js";

import type { OverviewActivityTableAllEventsType } from "../../../types/overviewSectionTypes.js";
import getTimeAgo from "../../../utils/getTimeAgo.js";
import formatDate from "../../../utils/formatDate.js";

type AllEventsTypes = {
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  allEvents: OverviewActivityTableAllEventsType;
};

const useOverviewActivityTable = (limit: number = 10): AllEventsTypes => {
  // Get DashboardData
  const { dashboardData } = useDashboardData();

  const {
    isLoading,
    isErrors,

    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = dashboardData;

  const allEvents = {
    usersEvents: {
      label: "Users",
      eventsTitle: ["Time", "User", "Email", "Created At"],
      events: usersEvents.slice(0, limit).map((event) => ({
        ...event,
        eventDate: formatDate(event.eventDate),
        eventTimeAgo: event.eventDate
          ? getTimeAgo(new Date(event.eventDate))
          : "N/A",
      })),
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
      events: subscriptionsEvents.slice(0, limit).map((event) => ({
        ...event,
        eventDate: formatDate(event.eventDate),
        eventTimeAgo: event.eventDate
          ? getTimeAgo(new Date(event.eventDate))
          : "N/A",
      })),
      config: {
        id: "subscriptionId",
        columns: [
          { key: "eventTimeAgo" },
          { key: "userName" },
          { key: "eventDate" },
          { key: "subscriptionPlan", colored: true },
          { key: "subscriptionStatus", colored: true },
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
      events: paymentsEvents.slice(0, limit).map((event) => ({
        ...event,
        eventDate: formatDate(event.eventDate),
        eventTimeAgo: event.eventDate
          ? getTimeAgo(new Date(event.eventDate))
          : "N/A",
      })),
      config: {
        id: "paymentId",
        columns: [
          { key: "eventTimeAgo" },
          { key: "userName" },
          { key: "eventDate" },
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
