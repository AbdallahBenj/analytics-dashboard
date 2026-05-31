import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import convertKeysToCamelCase from "../utils/toCamelCase.js";

const isFetchEnabled = true;

const fetchSupabaseTable = async (dataType, table, label = "") => {
  const setFetchData = useSupabaseDataStore.getState().setFetchData;

  try {
    setFetchData(dataType, { loading: true, errors: [] });
    const { data, error } = await supabase.from(table).select("*");
    const formattedData = data.map(convertKeysToCamelCase);

    if (error) {
      throw error;
    }

    setFetchData(dataType, {
      dataValue: formattedData,
      errors: [],
    });

    return formattedData;
  } catch (error) {
    const currentErrors =
      useSupabaseDataStore.getState().data[dataType].errors || [];
    console.error("Supabase error:", error.message);
    setFetchData(dataType, {
      errors: [
        ...currentErrors,
        { id: Date.now(), label: `${label} Data`, message: "Failed to load" },
      ],
    });
    return [];
  } finally {
    setFetchData(dataType, { loading: false });
  }
};

const fetchSupabaseData = async () => {
  if (!isFetchEnabled) return;

  // console.log("fetch All Supabase Data");

  await Promise.all([
    fetchSupabaseTable("timeline", "timeline", "Time"),
    fetchSupabaseTable("users", "users", "Users"),
    fetchSupabaseTable("subscriptions", "subscriptions", "Subscriptions"),
    fetchSupabaseTable("payments", "payments", "Payments"),

    fetchSupabaseTable("usersEvents", "users_events", "Users events"),
    fetchSupabaseTable(
      "subscriptionsEvents",
      "subscriptions_events",
      "Subscriptions events",
    ),
    fetchSupabaseTable("paymentsEvents", "payments_events", "Payments events"),
  ]);
};

export default fetchSupabaseData;
