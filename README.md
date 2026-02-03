# AT&T iPhone 17 Pro Max - Schema.org JSON-LD Template

Comprehensive structured data markup for the AT&T Product Detail Page (PDP).

## Files

| File | Purpose |
|------|---------|
| `iphone-17-pro-max-PRODUCTION.json` | Clean JSON-LD for production deployment |
| `iphone-17-pro-max-ANNOTATED.js` | Annotated schema with data source tags |

## Data Source Tags

Every field includes a tag showing where the data comes from:

| Tag | Source | Status |
|-----|--------|--------|
| `[idp-cms-feed-json-feed]` | CMS JSON feed | **READY** - implement now |
| `[CATALOG]` | PDP Catalog XML | **NEEDS BACKEND WORK** |
| `[idp-cms-feed-json-feed][CATALOG]` | Both sources | Choose preferred source |
| `[FRONTEND]` | Webpage only | Visible on page |
| `[RECOMMENDED]` | Best practice | NOT in any feed |

## Developer Priority

### Phase 1 - Implement NOW (idp-cms-feed-json-feed ready)
- Dimensions (DIM-10, DIM-20)
- Display specs (DIS-10, DIS-20, DIS-50, DIS-60, DIS-120)
- Camera specs (CAM-10, CAM-20, CAM-60, CAM-70)
- Battery specs (BAT-50, BAT-60, BAT-80, BAT-180)
- Processor (PRO-10)
- Memory (MEM-10)
- OS (OPS-10, OPS-30, OPS-130)
- Wireless (WLS-10, WLS-110, WLS-140, WLS-180, WLS-190)
- Sensors, MagSafe
- Key Features (KFE-01 to KFE-04)
- In The Box, Related Models, Image Gallery

### Phase 2 - Backend Work Needed (CATALOG)
- SKU, UPC, MPN identifiers
- All pricing (MSRP, monthly, promo)
- Review ratings
- Availability, Condition
- Colors with hex codes
- Categories (5G, AI)

## UN/CEFACT Unit Codes

| Code | Unit | Usage |
|------|------|-------|
| `E34` | Gigabyte | 256GB, 512GB |
| `E35` | Terabyte | 1TB, 2TB |
| `INH` | Inch | Dimensions |
| `ONZ` | Ounce | Weight |
| `MON` | Month | Installments |

## Offer Structure

All 12 offers consolidated in `offers.offers[]`:
- 256GB: Cosmic Orange, Deep Blue, Silver
- 512GB: Cosmic Orange, Deep Blue, Silver
- 1TB: Cosmic Orange, Deep Blue, Silver
- 2TB: Cosmic Orange, Deep Blue, Silver

## Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
