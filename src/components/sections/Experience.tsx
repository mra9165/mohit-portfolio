// src/components/sections/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, FlaskConical, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '@/lib/data'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const typeIcon = (type: string) =>
  type === 'Research Internship' ? FlaskConical : Briefcase

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              03 / Experience
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black text-4xl md:text-5xl text-text-primary mb-4 leading-tight"
          >
            Work &amp;
            <span className="text-accent"> Research</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-tertiary text-base max-w-xl mb-16"
          >
            Hands-on experience spanning applied ML research and technical education.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-10">
              {experience.map((exp, i) => {
                const Icon = typeIcon(exp.type)
                return (
                  <motion.div
                    key={exp.id}
                    variants={fadeInUp}
                    className="relative sm:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ borderColor: 'rgba(99,102,241,0.3)' }}
                      transition={{ duration: 0.2 }}
                      className="p-7 rounded-2xl bg-elevated border border-border"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                              <Icon size={11} />
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-xl text-text-primary">
                            {exp.role}
                          </h3>
                          <p className="text-accent font-medium text-base mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col gap-1 text-sm text-text-tertiary sm:text-right">
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <CalendarDays size={13} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <MapPin size={13} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-6">
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-3 text-sm text-text-secondary"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-void/60 text-text-tertiary border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
