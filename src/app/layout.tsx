// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohit Raj — Machine Learning Engineer & Data Scientist',
  description:
    'Portfolio of Mohit Raj — ML Engineer specializing in end-to-end machine learning pipelines, ensemble learning, geospatial ML, and data science. Research intern at NIT Karnataka.',
  keywords: [
    'Mohit Raj',
    'Machine Learning Engineer',
    'Data Scientist',
    'ML Portfolio',
    'Python ML',
    'XGBoost',
    'Random Forest',
    'Feature Engineering',
    'NIT Karnataka',
    'Remote Sensing ML',
  ],
  authors: [{ name: 'Mohit Raj' }],
  creator: 'Mohit Raj',
  metadataBase: new URL('https://mohitraj.dev'), // Update with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohitraj.dev',
    title: 'Mohit Raj — Machine Learning Engineer',
    description:
      'ML Engineer building end-to-end machine learning systems — from EDA and feature engineering to model training, ensembling, and geospatial ML research.',
    siteName: 'Mohit Raj Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Raj — Machine Learning Engineer',
    description:
      'ML Engineer · Data Scientist · Research Intern at NIT Karnataka',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body>{children}</body>
    </html>
  )
}
