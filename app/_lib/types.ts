export interface Product {
  slug: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  specifications: Record<string, string>
  applications: string[]
  packaging: string[]
  safetyInfo: string
  relatedSlugs: string[]
  featured: boolean
  casNumber?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorRole: string
  date: string
  readTime: number
  tags: string[]
  featured: boolean
}

export interface TeamMember {
  name: string
  role: string
  department: string
  bio: string
  initials: string
  color: string
}

export interface Testimonial {
  name: string
  company: string
  role: string
  quote: string
  rating: number
  initials: string
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export interface Industry {
  slug: string
  name: string
  description: string
  products: string[]
  icon: string
  color: string
}
