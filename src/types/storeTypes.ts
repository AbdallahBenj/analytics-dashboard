import type { Timeline, User, Subscription, Payment } from "./dataTypes.js";

import type {
  EventsTitle,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
} from "./eventsTypes.js";

type DataTypesMap = {
  timeline: Timeline[];
  users: User[];
  subscriptions: Subscription[];
  payments: Payment[];
};

type EventsTypesMap = {
  usersEvents: UsersEvents[];
  subscriptionsEvents: SubsEvents[];
  paymentsEvents: PaymentsEvents[];
};

type StoreType = {
  hasFetched: boolean;
  data: {
    [key in keyof DataTypesMap]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      dataValue: DataTypesMap[key];
    };
  };
  events: {
    [key in keyof EventsTypesMap]: {
      loading: boolean;
      errors: { id: number; label: string; message: string }[];
      eventsValue: EventsTypesMap[key];
      eventsTitle: EventsTitle[];
    };
  };
  fetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;
  fetchEvents: <key extends keyof EventsTypesMap>(
    eventsType: key,
    realEvents: EventsTypesMap[key],
    titleEvents: string[],
    label: string,
  ) => void;

  retryFetchData: <key extends keyof DataTypesMap>(
    dataType: key,
    realData: DataTypesMap[key],
    label: string,
  ) => void;
  retryFetchEvents: <key extends keyof EventsTypesMap>(
    eventsType: key,
    realEvents: EventsTypesMap[key],
    titleEvents: string[],
    label: string,
  ) => void;

  setHasFetched: (value: boolean) => void;
};

export type { StoreType, DataTypesMap, EventsTypesMap };
