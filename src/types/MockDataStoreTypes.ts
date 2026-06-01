import type {
  Timeline,
  User,
  Subscription,
  Payment,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
} from "./dataTypes.js";

type DataTypesMap = {
  timeline: Timeline[];
  users: User[];
  subscriptions: Subscription[];
  payments: Payment[];
  usersEvents: UsersEvents[];
  subscriptionsEvents: SubsEvents[];
  paymentsEvents: PaymentsEvents[];
};

type MockDataStoreTypes = {
  hasFetched: boolean;

  timelineLimit: number;
  setTimelineLimit: (value: number) => void;

  generatedData: DataTypesMap;

  fetchedData: {
    [key in keyof DataTypesMap]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      dataValue: DataTypesMap[key];
    };
  };

  setGenerateData: <key extends keyof DataTypesMap>(
    dataType: key,
    dataValue: DataTypesMap[key],
  ) => void;

  setFetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;

  retryFetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;

  setHasFetched: (value: boolean) => void;
};

export type { MockDataStoreTypes, DataTypesMap };
