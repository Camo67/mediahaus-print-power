# 📱 QR-TRACKING.md

**Mediahaus — Offline → Online QR System (Trackable)**

> Turn every roll label, sample pack, flyer, and banner into a measurable visit with **QR codes** that pass **UTM parameters** to GA4 & Meta.
> For ads & local tactics see `LOCAL-MARKETING.md`. For hosting/SEO see `README.md`.

---

## 1) Goals

* Standardize QR links (one convention for all teams)
* Track origin (packaging, samples, events, in-store)
* View results in **GA4** and ad platforms (via UTMs)
* Keep links editable (Bitly) or fully owned (Cloudflare Workers)

---

## 2) URL & UTM Standard (Copy/Paste)

**Base URL**

```
https://mediahaus.co.za
```

**UTM schema**

```
?utm_source=qr&utm_medium=<channel>&utm_campaign=<product_or_promo>&utm_content=<variant>
```

**Channel values (utm_medium)**

```
packaging | sample-pack | flyer | banner | display | distributor | event
```

**Examples**

* Eezidot on packaging:
  `https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1`
* Inkjet range card in sample pack:
  `https://mediahaus.co.za/inkjet?utm_source=qr&utm_medium=sample-pack&utm_campaign=inkjet&utm_content=tri-card`
* DTF at an expo banner:
  `https://mediahaus.co.za/dtf-finishing?utm_source=qr&utm_medium=event&utm_campaign=dtf&utm_content=expo-pretoria-2025`

> Keep `utm_source=qr` for all printed codes (easy filtering).
> Change `utm_medium` + `utm_content` to describe placement and version.

---

## 3) Human-Readable Naming (Print on the label)

Put a tiny label below each QR, like:

```
Scan → Eezidot Vinyl Demo
```

Optional SKU/Rev on the back of the label for internal use:

```
QR: EEZIDOT-PKG-V1
```

---

## 4) Option A (Simple) — Bitly Short Links

**Why:** Editable destination (no reprint if a page changes), built-in click analytics.

**Steps**

1. Create Bitly account.
2. For each target URL (with UTM), create a Bitly link.
   Example long URL:
   `https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1`
3. Customize the back-half, e.g.
   `bit.ly/eezidot-pkg-v1`
4. Download QR directly from Bitly (SVG/PNG). Use **SVG** for packaging print.

**Pros:** Fast, non-technical, editable.
**Cons:** 3rd-party dependency; branding uses bit.ly unless you add a custom domain (recommended later).

---

## 5) Option B (Pro) — Cloudflare Workers Short Links

**Why:** You own the short domain (e.g., `mh.to/` or `go.mediahaus.co.za`), full control, native to your Cloudflare stack.

### 5.1 Short domain

* Add a subdomain: `go.mediahaus.co.za` (Cloudflare DNS → CNAME to Workers).
* Or buy a short .to/.link domain and put it in Cloudflare.

### 5.2 Minimal Worker (KV-backed)

**`wrangler.toml`**

```toml
name = "mediahaus-qr"
main = "src/index.js"
compatibility_date = "2024-10-01"

[[kv_namespaces]]
binding = "LINKS"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

**`src/index.js`**

```js
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const key = url.pathname.replace(/^\/+/, ""); // e.g. eezidot-pkg-v1
    if (!key) return new Response("OK", { status: 200 });

    const target = await env.LINKS.get(key); // full long URL with UTMs
    if (!target) return new Response("Not found", { status: 404 });

    // Optional: add cache headers for speed
    return Response.redirect(target, 302);
  }
}
```

**Create links (KV)**

* In Cloudflare Dashboard → Workers KV → Put:

  * **Key:** `eezidot-pkg-v1`
    **Value:** `https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1`
  * **Key:** `inkjet-sample-tri`
    **Value:** `https://mediahaus.co.za/inkjet?utm_source=qr&utm_medium=sample-pack&utm_campaign=inkjet&utm_content=tri-card`
  * **Key:** `dtf-expo-pta25`
    **Value:** `https://mediahaus.co.za/dtf-finishing?utm_source=qr&utm_medium=event&utm_campaign=dtf&utm_content=expo-pretoria-2025`

**Published short links**

```
https://go.mediahaus.co.za/eezidot-pkg-v1
https://go.mediahaus.co.za/inkjet-sample-tri
https://go.mediahaus.co.za/dtf-expo-pta25
```

> Generate QR codes from these **short links**. If the destination changes, update the KV value—no reprint.

---

## 6) QR Code Generation (Print-Ready)

**Format:** Prefer **SVG** (vector). PNG ≥ 600×600 px for small labels.
**Error Correction:** **M** or **Q** for packaging; **H** for rough surfaces.
**Quiet Zone:** 4 modules (white border) minimum.
**Color:** Black on white for maximum reliability.

**Minimum physical sizes**

* **Packaging label:** 25–30 mm sides
* **Sample pack card:** 30–35 mm
* **Banners / stands:** ≥ 40–50 mm (viewing distance dependent)

**Placement tips**

* Keep flat, avoid seams or curves.
* High contrast (don't place over busy images).
* Add a call-to-action: "Scan to view range".

---

## 7) Source of Truth — Tracking Sheet (Team Use)

Create `qr_links.csv` (or Google Sheet). Suggested columns:

| code_key          | short_url                            | long_url                                                                                                                                                                                                                                     | product | medium      | campaign | content            | owner | date_created | status  |
| ----------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------- | -------- | ------------------ | ----- | ------------ | ------- |
| eezidot-pkg-v1    | go.mediahaus.co.za/eezidot-pkg-v1    | [https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1](https://mediahaus.co.za/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1)                 | Eezidot | packaging   | eezidot  | v1                 | Dawid | 2025-10-27   | active  |
| inkjet-sample-tri | go.mediahaus.co.za/inkjet-sample-tri | [https://mediahaus.co.za/inkjet?utm_source=qr&utm_medium=sample-pack&utm_campaign=inkjet&utm_content=tri-card](https://mediahaus.co.za/inkjet?utm_source=qr&utm_medium=sample-pack&utm_campaign=inkjet&utm_content=tri-card)                 | Inkjet  | sample-pack | inkjet   | tri-card           | Dawid | 2025-10-27   | active  |
| dtf-expo-pta25    | go.mediahaus.co.za/dtf-expo-pta25    | [https://mediahaus.co.za/dtf-finishing?utm_source=qr&utm_medium=event&utm_campaign=dtf&utm_content=expo-pretoria-2025](https://mediahaus.co.za/dtf-finishing?utm_source=qr&utm_medium=event&utm_campaign=dtf&utm_content=expo-pretoria-2025) | DTF     | event       | dtf      | expo-pretoria-2025 | Dawid | 2025-10-27   | planned |

> Keep this file in `/ops/qr_links.csv` and gate edits via PRs (small team discipline).

---

## 8) GA4 & Meta Tracking

**GA4 Views**

* Acquisition → Traffic acquisition → filter `Session source = qr`
* Create a **Saved Comparison** "QR Traffic"
* Add a **Custom Exploration** breaking down:

  * `Session medium` (packaging, event)
  * `Campaign` (eezidot, inkjet, dtf)
  * Goal events (form_submit, click_call)

**Meta**

* UTMs flow through to GA4; for Meta attribution, rely on Pixel events (set up via Zaraz).

**Events to capture on landing pages**

* `generate_lead` (form submit)
* `contact` (click phone/email/WhatsApp)
* `view_item` (product view if you run granular events)

---

## 9) QA Checklist (Before Printing)

* [ ] Destination loads in < 2s (Core Web Vitals green)
* [ ] Page title & CTA match the QR context (no mismatch)
* [ ] UTMs present on the final URL
* [ ] Test scans: iOS & Android, default cameras
* [ ] Track a test session in **Realtime** (GA4)
* [ ] Save final QR **SVG** + **PNG** to `/public/assets/qr/`

---

## 10) Quick Starter Set (Use Now)

| Use                | Short Path           | Final URL (with UTM)                                                                            |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------- |
| Eezidot Packaging  | `/eezidot-pkg-v1`    | `/eezidot-vinyl?utm_source=qr&utm_medium=packaging&utm_campaign=eezidot&utm_content=v1`         |
| Inkjet Sample Pack | `/inkjet-sample-tri` | `/inkjet?utm_source=qr&utm_medium=sample-pack&utm_campaign=inkjet&utm_content=tri-card`         |
| DTF Expo Banner    | `/dtf-expo-pta25`    | `/dtf-finishing?utm_source=qr&utm_medium=event&utm_campaign=dtf&utm_content=expo-pretoria-2025` |

> Replace with Bitly links if using Option A, or create KV keys if using Option B.

---

## 11) Maintenance & Governance

* All new codes require:

  * Unique `code_key`
  * Proper UTMs
  * Owner & date
* Quarterly cleanup:

  * Remove stale codes, 301 redirect to category root if needed
* Versioning:

  * Increment `utm_content` (v1, v2) when you reprint packaging

---

## 12) FAQ

**Q: Can we change destinations after printing?**

* **Bitly:** Yes, edit the long URL in Bitly.
* **Workers:** Yes, update KV value for the key.

**Q: Do QR UTMs affect SEO?**

* No. They're query strings; they don't change canonical content.

**Q: What if a page moves?**

* Keep the short link the same. Update its target to the new URL.

---

### Owner

Mediahaus Marketing & Web Team
📧 [info@mediahaus.co.za](mailto:info@mediahaus.co.za)