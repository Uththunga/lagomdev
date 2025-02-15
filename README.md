# LAGOM - Tote Bags

A modern e-commerce platform for LAGOM's premium tote bags, built with React, TypeScript, and Vite, featuring a comprehensive admin dashboard, custom order management, and seamless shopping experience.

## Tech Stack

- **Frontend Framework:** React 18.3.1 with TypeScript 5.5
- **Build Tool:** Vite 5.4
- **Styling:** TailwindCSS 3.4
- **UI Utilities:** clsx, tailwind-merge
- **Animations:** Framer Motion 11.0
- **Icons:** Lucide React
- **Form Handling:** React Hook Form 7.51
- **Deployment:** GitHub Pages

## Features

### Customer Features
- Product browsing with dynamic filtering
- Responsive shopping cart with mini-cart preview
- Custom order request system with multi-step form
- Craftsmanship showcase section
- Mobile-responsive navigation
- Animated UI transitions
- Payment method integration (Visa, Mastercard, Amex, PayPal)

### Admin Dashboard
- Real-time inventory management
- Order tracking and status updates
- Sales analytics with visual charts
- Product catalog management
- Low stock alert system
- Order processing workflow

### Technical Features
- TypeScript for enhanced type safety
- ESLint configuration with React Hooks plugin
- Responsive layouts using TailwindCSS
- Custom hooks for business logic
- Modular component architecture
- Optimized build process

## Project Structure

```
src/
├── components/
│   ├── admin/
│   │   ├── analytics/      # Sales and performance charts
│   │   ├── inventory/      # Stock management
│   │   ├── orders/        # Order processing
│   │   ├── products/      # Product management
│   │   └── shared/        # Shared admin components
│   ├── home/
│   │   ├── CustomOrders/  # Custom order workflow
│   │   ├── Hero/          # Landing section
│   │   └── ProductGrid/   # Product showcase
│   ├── layout/
│   │   ├── Header/        # Navigation and cart
│   │   └── Footer/        # Site footer
│   └── ui/                # Reusable UI components
├── context/               # React context providers
├── hooks/                # Custom React hooks
├── styles/               # Global styles
├── types/                # TypeScript definitions
└── utils/                # Utility functions
```

## Technical Architecture

### State Management
- Cart state managed through React Context with reducer pattern
- Typed actions for cart operations (ADD_TO_CART, etc.)
- Centralized state interfaces for type safety

### Type System
- Comprehensive TypeScript interfaces for:
    - Product management (name, price, description, category, stock)
    - Cart operations (items, total)
    - Custom order forms
- Strict type checking enabled
- Shared type definitions in `types/index.ts`

### Component Architecture
- Form-based components with React Hook Form integration
- Shared UI components with proper prop typing
- Admin dashboard with modular feature separation
- Cart functionality with mini-cart preview
- Custom order workflow with multi-step form validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Development Guidelines

- Follows TypeScript strict mode
- ESLint with React Hooks plugin for code quality
- Component-based architecture
- Custom hooks for business logic
- Utility-first CSS with TailwindCSS

## Performance Optimizations

- Code splitting with dynamic imports
- Image optimization
- CSS optimization with TailwindCSS
- React.memo for expensive components
- Efficient state management with Context API