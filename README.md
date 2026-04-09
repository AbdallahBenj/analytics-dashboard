# Analytics Dashboard

A modern analytics dashboard built with React, Vite, and Tailwind CSS.

## Live Demo

🔗 [Analytics Dashboard](https://abdallahbenj.github.io/analytics-dashboard/)

## Features

- Responsive SaaS-style layout
- KPI metric cards (MRR, ARR, Churn, ARPU, etc.)
- Clean admin dashboard UI
- Modular React components
- Tailwind CSS styling

## Tech Stack

- React
- Vite
- Tailwind CSS

## Project Stricture

src/
│
├── assets/ # Logos favicon
│   ├── dashboard-logo.svg
│   └── react.svg
│
├── components/ # reusable UI components
│   ├── ErrorsDialog.jsx
│   ├── RadioGroupButtons.jsx
│   ├── SearchInput.jsx
│   ├── SidebarToggle.jsx
│   └── ThemeMode.jsx
│
├── data/ # Static Contents
│   ├── navContent.jsx
│   └── usersNames.jsx
│
├── features/ # feature
│   └── dashboard/
│   │   ├── components/
│   │   │   ├── DashboardMiniCards.jsx
│   │   │   ├── DashboardPlansPieChart.jsx
│   │   │   ├── DashboardRecentActivity.jsx
│   │   │   └── DashboardRevenueChart.jsx
│   │   │
│   │   └── hooks/
│   │       ├── useDashboardMiniCardsStats.js
│   │       ├── useDashboardPlansPieChartStats.js
│   │       ├── useDashboardRecentActivity.js
│   │       ├── useDashboardRevenueChartStats.js
│   │       ├── useFetchedGenerateData.js                       // Not used
│   │       ├── useFetchedGenerateEvents.js                     // Not used
│   │       └── useGlobalFetchedData.js           
│   │
│   └── utils/ # features
│       ├── calculateRevenue.js
│       ├── getActiveSubscriptions.js
│       ├── getChurnRate.js
│       ├── getConversionRate.js
│       ├── getMonthlyRevenue.js
│       └── getUsersByPlan.js
│
├── hooks/ # global reusable hooks
│   ├── useSystemMode.js
│   └── useThemeMode.js
│
├── layout/ # layout
│   ├── DashboardLayout.jsx
│   ├── Header.jsx
│   ├── PageHeader.jsx
│   └── Sidebar.jsx
│
├── pages/ # Pages
│   ├── DashboardPage.jsx
│   ├── AnalyticsPage.jsx
│   ├── CustomersPage.jsx
│   ├── SubscriptionsPage.jsx
│   ├── FeaturesPage.jsx
│   └── ReportsPage.jsx
│
├── services/ # data fetching / mock / API
│   ├── api/ # (future real API)
│   └── mock/
│   │   ├── generateData.js
│   │   ├── generateUsers.js
│   │   ├── generatePayments.js
│   │   ├── generateSubscriptions.js
│   │   └── generateTimeline.js
│   │
│   └── events/ # event generators (optional keep separate)
│   │   ├── generateEvents.js
│   │   ├── generatePaymentsEvents.js
│   │   ├── generateSubscriptionsEvents.js
│   │   └── generateUsersEvents.js
│   │
│   └── hooks/ # services
│   │   └── useFetchData.js                       // Not used
│   │
│   └── utils/ # services
│       └── convertToDynamicTime.js
│
├── store/ # global state (zustand)
│   ├── useStoreFetchedData.js
│   └── useStoreRetryState.js                       // Not used
│
├── utils/ # global utils
│   ├── convertToKilo.js
│   ├── getPercentValue.js
│   └── getTimeAgo.js
│
├── App.jsx
└── main.jsx

### Data Flow

- Generate Data :
     └─> generateTimeline.js
            └─> generateUsers.js
                   └─> generateSubscriptions.js
                          └─> generatePayments.js
                                 └─> generateData.js

- Fetch Data:
     └─> generateData.js
            └─> useFetchData.js                      // Not used
                   └─> useFetchedGenerateData.js                       // Not used
                          └─> useStoreFetchedData.js
                                 └─> useGlobalFetchedData.js
                                        └─> useComponents
                                               └─> Components UI

- Fetch Events:
     └─> generateData.js
            └─> generateEvents.js
                   └─> useFetchData.js                       // Not used
                          └─> useFetchedGenerateEvents.js                       // Not used
                                 └─> useStoreFetchedData.js
                                        └─> useGlobalFetchedData.js
                                               └─> useComponents
                                                      └─> Components UI

                                              

- graph TD
  A[generateData.js] --> B[useFetchData.js]
  B --> C[useFetchedGenerateData.js]                       // Not used
  C --> D[useFetchedDataStore.js]
  D --> E[useGlobalFetchedData.js]
  E --> F[useComponents]
  F --> G[Components UI]
