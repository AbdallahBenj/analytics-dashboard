import { useState } from "react";

import updateSupabaseData from "../../../service/api/updateSupabaseData.js";

import SwitchButton from "../../../components/SwitchButton.jsx";
import PrimaryButton from "../../../components/PrimaryButton.jsx";

import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";

const UpsertSupabaseDataSettings = () => {
  const { isClearLoading } = useSupabaseDataStore((state) => state.clear);
  const { isUpsertLoading } = useSupabaseDataStore((state) => state.upsert);

  // console.log("isClearSupabaseLoading", isClearLoading);
  // console.log("isUpsertSupabaseLoading", isUpsertLoading);

  // console.log("Clear Supabase Error", clearError);
  // console.log("Upsert Supabase Error", upsertError);

  const [enableUpdate, setEnableUpdate] = useState(false);

  return (
    <div className="body-container py-6 px-2">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 pt-2 pb-4">
        Update Supabase Data{" "}
        <span className="text-sm font-medium inline-block text-gray-500 dark:text-gray-500">
          (admin only)
        </span>
      </p>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 dark:text-gray-200">Enable Update</span>
        <SwitchButton
          enabled={enableUpdate}
          ariaLabel={"Enable update supabase data"}
          setEnabled={() => setEnableUpdate(!enableUpdate)}
        />
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 dark:text-gray-200">
          Update supabase data
        </span>
        <PrimaryButton
          disabled={!enableUpdate}
          ariaLabel={"update supabase data"}
          onClick={() => {
            if (!enableUpdate) return;
            updateSupabaseData();
          }}
          label={
            isClearLoading
              ? "Clearing.."
              : isUpsertLoading
                ? "Updating.."
                : "Update"
          }
        />
      </div>
    </div>
  );
};

export default UpsertSupabaseDataSettings;
