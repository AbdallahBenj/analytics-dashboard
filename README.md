# SaaS Analytics Dashboard

A modern responsive dashboard built with React and Vite for monitoring SaaS business metrics through interactive charts, generated timeline data, and a clean user experience.

## Features

* Responsive layout for desktop, tablet, and mobile
* Interactive charts and KPI analytics
* Custom timeline data generators
* Users activity analytics
* Subscriptions growth tracking
* Payments and revenue metrics
* User / subscription / payment events history
* Frontend authentication flow using Zustand Persist
* Protected routes and conditional rendering
* Dark / Light mode support
* Reusable components architecture
* Optimized performance with Vite

## Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* Zustand
* React Router
* Headless UI
* Recharts

## Project Goals

This project was built to simulate a real SaaS analytics product, including dashboard UI, dynamic business metrics, timeline reporting, state management, and scalable frontend architecture.

## What I Learned

* Creating dashboard systems with dynamic data
* Structuring mock business analytics datasets
* Managing global state with Zustand
* Building reusable UI architecture
* Designing responsive data dashboards
* Improving frontend performance

## Live Demo

🔗 **[Analytics Dashboard Demo](https://anadash.vercel.app/)**

## GitHub Repository

🔗 **[Analytics Dashboard Repository](https://github.com/AbdallahBenj/analytics-dashboard)**

## Installation

npm install
npm run dev


## Project Stricture

src/
├── assets/                 # Logos, favicon
│   ├── dashboard-logo.svg
│   └── react.svg
│
├── components/            # Reusable UI components
│   ├── ErrorsDialog.jsx
│   ├── LoginDialog.jsx
│   ├── NotificationMenu.jsx
│   ├── RadioGroupButtons.jsx
│   ├── SearchInput.jsx
│   └── ThemeMode.jsx
│
├── data/                  # Static content
│   ├── navContent.jsx
│   └── usersNames.jsx
│
├── features/              # Feature-based modules
│   └── dashboard/
│       ├── components/
│       │   ├── DashboardMiniCards.jsx
│       │   ├── DashboardPlansPieChart.jsx
│       │   ├── DashboardRecentActivity.jsx
│       │   └── DashboardRevenueChart.jsx
│       │
│       ├── hooks/
│       │   ├── useDashboardMiniCardsStats.js
│       │   ├── useDashboardPlansPieChartStats.js
│       │   ├── useDashboardRecentActivity.js
│       │   ├── useDashboardRevenueChartStats.js
│       │   └── useGlobalFetchedData.js
│       │
│       └── utils/
│           ├── calculateRevenue.js
│           ├── getActiveSubscriptions.js
│           ├── getChurnRate.js
│           ├── getConversionRate.js
│           ├── getMonthlyRevenue.js
│           └── getUsersByPlan.js
│
├── hooks/                 # Global reusable hooks
│   ├── useSystemMode.js
│   └── useThemeMode.js
│
├── layout/
│   ├── DashboardLayout.jsx
│   ├── Header.jsx
│   ├── HeaderDesktop.jsx
│   ├── HeaderMobile.jsx
│   ├── PageHeader.jsx
│   └── Sidebar.jsx
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── AnalyticsPage.jsx
│   ├── CustomersPage.jsx
│   ├── SubscriptionsPage.jsx
│   ├── FeaturesPage.jsx
│   └── ReportsPage.jsx
│
├── services/
│   ├── api/              # Future real API
│   ├── mock/
│   │   ├── generateData.js
│   │   ├── generateUsers.js
│   │   ├── generatePayments.js
│   │   ├── generateSubscriptions.js
│   │   └── generateTimeline.js
│   │
│   ├── events/
│   │   ├── generateEvents.js
│   │   ├── generatePaymentsEvents.js
│   │   ├── generateSubscriptionsEvents.js
│   │   └── generateUsersEvents.js
│   │
│   └── utils/
│       └── convertToDynamicTime.js
│
├── store/                # Zustand global state
│   ├── useStoreFetchedData.js
│   └── useStoreLogin.js
│
├── utils/                # Global utilities
│   ├── convertToKilo.js
│   ├── getPercentValue.js
│   └── getTimeAgo.js
│
├── App.jsx
└── main.jsx


### Data Flow

- Data Generation Flow:

generateTimeline.js ➡️ generateUsers.js ➡️ generateSubscriptions.js ➡️ generatePayments.js ➡️ generateData.js

- Data Fetch Flow:

generateData.js ➡️ useStoreFetchedData.js ➡️ useGlobalFetchedData.js ➡️ Components ➡️ UI Rendering

- Events Flow:

 generateData.js ➡️ generateEvents.js➡️ useStoreFetchedData.js ➡️ useGlobalFetchedData.js ➡️ Components ➡️ UI Rendering

                                          
