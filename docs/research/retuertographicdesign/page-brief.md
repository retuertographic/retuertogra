# retuertographicdesign.com — homepage brief

Source: https://retuertographicdesign.com/ (WordPress + Elementor, Hello theme). Local route: `/` (`src/app/page.tsx`).

## Tokens
- Fonts: Poppins 500/600 (headings), Figtree 400/600 (body), Roboto 500 (catalog "Details"), Inter 400 (copyright).
- Colors: green `#99C02A`, blue `#4A90E2`, navy `#032E82`, ink `#1A1A1A`, text `#333`, gray `#F2F2F2`, slate `#69727D`.
- Desktop layout breakpoint: 1025px.

## Sections (desktop 1440 y-offsets: source / clone)
| Section | Source | Clone |
|---|---|---|
| Header | 0 | 0 |
| Hero carousel (2 slides, 900px) | 149 | 149 |
| Our Expertise (3 tabs) | 1161 | 1161 |
| What we do | 2180 | 2181 |
| Connect Minds CTA | 2813 | 2814 |
| Featured Work (3 cards) | 3235 | 3236 |
| Growth Catalog carousel | 4340 | 4341 |
| Newsletter | 5220 | 5221 |
| Connecting experiences banner | 5676 | 5677 |
| Let's Connect + Google Map | 6126 | 6127 |
| Footer | 6746 | 6747 |

## Interactions
- Hero: prev/next arrows + bullets, no autoplay; slide 1 white 50% overlay/dark text, slide 2 green 50% overlay/white text.
- Expertise: tabs (desktop) / stacked titles with panel below active title (mobile). Technical tab puts image on the left.
- Catalog: 4 per view desktop, 1 mobile, arrows, bullets, autoplay.
- Header: language hover dropdown (EN → ES), mobile hamburger menu.

## Assets
All in `public/sites/retuertographicdesign/images/`, downloaded from `/wp-content/uploads/2025-2026/…` and WPML flags. Icons extracted as inline SVG in `icons.tsx`.

## Out of scope / differences
- Links to other pages (Shop, legal pages, `/es/`, `/contact/`) point to the live source site.
- Forms are not wired to a backend (submit to source URLs).
- Cookie consent banner (Complianz) and WooCommerce mini-cart drawer not reproduced.
- Map iframe loads directly (the source gates it behind cookie consent).
