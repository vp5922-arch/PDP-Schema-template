# AT&T iPhone 17 Pro Max - Schema.org JSON-LD Template

Comprehensive structured data markup for the AT&T Product Detail Page (PDP).

## Files

| File | Purpose | Use Case |
|------|---------|----------|
| `iphone-17-pro-max-PRODUCTION.json` | Clean JSON-LD schema | Deploy to production HTML |
| `iphone-17-pro-max-COMPREHENSIVE-SCHEMA.js` | Annotated schema with data source comments | Developer reference & documentation |

## Data Source Tags

Every field in the annotated `.js` file includes a comment indicating where the data comes from:

| Tag | Source | Description |
|-----|--------|-------------|
| `[CATALOG]` | PDP-catalog.txt | XML catalog feed (pricing, SKUs, ratings, images) |
| `[JSON]` | json-feed.txt | CMS JSON feed (specs, features, SEO metadata) |
| `[FRONTEND]` | Webpage | Visible elements on the page |
| `[SOURCE]` | HTML | Source code / meta tags |
| `[CALCULATED]` | Derived | Computed from other data sources |
| `[STATIC]` | Config | Hardcoded configuration values |
| `[RECOMMENDED]` | Best Practice | Schema.org recommended but NOT in current feeds |

## Schema.org Types Used

- `Product` - Main product and variants
- `AggregateOffer` - Parent container for all offers
- `Offer` - Individual SKU offers (12 total)
- `UnitPriceSpecification` - Installment pricing
- `QuantitativeValue` - Measurements with units
- `PropertyValue` - Device specifications
- `AggregateRating` - Customer reviews
- `Brand` / `Organization` - Manufacturer info
- `ItemList` / `ListItem` - Key features
- `OfferShippingDetails` - Shipping information
- `MerchantReturnPolicy` - Return policy

## UN/CEFACT Unit Codes

| Code | Unit | Usage |
|------|------|-------|
| `E34` | Gigabyte | 256GB, 512GB storage |
| `E35` | Terabyte | 1TB, 2TB storage |
| `INH` | Inch | Dimensions, display size |
| `ONZ` | Ounce | Weight |
| `MON` | Month | Installment terms |
| `DAY` | Day | Shipping times |

**Note:** Pixels, PPI, Hz, and MP have no UN/CEFACT codes - use `unitText` only.

## Offer Structure

All 12 offers are consolidated in ONE place:

```
offers (AggregateOffer)
└── offers[] (Array of 12 Offers)
    ├── 256GB Cosmic Orange (sku54217v4)
    ├── 256GB Deep Blue (sku54217v5)
    ├── 256GB Silver (sku54217v6)
    ├── 512GB Cosmic Orange (sku54217v1)
    ├── 512GB Deep Blue (sku54217v2)
    ├── 512GB Silver (sku54217v3)
    ├── 1TB Cosmic Orange (sku54217v7)
    ├── 1TB Deep Blue (sku54217v8)
    ├── 1TB Silver (sku54217v9)
    ├── 2TB Cosmic Orange (sku54217v10)
    ├── 2TB Deep Blue (sku54217v11)
    └── 2TB Silver (sku54217v12)
```

## Field Mapping Quick Reference

### From CATALOG Feed (XML)
```
device.product.displayName     → name
device.product.manufacturer    → brand.name
device.product.model           → model
childSku.skuId                 → offers[].sku
childSku.upc                   → offers[].gtin13
childSku.manufacturersPartNumber → offers[].mpn
childSku.color                 → offers[].itemOffered.color
childSku.htmlColor             → additionalProperty (html-color)
childSku.saleStatus            → availability (buynow → InStock)
childSku.condition.key         → itemCondition (new → NewCondition)
price.price.msrp               → offers[].price
price.price.listPrice          → priceSpecification.price
price.price.termLength         → referenceQuantity.value
reviewRatings.starRating       → aggregateRating.ratingValue
reviewRatings.reviewCount      → aggregateRating.reviewCount
mediaTypes.images.masterImageUrl → image
childSku.mPDPPageURL           → url
internalMemoryStorage          → additionalProperty (storage-capacity)
```

### From JSON Feed (CMS)
```
seo.metaDescription            → (meta tag, not in schema)
seo.metaSeotitle               → (meta tag, not in schema)
keyFeatures[].description      → subjectOf.itemListElement[].description
deviceSpecification[Dimensions].DIM-10 → height, width, depth
deviceSpecification[Dimensions].DIM-20 → weight
deviceSpecification[Display].*  → additionalProperty (DIS-*)
deviceSpecification[Camera].*   → additionalProperty (CAM-*)
deviceSpecification[Battery].*  → additionalProperty (BAT-*)
deviceSpecification[Processor].* → additionalProperty (PRO-*)
deviceSpecification[Memory].*   → additionalProperty (MEM-*)
deviceSpecification[Wireless].* → additionalProperty (WLS-*)
deviceInTheBox[].subtitle      → isAccessoryOrSparePartFor[].name
model[].deviceUniqueURL        → isRelatedTo.url
```

## Implementation

Add to HTML `<head>`:

```html
<script type="application/ld+json">
  <!-- Paste contents of iphone-17-pro-max-PRODUCTION.json here -->
</script>
```

## Validation

Test your schema at:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Notes

- **NO Organization schema** (global org handled separately)
- **NO BreadcrumbList schema** (handled separately)
- Prices for 512GB/1TB/2TB are calculated based on Apple pricing tiers
- `[RECOMMENDED]` fields indicate data developers should add to feeds
