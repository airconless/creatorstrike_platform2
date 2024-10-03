# Product Requirements Document (PRD)

## Project Overview

### **Platform Description**
You are building a **B2B2C platform** designed for creators who want to build personalized websites for their audiences, similar to platforms like Patreon or OnlyFans. In addition to website creation, the platform will offer a store feature enabling creators to sell their own products. Key functionalities include:

- **Template Selection:** Creators can choose from a variety of website templates.
- **Content Management:** Upload and manage various types of content.
- **Audience Interaction:** Engage with fans through comments, ratings, and subscriptions.
- **E-commerce Integration:** Sell products and manage payments via Stripe.
- **Analytics Dashboard:** Track website performance and audience engagement.
- **Multi-Tenancy:** Support multiple creators with isolated environments.

### **Technology Stack**
- **Frontend:** Next.js, Tailwind CSS, shadcn
- **Backend:** Next.js API Routes, Drizzle ORM, PostgreSQL, shadcn
- **Authentication:** NextAuth.js
- **Payment Processing:** Stripe
- **Icons:** Lucid Icons
- **Database Management:** Drizzle ORM with PostgreSQL
- **Hosting & Deployment:** Vercel
- **Additional Services:** Supabase for additional backend services

## Objectives

- **Scalability:** Ensure the platform can handle a growing number of creators and fans.
- **User-Friendly:** Provide an intuitive interface for both creators and fans.
- **Customization:** Allow creators to personalize their websites using templates.
- **Monetization:** Enable creators to monetize their content and products effectively.
- **Security:** Protect user data and ensure secure transactions.

## Target Users

1. **Creators:**
   - Individuals or businesses creating and sharing content.
   - Require tools to manage their website, content, products, and analytics.

2. **Fans:**
   - Users who follow creators, consume content, and purchase products.
   - Can subscribe for free or paid tiers to access exclusive content.

## Core Functionality

### 1. **Select a Template**

#### Features:
- **Template Gallery:**
  - Display a list of available website templates in card format.
  - Each card includes a thumbnail image, template name, description, and a "Select" button.
- **Template Details:**
  - Allow creators to click on a template card to view more detailed information.
- **Template Selection:**
  - Enable creators to choose and apply a selected template to their website.

### 2. **Content Management**

#### Features:
- **Content Posting:**
  - Creators can post content using a rich text editor (e.g., Novel Editor).
- **Content Types:**
  - Support for various content types: text, images, videos, audio, and files.
- **Access Control:**
  - Option to mark posts as "Paid Fans Only" or "Public."

### 3. **Publish Website**

#### Features:
- **Subdomain Publishing:**
  - Creators can publish their website to a subdomain on the platform (e.g., creatorname.platform.com).
- **Custom Subdomain:**
  - Option to choose a custom subdomain name.
- **Custom Domain:**
  - Ability to add and manage a custom domain name for their website.

### 4. **Admin Dashboard**

#### Features:
- **Sidebar Navigation:**
  - Ribbon on the left with the following sections:
    1. **Content Management**
       - Upload, manage, and view website content.
    2. **Analytics**
       - View website analytics, traffic, and engagement metrics.
    3. **Audience**
       - View latest comments and new subscribers.
    4. **Products**
       - Manage, view, and add new products.
    5. **Settings**
       - Manage website theme, domain, subscription plan, and data usage.
    6. **Notifications**
       - View website notifications.

### 5. **Fan Interaction**

#### Features:
- **Free Subscription:**
  - Main website accessible for free.
  - Fans can view latest free content without logging in.
  - Logged-in fans can access all free content and interact with creators and other fans.
  
- **Paid Subscription:**
  - Access to all content without limitations, including exclusive content.
  - Discounts on products for paid subscribers.
  - Payments managed via Stripe.
  - Paid subscribers receive a badge on their username.

- **Comments and Ratings:**
  - Fans can comment on content.
  - View latest comments on the website.
  - Add new comments and leave ratings on comments and content.

## User Roles and Permissions

### **Creators:**
- **Website Management:**
  - Select and customize website templates.
  - Publish and manage website content.
- **Content Management:**
  - Upload and categorize content (text, images, videos, audio, files).
  - Set access levels for each post.
- **E-commerce Management:**
  - Add, edit, and delete products.
  - Manage pricing and discounts.
- **Analytics:**
  - View detailed analytics on website performance and audience engagement.
- **Audience Management:**
  - View and manage subscribers and user comments.
- **Settings:**
  - Configure website theme, domain, subscription plans, and monitor data usage.
- **Notifications:**
  - Receive and manage platform notifications.

### **Fans:**
- **Content Consumption:**
  - View free and paid content based on their subscription.
- **Subscription Management:**
  - Choose between free and paid subscriptions.
  - Manage subscription preferences.
- **Product Purchases:**
  - Browse and purchase products from creators.
- **Interaction:**
  - Comment on content and rate comments and content.
- **Profile:**
  - Manage personal profile and view subscription badges.

## File Structure

A well-organized file structure is essential for maintainability and scalability. Below is the recommended structure tailored for this project using **Next.js**, **Drizzle ORM**, **PostgreSQL**, **Stripe**, **Tailwind CSS**, **Lucid Icons**, and **Supabase**.

### **Project Root**
```plaintext
my-platform/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...nextauth].ts
│   │   │   │   └── authHandler.ts
│   │   │   ├── products/
│   │   │   │   ├── index.ts
│   │   │   │   └── [productId].ts
│   │   │   ├── content/
│   │   │   │   ├── index.ts
│   │   │   │   └── [contentId].ts
│   │   │   └── users/
│   │   │       ├── index.ts
│   │   │       └── [userId].ts
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── AnalyticsPanel.tsx
│   │   │   │   ├── ContentManager.tsx
│   │   │   │   ├── ProductManager.tsx
│   │   │   │   └── SettingsPanel.tsx
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── templates/
│   │   │   ├── [templateId]/
│   │   │   │   ├── components/
│   │   │   │   ├── page.tsx
│   │   │   │   └── styles.module.css
│   │   │   └── index.tsx
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── products/
│   │   │   ├── [productId]/
│   │   │   │   └── page.tsx
│   │   │   └── index.tsx
│   │   ├── content/
│   │   │   ├── [contentId]/
│   │   │   │   └── page.tsx
│   │   │   └── index.tsx
│   │   ├── users/
│   │   │   ├── [userId]/
│   │   │   │   └── page.tsx
│   │   │   └── index.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── admin/
│   │   │   ├── Sidebar.tsx
│   │   │   └── NotificationPanel.tsx
│   │   └── ui/
│   │       ├── Modal.tsx
│   │       ├── Tooltip.tsx
│   │       └── Dropdown.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   ├── axiosConfig.ts
│   │   │   └── fetcher.ts
│   │   ├── auth/
│   │   │   └── authUtils.ts
│   │   ├── db/
│   │   │   ├── drizzle.ts
│   │   │   ├── schema.ts
│   │   │   └── migrations/
│   │   │       ├── <timestamp>_initial.ts
│   │   │       └── ...
│   │   ├── icons/
│   │   │   └── LucidIcons.tsx
│   │   ├── middleware/
│   │   │   └── middleware.ts
│   │   └── utils/
│   │       ├── formatDate.ts
│   │       └── validation.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── useSubscription.ts
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── globals.css
│   └── types/
│       ├── index.d.ts
│       └── next-auth.d.ts
├── drizzle/
│   ├── migrations/
│   │   ├── 20230401_initial.ts
│   │   └── 20230515_add_users_table.ts
│   └── drizzle.config.ts
├── .env
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── drizzle.config.ts
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

### **Directory Breakdown**

#### `public/`
- **assets/**: Stores static assets such as images, icons, and logos.
- **favicon.ico**: Icon displayed in the browser tab.
- **robots.txt**: Instructions for web crawlers.

#### `src/`
- **app/**: Contains all Next.js pages and API routes.
  - **api/**: Backend API routes.
    - **auth/**: Handles authentication-related API endpoints.
    - **products/**, **content/**, **users/**: CRUD operations for respective entities.
  - **dashboard/**: Admin dashboard components and pages.
    - **components/**: Specific components used within the dashboard.
  - **templates/**: Template selection and management.
    - **[templateId]/**: Dynamic routes for individual templates.
  - **auth/**: Authentication pages like login and registration.
  - **products/**, **content/**, **users/**: Public-facing pages for products, content, and user profiles.
  - **layout.tsx**: Main layout component for the application.
  - **globals.css**: Global styles applicable across the app.

- **components/**: Reusable React components.
  - **common/**: Shared components such as buttons, cards, headers, and footers.
  - **admin/**: Admin-specific components like sidebar and notification panels.
  - **ui/**: UI components such as modals, tooltips, and dropdowns.

- **lib/**: Utility libraries and configurations.
  - **api/**: API configurations and helper functions (e.g., Axios setup).
  - **auth/**: Authentication utilities and helpers.
  - **db/**
    - **drizzle.ts**: Initializes and exports the Drizzle ORM instance.
    - **schema.ts**: Defines the database schema using Drizzle ORM.
    - **migrations/**: Contains migration scripts.
  - **icons/**: Icon components, including Lucid Icons.
  - **middleware/**: Custom middleware for handling multi-tenancy and other global logic.
  - **utils/**: General utility functions like date formatting and validation.

- **hooks/**: Custom React hooks for various functionalities (e.g., authentication, data fetching).

- **styles/**: Styling files.
  - **tailwind.css**: Tailwind CSS configurations.
  - **globals.css**: Global CSS styles.

- **types/**: TypeScript type definitions.

#### `drizzle/`
- **migrations/**: Database migration files using Drizzle's migration system.
  - **`20230401_initial.ts`**
  - **`20230515_add_users_table.ts`**
- **drizzle.config.ts**: Drizzle ORM configuration file.

#### **Root Files**
- **.env**: Environment variables.
- **.gitignore**: Git ignore rules.
- **next.config.js**: Next.js configuration.
- **package.json**: NPM package configurations.
- **postcss.config.js**: PostCSS configurations for Tailwind.
- **drizzle.config.ts**: Drizzle ORM configuration file.
- **README.md**: Project documentation.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.

## Documentation and Context

### **Middleware Configuration**

To handle multi-tenancy, the `middleware.ts` file is crucial. It rewrites URLs based on the hostname, manages session redirects, and ensures secure access.

#### **Example Middleware Documentation**

```typescript:src/lib/middleware/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Middleware configuration to match specific routes
export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

// Middleware function for handling multi-tenancy
export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // Handle special Vercel preview deployment URLs
  if (
    hostname.includes("---") &&
    hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
  ) {
    hostname = `${hostname.split("---")[0]}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
  }

  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

  // Rewrite for app pages with authentication checks
  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await getToken({ req });
    if (!session && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (session && path === "/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.rewrite(
      new URL(`/app${path === "/" ? "" : path}`, req.url),
    );
  }

  // Redirect Vercel.pub domain to documentation
  if (hostname === "vercel.pub") {
    return NextResponse.redirect(
      "https://vercel.com/blog/platforms-starter-kit",
    );
  }

  // Rewrite root application to /home folder
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/home${path === "/" ? "" : path}`, req.url),
    );
  }

  // Rewrite everything else to dynamic route based on hostname
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
```

### **Drizzle ORM Setup**

Drizzle ORM is used for database interactions with PostgreSQL. The setup includes schema definitions, migrations, and ORM initialization.

#### **Example Schema Documentation**

```typescript:src/lib/db/schema.ts
import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

// Users table definition
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

// Define other tables similarly
```

### **API Configuration**

Centralizing API configurations ensures consistency and ease of maintenance.

#### **Example Axios Configuration Documentation**

```typescript:src/lib/api/axiosConfig.ts
import axios from 'axios';

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for handling responses and errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    return Promise.reject(error);
  }
);

export default apiClient;
```

### **Authentication Utilities**

Managing user authentication and session handling.

#### **Example Authentication Utility Documentation**

```typescript:src/lib/auth/authUtils.ts
import { getSession } from 'next-auth/react';

// Function to retrieve the current session
export const fetchSession = async () => {
  const session = await getSession();
  return session;
};
```

### **Custom Hooks**

Reusable logic for common functionalities.

#### **Example Custom Hook Documentation**

```typescript:src/hooks/useAuth.ts
import { useSession } from 'next-auth/react';

// Custom hook for authentication
export const useAuth = () => {
  const { data: session, status } = useSession();
  return { session, isAuthenticated: status === 'authenticated' };
};
```

## Detailed Feature Descriptions

### **1. Template Selection**

#### **User Stories:**
- **As a creator,** I want to browse through various website templates so that I can choose one that best represents my brand.
- **As a creator,** I want to view detailed information about a template before selecting it.

#### **Acceptance Criteria:**
- Templates are displayed in a card layout with thumbnail, name, description, and "Select" button.
- Clicking a template card opens a detailed view of the template.
- Selecting a template applies it to the creator's website.

### **2. Content Management**

#### **User Stories:**
- **As a creator,** I want to post different types of content (text, images, videos, audio, files) to engage my audience.
- **As a creator,** I want to mark certain posts as "Paid Fans Only" to monetize exclusive content.

#### **Acceptance Criteria:**
- Rich text editor supports multiple content types.
- Creators can categorize content and set access levels.
- Content is displayed appropriately based on access permissions.

### **3. Publish Website**

#### **User Stories:**
- **As a creator,** I want to publish my website to a subdomain on the platform.
- **As a creator,** I want to use a custom subdomain or my own domain for my website.

#### **Acceptance Criteria:**
- Creators can choose and reserve a subdomain.
- Option to add and verify a custom domain.
- Website is accessible via the selected domain.

### **4. Admin Dashboard**

#### **User Stories:**
- **As a creator,** I want to manage my content, products, and settings from a centralized dashboard.
- **As a creator,** I want to view analytics to understand my audience better.

#### **Acceptance Criteria:**
- Sidebar navigation with sections for Content Management, Analytics, Audience, Products, Settings, and Notifications.
- Each section provides the relevant tools and information.
- Dashboard is responsive and user-friendly.

### **5. Fan Interaction**

#### **User Stories:**
- **As a fan,** I want to subscribe to creators for free or paid tiers to access content.
- **As a fan,** I want to comment on and rate content to engage with creators and other fans.

#### **Acceptance Criteria:**
- Free and paid subscription options with clear distinctions.
- Secure payment processing via Stripe for paid subscriptions.
- Commenting and rating functionalities are intuitive and responsive.
- Paid subscribers display a badge on their usernames.

## Key Considerations

### **Modular Structure**
- Organizing code by feature enhances maintainability and scalability.
- Separation of frontend components, backend API routes, and utility libraries ensures clarity.

### **Reusable Components**
- Centralizing common and UI components promotes reusability and consistency across the application.

### **Type Safety**
- Utilizing TypeScript ensures type safety, reducing runtime errors.

### **Styling**
- Combining Tailwind CSS with modular CSS (`styles.module.css`) allows for flexible and maintainable styling.

### **Database Management with Drizzle ORM**
- Define database schema in `lib/db/schema.ts`.
- Manage migrations within `drizzle/migrations/`.
- Initialize Drizzle ORM in `lib/db/drizzle.ts`.

### **Middleware**
- Implement custom middleware (`lib/middleware/middleware.ts`) to handle multi-tenancy and other cross-cutting concerns seamlessly.

### **Performance Enhancements**
- **Lazy Loading:** Implement dynamic imports for components to improve performance.
- **Caching:** Utilize caching strategies (e.g., using React Query or SWR) for API responses and static assets to reduce load times.
- **Error Handling:** Centralize error handling in API routes and frontend components for better resilience.

### **Testing and CI/CD**
- **Testing:** Integrate testing frameworks like Jest and React Testing Library to ensure code reliability.
- **CI/CD Pipeline:** Set up continuous integration and deployment pipelines using platforms like Vercel and GitHub Actions for automated testing and deployment.

### **Documentation**
- Maintain comprehensive documentation within the `README.md` and inline code comments for better developer onboarding and collaboration.

## Conclusion

This PRD outlines the essential components and structure needed to develop a robust B2B2C platform for creators and fans. By following the detailed file structure, leveraging Drizzle ORM for database management, and adhering to best practices in modularity, reusability, and performance optimization, developers can efficiently build and maintain the platform. Comprehensive documentation and clear feature definitions ensure that the development team has the necessary guidance to execute the project successfully.