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

  return GenerateMockDataConfig;
};

export default useGenerateMockDataSettings;
