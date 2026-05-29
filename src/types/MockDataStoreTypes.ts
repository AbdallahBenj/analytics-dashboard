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

// type EventsTypesMap = {
//   usersEvents: UsersEvents[];
//   subscriptionsEvents: SubsEvents[];
//   paymentsEvents: PaymentsEvents[];
// };

type MockDataStoreTypes = {
  hasFetched: boolean;
  hasRefresh: boolean;

  data: {
    [key in keyof DataTypesMap]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      dataValue: DataTypesMap[key];
    };
  };
  // events: {
  //   [key in keyof EventsTypesMap]: {
  //     loading: boolean;
  //     errors: { id: number; label: string; message: string }[];
  //     eventsValue: EventsTypesMap[key]; // { events: EventsTypesMap[key]; eventsTitle: EventsTitle[] };
  //   };
  // };
  fetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;
  // fetchEvents: <key extends keyof EventsTypesMap>(
  //   eventsType: key,
  //   realEvents: EventsTypesMap[key], // { events: EventsTypesMap[key]; eventsTitle: EventsTitle[] },
  //   label: string,
  // ) => void;

  retryFetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;
  // retryFetchEvents: <key extends keyof EventsTypesMap>(
  //   eventsType: key,
  //   realEvents: EventsTypesMap[key], // { events: EventsTypesMap[key]; eventsTitle: EventsTitle[] },
  //   label: string,
  // ) => void;

  setHasFetched: (value: boolean) => void;
  setHasRefreshed: (value: boolean) => void;
};

export type { MockDataStoreTypes, DataTypesMap };
