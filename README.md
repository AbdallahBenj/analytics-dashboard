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

--- 


## Live Demo

🔗 **[Analytics Dashboard Demo](https://anadash.vercel.app/)**

## GitHub Repository

🔗 **[Analytics Dashboard Repository](https://github.com/AbdallahBenj/analytics-dashboard)**

## Installation

npm install  
npm run dev

---


## Project Stricture

```bash
src/
├── assets/                 # Logos, favicon
│   ├── dashboard-logo.svg
│   └── react.svg
│
├── components/            # Reusable UI components
│   ├── ComingSoon.tsx
│   ├── ErrorsDialog.tsx
│   ├── LoginDialog.tsx
│   ├── NotificationMenu.tsx
│   ├── RadioGroupButtons.tsx
│   ├── SearchInput.tsx
│   └── ThemeMode.tsx
│
├── data/                  # Static content
│   ├── countries.ts
│   ├── navContent.ts
│   └── usersNames.ts
│
├── features/              # Feature-based modules
│   ├── overview/
│   │   ├── components/
│   │   │   ├── OverviewMiniCards.jsx
│   │   │   ├── OverviewPlansPieChart.jsx
│   │   │   ├── OverviewRecentActivity.jsx
│   │   │   └── OverviewRevenueChart.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useOverviewMiniCardsStats.ts
│   │   │   ├── useOverviewPlansPieChartStats.js
│   │   │   ├── useOverviewRecentActivity.js
│   │   │   └── useOverviewRevenueChartStats.js
│   │   │
│   │   └── utils/
│   │       ├── getActiveSubscriptions.ts
│   │       ├── getChurnRate.ts
│   │       ├── getConversionRate.ts
│   │       ├── getGrowthRate.ts
│   │       ├── getMonthlyRevenue.ts
│   │       ├── getRevenue.ts
│   │       └── getUsersByPlan.ts
│   │
│   ├── analytics/
│   │   ├── components/
│   │   │   ├── AnalyticsRevenueTrendChart.jsx
│   │   │   ├── .jsx
│   │   │   └── .jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAnalyticsRevenueTrendChart.js
│   │   │   ├── .js
│   │   │   └── .js
│   │   │
│   │   └── utils/
│   │       ├── .js
│   │       ├── .js
│   │       └── .js
│   │
│   ├──
│   
├── hooks/                 # Global reusable hooks
│   ├── useGlobalFetchedData.ts
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
│   ├── AnalyticsPage.jsx
│   ├── CustomersPage.jsx
│   ├── OverviewPage.jsx
│   ├── FeaturesPage.jsx
│   ├── ReportsPage.jsx
│   └── SubscriptionsPage.jsx
│
├── services/
│   ├── api/              # Future real API
│   ├── mock/
│   │   ├── generateData.ts
│   │   ├── generateUsers.ts
│   │   ├── generatePayments.ts
│   │   ├── generateSubscriptions.ts
│   │   └── generateTimeline.ts
│   │
│   ├── events/
│   │   ├── generateEvents.ts
│   │   ├── generatePaymentsEvents.ts
│   │   ├── generateSubscriptionsEvents.ts
│   │   └── generateUsersEvents.ts
│   │
│   └── utils/
│       └── convertToDynamicTime.ts
│
├── store/                # Zustand global state
│   ├── useStoreFetchedData.ts
│   └── useStoreLogin.ts
│
├── utils/                # Global utilities
│   ├── convertToKilo.ts
│   ├── formatCompact.ts
│   ├── formatCurrency.ts
│   ├── formatCurrencyCompact.ts
│   ├── formatPercent.ts
│   ├── getPercentValue.ts
│   └── getTimeAgo.ts
│    
├── types/                # Global utilities
│   ├── dataTypes.ts
│   ├── eventTypes.ts
│   └── .ts
│
├── App.jsx
└── main.jsx
```


### Data Flow Architecture

---


##  1. Data Generation Flow

```txt
generateTimeline.js
        ↓
generateUsers.js
        ↓
generateSubscriptions.js
        ↓
generatePayments.js
        ↓
generateData.js
```

---

##  2. Data Fetch Flow

```txt
generateData.js
        ↓
useStoreFetchedData.js (Zustand Store)
        ↓
useGlobalFetchedData.js (Hook Layer)
        ↓
Components (Dashboard / Analytics / Sidebar / Header)
        ↓
UI Rendering
```

---

##  3. Events Flow

```txt
generateData.js
        ↓
generateEvents.js
        ↓
useStoreFetchedData.js (State Update)
        ↓
useGlobalFetchedData.js
        ↓
Components
        ↓
UI Rendering (Reactive Updates)
```

                                          
