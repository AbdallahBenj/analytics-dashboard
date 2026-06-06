import PrimaryButton from "../../../components/PrimaryButton.jsx";
import DataOperationList from "./DataOperationList.jsx";

const DataOperationPanel = ({
  title = "",
  description = "",
  ariaLabel = "",
  buttonLabel = "",
  loadingButtonLabel = "",
  isEnabled,
  isLoading = false,
  loadingType,
  isOperated,
  setIsOperated,
  action,
  operationConfig = {},
  icon,
  iconColor,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-600 dark:text-gray-300">
            {title}{" "}
            <span className="text-sm font-medium inline-block text-gray-500 dark:text-gray-500">
              (admin only)
            </span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <PrimaryButton
          disabled={!isEnabled}
          ariaLabel={ariaLabel}
          onClick={() => {
            setIsOperated?.();
            action?.();
          }}
          label={isLoading ? loadingButtonLabel : buttonLabel}
        />
      </div>
      {/* // Generated MockData */}
      {isOperated && (
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          {/* // Data list */}
          <DataOperationList
            listTitle="Generated Data"
            dataType="data"
            isLoading={isLoading}
            loadingType={loadingType}
            operationConfig={operationConfig}
            icon={icon}
            iconColor={iconColor}
          />

          {/* // Events list */}
          <DataOperationList
            listTitle="Generated Events"
            dataType="events"
            isLoading={isLoading}
            loadingType={loadingType}
            operationConfig={operationConfig}
            icon={icon}
            iconColor={iconColor}
          />
        </div>
      )}
    </div>
  );
};

export default DataOperationPanel;
