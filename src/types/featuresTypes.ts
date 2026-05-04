type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type MiniCardsDataType = {
  id: number;
  name: string;
  title: string;
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  value: string;
  prevValue: number | null;
  growthRateValue: number | null;
  isGoodChange: boolean | null;
  Icon: IconType;
};

export type { MiniCardsDataType };
