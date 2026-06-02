import { useState } from "react";

import clearSupabaseData from "../../../service/api/clearSupabaseData.js";
import upsertSupabaseData from "../../../service/api/updateSupabaseData.js";
import updateSupabaseData from "../../../service/api/updateSupabaseData.js";

import SwitchButton from "../../../components/SwitchButton.jsx";
import PrimaryButton from "../../../components/PrimaryButton.jsx";

import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";

const UpsertSupabaseDataSettings = () => {
  const { isClearLoading } = useSupabaseDataStore((state) => state.clear);
  const { isUpsertLoading } = useSupabaseDataStore((state) => state.upsert);

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
      {/* // Clear supabase data */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <div className="mb-2">
          <p className="text-gray-700 dark:text-gray-200">
            Clear Supabase Data
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Remove all existing records.
          </span>
        </div>
        <PrimaryButton
          disabled={!enableUpdate}
          ariaLabel={"clear supabase data"}
          onClick={() => {
            if (!enableUpdate) return;
            clearSupabaseData();
          }}
          label={isClearLoading ? "Clearing.." : "Clear"}
        />
      </div>

      <div className="border-b border-gray-500/25 my-4"></div>

      {/* // Upsert supabase Data */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <div className="mb-2">
          <p className="text-gray-700 dark:text-gray-200">
            Upsert Supabase Data
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Upload generated dataset.
          </span>
        </div>
        <PrimaryButton
          disabled={!enableUpdate}
          ariaLabel={"upsert supabase data"}
          onClick={() => {
            if (!enableUpdate) return;
            upsertSupabaseData();
          }}
          label={isUpsertLoading ? "Upsetting.." : "Upsert"}
        />
      </div>

      <div className="border-b border-gray-500/25 my-4"></div>

      {/* // Update supabase data */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <div className="mb-2">
          <p className="text-gray-700 dark:text-gray-200">Sync Supabase Data</p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Clear existing data and upload a fresh dataset.
          </span>
        </div>
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
