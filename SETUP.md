# LAGOM - Development Setup Guide

## Prerequisites
- Node.js (v18.3.1 or higher)
- npm (v9.0.0 or higher)
- Git

## Environment Setup

### 1. Clone and Install
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=your_api_url
```

### 3. Supabase Setup
1. Create a Supabase project
2. Set up the following tables:
   - products
   - orders
   - inventory
   - custom_orders
3. Enable authentication
4. Configure storage buckets for images

### 4. Development Server
```bash
# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Development Guidelines

### Code Style
- Follow TypeScript strict mode
- Use ESLint for code linting
- Follow component-based architecture
- Implement proper type definitions

### Git Workflow
1. Create feature branch
2. Make changes
3. Run tests
4. Create pull request

### Testing
- Write unit tests for components
- Add integration tests
- Perform E2E testing
- Test responsive design

### Performance
- Optimize images
- Implement code splitting
- Use React.memo where needed
- Monitor bundle size

## Troubleshooting

### Common Issues
1. **Environment Variables**: Ensure all env variables are set
2. **Build Errors**: Clear cache and node_modules
3. **Type Errors**: Check TypeScript configuration

### Support
- Check documentation
- Review existing issues
- Create detailed bug reports