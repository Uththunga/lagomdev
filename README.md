# LAGOM - Tote Bags

A modern e-commerce platform for LAGOM's premium tote bags, built with React, TypeScript, and Vite, featuring a comprehensive admin dashboard, custom order management, and seamless shopping experience.

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Database:** Supabase
- **State Management:** React Context
- **Form Handling:** React Hook Form
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Features

### Customer Features
- Product browsing and filtering
- Shopping cart functionality
- Custom order requests
- Collections showcase
- Responsive design
- Animated UI components

### Admin Dashboard
- Inventory management
- Order tracking and management
- Sales analytics
- Product management
- Low stock alerts
- Order status updates

### Technical Features
- TypeScript for type safety
- ESLint configuration for code quality
- Responsive layouts with TailwindCSS
- Database migrations with Supabase
- Custom hooks for business logic
- Modular component architecture

## Project Structure

```
src/
├── components/          # UI components
│   ├── admin/          # Admin dashboard components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components
│   └── ui/             # Reusable UI components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── styles/             # Global styles and animations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

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

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

The project uses:
- ESLint for code linting
- TypeScript for type checking
- TailwindCSS for styling
- Vite for fast development and building

## Performance Optimizations

- Component code splitting
- Optimized image loading
- Efficient state management
- Tailwind for CSS optimization