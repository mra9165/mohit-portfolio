// src/components/sections/Skills.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Brain,
  Layers,
  BarChart2,
  Wrench,
  Sparkles,
} from 'lucide-react'
import { skills } from '@/lib/data'
import { fadeInUp, staggerContainer, staggerContainerFast, viewportConfig } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Layers,
  BarChart2,
  Wrench,
  Sparkles,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              02 / Skills
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black text-4xl md:text-5xl text-text-primary mb-4 leading-tight"
          >
            Technical
            <span className="text-accent"> Arsenal</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-tertiary text-base max-w-xl mb-14"
          >
            A focused stack built around the full ML lifecycle — from raw data to
            deployed models.
          </motion.p>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((category, ci) => {
              const Icon = iconMap[category.icon] ?? Brain
              return (
                <motion.div
                  key={ci}
                  variants={fadeInUp}
                  whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.35)' }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-elevated border border-border group"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <span className="font-display font-bold text-sm text-text-primary">
                      {category.category}
                    </span>
                  </div>

                  {/* Skill chips */}
                  <motion.div
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="flex flex-wrap gap-2"
                  >
                    {category.items.map((skill, si) => (
                      <motion.span
                        key={si}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportConfig}
                        transition={{ delay: si * 0.04 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-void/60 text-text-secondary border border-border hover:border-accent/40 hover:text-text-primary transition-all duration-150 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
