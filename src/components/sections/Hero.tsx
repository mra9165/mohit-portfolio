// src/components/sections/Hero.tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

// Animated SVG neural signal line — the signature element
function NeuralPulse() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial glow behind hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-accent/8 rounded-full blur-2xl" />

      {/* Animated signal line */}
      <svg
        className="absolute bottom-20 left-0 w-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,50 L100,50 L120,20 L140,80 L160,10 L180,90 L200,50 L320,50 L340,30 L360,70 L380,50 L500,50 L520,15 L540,85 L560,50 L700,50 L720,35 L740,65 L760,50 L900,50 L920,25 L940,75 L960,50 L1200,50"
          stroke="url(#signalGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.8 }}
        />
        <defs>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="20%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating grid dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/20 rounded-full"
          style={{
            left: `${(i * 7.3) % 100}%`,
            top: `${(i * 13.7) % 80 + 10}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

function WordFade({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  )
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {!prefersReducedMotion && <NeuralPulse />}

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-success/30 bg-success/5 text-success text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
          {personalInfo.availability}
        </motion.div>

        {/* Name */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-none tracking-tight mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalInfo.name.split(' ')[0]}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-accent"
          >
            {personalInfo.name.split(' ')[1]}
          </motion.div>
        </h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-6"
        >
          {['Machine Learning Engineer', '·', 'Data Scientist', '·', 'ML Research'].map((item, i) => (
            <span
              key={i}
              className={
                item === '·'
                  ? 'text-border text-xl'
                  : 'font-body text-lg sm:text-xl font-medium text-text-secondary'
              }
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-base sm:text-lg text-text-tertiary max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-1 text-text-tertiary text-sm mb-10"
        >
          <MapPin size={14} className="text-accent" />
          <span>India · Open to Remote & Relocation</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-8 py-3.5 border border-border text-text-secondary font-medium rounded-xl hover:border-accent/50 hover:text-text-primary transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: personalInfo.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-3 rounded-xl border border-border text-text-tertiary hover:text-accent hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-text-tertiary"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
