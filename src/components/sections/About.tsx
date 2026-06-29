// src/components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import { aboutMe } from '@/lib/data'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="font-mono text-accent text-sm tracking-widest uppercase">
                01 / About
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-black text-4xl md:text-5xl text-text-primary mb-8 leading-tight"
            >
              Building ML systems
              <br />
              <span className="text-accent">end to end.</span>
            </motion.h2>

            <div className="space-y-4">
              {aboutMe.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-text-secondary leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4"
          >
            {aboutMe.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, borderColor: 'rgba(99,102,241,0.4)' }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-elevated border border-border flex flex-col gap-2 cursor-default"
              >
                <span className="font-display font-black text-4xl text-text-primary">
                  {stat.value}
                </span>
                <span className="text-text-tertiary text-sm font-medium">{stat.label}</span>
              </motion.div>
            ))}

            {/* Extra card: NIT Karnataka */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="col-span-2 p-6 rounded-2xl bg-accent/5 border border-accent/20 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent text-lg">🎓</span>
              </div>
              <div>
                <p className="text-text-primary font-semibold text-sm">
                  ML Research · NIT Karnataka
                </p>
                <p className="text-text-tertiary text-xs mt-0.5">
                  Crop classification · Satellite imagery · Google Earth Engine
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
