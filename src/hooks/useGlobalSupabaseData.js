import useSupabaseDataStore from "../store/useSupabaseDataStore.js";

const useGlobalSupabaseData = () => {
  const dataStore = useSupabaseDataStore((state) => state.data);

  const fetchedUsers = dataStore.users?.dataValue;
  const fetchedTimeline = dataStore.timeline?.dataValue;
  const fetchedSubscriptions = dataStore.subscriptions?.dataValue;
  const fetchedPayments = dataStore.payments?.dataValue;

  const fetchedUsersEvents = dataStore.usersEvents?.dataValue;
  const fetchedSubscriptionsEvents = dataStore.subscriptionsEvents?.dataValue;
  const fetchedPaymentsEvents = dataStore.paymentsEvents?.dataValue;

  const isLoading =
    dataStore.users?.loading ||
    dataStore.timeline?.loading ||
    dataStore.subscriptions?.loading ||
    dataStore.payments?.loading ||
    dataStore.usersEvents?.loading ||
    dataStore.subscriptionsEvents?.loading ||
    dataStore.paymentsEvents?.loading;

  const errors = [
    ...(dataStore.users?.errors || []),
    ...(dataStore.timeline?.errors || []),
    ...(dataStore.subscriptions?.errors || []),
    ...(dataStore.payments?.errors || []),
    ...(dataStore.usersEvents?.errors || []),
    ...(dataStore.subscriptionsEvents?.errors || []),
    ...(dataStore.paymentsEvents?.errors || []),
  ];

  const supabaseData = {
    isLoading: isLoading,
    errors: errors,

    timeline: fetchedTimeline,
    users: fetchedUsers,
    subscriptions: fetchedSubscriptions,
    payments: fetchedPayments,

    usersEvents: fetchedUsersEvents,
    subscriptionsEvents: fetchedSubscriptionsEvents,
    paymentsEvents: fetchedPaymentsEvents,
  };

  // console.log("supabaseData", supabaseData);

  return {
    supabaseData,
  };
};

export default useGlobalSupabaseData;
