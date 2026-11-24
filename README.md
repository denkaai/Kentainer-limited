# Kentainers Limited — Production Marketing & Catalogue Website

A modern, production-ready marketing and product catalogue website for **Kentainers Limited**, Kenya's established manufacturer of polyethylene rotomoulded products (KENTANK water tanks, Mobilet sanitation systems, agriculture, material handling, and educational furniture).

Built with plain HTML5, CSS3, and vanilla JavaScript. No node dependencies, no npm, and no build step required. Opens immediately by double-clicking `index.html` via `file://` and deploys as-is to Netlify, GitHub Pages, or any static web host.

---

## 1. Original → Web Image Filename Mapping

All original images in `./images/` are preserved untouched. Web-safe copies with lowercase kebab-case filenames are in `./images/web/`.

| Original Filename | Web Copy (`images/web/`) | Dimensions | Usage / Purpose |
|:---|:---|:---|:---|
| `kentainers-logo.png` | `logo.png` | 418 × 120 | Site header, mobile drawer & footer logo |
| `Kentank 24,000 Litres.jpg` | `kentank-24000l.jpg` | 430 × 487 | 24,000L tank product card, news card |
| `KENTANK 20000L Water Storage Tank.jpg` | `kentank-20000l.jpg` | 720 × 540 | 20,000L tank product card |
| `KENTANK 16000L Water Storage Tank.jpg` | `kentank-16000l.jpg` | 720 × 405 | 16,000L tank featured product |
| `KENTANK 8000L Water Storage Tank.jpg` | `kentank-8000l.jpg` | 720 × 959 | 8,000L tank featured product |
| `KENTANK-6,000L Cylindrical Tank.png` | `kentank-6000l-cylindrical-tank.png` | 510 × 484 | 6,000L tank category tile & product card |
| `KENTANK-6,000L Cylindrical Tank-1.png` | `kentank-6000l-cylindrical-tank-1.png` | 510 × 510 | 6,000L tank gallery thumbnail |
| `KENTANK 3000L Water Storage Tank.jpg` | `kentank-3000l.jpg` | 980 × 700 | 3,000L tank featured product & category tile |
| `kentank-2000l.jpg` | `kentank-2000l.jpg` | 455 × 505 | 2,000L tank product card |
| `KENTANK-2500.jpeg` | `kentank-2500l.jpeg` | — | 2,500L tank product card (**NEW**) |
| `Kentank-hero-1.jpeg` | `kentank-hero-1.jpeg` | — | Homepage hero slide (**NEW**) |
| `kentainer-hero-background.jpeg` | `kentainer-hero-background.jpeg` | — | Homepage hero slide 1 (**NEW**) |
| `kentank-1.webp` | `kentank-1.webp` | 474 × 521 | 1,000L cylindrical tank product card |
| `kentank.webp` | `kentank.webp` | 474 × 314 | Tank gallery thumbnail |
| `KENTANK-Cylindrical Tank.webp` | `kentank-cylindrical-tank.webp` | 196 × 196 | Tank gallery thumbnail |
| `KENTANK-Cylindrical Tank-1.webp` | `kentank-cylindrical-tank-1.webp` | 214 × 263 | Tank gallery thumbnail |
| `Kentainers-Loftank.jpg` | `kentainers-loftank.jpg` | 430 × 487 | KENTANK Loftank ceiling tank product card |
| `32mm HDPE PN6-PN8.jpg` | `32mm-hdpe-pn6-pn8.jpg` | 160 × 120 | HDPE pipe product card & hero slide |
| `25 mm HDPE PN6.PN8.jpg` | `25mm-hdpe-pn6-pn8.jpg` | 160 × 120 | HDPE pipe gallery thumbnail |
| `50mm HDPE PN6-PN8.jpg` | `50mm-hdpe-pn6-pn8.jpg` | 120 × 160 | HDPE pipe gallery thumbnail |
| `32 mm PVC.jpg` | `32mm-pvc.jpg` | 160 × 107 | PVC pipe product card |
| `25 mm PVC.jpg` | `25mm-pvc.jpg` | 160 × 160 | PVC pipe gallery thumbnail |
| `20mm PVC.jpg` | `20mm-pvc.jpg` | 160 × 157 | PVC pipe gallery thumbnail |
| `kentainer-drum-Blue.jpg` | `kentainer-drum-blue.jpg` | 430 × 487 | 210L industrial drum, hero slide & category tile |
| `kentainers-Kpot-white.jpg` | `kentainers-kpot-white.jpg` | 430 × 487 | K-Pot planter, category tile |
| `Countrywide delivery.jpg` | `countrywide-delivery.jpg` | 738 × 738 | Hero slide, About page, News card |
| `Fair pricing.jpg` | `fair-pricing.jpg` | 980 × 700 | News card (article 3) |
| `Qdesk.jpg` | `qdesk.jpg` | — | QDesk school furniture product card (**NEW**) |

**Background colour for QDesk and product photography cards:** `#f4f4f4` (measured from corner pixel of `Qdesk.jpg`). Used as `--bg-thumb` in CSS so product photos without hard studio backgrounds blend seamlessly.

---

## 2. Unused Images

The following web copies exist but are not currently linked in any page or product card. They are kept in `images/web/` and listed here for reference.

| Web Filename | Reason Unused |
|:---|:---|
| `kentank-hero-1.jpeg` | Retained as spare hero slide — available to swap in via `index.html` hero slides array if preferred over current selection |

---

## 3. Missing Product Photos (Zero-Code Drop-In)

Products below do not yet have a real photo. Each `<img>` in the product card and single-product page points to `images/web/<slug>.jpg`. An `onerror` handler automatically shows a branded placeholder. **To add a photo, simply save the image as the matching filename — no code change required.**

| Product Name | Category | Expected Filename in `images/web/` |
|:---|:---|:---|
| KENTANK Mobilet VIP Portable Sanitation Unit | Sanitation & Waste | `kentank-mobilet-vip-sanitation.jpg` |
| KENTANK Rotomoulded Polyethylene Septic Tank | Sanitation & Waste | `kentank-poly-septic-tank.jpg` |
| KENTANK Hands-Free Foot-Pedal Hygiene Station | Sanitation & Waste | `kentank-foot-pedal-hygiene-station.jpg` |
| KENTANK Hermetic Polyethylene Grain Silo | Agriculture & Biogas | `kentank-hermetic-grain-silo.jpg` |
| KENTANK Livestock Waterer & Feeding Trough | Agriculture & Biogas | `kentank-livestock-trough.jpg` |
| KENTANK Aquaculture & Fish Rearing Tub | Agriculture & Biogas | `kentank-fish-rearing-tub.jpg` |
| KENTANK Continuous-Flow Poly Bio-Digester | Agriculture & Biogas | `kentank-bio-digester.jpg` |
| KENTANK Heavy-Duty Industrial Poly Pallet | Material Handling | `kentank-industrial-poly-pallet.jpg` |
| KENTANK Nestable Storage & Tote Crates | Material Handling | `kentank-tote-crates.jpg` |
| KENTANK Heavy-Duty Polyethylene Outdoor Bench | Furniture & QDesk | `kentank-outdoor-park-bench.jpg` |

---

## 4. Assumptions Made

1. **`file://` Protocol Compatibility**: All shared components (top bar, header, footer, WhatsApp button) are injected via `js/components.js` using DOM manipulation rather than `fetch()`, which browsers block under CORS on `file://` origins. The site therefore works both directly from File Explorer and when served over HTTP.
2. **No Prices**: In compliance with the client brief, no prices have been invented anywhere on the site. Every product uses a "Request Price" CTA that opens `request-a-quote.html` with the product pre-filled, or sends a pre-composed WhatsApp message.
3. **Six Product Categories**: Products are classified into six slug-based categories: `water-storage`, `pipes-fittings`, `sanitation-waste`, `agriculture-biogas`, `material-handling`, `furniture-qdesk`. All filter pills, URL query strings, and search dropdowns use these slugs.
4. **35 Years**: "Over 35 years" is used based on the logo showing "35". The founding year should be confirmed by the client so copy can be pinned to a specific year.
5. **QDesk Background**: The exact corner pixel colour of `Qdesk.jpg` was measured as `#F4F4F4` (RGB 244, 244, 244). This is used as `--bg-thumb` in CSS so the product photo merges with the card background without a hard box edge.
6. **WhatsApp & Phone**: Both `tel:+254702233258` and `https://wa.me/254702233258` are used consistently throughout. All form submissions open a pre-composed WhatsApp message.

---

## 5. Client Confirmation Checklist (TODOs)

The following items are tagged `<!-- TODO: confirm -->` in source code and must be verified before final deployment:

- [ ] **Email address** — set to `info@kentainers.co.ke` on all pages and contact forms
- [ ] **Nairobi factory address** — set to: Nairobi Gate Industrial Park, Northlands Area, Eastern Bypass, Nairobi
- [ ] **Kilifi factory address** — set to: Kikambala, Malindi Road, Kilifi County
- [ ] **Kisumu factory address** — set to: Victoria Park, Sabuni Road, Off Busia Road, Kisumu
- [ ] **Social media handles** — Facebook, Twitter/X, LinkedIn, Instagram links currently point to platform homepages; replace with official Kentainers handles
- [ ] **Warranty terms** — see `CLAIMS_TO_VERIFY.md` for full list of removed warranty language pending client confirmation
- [ ] **KEBS certification** — see `CLAIMS_TO_VERIFY.md` for removed KS 1709 language pending certificate number
- [ ] **Product photos** — supply photos for the 10 products listed in Section 3 above

---

## 6. How to Run Locally

### Option A — Double-Click (No Server)
Navigate to `C:\Users\User\kentainers` in Windows File Explorer and double-click `index.html`. It opens immediately in Chrome, Edge, or Firefox.

### Option B — Local HTTP Server

```bash
# Python 3
cd C:\Users\User\kentainers
python -m http.server 8085

# Node.js (already running as background task on port 8085)
# just open http://localhost:8085 in a browser
```

---

## 7. How to Deploy to Netlify

1. **Drag & Drop (Instant):**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag the `kentainers/` folder onto the deployment drop zone
   - Netlify deploys in seconds with global CDN and free HTTPS

2. **Git Continuous Deployment:**
   - Push this directory to GitHub/GitLab
   - In Netlify → "Add new site" → "Import an existing project"
   - The included `netlify.toml` handles 404 redirects and caching headers automatically

---

## 8. Project File Structure

```
kentainers/
├── index.html                 # Homepage: hero slider, quick actions, featured products & stats
├── shop.html                  # Full catalogue: 6-category filter pills + live search
├── product.html               # Dynamic single product detail page (reads ?slug= query param)
├── about-us.html              # Corporate heritage, mission, 3 factories, why KENTANK
├── plumbers-hub.html          # Installation essentials, water weight table, pipes, FAQ
├── news-media.html            # News releases, community impact stories, media inquiries
├── find-a-distributor.html    # 6-region dealer directory & stockist application form
├── request-a-quote.html       # Quote form with WhatsApp integration & product prefill
├── contact-us.html            # Factory addresses, contact info & direct customer form
├── 404.html                   # User-friendly 404 error page
├── css/
│   └── style.css              # Master responsive stylesheet (WoodMart-inspired design)
├── js/
│   ├── products.js            # Product data array (24 items, 6 categories, keywords)
│   ├── components.js          # Injected header, mobile nav, footer, search & WhatsApp
│   └── main.js                # Slider, counters, scroll reveals, search, filters, forms
├── images/                    # 28 original images (DO NOT EDIT)
│   └── web/                   # 28 web-safe kebab-case copies (safe to reference in HTML/CSS/JS)
├── robots.txt                 # Search engine crawler directives
├── sitemap.xml                # SEO XML sitemap
├── netlify.toml               # 404 redirect + cache-control headers
├── CLAIMS_TO_VERIFY.md        # Removed/softened claims pending client verification
└── README.md                  # This file
```

---

## 9. Unverified Claims Log

All removed or softened marketing claims are documented in **[CLAIMS_TO_VERIFY.md](CLAIMS_TO_VERIFY.md)** with the original text, the replacement, and a TODO note for the client. The main categories are:

- Warranty duration (10-year, 30-year design life)
- KEBS KS 1709 certification
- "100% virgin LLDPE / food-grade" resin
- "500+ stockists" distribution network size
- "All 47 counties" delivery scope

---

*Last updated: November 2026 — Kentainers Limited website build & update.*
