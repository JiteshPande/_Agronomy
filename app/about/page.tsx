'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../_components/ui/SectionHeader'
import { AnimateOnScroll, StaggerContainer, staggerItem } from '../_components/ui/AnimateOnScroll'
import { Button } from '../_components/ui/Button'
import { TEAM_MEMBERS, TIMELINE_EVENTS, CERTIFICATIONS, COMPANY_STATS } from '../_lib/data'

const ICON_PATHS: Record<string, string> = {
  award: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  leaf: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  shield: 'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  'file-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
}

const VALUES = [
  { title: 'Integrity', desc: 'We do what we say. Every commitment we make is a promise we keep — to our customers, employees, and the environment.', color: '#0f2848' },
  { title: 'Innovation', desc: 'Continuous R&D investment drives better products, greener processes, and smarter solutions for evolving industry needs.', color: '#06b6d4' },
  { title: 'Quality', desc: 'From raw material sourcing to final packaging, quality is non-negotiable at every step of our process.', color: '#f97316' },
  { title: 'Sustainability', desc: 'Responsible manufacturing that balances business growth with environmental stewardship and community impact.', color: '#2d6a4f' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">About Us</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                28 Years of<br />
                <span className="text-secondary">Chemical Excellence</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                NovaChem Industries was founded on a simple belief: that great chemistry can change industries and improve lives. Today, our 850+ strong team delivers on that promise every day.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Partner With Us →
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Mission',
                title: 'Advancing Industries Through Superior Chemistry',
                text: 'To be the most trusted partner for chemical solutions — delivering consistent quality, technical expertise, and reliable supply to industries that shape the modern world.',
                color: '#0f2848',
                icon: '🎯',
              },
              {
                label: 'Our Vision',
                title: 'A Sustainable Chemical Future for All',
                text: 'To lead the transition to sustainable chemical manufacturing — developing greener processes, bio-based products, and circular economy solutions that benefit both business and the planet.',
                color: '#06b6d4',
                icon: '🌍',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="h-full p-8 rounded-3xl" style={{ background: `${item.color}08`, border: `1px solid ${item.color}20` }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: item.color }}>{item.label}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4 leading-tight">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}{stat.suffix}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Journey" title="Milestones That Defined Us" centered />
          <div className="relative mt-14">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {TIMELINE_EVENTS.map((event, i) => (
                <AnimateOnScroll key={event.year} direction={i % 2 === 0 ? 'right' : 'left'} delay={0.1}>
                  <div className={`md:flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="text-secondary font-bold text-sm mb-1">{event.year}</div>
                        <h3 className="font-bold text-slate-900 mb-2">{event.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md items-center justify-center flex-shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our DNA" title="Values That Guide Everything We Do" centered />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${value.color}15` }}>
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: value.color }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Leadership" title="Meet Our Team" description="Experienced professionals driving NovaChem's vision across every function." centered />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-secondary text-xs font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trust" title="Our Certifications" centered />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {CERTIFICATIONS.map((cert, i) => (
              <AnimateOnScroll key={cert.name} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center p-5 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-md bg-white transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_PATHS[cert.icon] ?? ICON_PATHS.award} />
                    </svg>
                  </div>
                  <div className="font-bold text-slate-900 text-sm">{cert.name}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{cert.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Infrastructure"
                title="World-Class Manufacturing"
                description="Our facilities combine modern automation with rigorous quality systems to deliver consistent, high-purity chemicals at scale."
              />
              <div className="mt-8 space-y-4">
                {[
                  { label: 'Total Manufacturing Area', value: '1,20,000 sq ft' },
                  { label: 'Production Capacity', value: '50,000 MT/year' },
                  { label: 'Quality Lab Instruments', value: '80+' },
                  { label: 'Storage Tanks', value: '200+ vessels' },
                  { label: 'Annual R&D Investment', value: '₹12 Crore' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-600 text-sm">{item.label}</span>
                    <span className="font-bold text-primary text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <AnimateOnScroll direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Vadodara Plant', sublabel: 'Primary Manufacturing', color: '#0f2848' },
                  { label: 'Mumbai HQ', sublabel: 'Corporate & R&D', color: '#1a3d6e' },
                  { label: 'Pune Depot', sublabel: 'Western Distribution', color: '#06b6d4' },
                  { label: 'Chennai Hub', sublabel: 'Southern Operations', color: '#f97316' },
                ].map((facility) => (
                  <div
                    key={facility.label}
                    className="rounded-2xl p-5 text-white"
                    style={{ backgroundColor: facility.color }}
                  >
                    <div className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2">{facility.sublabel}</div>
                    <div className="font-bold text-lg">{facility.label}</div>
                    <div className="mt-3">
                      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
