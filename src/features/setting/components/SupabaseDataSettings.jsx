import { useState } from "react";

import DataOperationPanel from "./DataOperationPanel.jsx";

import useSupabaseDataSettings from "../hooks/useSupabaseDataSettings.js";

const SupabaseDataSettings = () => {
  const [isGenerated, setGenerated] = useState(true);

  const { supabaseDataSettingsConfig } = useSupabaseDataSettings();

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
        <div className="flex-row justify-between items-center py-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Update Supabase Data{" "}
            <span className="text-sm font-medium inline-block text-gray-500 dark:text-gray-500">
              (admin only)
            </span>
          </h3>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Manage analytics data stored in Supabase for testing, demos, and
            portfolio presentations.
          </p>
        </div>

        {/* <div className="border-b border-gray-500/25 my-4"></div> */}

        {supabaseDataSettingsConfig.map((section) => (
          <div key={section.title}>
            {supabaseDataSettingsConfig[0] !== section && (
              <div className="border-b border-gray-500/25 my-4"></div>
            )}
            <DataOperationPanel
              title={section.title}
              description={section.description}
              ariaLabel={section.ariaLabel}
              listTitleStart={section.listTitleStart}
              buttonLabel={section.buttonLabel}
              loadingButtonLabel={section.loadingButtonLabel}
              isEnabled={section.isEnabled}
              isLoading={section.isLoading}
              loadingType={section.loadingType}
              isOperated={isGenerated}
              setIsOperated={() => setGenerated(true)}
              action={section.action}
              operationConfig={section.operationConfig}
              icon={section.icon}
              iconColor={section.iconColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupabaseDataSettings;
