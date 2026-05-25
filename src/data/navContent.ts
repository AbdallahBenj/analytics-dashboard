import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CreditCardIcon,
  SparklesIcon,
  ChartPieIcon,
  Cog6ToothIcon,
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
      name: "Home",
      href: "/",
      Icon: HomeIcon,
      current: false,
    },
    {
      name: "Overview",
      href: "/dashboard/overview",
      Icon: HomeIcon,
      current: true,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      Icon: ChartBarIcon,
      current: false,
    },
    {
      name: "Customers",
      href: "/dashboard/customers",
      Icon: UsersIcon,
      current: false,
    },

    {
      name: "Subscriptions",
      href: "/dashboard/subscriptions",
      Icon: CreditCardIcon,
      current: false,
    },
    {
      name: "Features",
      href: "/dashboard/features",
      Icon: SparklesIcon,
      current: false,
    },
    {
      name: "Reports",
      href: "/dashboard/reports",
      Icon: ChartPieIcon,
      current: false,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      Icon: Cog6ToothIcon,
      current: false,
    },
  ],
};

export default navContent;
