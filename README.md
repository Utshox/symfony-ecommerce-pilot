# TechMart – Modern E-commerce Frontend (Symfony Integration Ready)

> TechMart is a modern, production-ready e-commerce frontend implemented in React + TypeScript and structured to integrate seamlessly with a Symfony-based backend API. It demonstrates scalable architecture, clean state management with Zustand, accessibility awareness, performance optimization, and a design-system-driven UI approach.

![TechMart Preview](https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg)

---
## Table of Contents
- [Overview](#overview)
  - [Key Highlights](#key-highlights)
- [Feature Overview](#feature-overview)
  - [Feature Matrix](#feature-matrix)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
  - [Component Architecture](#component-architecture)
  - [State Management Pattern](#state-management-pattern)
  - [Data Flow](#data-flow)
  - [Component Patterns](#component-patterns)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
  - [Symfony Backend Endpoints](#symfony-backend-endpoints)
  - [API Service Example](#api-service-example)
- [Design System](#design-system)
  - [Color Palette](#color-palette)
  - [Typography Scale](#typography-scale)
  - [Spacing System](#spacing-system)
  - [Component Variants](#component-variants)
- [Performance](#performance)
  - [Optimization Strategies](#optimization-strategies)
  - [Performance Metrics (Targets)](#performance-metrics-targets)
  - [Runtime Monitoring](#runtime-monitoring)
- [Testing Strategy](#testing-strategy)
- [Deployment](#deployment)
  - [Build Process](#build-process)
  - [Deployment Options](#deployment-options)
  - [Docker Deployment](#docker-deployment)
- [Contributing](#contributing)
  - [Development Workflow](#development-workflow)
  - [Code Standards](#code-standards)
  - [Pull Request Process](#pull-request-process)
- [Roadmap](#roadmap)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact & Support](#contact--support)
- [Notes](#notes)

---
## Overview
TechMart provides a clean foundation for building a feature-rich storefront. Though this repository currently focuses on the frontend, its structure and service abstractions are intentionally aligned for rapid integration with a Symfony API (e.g. product, cart, auth, and wishlist endpoints). The goal is to offer clarity, maintainability, and extensibility from day one.

### Key Highlights
- **Type-Safe**: End-to-end TypeScript usage
- **Composable State**: Modular Zustand stores
- **Design System Driven**: Consistent spacing, color, and typography tokens
- **Performance Conscious**: Code splitting, lazy loading, minimal bundle surface
- **Accessible Foundations**: Semantic markup patterns + keyboard-friendly UI
- **Production Practices**: Linting, formatting, conventional commits, scalable structure

---
## Feature Overview
Core user-facing flows are scaffolded with clean separation of presentation and logic.

### Feature Matrix
| Domain                | Status | Details |
|-----------------------|:------:|---------|
| Product Listing       | ✅     | Filtering, sorting (extensible) |
| Product Detail        | ✅     | Basic spec display + gallery-ready layout |
| Cart Management       | ✅     | Quantity updates, totals, persistence layer ready |
| Wishlist              | ✅     | Client-side (can be persisted server-side later) |
| Theming (Light/Dark)  | ✅     | Toggle via UI store |
| Auth Flow             | ⏳     | Service placeholders; UI not finalized |
| Category Navigation   | ✅     | Modular component patterns |
| API Abstraction Layer | ✅     | Swappable service class pattern |
| Accessibility Pass    | ⏳     | Baseline semantics; further audits pending |
| Testing Coverage      | ⏳     | Example test included; expand planned |
| Payment Integration   | ⏳     | Stripe key env placeholder; not wired yet |
| Deployment Config     | ✅     | Docker + environment tokens |

Legend: ✅ Implemented  ⏳ Planned / Partial  ❌ Not Started

---
## Technology Stack
### Core
- React 18
- TypeScript
- Vite (dev + build)
- React Router DOM

### State Management
- Zustand (store composition + persistence ready)
- React Hooks (local component state)

### Styling & UI
- Tailwind CSS (JIT utility engine)
- Lucide React (icons)
- CSS Variables for theme primitives

### Tooling & Quality
- ESLint (TypeScript rules + best practices)
- Prettier (consistent formatting)
- TypeScript strict mode
- PostCSS + Autoprefixer

### Build & Optimization
- Vite production bundling
- Tree shaking & code splitting
- Asset optimization pipeline

---
## Architecture
### Component Architecture
```
src/
├── components/           # Reusable UI components
│   ├── Layout/           # Layout shells (Header, Footer)
│   ├── Product/          # Product display & interactions
│   ├── Home/             # Homepage-specific sections
│   └── UI/               # Pure UI primitives (buttons, etc.)
├── pages/                # Route-level components
├── store/                # Zustand store modules
├── types/                # Global TypeScript types
├── data/                 # Mock data / constants
└── utils/                # Generic helpers
```

### State Management Pattern
Stores are separated by concern (cart, user/auth, ui, wishlist). Each store exposes pure actions + derived selectors. This keeps components lean and testable.

### Data Flow
```
User Action → UI Component → Store Action → State Mutation → Reactive Rerender
```

### Component Patterns
- Container vs Presentational split where complexity warrants
- Custom hooks for shared cross-component logic
- Composition-first design (minimal inheritance)
- Prop-driven variants & Tailwind utility composition

---
## Project Structure
```
techmart/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── Product/
│   │   └── Home/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── data/
│   └── utils/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---
## Getting Started
### Prerequisites
- Node.js 18+
- npm (or yarn / pnpm)

### Installation
```bash
git clone https://github.com/Utshox/symfony-ecommerce-pilot.git
cd symfony-ecommerce-pilot
npm install
npm run dev
# Open http://localhost:5173
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Local preview of build
npm run lint         # Run ESLint
npm run type-check   # Type-only compilation
```

---
## Configuration
### Environment Variables
Create a .env (for local) or .env.production for deployments:
```
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=TechMart
VITE_STRIPE_PUBLIC_KEY=pk_test_example_key
```

---
## API Integration
### Symfony Backend Endpoints
Intended structure (mirror in your Symfony routes):
```
GET    /api/products
GET    /api/products/{id}
GET    /api/categories
POST   /api/cart/add
PUT    /api/cart/update
DELETE /api/cart/remove
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
GET    /api/user/profile
```

### API Service Example
```typescript
// src/services/api.ts
export class ApiService {
  constructor(private baseUrl = import.meta.env.VITE_API_URL) {}

  async getProducts(params?: Record<string, string | number>) {
    const qs = params ? '?' + new URLSearchParams(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ) : '';
    const res = await fetch(`${this.baseUrl}/products${qs}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  }

  async getProduct(id: string) {
    const res = await fetch(`${this.baseUrl}/products/${id}`);
    if (!res.ok) throw new Error('Product not found');
    return res.json();
  }

  async addToCart(productId: string, quantity: number) {
    const res = await fetch(`${this.baseUrl}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity })
    });
    if (!res.ok) throw new Error('Failed to add to cart');
    return res.json();
  }
}
```

---
## Design System
### Color Palette
```css
--blue-50: #eff6ff;
--blue-500: #3b82f6;
--blue-600: #2563eb;
--blue-700: #1d4ed8;
--purple-500: #8b5cf6;
--purple-600: #7c3aed;
--green-500: #10b981;
--red-500: #ef4444;
--yellow-500: #f59e0b;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-500: #6b7280;
--gray-900: #111827;
```

### Typography Scale
```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
```

### Spacing System
4, 8, 12, 16, 20, 24, 32, 40, 48, 64 (8px baseline + a few in-between values)

### Component Variants
```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type CardVariant = 'default' | 'featured' | 'compact';
type InputVariant = 'default' | 'error' | 'success';
```

---
## Performance
### Optimization Strategies
- Route-based code splitting
- Lazy loading (components & images)
- Tree shaking (unused exports removed by bundler)
- Asset minimization (Vite + esbuild pipeline)
- Lean state layer (no over-fetching)

### Performance Metrics (Targets)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time To Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Runtime Monitoring
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
[getCLS, getFID, getFCP, getLCP, getTTFB].forEach(fn => fn(console.log));
```

---
## Testing Strategy
### Layers
1. Unit: Pure functions & isolated component logic
2. Integration: Component interaction + store coordination
3. E2E (planned): Critical user paths (add to cart, view product, etc.)

### Tooling
Install test stack:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
```

### Example
```typescript
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('renders product data', () => {
    const product = { id: '1', name: 'Test Product', price: 99.99 };
    render(<ProductCard product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});
```

---
## Deployment
### Build Process
```bash
npm run build
npm run preview
```

### Deployment Options
- Netlify (connect repo → auto deploy)
- Vercel (instant preview envs)
- AWS S3 + CloudFront (static distribution)
- Docker + Nginx (containerized delivery)

### Docker Deployment
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---
## Contributing
### Development Workflow
1. Fork repository
2. Create branch: `feat/<short-description>`
3. Commit changes: `feat: add product sorting` (Conventional Commits)
4. Push & open Pull Request

### Code Standards
- TypeScript strict
- ESLint + Prettier
- Small, focused components
- Avoid unnecessary re-renders (selector usage with Zustand)

### Pull Request Process
1. Update docs if feature-facing
2. Add / adjust tests
3. Ensure `npm run lint` & `npm run build` succeed
4. Request review

---
## Roadmap
| Item | Status | Notes |
|------|--------|-------|
| Auth UI (login/register) | Planned | Awaiting backend endpoints |
| Server-Side Wishlist | Planned | Persist to user profile |
| Product Reviews Module | Planned | Requires backend schema |
| Stripe Checkout Flow | Planned | Integrate PaymentIntent API |
| Playwright E2E Tests | Planned | After auth & cart stable |
| Lighthouse CI Workflow | Planned | Performance regression gate |

---
## License
MIT. See [LICENSE](LICENSE).

---
## Acknowledgments
- React Team
- Tailwind CSS
- Lucide Icons
- Pexels (imagery)
- Vite Team

---
## Contact & Support
- **Author**: Istiaque Ahmed
- **Email**: iah.utshox@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/istiaque-ahmed-ish/
- **Upwork**: https://www.upwork.com/freelancers/~018048fec315a2a872
- **GitHub**: https://github.com/Utshox

---
## Notes
This repository currently focuses on the frontend portion of a potential Symfony-powered e-commerce platform. For multi-repo clarity consider:
- `symfony-ecommerce-api` (backend)
- `symfony-ecommerce-frontend` (this project)

> Built with ❤️ using React, TypeScript, and modern web architecture patterns.