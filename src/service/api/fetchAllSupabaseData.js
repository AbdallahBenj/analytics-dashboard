import fetchSupabaseData from "./fetchSupabaseData.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

const isEnableFetchData = false;

const fetchAllSupabaseData = async () => {
  if (!isEnableFetchData) return;

  await Promise.all([
    fetchSupabaseData("timeData", "timeline", "Time"), // fetchTimeline();
    fetchSupabaseData("usersData", "users", "Users"), // fetchUsers();
    fetchSupabaseData("subsData", "subscriptions", "Subscriptions"), // fetchSubscriptions();
    fetchSupabaseData("paymentsData", "payments", "Payments"), // fetchPayments();
  ]);

  const dataStore = useSupabaseDataStore.getState().data;

  const fetchedUsers = dataStore.usersData.dataValue;
  const fetchedTimeline = dataStore.timeData.dataValue;
  const fetchedSubscriptions = dataStore.subsData.dataValue;
  const fetchedPayments = dataStore.paymentsData.dataValue;

  const isLoading =
    dataStore.usersData.loading ||
    dataStore.timeData.loading ||
    dataStore.subsData.loading ||
    dataStore.paymentsData.loading;

  const errors = [
    ...dataStore.usersData.errors,
    ...dataStore.timeData.errors,
    ...dataStore.subsData.errors,
    ...dataStore.paymentsData.errors,
  ];

  // console.log("dataStore", dataStore);

  // console.log("isLoading", isLoading);
  // console.log("isError", errors);

  // console.log("fetchedUsersData", fetchedUsers);
  // console.log("fetchedTimeline", fetchedTimeline);
  // console.log("fetchedSubscriptions", fetchedSubscriptions);
  // console.log("fetchedPayments", fetchedPayments);

  const supabaseData = {
    isLoading: isLoading,
    errors: errors,

    timeline: fetchedTimeline,
    users: fetchedUsers,
    subscriptions: fetchedSubscriptions,
    payments: fetchedPayments,

    // usersEvents,
    // subscriptionsEvents,
    // paymentsEvents,
  };

  return {
    supabaseData,

    isLoading: isLoading,
    errors: errors,

    timeline: fetchedTimeline,
    users: fetchedUsers,
    subscriptions: fetchedSubscriptions,
    payments: fetchedPayments,
  };
};

export default fetchAllSupabaseData;
