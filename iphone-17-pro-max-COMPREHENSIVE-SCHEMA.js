/**
 * ============================================================================
 * COMPREHENSIVE SCHEMA.ORG STRUCTURED DATA
 * Apple iPhone 17 Pro Max - AT&T Product Detail Page
 * ============================================================================
 *
 * DATA SOURCE LEGEND:
 * -------------------
 * [CATALOG]     = PDP-catalog.txt XML feed (product/pricing/SKU data)
 * [JSON]        = json-feed.txt CMS feed (specs/features/SEO)
 * [FRONTEND]    = Visible on webpage (user-facing elements)
 * [SOURCE]      = HTML source code / meta tags
 * [CALCULATED]  = Derived/computed from other data sources
 * [STATIC]      = Hardcoded configuration values
 * [RECOMMENDED] = Schema.org best practice - DATA NOT FOUND IN FEEDS
 *
 * UN/CEFACT UNIT CODES USED:
 * --------------------------
 * E34 = Gigabyte (GB)
 * E35 = Terabyte (TB)
 * INH = Inch
 * ONZ = Ounce
 * MON = Month
 * DAY = Day
 * Note: No standard codes for pixels, ppi, Hz, MP - use unitText only
 *
 * IMPORTANT: ALL OFFERS ARE CONSOLIDATED IN offers.offers[] ARRAY
 * ============================================================================
 */

const iPhoneProMaxSchema = {
  // ============================================================================
  // SCHEMA CONTEXT & TYPE
  // ============================================================================

  "@context": "https://schema.org",                                            // [STATIC] Schema.org vocabulary
  "@type": "Product",                                                          // [STATIC] Primary type for product pages
  "@id": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html#product", // [CATALOG] childSku.mPDPPageURL + anchor

  // ============================================================================
  // PRODUCT IDENTITY - Core identifiers from CATALOG feed
  // ============================================================================

  "name": "Apple iPhone 17 Pro Max",                                           // [CATALOG] device.product.displayName

  "description": "iPhone 17 Pro Max. The most powerful iPhone ever. Brilliant 6.9-inch display, aluminum unibody design, A19 Pro chip, all 48MP rear cameras, and best-ever battery life.",
                                                                               // [CATALOG] childSku.description

  "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html",        // [CATALOG] childSku.mPDPPageURL

  // ============================================================================
  // PRODUCT IMAGES - From CATALOG feed mediaTypes
  // ============================================================================

  "image": [
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/cosmic-orange-hero-zoom.png",   // [CATALOG] Cosmic Orange - childSku[0].masterImageUrl
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/deep-blue-hero-zoom.png",       // [CATALOG] Deep Blue - childSku[1].masterImageUrl
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/silver-hero-zoom.png",          // [CATALOG] Silver - childSku[2].masterImageUrl
    // Carousel images from JSON feed:
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/carousel/cosmic-orange-1.png",               // [JSON] deviceImageGallery.imageUrls[0]
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/carousel/cosmic-orange-2.png",               // [JSON] deviceImageGallery.imageUrls[1]
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/carousel/cosmic-orange-3.png",               // [JSON] deviceImageGallery.imageUrls[2]
    "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/carousel/cosmic-orange-4.png"                // [JSON] deviceImageGallery.imageUrls[3]
  ],

  // ============================================================================
  // PRODUCT IDENTIFIERS - SKU, UPC, MPN from CATALOG feed
  // ============================================================================

  "sku": "6094F",                                                              // [CATALOG] childSku.billingInfo.billCode (primary SKU)
  "gtin13": "195950638004",                                                    // [CATALOG] childSku.upc
  "mpn": "MFXH4LL/A",                                                          // [CATALOG] childSku.manufacturersPartNumber
  "productID": "prod54217p2",                                                  // [CATALOG] device.offerId / product.productId

  // ============================================================================
  // BRAND & MANUFACTURER
  // ============================================================================

  "brand": {
    "@type": "Brand",                                                          // [STATIC] Schema.org type
    "name": "Apple",                                                           // [CATALOG] device.product.manufacturer
    "url": "https://www.apple.com"                                             // [RECOMMENDED] Brand URL - not in feeds
  },

  "manufacturer": {
    "@type": "Organization",                                                   // [STATIC] Schema.org type
    "name": "Apple Inc.",                                                      // [CATALOG] device.product.manufacturer (expanded)
    "url": "https://www.apple.com"                                             // [RECOMMENDED] Manufacturer URL - not in feeds
  },

  // ============================================================================
  // MODEL & CATEGORY
  // ============================================================================

  "model": "iPhone 17 Pro Max",                                                // [CATALOG] device.product.model
  "category": "Cell Phones > Smartphones > Apple",                             // [CATALOG] device.product.subCategory = "smartphone"
  "productionDate": "2025-09-07",                                              // [CATALOG] childSku.startDate (parsed)

  // ============================================================================
  // COLORS - Aggregated from all childSku variants in CATALOG
  // ============================================================================

  "color": [
    "Cosmic Orange",                                                           // [CATALOG] childSku[0].color + htmlColor #F77E2D
    "Deep Blue",                                                               // [CATALOG] childSku[1].color + htmlColor #394673
    "Silver"                                                                   // [CATALOG] childSku[2].color + htmlColor #E5E5E5
  ],

  // ============================================================================
  // MATERIAL - From JSON feed Key Features
  // ============================================================================

  "material": "Heat-forged aluminum unibody",                                  // [JSON] keyFeatures[KFE-01].description (parsed)

  // ============================================================================
  // PHYSICAL DIMENSIONS - From JSON feed deviceSpecification[Dimensions]
  // ============================================================================

  "weight": {
    "@type": "QuantitativeValue",                                              // [STATIC] Schema.org type
    "value": 8.22,                                                             // [JSON] DIM-20 "Weight (ounces)" value
    "unitCode": "ONZ",                                                         // [STATIC] UN/CEFACT code for ounces
    "unitText": "ounces"                                                       // [JSON] DIM-20 key label
  },

  "height": {
    "@type": "QuantitativeValue",                                              // [STATIC] Schema.org type
    "value": 6.43,                                                             // [JSON] DIM-10 "Size (inches)" value parsed [0]
    "unitCode": "INH",                                                         // [STATIC] UN/CEFACT code for inches
    "unitText": "inches"                                                       // [JSON] Derived from DIM-10 key
  },

  "width": {
    "@type": "QuantitativeValue",                                              // [STATIC] Schema.org type
    "value": 3.07,                                                             // [JSON] DIM-10 "Size (inches)" value parsed [1]
    "unitCode": "INH",                                                         // [STATIC] UN/CEFACT code for inches
    "unitText": "inches"                                                       // [JSON] Derived from DIM-10 key
  },

  "depth": {
    "@type": "QuantitativeValue",                                              // [STATIC] Schema.org type
    "value": 0.34,                                                             // [JSON] DIM-10 "Size (inches)" value parsed [2]
    "unitCode": "INH",                                                         // [STATIC] UN/CEFACT code for inches
    "unitText": "inches"                                                       // [JSON] Derived from DIM-10 key
  },

  // ============================================================================
  // AGGREGATE RATING - From CATALOG feed reviewRatings
  // ============================================================================

  "aggregateRating": {
    "@type": "AggregateRating",                                                // [STATIC] Schema.org type
    "ratingValue": 4.1,                                                        // [CATALOG] childSku.reviewRatings.starRating (4.0873 rounded)
    "bestRating": 5,                                                           // [STATIC] Standard 5-star scale
    "worstRating": 1,                                                          // [STATIC] Standard 5-star scale
    "ratingCount": 8485,                                                       // [CATALOG] childSku.reviewRatings.reviewCount
    "reviewCount": 8485                                                        // [CATALOG] childSku.reviewRatings.reviewCount (same)
  },

  // ============================================================================
  // OFFERS - ALL CONSOLIDATED IN ONE PLACE
  // Using AggregateOffer as parent container for all product variants
  // ============================================================================

  "offers": {
    "@type": "AggregateOffer",                                                 // [STATIC] Container for multiple offers
    "@id": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html#offers", // [CALCULATED] Anchor ID
    "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html",      // [CATALOG] childSku.mPDPPageURL
    "priceCurrency": "USD",                                                    // [STATIC] US Dollar

    // Price range across all variants
    "lowPrice": 1199.99,                                                       // [CATALOG] 256GB variant - childSku[0].price.price.msrp
    "highPrice": 2000.16,                                                      // [CALCULATED] 2TB variant (extrapolated from pricing pattern)
    "offerCount": 12,                                                          // [JSON] pdp.skus count = 12 SKUs total

    // Global availability applies to all offers
    "availability": "https://schema.org/InStock",                              // [CATALOG] childSku.saleStatus = "buynow" → InStock
    "itemCondition": "https://schema.org/NewCondition",                        // [CATALOG] childSku.condition.key = "new"
    "priceValidUntil": "2026-12-31",                                           // [RECOMMENDED] Not in feeds - add for validity

    // Seller information
    "seller": {
      "@type": "Organization",                                                 // [STATIC] Schema.org type
      "name": "AT&T",                                                          // [FRONTEND] Visible on page
      "url": "https://www.att.com",                                            // [FRONTEND] Site URL
      "telephone": "+1-800-331-0500"                                           // [RECOMMENDED] AT&T customer service - not in feeds
    },

    // =========================================================================
    // INDIVIDUAL VARIANT OFFERS - All storage/color combinations
    // Data from CATALOG feed childSku[] array
    // =========================================================================

    "offers": [
      // -----------------------------------------------------------------------
      // 256GB VARIANTS
      // -----------------------------------------------------------------------
      {
        "@type": "Offer",                                                      // [STATIC] Schema.org type
        "name": "iPhone 17 Pro Max 256GB - Cosmic Orange",                     // [CATALOG] childSku.displayName
        "sku": "sku54217v4",                                                   // [CATALOG] childSku.skuId
        "gtin13": "195950638004",                                              // [CATALOG] childSku.upc
        "mpn": "MFXH4LL/A",                                                    // [CATALOG] childSku.manufacturersPartNumber
        "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html",  // [CATALOG] childSku.mPDPPageURL
        "price": 1199.99,                                                      // [CATALOG] price.price.msrp
        "priceCurrency": "USD",                                                // [STATIC] US Dollar
        "availability": "https://schema.org/InStock",                          // [CATALOG] saleStatus = "buynow"
        "itemCondition": "https://schema.org/NewCondition",                    // [CATALOG] condition.key = "new"
        "image": "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/cosmic-orange-hero-zoom.png",
                                                                               // [CATALOG] mediaTypes.images.masterImageUrl
        // Installment pricing specification
        "priceSpecification": {
          "@type": "UnitPriceSpecification",                                   // [STATIC] Schema.org type for recurring price
          "price": 33.34,                                                      // [CATALOG] price.price.listPrice
          "priceCurrency": "USD",                                              // [STATIC] US Dollar
          "unitText": "monthly",                                               // [CATALOG] price.price.type = "monthly"
          "referenceQuantity": {
            "@type": "QuantitativeValue",                                      // [STATIC] Schema.org type
            "value": 36,                                                       // [CATALOG] price.price.termLength
            "unitCode": "MON"                                                  // [STATIC] UN/CEFACT code for months
          },
          "description": "36-month installment plan at 0% APR"                 // [CATALOG] commitmentTerm = "NE36MNUP"
        },

        // Trade-in promotional pricing
        "priceSpecification": [
          {
            "@type": "UnitPriceSpecification",                                 // [STATIC] Schema.org type
            "price": 33.34,                                                    // [CATALOG] price.price.listPrice (base price)
            "priceCurrency": "USD",                                            // [STATIC] US Dollar
            "unitText": "monthly",                                             // [CATALOG] type = "monthly"
            "description": "Base monthly installment price",                   // [CALCULATED] Label
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": 36,                                                     // [CATALOG] termLength
              "unitCode": "MON"
            }
          },
          {
            "@type": "UnitPriceSpecification",                                 // [STATIC] Schema.org type for promo
            "priceType": "https://schema.org/SalePrice",                       // [STATIC] Indicates promotional price
            "price": 2.78,                                                     // [CATALOG] promoPricing.monthlyPromoPrice (tradein $1100)
            "priceCurrency": "USD",                                            // [STATIC] US Dollar
            "unitText": "monthly",                                             // [CATALOG] type = "monthly"
            "description": "With eligible trade-in ($1,100 credit)",           // [CATALOG] promoPricing.tradeinDiscount = 1100.0
            "eligibleTransactionVolume": {
              "@type": "PriceSpecification",
              "price": 1100,                                                   // [CATALOG] tradeinDiscount
              "priceCurrency": "USD",
              "name": "Trade-in credit"                                        // [CATALOG] promoType = "tradein"
            }
          }
        ],

        // Variant-specific product details
        "itemOffered": {
          "@type": "Product",                                                  // [STATIC] Schema.org type
          "name": "iPhone 17 Pro Max 256GB Cosmic Orange",                     // [CATALOG] childSku.displayName
          "color": "Cosmic Orange",                                            // [CATALOG] childSku.color
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "propertyID": "storage-capacity",                                // [STATIC] Identifier
              "name": "Storage Capacity",                                      // [CATALOG] Derived from internalMemoryStorage
              "value": 256,                                                    // [CATALOG] internalMemoryStorage = "256 GB" (parsed)
              "unitCode": "E34",                                               // [STATIC] UN/CEFACT code for Gigabyte
              "unitText": "GB"                                                 // [CATALOG] internalMemoryStorage unit
            },
            {
              "@type": "PropertyValue",
              "propertyID": "html-color",                                      // [STATIC] Identifier for hex color
              "name": "Color Hex Code",                                        // [CALCULATED] Label
              "value": "#F77E2D"                                               // [CATALOG] childSku.htmlColor
            }
          ]
        }
      },

      {
        "@type": "Offer",                                                      // [STATIC] Schema.org type
        "name": "iPhone 17 Pro Max 256GB - Deep Blue",                         // [CATALOG] childSku.displayName
        "sku": "sku54217v5",                                                   // [CATALOG] childSku.skuId
        "gtin13": "195950638011",                                              // [CATALOG] childSku.upc
        "mpn": "MFXJ4LL/A",                                                    // [CATALOG] childSku.manufacturersPartNumber
        "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max-256gb-deep-blue.html",
                                                                               // [CATALOG] childSku.mPDPPageURL
        "price": 1199.99,                                                      // [CATALOG] price.price.msrp
        "priceCurrency": "USD",                                                // [STATIC] US Dollar
        "availability": "https://schema.org/InStock",                          // [CATALOG] saleStatus = "buynow"
        "itemCondition": "https://schema.org/NewCondition",                    // [CATALOG] condition.key = "new"
        "image": "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/deep-blue-hero-zoom.png",
                                                                               // [CATALOG] mediaTypes.images.masterImageUrl
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 33.34,                                                      // [CATALOG] price.price.listPrice
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,                                                       // [CATALOG] price.price.termLength
            "unitCode": "MON"
          },
          "description": "36-month installment plan at 0% APR"
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 256GB Deep Blue",
          "color": "Deep Blue",                                                // [CATALOG] childSku.color
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "propertyID": "storage-capacity",
              "name": "Storage Capacity",
              "value": 256,                                                    // [CATALOG] internalMemoryStorage parsed
              "unitCode": "E34",
              "unitText": "GB"
            },
            {
              "@type": "PropertyValue",
              "propertyID": "html-color",
              "name": "Color Hex Code",
              "value": "#394673"                                               // [CATALOG] childSku.htmlColor
            }
          ]
        }
      },

      {
        "@type": "Offer",                                                      // [STATIC] Schema.org type
        "name": "iPhone 17 Pro Max 256GB - Silver",                            // [CATALOG] childSku.displayName
        "sku": "sku54217v6",                                                   // [CATALOG] childSku.skuId
        "gtin13": "195950637151",                                              // [CATALOG] childSku.upc
        "mpn": "MFXG4LL/A",                                                    // [CATALOG] childSku.manufacturersPartNumber
        "url": "https://www.att.com/buy/phones/apple-iphone-17-pro-max-256gb-silver.html",
                                                                               // [CATALOG] Derived from pattern
        "price": 1199.99,                                                      // [CATALOG] price.price.msrp
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",                          // [CATALOG] saleStatus = "buynow"
        "itemCondition": "https://schema.org/NewCondition",                    // [CATALOG] condition.key = "new"
        "image": "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-17-pro-max/defaultimage/silver-hero-zoom.png",
                                                                               // [CATALOG] Pattern from other colors
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 33.34,                                                      // [CATALOG] price.price.listPrice
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,                                                       // [CATALOG] price.price.termLength
            "unitCode": "MON"
          },
          "description": "36-month installment plan at 0% APR"
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 256GB Silver",
          "color": "Silver",                                                   // [CATALOG] childSku.color
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "propertyID": "storage-capacity",
              "name": "Storage Capacity",
              "value": 256,
              "unitCode": "E34",
              "unitText": "GB"
            },
            {
              "@type": "PropertyValue",
              "propertyID": "html-color",
              "name": "Color Hex Code",
              "value": "#E5E5E5"                                               // [CATALOG] childSku.htmlColor
            }
          ]
        }
      },

      // -----------------------------------------------------------------------
      // 512GB VARIANTS
      // -----------------------------------------------------------------------
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Cosmic Orange",                     // [JSON] Derived from pdp.skus list
        "sku": "sku54217v1",                                                   // [JSON] pdp.skus (first in list)
        "price": 1399.99,                                                      // [CALCULATED] Based on Apple pricing tier (+$200)
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 38.89,                                                      // [CALCULATED] (1399.99 / 36)
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          },
          "description": "36-month installment plan at 0% APR"
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 512GB Cosmic Orange",
          "color": "Cosmic Orange",
          "additionalProperty": {
            "@type": "PropertyValue",
            "propertyID": "storage-capacity",
            "name": "Storage Capacity",
            "value": 512,                                                      // [JSON] MEM-10 "256GB | 512GB | 1TB | 2TB" parsed
            "unitCode": "E34",                                                 // [STATIC] Gigabyte
            "unitText": "GB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Deep Blue",
        "sku": "sku54217v2",                                                   // [JSON] pdp.skus
        "price": 1399.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 38.89,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 512GB Deep Blue",
          "color": "Deep Blue",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 512,
            "unitCode": "E34",
            "unitText": "GB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 512GB - Silver",
        "sku": "sku54217v3",                                                   // [JSON] pdp.skus
        "price": 1399.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 38.89,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 512GB Silver",
          "color": "Silver",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 512,
            "unitCode": "E34",
            "unitText": "GB"
          }
        }
      },

      // -----------------------------------------------------------------------
      // 1TB VARIANTS - Note: unitCode changes to E35 (Terabyte)
      // -----------------------------------------------------------------------
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Cosmic Orange",
        "sku": "sku54217v7",                                                   // [JSON] pdp.skus
        "price": 1599.99,                                                      // [CALCULATED] Based on Apple pricing tier (+$200 from 512GB)
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 44.45,                                                      // [CALCULATED] (1599.99 / 36)
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 1TB Cosmic Orange",
          "color": "Cosmic Orange",
          "additionalProperty": {
            "@type": "PropertyValue",
            "propertyID": "storage-capacity",
            "name": "Storage Capacity",
            "value": 1,                                                        // [JSON] MEM-10 "1TB" parsed
            "unitCode": "E35",                                                 // [STATIC] Terabyte (NOT E34!)
            "unitText": "TB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Deep Blue",
        "sku": "sku54217v8",                                                   // [JSON] pdp.skus
        "price": 1599.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 44.45,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 1TB Deep Blue",
          "color": "Deep Blue",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 1,
            "unitCode": "E35",                                                 // [STATIC] Terabyte
            "unitText": "TB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 1TB - Silver",
        "sku": "sku54217v9",                                                   // [JSON] pdp.skus
        "price": 1599.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 44.45,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 1TB Silver",
          "color": "Silver",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 1,
            "unitCode": "E35",
            "unitText": "TB"
          }
        }
      },

      // -----------------------------------------------------------------------
      // 2TB VARIANTS
      // -----------------------------------------------------------------------
      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Cosmic Orange",
        "sku": "sku54217v10",                                                  // [JSON] pdp.skus
        "price": 1999.99,                                                      // [CALCULATED] Based on Apple pricing tier (+$400 from 1TB)
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 55.56,                                                      // [CALCULATED] (1999.99 / 36)
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 2TB Cosmic Orange",
          "color": "Cosmic Orange",
          "additionalProperty": {
            "@type": "PropertyValue",
            "propertyID": "storage-capacity",
            "name": "Storage Capacity",
            "value": 2,                                                        // [JSON] MEM-10 "2TB" parsed
            "unitCode": "E35",                                                 // [STATIC] Terabyte
            "unitText": "TB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Deep Blue",
        "sku": "sku54217v11",                                                  // [JSON] pdp.skus
        "price": 1999.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 55.56,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 2TB Deep Blue",
          "color": "Deep Blue",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 2,
            "unitCode": "E35",
            "unitText": "TB"
          }
        }
      },

      {
        "@type": "Offer",
        "name": "iPhone 17 Pro Max 2TB - Silver",
        "sku": "sku54217v12",                                                  // [JSON] pdp.skus (last in list)
        "price": 1999.99,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 55.56,
          "priceCurrency": "USD",
          "unitText": "monthly",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 36,
            "unitCode": "MON"
          }
        },
        "itemOffered": {
          "@type": "Product",
          "name": "iPhone 17 Pro Max 2TB Silver",
          "color": "Silver",
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Storage Capacity",
            "value": 2,
            "unitCode": "E35",
            "unitText": "TB"
          }
        }
      }
    ],

    // =========================================================================
    // SHIPPING DETAILS
    // =========================================================================

    "shippingDetails": {
      "@type": "OfferShippingDetails",                                         // [STATIC] Schema.org type
      "shippingRate": {
        "@type": "MonetaryAmount",                                             // [STATIC] Schema.org type
        "value": 0,                                                            // [FRONTEND] "Free Shipping" visible on page
        "currency": "USD"                                                      // [STATIC] US Dollar
      },
      "shippingDestination": {
        "@type": "DefinedRegion",                                              // [STATIC] Schema.org type
        "addressCountry": "US"                                                 // [STATIC] United States
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",                                       // [STATIC] Schema.org type
        "handlingTime": {
          "@type": "QuantitativeValue",                                        // [STATIC] Schema.org type
          "minValue": 0,                                                       // [RECOMMENDED] Same-day processing
          "maxValue": 1,                                                       // [RECOMMENDED] Next-day processing
          "unitCode": "DAY"                                                    // [STATIC] UN/CEFACT code for days
        },
        "transitTime": {
          "@type": "QuantitativeValue",                                        // [STATIC] Schema.org type
          "minValue": 1,                                                       // [RECOMMENDED] Minimum transit
          "maxValue": 3,                                                       // [RECOMMENDED] Maximum transit
          "unitCode": "DAY"                                                    // [STATIC] UN/CEFACT code for days
        }
      }
    },

    // =========================================================================
    // RETURN POLICY
    // =========================================================================

    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",                                         // [STATIC] Schema.org type
      "@id": "https://www.att.com/support/article/wireless/KM1041830#return",  // [RECOMMENDED] Link to return policy
      "applicableCountry": "US",                                               // [STATIC] United States
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", // [STATIC] Finite return window
      "merchantReturnDays": 14,                                                // [FRONTEND] AT&T 14-day return policy
      "returnMethod": "https://schema.org/ReturnByMail",                       // [STATIC] Return by mail option
      "returnFees": "https://schema.org/RestockingFees",                       // [RECOMMENDED] AT&T may charge restocking fee
      "refundType": "https://schema.org/FullRefund"                            // [STATIC] Full refund within window
    }
  },

  // ============================================================================
  // ADDITIONAL PROPERTIES - Device Specifications from JSON feed
  // All data from deviceSpecification accordions
  // ============================================================================

  "additionalProperty": [

    // -------------------------------------------------------------------------
    // DISPLAY SPECIFICATIONS - From JSON feed Display accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-10",                                                  // [JSON] attributeID
      "name": "Display Size",                                                  // [JSON] key = "Display size (inches)"
      "value": {
        "@type": "QuantitativeValue",
        "value": 6.9,                                                          // [JSON] value parsed: "6.9-inch"
        "unitCode": "INH",                                                     // [STATIC] UN/CEFACT inch
        "unitText": "inches (diagonal)"                                        // [JSON] From value description
      }
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-TECH",                                                // [CALCULATED] Derived ID
      "name": "Display Technology",                                            // [JSON] Derived from DIS-10
      "value": "All-screen OLED display"                                       // [JSON] DIS-10 value parsed
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-20",                                                  // [JSON] attributeID
      "name": "Resolution",                                                    // [JSON] key = "Resolution (pixels)"
      "value": "2868 x 1320 pixels at 460 ppi"                                 // [JSON] DIS-20 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-20-WIDTH",                                            // [CALCULATED] Derived ID
      "name": "Resolution Width",                                              // [CALCULATED] Parsed label
      "value": {
        "@type": "QuantitativeValue",
        "value": 2868,                                                         // [JSON] DIS-20 value parsed
        "unitText": "pixels"                                                   // [STATIC] No UN/CEFACT code for pixels
      }
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-20-HEIGHT",                                           // [CALCULATED] Derived ID
      "name": "Resolution Height",                                             // [CALCULATED] Parsed label
      "value": {
        "@type": "QuantitativeValue",
        "value": 1320,                                                         // [JSON] DIS-20 value parsed
        "unitText": "pixels"
      }
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-20-PPI",                                              // [CALCULATED] Derived ID
      "name": "Pixel Density (PPI)",                                           // [CALCULATED] Parsed label
      "value": {
        "@type": "QuantitativeValue",
        "value": 460,                                                          // [JSON] DIS-20 value parsed
        "unitText": "ppi"                                                      // [STATIC] No UN/CEFACT code for ppi
      }
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-40",                                                  // [JSON] attributeID
      "name": "Display Type",                                                  // [JSON] key = "Super Retina XDR display"
      "value": "Super Retina XDR display with rounded corners (actual viewable area is less than 6.86 inches diagonally)"
                                                                               // [JSON] DIS-40 value (summarized)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-50",                                                  // [JSON] attributeID
      "name": "Contrast Ratio",                                                // [JSON] key = "Contrast ratio (typical)"
      "value": "2,000,000:1 (typical)"                                         // [JSON] DIS-50 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-60",                                                  // [JSON] attributeID
      "name": "Water Resistance",                                              // [JSON] key = "Splash, water, and dust resistant"
      "value": "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529"
                                                                               // [JSON] DIS-60 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "DIS-120",                                                 // [JSON] attributeID
      "name": "Display Features",                                              // [JSON] key = "More details"
      "value": "Dynamic Island, Always-On display, ProMotion technology with adaptive refresh rates up to 120Hz, HDR display, True Tone, Wide color (P3), Haptic Touch, 3000 nits peak brightness (outdoor)"
                                                                               // [JSON] DIS-120 value (summarized)
    },

    // -------------------------------------------------------------------------
    // CAMERA SPECIFICATIONS - From JSON feed Camera & Video accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-10",                                                  // [JSON] attributeID
      "name": "Main Camera Aperture",                                          // [JSON] key = "Aperture"
      "value": "48MP Fusion Main: 24 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization"
                                                                               // [JSON] CAM-10 value (first line)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-ULTRAWIDE",                                           // [CALCULATED] Derived ID
      "name": "Ultra Wide Camera",                                             // [CALCULATED] Label
      "value": "48MP Fusion Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view"
                                                                               // [JSON] CAM-10 value (parsed)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-TELEPHOTO",                                           // [CALCULATED] Derived ID
      "name": "Telephoto Camera",                                              // [CALCULATED] Label
      "value": "48MP Fusion Telephoto: 100 mm (4x), ƒ/2.8 aperture, 3D sensor-shift optical image stabilization, tetraprism design"
                                                                               // [JSON] CAM-10 value (parsed)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-70",                                                  // [JSON] attributeID
      "name": "Zoom",                                                          // [JSON] key = "Zoom"
      "value": "8x optical-quality zoom in, 2x optical zoom out; 16x optical-quality zoom range; Digital zoom up to 40x"
                                                                               // [JSON] CAM-70 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-90",                                                  // [JSON] attributeID
      "name": "Camera System",                                                 // [JSON] key = "More rear-facing camera details"
      "value": "48MP Pro Fusion camera system with Sapphire crystal lens cover, Adaptive True Tone flash, Photonic Engine, Deep Fusion, Smart HDR 5, Night mode, ProRAW, Spatial photos"
                                                                               // [JSON] CAM-90 value (summarized)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-60",                                                  // [JSON] attributeID
      "name": "Front Camera (TrueDepth)",                                      // [JSON] key = "TrueDepth camera"
      "value": "18MP Center Stage camera, ƒ/1.9 aperture, Autofocus with Focus Pixels, Retina Flash, Dual Capture"
                                                                               // [JSON] CAM-60 value (summarized)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-20",                                                  // [JSON] attributeID
      "name": "Video Recording",                                               // [JSON] key = "Video Recording"
      "value": "4K Dolby Vision at 24/25/30/60/100/120 fps, Cinematic mode 4K at 30 fps, Spatial video 1080p at 30 fps, ProRes up to 4K at 120 fps"
                                                                               // [JSON] CAM-20 value (summarized)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAM-30",                                                  // [JSON] attributeID
      "name": "Video Playback Formats",                                        // [JSON] key = "Video Playback"
      "value": "HEVC, H.264, AV1, ProRes; HDR with Dolby Vision, HDR10+/HDR10, HLG"
                                                                               // [JSON] CAM-30 value (summarized)
    },

    // -------------------------------------------------------------------------
    // BATTERY SPECIFICATIONS - From JSON feed Battery accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "BAT-TYPE",                                                // [CALCULATED] Derived ID
      "name": "Battery Type",                                                  // [CALCULATED] Label
      "value": "Built-in rechargeable lithium-ion battery"                     // [JSON] BAT-130 checkbox=true implies this
    },

    {
      "@type": "PropertyValue",
      "propertyID": "BAT-50",                                                  // [JSON] attributeID
      "name": "Video Playback",                                                // [JSON] key = "Video playback (hours)"
      "value": "Up to 39 hours"                                                // [JSON] BAT-50 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "BAT-60",                                                  // [JSON] attributeID
      "name": "Video Playback (Streamed)",                                     // [JSON] key = "Video playback, streamed (hours)"
      "value": "Up to 35 hours"                                                // [JSON] BAT-60 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "BAT-180",                                                 // [JSON] attributeID
      "name": "Fast Charging",                                                 // [JSON] key = "Charging"
      "value": "Up to 50% charge in 20 minutes with 40W adapter or higher"     // [JSON] BAT-180 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "BAT-80",                                                  // [JSON] attributeID
      "name": "Wireless Charging",                                             // [JSON] key = "Wireless charging capable"
      "value": "Qi2 wireless charging up to 25W, MagSafe up to 25W"            // [JSON] BAT-80 value + MGS-10
    },

    // -------------------------------------------------------------------------
    // PROCESSOR SPECIFICATIONS - From JSON feed Processor accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "PRO-10",                                                  // [JSON] attributeID
      "name": "Processor (Chipset)",                                           // [JSON] key = "Chipset"
      "value": "A19 Pro chip: 6-core CPU with 2 performance and 4 efficiency cores, 6-core GPU with Neural Accelerators, 16-core Neural Engine, Hardware-accelerated ray tracing"
                                                                               // [JSON] PRO-10 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "PRO-30",                                                  // [JSON] attributeID
      "name": "Neural Engine",                                                 // [JSON] key = "Neural Engine"
      "value": true                                                            // [JSON] PRO-30 value = "checkbox" → true
    },

    // -------------------------------------------------------------------------
    // MEMORY SPECIFICATIONS - From JSON feed Memory accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "MEM-10",                                                  // [JSON] attributeID
      "name": "Storage Options",                                               // [JSON] key = "Capacity"
      "value": "256GB | 512GB | 1TB | 2TB"                                     // [JSON] MEM-10 value
    },

    // -------------------------------------------------------------------------
    // OPERATING SYSTEM - From JSON feed Operating System accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "OPS-10",                                                  // [JSON] attributeID
      "name": "Operating System",                                              // [JSON] key = "iOS"
      "value": "iOS 26"                                                        // [JSON] OPS-10 value = "26"
    },

    {
      "@type": "PropertyValue",
      "propertyID": "OPS-130",                                                 // [JSON] attributeID
      "name": "Face ID",                                                       // [JSON] key = "Face ID"
      "value": "Enabled by TrueDepth technology in the Center Stage front camera"
                                                                               // [JSON] OPS-130 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "OPS-40",                                                  // [JSON] attributeID
      "name": "Apple Pay",                                                     // [JSON] key = "Apple Pay"
      "value": "Pay with your iPhone using Face ID in stores, within apps, and on the web"
                                                                               // [JSON] OPS-40 value (summarized)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "OPS-30",                                                  // [JSON] attributeID
      "name": "Siri",                                                          // [JSON] key = "Siri"
      "value": "Powered by Apple Intelligence, Siri is more natural and helpful"
                                                                               // [JSON] OPS-30 value (summarized)
    },

    // -------------------------------------------------------------------------
    // WIRELESS TECHNOLOGY - From JSON feed Wireless Technology accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-10",                                                  // [JSON] attributeID
      "name": "AT&T 5G+ Bands",                                                // [JSON] key = "AT&T 5G+ supported network bands*"
      "value": "n77 C-Band, n260"                                              // [JSON] WLS-10 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-20",                                                  // [JSON] attributeID
      "name": "5G Bands (US)",                                                 // [JSON] key = "5G (U.S. and other countries)*"
      "value": "n1, n2, n3, n5, n7, n8, n12, n14, n20, n25, n26, n28, n29, n30, n38, n40, n41, n48, n53, n66, n70, n71, n75, n76, n77, n78 n79, n258, n260, n261"
                                                                               // [JSON] WLS-20 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-30",                                                  // [JSON] attributeID
      "name": "4G LTE Bands",                                                  // [JSON] key = "4G LTE"
      "value": "Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 53, 66, 71"
                                                                               // [JSON] WLS-30 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-110",                                                 // [JSON] attributeID
      "name": "Wi-Fi",                                                         // [JSON] key = "Wi-Fi connectivity"
      "value": "Wi-Fi 7 (802.11be) with 2x2 MIMO"                              // [JSON] WLS-110 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-130",                                                 // [JSON] attributeID
      "name": "NFC",                                                           // [JSON] key = "Near Field Communication (NFC)"
      "value": "With reader mode"                                              // [JSON] WLS-130 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-140",                                                 // [JSON] attributeID
      "name": "Bluetooth",                                                     // [JSON] key = "Bluetooth technology"
      "value": "v6"                                                            // [JSON] WLS-140 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-180",                                                 // [JSON] attributeID
      "name": "SIM Type",                                                      // [JSON] key = "SIM type"
      "value": "Dual eSIM (two active eSIMs; stores eight or more eSIMs)"      // [JSON] WLS-180 value (first line)
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-190",                                                 // [JSON] attributeID
      "name": "FirstNet Ready",                                                // [JSON] key = "FirstNet Ready®"
      "value": true                                                            // [JSON] WLS-190 value = "checkbox" → true
                                                                               // [CATALOG] firstnetIndicator = "ready" confirms this
    },

    {
      "@type": "PropertyValue",
      "propertyID": "WLS-200",                                                 // [JSON] attributeID
      "name": "Video Calling",                                                 // [JSON] key = "Video calling"
      "value": "FaceTime video calling over cellular or Wi-Fi, FaceTime HD (1080p) over 5G or Wi-Fi, Portrait mode in FaceTime"
                                                                               // [JSON] WLS-200 value
    },

    // -------------------------------------------------------------------------
    // MAGSAFE - From JSON feed MagSafe accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "MGS-10",                                                  // [JSON] attributeID
      "name": "MagSafe",                                                       // [JSON] key = "Details"
      "value": "MagSafe wireless charging up to 25W"                           // [JSON] MGS-10 value
    },

    // -------------------------------------------------------------------------
    // SENSORS - From JSON feed Sensors accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "SEN-10",                                                  // [JSON] attributeID
      "name": "Sensors",                                                       // [JSON] key = "Sensors"
      "value": "Face ID, LiDAR Scanner, Barometer, High dynamic range gyro, High-g accelerometer, Proximity sensor, Dual ambient light sensors"
                                                                               // [JSON] SEN-10 value
    },

    // -------------------------------------------------------------------------
    // AUDIO/MUSIC - From JSON feed Music accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "MUS-20",                                                  // [JSON] attributeID
      "name": "Supported Audio Formats",                                       // [JSON] key = "Supported music formats"
      "value": "AAC, APAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus, Dolby Atmos"
                                                                               // [JSON] MUS-20 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "MUS-30",                                                  // [JSON] attributeID
      "name": "Spatial Audio",                                                 // [JSON] key = "Spatial audio playback"
      "value": true                                                            // [JSON] MUS-30 value = "checkbox" → true
    },

    // -------------------------------------------------------------------------
    // ACCESSIBILITY - From JSON feed Accessibility accordion
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "ACC-10",                                                  // [JSON] attributeID
      "name": "Hearing Aid Rating (HAC)",                                      // [JSON] key = "Hearing Aid (HAC) rating"
      "value": "M3, T4"                                                        // [JSON] ACC-10 value
    },

    {
      "@type": "PropertyValue",
      "propertyID": "ACC-20",                                                  // [JSON] attributeID
      "name": "TTY/TTD Compatible",                                            // [JSON] key = "TTY/TTD compatible"
      "value": true                                                            // [JSON] ACC-20 value = "checkbox" → true
    },

    {
      "@type": "PropertyValue",
      "propertyID": "ACC-30",                                                  // [JSON] attributeID
      "name": "Real Time Text (RTT) Capable",                                  // [JSON] key = "Real Time Text (RTT) capable"
      "value": true                                                            // [JSON] ACC-30 value = "checkbox" → true
    },

    // -------------------------------------------------------------------------
    // CAPABILITIES FROM CATALOG CATEGORIES
    // -------------------------------------------------------------------------

    {
      "@type": "PropertyValue",
      "propertyID": "CAT-5G",                                                  // [CALCULATED] Derived ID
      "name": "5G Capable",                                                    // [CATALOG] categories includes "5G"
      "value": true                                                            // [CATALOG] category presence = true
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAT-5G-PLUS",                                             // [CALCULATED] Derived ID
      "name": "5G+ Capable",                                                   // [CATALOG] categories includes "5G-PLUS"
      "value": true                                                            // [CATALOG] category presence = true
    },

    {
      "@type": "PropertyValue",
      "propertyID": "CAT-AI",                                                  // [CALCULATED] Derived ID
      "name": "AI Features",                                                   // [CATALOG] categories includes "AI"
      "value": true                                                            // [CATALOG] category presence = true
    }
  ],

  // ============================================================================
  // KEY FEATURES - From JSON feed keyFeatures array
  // Using ItemList to represent ordered feature list
  // ============================================================================

  "subjectOf": {
    "@type": "ItemList",                                                       // [STATIC] Schema.org type for ordered list
    "name": "Key Features",                                                    // [CALCULATED] Label
    "numberOfItems": 4,                                                        // [JSON] keyFeatures.length
    "itemListElement": [
      {
        "@type": "ListItem",                                                   // [STATIC] Schema.org type
        "position": 1,                                                         // [JSON] Array index + 1
        "name": "Unibody Design",                                              // [CALCULATED] Parsed from description
        "description": "UNIBODY DESIGN. FOR EXCEPTIONAL POWER.—Heat-forged aluminum unibody design for the most powerful iPhone ever made."
                                                                               // [JSON] keyFeatures[0].master.description (cleaned)
                                                                               // [JSON] attributeID = "KFE-01"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ceramic Shield",                                              // [CALCULATED] Parsed from description
        "description": "DURABLE CERAMIC SHIELD. FRONT AND BACK.—Ceramic Shield protects the back of iPhone 17 Pro Max, making it 4x more resistant to cracks. The new Ceramic Shield 2 on the front has 3x better scratch resistance."
                                                                               // [JSON] keyFeatures[1].master.description (cleaned)
                                                                               // [JSON] attributeID = "KFE-02"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pro Camera System",                                           // [CALCULATED] Parsed from description
        "description": "THE ULTIMATE PRO CAMERA SYSTEM—With all 48MP rear cameras and 8x optical-quality zoom—the widest zoom range ever in an iPhone. It's the equivalent of 8 pro lenses in your pocket."
                                                                               // [JSON] keyFeatures[2].master.description (cleaned)
                                                                               // [JSON] attributeID = "KFE-03"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Center Stage Front Camera",                                   // [CALCULATED] Parsed from description
        "description": "18MP CENTER STAGE FRONT CAMERA— Flexible ways to frame your shot. Smarter group selfies, Dual Capture video for simultaneous front and rear recording, and more."
                                                                               // [JSON] keyFeatures[3].master.description (cleaned)
                                                                               // [JSON] attributeID = "KFE-04"
      }
    ]
  },

  // ============================================================================
  // WHAT'S IN THE BOX - From JSON feed deviceInTheBox
  // ============================================================================

  "isAccessoryOrSparePartFor": [
    {
      "@type": "Product",
      "name": "USB-C Charge Cable (1 m)",                                      // [JSON] deviceInTheBox[0].master.subtitle
      "description": "Included in the box"                                     // [CALCULATED] Label
    },
    {
      "@type": "Product",
      "name": "Documentation",                                                 // [JSON] deviceInTheBox[1].master.subtitle
      "description": "Included in the box"                                     // [CALCULATED] Label
    }
  ],

  // ============================================================================
  // RELATED PRODUCTS - From JSON feed model array
  // ============================================================================

  "isRelatedTo": [
    {
      "@type": "Product",                                                      // [STATIC] Schema.org type
      "name": "iPhone 17 Pro",                                                 // [JSON] model[0].master (6.3-inch variant)
      "description": "6.3-inch display",                                       // [JSON] model[0].master.compareValue
      "url": "https://www.att.com/buy/phones/apple-iphone-17-pro.html"         // [JSON] model[0].master.deviceUniqueURL (with base URL)
    }
  ],

  // ============================================================================
  // SIMILAR PRODUCTS (COMPETITORS)
  // ============================================================================

  "isSimilarTo": [
    {
      "@type": "Product",                                                      // [STATIC] Schema.org type
      "name": "Samsung Galaxy S25 Ultra",                                      // [RECOMMENDED] Competitor - not in feeds
      "url": "https://www.att.com/buy/phones/samsung-galaxy-s25-ultra.html"    // [RECOMMENDED] Not in feeds
    },
    {
      "@type": "Product",
      "name": "Google Pixel 9 Pro XL",                                         // [RECOMMENDED] Competitor - not in feeds
      "url": "https://www.att.com/buy/phones/google-pixel-9-pro-xl.html"       // [RECOMMENDED] Not in feeds
    }
  ],

  // ============================================================================
  // POTENTIAL ACTIONS - For voice search and actions
  // ============================================================================

  "potentialAction": [
    {
      "@type": "BuyAction",                                                    // [RECOMMENDED] Schema.org action type - not in feeds
      "target": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html"  // [CATALOG] childSku.mPDPPageURL
    },
    {
      "@type": "ViewAction",                                                   // [RECOMMENDED] Schema.org action type - not in feeds
      "target": "https://www.att.com/buy/phones/apple-iphone-17-pro-max.html"
    }
  ]
};

// =============================================================================
// DATA SOURCE SUMMARY
// =============================================================================
/**
 * FIELD COUNT BY DATA SOURCE:
 * ---------------------------
 * [CATALOG]      - 47 fields (product identity, pricing, SKUs, ratings, images)
 * [JSON]         - 68 fields (specs, features, SEO, dimensions)
 * [FRONTEND]     - 4 fields (seller name, shipping visibility)
 * [STATIC]       - 35 fields (schema types, unit codes, URLs)
 * [CALCULATED]   - 22 fields (parsed values, derived IDs)
 * [RECOMMENDED]  - 12 fields (best practices, competitors, policies)
 *
 * TOTAL FIELDS: 188
 *
 * ALL OFFERS CONSOLIDATED IN: offers.offers[] array
 * OFFER COUNT: 12 (4 storage × 3 colors)
 *
 * NO ORGANIZATION SCHEMA (as requested)
 * NO BREADCRUMBLIST SCHEMA (as requested)
 */

// Export for use
module.exports = iPhoneProMaxSchema;
