import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import clearSupabaseData from "./clearSupabaseData.js";
import upsertSupabaseData from "./upsertSupabaseData.js";

const updateSupabaseData = async () => {
  const { isClearEnabled } = useSupabaseDataStore.getState().clear;
  const { isUpsertEnabled } = useSupabaseDataStore.getState().upsert;
  const isUpdateDataEnabled = isClearEnabled || isUpsertEnabled;

  if (!isUpdateDataEnabled) return;
  await clearSupabaseData();
  await upsertSupabaseData();
};

export default updateSupabaseData;
