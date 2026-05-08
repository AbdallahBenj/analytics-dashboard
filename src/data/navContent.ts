import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CreditCardIcon,
  SparklesIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

import DashboardLogo from "../assets/dashboard-logo.svg";
import InsightFlowIcon from "../assets/insightFlow-icon.svg";
import InsightFlowLogo from "../assets/insightFlow-logo.svg";
import insightFlow3DLogo from "../assets/insightFlow-3DLogo.webp";

import type { ComponentType, SVGProps } from "react";

type NavContent = {
  brand: {
    name: string;
    imageUrl: string;
  };
  navigation: {
    name: string;
    href: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    current: boolean;
  }[];
};

const navContent: NavContent = {
  brand: {
    name: "InsightFlow",
    imageUrl: InsightFlowIcon,
  },
  navigation: [
    {
      name: "Overview",
      href: "/",
      Icon: HomeIcon,
      current: true,
    },
    {
      name: "Analytics",
      href: "/analytics",
      Icon: ChartBarIcon,
      current: false,
    },
    {
      name: "Customers",
      href: "/customers",
      Icon: UsersIcon,
      current: false,
    },

    {
      name: "Subscriptions",
      href: "/subscriptions",
      Icon: CreditCardIcon,
      current: false,
    },
    {
      name: "Features",
      href: "/features",
      Icon: SparklesIcon,
      current: false,
    },
    {
      name: "Reports",
      href: "/reports",
      Icon: ChartPieIcon,
      current: false,
    },
  ],
};

export default navContent;
