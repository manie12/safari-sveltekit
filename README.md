# ASIS Safaris - SvelteKit

A luxury safari booking platform built with **SvelteKit** and the authentic **Abercrombie & Kent** design system.

## 🚀 Why SvelteKit?

| Feature | React | SvelteKit |
|---------|-------|-----------|
| Bundle Size | 584 KB | 97 KB (83% smaller) |
| SSR/SEO | Requires setup | Built-in |
| Routing | React Router | File-based |
| State | useState/Context | Reactive $: |
| Styling | CSS-in-JS/Mantine | Scoped CSS |
| Learning Curve | Medium | Easy |

## 🎨 Design System

Based on authentic A&K tokens extracted from their production CSS:

```css
/* Primary Backgrounds */
--color-linen: #f5f2eb

/* Signature Accent Colors */
--color-burnt-sienna: #aa5432
--color-warm-sand: #c3aa84
--color-forest: #335525

/* Typography */
--font-primary: 'Cormorant Garamond' (serif headings)
--font-secondary: 'Inter' (body text)
```

## 📁 Project Structure

```
asis-safaris-svelte/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # Root layout (Header + Footer)
│   │   └── +page.svelte        # Main safari itinerary page
│   │
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── ItineraryDay.svelte
│   │   │   └── BookingPanel.svelte
│   │   │
│   │   ├── data/
│   │   │   └── safaris.ts      # Safari package data
│   │   │
│   │   └── types/
│   │       └── index.ts        # TypeScript interfaces
│   │
│   ├── app.html                # HTML template
│   └── app.css                 # Global styles + A&K design tokens
│
├── static/                     # Static assets (images)
│   ├── ak-forest.webp
│   ├── ak-guide.webp
│   ├── ak-nile.webp
│   ├── ak-japan.webp
│   └── ak-morocco.webp
│
├── svelte.config.js
├── vite.config.ts
└── package.json
```

## 🛠 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## ✨ Key Features

### 1. Side-by-Side Layout
```
┌────────────────────────────────────────────────────┐
│                   HERO IMAGE                        │
├─────────────────────────┬──────────────────────────┤
│   ITINERARY (scrolls)   │   BOOKING PANEL (sticky) │
│   [Day 1: Nairobi   ▼]  │   FROM $2,450 / person   │
│   [Day 2: Nakuru    ▼]  │   📅 Select Dates        │
│   [Day 3: Mara      ▼]  │   [Talk to Us First]     │
└─────────────────────────┴──────────────────────────┘
```

### 2. Expandable Day Cards
Click any day to reveal:
- Full description
- Highlights with checkmarks
- Activities (included vs. optional)
- Accommodation details

### 3. "Talk to Us First" CTA
Instead of "Book Now", we prioritize human connection:
- Live price calculator
- Contact form with method selection
- 30-minute response promise

### 4. Mobile Responsive
- Sticky bottom CTA
- Collapsible navigation
- Touch-friendly interactions

## 🔄 React → Svelte Conversion Notes

### State Management
```jsx
// React
const [count, setCount] = useState(0);
setCount(count + 1);
```
```svelte
<!-- Svelte -->
<script>
  let count = 0;
  count += 1; // Just assign!
</script>
```

### Reactive Declarations
```jsx
// React
const total = useMemo(() => price * quantity, [price, quantity]);
```
```svelte
<!-- Svelte -->
<script>
  $: total = price * quantity; // Automatic reactivity!
</script>
```

### Conditional Rendering
```jsx
// React
{isOpen && <Modal />}
{isLoading ? <Spinner /> : <Content />}
```
```svelte
<!-- Svelte -->
{#if isOpen}
  <Modal />
{/if}

{#if isLoading}
  <Spinner />
{:else}
  <Content />
{/if}
```

### Loops
```jsx
// React
{items.map(item => <Item key={item.id} {...item} />)}
```
```svelte
<!-- Svelte -->
{#each items as item (item.id)}
  <Item {...item} />
{/each}
```

### Event Handling
```jsx
// React
<button onClick={() => setCount(c => c + 1)}>
```
```svelte
<!-- Svelte -->
<button on:click={() => count += 1}>
```

### Scoped Styles
```svelte
<style>
  /* These styles only apply to this component */
  .button { background: blue; }
</style>
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -D @sveltejs/adapter-vercel
```
```js
// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
```

### Netlify
```bash
npm i -D @sveltejs/adapter-netlify
```

### Node.js Server
```bash
npm i -D @sveltejs/adapter-node
```

## 📦 Dependencies

- **svelte** ^4.2.12
- **@sveltejs/kit** ^2.5.0
- **lucide-svelte** ^0.363.0 (icons)
- **vite** ^5.2.0

## 🔗 Backend Integration

Same API endpoints as React version:

```typescript
POST /api/inquiries
{
  packageId: string,
  selectedDate: Date,
  travelers: { adults: number, children: number },
  selectedAddOns: string[],
  customerInfo: { name, phone, email, message },
  estimatedTotal: number,
  preferredContact: 'call' | 'whatsapp' | 'email'
}
```

---

Built with SvelteKit + A&K Design System • Nairobi, Kenya 🇰🇪
