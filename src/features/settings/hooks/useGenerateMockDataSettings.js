import useMockDataStore from "../../../store/useMockDataStore.ts";

const useGenerateMockDataSettings = () => {
  const generatedData = useMockDataStore((state) => state.generatedData);
  const fetchedData = useMockDataStore((state) => state.fetchedData);

  const {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = generatedData;

  // Get loading state for each data type
  const loadingStates = Object.fromEntries(
    Object.entries(fetchedData).map((arr) => [arr[0], arr[1].loading]),
  );

  const GenerateMockDataConfig = [
    {
      data: timeline,
      label: "Timeline (day)",
      loading: loadingStates.timeline,
    },
    { data: users, label: "Users", loading: loadingStates.users },
    {
      data: subscriptions,
      label: "subscriptions",
      loading: loadingStates.subscriptions,
    },
    { data: payments, label: "payments", loading: loadingStates.payments },

    {
      events: usersEvents,
      label: "Users events",
      loading: loadingStates.usersEvents,
    },
    {
      events: subscriptionsEvents,
      label: "Subscriptions events",
      loading: loadingStates.subscriptionsEvents,
    },
    {
      events: paymentsEvents,
      label: "Payments events",
      loading: loadingStates.paymentsEvents,
    },
  ];

  const TimelineOptions = [
    { label: "Last 30 days", value: 30 },
    { label: "Last 90 days", value: 90 },
    { label: "Last 6 months", value: 180 },
    { label: "Last 1 years", value: 366 },
    { label: "Last 2 years", value: 730 },
  ];

  return { GenerateMockDataConfig, TimelineOptions };
};

export default useGenerateMockDataSettings;
