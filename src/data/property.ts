/**
 * Central property data for Alpine Court Chalet
 * Single source of truth for all property information
 */

// =============================================================================
// Types
// =============================================================================

interface PropertyLocation {
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface PropertySpecs {
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  squareFootage?: number;
  levels: number;
}

interface Amenity {
  name: string;
  icon?: string;
  schemaName?: string; // For schema.org amenityFeature
}

interface AmenityCategory {
  category: string;
  items: Amenity[];
}

interface BedConfiguration {
  room: string;
  beds: string;
  level: number;
}

interface PropertyImages {
  hero: string;
  ogImage: string;
  gallery: Array<{
    id: string;
    alt: string;
    category?: string;
  }>;
}

// =============================================================================
// Property Data
// =============================================================================

export const property = {
  // Basic Info
  name: "Alpine Court Chalet",
  tagline: "Luxury Ski Chalet in Fernie, BC",
  description:
    "Experience a one-of-a-kind mountain retreat at Alpine Court Chalet—the only property at Fernie Alpine Resort with a full-size indoor squash court. This luxury 5-bedroom chalet offers true ski-in access, floor-to-ceiling windows framing the Lizard Range, outdoor hot tub, and a professionally equipped sports court for squash, pickleball, volleyball, and more. Perfect for families and groups seeking adventure in the Canadian Rockies.",
  shortDescription:
    "Luxury 5-bedroom ski chalet with indoor sports court, hot tub, and ski-in/ski-out access in Fernie, BC.",

  // Identifiers
  identifier: "H182037990", // Provincial registration number
  propertyType: "Chalet" as const,

  // Location
  location: {
    address: {
      street: "TODO: Street Address",
      city: "Fernie",
      region: "British Columbia",
      postalCode: "TODO: Postal Code",
      country: "Canada",
    },
    coordinates: {
      latitude: 49.5042, // TODO: Replace with exact coordinates (5+ decimals)
      longitude: -115.0631, // TODO: Replace with exact coordinates (5+ decimals)
    },
  } satisfies PropertyLocation,

  // Property Specs
  specs: {
    bedrooms: 5,
    bathrooms: 5,
    maxGuests: 12,
    levels: 3,
  } satisfies PropertySpecs,

  // Check-in/Check-out
  checkIn: "16:00",
  checkOut: "11:00",

  // Bed Configuration (from floor plans)
  beds: [
    { room: "Bedroom 1", beds: "Queen", level: 2 },
    { room: "Bedroom 2", beds: "Twin XL or King", level: 2 },
    { room: "Bedroom 3 (Master)", beds: "Twin XL or King", level: 1 },
    { room: "Bedroom 4", beds: "Twin XL or King", level: 0 },
    { room: "Bedroom 5", beds: "Queen", level: 0 },
    { room: "Annex", beds: "Twin/Daybed", level: 0 },
    { room: "Living Room (Level 2)", beds: "Sofabed", level: 2 },
  ] satisfies BedConfiguration[],

  // Images (Cloudinary IDs)
  images: {
    hero: "exterior-front",
    ogImage: "exterior-front",
    gallery: [
      // Exterior
      {
        id: "exterior-winter",
        alt: "Chalet exterior with snow-covered mountains",
        category: "exterior",
      },

      // Main Living Spaces
      {
        id: "living-room-main",
        alt: "Main living room with fireplace and mountain views",
        category: "living",
      },
      {
        id: "kitchen",
        alt: "Main kitchen with large island seating 4",
        category: "kitchen",
      },
      {
        id: "dining-room",
        alt: "Dining area with mountain views",
        category: "dining",
      },
      {
        id: "loft",
        alt: "Loft area for reading and games",
        category: "living",
      },

      // Suite (Separate Living Area)
      {
        id: "suite-living-room",
        alt: "Suite living room with fireplace",
        category: "suite",
      },
      {
        id: "suite-kitchen",
        alt: "Suite kitchen with full amenities",
        category: "suite",
      },

      // Bedrooms (placeholders - to be curated)
      { id: "bedroom-1", alt: "Bedroom 1", category: "bedroom" },
      { id: "bedroom-2", alt: "Bedroom 2", category: "bedroom" },
      { id: "bedroom-3-master", alt: "Master bedroom", category: "bedroom" },
      { id: "bedroom-4", alt: "Bedroom 4", category: "bedroom" },
      { id: "bedroom-5", alt: "Bedroom 5", category: "bedroom" },

      // Recreation
      {
        id: "sports-court-1",
        alt: "Indoor sports court with table tennis setup",
        category: "recreation",
      },
      {
        id: "sports-court-2",
        alt: "Indoor sports court with volleyball net",
        category: "recreation",
      },
      {
        id: "sports-bar",
        alt: "Sports viewing area with bar seating",
        category: "recreation",
      },
      {
        id: "recreation-room",
        alt: "Recreation room with pool table",
        category: "recreation",
      },
      {
        id: "sports-closet",
        alt: "Sports equipment storage with rackets and gear",
        category: "recreation",
      },

      // Hot Tub (placeholder)
      {
        id: "hot-tub",
        alt: "Private hot tub on covered deck",
        category: "outdoor",
      },

      // Views
      {
        id: "view-from-house",
        alt: "Mountain view from the chalet",
        category: "views",
      },
      {
        id: "mountain-view-1",
        alt: "Scenic mountain vista from Fernie Alpine Resort",
        category: "views",
      },
      {
        id: "mountain-view-2",
        alt: "Panoramic Rocky Mountain views",
        category: "views",
      },
      {
        id: "mountain-view-3",
        alt: "Winter mountain landscape",
        category: "views",
      },

      // Outdoor & Amenities
      {
        id: "patio-bbq",
        alt: "Outdoor patio with mountain views",
        category: "outdoor",
      },
      {
        id: "mudroom",
        alt: "Ski boot room and mudroom with built-in storage",
        category: "amenities",
      },
      {
        id: "garage",
        alt: "2-car garage with ski rack storage",
        category: "amenities",
      },
    ],
  } satisfies PropertyImages,

  // Amenities (organized for display and SEO)
  amenities: [
    {
      category: "Recreation & Entertainment",
      items: [
        { name: "Indoor Sports Court", schemaName: "sportsCourt" },
        { name: "Squash Court", schemaName: "squashCourt" },
        { name: "Hot Tub", schemaName: "hotTub" },
        {
          name: "Full Pickleball Court (Summer)",
          schemaName: "pickleballCourt",
        },
        { name: "Sound System", schemaName: "soundSystem" },
        { name: "Pool Table", schemaName: "poolTable" },
        { name: "Table Tennis", schemaName: "tableTennis" },
        { name: "Walleyball/Volleyball", schemaName: "volleyballCourt" },
        { name: "Mini Padel", schemaName: "padelCourt" },
        { name: "Mini Pickleball", schemaName: "pickleballCourt" },
        { name: 'Multiple TVs (50", 60", 77")', schemaName: "television" },
        { name: "Board Games", schemaName: "boardGames" },
        { name: "Books & Reading Material", schemaName: "library" },
      ],
    },
    {
      category: "Skiing & Outdoors",
      items: [
        { name: "Ski-In/Ski-Out Access", schemaName: "skiInSkiOut" },
        { name: "Ski Storage & Boot Room", schemaName: "skiStorage" },
        { name: "Garage (2 Cars)", schemaName: "parking" },
        { name: "Free Parking", schemaName: "freeParking" },
        { name: "BBQ Grill", schemaName: "barbecue" },
        { name: "Patio & Balconies", schemaName: "patio" },
        { name: "Outdoor Dining Area", schemaName: "outdoorDining" },
        { name: "Outdoor Furniture", schemaName: "outdoorFurniture" },
      ],
    },
    {
      category: "Kitchen & Dining",
      items: [
        { name: "Two Full Kitchens", schemaName: "kitchen" },
        { name: "Dishwasher", schemaName: "dishwasher" },
        { name: "Microwave", schemaName: "microwave" },
        { name: "Stove & Oven", schemaName: "stove" },
        { name: "Coffee Maker", schemaName: "coffeeMaker" },
        { name: "Hot Water Kettle", schemaName: "kettle" },
        { name: "Toaster", schemaName: "toaster" },
        { name: "Blender", schemaName: "blender" },
        { name: "Wine Fridge", schemaName: "wineFridge" },
        { name: "Trash Compactor", schemaName: "trashCompactor" },
        { name: "Dining Table (Seats 12)", schemaName: "diningTable" },
        { name: "Coffee Provided", schemaName: "coffee" },
      ],
    },
    {
      category: "Comfort & Convenience",
      items: [
        { name: "WiFi", schemaName: "wifi" },
        { name: "Air Conditioning", schemaName: "airConditioning" },
        { name: "Heating", schemaName: "heating" },
        { name: "Indoor Fireplace", schemaName: "fireplace" },
        { name: "Washer & Dryer", schemaName: "washerDryer" },
        { name: "Bed Linens", schemaName: "bedLinens" },
        { name: "Hair Dryer", schemaName: "hairDryer" },
        { name: "Dedicated Workspace", schemaName: "workspace" },
        { name: "Private Entrance", schemaName: "privateEntrance" },
      ],
    },
    {
      category: "Family Friendly",
      items: [
        { name: "Crib", schemaName: "crib" },
        { name: "Pack 'n Play Travel Crib", schemaName: "travelCrib" },
        { name: "High Chair", schemaName: "highChair" },
        { name: "Children's Books & Toys", schemaName: "childrensToys" },
      ],
    },
    {
      category: "Safety & Security",
      items: [
        { name: "Smoke Alarm", schemaName: "smokeAlarm" },
        { name: "Carbon Monoxide Alarm", schemaName: "carbonMonoxideAlarm" },
        { name: "Fire Extinguisher", schemaName: "fireExtinguisher" },
        { name: "First Aid Kit", schemaName: "firstAidKit" },
        { name: "Exterior Security Cameras", schemaName: "securityCameras" },
        { name: "Noise Decibel Monitors", schemaName: "noiseMonitor" },
      ],
    },
  ] satisfies AmenityCategory[],

  // Highlight amenities for hero/overview sections
  highlightAmenities: [
    "Ski-In/Ski-Out",
    "Indoor Sports Court",
    "Hot Tub",
    "5 Bedrooms",
    "2 Kitchens",
    "Sleeps 12",
  ],

  // Links
  links: {
    airbnb: "https://airbnb.ca/h/alpinecourtchalet",
    vrbo: "TODO: VRBO listing URL (if applicable)",
  },

  // SEO
  seo: {
    title: "Alpine Court Chalet | Luxury Ski Chalet in Fernie, BC",
    description:
      "Book Alpine Court Chalet, a luxury 5-bedroom ski-in/ski-out chalet in Fernie, British Columbia. Features indoor sports court, hot tub, and stunning Rocky Mountain views. Sleeps 12.",
    keywords: [
      "Fernie ski chalet",
      "Fernie vacation rental",
      "luxury ski chalet BC",
      "ski-in ski-out Fernie",
      "Fernie accommodation",
      "Canadian Rockies chalet",
      "Fernie BC rental",
      "mountain chalet British Columbia",
    ],
  },
} as const;

// =============================================================================
// Helper Functions
// =============================================================================

/** Get all amenities as a flat list for schema.org */
export function getAllAmenities(): Amenity[] {
  return property.amenities.flatMap((category) => category.items);
}

/** Get amenities formatted for schema.org */
export function getSchemaAmenities(): Array<{
  "@type": "LocationFeatureSpecification";
  name: string;
  value: boolean;
}> {
  return getAllAmenities().map((amenity) => ({
    "@type": "LocationFeatureSpecification" as const,
    name: amenity.schemaName ?? amenity.name,
    value: true,
  }));
}

/** Get full address as a string */
export function getFullAddress(): string {
  const { street, city, region, postalCode, country } =
    property.location.address;
  return `${street}, ${city}, ${region} ${postalCode}, ${country}`;
}

// Export types for use in components
export type {
  Amenity,
  AmenityCategory,
  BedConfiguration,
  PropertyImages,
  PropertyLocation,
  PropertySpecs,
};
