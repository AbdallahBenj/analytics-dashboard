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
│
├── components/            # Shared UI components
│   ├── AdminLoginDialog.tsx
│   ├── ComingSoon.tsx
│   ├── ErrorsDialog.tsx
│   ├── LoginDialog.tsx
│   ├── NotificationMenu.tsx
│   └── ThemeMode.tsx
│
│
├── data/                  # Static content
│   ├── countries.ts
│   ├── navContent.ts
│   └── usersNames.ts
│
│
├── features/              # Feature-based modules
│   ├── analytics/
│   │   ├── components/
│   │   │   ├── AnalyticsRevenueByPlanChart.tsx
│   │   │   └── 
│   │   │
│   │   └── hooks/
│   │       ├── useAnalyticsRevenueByPlanChart.ts
│   │       └── 
│   │    
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
│   ├── settings/
│   │   ├── components/
│   │   │   ├── DataOperationList.jsx
│   │   │   ├── DataOperationPanel.jsx
│   │   │   ├── GenerateMockDataSetting.jsx
│   │   │   ├── SourcesDataSettings.jsx
│   │   │   └── SupabaseDataSettings.jsx
│   │   │
│   │   └── hooks/
│   │       ├── useGenerateMockDataSettings.js
│   │       └── useSupabaseDataSettings.js
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
│
├── hooks/                 # Global reusable hooks
│   ├── useDashboardData.ts
│   ├── useMockData.ts
│   ├── useRefreshMockData.ts
│   ├── useReloadDashboardData.js
│   ├── useReloadMockData.ts
│   ├── useSupabaseData.js
│   ├── useSystemMode.js
│   └── useThemeMode.js
│
│
├── layout/
│   ├── DashboardLayout.jsx
│   ├── DesktopHeader.jsx
│   ├── Header.jsx
│   ├── MainHeader.jsx
│   ├── MainLayout.jsx
│   ├── MobileHeader.jsx
│   ├── PageHeader.jsx
│   ├── Sidebar.jsx
│   └── TopHeaderNotice.tsx
│
│
├── pages/
│   ├── AnalyticsPage.jsx
│   ├── CustomersPage.jsx
│   ├── FeaturesPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── OverviewPage.jsx
│   ├── ReportsPage.jsx
│   ├── SettingsPage.jsx
│   └── SubscriptionsPage.jsx
│
│
├── services/
│   ├── mock/
│   │   ├── generateData.ts             // statics generated Data
│   │   ├── generateEvents.ts           // statics generated Events
│   │   ├── generateMockData.ts         // dynamics generated Data and Events
│   │   ├── generatePayments.ts
│   │   ├── generatePaymentsEvents.ts
│   │   ├── generateSubscriptions.ts
│   │   ├── generateSubscriptionsEvents.ts
│   │   ├── generateTimeline.ts
│   │   ├── generateUsers.ts
│   │   └── generateUsersEvents.ts
│   │
│   ├── supabase/              # Future real API
│   │   ├── adminLogin.js
│   │   ├── adminLogout.js
│   │   ├── checkAdmin.js
│   │   ├── clearSupabaseData.js
│   │   ├── fetchSupabaseData.js
│   │   ├── getTablesToUpdate.js        // get Supabase Tables to update
│   │   ├── listenAuthChange.js
│   │   ├── syncSupabaseData.js
│   │   └── upsertSupabaseData.js
│   │
│   └── utils/
│       ├── toCamelCase.js
│       ├── toDynamicTime.ts
│       └── toSnakeCase.js
│
│
├── store/                # Zustand global state
│   ├── useAdminLoginStore.ts 
│   ├── useAuthStore.ts 
│   ├── useDataSourceStore.ts
│   ├── useLoginStore.ts
│   ├── useMockDataStore.ts
│   └── useSupabaseDataStore.js
│
│
├── types/    
│   ├── analyticsSectionTypes.ts          # Global utilities
│   ├── dataTypes.ts
│   ├── eventTypes.ts
│   ├── MockDataStoreTypes.ts
│   ├── overviewSectionTypes.ts
│   ├── utilsTypes.ts
│   └── 

├── ui/                 # Reusable UI components
│   ├── PrimaryButton.jsx 
│   ├── RadioGroupButtons.tsx 
│   ├── SearchInput.tsx 
│   ├── SelectInput.jsx 
│   ├── SelectListbox.jsx 
│   └── SwitchButton.jsx 
│ 
│
│
├── utils/                # Global utilities
│   ├── convertToKilo.ts // Not used
│   ├── formatCurrency.ts
│   ├── formatCurrencyCompact.ts
│   ├── formatDate.ts
│   ├── formatNumberCompact.ts
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


##  1. Mock Data Generation Flow

```bash

├── generateTimeline.ts
        ↓
        └── generateUsers.ts
                ↓
                └── generateSubscriptions.ts
                        ↓
                        └── generatePayments.ts
                                ↓
                                └── generateUsersEvents.ts
                                        ↓
                                        └── generateSubscriptionsEvents.ts
                                                ↓
                                                └── generatePaymentsEvents.ts
                                                        ↓
                                                        └── generateMockData.ts

```

---


##  2. Mock Data Flow

```bash

├── generateMockData.ts (Generate and store generated Data and Events on Zustand generatedData)
        ↓
        └── useMockDataStore.ts (Zustand - Simulate Fetch and Store Mock Data and Events on Zustand fetchedData)
                ↓
                └── useMockData.ts (Get Mock Data and Events from Zustand MockDataStore)
                        ↓
                        └── useDashboardData.js (Dashboard Data Mode - Switch between MockData/SupabaseData)
                                ↓
                                └── Components (Ui logic)
                                        ↓
                                        └── UI Rendering

```

---


##  3. Supabase Data Flow

```bash

├── generateMockData.ts
        ↓
        └── updateSupabaseData.js (Update Supabase Data)
                ↓
                └── fetchSupabaseData.js (Fetch Supabase Data)
                        ↓
                        └── useSupabaseDataStore.js (Zustand - Store Fetched Supabase Data and Events)
                                ↓
                                └── useSupabaseData.js (Get Supabase Data and Events from Zustand SupabaseDataStore)
                                        ↓
                                        └── useDashboardData.js (Dashboard Data Mode - Switch between MockData/SupabaseData)
                                                ↓
                                                └── Components (Ui logic)
                                                        ↓
                                                        └── UI Rendering

```

---



