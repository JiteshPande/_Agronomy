'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateOnScroll, StaggerContainer, staggerItem } from '../_components/ui/AnimateOnScroll'
import { SectionHeader } from '../_components/ui/SectionHeader'
import { JOBS } from '../_lib/data'

const BENEFITS = [
  { icon: '🏥', title: 'Health & Insurance', desc: 'Comprehensive medical, dental, and life insurance for you and your family.' },
  { icon: '📚', title: 'Learning & Development', desc: 'Annual training budget, conference sponsorship, and certification programs.' },
  { icon: '🌍', title: 'Global Exposure', desc: 'Opportunities to work with international clients across 45 countries.' },
  { icon: '🏆', title: 'Performance Bonuses', desc: 'Competitive variable pay tied to individual and company performance.' },
  { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible working hours and hybrid work options for eligible roles.' },
  { icon: '🚀', title: 'Career Growth', desc: 'Structured career paths with regular reviews and internal mobility.' },
]

const CULTURE_POINTS = [
  'Safety-first mindset in everything we do',
  'Inclusive and diverse workplace',
  'Collaborative, no-hierarchy culture',
  'Environmental stewardship at our core',
  'Recognition and celebration of achievements',
]

interface ApplyFormState {
  name: string
  email: string
  phone: string
  role: string
  experience: string
  message: string
}

function ApplyModal({ job, onClose }: { job: typeof JOBS[0]; onClose: () => void }) {
  const [form, setForm] = useState<ApplyFormState>({ name: '', email: '', phone: '', role: job.title, experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (field: keyof ApplyFormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
            <p className="text-slate-600">Our HR team will review your application and contact you within 5 business days.</p>
            <button onClick={onClose} className="mt-5 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-light transition-colors">Close</button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Apply for Position</h2>
            <p className="text-slate-500 text-sm mb-6">{job.title} — {job.location}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                <input required type="text" value={form.name} onChange={update('name')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                  <input required type="email" value={form.email} onChange={update('email')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                  <input type="tel" value={form.phone} onChange={update('phone')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 98765..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Years of Experience</label>
                <input type="text" value={form.experience} onChange={update('experience')} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g., 5 years" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Cover Message</label>
                <textarea value={form.message} onChange={update('message')} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Tell us why you're the right fit..." />
              </div>
              <div className="flex gap-3">
                <button type="button" className="flex-1 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  Upload Resume
                </button>
                <button type="submit" disabled={loading} className="flex-1 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-light transition-colors disabled:opacity-60">
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null)
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Join Our Team</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Build Your Career<br />at<span className="text-secondary"> NovaChem</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Join 850+ professionals dedicated to pioneering chemical solutions that matter. We offer growth, global exposure, and a culture that respects every contribution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Our Culture" title="A Place Where Talent Thrives" description="We believe great chemistry happens between great people. Our culture is built on trust, growth, and the shared drive to do meaningful work." />
              <ul className="mt-8 space-y-3">
                {CULTURE_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <AnimateOnScroll direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Employees', value: '850+', color: '#0f2848' },
                  { label: 'Avg. Tenure', value: '7.2 yrs', color: '#06b6d4' },
                  { label: 'Open Positions', value: JOBS.length.toString(), color: '#f97316' },
                  { label: 'Training Hours/yr', value: '120+', color: '#2d6a4f' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl p-5 text-white" style={{ backgroundColor: stat.color }}>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Benefits" title="Why Work With Us" centered />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {BENEFITS.map((benefit) => (
              <motion.div key={benefit.title} variants={staggerItem} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Openings" title="Current Opportunities" description="We're looking for talented professionals to join our growing team." />
          <div className="mt-10 space-y-4">
            {JOBS.map((job, i) => (
              <AnimateOnScroll key={job.id} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all overflow-hidden">
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900">{job.title}</h3>
                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">{job.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-slate-500 text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={(e) => { e.stopPropagation(); setSelectedJob(job) }} className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-light transition-colors">
                        Apply Now
                      </button>
                      <svg className={`w-5 h-5 text-slate-400 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 border-t border-slate-100 pt-5 grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm mb-3">About the Role</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm mb-3">Requirements</h4>
                            <ul className="space-y-1.5">
                              {job.requirements.map((r) => (
                                <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm mb-3">Responsibilities</h4>
                            <ul className="space-y-1.5">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
      </AnimatePresence>
    </div>
  )
}
