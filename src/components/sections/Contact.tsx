// src/components/sections/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("https://formspree.io/f/mnjkznor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm(initialForm);
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mohitraj',
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohitraj',
      href: personalInfo.linkedin,
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
              06 / Contact
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black text-4xl md:text-5xl text-text-primary mb-4 leading-tight"
          >
            Let&apos;s
            <span className="text-accent"> Connect</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-tertiary text-base max-w-xl mb-14"
          >
            Whether you&apos;re looking to hire, collaborate on ML research, or just talk
            data science — I&apos;m open to conversations.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <motion.div variants={fadeInUp} className="space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-elevated hover:border-accent/40 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={17} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary mb-0.5">{label}</p>
                    <p className="text-text-primary text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}

              {/* Availability card */}
              <div className="p-5 rounded-2xl border border-success/20 bg-success/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-success text-sm font-medium">Available for hire</span>
                </div>
                <p className="text-text-tertiary text-sm">
                  Open to full-time ML Engineer and Data Scientist roles — remote, hybrid, or on-site.
                </p>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div variants={fadeInUp}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-success/20 bg-success/5"
                >
                  <CheckCircle2 size={40} className="text-success mb-4" />
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-accent text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-xs font-medium text-text-tertiary mb-1.5" htmlFor={name}>
                          {label}
                        </label>
                        <input
                          id={name}
                          name={name}
                          type={type}
                          required
                          value={form[name as keyof FormState]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-tertiary mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="ML Engineer role / Collaboration / etc."
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-tertiary mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
