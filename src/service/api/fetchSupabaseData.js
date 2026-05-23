import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import convertKeysToCamelCase from "../utils/toCamelCase.js";

const fetchSupabaseData = async (dataType, table, label = "") => {
  const updateData = useSupabaseDataStore.getState().updateData;

  try {
    updateData(dataType, { loading: true, errors: [] });
    const { data, error } = await supabase.from(table).select("*");

    if (error) throw error;

    updateData(dataType, {
      dataValue: data.map(convertKeysToCamelCase),
      errors: [],
    });

    return data;
  } catch (error) {
    const currentErrors =
      useSupabaseDataStore.getState().data[dataType].errors || [];
    console.log("Supabase error:", error.message);
    updateData(dataType, {
      errors: [
        ...currentErrors,
        `${label} data failed to load ,Please try later`,
      ],
    });
    return [];
  } finally {
    updateData(dataType, { loading: false });
  }
};

export default fetchSupabaseData;
