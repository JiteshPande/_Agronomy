import Link from 'next/link'
import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Certifications', href: '/about#certifications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'Industrial Chemicals', href: '/products?category=Industrial+Chemicals' },
  { label: 'Soil Conditioners', href: '/products?category=Soil+Conditioners' },
  { label: 'Agro Chemicals', href: '/products?category=Agro+Chemicals' },
  { label: 'Water Treatment', href: '/products?category=Water+Treatment' },
  { label: 'Specialty Chemicals', href: '/products?category=Specialty+Chemicals' },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Twitter / X',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'YouTube',
    icon: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 hex-pattern opacity-25" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/4 w-80 h-40 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-0 right-1/4 w-80 h-40 rounded-full bg-accent/8 blur-3xl" />

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/" aria-label="NovaChem Industries home">
                <Image
                  src="/logo.png"
                  alt="BSH Agronomy"
                  width={130}
                  height={65}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Pioneering chemical solutions for agriculture, industry, and water treatment since 1997. Trusted by 2,500+ clients across 45 countries.
            </p>

            {/* Stats mini strip */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Years', value: '28+' },
                { label: 'Countries', value: '45+' },
                { label: 'Products', value: '150+' },
                { label: 'Clients', value: '2500+' },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.04] rounded-xl px-3 py-2 border border-white/[0.06]">
                  <div className="text-secondary font-black text-sm">{s.value}</div>
                  <div className="text-white/30 text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-accent hover:text-primary-dark text-white/60 transition-all duration-200 flex items-center justify-center cursor-pointer hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <svg className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Products
            </h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <svg className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cert badges */}
            <div className="mt-6">
              <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2.5">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {['ISO 9001', 'ISO 14001', 'ISO 45001', 'REACH', 'GHS', 'BIS'].map((cert) => (
                  <span key={cert} className="px-2 py-0.5 rounded-md text-white/50 text-[10px] font-semibold border border-white/10 hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Contact Us
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  text: 'NovaChem House, Andheri East,\nMumbai 400069, India',
                },
                {
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  text: '+91 22 4567 8900\n+91 98765 43210',
                },
                {
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  text: 'info@novachemindustries.com\nsales@novachemindustries.com',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/6 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 rounded-xl text-[#25D366] text-sm font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} BSH Agronomy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Made with</span>
            <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>in India</span>
          </div>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
