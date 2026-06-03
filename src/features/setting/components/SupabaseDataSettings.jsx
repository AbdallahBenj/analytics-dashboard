import DataOperationPanel from "./DataOperationPanel.jsx";

import RadioGroupButtons from "../../../components/RadioGroupButtons.js";
import GenerateMockDataSetting from "./GenerateMockDataSetting.jsx";
import UpsertSupabaseDataSettings from "./UpsertSupabaseDataSettings.jsx";

const SupabaseDataSettings = () => {
  return (
    <div
      className="relative primary-chart h-auto
    cursor-default rounded-2xl
    p-6 lg:p-8 xl:p-12
    col-span-4 md:col-span-4 lg:col-span-4
    flex flex-col  items-center
    
    bg-white/60 dark:bg-gray-900/40
    backdrop-blur-md
    
    border border-white/20 dark:border-white/10
    
    shadow-md shadow-black/10
    hover:shadow-xl hover:shadow-black/20
    hover:-translate-y-0.5
    transition-all duration-300"
    >
      <div className="max-w-4xl w-full">
        <UpsertSupabaseDataSettings />

        <div className="border-b border-gray-500/25 my-4"></div>

        <DataOperationPanel
          title={"Clear Supabase Data"}
          description={"Remove all existing records."}
          buttonLabel={"Clear"}
          loadingButtonLabel={"Clearing.."}
        />

        <div className="border-b border-gray-500/25 my-4"></div>

        <DataOperationPanel
          title={"Upsert Supabase Data"}
          description={"Upload generated dataset."}
          buttonLabel={"Upload"}
          loadingButtonLabel={"Uploading.."}
        />

        <div className="border-b border-gray-500/25 my-4"></div>

        <DataOperationPanel
          title={"Sync Supabase Data"}
          description={"Clear existing data and upload a fresh dataset."}
          buttonLabel={"Update"}
          loadingButtonLabel={"Updating.."}
        />
      </div>
    </div>
  );
};

export default SupabaseDataSettings;
