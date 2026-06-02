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
    { data: timeline, label: "Timeline" },
    { data: users, label: "Users" },
    { data: subscriptions, label: "subscriptions" },
    { data: payments, label: "payments" },

    { events: usersEvents, label: "Users events" },
    { events: subscriptionsEvents, label: "Subscriptions events" },
    { events: paymentsEvents, label: "Payments events" },
  ];

  const TimelineOptions = [
    { label: "30 Days", value: 30 },
    { label: "90 months", value: 90 },
    { label: "6 months", value: 180 },
    { label: "1 years", value: 366 },
    { label: "2 years", value: 730 },
  ];

  return { GenerateMockDataConfig, TimelineOptions };
};

export default useGenerateMockDataSettings;
