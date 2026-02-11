# AT&T Schema.org JSON-LD Templates

Structured data markup templates for AT&T product pages, following Schema.org standards and Google's rich results guidelines.

## File Naming Convention

All files follow the pattern: `att-{page-type}-{product/category}-{suffix}`

| Prefix | Page Type | Description |
|--------|-----------|-------------|
| `att-pdp-` | Product Detail Page | Individual product schema (e.g., iPhone 17 Pro Max) |
| `att-plp-` | Product List Page | Collection/listing page schema (e.g., all phones) |

| Suffix | Purpose |
|--------|---------|
| `-PRODUCTION.json` | Clean JSON-LD ready for deployment |
| `-ANNOTATED.js` | Schema with data source tags for developers |
| `-DOCUMENTATION.md` | Implementation guide and reference |

## Repository Files

### PDP — Product Detail Page

| File | Description |
|------|-------------|
| `att-pdp-iphone17promax-PRODUCTION.json` | iPhone 17 Pro Max product schema (12 offers, all variants) |
| `att-pdp-iphone17promax-ANNOTATED.js` | Annotated version with CMS/catalog data source tags |

### PLP — Product List Page

| File | Description |
|------|-------------|
| `att-plp-phones-PRODUCTION.json` | Phones listing page schema (17 products, CollectionPage + ItemList) |
| `att-plp-phones-DOCUMENTATION.md` | PLP implementation guide with industry research |

### Reference

| File | Description |
|------|-------------|
| `DATA-SOURCE-REFERENCE.md` | CMS feed field mappings and catalog XML references |

## Schema Architecture

### Page-Specific Schemas (in this repo)
- **CollectionPage + ItemList** — PLP product listings
- **Product + AggregateOffer** — PDP product details
- **WebSite + SearchAction** — Sitelinks search box

### Global Schemas (managed separately)
- **BreadcrumbList** — Site navigation breadcrumbs
- **Organization** — AT&T corporate identity, logo, social profiles

## Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Data Source Tags (PDP)

| Tag | Source | Status |
|-----|--------|--------|
| `[idp-cms-feed-json-feed]` | CMS JSON feed | **READY** |
| `[CATALOG]` | PDP Catalog XML | **NEEDS BACKEND** |
| `[FRONTEND]` | Webpage only | Visible on page |
| `[RECOMMENDED]` | Best practice | Not in any feed |
