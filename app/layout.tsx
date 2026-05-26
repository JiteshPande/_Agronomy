import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NovaChem Industries — Premium Chemical Solutions',
    template: '%s | NovaChem Industries',
  },
  description: 'NovaChem Industries is a leading manufacturer and supplier of industrial chemicals, soil conditioners, agro chemicals, water treatment chemicals, and specialty chemicals. Trusted by 2,500+ clients in 45 countries.',
  keywords: ['industrial chemicals', 'soil conditioners', 'agro chemicals', 'water treatment chemicals', 'specialty chemicals', 'chemical manufacturer India'],
  authors: [{ name: 'NovaChem Industries' }],
  creator: 'NovaChem Industries',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'NovaChem Industries',
    title: 'NovaChem Industries — Premium Chemical Solutions',
    description: 'Leading manufacturer of industrial chemicals, agro chemicals, and water treatment solutions. ISO 9001 certified. 28+ years of excellence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaChem Industries',
    description: 'Premium chemical solutions for industry, agriculture, and water treatment.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
