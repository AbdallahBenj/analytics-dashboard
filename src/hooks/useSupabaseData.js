import useSupabaseDataStore from "../store/useSupabaseDataStore.js";

const useSupabaseData = () => {
  const fetchedDataStored = useSupabaseDataStore((state) => state.fetchedData);

  // get fetched supabase data
  const fetchedUsers = fetchedDataStored.users?.dataValue || [];
  const fetchedTimeline = fetchedDataStored.timeline?.dataValue || [];
  const fetchedSubscriptions = fetchedDataStored.subscriptions?.dataValue || [];
  const fetchedPayments = fetchedDataStored.payments?.dataValue || [];

  const fetchedUsersEvents = fetchedDataStored.usersEvents?.dataValue || [];
  const fetchedSubscriptionsEvents =
    fetchedDataStored.subscriptionsEvents?.dataValue || [];
  const fetchedPaymentsEvents =
    fetchedDataStored.paymentsEvents?.dataValue || [];

  const isLoading =
    fetchedDataStored.users?.loading ||
    fetchedDataStored.timeline?.loading ||
    fetchedDataStored.subscriptions?.loading ||
    fetchedDataStored.payments?.loading ||
    fetchedDataStored.usersEvents?.loading ||
    fetchedDataStored.subscriptionsEvents?.loading ||
    fetchedDataStored.paymentsEvents?.loading;

  const errors = [
    ...(fetchedDataStored.users?.errors || []),
    ...(fetchedDataStored.timeline?.errors || []),
    ...(fetchedDataStored.subscriptions?.errors || []),
    ...(fetchedDataStored.payments?.errors || []),
    ...(fetchedDataStored.usersEvents?.errors || []),
    ...(fetchedDataStored.subscriptionsEvents?.errors || []),
    ...(fetchedDataStored.paymentsEvents?.errors || []),
  ];

  const isErrors = errors.length > 0;

  const supabaseData = {
    isLoading: isLoading,
    isErrors: isErrors,
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

export default useSupabaseData;
