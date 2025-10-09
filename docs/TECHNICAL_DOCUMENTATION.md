# Technical Documentation
## TNT SACCO Portal

---

## Table of Contents
1. [Architecture Overview](#1-architecture-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Component Architecture](#4-component-architecture)
5. [Routing System](#5-routing-system)
6. [State Management](#6-state-management)
7. [Styling System](#7-styling-system)
8. [Key Features Implementation](#8-key-features-implementation)
9. [Build & Deployment](#9-build--deployment)
10. [Development Guidelines](#10-development-guidelines)
11. [Performance Optimization](#11-performance-optimization)
12. [Security Considerations](#12-security-considerations)
13. [Testing Strategy](#13-testing-strategy)
14. [Troubleshooting](#14-troubleshooting)

---

## 1. Architecture Overview

### 1.1 Application Architecture
The TNT SACCO Portal is a **Single Page Application (SPA)** built using modern React patterns and practices.

```
┌─────────────────────────────────────────────┐
│           Browser (Client Side)             │
├─────────────────────────────────────────────┤
│  React 18 + TypeScript                      │
│  ├── React Router (Client-Side Routing)     │
│  ├── React Query (Data Management)          │
│  ├── shadcn/ui (Component Library)          │
│  └── Tailwind CSS (Styling)                 │
├─────────────────────────────────────────────┤
│  External Services                          │
│  ├── Mapbox GL (Maps)                       │
│  └── Google Fonts (Typography)              │
└─────────────────────────────────────────────┘
```

### 1.2 Design Patterns Used
- **Component-Based Architecture**: Modular, reusable UI components
- **Composition Pattern**: Building complex UIs from simple components
- **Presentational vs Container Components**: Separation of concerns
- **Custom Hooks**: Reusable stateful logic
- **Provider Pattern**: Global state and context management

---

## 2. Technology Stack

### 2.1 Core Technologies

#### Frontend Framework
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.5.3"
}
```

**Why React 18?**
- Concurrent rendering for better performance
- Automatic batching for fewer re-renders
- Improved Suspense support
- Server Components ready (future migration)

#### Build Tool
```json
{
  "vite": "^5.4.1",
  "@vitejs/plugin-react-swc": "^3.5.0"
}
```

**Why Vite?**
- Lightning-fast Hot Module Replacement (HMR)
- Optimized production builds
- Native ES modules support
- Smaller bundle sizes compared to Webpack

### 2.2 UI & Styling

#### Component Library
```json
{
  "@radix-ui/react-*": "^1.x.x",
  "lucide-react": "^0.462.0"
}
```

**shadcn/ui Philosophy**:
- Copy components directly into project (no package dependency)
- Built on Radix UI primitives (accessibility-first)
- Customizable through Tailwind CSS
- Type-safe with TypeScript

#### Styling Framework
```json
{
  "tailwindcss": "^3.4.11",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^2.5.2",
  "clsx": "^2.1.1"
}
```

**Styling Approach**:
- Utility-first CSS with Tailwind
- Custom design tokens in `tailwind.config.ts`
- CVA for variant-based component styling
- clsx/tailwind-merge for conditional classes

### 2.3 Routing & Navigation
```json
{
  "react-router-dom": "^6.26.2"
}
```

**Routing Features**:
- Client-side routing (no page reloads)
- Nested routes support
- Dynamic routes with parameters
- Programmatic navigation
- ScrollToTop component for UX

### 2.4 Data Management
```json
{
  "@tanstack/react-query": "^5.56.2"
}
```

**React Query Benefits**:
- Automatic caching and background refetching
- Loading and error state management
- Optimistic updates
- Query invalidation
- Reduced boilerplate

### 2.5 Form Handling
```json
{
  "react-hook-form": "^7.53.0",
  "@hookform/resolvers": "^3.9.0",
  "zod": "^3.23.8"
}
```

**Form Strategy**:
- React Hook Form for performance (minimal re-renders)
- Zod for schema validation
- Type-safe form data
- Built-in error handling

### 2.6 Additional Libraries

#### Maps
```json
{
  "mapbox-gl": "^3.14.0"
}
```

#### Date Handling
```json
{
  "date-fns": "^3.6.0",
  "react-day-picker": "^8.10.1"
}
```

#### UI Enhancements
```json
{
  "sonner": "^1.5.0",           // Toast notifications
  "cmdk": "^1.0.0",             // Command palette
  "embla-carousel-react": "^8.3.0",  // Carousels
  "recharts": "^2.12.7",        // Charts
  "vaul": "^0.9.3"              // Drawers
}
```

---

## 3. Project Structure

### 3.1 Directory Organization

```
kenyan-sacco-portal/
├── public/                      # Static assets
│   ├── favicon.svg
│   └── og-image.jpg
│
├── src/
│   ├── assets/                  # Images and media
│   │   ├── board/              # Board member photos
│   │   ├── staff/              # Staff photos
│   │   └── tnt-sacco-logo*.png # Brand assets
│   │
│   ├── components/              # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (40+ components)
│   │   │
│   │   ├── Chatbot.tsx         # AI chatbot
│   │   ├── Contact.tsx         # Contact form
│   │   ├── EnhancedStaffProfiles.tsx
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Header.tsx          # Site header/nav
│   │   ├── Hero.tsx            # Homepage hero
│   │   ├── InteractiveTeamCard.tsx
│   │   ├── LoanCalculator.tsx  # Loan calculator
│   │   ├── Map.tsx             # Mapbox integration
│   │   ├── NewsSection.tsx     # News display
│   │   ├── ProductsSection.tsx # Product showcase
│   │   ├── ScrollToTop.tsx     # Scroll utility
│   │   ├── Services.tsx        # Services section
│   │   └── UssdSection.tsx     # USSD info
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   └── use-toast.ts        # Toast notifications
│   │
│   ├── lib/                     # Utility functions
│   │   └── utils.ts            # Helper functions
│   │
│   ├── pages/                   # Route pages
│   │   ├── Index.tsx           # Homepage
│   │   ├── ArticlePage.tsx     # Dynamic article
│   │   ├── BoardOfDirectors.tsx
│   │   ├── CommunicationHub.tsx
│   │   ├── CookiePolicy.tsx
│   │   ├── DepositProducts.tsx
│   │   ├── Downloads.tsx
│   │   ├── FAQ.tsx
│   │   ├── LoanProducts.tsx
│   │   ├── ManagementStaff.tsx
│   │   ├── MediaCenter.tsx
│   │   ├── NotFound.tsx        # 404 page
│   │   ├── PrivacyPolicy.tsx
│   │   └── TermsOfService.tsx
│   │
│   ├── App.css                  # Global styles
│   ├── App.tsx                  # Root component
│   ├── index.css                # Tailwind imports
│   └── main.tsx                 # Entry point
│
├── docs/                        # Documentation
│   ├── PRD.md                  # Product requirements
│   └── TECHNICAL_DOCUMENTATION.md
│
├── components.json              # shadcn/ui config
├── eslint.config.js            # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── tsconfig.app.json           # App TS config
├── tsconfig.node.json          # Node TS config
└── vite.config.ts              # Vite configuration
```

### 3.2 File Naming Conventions

- **Components**: PascalCase (e.g., `LoanCalculator.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `use-toast.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Pages**: PascalCase (e.g., `DepositProducts.tsx`)
- **Styles**: kebab-case (e.g., `index.css`)
- **Types**: PascalCase with `.ts` extension
- **Constants**: UPPER_SNAKE_CASE

---

## 4. Component Architecture

### 4.1 Component Hierarchy

```
App.tsx
├── QueryClientProvider (React Query)
├── TooltipProvider (UI context)
├── Toaster & Sonner (Notifications)
└── BrowserRouter (Routing)
    ├── ScrollToTop (Utility)
    └── Routes
        ├── Index (Homepage)
        │   ├── Header
        │   ├── Hero
        │   ├── Services
        │   ├── ProductsSection
        │   ├── UssdSection
        │   ├── LoanCalculator
        │   ├── NewsSection
        │   ├── Contact
        │   ├── Map
        │   ├── Footer
        │   └── Chatbot
        │
        ├── DepositProducts
        │   ├── Header
        │   ├── Product Cards (Grid)
        │   └── Footer
        │
        ├── LoanProducts
        │   ├── Header
        │   ├── Loan Cards (Grid)
        │   └── Footer
        │
        └── ... (other pages)
```

### 4.2 Component Categories

#### 1. Layout Components
**Purpose**: Structural components that define page layout

- **Header.tsx**: Site navigation, logo, mobile menu
- **Footer.tsx**: Footer links, contact info, social media
- **ScrollToTop.tsx**: Scroll restoration utility

**Example Pattern**:
```tsx
// Header component structure
export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav>
        {/* Logo, navigation links, mobile menu */}
      </nav>
    </header>
  );
};
```

#### 2. Page Components
**Purpose**: Top-level route components

- Located in `src/pages/`
- Compose multiple components
- Handle page-specific logic
- Include SEO meta tags (via Helmet or similar)

**Example Pattern**:
```tsx
// DepositProducts.tsx
const DepositProducts = () => {
  const products = [...]; // Product data

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
};
```

#### 3. Feature Components
**Purpose**: Complex, self-contained features

**LoanCalculator.tsx**:
```tsx
export const LoanCalculator = () => {
  // State management
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [interestRate, setInterestRate] = useState<string>("12");
  const [loanTerm, setLoanTerm] = useState<string>("24");

  // Calculation logic
  const calculateMonthlyPayment = () => {
    // Loan amortization formula
  };

  return (
    <section>
      {/* Calculator form and results */}
    </section>
  );
};
```

**Chatbot.tsx**:
```tsx
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([...]);
  const [isTyping, setIsTyping] = useState(false);

  // NLP matching algorithm
  const findBestMatch = (userInput: string): FAQ | null => {
    // Keyword matching logic
  };

  return (
    <>
      {/* Floating button and chat window */}
    </>
  );
};
```

#### 4. UI Components (shadcn/ui)
**Purpose**: Reusable, accessible UI primitives

Located in `src/components/ui/`:
- **button.tsx**: Button variants and sizes
- **card.tsx**: Card layouts
- **input.tsx**: Form inputs
- **dialog.tsx**: Modal dialogs
- **select.tsx**: Dropdown selects
- **toast.tsx**: Notifications
- And 40+ more components

**Component Pattern**:
```tsx
// Button component example
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input",
        ghost: "hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### 4.3 Component Best Practices

#### Composition Over Inheritance
```tsx
// Good: Composition
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Avoid: Complex props drilling
<Card title="Title" content="Content" showHeader={true} />
```

#### Single Responsibility
```tsx
// Good: Focused component
const LoanProductCard = ({ product }) => {
  return <Card>{/* Product display only */}</Card>;
};

// Avoid: Too many responsibilities
const LoanSection = () => {
  // Fetching, filtering, sorting, display all in one
};
```

#### TypeScript Types
```tsx
// Always define prop types
interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features,
  icon
}) => {
  // Component implementation
};
```

---

## 5. Routing System

### 5.1 Route Configuration

**Location**: `src/App.tsx`

```tsx
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    {/* Static routes */}
    <Route path="/" element={<Index />} />
    <Route path="/downloads" element={<Downloads />} />
    <Route path="/faq" element={<FAQ />} />

    {/* Commented out (temporarily disabled) */}
    {/* <Route path="/management-staff" element={<ManagementStaff />} /> */}
    {/* <Route path="/board-of-directors" element={<BoardOfDirectors />} /> */}

    {/* Dynamic routes */}
    <Route path="/communication-hub" element={<CommunicationHub />} />
    <Route path="/communication-hub/:slug" element={<ArticlePage />} />

    {/* Product pages */}
    <Route path="/deposit-products" element={<DepositProducts />} />
    <Route path="/loan-products" element={<LoanProducts />} />

    {/* Legal pages */}
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />

    {/* 404 catch-all (MUST be last) */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### 5.2 Routing Patterns

#### Static Routes
```tsx
// Simple page routing
<Route path="/faq" element={<FAQ />} />
```

#### Dynamic Routes
```tsx
// Route with URL parameter
<Route path="/communication-hub/:slug" element={<ArticlePage />} />

// Access parameter in component
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  // Use slug to fetch article data
};
```

#### Programmatic Navigation
```tsx
import { useNavigate } from 'react-router-dom';

const Component = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/deposit-products');
  };

  return <button onClick={handleClick}>View Products</button>;
};
```

#### Link Components
```tsx
import { Link } from 'react-router-dom';

<Link to="/loan-products" className="text-primary hover:underline">
  View Loan Products
</Link>
```

### 5.3 Scroll Behavior

**ScrollToTop Component**:
```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

**Purpose**: Restores scroll position to top on route change (SPA default behavior doesn't do this).

---

## 6. State Management

### 6.1 State Management Patterns

#### Local Component State
```tsx
// Using useState for component-specific state
const [isOpen, setIsOpen] = useState(false);
const [inputValue, setInputValue] = useState('');
```

#### Form State (React Hook Form)
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Handle form submission
  };
};
```

#### Server State (React Query)
```tsx
import { useQuery } from '@tanstack/react-query';

const NewsSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage />;

  return <div>{/* Render news */}</div>;
};
```

#### Global State (Context API)
```tsx
// For theme, user preferences, etc.
import { createContext, useContext } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### 6.2 Custom Hooks

**use-toast.ts**:
```tsx
import { useState } from "react";

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant }) => {
    // Add toast to state
  };

  return { toast, toasts };
};
```

**use-mobile.tsx**:
```tsx
import { useEffect, useState } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
```

---

## 7. Styling System

### 7.1 Tailwind Configuration

**Location**: `tailwind.config.ts`

```typescript
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        navy: 'hsl(var(--navy))',
        yellow: 'hsl(var(--yellow))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        // ... more colors
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
```

### 7.2 CSS Variables

**Location**: `src/index.css`

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --navy: 220 90% 20%;
    --yellow: 45 93% 47%;
    --primary: 220 90% 20%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode overrides */
  }
}
```

### 7.3 Utility Functions

**Location**: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage**:
```tsx
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
  Content
</div>
```

### 7.4 Styling Patterns

#### Responsive Design
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid: 1 col mobile, 2 tablet, 3 desktop */}
</div>
```

#### Hover and Focus States
```tsx
<Button className="hover:bg-primary/90 focus:ring-2 focus:ring-primary">
  Click Me
</Button>
```

#### Conditional Classes
```tsx
<div className={cn(
  "base-styles",
  isOpen && "open-styles",
  variant === "large" && "large-styles"
)}>
  Content
</div>
```

#### Animation Classes
```tsx
<div className="animate-fade-in">
  Fades in on mount
</div>

<div className="hover:animate-scale-in">
  Scales on hover
</div>
```

---

## 8. Key Features Implementation

### 8.1 Loan Calculator

**Location**: `src/components/LoanCalculator.tsx`

**Algorithm**: Amortization formula
```typescript
const calculateMonthlyPayment = () => {
  const principal = parseFloat(loanAmount);
  const monthlyRate = parseFloat(interestRate) / 100 / 12;
  const numberOfPayments = parseFloat(loanTerm);

  if (principal && monthlyRate && numberOfPayments) {
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment;
  }
  return 0;
};
```

**Features**:
- Real-time calculation updates
- Multiple loan types with preset rates
- Visual summary of total costs
- Kenyan Shilling (KSh) formatting
- Responsive two-column layout

**Future Enhancements**:
- Amortization schedule table
- Export to PDF
- Save calculations
- Compare multiple loans

### 8.2 AI Chatbot

**Location**: `src/components/Chatbot.tsx`

**NLP Algorithm**: Keyword matching with scoring
```typescript
const findBestMatch = (userInput: string): FAQ | null => {
  const input = userInput.toLowerCase();
  let bestMatch: FAQ | null = null;
  let maxScore = 0;

  faqs.forEach(faq => {
    let score = 0;
    faq.keywords.forEach(keyword => {
      if (input.includes(keyword.toLowerCase())) {
        score += keyword.length; // Longer matches = higher score
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = faq;
    }
  });

  return maxScore > 0 ? bestMatch : null;
};
```

**Features**:
- 10 predefined FAQ categories
- Quick reply buttons for common questions
- Typing indicator for natural feel
- Fallback to human support
- Query logging (console, can be sent to email)
- Smooth animations
- Mobile-responsive chat window

**FAQ Categories**:
1. Services overview
2. Membership process
3. Loan products
4. Processing times
5. Branch locations
6. Dividend information
7. Contact methods
8. Operating hours
9. Account requirements
10. Balance checking

**Future Enhancements**:
- Integration with GPT/Claude API for better NLP
- Sentiment analysis
- Multi-language support (Swahili)
- Chat history persistence
- Admin dashboard for common queries

### 8.3 Map Integration

**Location**: `src/components/Map.tsx`

**Technology**: Mapbox GL JS

```tsx
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [36.8172, -1.2864], // Nairobi coordinates
      zoom: 15
    });

    // Add marker for head office
    new mapboxgl.Marker()
      .setLngLat([36.8172, -1.2864])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>TNT SACCO Head Office</h3>'))
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ height: '400px' }} />;
};
```

**Features**:
- Interactive map controls
- Custom markers for branches
- Popup information windows
- Directions integration
- Mobile-friendly touch controls

**Configuration Needed**:
- Mapbox API token (currently placeholder)
- Actual branch coordinates
- Custom marker styling

### 8.4 Form Validation

**Pattern**: React Hook Form + Zod

```tsx
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^(\+254|0)[17]\d{8}$/, "Invalid Kenyan phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Form submission logic
    console.log(data);
    // Send to API endpoint
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        placeholder="Email"
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </form>
  );
};
```

---

## 9. Build & Deployment

### 9.1 Development

**Start dev server**:
```bash
npm run dev
```

**Output**:
```
VITE v5.4.20 ready in 1062 ms
➜  Local:   http://localhost:8080/
➜  Network: http://10.58.107.133:8080/
```

**Features**:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- Instant updates on file changes

### 9.2 Production Build

**Build command**:
```bash
npm run build
```

**Process**:
1. TypeScript compilation
2. Vite bundling with Rollup
3. CSS optimization
4. Asset minification
5. Tree shaking unused code
6. Output to `dist/` directory

**Output structure**:
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]-[hash].[ext]
├── index.html
└── favicon.svg
```

**Build optimizations**:
- Code splitting
- Lazy loading
- Asset compression
- Cache busting with hashes

### 9.3 Preview Production Build

```bash
npm run preview
```

Tests the production build locally before deployment.

### 9.4 Deployment Options

#### Static Hosting (Recommended)
- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Cloudflare Pages**: Git integration
- **AWS S3 + CloudFront**: S3 bucket + CDN
- **GitHub Pages**: Requires routing configuration

#### Configuration for SPA Routing

**.htaccess (Apache)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**nginx.conf**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Vercel/Netlify** (`vercel.json` or `netlify.toml`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 9.5 Environment Variables

**Pattern**: `.env` files

```bash
# .env.development
VITE_MAPBOX_TOKEN=your_dev_token
VITE_API_URL=http://localhost:3000

# .env.production
VITE_MAPBOX_TOKEN=your_prod_token
VITE_API_URL=https://api.tntsacco.co.ke
```

**Usage**:
```typescript
const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
```

**Important**: Never commit `.env` files with sensitive data.

---

## 10. Development Guidelines

### 10.1 Code Style

**ESLint Configuration**: `eslint.config.js`

```javascript
export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: ['react-hooks', 'react-refresh'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
    },
  },
];
```

**Formatting**:
- 2 spaces indentation
- Single quotes for strings
- Semicolons required
- Trailing commas in multiline

### 10.2 TypeScript Guidelines

**Type Everything**:
```tsx
// Good
interface Product {
  id: string;
  name: string;
  rate: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Implementation
};

// Avoid
const ProductCard = ({ product }: any) => {
  // Implementation
};
```

**Use Type Inference When Obvious**:
```tsx
// Good - inference works
const [count, setCount] = useState(0);

// Unnecessary - explicit type not needed
const [count, setCount] = useState<number>(0);
```

**Utility Types**:
```tsx
// Pick specific properties
type ProductPreview = Pick<Product, 'name' | 'rate'>;

// Omit properties
type ProductWithoutId = Omit<Product, 'id'>;

// Partial (all optional)
type PartialProduct = Partial<Product>;

// Required (all required)
type RequiredProduct = Required<Product>;
```

### 10.3 Component Guidelines

**Functional Components Only**:
```tsx
// Preferred
const Component: React.FC = () => {
  return <div>Content</div>;
};

// Avoid class components
class Component extends React.Component {
  render() {
    return <div>Content</div>;
  }
}
```

**Props Destructuring**:
```tsx
// Good
const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return <div className={className}>{title}{children}</div>;
};

// Avoid
const Card: React.FC<CardProps> = (props) => {
  return <div className={props.className}>{props.title}{props.children}</div>;
};
```

**Early Returns**:
```tsx
const Component = ({ data, isLoading, error }) => {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;

  return <DataDisplay data={data} />;
};
```

### 10.4 Naming Conventions

- **Components**: `PascalCase` (UserProfile.tsx)
- **Functions**: `camelCase` (calculateTotal)
- **Constants**: `UPPER_SNAKE_CASE` (MAX_LOAN_AMOUNT)
- **Types/Interfaces**: `PascalCase` (UserData)
- **CSS classes**: `kebab-case` (user-profile)
- **File names**: Match component name

### 10.5 Git Workflow

**Branch naming**:
```
feature/loan-calculator
bugfix/header-mobile-menu
hotfix/security-patch
```

**Commit messages**:
```
feat: Add loan calculator component
fix: Resolve mobile menu overlay issue
docs: Update technical documentation
style: Format code with Prettier
refactor: Simplify chatbot matching algorithm
test: Add unit tests for calculator
chore: Update dependencies
```

**Pull Request Process**:
1. Create feature branch from `main`
2. Implement changes with clear commits
3. Run linting: `npm run lint`
4. Test locally: `npm run dev` and `npm run build`
5. Create PR with description
6. Request code review
7. Address feedback
8. Merge after approval

---

## 11. Performance Optimization

### 11.1 Code Splitting

**React.lazy for route-based splitting**:
```tsx
import { lazy, Suspense } from 'react';

const DepositProducts = lazy(() => import('./pages/DepositProducts'));

<Suspense fallback={<LoadingSpinner />}>
  <Route path="/deposit-products" element={<DepositProducts />} />
</Suspense>
```

### 11.2 Image Optimization

**Best practices**:
- Use WebP format with fallbacks
- Lazy load images below the fold
- Provide proper dimensions
- Use responsive images

```tsx
<img
  src="image.webp"
  alt="Description"
  loading="lazy"
  width="600"
  height="400"
/>
```

### 11.3 Bundle Size Optimization

**Check bundle size**:
```bash
npm run build
vite build --mode production
```

**Analyze bundle**:
```bash
npm run build -- --mode production --analyze
```

**Reduce bundle size**:
- Tree shaking (automatic with Vite)
- Dynamic imports for large libraries
- Remove unused dependencies
- Use lighter alternatives (e.g., date-fns instead of moment)

### 11.4 Memoization

**React.memo for expensive components**:
```tsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
  return <div>{/* ... */}</div>;
});
```

**useMemo for expensive calculations**:
```tsx
const calculatedValue = useMemo(() => {
  return expensiveOperation(data);
}, [data]);
```

**useCallback for function references**:
```tsx
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
```

### 11.5 Lighthouse Scores

**Target metrics**:
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

**Core Web Vitals**:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 12. Security Considerations

### 12.1 Content Security Policy

**Location**: `index.html`

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https:;
  connect-src 'self' https: wss:;
" />
```

### 12.2 Form Security

**Input validation**:
- Client-side: Zod schemas
- Server-side: Always validate again
- Sanitize inputs before submission
- CSRF tokens for state-changing operations

**Email validation**:
```typescript
const emailSchema = z.string()
  .email("Invalid email")
  .max(255);
```

**Phone validation** (Kenyan):
```typescript
const phoneSchema = z.string()
  .regex(/^(\+254|0)[17]\d{8}$/, "Invalid Kenyan phone number");
```

### 12.3 XSS Prevention

**React's built-in protection**:
- Automatic escaping of values
- Avoid `dangerouslySetInnerHTML`
- Sanitize user-generated content

**If HTML rendering needed**:
```tsx
import DOMPurify from 'dompurify';

<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(userContent)
}} />
```

### 12.4 Authentication (Future)

**JWT tokens**:
```typescript
// Store in httpOnly cookies (not localStorage)
const token = getCookie('auth_token');

// Include in API requests
fetch('/api/user', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

**Protected routes**:
```tsx
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

## 13. Testing Strategy

### 13.1 Testing Pyramid

```
        /\
       /  \  E2E Tests (Few)
      /____\
     /      \  Integration Tests (Some)
    /________\
   /          \  Unit Tests (Many)
  /____________\
```

### 13.2 Unit Testing

**Framework**: Vitest (recommended for Vite projects)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**Example test**:
```tsx
// LoanCalculator.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoanCalculator } from './LoanCalculator';

describe('LoanCalculator', () => {
  it('calculates monthly payment correctly', () => {
    render(<LoanCalculator />);

    const amountInput = screen.getByLabelText('Loan Amount');
    fireEvent.change(amountInput, { target: { value: '100000' } });

    const monthlyPayment = screen.getByText(/Monthly Payment/i);
    expect(monthlyPayment).toBeInTheDocument();
    expect(monthlyPayment).toHaveTextContent('KSh');
  });
});
```

### 13.3 Integration Testing

**Testing component interactions**:
```tsx
describe('ContactForm', () => {
  it('submits form with valid data', async () => {
    const mockSubmit = vi.fn();
    render(<ContactForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com'
      });
    });
  });
});
```

### 13.4 E2E Testing

**Framework**: Playwright or Cypress

```typescript
// playwright.spec.ts
import { test, expect } from '@playwright/test';

test('user can navigate to loan products', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.click('text=Loan Products');
  await expect(page).toHaveURL('/loan-products');
  await expect(page.locator('h1')).toContainText('Credit Products');
});
```

### 13.5 Accessibility Testing

**axe-core integration**:
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<LoanCalculator />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## 14. Troubleshooting

### 14.1 Common Issues

#### Issue: Port 8080 already in use
```bash
# Solution 1: Change port in vite.config.ts
server: {
  port: 3000,
}

# Solution 2: Kill process on port 8080
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8080 | xargs kill
```

#### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: TypeScript errors
```bash
# Restart TypeScript server in VS Code
# Command Palette > TypeScript: Restart TS Server

# Or rebuild TypeScript
npm run build
```

#### Issue: Vite HMR not working
```bash
# Restart dev server
# Clear browser cache
# Check .env file syntax
```

#### Issue: Mapbox not displaying
```
Problem: Map container is blank
Solutions:
1. Verify Mapbox token is valid
2. Check CSS import: import 'mapbox-gl/dist/mapbox-gl.css'
3. Ensure container has explicit height
4. Check browser console for API errors
```

### 14.2 Debug Tools

**React DevTools**:
- Install browser extension
- Inspect component hierarchy
- View props and state
- Profile performance

**Vite Dev Server**:
- Network tab shows HMR updates
- Console shows compilation errors
- Sources tab for debugging

**TypeScript**:
```bash
# Check types without building
npx tsc --noEmit
```

**Bundle Analysis**:
```bash
npm run build
npx vite-bundle-visualizer
```

### 14.3 Performance Debugging

**React DevTools Profiler**:
1. Start profiling
2. Interact with app
3. Stop profiling
4. Review flame graph
5. Identify slow renders

**Lighthouse**:
```bash
# Chrome DevTools > Lighthouse > Run audit
```

**Console Timing**:
```typescript
console.time('calculation');
const result = expensiveCalculation();
console.timeEnd('calculation');
```

---

## 15. Future Development

### 15.1 Immediate Priorities

1. **API Integration**
   - Create backend API endpoints
   - Implement data fetching with React Query
   - Add loading states and error handling

2. **Form Submission**
   - Connect contact form to email service
   - Implement loan application submission
   - Add success/error notifications

3. **Content Management**
   - Set up CMS for news articles
   - Dynamic content updates
   - Admin interface for content editors

4. **Performance**
   - Image optimization pipeline
   - Implement service worker for offline support
   - Add caching strategies

5. **Analytics**
   - Google Analytics integration
   - Event tracking (button clicks, form submissions)
   - User behavior analysis

### 15.2 Medium-Term Goals

1. **Member Portal**
   - User authentication system
   - Dashboard for account overview
   - Transaction history
   - Loan application tracking

2. **Payment Integration**
   - M-Pesa integration
   - Credit/debit card payments
   - Bank transfer options

3. **Mobile App**
   - React Native version
   - Push notifications
   - Biometric authentication

4. **Advanced Features**
   - Document upload
   - E-signatures
   - Video KYC
   - Live chat with agents

### 15.3 Long-Term Vision

1. **AI Enhancement**
   - GPT-powered chatbot
   - Personalized financial advice
   - Predictive analytics

2. **Ecosystem**
   - Merchant payment platform
   - Peer-to-peer transfers
   - Investment marketplace

3. **Community**
   - Member forum
   - Financial literacy content
   - Success stories sharing

---

## Appendix

### A. Useful Commands

```bash
# Development
npm run dev                # Start dev server
npm run build             # Production build
npm run preview           # Preview production build
npm run lint              # Run ESLint

# Testing
npm test                  # Run tests
npm run test:ui           # Test UI
npm run test:coverage     # Coverage report

# Dependencies
npm install <package>     # Add dependency
npm install -D <package>  # Add dev dependency
npm update                # Update dependencies
npm audit                 # Security audit
npm audit fix             # Fix vulnerabilities

# TypeScript
npx tsc --noEmit         # Type check only
```

### B. VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Auto Rename Tag
- Path Intellisense
- GitLens

### C. Resources

**Official Documentation**:
- React: https://react.dev
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Router: https://reactrouter.com
- React Query: https://tanstack.com/query
- shadcn/ui: https://ui.shadcn.com

**Learning Resources**:
- React patterns: https://reactpatterns.com
- TypeScript Deep Dive: https://basarat.gitbook.io/typescript
- Web.dev: https://web.dev

---

**Document Version**: 1.0
**Last Updated**: October 7, 2025
**Maintained By**: Development Team
**Next Review**: January 2026
