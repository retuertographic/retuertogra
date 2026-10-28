# Arquitectura del sitio

Web principal y tienda en un único proyecto Next.js (exportación estática a GitHub Pages).

## Rutas

| Idioma | Web principal | Tienda |
|---|---|---|
| Inglés (base) | `/` | `/shop/…` |
| Español | `/es/` | `/tienda/…` |
| Alemán | `/de/` | `/laden/…` |

Cada idioma tiene su propio `<html lang>`. `src/app/(en)` sirve `/` y `src/app/(i18n)/[segment]` el resto: el
primer segmento de la URL (`es`, `tienda`, `laden`…) decide idioma y área según `src/i18n/config.ts`.

## Dónde se cambia cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Menú, cabecera, pie y portada (textos) | `src/i18n/dictionaries/{en,es,de}.ts` |
| Diseño de la cabecera / pie (todas las páginas) | `src/components/layout/site-header.tsx`, `site-footer.tsx` |
| Menú de la tienda | `shopNav()` en `src/components/shop/shop-shell.tsx` (las categorías salen solas del catálogo) |
| Precios, imágenes, productos de WooCommerce | `src/shop/catalog.ts` |
| Textos de la tienda (categorías, productos, botones) | `src/shop/i18n/{en,es,de}.ts` |
| Email, teléfonos, WhatsApp, WooCommerce, formularios CRM, reservas | `src/config/site.ts` |
| Textos legales y FAQ | `src/content/legal/{en,es,de}/*.md` (Markdown) |
| URL, título y descripción de cada página legal | `src/legal/registry.ts` |

## Tareas habituales

- **Añadir un producto:** añade su id en `productIds` (`src/shop/types.ts`), su entrada en `src/shop/catalog.ts`
  y sus textos en los tres archivos de `src/shop/i18n/`. `npm run typecheck` avisa si falta alguno.
- **Enlazar la compra con WooCommerce:** en el producto de `catalog.ts`, añade
  `woo: [{ slug: "<slug-del-producto-en-woocommerce>", amount: 99 }]`. Aparece el botón «Comprar ahora».
- **Activar el formulario del CRM:** pon el id de cada formulario en `crmFormIds` (`src/config/site.ts`).
  Mientras sea `null`, se muestran email, WhatsApp y teléfono.
- **Añadir un idioma:** añádelo en `src/i18n/config.ts` (con sus segmentos de URL) y crea su diccionario en
  `src/i18n/dictionaries/` y sus textos en `src/shop/i18n/`. TypeScript señala todo lo que falta.

## Páginas legales

Privacidad, términos, cumplimiento, FAQ, aviso legal y cookies se escriben en Markdown, un archivo por idioma
(`src/content/legal/<idioma>/<página>.md`). En inglés y español conservan las URL de la web WordPress
(`/privacy-policy/`, `/es/cumplimiento/`…); en alemán usan URL propias (`/de/impressum/`…). Las páginas
traducidas muestran un aviso de que prevalece la versión en español (`translated: true` en el registro).
En la FAQ, cada pregunta es un título `###` y su respuesta el párrafo siguiente: así se generan los datos
estructurados `FAQPage`.

## SEO

Cada página genera título, descripción, canonical, `hreflang` y Open Graph. Las fichas incluyen datos
estructurados (`Service`, `Offer`, `BreadcrumbList`) y la portada de la tienda `Organization`. `sitemap.xml` y
`robots.txt` se generan en cada build.

## Publicar

`git push` a `main` → GitHub Actions compila y publica en GitHub Pages (`.github/workflows/deploy-pages.yml`).
