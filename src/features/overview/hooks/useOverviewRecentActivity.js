import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.ts";

const useOverviewRecentActivity = () => {
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
  };

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    allEvents,
  };
};

export default useOverviewRecentActivity;
