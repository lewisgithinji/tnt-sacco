# TNT SACCO - Corporate Website

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

Professional corporate website for **Trans-National Times DT SACCO Limited** (TNT SACCO), a deposit-taking SACCO offering competitive savings accounts, affordable loans, mortgages, and comprehensive financial services to Kenyan families and businesses.

🌐 **Live Site**: [https://www.tntsacco.co.ke](https://www.tntsacco.co.ke)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Security](#-security)
- [Contributing](#-contributing)
- [Credits](#-credits)

---

## ✨ Features

### Core Functionality
- **Product Showcase**: Comprehensive display of deposit products, loan products, and insurance services
- **Interactive Loan Calculator**: Real-time loan calculations with reducing balance method
- **Tenders Management**: Public tender announcements with document downloads and tracking
- **Communication Hub**: News, announcements, and updates categorized by topic
- **Media Center**: Photo gallery, videos, and press releases
- **Downloads Center**: Annual reports, policies, and membership forms

### User Experience
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Maps**: Branch location with Leaflet integration
- **Dark Mode Support**: Theme switching capability
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support

### Technical Features
- **XSS Protection**: DOMPurify integration for HTML sanitization
- **Security Headers**: HSTS, CSP, and Permissions-Policy configured
- **Performance Optimized**: Code splitting, lazy loading, and asset optimization
- **Type Safety**: Full TypeScript implementation
- **Zero Vulnerabilities**: Regular security audits and dependency updates

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 7.2.4** - Build tool and dev server
- **React Router 6.26.2** - Client-side routing

### UI Components & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Shadcn UI** - Re-usable component library
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Forms & Validation
- **React Hook Form 7.53.0** - Form state management
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Maps & Location
- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 4.2.1** - React bindings for Leaflet
- **Mapbox GL 3.14.0** - Advanced mapping features

### Utilities
- **date-fns 3.6.0** - Date manipulation
- **DOMPurify 3.3.0** - XSS protection
- **React Helmet Async 2.0.5** - Document head management
- **TanStack Query 5.56.2** - Server state management

### Development Tools
- **ESLint 9.9.0** - Code linting
- **TypeScript ESLint 8.0.1** - TypeScript-specific linting
- **PostCSS & Autoprefixer** - CSS processing

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher ([Download](https://nodejs.org/))
- **npm**: v9.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

Optional:
- **nvm** (Node Version Manager) for managing Node.js versions ([Install](https://github.com/nvm-sh/nvm))

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/lewisgithinji/tnt-sacco.git
cd tnt-sacco
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory by copying the example file:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# Mapbox API Token (for map features)
VITE_MAPBOX_TOKEN=your_mapbox_token_here

# API Base URL (if backend is added)
VITE_API_URL=http://localhost:8080

# Application Environment
VITE_ENV=development
```

> **Note**: Never commit `.env` files to version control. The `.gitignore` is configured to prevent this.

---

## 🏃 Running the Project

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:8080
- **Network**: http://[your-ip]:8080

### Production Build

Build the application for production:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```text
tnt-sacco/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (Shadcn)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   ├── AboutUs.tsx
│   │   ├── LoanProducts.tsx
│   │   ├── Tenders.tsx
│   │   └── ...
│   ├── data/              # Static data and content
│   │   └── articles.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── App.tsx            # Main app component with routes
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── netlify.toml           # Netlify deployment config
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

### Key Directories

- **`src/components/`**: Reusable React components
- **`src/pages/`**: Page-level components (routes)
- **`src/data/`**: Static content (articles, products, FAQs)
- **`src/components/ui/`**: Shadcn UI components
- **`dist/`**: Production build output (generated)

---

## 🔐 Environment Variables

The following environment variables are supported:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_MAPBOX_TOKEN` | Mapbox API token for map features | Optional | - |
| `VITE_API_URL` | Backend API base URL (if applicable) | Optional | - |
| `VITE_ENV` | Application environment | Optional | `development` |

> **Security Note**: All environment variables prefixed with `VITE_` are exposed to the client-side code. Never store sensitive secrets in these variables.

---

## 🚢 Deployment

The project is configured for deployment on **Netlify** with automated builds from the `main` branch.

### Netlify Deployment

The site is deployed at: **https://www.tntsacco.co.ke**

#### Deploy from GitHub

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

#### Manual Deployment

```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

### Security Headers

The `netlify.toml` file includes comprehensive security headers:

- **HSTS** (Strict-Transport-Security)
- **CSP** (Content-Security-Policy)
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restricts camera, microphone, geolocation, payment APIs

---

## 🔒 Security

This project follows security best practices:

### Current Security Status

✅ **Zero npm vulnerabilities** (regularly audited)
✅ **XSS Protection**: DOMPurify sanitization
✅ **Security Headers**: HSTS, CSP, Permissions-Policy
✅ **Environment Protection**: `.env` files gitignored
✅ **Type Safety**: Full TypeScript coverage
✅ **HTTPS**: Enforced via Netlify

### Security Auditing

Run security audit:

```bash
npm audit
```

Check for outdated packages:

```bash
npm outdated
```

Update dependencies:

```bash
npm update
```

### Reporting Security Issues

If you discover a security vulnerability, please email: **info@tntsacco.co.ke**

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'Add some feature'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Submit** a pull request

### Code Standards

- Follow TypeScript best practices
- Use ESLint for code linting
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

### Commit Message Format

```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
style: Format code
refactor: Refactor code structure
test: Add tests
chore: Update dependencies
```

---

## 📄 License

This project is proprietary software owned by **Trans-National Times DT SACCO Limited**.
All rights reserved. Unauthorized copying, distribution, or modification is prohibited.

For licensing inquiries, contact: **info@tntsacco.co.ke**

---

## 👥 Credits

### Development

**SirLewis** - Lead Developer & Software Architect
[https://sirlewis.pages.dev/](https://sirlewis.pages.dev/)

### Client & Domain Expertise

**Datacare Solutions** - Information Management Specialists
[https://datacare.co.ke](https://datacare.co.ke)

### Organization

**Trans-National Times DT SACCO Limited**
Teachers Plaza, Ground Floor
P.O. Box 2274 - 30200, Kitale, Kenya
📞 +254 111 050 510 | +254 712 585874
📧 info@tntsacco.co.ke | tntsacco@yahoo.com
🌐 [https://www.tntsacco.co.ke](https://www.tntsacco.co.ke)

---

## 📞 Support

For technical support or inquiries:

- **Email**: info@tntsacco.co.ke
- **Phone**: +254 111 050 510
- **Address**: Teachers Plaza, Ground Floor, Kitale

---

<div align="center">

**Built with ❤️ by Datacare Solutions**

[Website](https://datacare.co.ke) • [GitHub](https://github.com/lewisgithinji)

</div>
