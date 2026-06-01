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
    { dataTable: timeline, table: "timeline" },
    { dataTable: formattedUsers, table: "users" },
    { dataTable: formattedSubscriptions, table: "subscriptions" },
    { dataTable: formattedPayments, table: "payments" },
    { dataTable: formattedUsersEvents, table: "users_events" },
    { dataTable: formattedSubscriptionsEvents, table: "subscriptions_events" },
    { dataTable: formattedPaymentsEvents, table: "payments_events" },
  ];

  return tablesToUpdate;
};

export default getTablesToUpdate;
