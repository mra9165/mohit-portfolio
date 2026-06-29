// src/components/sections/ResumeDownload.tsx
'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { fadeInUp, viewportConfig } from '@/lib/animations'

export default function ResumeDownload() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/5 p-12 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <FileText size={24} className="text-accent" />
            </div>

            <h2 className="font-display font-black text-3xl md:text-4xl text-text-primary mb-3">
              Want the full picture?
            </h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8">
              Download my resume for a concise summary of my experience, skills, and
              education — ready to share with your team.
            </p>

            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download size={18} />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
