import clearSupabaseData from "../../../service/api/clearSupabaseData.js";
import useSupabaseDataStore from "../../../store/useSupabaseDataStore.js";

const useSupabaseDataSettings = () => {
  const { isClearLoading } = useSupabaseDataStore((state) => state.clear);

  const SupabaseDataSettingsConfig = [
    {
      title: "Clear Supabase Data",
      description: "Remove all existing records.",
      ariaLabel: "clear supabase data",
      buttonLabel: "Clear",
      loadingButtonLabel: "Loading..",
      isLoading: isClearLoading,
      // isOperated: isGenerated,
      // setIsOperated: setGenerated,
      setAction: clearSupabaseData,
      // operationConfig: GenerateMockDataConfig,
    },
  ];
};

export default useSupabaseDataSettings;
