# 21design.ch

**Modern Portfolio Website** for 21design.ch - A professional showcase built with cutting-edge web technologies and interactive 3D effects.

## ✨ Key Features

### 🎯 **Interactive 3D Experience**
- **3D Tilt Cards**: Custom `useTilt` hook with smooth transitions and warmup system
- **Animated Background**: Canvas-based interactive network visualization  
- **Contact CTA**: Enhanced conversion optimization with 3D hover effects

### 🎨 **Modern Design System**
- **KISS Theme Architecture**: Production-safe hardcoded theme classes
- **Dual Color Palette**: 
  - Light Mode: `oklch(0.55 0.18 220)` (Professional Blue)
  - Dark Mode: `oklch(0.80 0.18 45)` (Premium Gold)
- **Grid Patterns**: Subtle animated background textures
- **Responsive Design**: Mobile-first approach with perfect scaling

### ⚡ **Performance & UX**
- **Next.js 15 + React 19**: Latest framework optimizations
- **Theme Switching**: Flicker-free SSR-safe theme system
- **Smooth Animations**: Framer Motion with optimized performance
- **Contact Integration**: EmailJS with toast notifications

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 with App Router |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS + Custom CSS Layers |
| **UI Library** | shadcn/ui (customized) |
| **Animations** | Framer Motion + Custom 3D Effects |
| **Theme System** | next-themes (production optimized) |
| **Forms** | React Hook Form + Zod validation |
| **Email Service** | EmailJS |
| **Notifications** | Sonner (toast system) |
| **Icons** | Lucide React |
| **Font** | Inter (optimized loading) |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Quick Start
```bash
# Clone repository
git clone <repository-url>
cd 21design-website

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local
# Add your EmailJS configuration

# Start development server
pnpm dev
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Development Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # ESLint + TypeScript check
pnpm type-check       # TypeScript validation only
```

## 📁 Project Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Custom theme system + Tailwind
│   ├── layout.tsx         # Root layout with theme provider  
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui base components
│   │   ├── button.tsx     # Custom button variants
│   │   ├── card.tsx       # Card components
│   │   └── animated-background.tsx  # Interactive canvas
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation with theme toggle
│   │   ├── footer.tsx     # Footer component
│   │   └── theme-provider.tsx  # Theme system wrapper
│   ├── sections/          # Page sections (clean names)
│   │   ├── hero.tsx       # Hero section with animated background
│   │   ├── projects.tsx   # Portfolio showcase
│   │   ├── about.tsx      # About section with 3D tilt cards
│   │   └── contact.tsx    # Contact CTA with 3D effects
│   └── contact/           # Contact system
│       └── contact-modal.tsx  # EmailJS integration
├── hooks/
│   └── use-tilt.ts        # Custom 3D tilt effect hook
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── types/                 # TypeScript definitions
```

## 🎨 Design System

### Color Palette
```css
/* Light Mode Theme */
.text-primary     { color: oklch(0.20 0.10 240); }  /* Deep Navy */
.text-accent      { color: oklch(0.55 0.18 220); }  /* Professional Blue */
.surface          { background: oklch(0.99 0.005 60); }  /* Pure White */

/* Dark Mode Theme */  
.dark .text-primary   { color: oklch(0.90 0.02 200); }   /* Bright White */
.dark .text-accent    { color: oklch(0.80 0.18 45); }    /* Premium Gold */
.dark .surface        { background: oklch(0.06 0.01 240); }  /* Deep Tech */
```

### Interactive Elements
- **3D Tilt Cards**: `maxTilt: 8-12°`, smooth warmup transitions
- **Glow Effects**: Contextual glows with theme-aware colors
- **Grid Patterns**: Animated background with opacity: 0.08 (light) / 0.15 (dark)
- **Button Hierarchy**: Primary, Secondary, Tertiary variants

### Typography
- **Font**: Inter (optimized loading)
- **Scales**: Mobile-first responsive typography
- **Weights**: Light (300) → Medium (500) → Semibold (600)

## 🚀 Deployment

### Supported Platforms
- ✅ **Vercel** (recommended)
- ✅ **Netlify** 
- ✅ **Coolify**
- ✅ **Any Node.js hosting**

### Build Optimization
- Static generation for all pages
- Optimized bundle size: ~68KB (gzipped)
- Performance Score: 95+ (Lighthouse)
- Zero hydration mismatches

### Deployment Checklist
- [ ] EmailJS environment variables configured
- [ ] Domain configured for email service
- [ ] Theme system tested in production
- [ ] 3D effects validated across browsers

## 🔧 Customization

### Adding New 3D Tilt Cards
```tsx
// 1. Import the hook
import { useTilt } from '@/hooks/use-tilt'

// 2. Create tilt instance
const cardTilt = useTilt({ 
  maxTilt: 10, 
  scale: 1.03, 
  warmupDuration: 120 
})

// 3. Apply to component
<Card 
  ref={cardTilt.ref}
  onMouseMove={cardTilt.onMouseMove}
  onMouseEnter={cardTilt.onMouseEnter}
  onMouseLeave={cardTilt.onMouseLeave}
  className="cursor-pointer"
>
```

### Theme Customization
```css
/* globals.css - Update theme colors */
.text-accent { color: oklch(/* your-color */); }
.dark .text-accent { color: oklch(/* your-dark-color */); }
```

---

**Built with ❤️ and 🚀 in Switzerland**  
*Professional portfolio showcasing modern web development and interactive design*