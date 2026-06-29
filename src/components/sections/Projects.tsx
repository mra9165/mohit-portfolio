// src/components/sections/Projects.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  ChevronDown,
  Database,
  GitBranch,
  Cpu,
  BarChart2,
  CheckCircle2,
  Settings2,
  FlaskConical,
  Layers,
} from 'lucide-react'
import { projects } from '@/lib/data'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'
import { cn } from '@/lib/utils'

type Project = (typeof projects)[0]

function PipelineStep({ step, index }: { step: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="flex items-start gap-3"
    >
      <span className="font-mono text-xs text-accent/60 mt-0.5 w-5 flex-shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-sm text-text-secondary">{step}</span>
    </motion.div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-border bg-elevated overflow-hidden"
    >
      {/* Card header */}
      <div className="p-7">
        {/* Accent bar */}
        <div
          className="w-10 h-1 rounded-full mb-5"
          style={{ backgroundColor: project.color }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-text-tertiary">{project.subtitle}</p>
          </div>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border text-text-tertiary hover:text-text-primary hover:border-accent/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border text-text-tertiary hover:text-text-primary hover:border-accent/40 transition-all duration-200"
                aria-label="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-lg text-text-tertiary border border-border bg-void/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          <span>{expanded ? 'Hide details' : 'View full breakdown'}</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      {/* Expanded detail drawer */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/60 bg-void/30 p-7 grid sm:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <FlaskConical size={13} /> Problem Statement
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* Dataset */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <Database size={13} /> Dataset
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.dataset}</p>
              </div>

              {/* Models */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <Cpu size={13} /> Models Used
                </h4>
                <ul className="space-y-2">
                  {project.models.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Engineering */}
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <Layers size={13} /> Feature Engineering
                </h4>
                <ul className="space-y-2">
                  {project.featureEngineering.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pipeline */}
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <GitBranch size={13} /> ML Pipeline
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.pipeline.map((step, si) => (
                    <PipelineStep key={si} step={step} index={si} />
                  ))}
                </div>
              </div>

              {/* Tuning */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <Settings2 size={13} /> Hyperparameter Tuning
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.tuning}</p>
              </div>

              {/* Metric */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <BarChart2 size={13} /> Evaluation Metric
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.metric}</p>
              </div>

              {/* Results */}
              <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
                  <CheckCircle2 size={13} /> Results
                </h4>
                <ul className="space-y-2">
                  {project.results.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 size={14} className="text-success mt-0.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              04 / Projects
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black text-4xl md:text-5xl text-text-primary mb-4 leading-tight"
          >
            Featured
            <span className="text-accent"> ML Work</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-tertiary text-base max-w-xl mb-14"
          >
            End-to-end machine learning systems — problem framing, pipeline engineering, model
            selection, and rigorous evaluation.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
