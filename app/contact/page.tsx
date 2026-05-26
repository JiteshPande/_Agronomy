'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateOnScroll } from '../_components/ui/AnimateOnScroll'

const INQUIRY_TYPES = ['Product Inquiry', 'Price Quote', 'Sample Request', 'Technical Support', 'Partnership', 'Other']
const PRODUCT_LIST = ['Industrial Grade Sulfuric Acid', 'Sodium Hydroxide Flakes', 'Hydrogen Peroxide 35%', 'Potassium Humate Granules', 'Zinc Sulfate Monohydrate', 'NPK Fertilizer 19-19-19', 'Aluminum Sulfate', 'Poly Aluminum Chloride', 'Calcium Chloride 77%', 'Activated Carbon Granules', 'Other']

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  country: string
  inquiryType: string
  product: string
  quantity: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '', country: '', inquiryType: '', product: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const inputCls = (err?: string) => `w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${err ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-primary/40 focus:bg-white'}`

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Ready to source premium chemicals? Our team responds within 2 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '+91 22 4567 8900', sub: 'Mon–Sat 9AM–6PM IST' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'info@novachemindustries.com', sub: 'Response within 2 hours' },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Head Office', value: 'Mumbai, India', sub: 'NovaChem House, Andheri East' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Response Time', value: 'Under 2 Hours', sub: 'For all business inquiries' },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">{item.label}</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">{item.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 mb-8">Fill out the form and our team will get back to you shortly.</p>
              </AnimateOnScroll>

              {submitted ? (
                <AnimateOnScroll>
                  <div className="bg-green-50 border border-green-100 rounded-3xl p-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                    <p className="text-green-700">We&apos;ve received your inquiry and will respond within 2 business hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', country: '', inquiryType: '', product: '', quantity: '', message: '' }) }} className="mt-6 text-primary font-semibold hover:underline text-sm">
                      Send Another Message
                    </button>
                  </div>
                </AnimateOnScroll>
              ) : (
                <AnimateOnScroll>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                        <input type="text" value={form.name} onChange={update('name')} className={inputCls(errors.name)} placeholder="Your full name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
                        <input type="text" value={form.company} onChange={update('company')} className={inputCls()} placeholder="Your company" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                        <input type="email" value={form.email} onChange={update('email')} className={inputCls(errors.email)} placeholder="your@email.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <input type="tel" value={form.phone} onChange={update('phone')} className={inputCls()} placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Country</label>
                        <input type="text" value={form.country} onChange={update('country')} className={inputCls()} placeholder="Your country" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Inquiry Type</label>
                        <select value={form.inquiryType} onChange={update('inquiryType')} className={inputCls()}>
                          <option value="">Select inquiry type</option>
                          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Product of Interest</label>
                        <select value={form.product} onChange={update('product')} className={inputCls()}>
                          <option value="">Select product</option>
                          {PRODUCT_LIST.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Quantity</label>
                        <input type="text" value={form.quantity} onChange={update('quantity')} className={inputCls()} placeholder="e.g., 500 MT/month" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                      <textarea value={form.message} onChange={update('message')} rows={4} className={inputCls(errors.message)} placeholder="Tell us about your requirements, timeline, and any specific questions..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message →'}
                    </button>
                  </form>
                </AnimateOnScroll>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <AnimateOnScroll direction="left">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-5">Office Locations</h3>
                  <div className="space-y-5">
                    {[
                      { city: 'Mumbai HQ', addr: 'NovaChem House, Plot 14, Andheri Industrial Area, Andheri East, Mumbai 400069', tag: 'Head Office' },
                      { city: 'Vadodara Plant', addr: 'Survey No. 234, Padra GIDC, Vadodara 391430, Gujarat', tag: 'Manufacturing' },
                    ].map((office) => (
                      <div key={office.city} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-slate-900 text-sm">{office.city}</span>
                            <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full">{office.tag}</span>
                          </div>
                          <p className="text-slate-500 text-sm leading-relaxed">{office.addr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.1}>
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4">Prefer to Chat?</h3>
                  <p className="text-white/70 text-sm mb-5">Our sales engineers are available on WhatsApp for quick queries.</p>
                  <a href="https://wa.me/919876543210" className="flex items-center gap-3 px-5 py-3.5 bg-[#25D366] rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.2}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', time: '9:00 AM – 6:30 PM' },
                      { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                      { day: 'Sunday', time: 'Closed' },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-slate-600">{item.day}</span>
                        <span className="font-semibold text-slate-900">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3">All times in IST (UTC+5:30)</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
          <div className="text-center text-slate-500">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm font-medium">NovaChem House, Andheri East, Mumbai</p>
            <p className="text-xs mt-1 opacity-60">Embed Google Maps here</p>
          </div>
        </div>
      </section>
    </div>
  )
}
