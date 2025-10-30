# 📈 LOCAL-MARKETING.md

**Mediahaus – Local Digital & Offline Marketing Strategy**

> This document outlines Mediahaus's tactical local marketing plan — combining **Facebook Ads, Google Ads, QR integrations, and analytics tracking** — to drive qualified leads from **Centurion, Pretoria, and Johannesburg** directly to the Mediahaus website.
>
> 🌐 For SEO and Cloudflare deployment setup, see [README.md](./README.md)

---

## 🧭 1. Local Market Focus

| Target Regions   | Primary Focus                           | Secondary Reach |
| ---------------- | --------------------------------------- | --------------- |
| **Centurion**    | HQ & immediate business radius          |                 |
| **Pretoria**     | High printer & signage business density |                 |
| **Johannesburg** | Major industrial and retail signage hub |                 |

**Industries / Audience Segments**

* Printing studios & signage companies
* Retail display & branding teams
* Designers, architects, engineers (Inkjet/Bond media)
* Promotional & event companies
* Textile decorators & t-shirt printers (DTF Film)

---

## 🎯 2. Facebook / Instagram Geo Ads

### Objective

Build local awareness, generate leads, and drive conversions to Mediahaus product pages.

### Ad Settings

| Parameter               | Recommendation                                |
| ----------------------- | --------------------------------------------- |
| **Location**            | Centurion + Pretoria + Johannesburg           |
| **Age Range**           | 25–55                                         |
| **Gender**              | All                                           |
| **Language**            | English                                       |
| **Devices**             | Mobile + Desktop                              |
| **Placement**           | Facebook Feed, Instagram Feed, Stories, Reels |
| **Budget (Test Phase)** | R200–R300/day per campaign                    |
| **Optimization**        | Leads (Form) or Conversions (Website)         |

---

### 🧩 Campaign Breakdown

#### 🟦 Campaign 1: "Eezidot Demo" Video Ad

* **Goal:** Showcase the easy-apply vinyl technology
* **Ad Type:** Lead Form or Message Ad
* **Creative:** 10–15 sec video showing smooth peel & reapply
* **CTA:** *"Request a Demo"*
* **Landing Page:** `/eezidot-vinyl`
* **UTM:**

  ```
  ?utm_source=facebook&utm_medium=video&utm_campaign=eezidot-demo
  ```

#### 🟧 Campaign 2: "Inkjet Range" Awareness

* **Goal:** Build visibility for Inkjet Paper, Canvas & Vinyl
* **Ad Type:** Traffic / Awareness
* **Creative:** Carousel of 3 product types (Paper, Canvas, Vinyl)
* **CTA:** *"View Range"*
* **Landing Page:** `/inkjet`
* **UTM:**

  ```
  ?utm_source=facebook&utm_medium=carousel&utm_campaign=inkjet-awareness
  ```

#### 🟩 Campaign 3: "DTF Film" Conversion Ad

* **Goal:** Generate enquiries for DTF Film
* **Ad Type:** Conversion (Website)
* **Creative:** 10 sec video or static demo image showing print → powder → press
* **CTA:** *"Get Pricing"*
* **Landing Page:** `/dtf-finishing`
* **UTM:**

  ```
  ?utm_source=facebook&utm_medium=conversion&utm_campaign=dtf-film
  ```

---

### 🧭 Audience Filters (Interest Targeting)

```
Printing
Signage
HP Latex Printers
Epson SureColor
Roland Printers
Mimaki Printers
Vinyl Cutter
Design Studio
Advertising Agency
```

---

## 🔎 3. Google Ads (Search Campaign)

### Campaign: "Print Media Supplier – Gauteng"

* **Type:** Search (Responsive Ads)
* **Goal:** Drive enquiries via contact form
* **Budget:** R200–R300/day

#### 🔑 Keywords

```
print media supplier
vinyl rolls centurion
photo paper south africa
dtf film south africa
solvent vinyl supplier
inkjet media supplier
```

#### 📄 Example Ad Copy

**Headline 1:** Large Format Print Media Supplier
**Headline 2:** Vinyl, Banners, Canvas, DTF Film
**Description:** Mediahaus supplies premium print media across Centurion, Pretoria, and Johannesburg. Order today for quality you can trust.

**Final URL:**
`https://mediahaus.co.za/contact`

**UTM Tracking:**

```
?utm_source=google&utm_medium=cpc&utm_campaign=search-print-media
```

#### 🔧 Recommended Extensions

* **Sitelinks:** Inkjet Media | Solvent Range | DTF Film | Contact Us
* **Call Extension:** Direct contact number
* **Location Extension:** Centurion, Gauteng

---

## 🧾 4. Offline → Online Conversions

| Tactic                             | Description                                                         | Link Example                                                               |
| ---------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **QR Codes on Packaging**          | Small QR on every roll or label linking to its online product page. | `https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging` |
| **Sample Pack Inserts**            | Printed cards with QR: "View Full Range Online".                    | `https://mediahaus.co.za/products?utm_source=qr&utm_medium=sample-pack`    |
| **Event Banners / Display Stands** | QR leading to product landing page or promo.                        | `https://mediahaus.co.za/dtf-finishing?utm_source=qr&utm_medium=event`     |
| **Business Cards & Flyers**        | Include QR to homepage.                                             | `https://mediahaus.co.za/?utm_source=qr&utm_medium=offline`                |

> 🧠 Use **dynamic QR codes (Bitly or QR.io)** so you can update destinations later without reprinting.

---

## 🧩 5. Tracking Setup

| Platform                           | Integration          | Purpose                                 |
| ---------------------------------- | -------------------- | --------------------------------------- |
| **Meta Pixel**                     | via Cloudflare Zaraz | Track form submissions & ad conversions |
| **Google Analytics 4**             | via Zaraz or gtag.js | Measure user behaviour & conversions    |
| **Google Ads Conversion Tracking** | via GA4              | Link Search campaigns to results        |
| **Cloudflare Web Analytics**       | Built-in             | Lightweight, privacy-safe tracking      |

#### Example UTM Builder

Use Google's [Campaign URL Builder](https://ga-dev-tools.web.app/campaign-url-builder/)
Fill out:

```
Source: facebook / google / qr
Medium: cpc / video / packaging
Campaign: inkjet-awareness / dtf-film
```

---

## 📊 6. Reporting & Optimization

| Timeframe     | Task                                        | Metric                        |
| ------------- | ------------------------------------------- | ----------------------------- |
| **Weekly**    | Check ad spend, CTR, conversions            | Facebook + Google dashboards  |
| **Bi-weekly** | Optimize creatives (image/video rotation)   | CTR, CPC                      |
| **Monthly**   | Update campaign budget & top-performing ads | Cost per Lead (CPL)           |
| **Quarterly** | Review website performance via GA4          | Page conversions, Bounce rate |

---

## 💰 7. Test Phase Budget Overview

| Platform                 | Campaigns                | Daily Budget          | Monthly (30 days) |
| ------------------------ | ------------------------ | --------------------- | ----------------- |
| **Facebook / Instagram** | 3 (Eezidot, Inkjet, DTF) | R200–R300 each        | R18,000–R27,000   |
| **Google Ads**           | Search campaign          | R300                  | R9,000            |
| **TOTAL (Month 1)**      |                          | **≈ R27,000–R36,000** |                   |

> 📈 Expect ~50–80 quality leads/month during test phase if landing pages and forms are optimized.

---

## 🧱 8. Landing Page Optimization

Each campaign should point to a **dedicated landing page** with:

* A focused headline matching ad copy
* Hero product image (or short looping demo)
* Key benefits in 3 bullet points
* Short contact form (Name, Email, Phone, Message)
* Trust indicators (local presence, delivery info, logos)
* Fast load times (under 2 seconds)

Example structure (for `/dtf-finishing`):

```
<h1>DTF Film – Durable, Vibrant Textile Transfers</h1>
<p>Professional-grade DTF Film compatible with Epson, Roland, and Mimaki printers. Ships nationwide from Centurion.</p>
<button>Get Pricing</button>
```

---

## 🔍 9. SEO + Local Schema Enhancement

Include **LocalBusiness schema** (JSON-LD) on homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mediahaus",
  "image": "https://mediahaus.co.za/logo/mediahaus-logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Centurion",
    "addressRegion": "Gauteng",
    "addressCountry": "South Africa"
  },
  "url": "https://mediahaus.co.za",
  "telephone": "+27 12 345 6789",
  "priceRange": "$$"
}
```

---

## 📋 10. Growth Loop Plan

1. **Run Facebook + Google Ads (Month 1–2)**
   → Gather lead data + click behavior
2. **Identify top-performing creatives**
   → Build permanent remarketing audiences
3. **Add remarketing banners (Month 3)**
   → "Already viewed Inkjet Range? Try DTF Film!"
4. **Optimize QR tracking**
   → Measure offline-to-online visits
5. **Refine SEO + page content monthly**
   → Boost organic rankings alongside paid

---

## 🧠 Notes & Future Steps

* Add **Remarketing audiences** to Meta & Google after 30 days.
* Connect **Cloudflare Zaraz** to all pixels for lighter load & better privacy.
* Expand into **WhatsApp Click Ads** (Meta) for direct engagement.
* Create a **"Mediahaus Demo Day"** event lead magnet in Q2 (Eezidot + DTF).
* Run short video content on **Instagram Reels** and **YouTube Shorts** to drive awareness affordably.

---

### Maintainer

**Mediahaus Marketing Team**
📧 [info@mediahaus.co.za](mailto:info@mediahaus.co.za)
📍 Centurion, Gauteng, South Africa