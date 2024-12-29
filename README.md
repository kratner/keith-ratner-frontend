# Keith Ratner Portfolio Site

This is the React/TypeScript frontend for keithratner.live, a professional portfolio site that integrates with WordPress multisite installation.

## Project Overview

- Single-page React application built with TypeScript
- Modern SCSS-based styling system
- Responsive design
- WordPress multisite integration

## Technical Stack

- React 18
- TypeScript
- SCSS Modules
- WordPress (backend)

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/kratner/keith-ratner-frontend.git
cd keith-ratner-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

## Project Structure

```
src/
├── components/            # React components
│   ├── Header/           # Site header
│   └── Sections/         # Main page sections
├── styles/               # SCSS styles
│   ├── abstracts/        # Variables, mixins, functions
│   ├── base/            # Base styles, typography, reset
│   └── components/      # Component-specific styles
└── types/               # TypeScript type definitions
```

## Build and Deployment

To build the project:

```bash
npm run build
```

## Testing

Run the test suite:

```bash
npm test
```

## WordPress Integration

This frontend is designed to work with a WordPress multisite installation at keithratner.live, with the main site content moved to /studio subdirectory.

## Author

Keith Ratner

- Email: keith.ratner@gmail.com
- GitHub: [kratner](https://github.com/kratner)
- LinkedIn: [keithratner](https://www.linkedin.com/in/keithratner)

## License

All rights reserved.
