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
│   ├── AdminLoginDialog.tsx
│   ├── ComingSoon.tsx
│   ├── DataSourceNotice.tsx
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
│   │   │   ├── OverviewMiniCards.tsx
│   │   │   ├── OverviewPlansPieChart.tsx
│   │   │   ├── OverviewRevenueChart.tsx
│   │   │   └── OverviewActivityTable.tsx
│   │   │
│   │   └── hooks/
│   │       ├── useOverviewMiniCards.ts
│   │       ├── useOverviewPlansPieChart.ts
│   │       ├── useOverviewRevenueChart.ts
│   │       └── useOverviewActivityTable.ts
│   │
│   ├── analytics/
│   │   ├── components/
│   │   │   ├── AnalyticsRevenueByPlanChart.jsx
│   │   │   ├── .jsx
│   │   │   └── .jsx
│   │   │
│   │   └── hooks/
│   │       ├── useAnalyticsRevenueByPlanChart.js
│   │       ├── .js
│   │       └── .js
│   │    
│   │
│   └── utils/
│       ├── getActiveSubscriptions.ts
│       ├── getChurnRate.ts
│       ├── getConversionRate.ts
│       ├── getGrowthRate.ts
│       ├── getMonthlyRevenue.ts
│       ├── getRevenue.ts
│       └── getUsersByPlan.ts
│   
├── hooks/                 # Global reusable hooks
│   ├── useReloadMockData.ts
│   ├── useGlobalMockData.ts 
│   ├── useSystemMode.js
│   └── useThemeMode.js
│
├── layout/
│   ├── DashboardLayout.jsx
│   ├── Header.jsx
│   ├── HeaderDesktop.jsx
│   ├── HeaderMobile.jsx
│   ├── MainHeader.jsx
│   ├── MainLayout.jsx
│   ├── PageHeader.jsx
│   └── Sidebar.jsx
│
├── pages/
│   ├── AnalyticsPage.jsx
│   ├── CustomersPage.jsx
│   ├── FeaturesPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── OverviewPage.jsx
│   ├── ReportsPage.jsx
│   └── SubscriptionsPage.jsx
│
├── services/
│   ├── api/              # Future real API
│   │   ├── adminLogin.js
│   │   ├── adminLogout.js
│   │   ├── checkAdmin.js
│   │   ├── fetchAllSupabaseData.js
│   │   ├── fetchSupabaseData.js
│   │   ├── insertSupabaseData.js
│   │   └── listenAuthChange.js
│   │
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
│   ├── useAdminLoginStore.ts 
│   ├── useAuthStore.ts 
│   ├── useLoginStore.ts 
│   ├── useMockDataStore.ts
│   └── useSupabaseDataStore.js
│
├── types/    
│   ├── analyticsSectionTypes            # Global utilities
│   ├── dataTypes.ts
│   ├── eventTypes.ts
│   ├── overviewSectionTypes.ts
│   ├── storeTypes.ts
│   ├── utilsTypes.ts
│   └── .ts
│
├── utils/                # Global utilities
│   ├── convertToKilo.ts // Not used
│   ├── formatCompact.ts
│   ├── formatCurrency.ts
│   ├── formatCurrencyCompact.ts
│   ├── formatPercent.ts
│   ├── getPercentValue.ts // Not used
│   └── getTimeAgo.ts
│
│
├── App.jsx
└── main.jsx
```


### Data Flow Architecture

---


##  1. Data Generation Flow

```bash
├── generateTimeline.js
        ↓
        └── generateUsers.js
                ↓
                └── generateSubscriptions.js
                        ↓
                        └── generatePayments.js
                                ↓
                                └── generateData.js
```

---


##  2. MockData Flow

```bash
├── generateData.js
        ↓
        └── useMockDataStore.js (Zustand Simulate Fetch and Data Store)
                ↓
                └── useGlobalMockData.ts (Mock Data Hook Layer)
                        ↓
                        └── Components (Ui logic)
                                ↓
                                └── UI Rendering
```

---


##  3. Supabase Data Flow

```bash
├── generateData.js
        ↓
        └── insertSupabaseData.js (Supabase Data)
                ↓
                └── fetchAllSupabaseData.ts (Supabase Data)
                        ↓
                        └── useSupabaseDataStore (Zustand Data Store)
                                ↓
                                └── Components (Ui logic)
                                        ↓
                                        └── UI Rendering
```

---

##  4. Events MockData Flow

```bash
├── generateData.js
        ↓
        └── generateEvents.js
                ↓
                └── useMockDataStore.js (State Update)
                        ↓
                        └── useGlobalMockData.ts.js
                                ↓
                                └── Components (Ui logic)
                                        ↓
                                        └── UI Rendering (Reactive Updates)
```

                                          
