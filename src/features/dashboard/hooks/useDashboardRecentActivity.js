import useFetchedGenerateEvents from "../hooks/useFetchedGenerateEvents.js";

const useDashboardRecentActivity = () => {
  const {
    isLoading,
    fetchedLastUsersEvents,
    fetchedLastSubsEvents,
    fetchedLastPaymentsEvents,
  } = useFetchedGenerateEvents();

  const allEvents = {
    usersEvents: {
      label: "Users",
      data: fetchedLastUsersEvents,
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
      data: fetchedLastSubsEvents,
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
      data: fetchedLastPaymentsEvents,
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
    isLoading,
    allEvents,
  };
};

export default useDashboardRecentActivity;
