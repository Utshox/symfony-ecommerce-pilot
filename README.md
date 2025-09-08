# TechMart - Modern E-commerce Frontend

> A comprehensive e-commerce frontend application built with React, TypeScript, and modern web technologies. This pilot project demonstrates advanced frontend development patterns and serves as a foundation for integration with Symfony PHP backend APIs.

![TechMart Preview](https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg)

## 🚀 Live Demo

Experience the application: [View Live Demo](#)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Design System](#design-system)
- [Performance](#performance)
- [Testing Strategy](#testing-strategy)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

TechMart is a modern, responsive e-commerce frontend application designed to showcase best practices in React development. Built as a pilot project, it demonstrates enterprise-level code organization, state management, and user experience design patterns that would integrate seamlessly with a Symfony PHP backend.

### Key Highlights

- **Production-Ready**: Clean, maintainable code following industry standards
- **Type-Safe**: Full TypeScript implementation with comprehensive type definitions
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle size
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation support
- **Modern UX**: Smooth animations, micro-interactions, and intuitive user flows

## ✨ Features

### 🛍️ Core E-commerce Functionality

- **Product Catalog**
  - Advanced search with real-time filtering
  - Category-based navigation
  - Price range filtering
  - Brand and rating filters
  - Sort by price, rating, name, and popularity

- **Shopping Cart**
  - Persistent cart state across sessions
  - Quantity management with validation
  - Real-time price calculations
  - Tax and shipping calculations
  - Clear cart functionality

- **Product Management**
  - Detailed product pages with image galleries
  - Product specifications and features
  - Stock availability tracking
  - Related products suggestions
  - Product reviews and ratings

- **User Experience**
  - Wishlist functionality
  - Dark/light theme switching
  - Responsive design for all devices
  - Loading states and error handling
  - Toast notifications for user actions

### 🎨 Design & UI Features

- **Modern Interface**
  - Clean, minimalist design
  - Consistent color system and typography
  - Smooth animations and transitions
  - Hover effects and micro-interactions
  - Professional card-based layouts

- **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimizations
  - Flexible grid systems
  - Touch-friendly interactions
  - Optimized images and assets

## 🛠️ Technology Stack

### Frontend Core
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation

### State Management
- **Zustand** - Lightweight state management with persistence
- **React Hooks** - Built-in state management for component-level state

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **CSS Grid & Flexbox** - Advanced layout systems
- **Custom CSS** - Animations and advanced styling

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Build & Deployment
- **Vite Build** - Optimized production builds
- **Code Splitting** - Automatic bundle optimization
- **Tree Shaking** - Dead code elimination
- **Asset Optimization** - Image and resource optimization

## 🏗️ Architecture

### Component Architecture

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components (Header, Footer)
│   ├── Product/         # Product-related components
│   ├── Home/            # Homepage-specific components
│   └── UI/              # Generic UI components
├── pages/               # Page-level components
├── store/               # State management
├── types/               # TypeScript type definitions
├── data/                # Mock data and constants
└── utils/               # Utility functions
```

### State Management Pattern

The application uses Zustand for global state management with the following stores:

- **Cart Store**: Shopping cart state and operations
- **User Store**: Authentication and user preferences
- **UI Store**: Theme, search, and filter states
- **Wishlist Store**: Saved products functionality

### Data Flow

```
User Interaction → Component → Store Action → State Update → UI Re-render
```

### Component Patterns

- **Container/Presentational**: Separation of logic and presentation
- **Custom Hooks**: Reusable stateful logic
- **Compound Components**: Complex component composition
- **Render Props**: Flexible component patterns

## 📁 Project Structure

```
techmart/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx     # Navigation and search
│   │   │   └── Footer.tsx     # Site footer with links
│   │   ├── Product/
│   │   │   ├── ProductCard.tsx    # Product display card
│   │   │   ├── ProductGrid.tsx    # Product grid layout
│   │   │   └── ProductFilters.tsx # Search and filter UI
│   │   └── Home/
│   │       ├── Hero.tsx           # Homepage hero section
│   │       ├── Categories.tsx     # Category navigation
│   │       └── FeaturedProducts.tsx # Featured products
│   ├── pages/
│   │   ├── Home.tsx          # Homepage
│   │   ├── Products.tsx      # Product catalog
│   │   ├── ProductDetail.tsx # Individual product page
│   │   └── Cart.tsx          # Shopping cart
│   ├── store/
│   │   └── useStore.ts       # Zustand store configuration
│   ├── types/
│   │   └── index.ts          # TypeScript definitions
│   ├── data/
│   │   └── products.ts       # Mock product data
│   └── utils/
│       └── helpers.ts        # Utility functions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techmart-frontend.git
   cd techmart-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🔌 API Integration

### Symfony Backend Integration

This frontend is designed to integrate with a Symfony PHP backend. Here's how to connect the APIs:

#### Product API Endpoints

```typescript
// Product service integration
const API_BASE = 'https://your-symfony-api.com/api';

// GET /api/products - Fetch products with filters
// GET /api/products/{id} - Get single product
// GET /api/categories - Fetch categories
// POST /api/cart/add - Add item to cart
// PUT /api/cart/update - Update cart item
// DELETE /api/cart/remove - Remove cart item
```

#### Authentication Integration

```typescript
// User authentication endpoints
// POST /api/auth/login - User login
// POST /api/auth/register - User registration
// POST /api/auth/logout - User logout
// GET /api/user/profile - Get user profile
```

#### Example API Service

```typescript
// services/api.ts
export class ApiService {
  private baseUrl = process.env.VITE_API_URL;

  async getProducts(filters?: ProductFilters) {
    const response = await fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async addToCart(productId: string, quantity: number) {
    const response = await fetch(`${this.baseUrl}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity }),
    });
    return response.json();
  }
}
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--blue-50: #eff6ff;
--blue-500: #3b82f6;
--blue-600: #2563eb;
--blue-700: #1d4ed8;

/* Secondary Colors */
--purple-500: #8b5cf6;
--purple-600: #7c3aed;

/* Accent Colors */
--green-500: #10b981;
--red-500: #ef4444;
--yellow-500: #f59e0b;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-500: #6b7280;
--gray-900: #111827;
```

### Typography Scale

```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing System

Based on 8px grid system:
- `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px`

### Component Variants

```typescript
// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

// Card variants  
type CardVariant = 'default' | 'featured' | 'compact';

// Input variants
type InputVariant = 'default' | 'error' | 'success';
```

## ⚡ Performance

### Optimization Strategies

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Service worker for offline functionality

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

### Monitoring

```typescript
// Performance monitoring setup
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🧪 Testing Strategy

### Testing Pyramid

1. **Unit Tests**: Component logic and utilities
2. **Integration Tests**: Component interactions
3. **E2E Tests**: User workflows and scenarios

### Recommended Testing Tools

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
```

### Example Test Structure

```typescript
// ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('displays product information correctly', () => {
    const mockProduct = {
      id: '1',
      name: 'Test Product',
      price: 99.99,
      // ... other properties
    };

    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});
```

## 🚀 Deployment

### Build Process

```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

### Deployment Options

1. **Netlify**: Automatic deployments from Git
2. **Vercel**: Zero-config deployments
3. **AWS S3 + CloudFront**: Scalable static hosting
4. **Docker**: Containerized deployment

### Environment Variables

```bash
# .env.production
VITE_API_URL=https://your-symfony-api.com/api
VITE_APP_NAME=TechMart
VITE_STRIPE_PUBLIC_KEY=pk_live_...
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format

### Pull Request Process

1. Update documentation for any new features
2. Add tests for new functionality
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review from maintainers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Pexels** - For the high-quality stock images
- **Vite Team** - For the lightning-fast build tool

## 📞 Contact & Support

- **Author**: Your Name
- **Email**: iah.utshox@gmail.com
- **LinkedIn**: [LinkedIn Profile]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/istiaque-ahmed-ish/))
- **Portfolio**: [Upwork]([https://yourportfolio.com](https://www.upwork.com/freelancers/~018048fec315a2a872))

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

> This pilot project demonstrates enterprise-level frontend development practices and serves as a foundation for building scalable e-commerce applications with Symfony PHP backends.
