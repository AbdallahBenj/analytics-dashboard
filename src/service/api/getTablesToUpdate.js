import useMockDataStore from "../../store/useMockDataStore.ts";
import convertKeysToSnakeCase from "../utils/toSnakeCase.js";

const getTablesToUpdate = () => {
  const generatedData = useMockDataStore.getState().generatedData;

  const {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = generatedData;

  // Convert data objects keys to snakeCase
  const formattedUsers = users.map(convertKeysToSnakeCase);
  const formattedSubscriptions = subscriptions.map(convertKeysToSnakeCase);
  const formattedPayments = payments.map(convertKeysToSnakeCase);
  const formattedUsersEvents = usersEvents.map(convertKeysToSnakeCase);
  const formattedSubscriptionsEvents = subscriptionsEvents.map(
    convertKeysToSnakeCase,
  );
  const formattedPaymentsEvents = paymentsEvents.map(convertKeysToSnakeCase);

  const tablesToUpdate = [
    { tableData: timeline, tableName: "timeline", dataName: "timeline" },
    { tableData: formattedUsers, tableName: "users", dataName: "users" },
    {
      tableData: formattedSubscriptions,
      tableName: "subscriptions",
      dataName: "subscriptions",
    },
    {
      tableData: formattedPayments,
      tableName: "payments",
      dataName: "payments",
    },
    {
      tableData: formattedUsersEvents,
      tableName: "users_events",
      dataName: "usersEvents",
    },
    {
      tableData: formattedSubscriptionsEvents,
      tableName: "subscriptions_events",
      dataName: "subscriptionsEvents",
    },
    {
      tableData: formattedPaymentsEvents,
      tableName: "payments_events",
      dataName: "paymentsEvents",
    },
  ];

  return tablesToUpdate;
};

export default getTablesToUpdate;
