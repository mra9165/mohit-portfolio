// src/components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-void py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-bold text-xl text-text-primary">
              MR<span className="text-accent">.</span>
            </span>
            <p className="text-text-tertiary text-sm mt-1">
              Machine Learning Engineer · Data Scientist
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Mohit Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
