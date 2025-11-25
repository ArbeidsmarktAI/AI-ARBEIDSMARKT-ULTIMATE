# AI & Arbeidsmarkt

Een premium Next.js website die de invloed van kunstmatige intelligentie op de Nederlandse arbeidsmarkt onderzoekt. Met een luxueuze, moderne design geïnspireerd door elegante tech brands, maar uniek in zijn uitvoering.

## Kenmerken

- **Modern & Responsive Design**: Volledig responsive met een elegante, minimalistische interface
- **Dark Mode**: Schakel tussen licht en donker thema met persistente opslag
- **Interactieve Animaties**: Smooth transitions, scroll-triggered animaties en hover effecten
- **Parallax Hero**: Full-screen hero sectie met parallax scrolling effect
- **Zoekfunctionaliteit**: Doorzoek beroepen en filter op sector
- **Animated Counters**: Live statistieken met geanimeerde tellers
- **Interactive Sliders**: AI-toepassingen en testimonials met auto-play
- **SEO Optimized**: Meta tags, semantic HTML en geoptimaliseerde structuur
- **Performance**: Lazy loading, geoptimaliseerde assets en snelle laadtijden

## Technologie Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS 4
- **Animaties**: Framer Motion
- **TypeScript**: Voor type-veiligheid
- **Database**: Supabase (optioneel, geconfigureerd)

## Pagina's

1. **Home** - Hero sectie, features, statistieken, AI-toepassingen, testimonials
2. **Voor Werkenden** - Beroepen database met zoek- en filterfunctionaliteit
3. **Voor Studenten** - Toekomstbestendige opleidingen en carrière tips
4. **Over Ons** - Sectoranalyses en AI tijdlijn
5. **Contact** - Contactformulier en bedrijfsinformatie

## Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm run build

# Start productie server
npm start
```

## Environment Variables

Het project is geconfigureerd met Supabase. De environment variabelen staan in `.env`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_SUPABASE_ANON_KEY=your_supabase_key
```

## Deployment

Deze website is geoptimaliseerd voor deployment op Vercel:

1. Push je code naar een Git repository
2. Importeer het project in Vercel
3. Vercel detecteert automatisch Next.js
4. Deploy!

## Design Principes

- **Minimalistisch**: Clean, elegant design zonder onnodige elementen
- **Accessible**: WCAG 2.1 compliant, goede contrast ratios
- **Performance**: Optimized images, lazy loading, efficient animations
- **Responsive**: Mobile-first approach met breakpoints voor alle schermgroottes
- **Luxe**: Premium feel door aandacht voor detail en smooth interacties

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Licentie

ISC

## Contact

Voor vragen of feedback: info@ai-arbeidsmarkt.nl
