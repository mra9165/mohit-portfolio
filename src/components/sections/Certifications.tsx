// src/components/sections/Certifications.tsx
'use client'

import { motion } from 'framer-motion'
import { Sparkles, BarChart2, BadgeCheck } from 'lucide-react'
import { certifications, education } from '@/lib/data'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  BarChart2,
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              05 / Credentials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black text-4xl md:text-5xl text-text-primary mb-4 leading-tight"
          >
            Certifications &amp;
            <span className="text-accent"> Education</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-tertiary text-base max-w-xl mb-14"
          >
            Continuous learning across modern ML, generative AI, and data tooling.
          </motion.p>

          {/* Certifications */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {certifications.map((cert) => {
              const Icon = iconMap[cert.icon] ?? Sparkles
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, borderColor: `${cert.color}44` }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-elevated border border-border group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                    >
                      <Icon size={18} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BadgeCheck size={14} className="text-success" />
                        <span className="text-xs font-medium text-success">Certified</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-text-primary leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-text-tertiary mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md text-text-tertiary border border-border bg-void/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Education */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-display font-bold text-xl text-text-primary mb-5">Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`p-5 rounded-2xl border ${
                    i === 0
                      ? 'bg-elevated border-accent/20'
                      : 'bg-void/30 border-border'
                  } flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}
                >
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        i === 0 ? 'text-text-primary' : 'text-text-secondary'
                      }`}
                    >
                      {edu.degree}
                    </p>
                    <p className="text-text-tertiary text-xs mt-0.5">{edu.institution}</p>
                    {edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-0.5 text-xs rounded-md bg-accent/10 text-accent border border-accent/20"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className={`font-mono font-bold text-sm ${
                        i === 0 ? 'text-accent' : 'text-text-tertiary'
                      }`}
                    >
                      {edu.grade}
                    </p>
                    <p className="text-text-tertiary text-xs mt-0.5">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
