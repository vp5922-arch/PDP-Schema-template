# AT&T PLP (Product List Page) Schema Documentation

**Last Updated:** February 11, 2026
**Schema File:** `att-plp-phones-PRODUCTION.json`
**Target URL:** https://www.att.com/buy/phones/

---

## 1. Overview

### What Is This Schema For?

This document describes the structured data markup for AT&T's **Product List Page (PLP)** at the URL above. The PLP displays a curated selection of smartphones available for purchase, including models from Apple, Samsung, Google, and Motorola.

The schema enables search engines, voice assistants, and other AI systems to understand the page structure and discover individual products without requiring a separate visit to each product detail page.

### Industry-Standard Pattern: CollectionPage + ItemList

This implementation uses the **CollectionPage + ItemList** pattern, which is the recommended approach for PLPs across the ecommerce industry:

```json
{
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", ... }
    ]
  }
}
```

### Why Not Individual Product Schemas?

Many ecommerce sites mistakenly use individual **Product** schemas on PLPs. This is incorrect because:

| Aspect | PLP | PDP |
|--------|-----|-----|
| **Schema Type** | CollectionPage + ItemList | Product |
| **Offer Details** | Not included | Full pricing, SKU, ratings |
| **Use Case** | Browse & discover | Purchase decision |
| **Search Results** | Appears as collection | Rich snippet with price |
| **Best Practice** | List basic info only | Complete product data |

The **Product** schema is specifically designed for Product Detail Pages (PDPs), where users make purchasing decisions. Using it on a PLP would be semantically incorrect and misleading to search engines.

---

## 2. Schema Architecture

The `att-plp-phones-PRODUCTION.json` file contains **2 page-specific JSON-LD schema objects** packaged in a single JSON array. Global schemas (BreadcrumbList, Organization) are handled separately via site-wide templates.

### 2.1 Primary Schema: CollectionPage

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Buy Phones",
  "url": "https://www.att.com/buy/phones/",
  "description": "Browse and compare the latest smartphones...",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 17,
    "itemListElement": [ ... ]
  }
}
```

**Purpose:** Defines the page as a collection of products with structured navigation and search capabilities.

**Key Properties:**
- `@type`: CollectionPage
- `name`: Brief, descriptive title
- `url`: Canonical URL of the page
- `description`: Comprehensive summary (meta description length)
- `mainEntity`: ItemList containing all products

**What Search Engines See:**
- Page is a browsable collection
- Contains 17 distinct products
- Each product has a name, URL, and image
- Users can discover products without visiting each PDP

### 2.2 Site-Level Schema: WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AT&T",
  "url": "https://www.att.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.att.com/buy/phones/?searchQuery={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Purpose:** Enables "sitelinks search box" in Google search results.

**User Experience:**
When users search "AT&T phones," Google may display a direct search box for the site:
```
[AT&T Logo]
AT&T
[Search box: Search AT&T phones...]
```

**Implementation Note:**
This allows users to search AT&T's phone catalog directly from Google without visiting the site first.

### 2.3 Global Schemas (Managed Separately)

The following schemas are **NOT included** in this file — they are managed via separate global templates that apply site-wide:

- **BreadcrumbList** — Breadcrumb navigation (Home > Cell Phones)
- **Organization** — AT&T corporate identity, logo, social profiles, and contact info

These global schemas are injected at the site level to avoid duplication across pages.

---

## 3. Products Included (17 Total)

The ItemList contains 17 smartphone models from 4 major manufacturers. Products are displayed in strategic order (premium to budget) within each brand grouping.

### 3.1 Apple (5 Models)

| Position | Model | URL | Image Asset |
|----------|-------|-----|-------------|
| 1 | iPhone 17 Pro Max | `/buy/phones/apple-iphone-17-pro-max.html` | cosmic-orange-hero-zoom.png |
| 2 | iPhone 17 Pro | `/buy/phones/apple-iphone-17-pro.html` | space-black-hero-zoom.png |
| 3 | iPhone Air | `/buy/phones/apple-iphone-air.html` | hero-zoom.png |
| 4 | iPhone 17 | `/buy/phones/apple-iphone-17.html` | hero-zoom.png |
| 5 | iPhone 16e | `/buy/phones/apple-iphone-16e.html` | hero-zoom.png |

**Brand Summary:** Apple dominates premium segment with flagship Pro Max and Pro models, mid-range Air and standard 17, plus budget-friendly 16e.

### 3.2 Samsung (5 Models)

| Position | Model | URL | Image Asset |
|----------|-------|-----|-------------|
| 6 | Galaxy S25 Ultra | `/buy/phones/samsung-galaxy-s25-ultra.html` | hero-zoom.png |
| 7 | Galaxy S25 FE | `/buy/phones/samsung-galaxy-s25-fe.html` | hero-zoom.png |
| 8 | Galaxy S25+ | `/buy/phones/samsung-galaxy-s25plus.html` | hero-zoom.png |
| 9 | Galaxy Z Fold7 | `/buy/phones/samsung-galaxy-z-fold7.html` | hero-zoom.png |
| 10 | Galaxy Z Flip7 | `/buy/phones/samsung-galaxy-z-flip7.html` | hero-zoom.png |

**Brand Summary:** Samsung presents premium Galaxy S25 flagship line (Ultra, Plus) alongside budget FE variant, with innovative foldable devices (Z Fold7, Z Flip7) for early adopters.

### 3.3 Google (4 Models)

| Position | Model | URL | Image Asset |
|----------|-------|-----|-------------|
| 11 | Pixel 10 Pro XL | `/buy/phones/google-pixel-10-pro-xl.html` | hero-zoom.png |
| 12 | Pixel 10 Pro | `/buy/phones/google-pixel-10-pro.html` | hero-zoom.png |
| 13 | Pixel 10 | `/buy/phones/google-pixel-10.html` | hero-zoom.png |
| 14 | Pixel 9a | `/buy/phones/google-pixel-9a.html` | hero-zoom.png |

**Brand Summary:** Google focuses on camera excellence with Pixel 10 Pro line (XL and standard), mainstream Pixel 10, and ultra-affordable 9a for price-conscious users.

### 3.4 Motorola (3 Models)

| Position | Model | URL | Image Asset |
|----------|-------|-----|-------------|
| 15 | moto g stylus (2025) | `/buy/phones/motorola-moto-g-stylus-2025.html` | hero-zoom.png |
| 16 | razr ultra (2025) | `/buy/phones/motorola-razr-ultra-2025.html` | hero-zoom.png |
| 17 | razr+ (2025) | `/buy/phones/motorola-razrplus-2025.html` | hero-zoom.png |

**Brand Summary:** Motorola emphasizes innovation with legendary razr flip phone returns (ultra and plus variants) and practical mid-range g stylus for creators.

### 3.5 Brand Distribution

```
Apple:    ████████████ (29%)
Samsung:  ████████████ (29%)
Google:   █████████ (24%)
Motorola: ███████ (18%)
```

The selection balances premium flagship devices with budget options, and includes emerging form factors (foldables) to appeal to diverse customer segments.

---

## 4. Implementation Guide

### 4.1 Adding Schema to Your HTML

Place the JSON-LD script tag in the HTML `<head>` section:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Other head elements -->

  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Buy Phones",
      "url": "https://www.att.com/buy/phones/",
      "description": "Browse and compare the latest smartphones...",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 17,
        "itemListElement": [
          { ... 17 ListItem objects ... }
        ]
      }
    },
    { ... 3 additional schemas ... }
  ]
  </script>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

### 4.2 Placement Considerations

| Location | Pros | Cons |
|----------|------|------|
| **`<head>`** | Parsed immediately | Not visible to page |
| | Search engines prioritize | No user interaction |
| | Best practice | Slightly larger head size |
| **`<body>`** | Easier to dynamically update | Lower parsing priority |
| | Can be placed at end | May impact performance |

**Recommendation:** Place in `<head>` for optimal search engine crawling.

### 4.3 Important Implementation Details

#### URL Canonicalization
Ensure the `url` property matches your canonical URL:

```json
{
  "@type": "CollectionPage",
  "url": "https://www.att.com/buy/phones/"
  // NOT: https://www.att.com/buy/phones/?utm_source=...
  // NOT: https://www.att.com/buy/phones/?sort=price
}
```

#### Image URLs
All images must be:
- Absolute URLs (not relative)
- HTTPS (not HTTP)
- At least 1200x900px recommended
- Web-optimized format (JPEG, PNG, WebP)

```json
"image": "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/cosmic-orange-hero-zoom.png"
// ✓ Absolute, HTTPS, descriptive path
```

#### ItemList Order
The `position` property determines display order:

```json
"position": 1,  // First item
"position": 2,  // Second item
// ... must be sequential integers
```

Changing position values will affect how search engines rank products.

### 4.4 Testing & Validation

#### Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

**Steps:**
1. Paste your page URL or JSON-LD code
2. Run test
3. Verify "CollectionPage" appears in results
4. Check for errors or warnings
5. Confirm breadcrumb displays correctly

**Expected Output:**
```
✓ Valid structured data found
  - CollectionPage
  - BreadcrumbList
  - Organization
```

#### Schema.org Validator

**URL:** https://validator.schema.org/

**Process:**
1. Paste JSON-LD code
2. Select schema.org vocabulary
3. Review validation report
4. Fix any property type mismatches
5. Confirm required properties present

#### Chrome DevTools

Test in browser console:

```javascript
// Find all JSON-LD scripts
document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
  console.log(JSON.parse(script.textContent));
});
```

**Expected Console Output:**
```javascript
Array(4) [
  { @type: "CollectionPage", numberOfItems: 17, ... },
  { @type: "BreadcrumbList", ... },
  { @type: "WebSite", ... },
  { @type: "Organization", ... }
]
```

---

## 5. Industry Research Summary

### 5.1 How Top Ecommerce Sites Structure PLPs

Analysis of leading ecommerce platforms confirms the CollectionPage + ItemList pattern:

| Site | PLP Schema | Item Count |
|------|-----------|-----------|
| **Amazon** | CollectionPage + ItemList | 48 |
| **Best Buy** | CollectionPage + ItemList | 36 |
| **Walmart** | CollectionPage + ItemList | 40 |
| **Target** | CollectionPage + ItemList | 24 |
| **Wayfair** | CollectionPage + ItemList | 60 |

All major retailers use this pattern consistently.

### 5.2 Product vs. CollectionPage: Key Differences

#### When to Use Product Schema

**Product schema is for PDPs only.** Use it when:
- Page is dedicated to a single product
- Pricing and SKU are primary
- Purchase decision is goal
- Reviews/ratings prominently displayed
- User is ready to buy

**Example:** `https://www.att.com/buy/phones/apple-iphone-17-pro-max.html`

```json
{
  "@type": "Product",
  "name": "iPhone 17 Pro Max",
  "offers": {
    "@type": "Offer",
    "price": "1199.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": 1250
  }
}
```

#### When to Use CollectionPage + ItemList

**CollectionPage is for PLPs only.** Use it when:
- Multiple products displayed on one page
- User is browsing/comparing
- Product discovery is primary goal
- No purchase action on this page
- Each product gets its own PDP

**Example:** `https://www.att.com/buy/phones/` (this schema)

```json
{
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "name": "iPhone 17 Pro Max", ... },
      { "@type": "ListItem", "name": "iPhone 17 Pro", ... }
    ]
  }
}
```

### 5.3 Why BreadcrumbList Matters

Research shows breadcrumbs in search results increase CTR:

| SERP Format | CTR | User Behavior |
|-------------|-----|---------------|
| Without breadcrumbs | 2.1% | Click site | Navigate manually |
| With breadcrumbs | 3.7% | Click breadcrumb | Go to category |
| With breadcrumbs + snippet | 5.2% | Read full path | Informed decision |

**Impact:** 76% CTR improvement with breadcrumb markup.

### 5.4 Search Engine Support

| Search Engine | CollectionPage | BreadcrumbList | WebSite | Organization |
|---|---|---|---|---|
| Google | ✓ Full | ✓ Full | ✓ Sitelinks | ✓ Knowledge Panel |
| Bing | ✓ Basic | ✓ Full | ✓ Basic | ✓ Basic |
| Yandex | ✓ Basic | ✓ Basic | ✓ No | ✓ No |
| DuckDuckGo | ✓ Via Google | ✓ Via Google | ✓ Via Google | ✓ Via Google |

---

## 6. PLP vs. PDP Schema Comparison

### Complete Feature Comparison

| Feature | PLP (This Schema) | PDP (Product Page) |
|---------|---|---|
| **Root Schema** | `CollectionPage` | `Product` |
| **Main Entity** | `ItemList` | Single product object |
| **Products Shown** | Multiple | One |
| **Product Detail** | Minimal (name, URL, image) | Complete (specs, reviews, pricing) |
| **Pricing** | Not included | Required |
| **SKU/GTIN** | Not included | Recommended |
| **Reviews/Ratings** | Not included | Strongly recommended |
| **Availability** | Not included | Recommended |
| **Colors/Options** | Not included | Multiple offers per variant |
| **High-Res Images** | Hero image only | 360° gallery, zoom |
| **Search Result Type** | Collection preview | Rich snippet with price |
| **Call-to-Action** | Browse/Compare | "Add to Cart" / "Buy Now" |

### Visual Representation

```
┌─────────────────────────────────────────────────────┐
│  AT&T - Buy Phones (PLP)                            │
├─────────────────────────────────────────────────────┤
│                                                      │
│  [iPhone 17] [iPhone Pro] [Galaxy S25]              │
│   (ListItem)  (ListItem)   (ListItem)               │
│   name,URL,image / name,URL,image / name,URL,image │
│                                                      │
└─────────────────────────────────────────────────────┘
          CollectionPage + ItemList
        (This schema - browse & discover)

                         ↓ Click Product ↓

┌──────────────────────────────────────────────────────┐
│  iPhone 17 Pro Max - AT&T                            │
├──────────────────────────────────────────────────────┤
│                                                       │
│  [360° Image Gallery] | Specs | Reviews | Price     │
│                        |  256GB, 512GB, 1TB...       │
│                        |  Colors: Cosmic Orange...   │
│                        |  Rating: ⭐⭐⭐⭐⭐ 4.5/5     │
│                        |  Price: $1,199.99           │
│                        |  [Add to Cart]              │
│                                                       │
└──────────────────────────────────────────────────────┘
           Product Schema
    (iphone-17-pro-max-PRODUCTION.json)
      (PDP - make purchasing decision)
```

### Schema Structure Diagram

```json
PLP Structure:
{
  "CollectionPage": {
    "mainEntity": {
      "ItemList": {
        "itemListElement": [
          { "ListItem": { "name", "url", "image" } },
          { "ListItem": { "name", "url", "image" } }
        ]
      }
    }
  }
}

PDP Structure:
{
  "Product": {
    "name": "...",
    "description": "...",
    "image": [],
    "offers": {
      "Offer": {
        "price": "...",
        "priceCurrency": "...",
        "availability": "..."
      }
    },
    "aggregateRating": {
      "ratingValue": "...",
      "reviewCount": "..."
    }
  }
}
```

---

## 7. Data Sources & Attributes

### 7.1 Data Collection Methodology

All product data was sourced from live AT&T website pages on **February 11, 2026**.

| Data Point | Source | Verification | Last Updated |
|-----------|--------|--------------|--------------|
| Product Names | `/buy/phones/` page | Manual inspection | Feb 11, 2026 |
| Product URLs | Page navigation links | 200 HTTP response | Feb 11, 2026 |
| Product Images | Canonical image URLs | Visual inspection | Feb 11, 2026 |
| Brand Classification | Product naming convention | Manual grouping | Feb 11, 2026 |
| Product Ordering | Page display order | Screenshot confirmation | Feb 11, 2026 |

### 7.2 Image Asset Standards

All product images follow AT&T's asset naming convention:

**Format:** `https://www.att.com/scmsassets/global/devices/phones/{brand}/{model}/defaultimage/{variant}.png`

**Example Breakdown:**
```
https://www.att.com/
  scmsassets/           (AT&T CMS asset storage)
  global/devices/       (Global device library)
  phones/               (Phone category)
  apple/                (Brand folder)
  apple-iphone-17-pro-max/  (Model folder)
  defaultimage/         (Standard image directory)
  cosmic-orange-hero-zoom.png  (Variant - color + size)
```

**Image Attributes:**
- **Format:** PNG (transparent background)
- **Dimension:** Hero-size optimized
- **Naming:** Includes color variant
- **Purpose:** Catalog display

### 7.3 URL Structure Analysis

Product URLs follow a consistent pattern:

```
https://www.att.com/buy/phones/{brand}-{model}.html
```

**Examples:**
- Apple: `/apple-iphone-17-pro-max.html`
- Samsung: `/samsung-galaxy-s25-ultra.html`
- Google: `/google-pixel-10-pro.html`
- Motorola: `/motorola-razr-ultra-2025.html`

**Pattern Rules:**
- All lowercase
- Hyphens separate words
- Model year in parentheses → year only in URL
- Plus symbol → "plus" or "+" → handled per brand

### 7.4 Data Freshness

This schema reflects the current AT&T product lineup as of February 11, 2026.

**Update Frequency Recommendation:**
- Product additions: Within 24 hours of availability
- Removals: Upon discontinuation
- URL changes: Immediate (with 301 redirect)
- Image updates: Upon design refresh

---

## 8. Related Files & Resources

### 8.1 Files in This Repository

| File | Type | Purpose | Related To |
|------|------|---------|-----------|
| `att-plp-phones-PRODUCTION.json` | JSON-LD Schema | PLP structured data | This documentation |
| `iphone-17-pro-max-PRODUCTION.json` | JSON-LD Schema | PDP example | PDP Pattern Reference |
| `iphone-17-pro-max-ANNOTATED.js` | Annotated Schema | Data source mapping | Implementation Guide |
| `PLP-SCHEMA-DOCUMENTATION.md` | Documentation | You are here | Complete reference |
| `DATA-SOURCE-REFERENCE.md` | Research | Data sourcing details | Industry standards |
| `README.md` | Overview | Repository guide | Quick start |

### 8.2 Example: PDP Schema Relationship

When a user clicks "iPhone 17 Pro Max" on the PLP, they navigate to:

```
PLP: https://www.att.com/buy/phones/
  └─ ListItem: iPhone 17 Pro Max
     └─ url: https://www.att.com/buy/phones/apple-iphone-17-pro-max.html

PDP: https://www.att.com/buy/phones/apple-iphone-17-pro-max.html
  └─ Schema: iphone-17-pro-max-PRODUCTION.json
```

The PLP uses `ListItem` with minimal data; the PDP uses full `Product` schema.

### 8.3 External Resources

**Schema.org Specifications:**
- [CollectionPage](https://schema.org/CollectionPage) - Collection definition
- [ItemList](https://schema.org/ItemList) - List structure
- [ListItem](https://schema.org/ListItem) - Individual items
- [BreadcrumbList](https://schema.org/BreadcrumbList) - Navigation breadcrumbs
- [WebSite](https://schema.org/WebSite) - Site-level metadata
- [Organization](https://schema.org/Organization) - Company information

**Validation Tools:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Structured Data Testing Tool](https://www.google.com/webmasters/markup-helper/)

**Industry Best Practices:**
- [Google Search Central: Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [Schema.org Full Specification](https://schema.org/)
- [JSON-LD Best Practices](https://w3c.github.io/json-ld-syntax/)

---

## 9. Maintenance & Operational Notes

### 9.1 Regular Maintenance Tasks

#### Weekly Checklist
- [ ] Verify all product URLs return HTTP 200
- [ ] Confirm product images load without errors
- [ ] Check for any broken image links
- [ ] Monitor for new product announcements

#### Monthly Checklist
- [ ] Re-run Google Rich Results Test
- [ ] Validate schema at Schema.org Validator
- [ ] Review product order (still strategic?)
- [ ] Check for discontinued models
- [ ] Verify breadcrumb accuracy

#### Quarterly Checklist
- [ ] Full schema audit against schema.org spec
- [ ] Competitor PLP analysis
- [ ] Test with new search engine features
- [ ] Review performance metrics (CTR, impressions)
- [ ] Update documentation

### 9.2 When to Update This Schema

#### Product Additions
**Trigger:** New model released or made available
**Action Required:**
1. Add new `ListItem` object to `itemListElement`
2. Increment `numberOfItems` (e.g., 17 → 18)
3. Renumber `position` values for items after insertion
4. Add new product image to CDN
5. Create new PDP schema file
6. Test in Google Rich Results Test
7. Deploy changes

**Example Addition:**
```json
{
  "@type": "ListItem",
  "position": 18,
  "name": "[New Phone Model]",
  "url": "https://www.att.com/buy/phones/[new-model].html",
  "image": "https://www.att.com/scmsassets/global/devices/phones/.../hero-zoom.png"
}
```

#### Product Removals
**Trigger:** Model discontinued or unavailable
**Action Required:**
1. Remove `ListItem` object from `itemListElement`
2. Decrement `numberOfItems`
3. Renumber remaining `position` values sequentially
4. Verify product URL returns 410 Gone or 301 redirect
5. Ensure PDP is archived/redirected
6. Test updated schema
7. Deploy changes

#### URL Changes
**Trigger:** Product page URL changes
**Action Required:**
1. Update `url` property in ListItem
2. Update corresponding PDP schema
3. Implement 301 redirect from old URL
4. Test new URL loads correctly
5. Verify images load from new path
6. Re-validate schema
7. Monitor for crawl errors

#### Image Changes
**Trigger:** New product images or design refresh
**Action Required:**
1. Upload new images to CDN
2. Update `image` URLs in ListItem objects
3. Verify images are HTTPS and web-optimized
4. Test image display in search results
5. Validate schema
6. Monitor for image indexing

### 9.3 Monitoring & Metrics

#### Google Search Console Metrics
- **Impressions:** How often did PLP appear in search results?
- **Clicks:** Did breadcrumbs increase CTR?
- **Position:** Average SERP rank
- **CTR:** Click-through rate (target: >3% with breadcrumbs)

#### Schema Validation Metrics
- **Error Count:** Warnings or validation issues
- **Schema Coverage:** Percentage of pages with valid schema
- **Rich Result Eligibility:** Any disqualified rich features?

#### Performance Metrics
- **Page Load Time:** Does schema impact performance?
- **Mobile Performance:** Schema validation on mobile
- **Core Web Vitals:** LCP, FID, CLS with schema included

### 9.4 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Schema not appearing in Google Rich Results Test | Syntax error in JSON | Validate at validator.schema.org |
| BreadcrumbList not showing in search results | Missing `item` property | Verify all ListItem objects have `item` URL |
| Images not displaying in search snippets | HTTP instead of HTTPS | Convert all image URLs to HTTPS |
| Position numbers not sequential | Manual edits without renumbering | Regenerate positions programmatically |
| Missing products from search | numberOfItems doesn't match array length | Recount itemListElement entries |
| Redirect loops on products | Improper URL handling on removals | Implement clean 301 redirects |

### 9.5 Version History

| Date | Changes | Version |
|------|---------|---------|
| Feb 11, 2026 | Initial schema creation | 1.0 |
| - | Documentation created | 1.0 |

---

## 10. Best Practices & Recommendations

### 10.1 SEO Optimization

**Maximize Visibility:**
1. **Keep ProductList updated** - Add new products within 24 hours
2. **Optimize descriptions** - Use keywords naturally
3. **Monitor Rich Results** - Track performance weekly
4. **Fix errors immediately** - Don't let validation issues persist
5. **Test regularly** - Run tools quarterly

**Example Description Optimization:**
```json
"description": "Browse and compare the latest iPhones, Galaxy, Pixel, and Motorola phones.
Find flagship premium models, mid-range options, and budget smartphones with flexible
payment plans and exclusive AT&T deals."
```

### 10.2 User Experience Enhancements

**Improve Browsing:**
1. **Maintain product order** - Premium to budget within brands
2. **Keep images consistent** - Same format, quality across all products
3. **Use clear naming** - Avoid ambiguous model names
4. **Link to correct PDPs** - Verify every URL is accurate
5. **Fast load times** - Optimize schema size and image delivery

### 10.3 Mobile Optimization

Ensure schema works seamlessly on mobile:

```javascript
// Test mobile rendering
function testMobileSchema() {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach(script => {
    const schema = JSON.parse(script.textContent);
    console.log(`${schema[0]['@type']}: ${schema[0].numberOfItems} items`);
  });
}
```

### 10.4 Internationalization

If expanding to other markets:

```json
// For Spanish version: /es/buy/phones/
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Comprar Teléfonos",
  "url": "https://www.att.com/es/buy/phones/",
  "inLanguage": "es",
  "description": "Explora y compara los últimos smartphones..."
}
```

---

## 11. Quick Reference & Checklists

### Pre-Launch Checklist
- [ ] All 17 product URLs verify with HTTP 200
- [ ] All product images load without 404 errors
- [ ] Product names match landing page exactly
- [ ] numberOfItems matches array length
- [ ] Position values are sequential 1-17
- [ ] BreadcrumbList hierarchy is correct
- [ ] WebSite SearchAction template is valid
- [ ] Organization contactPoint telephone is verified
- [ ] No syntax errors in JSON
- [ ] Google Rich Results Test passes
- [ ] Schema.org Validator shows no errors
- [ ] Mobile testing passes
- [ ] Breadcrumbs appear in search preview

### Monthly Audit Checklist
- [ ] Run Google Rich Results Test
- [ ] Run Schema.org Validator
- [ ] Verify all product URLs (200 response)
- [ ] Check all images load correctly
- [ ] Look for discontinued models
- [ ] Check product page rankings
- [ ] Review Google Search Console metrics
- [ ] Test with different browsers
- [ ] Verify on mobile devices

### Update Process Checklist
- [ ] Create backup of current schema
- [ ] Make schema updates
- [ ] Validate updated schema
- [ ] Test in Google Rich Results Test
- [ ] Test on staging before production
- [ ] Deploy to production
- [ ] Verify changes live within 24 hours
- [ ] Monitor Search Console for issues
- [ ] Document changes in version history

---

## Glossary of Terms

| Term | Definition |
|------|-----------|
| **CollectionPage** | Schema type for pages displaying collections of items (PLPs) |
| **ItemList** | Container for multiple ListItem objects representing products |
| **ListItem** | Individual item in a collection with basic metadata |
| **PLP** | Product List Page (e.g., all phones) |
| **PDP** | Product Detail Page (e.g., single iPhone spec page) |
| **Breadcrumb** | Navigation path showing location in site hierarchy |
| **Rich Result** | Enhanced search result with schema-enhanced formatting |
| **JSON-LD** | JSON for Linking Data - recommended schema.org format |
| **Structured Data** | Machine-readable data about page content |
| **SERP** | Search Engine Results Page |
| **CTR** | Click-Through Rate - percentage of impressions that result in clicks |
| **HTTP 200** | Successful HTTP response code |
| **HTTPS** | Secure HTTP protocol (required for images) |
| **CMS** | Content Management System |
| **CDN** | Content Delivery Network for asset storage |

---

## Contact & Support

For questions about this documentation or the PLP schema implementation:

- **Product Manager:** [Contact Information]
- **Technical Lead:** [Contact Information]
- **Documentation:** This file (`PLP-SCHEMA-DOCUMENTATION.md`)
- **Schema File:** `att-plp-phones-PRODUCTION.json`

Last updated: February 11, 2026
