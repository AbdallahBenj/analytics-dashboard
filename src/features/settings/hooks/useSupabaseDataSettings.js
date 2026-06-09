import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";
import useAuthStore from "../../../store/useAuthStore.ts";

import {
  CheckCircleIcon,
  TrashIcon,
  ArrowUpTrayIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

import { clearSupabaseData } from "../../../service/supabase/clearSupabaseData.js";
import { upsertSupabaseData } from "../../../service/supabase/upsertSupabaseData.js";
import syncSupabaseData from "../../../service/supabase/syncSupabaseData.js";

const useSupabaseDataSettings = () => {
  const { isClearLoading, isUpsertLoading, isSyncLoading } =
    useSupabaseDataStore((state) => state);
  const isLoading = isClearLoading || isUpsertLoading || isSyncLoading;

  const isAdmin = useAuthStore((state) => state.isAdmin);

  const fetchedData = useSupabaseDataStore((state) => state.fetchedData);

  // Loading Clear data States
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const clearLoadingStates = Object.fromEntries(
    Object.entries(clearedData).map((arr) => [arr[0], arr[1].loading]),
  );

  // Loading Upsert data States
  const upsertData = useSupabaseDataStore((state) => state.upsertData);
  const upsertLoadingStates = Object.fromEntries(
    Object.entries(upsertData).map((arr) => [arr[0], arr[1].loading]),
  );

  // Loading sync data States
  const syncData = useSupabaseDataStore((state) => state.syncData);
  const syncLoadingStates = Object.fromEntries(
    Object.entries(syncData).map((arr) => [arr[0], arr[1].loading]),
  );

  const {
    timeline,
    users,
    usersEvents,
    subscriptions,
    subscriptionsEvents,
    payments,
    paymentsEvents,
  } = fetchedData;

  const fetchedDataConfig = [
    {
      data: timeline,
      label: "Timeline (day)",
      clearLoading: clearLoadingStates.timeline,
      upsertLoading: upsertLoadingStates.timeline,
      syncLoading: syncLoadingStates.timeline,
    },
    {
      data: users,
      label: "Users",
      clearLoading: clearLoadingStates.users,
      upsertLoading: upsertLoadingStates.users,
      syncLoading: syncLoadingStates.users,
    },
    {
      data: subscriptions,
      label: "subscriptions",
      clearLoading: clearLoadingStates.subscriptions,
      upsertLoading: upsertLoadingStates.subscriptions,
      syncLoading: syncLoadingStates.subscriptions,
    },
    {
      data: payments,
      label: "payments",
      clearLoading: clearLoadingStates.payments,
      upsertLoading: upsertLoadingStates.payments,
      syncLoading: syncLoadingStates.payments,
    },

    {
      events: usersEvents,
      label: "Users events",
      clearLoading: clearLoadingStates.usersEvents,
      upsertLoading: upsertLoadingStates.usersEvents,
      syncLoading: syncLoadingStates.usersEvents,
    },
    {
      events: subscriptionsEvents,
      label: "Subscriptions events",
      clearLoading: clearLoadingStates.subscriptionsEvents,
      upsertLoading: upsertLoadingStates.subscriptionsEvents,
      syncLoading: syncLoadingStates.subscriptionsEvents,
    },
    {
      events: paymentsEvents,
      label: "Payments events",
      clearLoading: clearLoadingStates.paymentsEvents,
      upsertLoading: upsertLoadingStates.paymentsEvents,
      syncLoading: syncLoadingStates.paymentsEvents,
    },
  ];

  const supabaseDataSettingsConfig = [
    {
      title: "Clear Supabase Data",
      description: "Remove all existing records from the database.",
      ariaLabel: "clear supabase data",
      listTitleStart: "Clear",
      buttonLabel: "Clear",
      loadingButtonLabel: "Clearing..",
      isEnabled: isAdmin && !isLoading,
      isLoading: isClearLoading,
      loadingType: "clearLoading",
      action: async () => clearSupabaseData(),
      operationConfig: fetchedDataConfig,
      icon: TrashIcon,
      iconColor: "#fb2c36",
    },
    {
      title: "Upsert Supabase Data",
      description:
        "Upload the generated dataset and update matching records when needed.",
      ariaLabel: "upsert supabase data",
      listTitleStart: "Upsert",
      buttonLabel: "Upload",
      loadingButtonLabel: "Uploading..",
      isEnabled: isAdmin && !isLoading,
      isLoading: isUpsertLoading,
      loadingType: "upsertLoading",

      action: async () => upsertSupabaseData(),
      operationConfig: fetchedDataConfig,
      icon: ArrowUpTrayIcon,
      iconColor: "#00bc7d",
    },
    {
      title: "Sync Supabase Data",
      description: "Reset the database and upload a fresh generated dataset.",
      ariaLabel: "Sync supabase data",
      listTitleStart: "Sync",
      buttonLabel: "Sync",
      loadingButtonLabel: "Synchronizing..",
      isEnabled: isAdmin && !isLoading,
      isLoading: isSyncLoading,
      loadingType: "syncLoading",

      action: async () => syncSupabaseData(),
      operationConfig: fetchedDataConfig,
      icon: ArrowPathIcon,
      iconColor: "#2b7fff",
    },
  ];

  return { supabaseDataSettingsConfig, fetchedDataConfig };
};

export default useSupabaseDataSettings;
