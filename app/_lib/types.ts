export type CropStage = 'soil-prep' | 'planting' | 'growing' | 'harvest' | 'year-round'

export interface AppUseCase {
  label: string
  stage: CropStage
  method: string
  icon: string
}

export interface ProductFeature {
  label: string   // e.g. "Phosphorus (P₂O₅)"
  icon: string    // emoji shown in the hover arc node
}

export interface Product {
  slug: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  photo?: string               // primary product photograph (card image)
  photos?: string[]            // additional product images (detail-page gallery)
  features?: ProductFeature[]  // up to 5 nodes shown in hover arc
  featureLabel?: string        // headline text, e.g. "RICH IN ESSENTIAL NUTRIENTS"
  specifications: Record<string, string>
  applications: string[]
  applicationGuide?: AppUseCase[]
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
