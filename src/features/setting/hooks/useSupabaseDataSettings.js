import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";
import fetchSupabaseData from "../../../service/api/fetchSupabaseData.js";

import useAuthStore from "../../../store/useAuthStore.ts";

import {
  CheckCircleIcon,
  TrashIcon,
  ArrowUpTrayIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

import clearSupabaseData from "../../../service/api/clearSupabaseData.js";
import upsertSupabaseData from "../../../service/api/upsertSupabaseData.js";
import updateSupabaseData from "../../../service/api/updateSupabaseData.js";

const useSupabaseDataSettings = () => {
  const { isClearLoading } = useSupabaseDataStore((state) => state.clear);
  const { isUpsertLoading } = useSupabaseDataStore((state) => state.upsert);
  const isUpdateLoading = isClearLoading || isUpsertLoading;

  const isAdmin = useAuthStore((state) => state.isAdmin);

  const fetchedData = useSupabaseDataStore((state) => state.fetchedData);

  // Loading Clear data States
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const loadingStates = Object.fromEntries(
    Object.entries(clearedData).map((arr) => [arr[0], arr[1].loading]),
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
      clearLoading: loadingStates.timeline,
    },
    { data: users, label: "Users", clearLoading: loadingStates.users },
    {
      data: subscriptions,
      label: "subscriptions",
      clearLoading: loadingStates.subscriptions,
    },
    { data: payments, label: "payments", clearLoading: loadingStates.payments },

    {
      events: usersEvents,
      label: "Users events",
      clearLoading: loadingStates.usersEvents,
    },
    {
      events: subscriptionsEvents,
      label: "Subscriptions events",
      clearLoading: loadingStates.subscriptionsEvents,
    },
    {
      events: paymentsEvents,
      label: "Payments events",
      clearLoading: loadingStates.paymentsEvents,
    },
  ];

  console.log("fetchedData", fetchedData);

  const supabaseDataSettingsConfig = [
    {
      title: "Clear Supabase Data",
      description: "Remove all existing records from the database.",
      ariaLabel: "clear supabase data",
      buttonLabel: "Clear",
      loadingButtonLabel: "Clearing..",
      isEnabled: isAdmin,
      isLoading: isClearLoading,
      loadingType: "clearLoading",
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      action: async () => {
        clearSupabaseData();
        fetchSupabaseData();
      },
      operationConfig: fetchedDataConfig,
      icon: TrashIcon,
      iconColor: "#fb2c36",
      // #fb2c36
    },
    {
      title: "Upsert Supabase Data",
      description:
        "Upload the generated dataset and update matching records when needed.",
      ariaLabel: "upsert supabase data",
      buttonLabel: "Upload",
      loadingButtonLabel: "Uploading..",
      isEnabled: isAdmin,
      isLoading: isUpsertLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      action: async () => {
        upsertSupabaseData();
        fetchSupabaseData();
      },
      operationConfig: fetchedDataConfig,
      icon: ArrowUpTrayIcon,
      iconColor: "#00bc7d",
      //#00bc7d
    },
    {
      title: "Sync Supabase Data",
      description: "Reset the database and upload a fresh generated dataset.",
      ariaLabel: "Update supabase data",
      buttonLabel: "Update",
      loadingButtonLabel: "Updating..",
      isEnabled: isAdmin,
      isLoading: isUpdateLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      action: async () => {
        updateSupabaseData();
        fetchSupabaseData();
      },
      operationConfig: fetchedDataConfig,
      icon: ArrowPathIcon,
      iconColor: "#2b7fff",
      // #2b7fff
    },
  ];

  return { supabaseDataSettingsConfig, fetchedDataConfig };
};

export default useSupabaseDataSettings;
