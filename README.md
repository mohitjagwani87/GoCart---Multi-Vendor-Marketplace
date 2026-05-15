# GoCart

Redeploy trigger: small README update to force Vercel rebuild.
# GoCart

GoCart is a multi-vendor e-commerce platform where customers can shop, store owners can manage products and orders, and admins can manage the full marketplace.

## Project Name

GoCart - Multi-Vendor Marketplace

## Description

GoCart is an open-source marketplace application built with Next.js. It supports three main roles:

- Customers who browse products, add items to cart, place orders, and manage addresses.
- Store owners who add products, manage inventory, and track orders.
- Admins who review stores, monitor activity, and manage platform-wide operations.

The project is built with a modern React stack, clean routing, and modular components to make future development easier.

## Key Features

- Public storefront with product browsing and product details pages.
- Cart and checkout-ready flow with global state management.
- Customer order and profile-related pages.
- Separate store dashboard for product and order management.
- Separate admin dashboard for approvals and platform control.
- Reusable UI components and organized app routing.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Redux Toolkit + React Redux
- Prisma
- Recharts

## Technical Architecture

GoCart follows a role-based architecture using the Next.js App Router.

- Public app: customer-facing pages for browsing, product details, cart, and order flow.
- Store app: seller workspace for product management and order handling.
- Admin app: platform control for store approvals and marketplace operations.

The route tree is separated by purpose to keep feature boundaries clear and maintainable.

## Routing Model (Next.js App Router)

- Route groups are used to separate user experiences without affecting URL structure.
- Dynamic segments are used for product and store-specific pages.
- Layout composition is used per role so admin/store/public areas can have independent nav and sidebar systems.

Current high-level routing partitions:

- app/(public): customer journey and marketing pages.
- app/store: seller dashboard pages.
- app/admin: admin dashboard pages.

## State Management Design

Global client state is handled with Redux Toolkit.

- Store configuration lives in a central Redux store setup.
- Feature-level slices are modularized by domain in lib/features.
- Current slices include address, cart, product, and rating.

Why this helps:

- Predictable updates for cart and checkout data.
- Easy feature extension by adding independent slices.
- Clear separation between UI components and business state transitions.

## Data Layer and Schema

Prisma is used for schema management and database modeling.

- Schema definitions are maintained in prisma/schema.prisma.
- Prisma provides a typed and structured data access layer for marketplace entities.
- The model supports the multi-vendor structure, including product and order relations.

## Component Strategy

The UI is built with reusable components and role-specific layout shells.

- Shared reusable components are kept in components.
- Role-aware components are grouped in components/admin and components/store.
- This approach reduces duplication and keeps dashboard concerns isolated.

## Styling System

- Tailwind CSS 4 is used for utility-first styling.
- Global styles are centralized for consistent design tokens and baseline styles.
- Component-level composition keeps styling close to implementation while maintaining reuse.

## Performance and DX Notes

- Next.js App Router enables layout nesting and selective rendering boundaries.
- Turbopack is enabled during development for faster local iteration.
- Modular route and component organization improves onboarding and code navigation.

## Local Environment Setup

1. Create your environment file:

```bash
# macOS/Linux
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env
```

If no .env.example exists yet, create .env manually with your database and app variables.

2. Configure Prisma database connection (example):

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME"
```

3. Run Prisma generate/migrations as needed for your environment.

## Build and Deployment Notes

- Development build: optimized for fast feedback.
- Production build: generated with npm run build and served with npm run start.
- Deploy target can be any Next.js-compatible environment, including Vercel or self-hosted Node.js infrastructure.

Recommended production checks:

- Run lint and build before deployment.
- Ensure environment variables are set in deployment platform.
- Verify database connectivity and Prisma compatibility in target runtime.

## Project Structure

- app: Route groups for public, admin, and store flows.
- components: Shared UI and dashboard components.
- lib/features: Redux slices for cart, product, address, and rating state.
- prisma: Database schema and data model definitions.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser:

http://localhost:3000

## Available Scripts

- npm run dev: Run development server.
- npm run build: Create production build.
- npm run start: Start production server.
- npm run lint: Run lint checks.

## Contribution

Contributions are welcome. Please read CONTRIBUTING.md before opening pull requests.

## License

This project is licensed under the MIT License. See LICENSE.md for details.
