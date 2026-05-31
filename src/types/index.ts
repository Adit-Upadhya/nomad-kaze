// ─── Tour Types ───────────────────────────────────────────────
export type DifficultyLevel = 'Moderate' | 'Intermediate' | 'Expert'

export interface Tour {
  id: string
  level: DifficultyLevel
  levelColor: string
  offroad: string
  name: string
  nameBreak?: string
  route: string
  description: string
  days: number
  tags: string[]
  price: string
}

// ─── Route Stop Types ─────────────────────────────────────────
export interface RouteStop {
  id: number
  name: string
  elevation: string
  isOrigin?: boolean
  isDestination?: boolean
}

// ─── Fleet Types ──────────────────────────────────────────────
export interface Bike {
  id: string
  icon: string
  name: string
  type: string
  spec: string
}

// ─── Testimonial Types ────────────────────────────────────────
export interface Testimonial {
  id: string
  quote: string
  author: string
  origin: string
  tour: string
}

// ─── Stat Types ───────────────────────────────────────────────
export interface Stat {
  value: string
  label: string
}

// ─── Why Item Types ───────────────────────────────────────────
export interface WhyItem {
  id: string
  icon: string
  title: string
  body: string
}

// ─── Enquiry Form Types ───────────────────────────────────────
export interface EnquiryForm {
  name: string
  email: string
  expedition: string
  riders: string
  experience: string
  message: string
}

export type FormField = keyof EnquiryForm

// ─── Nav Types ────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}
