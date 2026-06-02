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
      </div>
    </div>
  );
};

export default SupabaseDataSettings;
