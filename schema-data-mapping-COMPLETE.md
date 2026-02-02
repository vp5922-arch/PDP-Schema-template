# Complete Schema-to-API Data Mapping

## Data Source Reference

This document maps every schema.org field to its **actual data source** from AT&T's backend systems.

---

## DATA SOURCES

| Source ID | Description | Format | File |
|-----------|-------------|--------|------|
| `[CATALOG]` | Product Catalog Feed | XML | PDP-catalog.txt |
| `[CMS]` | CMS Content Feed | JSON | json-feed.txt |
| `[CALCULATED]` | Derived from other values | - | - |
| `[STATIC]` | Hardcoded/Configuration | - | - |

---

## FIELD MAPPING TABLE

### Product Identity

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `name` | `[CATALOG]` | `device.product.displayName` | "Apple iPhone 17 Pro Max" |
| `description` | `[CATALOG]` | `childSku.description` | "iPhone 17 Pro Max. The most powerful..." |
| `url` | `[CATALOG]` | `childSku.mPDPPageURL` | "https://www.att.com/buy/phones/..." |
| `image` | `[CATALOG]` | `childSku.mediaTypes.images.masterImageUrl` | "https://www.att.com/scmsassets/..." |

### Product Identifiers

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `sku` | `[CATALOG]` | `childSku.billingInfo.billCode` | "6094F" |
| `gtin13` | `[CATALOG]` | `childSku.upc` | "195950638004" |
| `mpn` | `[CATALOG]` | `childSku.manufacturersPartNumber` | "MFXH4LL/A" |

### Brand & Manufacturer

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `brand.name` | `[CATALOG]` | `device.product.manufacturer` | "Apple" |
| `model` | `[CATALOG]` | `device.product.model` | "iPhone 17 Pro Max" |
| `category` | `[CATALOG]` | `device.product.subCategory` | "smartphone" |

### Colors

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `color` | `[CATALOG]` | `childSku.color` | "Cosmic Orange" |
| (hex color) | `[CATALOG]` | `childSku.htmlColor` | "#F77E2D" |

### Ratings & Reviews

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `aggregateRating.ratingValue` | `[CATALOG]` | `childSku.reviewRatings.starRating` | 4.0873 |
| `aggregateRating.ratingCount` | `[CATALOG]` | `childSku.reviewRatings.reviewCount` | 8485 |
| `aggregateRating.bestRating` | `[STATIC]` | - | 5 |
| `aggregateRating.worstRating` | `[STATIC]` | - | 1 |

### Pricing

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| `offers.lowPrice` | `[CATALOG]` | `childSku.price.price.msrp` | 1199.99 |
| `priceSpecification.price` | `[CATALOG]` | `childSku.price.price.listPrice` | 33.34 |
| `priceSpecification.referenceQuantity.value` | `[CATALOG]` | `childSku.price.price.termLength` | 36 |
| `priceCurrency` | `[STATIC]` | - | "USD" |

### Promo Pricing (Trade-In Offers)

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| Trade-In Monthly Price | `[CATALOG]` | `promoPricing.monthlyPromoPrice` | 2.78 |
| Trade-In Discount | `[CATALOG]` | `promoPricing.tradeinDiscount` | 1100.0 |
| Promo Type | `[CATALOG]` | `promoPricing.promoType` | "tradein" |
| Promo Reference | `[CATALOG]` | `promoPricing.promoReference` | "54022" |

### Availability

| Schema Field | Data Source | API Path | Mapping |
|--------------|-------------|----------|---------|
| `availability` | `[CATALOG]` | `childSku.saleStatus` | "buynow" → InStock |
| `itemCondition` | `[CATALOG]` | `childSku.condition.key` | "new" → NewCondition |

### SEO Metadata

| Schema Field | Data Source | API Path | Example Value |
|--------------|-------------|----------|---------------|
| (meta description) | `[CMS]` | `seo.metaDescription` | "The new iPhone 17 Pro Max..." |
| (meta title) | `[CMS]` | `seo.metaSeotitle` | "Buy New iPhone 17 Pro Max..." |
| (robots) | `[CMS]` | `seo.metaRobots` | "INDEX,FOLLOW" |

---

## DEVICE SPECIFICATIONS (CMS Feed)

All specs come from `[CMS]` → `contentFragments.deviceSpecification[]`

### Dimensions
**Accordion: "Dimensions"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| `height/width/depth` | DIM-10 | "Size (inches)" | "6.43 x 3.07 x 0.34" |
| `weight` | DIM-20 | "Weight (ounces)" | "8.22" |

### Display
**Accordion: "Display"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Display Size | DIS-10 | "Display size (inches)" | "6.9-inch (diagonal) all-screen OLED display" |
| Resolution | DIS-20 | "Resolution (pixels)" | "2868-by-1320-pixel resolution at 460 ppi" |
| Display Type | DIS-40 | "Super Retina XDR display" | (description) |
| Contrast Ratio | DIS-50 | "Contrast ratio (typical)" | "2,000,000:1 contrast ratio (typical)" |
| Water Resistance | DIS-60 | "Splash, water, and dust resistant" | "Rated IP68..." |
| Display Features | DIS-120 | "More details" | "Dynamic Island, Always-On..." |

### Camera & Video
**Accordion: "Camera & Video"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Main Camera | CAM-10 | "Aperture" | "48MP Fusion Main: 24 mm, ƒ/1.78..." |
| Zoom | CAM-70 | "Zoom" | "8x optical-quality zoom in..." |
| Camera System | CAM-90 | "More rear-facing camera details" | "48MP Pro Fusion camera system..." |
| Video Recording | CAM-20 | "Video Recording" | "4K Dolby Vision video recording..." |
| Video Playback | CAM-30 | "Video Playback" | "Supported formats include HEVC..." |
| Front Camera | CAM-60 | "TrueDepth camera" | "18MP Center Stage camera..." |

### Battery
**Accordion: "Battery"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Video Playback | BAT-50 | "Video playback (hours)" | "Up to 39 hours" |
| Streaming | BAT-60 | "Video playback, streamed (hours)" | "Up to 35 hours" |
| Fast Charging | BAT-180 | "Charging" | "Up to 50% charge in 20 minutes..." |
| Wireless Charging | BAT-80 | "Wireless charging capable" | "Qi2 wireless charging up to 25W..." |

### Processor
**Accordion: "Processor"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Processor | PRO-10 | "Chipset" | "A19 Pro chip, 6-core CPU..." |
| Neural Engine | PRO-30 | "Neural Engine" | "checkbox" (boolean) |

### Memory/Storage
**Accordion: "Memory"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Storage Options | MEM-10 | "Capacity" | "256GB | 512GB | 1TB | 2TB" |

### Operating System
**Accordion: "Operating System"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| iOS Version | OPS-10 | "iOS" | "26" |
| Face ID | OPS-130 | "Face ID" | "Enabled by TrueDepth technology..." |
| Apple Pay | OPS-40 | "Apple Pay" | "Pay with your iPhone using Face ID..." |
| Siri | OPS-30 | "Siri" | "Get help with everyday tasks..." |

### Wireless Technology
**Accordion: "Wireless Technology"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| AT&T 5G+ Bands | WLS-10 | "AT&T 5G+ supported network bands*" | "n77 C-Band, n260" |
| 5G Bands | WLS-20 | "5G (U.S. and other countries)*" | "Bands n1, n2, n3..." |
| 4G LTE Bands | WLS-30 | "4G LTE" | "Bands 1, 2, 3, 4, 5..." |
| Wi-Fi | WLS-110 | "Wi-Fi connectivity" | "Wi-Fi 7 (802.11be) with 2x2 MIMO" |
| NFC | WLS-130 | "Near Field Communication (NFC)" | "With reader mode" |
| Bluetooth | WLS-140 | "Bluetooth technology" | "v6" |
| SIM Type | WLS-180 | "SIM type" | "Dual eSIM (two active eSIMs...)" |
| FirstNet Ready | WLS-190 | "FirstNet Ready®" | "checkbox" (boolean) |

### MagSafe
**Accordion: "MagSafe"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| MagSafe | MGS-10 | "Details" | "MagSafe wireless charging up to 25W" |

### Sensors
**Accordion: "Sensors"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Sensors | SEN-10 | "Sensors" | "Face ID, LiDAR Scanner, Barometer..." |

### Audio/Music
**Accordion: "Music"**

| Schema Property | Attribute ID | CMS Key | CMS Value |
|-----------------|--------------|---------|-----------|
| Audio Formats | MUS-20 | "Supported music formats" | "AAC, APAC, MP3, Apple Lossless..." |
| Spatial Audio | MUS-30 | "Spatial audio playback" | "checkbox" (boolean) |

---

## KEY FEATURES (CMS Feed)

Source: `[CMS]` → `contentFragments.keyFeatures[]`

| Position | Attribute ID | CMS Path | Example |
|----------|--------------|----------|---------|
| 1 | KFE-01 | `keyFeatures[0].master.description` | "UNIBODY DESIGN. FOR EXCEPTIONAL POWER..." |
| 2 | KFE-02 | `keyFeatures[1].master.description` | "DURABLE CERAMIC SHIELD. FRONT AND BACK..." |
| 3 | KFE-03 | `keyFeatures[2].master.description` | "THE ULTIMATE PRO CAMERA SYSTEM..." |
| 4 | KFE-04 | `keyFeatures[3].master.description` | "18MP CENTER STAGE FRONT CAMERA..." |

---

## SKU VARIANTS (Catalog Feed)

Each storage/color combination is a separate `childSku` in `[CATALOG]`

| SKU ID | Color | Storage | How to Determine |
|--------|-------|---------|------------------|
| sku54217v4 | Cosmic Orange | 256GB | Parse from `displayName` |
| sku54217v5 | Cosmic Orange | 512GB | Parse from `displayName` |
| sku54217v6 | Cosmic Orange | 1TB | Parse from `displayName` |
| sku54217v7 | Deep Blue | 256GB | Parse from `displayName` |
| ... | ... | ... | ... |

**Storage Determination**: Parse from `childSku.displayName`:
- "Apple iPhone 17 Pro Max - **256GB** - Cosmic Orange"

---

## UN/CEFACT UNIT CODE MAPPING

| Measurement Type | CMS Raw Value | Parsed Value | Unit Code |
|------------------|---------------|--------------|-----------|
| Storage 256GB | "256GB" | 256 | E34 |
| Storage 512GB | "512GB" | 512 | E34 |
| Storage 1TB | "1TB" | 1 | **E35** |
| Storage 2TB | "2TB" | 2 | **E35** |
| Weight | "8.22" | 8.22 | ONZ |
| Dimensions | "6.43 x 3.07 x 0.34" | H:6.43, W:3.07, D:0.34 | INH |
| Screen Size | "6.9-inch" | 6.9 | INH |
| Resolution | "2868-by-1320" | W:2868, H:1320 | (pixels) |
| PPI | "460 ppi" | 460 | (ppi) |
| Term Length | 36 | 36 | MON |

---

## DATA TRANSFORMATION RULES

### 1. Boolean Fields (checkbox)
CMS returns `"checkbox"` for boolean true values.
```
"value": "checkbox" → schema: true or "Yes"/"Included"
```

### 2. HTML Entities
CMS returns HTML entities that need stripping:
```
"Up to 39&nbsp;hours" → "Up to 39 hours"
"\u003Cbr\u003E" → (line break, strip or convert)
```

### 3. Star Rating Precision
Catalog returns full precision:
```
4.0873 → Round to 4.1 for display
```

### 4. Dimension Parsing
CMS dimension string needs parsing:
```
"6.43 x 3.07 x 0.34" → {height: 6.43, width: 3.07, depth: 0.34}
```

### 5. Storage Unit Selection
Based on parsed unit text:
```
"256GB" → unitCode: "E34"
"1TB"   → unitCode: "E35"
```

---

## COMPLETE API → SCHEMA MAPPING PSEUDOCODE

```javascript
function buildProductSchema(catalogData, cmsData) {
  const device = catalogData.device;
  const sku = device.childSkus.childSku[0]; // First variant
  const cms = cmsData['apple-iphone-17-pro-max'];

  return {
    "@context": "https://schema.org",
    "@type": "Product",

    // === FROM CATALOG ===
    "name": device.product.displayName,
    "description": sku.description,
    "url": sku.mPDPPageURL,
    "image": [sku.mediaTypes.images.masterImageUrl],
    "sku": sku.billingInfo.billCode,
    "gtin13": sku.upc,
    "mpn": sku.manufacturersPartNumber,
    "brand": { "@type": "Brand", "name": device.product.manufacturer },
    "model": device.product.model,
    "color": getAllColors(device.childSkus), // Aggregate from all SKUs

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": Math.round(sku.reviewRatings.starRating * 10) / 10,
      "ratingCount": sku.reviewRatings.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },

    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": sku.price.price.msrp,
      "priceCurrency": "USD",
      "availability": mapAvailability(sku.saleStatus),
      "itemCondition": mapCondition(sku.condition.key),
      "offers": buildVariantOffers(device.childSkus)
    },

    // === FROM CMS ===
    "weight": parseWeight(getSpec(cms, 'Dimensions', 'DIM-20')),
    ...parseDimensions(getSpec(cms, 'Dimensions', 'DIM-10')),

    "additionalProperty": [
      ...buildDisplaySpecs(getAccordion(cms, 'Display')),
      ...buildCameraSpecs(getAccordion(cms, 'Camera & Video')),
      ...buildBatterySpecs(getAccordion(cms, 'Battery')),
      ...buildProcessorSpecs(getAccordion(cms, 'Processor')),
      ...buildWirelessSpecs(getAccordion(cms, 'Wireless Technology')),
      // ... etc
    ],

    "subjectOf": {
      "@type": "ItemList",
      "itemListElement": cms.contentFragments.keyFeatures.map(buildKeyFeature)
    }
  };
}
```

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-02 | Initial mapping from frontend scraping |
| 2.0 | 2026-02-02 | Added PDP-catalog.txt and json-feed.txt API mappings |
