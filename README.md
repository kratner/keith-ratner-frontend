# keithratner.live Project

Modern business landing page showcasing print and digital solution consulting services. Serves as primary digital presence with direct connection to printed materials via QR code.

Live at https://kratner.github.io/keith-ratner-frontend

## Project Overview

- React/TypeScript single-page application
- WordPress multisite integration
- Clean, professional design system
- Print-digital integration via QR codes

## Design System

### Typography

- Primary Font: Outfit (weights: 400, 500, 600, 700, 900)
- Font loading via Google Fonts

### Color Palette

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
```

## Project Structure

```
src/
├── components/
│   ├── Header/
│   └── Sections/
│       ├── Hero/
│       ├── Services/
│       └── Contact/
├── styles/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── _global.scss
│   └── components/
└── types/
```

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

4. Build for production:

```bash
npm run build
```

## Contact

Keith Ratner  
Print & Digital Solutions Consultant

- Email: keith.ratner@gmail.com
- Website: keithratner.live
- LinkedIn: [keithratner](https://www.linkedin.com/in/keithratner)
- GitHub: [kratner](https://github.com/kratner)
