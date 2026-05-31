import type { Tour, RouteStop, Bike, Testimonial, Stat, WhyItem, NavLink } from '../types'

// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Tours', href: '#tours' },
  { label: 'Routes', href: '#route' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#why' },
  { label: 'Contact', href: '#book' },
]

// ─── Stats ────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: '7+', label: 'Years Riding Nepal' },
  { value: '5,416m', label: 'Highest Pass Ridden' },
  { value: '100%', label: 'Offroad-First' },
  { value: '800+', label: 'Riders Guided' },
]

// ─── Tours ────────────────────────────────────────────────────
export const TOURS: Tour[] = [
  {
    id: 'forbidden-mustang',
    level: 'Expert',
    levelColor: '#D94F00',
    offroad: '>70% Offroad',
    name: 'Forbidden',
    nameBreak: 'Mustang',
    route: 'Pokhara → Baglung → Tatopani → Jomsom → Lo Manthang',
    description:
      'The full run. Ancient walled city, lunar desert plateaus, Kaligandaki gorge singletrack. Permit required. Maximum remoteness.',
    days: 14,
    tags: ['14 Days', 'Special Permit', 'From $2,400'],
    price: '$2,400',
  },
  {
    id: 'baglung-gorge',
    level: 'Intermediate',
    levelColor: '#C47A00',
    offroad: '~50% Offroad',
    name: 'Baglung',
    nameBreak: 'Gorge Run',
    route: 'Pokhara → Baglung → Beni → Myagdi Valley',
    description:
      'The gorge that swallows riders whole. Riverbed crossings, landslide zones, hidden Gurung villages. The classic Nomad Kaze warm-up.',
    days: 6,
    tags: ['6 Days', 'Gorge Trails', 'From $850'],
    price: '$850',
  },
  {
    id: 'dolpo-wildlands',
    level: 'Expert',
    levelColor: '#D94F00',
    offroad: '>80% Offroad',
    name: 'Dolpo',
    nameBreak: 'Wildlands',
    route: 'Pokhara → Baglung → Jajarkot → Shey Phoksundo',
    description:
      "Crystal mountain, the world's deepest lake, trails that dissolve into yak paths. Remote doesn't begin to cover it.",
    days: 18,
    tags: ['18 Days', 'Wilderness Camp', 'From $3,200'],
    price: '$3,200',
  },
  {
    id: 'annapurna-lap',
    level: 'Moderate',
    levelColor: '#8A9A00',
    offroad: '~40% Offroad',
    name: 'Annapurna',
    nameBreak: 'Lap',
    route: 'Pokhara → Baglung → Besi Sahar → Manang → Muktinath',
    description:
      'Circumnavigate the Annapurna massif on a Royal Enfield. Mixed terrain, cultural richness, passes above 5,000m.',
    days: 10,
    tags: ['10 Days', 'Loop Route', 'From $1,400'],
    price: '$1,400',
  },
]

// ─── Route Stops ─────────────────────────────────────────────
export const ROUTE_STOPS: RouteStop[] = [
  { id: 1, name: 'Pokhara', elevation: '820m', isOrigin: true },
  { id: 2, name: 'Baglung', elevation: '900m' },
  { id: 3, name: 'Beni', elevation: '830m' },
  { id: 4, name: 'Tatopani', elevation: '1,190m' },
  { id: 5, name: 'Jomsom', elevation: '2,743m' },
  { id: 6, name: 'Kagbeni', elevation: '2,810m' },
  { id: 7, name: 'Lo Manthang', elevation: '3,840m', isDestination: true },
]

// ─── Fleet ────────────────────────────────────────────────────
export const BIKES: Bike[] = [
  {
    id: 're-himalayan',
    icon: '🏍️',
    name: 'RE Himalayan 450',
    type: 'Primary Offroad Machine',
    spec:
      '452cc · Long travel suspension · Our workhorse for Mustang and Dolpo. Updated 2024 model. Handles anything the Kaligandaki throws at it.',
  },
  {
    id: 'ktm-390',
    icon: '⚡',
    name: 'KTM 390 Adventure',
    type: 'Performance Tourer',
    spec:
      '373cc · WP suspension · For experienced riders who want to push hard. Punchy and precise on the technical sections above Jomsom.',
  },
  {
    id: 're-classic',
    icon: '🟤',
    name: 'RE Classic 350',
    type: 'Trail Companion',
    spec:
      '349cc · Iconic thump · Moderate trails and cultural routes. The Baglung Gorge Run and Annapurna Lap on this machine is something else.',
  },
  {
    id: 'tenere-700',
    icon: '🟡',
    name: 'Yamaha Ténéré 700',
    type: 'Expert Expedition Bike',
    spec:
      '689cc · Rally-tuned · Limited to advanced riders. The Dolpo route demands something in this category. Raw, reliable, unstoppable.',
  },
]

// ─── Why Items ────────────────────────────────────────────────
export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'local',
    icon: '🏔',
    title: 'Pokhara-Based, Local Deep',
    body: "We're not fly-in operators. Our guides are from Gandaki Province — they know the trails, the villages, the families. Every stop means something.",
  },
  {
    id: 'offroad',
    icon: '🛣',
    title: 'Offroad-First Philosophy',
    body: "If there's a paved option and a dirt option, we take the dirt. We design routes to be experienced, not just completed.",
  },
  {
    id: 'stays',
    icon: '⛺',
    title: 'Authentic Stays',
    body: 'Teahouses, homestays, and wilderness camps. No resort hotels. Sleep where the mountain people sleep, eat what they eat.',
  },
  {
    id: 'support',
    icon: '🔧',
    title: 'Full Mechanical Support',
    body: 'A support vehicle with spare parts, tools, and a trained mechanic follows every group. Because remote should not mean stranded.',
  },
  {
    id: 'small',
    icon: '🧭',
    title: 'Small Groups (Max 6)',
    body: "Six riders maximum. You're not in a convoy. You're in a crew. Every decision gets made together, every sunset gets shared equally.",
  },
  {
    id: 'permits',
    icon: '🎌',
    title: 'Permits & Logistics Covered',
    body: 'Mustang special permits, TIMS cards, national park fees — we handle everything. You show up to Pokhara with your kit. We handle the rest.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'lars',
    quote:
      "The Baglung gorge nearly took my handlebars off and I've never grinned so hard in my life. Nomad Kaze doesn't do tourism. They do territory.",
    author: 'Lars B.',
    origin: 'Stockholm, Sweden',
    tour: 'Baglung Gorge Run',
  },
  {
    id: 'nadia',
    quote:
      'We were in Lo Manthang before 7am watching fog roll off the walls. Our guide Bikash had ridden that exact stretch 40+ times and still stopped to take it in. That is what you are paying for.',
    author: 'Nadia F.',
    origin: 'Toronto, Canada',
    tour: 'Forbidden Mustang',
  },
  {
    id: 'james',
    quote:
      'The support truck saved the trip when I dropped my Himalayan into a river. Fixed in under an hour, back riding before lunch. Absolute professionals.',
    author: 'James K.',
    origin: 'Auckland, NZ',
    tour: 'Annapurna Lap',
  },
]

// ─── Ticker Items ────────────────────────────────────────────
export const TICKER_ITEMS: string[] = [
  'Pokhara to Mustang',
  'Raw Offroad Trails',
  'Baglung Gorge Descent',
  'Kaligandaki River Valley',
  'Lo Manthang',
  'Authentic Nepal',
  'Nomad Spirit',
]

// ─── Form Options ─────────────────────────────────────────────
export const EXPEDITION_OPTIONS: string[] = [
  'Forbidden Mustang — 14 Days',
  'Baglung Gorge Run — 6 Days',
  'Dolpo Wildlands — 18 Days',
  'Annapurna Lap — 10 Days',
  'Custom Route',
]

export const RIDER_OPTIONS: string[] = [
  '1 Rider',
  '2 Riders',
  '3–4 Riders',
  '5–6 Riders',
]

export const EXPERIENCE_OPTIONS: string[] = [
  'Beginner (< 1 year)',
  'Intermediate (1–3 years)',
  'Experienced (3–6 years)',
  'Expert (6+ years offroad)',
]
