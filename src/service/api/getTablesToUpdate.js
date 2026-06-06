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
    { dataTable: timeline, table: "timeline", dataLabel: "timeline" },
    { dataTable: formattedUsers, table: "users", dataLabel: "users" },
    {
      dataTable: formattedSubscriptions,
      table: "subscriptions",
      dataLabel: "subscriptions",
    },
    {
      dataTable: formattedPayments,
      table: "payments",
      dataLabel: "payments",
    },
    {
      dataTable: formattedUsersEvents,
      table: "users_events",
      dataLabel: "usersEvents",
    },
    {
      dataTable: formattedSubscriptionsEvents,
      table: "subscriptions_events",
      dataLabel: "subscriptionsEvents",
    },
    {
      dataTable: formattedPaymentsEvents,
      table: "payments_events",
      dataLabel: "paymentsEvents",
    },
  ];

  return tablesToUpdate;
};

export default getTablesToUpdate;
