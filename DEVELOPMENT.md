# Development Documentation

## Technical Stack

- React 18
- TypeScript
- SCSS Modules
- WordPress (backend)

## Component Structure

### Header

- Fixed positioning
- Navigation with smooth scroll
- Mobile-responsive menu

### Hero Section

- Full-height design
- Main value proposition
- Call-to-action buttons

### Services Section

- Grid layout
- Four main service categories
- Clean, scannable format

### Contact Section

- Contact information
- Professional profile links
- Location and availability
- QR code integration

## Implementation Details

### Styles

SCSS modules with the following structure:

- abstracts: variables, mixins, functions
- base: reset, typography, global styles
- components: component-specific styles

### Testing Strategy

1. Component Testing

   - Unit tests for each component
   - Integration tests for navigation
   - QR code functionality verification

2. Responsive Testing
   - Mobile optimization
   - Cross-browser compatibility
   - Print media queries

### Deployment

1. GitHub Pages

   - Automated deployment via GitHub Actions
   - Production build optimization

2. WordPress Integration
   - Current site moved to /studio
   - React app served from root
   - Routing configuration

## Development Workflow

1. Feature Development

   - Create feature branch
   - Implement and test locally
   - Submit pull request

2. Code Review Process

   - Automated testing
   - Manual review
   - Merge to main branch

3. Deployment Process
   - Automated build
   - GitHub Pages deployment
   - WordPress integration
