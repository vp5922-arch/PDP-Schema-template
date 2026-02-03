/**
 * ============================================================================
 * COMPREHENSIVE SCHEMA.ORG STRUCTURED DATA
 * Apple iPhone 17 Pro Max - AT&T Product Detail Page
 * ============================================================================
 *
 * DATA SOURCE TAGS (Multiple tags = data in multiple sources):
 * -------------------------------------------------------------
 * [idp-cms-feed-json-feed] = CMS JSON feed - READY/AVAILABLE now
 * [CATALOG]                = PDP Catalog - Needs backend work to expose
 * [idp-cms-feed-json-feed][CATALOG] = In BOTH sources
 * [FRONTEND]               = Visible on webpage only
 * [RECOMMENDED]            = Best practice - NOT in any feed yet
 * [STATIC]                 = Hardcoded values
 *
 * DEVELOPER PRIORITY:
 * - [idp-cms-feed-json-feed] = Implement NOW (data ready)
 * - [CATALOG] = Implement LATER (needs backend API work first)
 * ============================================================================
 */

const iPhoneProMaxSchema = {
  "@context": "https://schema.org",                                            // [STATIC]
  "@type": "Product",                                                          // [STATIC]
  "@id": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html#product", // [CATALOG] mPDPPageURL

  // ============================================================================
  // PRODUCT IDENTITY
  // ============================================================================

  "name": "Apple iPhone 17 Pro Max",                                           // [idp-cms-feed-json-feed][CATALOG] JSON: seo.metaSeotitle, CATALOG: displayName
  "description": "iPhone 17 Pro Max. The most powerful iPhone ever. Brilliant 6.9-inch display, aluminum unibody design, A19 Pro chip, all 48MP rear cameras, and best-ever battery life.",
                                                                               // [idp-cms-feed-json-feed][CATALOG] JSON: overview.overviewDescription, CATALOG: childSku.description
  "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html",        // [CATALOG] childSku.mPDPPageURL

  // ============================================================================
  // IMAGES
  // ============================================================================

  "image": [
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/cosmic-orange-hero-zoom.png",
                                                                               // [idp-cms-feed-json-feed][CATALOG] JSON: deviceImageGallery, CATALOG: masterImageUrl
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/deep-blue-hero-zoom.png",
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/silver-hero-zoom.png"
  ],

  // ============================================================================
  // PRODUCT IDENTIFIERS - All need backend work
  // ============================================================================

  "sku": "6094F",                                                              // [CATALOG] childSku.billingInfo.billCode
  "gtin13": "195950638004",                                                    // [CATALOG] childSku.upc
  "mpn": "MFXH4LL/A",                                                          // [CATALOG] childSku.manufacturersPartNumber
  "productID": "prod54217p2",                                                  // [CATALOG] device.product.productId

  // ============================================================================
  // BRAND
  // ============================================================================

  "brand": {
    "@type": "Brand",                                                          // [STATIC]
    "name": "Apple"                                                            // [CATALOG] device.product.manufacturer
  },

  "model": "iPhone 17 Pro Max",                                                // [CATALOG] device.product.model
  "category": "Smartphones",                                                   // [CATALOG] device.product.subCategory
  "color": ["Cosmic Orange", "Deep Blue", "Silver"],                           // [CATALOG] childSku.color
  "material": "Heat-forged aluminum unibody",                                  // [idp-cms-feed-json-feed] keyFeatures[KFE-01].description

  // ============================================================================
  // DIMENSIONS - All from JSON feed (READY)
  // ============================================================================

  "weight": {
    "@type": "QuantitativeValue",
    "value": 8.22,                                                             // [idp-cms-feed-json-feed] DIM-20 value
    "unitCode": "ONZ",
    "unitText": "ounces"
  },

  "height": {
    "@type": "QuantitativeValue",
    "value": 6.43,                                                             // [idp-cms-feed-json-feed] DIM-10 value parsed[0]
    "unitCode": "INH",
    "unitText": "inches"
  },

  "width": {
    "@type": "QuantitativeValue",
    "value": 3.07,                                                             // [idp-cms-feed-json-feed] DIM-10 value parsed[1]
    "unitCode": "INH",
    "unitText": "inches"
  },

  "depth": {
    "@type": "QuantitativeValue",
    "value": 0.34,                                                             // [idp-cms-feed-json-feed] DIM-10 value parsed[2]
    "unitCode": "INH",
    "unitText": "inches"
  },

  // ============================================================================
  // RATINGS - Needs backend work
  // ============================================================================

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.1,                                                        // [CATALOG] reviewRatings.starRating
    "bestRating": 5,                                                           // [STATIC]
    "worstRating": 1,                                                          // [STATIC]
    "ratingCount": 8485,                                                       // [CATALOG] reviewRatings.reviewCount
    "reviewCount": 8485                                                        // [CATALOG] reviewRatings.reviewCount
  },

  // ============================================================================
  // OFFERS - ALL CONSOLIDATED HERE
  // ============================================================================

  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",                                                    // [STATIC]
    "lowPrice": 1199.99,                                                       // [CATALOG] price.msrp (256GB)
    "highPrice": 1999.99,                                                      // [CATALOG] price.msrp (2TB)
    "offerCount": 12,                                                          // [idp-cms-feed-json-feed] pdp.skus.split(',').length
    "availability": "https://schema.org/InStock",                              // [CATALOG] saleStatus="buynow"
    "itemCondition": "https://schema.org/NewCondition",                        // [CATALOG] condition.key="new"
    "priceValidUntil": "2026-12-31",                                           // [RECOMMENDED] Not in feeds

    "seller": {
      "@type": "Organization",
      "name": "AT&T",                                                          // [FRONTEND]
      "url": "https://www.att.com"                                             // [STATIC]
    },

    "offers": [
      // 256GB VARIANTS
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 256GB - Cosmic Orange",                     // [CATALOG] childSku.displayName
        "sku": "sku54217v4",                                                   // [CATALOG] childSku.skuId
        "gtin13": "195950638004",                                              // [CATALOG] childSku.upc
        "mpn": "MFXH4LL/A",                                                    // [CATALOG] childSku.manufacturersPartNumber
        "price": 1199.99,                                                      // [CATALOG] price.msrp
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",                          // [CATALOG] saleStatus
        "itemCondition": "https://schema.org/NewCondition",                    // [CATALOG] condition.key
        "image": "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/cosmic-orange-hero-zoom.png",
                                                                               // [idp-cms-feed-json-feed][CATALOG]
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 33.34,                                                      // [CATALOG] price.listPrice
          "priceCurrency": "USD",
          "unitText": "monthly",                                               // [CATALOG] price.type
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,                                                       // [CATALOG] price.termLength
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "color": "Cosmic Orange",                                            // [CATALOG] childSku.color
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Storage Capacity",
              "value": 256,                                                    // [idp-cms-feed-json-feed][CATALOG] JSON: MEM-10, CATALOG: internalMemoryStorage
              "unitCode": "E34",
              "unitText": "GB"
            },
            {
              "@type": "PropertyValue",
              "name": "Color Hex",
              "value": "#F77E2D"                                               // [CATALOG] childSku.htmlColor
            }
          ]
        }
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 256GB - Deep Blue",                         // [CATALOG]
        "sku": "sku54217v5",                                                   // [CATALOG]
        "gtin13": "195950638011",                                              // [CATALOG]
        "price": 1199.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Deep Blue", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 256, "unitCode": "E34", "unitText": "GB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 256GB - Silver",                            // [CATALOG]
        "sku": "sku54217v6",                                                   // [CATALOG]
        "price": 1199.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Silver", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 256, "unitCode": "E34", "unitText": "GB"}}
      },

      // 512GB VARIANTS
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Cosmic Orange",                     // [CATALOG]
        "sku": "sku54217v1",                                                   // [CATALOG]
        "price": 1399.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 38.89, "priceCurrency": "USD", "unitText": "monthly", "referenceQuantity": {"@type": "QuantitativeValue", "value": 36, "unitCode": "MON"}},
        "itemOffered": {"@type": "Product", "color": "Cosmic Orange", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 512, "unitCode": "E34", "unitText": "GB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Deep Blue",                         // [CATALOG]
        "sku": "sku54217v2",                                                   // [CATALOG]
        "price": 1399.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Deep Blue", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 512, "unitCode": "E34", "unitText": "GB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Silver",                            // [CATALOG]
        "sku": "sku54217v3",                                                   // [CATALOG]
        "price": 1399.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Silver", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 512, "unitCode": "E34", "unitText": "GB"}}
      },

      // 1TB VARIANTS - Note: unitCode E35 for Terabyte
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Cosmic Orange",                       // [CATALOG]
        "sku": "sku54217v7",                                                   // [CATALOG]
        "price": 1599.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 44.45, "priceCurrency": "USD", "unitText": "monthly", "referenceQuantity": {"@type": "QuantitativeValue", "value": 36, "unitCode": "MON"}},
        "itemOffered": {"@type": "Product", "color": "Cosmic Orange", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 1, "unitCode": "E35", "unitText": "TB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Deep Blue",                           // [CATALOG]
        "sku": "sku54217v8",                                                   // [CATALOG]
        "price": 1599.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Deep Blue", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 1, "unitCode": "E35", "unitText": "TB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Silver",                              // [CATALOG]
        "sku": "sku54217v9",                                                   // [CATALOG]
        "price": 1599.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Silver", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 1, "unitCode": "E35", "unitText": "TB"}}
      },

      // 2TB VARIANTS
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Cosmic Orange",                       // [CATALOG]
        "sku": "sku54217v10",                                                  // [CATALOG]
        "price": 1999.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 55.56, "priceCurrency": "USD", "unitText": "monthly", "referenceQuantity": {"@type": "QuantitativeValue", "value": 36, "unitCode": "MON"}},
        "itemOffered": {"@type": "Product", "color": "Cosmic Orange", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 2, "unitCode": "E35", "unitText": "TB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Deep Blue",                           // [CATALOG]
        "sku": "sku54217v11",                                                  // [CATALOG]
        "price": 1999.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Deep Blue", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 2, "unitCode": "E35", "unitText": "TB"}}
      },
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Silver",                              // [CATALOG]
        "sku": "sku54217v12",                                                  // [CATALOG]
        "price": 1999.99,                                                      // [CATALOG]
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemOffered": {"@type": "Product", "color": "Silver", "additionalProperty": {"@type": "PropertyValue", "name": "Storage", "value": 2, "unitCode": "E35", "unitText": "TB"}}
      }
    ],

    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {"@type": "MonetaryAmount", "value": 0, "currency": "USD"}, // [FRONTEND] Free shipping
      "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "US"}
    },

    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "US",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14,                                                // [FRONTEND]
      "returnMethod": "https://schema.org/ReturnByMail",
      "refundType": "https://schema.org/FullRefund"
    }
  },

  // ============================================================================
  // DEVICE SPECS - ALL FROM [idp-cms-feed-json-feed] (READY TO USE)
  // ============================================================================

  "additionalProperty": [
    // DISPLAY
    {"@type": "PropertyValue", "propertyID": "DIS-10", "name": "Display Size", "value": {"@type": "QuantitativeValue", "value": 6.9, "unitCode": "INH", "unitText": "inches"}},                    // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "DIS-20", "name": "Resolution", "value": "2868 x 1320 pixels at 460 ppi"},                                                                            // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "DIS-50", "name": "Contrast Ratio", "value": "2,000,000:1"},                                                                                          // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "DIS-60", "name": "Water Resistance", "value": "IP68 (6m, 30min)"},                                                                                   // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "DIS-120", "name": "Display Features", "value": "Dynamic Island, Always-On, ProMotion 120Hz, HDR, True Tone, 3000 nits"},                            // [idp-cms-feed-json-feed]

    // CAMERA
    {"@type": "PropertyValue", "propertyID": "CAM-10", "name": "Main Camera", "value": "48MP Fusion Main: 24mm, ƒ/1.78, OIS"},                                                                     // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "CAM-ULTRAWIDE", "name": "Ultra Wide", "value": "48MP: 13mm, ƒ/2.2, 120° FOV"},                                                                       // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "CAM-TELEPHOTO", "name": "Telephoto", "value": "48MP: 100mm (4x), ƒ/2.8, tetraprism"},                                                                // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "CAM-70", "name": "Zoom", "value": "8x optical-quality, 16x range, 40x digital"},                                                                     // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "CAM-60", "name": "Front Camera", "value": "18MP Center Stage, ƒ/1.9, Dual Capture"},                                                                 // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "CAM-20", "name": "Video", "value": "4K Dolby Vision 120fps, Cinematic 4K, Spatial video, ProRes"},                                                   // [idp-cms-feed-json-feed]

    // BATTERY
    {"@type": "PropertyValue", "propertyID": "BAT-50", "name": "Video Playback", "value": "Up to 39 hours"},                                                                                       // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "BAT-60", "name": "Streamed Playback", "value": "Up to 35 hours"},                                                                                    // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "BAT-180", "name": "Fast Charging", "value": "50% in 20min with 40W"},                                                                                // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "BAT-80", "name": "Wireless Charging", "value": "Qi2 25W, MagSafe 25W"},                                                                              // [idp-cms-feed-json-feed]

    // PROCESSOR
    {"@type": "PropertyValue", "propertyID": "PRO-10", "name": "Processor", "value": "A19 Pro: 6-core CPU, 6-core GPU, 16-core Neural Engine"},                                                    // [idp-cms-feed-json-feed]

    // MEMORY
    {"@type": "PropertyValue", "propertyID": "MEM-10", "name": "Storage Options", "value": "256GB | 512GB | 1TB | 2TB"},                                                                           // [idp-cms-feed-json-feed][CATALOG]

    // OS
    {"@type": "PropertyValue", "propertyID": "OPS-10", "name": "Operating System", "value": "iOS 26"},                                                                                             // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "OPS-130", "name": "Face ID", "value": true},                                                                                                         // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "OPS-30", "name": "Siri", "value": "Apple Intelligence powered"},                                                                                     // [idp-cms-feed-json-feed]

    // WIRELESS
    {"@type": "PropertyValue", "propertyID": "WLS-10", "name": "AT&T 5G+ Bands", "value": "n77 C-Band, n260"},                                                                                     // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "WLS-110", "name": "Wi-Fi", "value": "Wi-Fi 7 (802.11be) 2x2 MIMO"},                                                                                  // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "WLS-140", "name": "Bluetooth", "value": "v6"},                                                                                                       // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "WLS-180", "name": "SIM", "value": "Dual eSIM (2 active, stores 8+)"},                                                                                // [idp-cms-feed-json-feed]
    {"@type": "PropertyValue", "propertyID": "WLS-190", "name": "FirstNet Ready", "value": true},                                                                                                  // [idp-cms-feed-json-feed][CATALOG]

    // SENSORS
    {"@type": "PropertyValue", "propertyID": "SEN-10", "name": "Sensors", "value": "Face ID, LiDAR, Barometer, Gyro, Accelerometer, Proximity"},                                                   // [idp-cms-feed-json-feed]

    // MAGSAFE
    {"@type": "PropertyValue", "propertyID": "MGS-10", "name": "MagSafe", "value": "25W wireless charging"},                                                                                       // [idp-cms-feed-json-feed]

    // CATEGORIES - Need backend work
    {"@type": "PropertyValue", "propertyID": "CAT-5G", "name": "5G Capable", "value": true},                                                                                                       // [CATALOG] categories
    {"@type": "PropertyValue", "propertyID": "CAT-AI", "name": "AI Features", "value": true}                                                                                                       // [CATALOG] categories
  ],

  // ============================================================================
  // KEY FEATURES - [idp-cms-feed-json-feed] keyFeatures (READY)
  // ============================================================================

  "subjectOf": {
    "@type": "ItemList",
    "name": "Key Features",
    "numberOfItems": 4,
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Unibody Design", "description": "Heat-forged aluminum unibody for exceptional power"},                                                        // [idp-cms-feed-json-feed] KFE-01
      {"@type": "ListItem", "position": 2, "name": "Ceramic Shield", "description": "4x crack resistant back, 3x scratch resistant front"},                                                       // [idp-cms-feed-json-feed] KFE-02
      {"@type": "ListItem", "position": 3, "name": "Pro Camera System", "description": "All 48MP cameras, 8x optical zoom, 8 pro lenses"},                                                        // [idp-cms-feed-json-feed] KFE-03
      {"@type": "ListItem", "position": 4, "name": "Center Stage Camera", "description": "18MP front camera with Dual Capture"}                                                                   // [idp-cms-feed-json-feed] KFE-04
    ]
  },

  // ============================================================================
  // IN THE BOX - [idp-cms-feed-json-feed] deviceInTheBox (READY)
  // ============================================================================

  "isAccessoryOrSparePartFor": [
    {"@type": "Product", "name": "USB-C Charge Cable (1 m)"},                  // [idp-cms-feed-json-feed]
    {"@type": "Product", "name": "Documentation"}                              // [idp-cms-feed-json-feed]
  ],

  // ============================================================================
  // RELATED PRODUCTS - [idp-cms-feed-json-feed] model (READY)
  // ============================================================================

  "isRelatedTo": {
    "@type": "Product",
    "name": "iPhone 17 Pro",                                                   // [idp-cms-feed-json-feed] model[0]
    "description": "6.3-inch display",
    "url": "https://www.att.com/buy/phones/apple-iphone-17-pro.html"
  }
};

/**
 * ============================================================================
 * DEVELOPER IMPLEMENTATION GUIDE
 * ============================================================================
 *
 * PHASE 1 - IMPLEMENT NOW (idp-cms-feed-json-feed ready):
 * -------------------------------------------------------
 * ✓ Dimensions (DIM-10, DIM-20)
 * ✓ Display specs (DIS-10, DIS-20, DIS-50, DIS-60, DIS-120)
 * ✓ Camera specs (CAM-10, CAM-20, CAM-60, CAM-70)
 * ✓ Battery specs (BAT-50, BAT-60, BAT-80, BAT-180)
 * ✓ Processor (PRO-10)
 * ✓ Memory options (MEM-10)
 * ✓ OS features (OPS-10, OPS-30, OPS-130)
 * ✓ Wireless specs (WLS-10, WLS-110, WLS-140, WLS-180, WLS-190)
 * ✓ Sensors (SEN-10)
 * ✓ MagSafe (MGS-10)
 * ✓ Key Features (KFE-01 to KFE-04)
 * ✓ In The Box (deviceInTheBox)
 * ✓ Related Models (model array)
 * ✓ Image Gallery (deviceImageGallery)
 * ✓ Offer count (pdp.skus)
 *
 * PHASE 2 - BACKEND WORK NEEDED (CATALOG):
 * -----------------------------------------
 * ○ Product identifiers (sku, upc, mpn, productId)
 * ○ All pricing (msrp, listPrice, monthly, promo)
 * ○ All 12 offer variants with prices
 * ○ Review ratings (starRating, reviewCount)
 * ○ Availability status (saleStatus)
 * ○ Condition (new/refurbished)
 * ○ Colors with hex codes (color, htmlColor)
 * ○ Categories (5G, AI, etc.)
 * ○ Product URLs (mPDPPageURL)
 * ○ Brand/manufacturer names
 *
 * BOTH SOURCES [idp-cms-feed-json-feed][CATALOG]:
 * ------------------------------------------------
 * • Images (deviceImageGallery OR masterImageUrl)
 * • Storage capacity (MEM-10 OR internalMemoryStorage)
 * • FirstNet (WLS-190 OR firstnetIndicator)
 * • Description (overview OR childSku.description)
 * • Product name (seo.metaSeotitle OR displayName)
 *
 * ============================================================================
 */

module.exports = iPhoneProMaxSchema;
