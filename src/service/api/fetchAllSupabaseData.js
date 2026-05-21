import fetchSupabaseData from "./fetchSupabaseData.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

const isEnableFetchData = false;

const fetchAllSupabaseData = async () => {
  if (!isEnableFetchData) return;

  console.log("fetch All Supabase Data");

  await Promise.all([
    fetchSupabaseData("timelineData", "timeline", "Time"), // fetchTimeline();
    fetchSupabaseData("usersData", "users", "Users"), // fetchUsers();
    fetchSupabaseData("subscriptionsData", "subscriptions", "Subscriptions"), // fetchSubscriptions();
    fetchSupabaseData("paymentsData", "payments", "Payments"), // fetchPayments();
  ]);

  const dataStore = useSupabaseDataStore.getState().data;

  const fetchedUsers = dataStore.usersData.dataValue;
  const fetchedTimeline = dataStore.timelineData.dataValue;
  const fetchedSubscriptions = dataStore.subscriptionsData.dataValue;
  const fetchedPayments = dataStore.paymentsData.dataValue;

  const isLoading =
    dataStore.usersData.loading ||
    dataStore.timelineData.loading ||
    dataStore.subscriptionsData.loading ||
    dataStore.paymentsData.loading;

  const errors = [
    ...dataStore.usersData.errors,
    ...dataStore.timelineData.errors,
    ...dataStore.subscriptionsData.errors,
    ...dataStore.paymentsData.errors,
  ];

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

  // test format supabase table rows

  // const formattedTimeline = fetchedTimeline.map((row) => ({
  //   id: row.id,
  //   dateTest: row.date,
  // }));

  // console.log("supabaseData", supabaseData);

  return {
    supabaseData,
  };
};

export default fetchAllSupabaseData;
