# Development Documentation

## Project Overview

React/TypeScript frontend for keithratner.live, integrated with WordPress multisite installation.

## Architecture

### Frontend Structure

```
src/
├── components/
│   ├── Header/           # Site navigation
│   └── Sections/         # Main page sections
│       ├── Hero/         # Landing section
│       ├── Services/     # Services grid
│       └── Contact/      # Contact information
├── styles/               # SCSS modules
│   ├── abstracts/        # Variables, mixins
│   ├── base/            # Reset, typography
│   └── components/      # Component styles
└── types/               # TypeScript definitions
```

### Component Documentation

#### Header

- Fixed position navigation
- Smooth scroll navigation links
- External link to WordPress site (/studio)
- Mobile responsive

#### Hero

- Full-screen landing section
- Primary value proposition
- Call-to-action buttons
- Responsive typography

#### Services

- Four-column grid layout
- Service categories
- List-based content structure
- Responsive grid system

#### Contact

- Contact information display
- Professional profile links
- Location information
- External link handling

### Styling System

#### Variables

```scss
$colors: (
  "primary": #1a365d,
  "primary-light": #2b6cb0,
  "text": #4a5568,
  "text-light": #718096,
  "background": #ffffff,
  "background-alt": #f8fafc,
  "border": #e2e8f0,
);

$font-families: (
  "display": (
    "Outfit",
    -apple-system,
    ...,
  ),
  "body": (
    "Outfit",
    -apple-system,
    ...,
  ),
);
```

#### Typography

- Primary Font: Outfit (400, 500, 600, 700, 900)
- Responsive scaling
- Section-specific hierarchies

### Testing

#### Component Tests

Each component has associated tests verifying:

- Render functionality
- Content presence
- Link functionality
- Navigation elements
- Responsive behavior

#### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test Header.test.tsx

# Update snapshots
npm test -- -u
```

### WordPress Integration

#### Site Structure

- React app served at root (keithratner.live)
- WordPress multisite at /studio
- NS Cloner used for site migration

#### Configuration

```apache
# .htaccess configuration
RewriteEngine On

# WordPress at /studio
RewriteCond %{REQUEST_URI} ^/studio/
RewriteRule ^studio/(.*)$ /studio/index.php [L]

# React app at root
RewriteCond %{REQUEST_URI} !^/studio/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

### Development Workflow

#### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Create production build
npm run build
```

#### Testing

```bash
# Run tests
npm test

# Check test coverage
npm test -- --coverage
```

#### Deployment

```bash
# Build for production
npm run build

# Deploy to server
# Copy build files to web root
# Ensure .htaccess is configured
```

### Best Practices

1. Component Structure

   - Functional components with TypeScript
   - Props interface definitions
   - Clear component responsibilities

2. Styling

   - SCSS modules for component styles
   - BEM methodology for class names
   - Responsive design patterns

3. Testing q

   - Component unit tests
   - Integration tests for navigation
   - Accessibility testing

4. Code Quality
   - TypeScript strict mode
   - ESLint configuration
   - Prettier formatting
