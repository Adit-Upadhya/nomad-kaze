# Nomad Kaze — Motorcycle Tour Website

Offroad motorcycle expedition agency based in Pokhara, Nepal.  
Routes: Pokhara → Baglung → Mustang and beyond.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (bundler / dev server)
- **CSS Modules** (scoped styles per component)
- Google Fonts: Anton, Libre Baskerville, IBM Plex Mono

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
nomad-kaze/
├── index.html               # HTML entry point
├── vite.config.ts           # Vite config
├── tsconfig.json            # TypeScript config
├── package.json
└── src/
    ├── main.tsx             # React root
    ├── App.tsx              # Page composition
    ├── types/
    │   └── index.ts         # All TypeScript interfaces & types
    ├── data/
    │   └── index.ts         # Tours, fleet, routes, testimonials data
    ├── styles/
    │   └── global.css       # CSS variables, reset, base styles
    └── components/
        ├── Navbar.tsx / .module.css
        ├── Hero.tsx / .module.css
        ├── Ticker.tsx / .module.css
        ├── StatsBar.tsx / .module.css
        ├── SectionHeader.tsx / .module.css
        ├── Tours.tsx / .module.css
        ├── RouteMap.tsx / .module.css
        ├── WhyUs.tsx / .module.css
        ├── Fleet.tsx / .module.css
        ├── Testimonials.tsx / .module.css
        ├── BookingForm.tsx / .module.css
        ├── CTA.tsx / .module.css
        └── Footer.tsx / .module.css
```

---

## Customisation

### Update Content
All text content lives in `src/data/index.ts`:
- `TOURS` — edit tour names, routes, prices, descriptions
- `BIKES` — update fleet
- `TESTIMONIALS` — add real rider reviews
- `ROUTE_STOPS` — adjust route waypoints and elevations
- `STATS` — update company stats

### Update Contact Info
In `src/components/BookingForm.tsx`, replace:
- Phone number: `+977 98XXXXXXXX`
- Email: `hello@nomadkaze.com`

### Connect the Enquiry Form
In `BookingForm.tsx`, replace the `await new Promise(...)` simulation with a real API call:
```ts
// Example: send to your backend or a service like Formspree
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Colors
All brand colors are in `src/styles/global.css` as CSS variables:
```css
--fire: #D94F00;    /* primary orange */
--ink: #141210;     /* dark background */
--sand: #E8D5B0;    /* warm text */
--mustang: #3D5A3E; /* green section bg */
```

---

## Deployment

**Netlify (recommended — free):**
1. `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

**Vercel:**
```bash
npm i -g vercel
vercel
```

---

## License
Private. All rights reserved — Nomad Kaze Pvt. Ltd., Pokhara, Nepal.
