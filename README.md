# Mohit Raj — ML Engineer Portfolio

A premium, production-ready portfolio website for Mohit Raj — Machine Learning Engineer & Data Scientist. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Syne (display) · Inter (body) · JetBrains Mono |
| Deployment | Vercel |

## Features

- **Animated Hero** — Neural pulse signal line, floating grid dots, smooth word fade-in
- **Loading Screen** — Branded intro with animated progress bar
- **Sticky Navbar** — Active section highlighting via scroll-spy, blur backdrop
- **About Section** — Stats grid, summary paragraphs
- **Skills Grid** — Categorized skill chips with hover states
- **Experience Timeline** — Cards with highlights, tags, and type badges
- **Projects Section** — Expandable detail drawers with full ML breakdown (problem, dataset, pipeline, feature engineering, models, tuning, metrics, results)
- **Certifications & Education** — Verified badge, skill tags, education timeline
- **Resume Download** — Branded CTA section
- **Contact Form** — Validated form with loading and success states
- **Footer** — Social links, copyright
- **Fully Responsive** — Mobile, tablet, desktop
- **SEO Optimized** — OpenGraph, Twitter cards, metadata
- **Accessible** — Focus rings, ARIA labels, reduced-motion support
- **Dark Theme** — Void black with indigo accent system

## Project Structure

```
mohit-portfolio/
├── public/
│   └── Mohiit_Raj_Resume.pdf       ← Place your resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css             ← Global styles + font imports
│   │   ├── layout.tsx              ← Root layout + SEO metadata
│   │   └── page.tsx                ← Main page (assembles all sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          ← Sticky nav with scroll-spy
│   │   │   └── Footer.tsx          ← Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx            ← Animated hero with neural pulse
│   │   │   ├── About.tsx           ← About + stats grid
│   │   │   ├── Skills.tsx          ← Skills by category
│   │   │   ├── Experience.tsx      ← Work + research timeline
│   │   │   ├── Projects.tsx        ← ML projects with detail drawers
│   │   │   ├── Certifications.tsx  ← Certs + education
│   │   │   ├── ResumeDownload.tsx  ← Resume CTA
│   │   │   └── Contact.tsx         ← Contact form + links
│   │   └── ui/
│   │       ├── LoadingScreen.tsx   ← Branded loading intro
│   │       └── SectionDivider.tsx  ← Gradient section dividers
│   ├── hooks/
│   │   └── useScrollSpy.ts         ← Active section detection
│   └── lib/
│       ├── animations.ts           ← Shared Framer Motion variants
│       ├── data.ts                 ← All portfolio content (edit here)
│       └── utils.ts                ← cn() utility
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── vercel.json
└── package.json
```

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone / enter the project
cd mohit-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Info
All content lives in `src/lib/data.ts`. Edit these exports:

```ts
// Update links
export const personalInfo = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  ...
}
```

### Add Your Resume PDF
1. Place your resume at `public/Mohiit_Raj_Resume.pdf`
2. The download button and links will work automatically

### Add More Projects
In `src/lib/data.ts`, add a new object to the `projects` array following the same schema.

### Update GitHub Links
Replace all `'https://github.com/'` placeholders in `data.ts` with your actual repo URLs.

### Wire Up Contact Form
The form currently simulates submission. To make it functional:

**Option A — Formspree (free):**
```ts
// In Contact.tsx, replace the handleSubmit simulation:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — Resend + Next.js API route:**
Create `src/app/api/contact/route.ts` and use the Resend SDK.

## Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### Method 2: Vercel Dashboard (GitHub Integration)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: Next.js (auto-detected)
5. Click **Deploy**

### Custom Domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain (e.g., `mohitraj.dev`)
3. Update DNS records as instructed
4. Update `metadataBase` in `src/app/layout.tsx`

## Performance Tips

- Fonts are loaded via Google Fonts with `display=swap` — no layout shift
- Images use Next.js `Image` component for automatic optimization
- Animations respect `prefers-reduced-motion`
- All scroll listeners use `{ passive: true }`

## License

MIT — feel free to use as a template, with attribution appreciated.
