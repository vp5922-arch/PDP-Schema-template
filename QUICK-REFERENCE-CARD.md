# Schema.org Product Schema - Quick Reference Card

## DATA FEEDS

| Feed | Format | Content |
|------|--------|---------|
| **PDP-catalog.txt** | XML | Product data, SKUs, pricing, reviews, images |
| **json-feed.txt** | JSON | Specs, features, SEO metadata |

---

## CATALOG FEED (XML) - Key Paths

```
CatalogFeed
└── responseContent
    └── content
        └── wireless
            └── devices
                └── device
                    ├── product
                    │   ├── displayName        → name
                    │   ├── manufacturer       → brand
                    │   ├── model             → model
                    │   └── subCategory       → category
                    └── childSkus
                        └── childSku[]
                            ├── skuId              → sku (variant)
                            ├── upc                → gtin13
                            ├── manufacturersPartNumber → mpn
                            ├── displayName        → variant name
                            ├── description        → description
                            ├── color              → color
                            ├── htmlColor          → (hex)
                            ├── mPDPPageURL        → url
                            ├── saleStatus         → availability
                            ├── condition.key      → itemCondition
                            ├── billingInfo.billCode → sku
                            ├── reviewRatings
                            │   ├── starRating     → aggregateRating.ratingValue
                            │   └── reviewCount    → aggregateRating.ratingCount
                            ├── price.price
                            │   ├── msrp           → offers.price
                            │   ├── listPrice      → monthly price
                            │   ├── termLength     → installment months
                            │   └── promoPricing[] → trade-in offers
                            └── mediaTypes.images
                                └── masterImageUrl → image
```

---

## CMS FEED (JSON) - Key Paths

```
idp-cms-feed
└── apple-iphone-17-pro-max
    ├── seo
    │   ├── metaDescription    → (SEO)
    │   ├── metaSeotitle       → (SEO)
    │   └── metaRobots         → (SEO)
    └── contentFragments
        ├── keyFeatures[]
        │   └── master
        │       ├── attributeID  → KFE-01, KFE-02...
        │       └── description  → feature text
        └── deviceSpecification[]
            └── master
                ├── accordionLabels → section name
                └── accordionData[]
                    └── master
                        ├── attributeID → DIM-10, DIS-20...
                        ├── key        → field label
                        └── value      → field value
```

---

## ATTRIBUTE ID QUICK LOOKUP

| Section | ID Prefix | Examples |
|---------|-----------|----------|
| Key Features | KFE | KFE-01, KFE-02, KFE-03, KFE-04 |
| Dimensions | DIM | DIM-10 (size), DIM-20 (weight) |
| Display | DIS | DIS-10, DIS-20, DIS-40, DIS-50, DIS-60, DIS-120 |
| Camera | CAM | CAM-10, CAM-20, CAM-30, CAM-60, CAM-70, CAM-90 |
| Battery | BAT | BAT-30, BAT-50, BAT-60, BAT-80, BAT-90, BAT-180 |
| Processor | PRO | PRO-10 (chipset), PRO-30 (neural) |
| Memory | MEM | MEM-10 (capacity) |
| Operating System | OPS | OPS-10, OPS-30, OPS-40, OPS-130 |
| Wireless | WLS | WLS-10 through WLS-200 |
| MagSafe | MGS | MGS-10 |
| Sensors | SEN | SEN-10 |
| Music | MUS | MUS-10, MUS-20, MUS-30 |

---

## UN/CEFACT UNIT CODES

| Measurement | Code | Use For |
|-------------|------|---------|
| **E34** | Gigabyte | 256GB, 512GB storage |
| **E35** | Terabyte | 1TB, 2TB storage |
| **INH** | Inch | Screen size, dimensions |
| **ONZ** | Ounce | Weight (US) |
| **GRM** | Gram | Weight (metric) |
| **MON** | Month | Installments |
| **DAY** | Day | Shipping |

⚠️ **No code for**: pixels, ppi, Hz, MP → use `unitText` only

---

## DATA TRANSFORMATIONS

| Source Value | Transform | Schema Value |
|--------------|-----------|--------------|
| `"checkbox"` | Boolean | `true` or "Yes" |
| `"4.0873"` | Round | `4.1` |
| `"6.43 x 3.07 x 0.34"` | Parse | `{h:6.43, w:3.07, d:0.34}` |
| `"buynow"` | Map | `schema.org/InStock` |
| `"new"` | Map | `schema.org/NewCondition` |
| `"\u003Cbr\u003E"` | Strip | (line break) |
| `"&nbsp;"` | Replace | ` ` (space) |
| `"256GB"` | Parse + Code | `{value:256, unitCode:"E34"}` |
| `"1TB"` | Parse + Code | `{value:1, unitCode:"E35"}` |

---

## AVAILABILITY MAPPING

| saleStatus | schema.org |
|------------|------------|
| `buynow` | `InStock` |
| `comingsoon` | `PreOrder` |
| `discontinued` | `Discontinued` |
| `outofstock` | `OutOfStock` |
| `backorder` | `BackOrder` |

---

## FILES IN THIS REPO

| File | Purpose |
|------|---------|
| `iphone-17-pro-max-schema-PRODUCTION.json` | Clean JSON for production |
| `schema-data-mapping-COMPLETE.md` | Full API-to-schema mapping |
| `QUICK-REFERENCE-CARD.md` | This quick reference |
| `schema-template.json` | Template with placeholders |
