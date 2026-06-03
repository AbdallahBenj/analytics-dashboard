import useMockDataStore from "../../../store/useMockDataStore.ts";

const useGenerateMockDataSettings = () => {
  const generatedData = useMockDataStore((state) => state.generatedData);

  const {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = generatedData;

  const GenerateMockDataConfig = [
    { data: timeline, label: "Timeline (day)" },
    { data: users, label: "Users" },
    { data: subscriptions, label: "subscriptions" },
    { data: payments, label: "payments" },

    { events: usersEvents, label: "Users events" },
    { events: subscriptionsEvents, label: "Subscriptions events" },
    { events: paymentsEvents, label: "Payments events" },
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
