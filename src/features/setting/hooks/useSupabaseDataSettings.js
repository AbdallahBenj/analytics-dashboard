import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";

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

  const fetchedData = useSupabaseDataStore((state) => state.fetchedData);

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
    { data: timeline, label: "Timeline (day)" },
    { data: users, label: "Users" },
    { data: subscriptions, label: "subscriptions" },
    { data: payments, label: "payments" },

    { events: usersEvents, label: "Users events" },
    { events: subscriptionsEvents, label: "Subscriptions events" },
    { events: paymentsEvents, label: "Payments events" },
  ];

  const supabaseDataSettingsConfig = [
    {
      title: "Clear Supabase Data",
      description: "Remove all existing records from the database.",
      ariaLabel: "clear supabase data",
      buttonLabel: "Clear",
      loadingButtonLabel: "Clearing..",
      isLoading: isClearLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      setAction: clearSupabaseData,
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
      isLoading: isUpsertLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      setAction: upsertSupabaseData,
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
      isLoading: isUpdateLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      setAction: updateSupabaseData,
      operationConfig: fetchedDataConfig,
      icon: ArrowPathIcon,
      iconColor: "#2b7fff"
      // #2b7fff
    },
  ];

  return { supabaseDataSettingsConfig, fetchedDataConfig };
};

export default useSupabaseDataSettings;
