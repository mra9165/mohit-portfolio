// src/app/page.tsx
'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'
import SectionDivider from '@/components/ui/SectionDivider'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import ResumeDownload from '@/components/sections/ResumeDownload'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <ResumeDownload />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
