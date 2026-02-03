# Data Source Reference Card
## iPhone 17 Pro Max - Schema.org Field Mapping

---

## 🎯 Quick Visual Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SCHEMA.ORG PRODUCT DATA SOURCES                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────┐         ┌─────────────────────────┐          │
│   │  idp-cms-feed-json-feed │         │      PDP CATALOG        │          │
│   │      ✅ READY NOW       │         │   ⚠️ NEEDS BACKEND      │          │
│   ├─────────────────────────┤         ├─────────────────────────┤          │
│   │ • Dimensions            │         │ • Product IDs           │          │
│   │ • Display Specs         │         │ • All Pricing           │          │
│   │ • Camera Specs          │         │ • Ratings/Reviews       │          │
│   │ • Battery Specs         │         │ • Availability          │          │
│   │ • Processor             │         │ • Colors                │          │
│   │ • Wireless/Connectivity │         │ • SKU Variants          │          │
│   │ • Key Features          │         │ • URLs                  │          │
│   │ • In The Box            │         │ • Brand/Model           │          │
│   │ • Related Models        │         │ • Categories            │          │
│   │ • Image Gallery         │         │ • Promo Pricing         │          │
│   └─────────────────────────┘         └─────────────────────────┘          │
│              │                                   │                          │
│              └───────────┬───────────────────────┘                          │
│                          │                                                  │
│                          ▼                                                  │
│              ┌─────────────────────────┐                                    │
│              │   BOTH SOURCES HAVE:    │                                    │
│              │   • Images              │                                    │
│              │   • Storage Capacity    │                                    │
│              │   • FirstNet            │                                    │
│              │   • Description         │                                    │
│              │   • Product Name        │                                    │
│              └─────────────────────────┘                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📗 idp-cms-feed-json-feed Variables (READY TO USE)

### Dimensions (deviceSpecification → Dimensions)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `DIM-10` | `accordionData[0].value` | `height`, `width`, `depth` | "6.43 x 3.07 x 0.34" |
| `DIM-20` | `accordionData[1].value` | `weight` | "8.22" |

### Display (deviceSpecification → Display)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `DIS-10` | `accordionData[0].value` | `additionalProperty[DIS-10]` | "6.9-inch OLED" |
| `DIS-20` | `accordionData[1].value` | `additionalProperty[DIS-20]` | "2868x1320 at 460 ppi" |
| `DIS-40` | `accordionData[2].value` | `additionalProperty[DIS-40]` | "Super Retina XDR" |
| `DIS-50` | `accordionData[3].value` | `additionalProperty[DIS-50]` | "2,000,000:1" |
| `DIS-60` | `accordionData[4].value` | `additionalProperty[DIS-60]` | "IP68 (6m, 30min)" |
| `DIS-120` | `accordionData[5].value` | `additionalProperty[DIS-120]` | "Dynamic Island, ProMotion..." |

### Camera & Video (deviceSpecification → Camera & Video)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `CAM-10` | `accordionData[0].value` | `additionalProperty[CAM-10]` | "48MP Fusion Main, ƒ/1.78" |
| `CAM-20` | `accordionData[3].value` | `additionalProperty[CAM-20]` | "4K Dolby Vision 120fps" |
| `CAM-30` | `accordionData[4].value` | `additionalProperty[CAM-30]` | "HEVC, H.264, ProRes" |
| `CAM-60` | `accordionData[5].value` | `additionalProperty[CAM-60]` | "18MP Center Stage" |
| `CAM-70` | `accordionData[1].value` | `additionalProperty[CAM-70]` | "8x optical, 40x digital" |
| `CAM-90` | `accordionData[2].value` | `additionalProperty[CAM-90]` | "48MP Pro Fusion system" |

### Battery (deviceSpecification → Battery)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `BAT-30` | `accordionData[1].value` | `additionalProperty[BAT-30]` | "AAC, MP3, FLAC, Dolby" |
| `BAT-50` | `accordionData[2].value` | `additionalProperty[BAT-50]` | "Up to 39 hours" |
| `BAT-60` | `accordionData[3].value` | `additionalProperty[BAT-60]` | "Up to 35 hours" |
| `BAT-80` | `accordionData[5].value` | `additionalProperty[BAT-80]` | "Qi2 25W, MagSafe" |
| `BAT-90` | `accordionData[6].value` | `additionalProperty[BAT-90]` | "50% in 20min" |
| `BAT-130` | `accordionData[0].value` | `additionalProperty[BAT-130]` | checkbox (Li-ion) |
| `BAT-180` | `accordionData[4].value` | `additionalProperty[BAT-180]` | "40W adapter" |

### Processor (deviceSpecification → Processor)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `PRO-10` | `accordionData[0].value` | `additionalProperty[PRO-10]` | "A19 Pro, 6-core CPU" |
| `PRO-30` | `accordionData[1].value` | `additionalProperty[PRO-30]` | checkbox (Neural Engine) |

### Memory (deviceSpecification → Memory)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `MEM-10` | `accordionData[0].value` | `additionalProperty[MEM-10]` | "256GB \| 512GB \| 1TB \| 2TB" |

### Operating System (deviceSpecification → Operating System)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `OPS-10` | `accordionData[0].value` | `additionalProperty[OPS-10]` | "26" (iOS version) |
| `OPS-30` | `accordionData[3].value` | `additionalProperty[OPS-30]` | "Siri with Apple Intelligence" |
| `OPS-40` | `accordionData[2].value` | `additionalProperty[OPS-40]` | "Apple Pay" |
| `OPS-130` | `accordionData[1].value` | `additionalProperty[OPS-130]` | "Face ID" |

### Wireless Technology (deviceSpecification → Wireless Technology)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `WLS-10` | `accordionData[0].value` | `additionalProperty[WLS-10]` | "n77 C-Band, n260" |
| `WLS-20` | `accordionData[1].value` | `additionalProperty[WLS-20]` | "5G bands list" |
| `WLS-30` | `accordionData[2].value` | `additionalProperty[WLS-30]` | "4G LTE bands" |
| `WLS-110` | `accordionData[10].value` | `additionalProperty[WLS-110]` | "Wi-Fi 7 (802.11be)" |
| `WLS-130` | `accordionData[12].value` | `additionalProperty[WLS-130]` | "NFC with reader mode" |
| `WLS-140` | `accordionData[13].value` | `additionalProperty[WLS-140]` | "Bluetooth v6" |
| `WLS-180` | `accordionData[14].value` | `additionalProperty[WLS-180]` | "Dual eSIM" |
| `WLS-190` | `accordionData[15].value` | `additionalProperty[WLS-190]` | checkbox (FirstNet) |
| `WLS-200` | `accordionData[7].value` | `additionalProperty[WLS-200]` | "FaceTime video" |

### MagSafe (deviceSpecification → MagSafe)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `MGS-10` | `accordionData[0].value` | `additionalProperty[MGS-10]` | "25W wireless charging" |

### Sensors (deviceSpecification → Sensors)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `SEN-10` | `accordionData[0].value` | `additionalProperty[SEN-10]` | "Face ID, LiDAR, Barometer..." |

### Music (deviceSpecification → Music)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `MUS-10` | `accordionData[0].value` | `additionalProperty[MUS-10]` | "Apple Music" |
| `MUS-20` | `accordionData[1].value` | `additionalProperty[MUS-20]` | "AAC, MP3, FLAC..." |
| `MUS-30` | `accordionData[2].value` | `additionalProperty[MUS-30]` | checkbox (Spatial Audio) |

### Key Features (keyFeatures array)
| Attribute ID | JSON Path | Schema Field | Value Example |
|--------------|-----------|--------------|---------------|
| `KFE-01` | `keyFeatures[0].master.description` | `subjectOf.itemListElement[0]` | "Unibody Design" |
| `KFE-02` | `keyFeatures[1].master.description` | `subjectOf.itemListElement[1]` | "Ceramic Shield" |
| `KFE-03` | `keyFeatures[2].master.description` | `subjectOf.itemListElement[2]` | "Pro Camera System" |
| `KFE-04` | `keyFeatures[3].master.description` | `subjectOf.itemListElement[3]` | "Center Stage Camera" |

### Other JSON Fields
| JSON Path | Schema Field | Value Example |
|-----------|--------------|---------------|
| `seo.metaDescription` | (meta tag) | "The new iPhone 17 Pro Max..." |
| `seo.metaSeotitle` | `name` (option) | "Buy New iPhone 17 Pro Max" |
| `overview[0].overviewDescription` | `description` (option) | "iPhone 17 Pro Max. The most powerful..." |
| `pdp.skus` | `offers.offerCount` | "sku54217v1,sku54217v2,..." (count=12) |
| `deviceInTheBox[].subtitle` | `isAccessoryOrSparePartFor` | "USB-C Charge Cable (1 m)" |
| `model[].deviceUniqueURL` | `isRelatedTo.url` | "apple-iphone-17-pro" |
| `deviceImageGallery[].imageUrls` | `image` | "/carousel/cosmic-orange-1.png" |

---

## 📕 CATALOG Variables (NEEDS BACKEND WORK)

### Product Identity
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `device.product.displayName` | `name` | "Apple iPhone 17 Pro Max" |
| `device.product.manufacturer` | `brand.name` | "Apple" |
| `device.product.model` | `model` | "iPhone 17 Pro Max" |
| `device.product.productId` | `productID` | "prod54217p2" |
| `device.product.subCategory` | `category` | "smartphone" |
| `device.offerId` | (internal) | "prod54217p2" |

### SKU Identifiers (per childSku)
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.skuId` | `offers[].sku` | "sku54217v4" |
| `childSku.upc` | `offers[].gtin13` | "195950638004" |
| `childSku.manufacturersPartNumber` | `offers[].mpn` | "MFXH4LL/A" |
| `childSku.billingInfo.billCode` | `sku` (primary) | "6094F" |

### Pricing (per childSku.price.price)
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `price.msrp` | `offers[].price` | "1199.99" |
| `price.listPrice` | `priceSpecification.price` | "33.34" |
| `price.netPrice` | (alternative) | "33.34" |
| `price.termLength` | `priceSpecification.referenceQuantity.value` | "36" |
| `price.type` | `priceSpecification.unitText` | "monthly" |
| `price.commitmentTerm` | (internal) | "NE36MNUP" |

### Promotional Pricing (per promoPricing)
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `promoPricing.monthlyPromoPrice` | `priceSpecification.price` (promo) | "2.78" |
| `promoPricing.tradeinDiscount` | `eligibleTransactionVolume.price` | "1100.0" |
| `promoPricing.promoType` | (internal) | "tradein" |
| `promoPricing.promoReference` | (internal) | "54022" |

### Reviews & Ratings
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.reviewRatings.starRating` | `aggregateRating.ratingValue` | "4.0873" → 4.1 |
| `childSku.reviewRatings.reviewCount` | `aggregateRating.ratingCount` | "8485" |

### Availability & Condition
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.saleStatus` | `offers[].availability` | "buynow" → InStock |
| `childSku.condition.key` | `offers[].itemCondition` | "new" → NewCondition |
| `childSku.retailAvailable` | (internal) | "true" |
| `childSku.preOrderable` | (internal) | "false" |

### Colors
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.color` | `offers[].itemOffered.color` | "Cosmic Orange" |
| `childSku.htmlColor` | `additionalProperty[html-color]` | "#F77E2D" |

### Storage
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.internalMemoryStorage` | `additionalProperty[storage]` | "256 GB" |

### URLs & Images
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.mPDPPageURL` | `url`, `offers[].url` | "https://www.att.com/buy/phones/..." |
| `mediaTypes.images.masterImageUrl` | `image`, `offers[].image` | "cosmic-orange-hero-zoom.png" |

### Categories & Features
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.categories.category` | `additionalProperty` | "5G", "AI", "CAMERA" |
| `childSku.firstnetIndicator` | `additionalProperty[WLS-190]` | "ready" → true |
| `childSku.osType` | (internal) | "Apple" |

### Dates
| XML Path | Schema Field | Value Example |
|----------|--------------|---------------|
| `childSku.startDate` | `productionDate` | "2025-09-07T00:00:00.000Z" |

---

## 📊 ALL VARIABLES - Complete Mapping Table

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              COMPLETE FIELD MAPPING                                     │
├──────────────────────┬─────────────────────────┬─────────────────────────┬─────────────┤
│ Schema.org Field     │ idp-cms-feed-json-feed  │ CATALOG                 │ Priority    │
├──────────────────────┼─────────────────────────┼─────────────────────────┼─────────────┤
│ name                 │ seo.metaSeotitle        │ product.displayName     │ BOTH        │
│ description          │ overview.description    │ childSku.description    │ BOTH        │
│ url                  │ -                       │ mPDPPageURL             │ CATALOG     │
│ image                │ deviceImageGallery      │ masterImageUrl          │ BOTH        │
│ sku                  │ -                       │ billCode                │ CATALOG     │
│ gtin13               │ -                       │ upc                     │ CATALOG     │
│ mpn                  │ -                       │ manufacturersPartNumber │ CATALOG     │
│ productID            │ -                       │ productId               │ CATALOG     │
│ brand.name           │ -                       │ manufacturer            │ CATALOG     │
│ model                │ -                       │ model                   │ CATALOG     │
│ category             │ -                       │ subCategory             │ CATALOG     │
│ color                │ -                       │ color                   │ CATALOG     │
│ material             │ KFE-01                  │ -                       │ JSON        │
│ weight               │ DIM-20                  │ -                       │ JSON        │
│ height/width/depth   │ DIM-10                  │ -                       │ JSON        │
│ aggregateRating      │ -                       │ reviewRatings           │ CATALOG     │
│ offers.price         │ -                       │ msrp                    │ CATALOG     │
│ offers.availability  │ -                       │ saleStatus              │ CATALOG     │
│ offers.itemCondition │ -                       │ condition.key           │ CATALOG     │
│ priceSpecification   │ -                       │ listPrice, termLength   │ CATALOG     │
│ storage capacity     │ MEM-10                  │ internalMemoryStorage   │ BOTH        │
│ display specs        │ DIS-10 to DIS-120       │ -                       │ JSON        │
│ camera specs         │ CAM-10 to CAM-90        │ -                       │ JSON        │
│ battery specs        │ BAT-30 to BAT-180       │ -                       │ JSON        │
│ processor            │ PRO-10, PRO-30          │ -                       │ JSON        │
│ OS                   │ OPS-10 to OPS-130       │ -                       │ JSON        │
│ wireless             │ WLS-10 to WLS-200       │ -                       │ JSON        │
│ sensors              │ SEN-10                  │ -                       │ JSON        │
│ MagSafe              │ MGS-10                  │ -                       │ JSON        │
│ FirstNet             │ WLS-190                 │ firstnetIndicator       │ BOTH        │
│ keyFeatures          │ KFE-01 to KFE-04        │ -                       │ JSON        │
│ inTheBox             │ deviceInTheBox          │ -                       │ JSON        │
│ relatedProducts      │ model[]                 │ -                       │ JSON        │
│ offerCount           │ pdp.skus (count)        │ childSkus (count)       │ BOTH        │
│ 5G/AI categories     │ -                       │ categories              │ CATALOG     │
│ htmlColor            │ -                       │ htmlColor               │ CATALOG     │
│ promoPrice           │ -                       │ promoPricing            │ CATALOG     │
└──────────────────────┴─────────────────────────┴─────────────────────────┴─────────────┘
```

---

## 🎴 Quick Reference Card

### ✅ IMPLEMENT NOW (idp-cms-feed-json-feed)

```
DIMENSIONS        DIM-10, DIM-20
DISPLAY           DIS-10, DIS-20, DIS-40, DIS-50, DIS-60, DIS-120
CAMERA            CAM-10, CAM-20, CAM-30, CAM-60, CAM-70, CAM-90
BATTERY           BAT-30, BAT-50, BAT-60, BAT-80, BAT-90, BAT-130, BAT-180
PROCESSOR         PRO-10, PRO-30
MEMORY            MEM-10
OS                OPS-10, OPS-30, OPS-40, OPS-130
WIRELESS          WLS-10, WLS-20, WLS-30, WLS-110, WLS-130, WLS-140, WLS-180, WLS-190, WLS-200
MAGSAFE           MGS-10
SENSORS           SEN-10
MUSIC             MUS-10, MUS-20, MUS-30
KEY FEATURES      KFE-01, KFE-02, KFE-03, KFE-04
IN THE BOX        deviceInTheBox[]
RELATED MODELS    model[]
IMAGES            deviceImageGallery[]
SEO               seo.metaDescription, seo.metaSeotitle
OVERVIEW          overview[].overviewDescription
SKU LIST          pdp.skus
```

### ⚠️ NEEDS BACKEND (CATALOG)

```
IDENTIFIERS       skuId, upc, mpn, billCode, productId
PRICING           msrp, listPrice, netPrice, termLength
PROMO PRICING     monthlyPromoPrice, tradeinDiscount
RATINGS           starRating, reviewCount
AVAILABILITY      saleStatus, condition
COLORS            color, htmlColor
URLS              mPDPPageURL
BRAND/MODEL       manufacturer, model, displayName
CATEGORIES        categories[] (5G, AI, etc.)
DATES             startDate
IMAGES            masterImageUrl
STORAGE           internalMemoryStorage
FIRSTNET          firstnetIndicator
```

---

## 📈 Visual: Data Flow Diagram

```
                    ┌──────────────────────────────────────┐
                    │         SCHEMA.ORG OUTPUT            │
                    │      (iphone-17-pro-max.json)        │
                    └──────────────────────────────────────┘
                                      ▲
                                      │
                    ┌─────────────────┴─────────────────┐
                    │         DATA AGGREGATOR           │
                    │    (Frontend JavaScript/API)      │
                    └─────────────────┬─────────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
              ▼                       ▼                       ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│ idp-cms-feed-json   │   │    PDP CATALOG      │   │     FRONTEND        │
│   ✅ READY NOW      │   │  ⚠️ NEEDS BACKEND   │   │    (page DOM)       │
├─────────────────────┤   ├─────────────────────┤   ├─────────────────────┤
│                     │   │                     │   │                     │
│ • 35+ Spec Fields   │   │ • Product IDs       │   │ • Seller Name       │
│ • 4 Key Features    │   │ • 12 SKU Variants   │   │ • Free Shipping     │
│ • Device Specs      │   │ • All Pricing       │   │ • Return Policy     │
│ • Image Gallery     │   │ • Ratings           │   │                     │
│ • Related Models    │   │ • Colors            │   │                     │
│                     │   │ • Availability      │   │                     │
└─────────────────────┘   └─────────────────────┘   └─────────────────────┘
         │                         │                         │
         │    60% of fields        │    35% of fields        │   5% of fields
         └─────────────────────────┴─────────────────────────┘
```

---

## 📋 Checklist for Implementation

### Phase 1: JSON Feed (Do First)
- [ ] Parse `deviceSpecification` accordions
- [ ] Extract all attribute IDs (DIS-*, CAM-*, BAT-*, etc.)
- [ ] Parse `keyFeatures` array
- [ ] Parse `deviceInTheBox` array
- [ ] Parse `model` array for related products
- [ ] Parse `deviceImageGallery` for images
- [ ] Count SKUs from `pdp.skus`

### Phase 2: Catalog Feed (Backend Work)
- [ ] Expose `childSku` data to frontend
- [ ] Expose pricing (`msrp`, `listPrice`, `termLength`)
- [ ] Expose `reviewRatings`
- [ ] Expose `saleStatus` and `condition`
- [ ] Expose `color` and `htmlColor`
- [ ] Expose product identifiers (`upc`, `mpn`, `skuId`)

### Phase 3: Combine
- [ ] Merge JSON + Catalog data
- [ ] Generate final JSON-LD schema
- [ ] Validate with Google Rich Results Test
- [ ] Deploy to production

---

## 🔢 Field Count Summary

| Source | Field Count | Status |
|--------|-------------|--------|
| **idp-cms-feed-json-feed** | ~50 fields | ✅ Ready |
| **CATALOG** | ~30 fields | ⚠️ Needs backend |
| **FRONTEND** | ~5 fields | ✅ Ready |
| **STATIC** | ~15 fields | ✅ Hardcoded |
| **RECOMMENDED** | ~10 fields | ❌ Not in feeds |
| **TOTAL** | ~110 fields | |

---

*Generated for AT&T iPhone 17 Pro Max PDP Schema Implementation*
