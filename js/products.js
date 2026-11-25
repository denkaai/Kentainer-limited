/**
 * Kentainers Limited - Product Catalogue Data
 * Categories:
 * - water-storage (Water Storage)
 * - pipes-fittings (Pipes & Fittings)
 * - sanitation-waste (Sanitation & Waste)
 * - agriculture-biogas (Agriculture & Biogas)
 * - material-handling (Material Handling)
 * - furniture-qdesk (Furniture & QDesk)
 *
 * Classic script setting globals window.PRODUCTS, KENTAINERS_PRODUCTS,
 * KENTAINERS_CATEGORIES, KENTAINERS_PAGES.
 * Verified product names & descriptions only; uncertain specs noted in CLAIMS_TO_VERIFY.md.
 */

const KENTAINERS_PRODUCTS = [
  // ================= WATER STORAGE =================
  {
    slug: "kentank-24000l-water-storage-tank",
    name: "KENTANK 24,000L Cylindrical Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    featured: true,
    hasPhoto: true,
    image: "images/web/kentank-24000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-24000l.jpg",
      "images/web/countrywide-delivery.jpg"
    ],
    capacity: "24,000 Litres",
    dimensions: "Cylindrical tank with structural ribs",
    warranty: "Contact us for warranty details",
    application: "Community water harvesting, schools, institutions, farms, and commercial premises.",
    shortDescription: "High-capacity cylindrical KENTANK water storage tank manufactured from rotomoulded polyethylene.",
    features: [
      "Seamless rotomoulded polyethylene construction",
      "Ribbed cylindrical walls designed for structural stability",
      "Top inspection lid with secure seating",
      "Built for ground-level concrete plinths or approved platforms"
    ],
    keywords: [
      "24000", "24000l", "24,000", "24000 litres", "water tank", "cylindrical tank", "kentank", "water storage"
    ]
  },
  {
    slug: "kentank-20000l-water-storage-tank",
    name: "KENTANK 20,000L Cylindrical Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-20000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-20000l.jpg",
      "images/web/countrywide-delivery.jpg"
    ],
    capacity: "20,000 Litres",
    dimensions: "Cylindrical profile with structural ribbing",
    warranty: "Contact us for warranty details",
    application: "Agricultural schemes, schools, institutions, and bulk rainwater harvesting.",
    shortDescription: "20,000L cylindrical KENTANK water tank for bulk rainwater harvesting and institutional water reserves.",
    features: [
      "Durable rotomoulded polyethylene construction",
      "Horizontal ribbing helps maintain tank wall geometry",
      "Top access cover designed for inspection",
      "Flat fitting zones for standard pipe connections"
    ],
    keywords: [
      "20000", "20000l", "20,000", "20000 litres", "water tank", "cylindrical tank", "kentank"
    ]
  },
  {
    slug: "kentank-16000l-water-storage-tank",
    name: "KENTANK 16,000L Cylindrical Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-16000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-16000l.jpg",
      "images/web/countrywide-delivery.jpg"
    ],
    capacity: "16,000 Litres",
    dimensions: "High-volume cylindrical profile",
    warranty: "Contact us for warranty details",
    application: "Institutions, schools, farms, and commercial facilities.",
    shortDescription: "16,000L cylindrical water storage tank manufactured by Kentainers Limited.",
    features: [
      "One-piece rotomoulded polyethylene shell",
      "Smooth internal surface for routine maintenance",
      "Standard inlet, outlet, and overflow connection points",
      "Designed for institutional and agricultural water storage"
    ],
    keywords: [
      "16000", "16000l", "16,000", "16000 litres", "water tank", "cylindrical tank", "kentank"
    ]
  },
  {
    slug: "kentank-8000l-water-storage-tank",
    name: "KENTANK 8,000L Cylindrical Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-8000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-8000l.jpg",
      "images/web/countrywide-delivery.jpg"
    ],
    capacity: "8,000 Litres",
    dimensions: "Cylindrical footprint",
    warranty: "Contact us for warranty details",
    application: "Residential compounds, apartment blocks, clinics, and farms.",
    shortDescription: "8,000L cylindrical KENTANK water storage tank suited to homes and small farms.",
    features: [
      "Balanced footprint for residential compounds",
      "Non-corrosive rotomoulded polyethylene",
      "Moulded lifting lugs for placement onto prepared bases",
      "Compatible with standard plumbing fittings"
    ],
    keywords: [
      "8000", "8000l", "8,000", "8000 litres", "water tank", "cylindrical tank", "kentank"
    ]
  },
  {
    slug: "kentank-6000l-cylindrical-tank",
    name: "KENTANK 6,000L Cylindrical Water Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    featured: true,
    hasPhoto: true,
    image: "images/web/kentank-6000l-cylindrical-tank.png",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-6000l-cylindrical-tank.png",
      "images/web/kentank-6000l-cylindrical-tank-1.png"
    ],
    capacity: "6,000 Litres",
    dimensions: "Standard cylindrical dimensions",
    warranty: "Contact us for warranty details",
    application: "Residential homes, rural homesteads, and commercial premises.",
    shortDescription: "6,000L cylindrical KENTANK water storage tank for household water storage and rainwater harvesting.",
    features: [
      "Seamless rotomoulded polyethylene construction",
      "Inspection lid with secure seating",
      "Flat areas moulded for pipe and drain connections",
      "Suitable for prepared level plinths"
    ],
    keywords: [
      "6000", "6000l", "6,000", "6000 litres", "water tank", "cylindrical tank", "kentank"
    ]
  },
  {
    slug: "kentank-3000l-water-storage-tank",
    name: "KENTANK 3,000L Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-3000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-3000l.jpg",
      "images/web/kentank-2000l.jpg"
    ],
    capacity: "3,000 Litres",
    dimensions: "Cylindrical profile",
    warranty: "Contact us for warranty details",
    application: "Urban residences, townhouses, guest houses, and commercial kitchens.",
    shortDescription: "Compact 3,000L cylindrical water storage tank for domestic water reserves and supply backup.",
    features: [
      "Practical dimensions for urban compounds",
      "Ribbed polyethylene body",
      "Threaded connection pads for plumbing runs",
      "Non-rusting outer and inner surfaces"
    ],
    keywords: [
      "3000", "3000l", "3,000", "3000 litres", "water tank", "domestic tank", "kentank"
    ]
  },
  {
    slug: "kentank-2500l-water-storage-tank",
    name: "KENTANK 2,500L Cylindrical Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-2500l.jpeg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-2500l.jpeg",
      "images/web/kentank-3000l.jpg"
    ],
    capacity: "2,500 Litres",
    dimensions: "Mid-size cylindrical format",
    warranty: "Contact us for warranty details",
    application: "Urban homes, rental units, workshops, and garden irrigation.",
    shortDescription: "Mid-size 2,500L cylindrical KENTANK water storage tank for everyday domestic water storage.",
    features: [
      "One-piece rotomoulded polyethylene body",
      "Moulded horizontal rings for rigidity",
      "Top access inspection cover",
      "Marked connection points for inlet, outlet, and drain"
    ],
    keywords: [
      "2500", "2500l", "2,500", "2500 litres", "water tank", "cylindrical tank", "kentank"
    ]
  },
  {
    slug: "kentank-2000l-water-storage-tank",
    name: "KENTANK 2,000L Water Storage Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-2000l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentank-2000l.jpg",
      "images/web/kentank-cylindrical-tank.webp"
    ],
    capacity: "2,000 Litres",
    dimensions: "Compact cylindrical design",
    warranty: "Contact us for warranty details",
    application: "Residential homes, apartments, small businesses, and utility bays.",
    shortDescription: "2,000L domestic KENTANK water storage tank suited for narrower residential spaces.",
    features: [
      "Fits through standard residential access gates",
      "Seamless rotomoulded polyethylene body",
      "Will not rust or corrode",
      "Convenient top access lid"
    ],
    keywords: [
      "2000", "2000l", "2,000", "2000 litres", "water tank", "kentank"
    ]
  },
  {
    slug: "kentank-1000l-cylindrical-tank",
    name: "KENTANK 1,000L Cylindrical Water Tank",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentank-cylindrical-tank.webp",
    thumbBg: "#ffffff",
    gallery: [
      "images/web/kentank-cylindrical-tank.webp",
      "images/web/kentank-1.webp",
      "images/web/kentank-cylindrical-tank-1.webp"
    ],
    capacity: "1,000 Litres",
    dimensions: "Compact cylindrical design",
    warranty: "Contact us for warranty details",
    application: "Elevated tank stands, balconies, compact households, and small businesses.",
    shortDescription: "Compact 1,000L cylindrical tank suited for elevated tank stands and urban residential compounds.",
    features: [
      "Lightweight structure for positioning on elevated stands",
      "Rotomoulded polyethylene body",
      "Inspection cover for maintenance",
      "Integrates with domestic gravity plumbing systems"
    ],
    keywords: [
      "1000", "1000l", "1,000", "1000 litres", "water tank", "overhead tank", "kentank"
    ]
  },
  {
    slug: "kentank-loftank",
    name: "KENTANK Loftank (Rectangular Ceiling Tank)",
    category: "Water Storage",
    categorySlug: "water-storage",
    hasPhoto: true,
    image: "images/web/kentainers-loftank.jpg",
    thumbBg: "#f5f5f5",
    gallery: [
      "images/web/kentainers-loftank.jpg"
    ],
    capacity: "Contact us for available sizes",
    dimensions: "Low-profile rectangular design for ceiling joists",
    warranty: "Contact us for warranty details",
    application: "Ceiling voids, attics, under-stair spaces, and indoor gravity storage.",
    shortDescription: "Low-profile rectangular polyethylene ceiling tank shaped to fit into attic rafters and roof spaces.",
    features: [
      "Rectangular geometry designed to fit across roof timbers",
      "Top inspection cover for routine cleaning",
      "Flat surfaces for ball-valve and overflow fittings",
      "Rotomoulded polyethylene construction"
    ],
    keywords: [
      "loftank", "loft tank", "ceiling tank", "attic tank", "rectangular tank", "kentank"
    ]
  },

  // ================= PIPES & FITTINGS =================
  {
    slug: "kentank-hdpe-water-pipes",
    name: "KENTANK HDPE Pressure Pipes (25mm, 32mm, 50mm | PN6 & PN8)",
    category: "Pipes & Fittings",
    categorySlug: "pipes-fittings",
    hasPhoto: true,
    image: "images/web/32mm-hdpe-pn6-pn8.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/32mm-hdpe-pn6-pn8.jpg",
      "images/web/25mm-hdpe-pn6-pn8.jpg",
      "images/web/50mm-hdpe-pn6-pn8.jpg"
    ],
    capacity: "25mm, 32mm, 50mm (PN6 & PN8)",
    dimensions: "Available in continuous coils",
    warranty: "Contact us for warranty details",
    application: "Borehole delivery lines, agricultural drip irrigation, and water reticulation.",
    shortDescription: "High-Density Polyethylene (HDPE) pressure pipes in 25mm, 32mm, and 50mm diameters (PN6 and PN8).",
    features: [
      "High-density polyethylene extrusion",
      "Available in 25mm, 32mm, and 50mm diameters",
      "Offered in PN6 and PN8 pressure classes",
      "Compatible with standard compression and fusion fittings"
    ],
    keywords: [
      "hdpe", "hdpe pipe", "hdpe pipes", "irrigation pipe", "borehole pipe",
      "25mm", "32mm", "50mm", "pn6", "pn8", "pipes", "fittings"
    ]
  },
  {
    slug: "kentank-pvc-conduit-pipes",
    name: "KENTANK PVC Pipes (20mm, 25mm, 32mm)",
    category: "Pipes & Fittings",
    categorySlug: "pipes-fittings",
    hasPhoto: true,
    image: "images/web/32mm-pvc.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/32mm-pvc.jpg",
      "images/web/25mm-pvc.jpg",
      "images/web/20mm-pvc.jpg"
    ],
    capacity: "20mm, 25mm, 32mm diameters",
    dimensions: "Standard straight lengths",
    warranty: "Contact us for warranty details",
    application: "Electrical wiring conduit and plumbing conduit runs.",
    shortDescription: "Rigid PVC pipes in 20mm, 25mm, and 32mm diameters for conduit and building installations.",
    features: [
      "Available in 20mm, 25mm, and 32mm diameters",
      "Smooth internal bore for cable pulling and flow",
      "Corrosion and moisture resistant",
      "Supplied in standard pipe lengths"
    ],
    keywords: [
      "pvc", "pvc pipe", "pvc conduit", "conduit pipe",
      "20mm", "25mm", "32mm", "pipe", "pipes", "fittings"
    ]
  },

  // ================= SANITATION & WASTE =================
  {
    slug: "kentank-mobilet-vip-toilet",
    name: "Mobilet White Portable Toilet",
    category: "Sanitation & Waste",
    categorySlug: "sanitation-waste",
    featured: true,
    hasPhoto: true,
    image: "images/web/mobilet-white-open.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/mobilet-white-open.jpg",
      "images/web/mobilet-white.jpg"
    ],
    capacity: "Contact us for cabin configurations",
    dimensions: "Portable single-cubicle cabin",
    warranty: "Contact us for warranty details",
    application: "Construction sites, events, schools, farms, and off-grid sanitation.",
    shortDescription: "Rotomoulded portable Mobilet toilet cabin with full door access and integrated vent stack.",
    features: [
      "Rotomoulded polyethylene portable cabin",
      "Hinged full-height access door with ventilation louvres",
      "Integrated roof vent stack",
      "Easy to wash down and reposition across sites"
    ],
    keywords: [
      "mobilet", "mobilet white", "portable toilet", "vip toilet", "latrine", "sanitation", "toilet"
    ]
  },
  {
    slug: "septank-600l",
    name: "Septic Tank 600L",
    category: "Sanitation & Waste",
    categorySlug: "sanitation-waste",
    featured: true,
    hasPhoto: true,
    image: "images/web/septank-600l.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/septank-600l.jpg"
    ],
    capacity: "600L",
    dimensions: "Horizontal ribbed tank on integrated cradle feet",
    warranty: "Contact us for warranty details",
    application: "Residential compounds, cottages, and off-grid wastewater treatment.",
    shortDescription: "Horizontal 600L polyethylene Septank wastewater unit with ribbed body and inspection hatch.",
    features: [
      "Horizontal ribbed rotomoulded polyethylene body",
      "Integrated cradle base supports",
      "Top inspection lid and inlet/outlet ports",
      "Non-corrosive polyethylene construction"
    ],
    keywords: [
      "septank", "septic tank", "septic", "600l", "septank 600l", "wastewater", "sanitation"
    ]
  },
  {
    slug: "septank-nrm",
    name: "Septank NRM",
    category: "Sanitation & Waste",
    categorySlug: "sanitation-waste",
    hasPhoto: true,
    image: "images/web/septank-nrm.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/septank-nrm.jpg"
    ],
    capacity: "Contact us for capacity options",
    dimensions: "Vertical domed cylindrical profile",
    warranty: "Contact us for warranty details",
    application: "Homes, commercial premises, and sites without municipal sewer connections.",
    shortDescription: "Vertical domed polyethylene Septank NRM unit with rising access neck and ribbed base.",
    features: [
      "Vertical cylindrical ribbed polyethylene shell",
      "Extended access neck for maintenance",
      "Top vent/pipe fitting ports",
      "Seamless rotomoulded construction"
    ],
    keywords: [
      "septank", "septank nrm", "nrm", "septic tank", "septic", "wastewater", "sanitation"
    ]
  },
  {
    slug: "pedal-handwash-station",
    name: "Pedal Handwash Station",
    category: "Sanitation & Waste",
    categorySlug: "sanitation-waste",
    featured: true,
    hasPhoto: true,
    image: "images/web/pedal-handwash-b.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/pedal-handwash-b.jpg"
    ],
    capacity: "Contact us for reservoir sizes",
    dimensions: "Elevated frame stand with tank, tap, basin, and bucket",
    warranty: "Contact us for warranty details",
    application: "Schools, clinics, offices, commercial entrances, and public spaces.",
    shortDescription: "Hands-free foot-pedal KENTANK handwashing station with steel frame, soap holder, basin, and wastewater bucket.",
    features: [
      "Mechanical foot-pedal linkage for hands-free water flow",
      "Top KENTANK water reservoir with screw lid",
      "Integrated steel stand with catch basin and lower collection bucket",
      "Soap dispenser holder mounted beside basin"
    ],
    keywords: [
      "pedal handwash", "handwash", "hand washing", "foot pedal", "hygiene", "sanitation"
    ]
  },
  {
    slug: "kentainers-kpot-planter",
    name: "Kentainers K-Pot",
    category: "Sanitation & Waste",
    categorySlug: "sanitation-waste",
    hasPhoto: true,
    image: "images/web/kentainers-kpot-white.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentainers-kpot-white.jpg"
    ],
    capacity: "Contact us for sizes",
    dimensions: "Ribbed spherical container with neck collar",
    warranty: "Contact us for warranty details",
    application: "Residential compounds, commercial properties, hotels, and outdoor grounds.",
    shortDescription: "White rotomoulded polyethylene K-Pot container suited for residential and commercial settings.",
    features: [
      "Rotomoulded polyethylene body",
      "Ribbed exterior profile",
      "Washable smooth surfaces",
      "Resistant to moisture and rust"
    ],
    keywords: [
      "kpot", "k-pot", "planter", "container", "sanitation", "kentainers"
    ]
  },

  // ================= AGRICULTURE & BIOGAS =================
  {
    slug: "grain-silo-with-lid",
    name: "Grain Silo With Lid",
    category: "Agriculture & Biogas",
    categorySlug: "agriculture-biogas",
    featured: true,
    hasPhoto: true,
    image: "images/web/gransilo-w-lid.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/gransilo-w-lid.jpg"
    ],
    capacity: "Contact us for silo sizes",
    dimensions: "Vertical silo with clamp ring, lid, and lower discharge port",
    warranty: "Contact us for warranty details",
    application: "Cereal farmers, grain cooperatives, and post-harvest crop storage.",
    shortDescription: "Blue GrainSilo polyethylene storage vessel supplied with sealing lid, metal clamp ring, and bottom discharge outlet.",
    features: [
      "Includes moulded top lid and locking clamp ring",
      "Bottom grain discharge outlet",
      "Seamless rotomoulded polyethylene body",
      "Moisture and rust resistant"
    ],
    keywords: [
      "silo", "grain silo", "gransilo", "grain storage", "cereal storage", "maize", "agriculture"
    ]
  },
  {
    slug: "cattle-trough-with-stand",
    name: "Cattle Trough With Stand",
    category: "Agriculture & Biogas",
    categorySlug: "agriculture-biogas",
    hasPhoto: true,
    image: "images/web/cattle-trough-with-stand.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/cattle-trough-with-stand.jpg"
    ],
    capacity: "Contact us for dimensions & capacity",
    dimensions: "Polyethylene trough mounted in rigid frame stand",
    warranty: "Contact us for warranty details",
    application: "Dairy units, zero-grazing sheds, ranches, and livestock watering.",
    shortDescription: "Black rotomoulded polyethylene cattle trough supported on a four-legged metal stand.",
    features: [
      "Non-rusting polyethylene trough basin",
      "Raised metal frame stand keeps trough off mud and soil",
      "Rounded top rim with no sharp metal edges",
      "Easy to rinse and clean"
    ],
    keywords: [
      "cattle trough", "trough", "livestock trough", "water trough", "feeding trough", "agriculture"
    ]
  },
  {
    slug: "fish-tank",
    name: "Fish Tank",
    category: "Agriculture & Biogas",
    categorySlug: "agriculture-biogas",
    hasPhoto: true,
    image: "images/web/fish-tank.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/fish-tank.jpg"
    ],
    capacity: "Contact us for tank sizes",
    dimensions: "Wide ribbed open-top circular tub",
    warranty: "Contact us for warranty details",
    application: "Aquaculture, fish hatcheries, fingerling rearing, and hydroponics.",
    shortDescription: "Wide-diameter blue ribbed polyethylene aquaculture tank with flared rim.",
    features: [
      "Open-top flared rim design",
      "Ribbed circular wall structure",
      "Non-corrosive polyethylene body",
      "Smooth interior surface"
    ],
    keywords: [
      "fish tank", "fish tub", "aquaculture", "tilapia", "catfish", "agriculture"
    ]
  },
  {
    slug: "blueflame-bioslurrigas-unit",
    name: "BlueFlame BioSlurriGas Digester (Tall)",
    category: "Agriculture & Biogas",
    categorySlug: "agriculture-biogas",
    hasPhoto: true,
    image: "images/web/blue-flame-tall.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/blue-flame-tall.jpg"
    ],
    capacity: "Contact us for digester specifications",
    dimensions: "Tall vertical reactor vessel with inlet funnel and gas outlet",
    warranty: "Contact us for warranty details",
    application: "Farms, rural homesteads, and institutions generating biogas and bio-slurry.",
    shortDescription: "Tall vertical black BlueFlame BioSlurriGas polyethylene unit with feed inlet pipe, overflow spout, and top gas valve.",
    features: [
      "Vertical two-section rotomoulded vessel",
      "Side funnel inlet pipe and discharge outlet",
      "Top gas outlet assembly",
      "Manufactured for biogas and bio-slurry applications"
    ],
    keywords: [
      "blue flame", "blueflame", "bioslurrigas", "biogas", "bio-digester", "biodigester", "agriculture"
    ]
  },

  // ================= MATERIAL HANDLING =================
  {
    slug: "kentainers-pallet-12",
    name: "Kentainers Pallet 12",
    category: "Material Handling",
    categorySlug: "material-handling",
    featured: true,
    hasPhoto: true,
    image: "images/web/kentainers-pallet-12.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentainers-pallet-12.jpg",
      "images/web/kentainers-pallet-12-a.jpg"
    ],
    capacity: "Contact us for load specifications",
    dimensions: "Four-way entry flat-deck pallet",
    warranty: "Contact us for warranty details",
    application: "Warehouses, factories, cold rooms, and logistics stacking.",
    shortDescription: "Heavy-duty grey rotomoulded polyethylene warehouse pallet with 4-way forklift entry and perimeter retaining lips.",
    features: [
      "Four-way forklift and pallet-jack entry",
      "Smooth flat top deck with perimeter edge lips",
      "Non-porous polyethylene is splinter-free and washable",
      "Won't rot or absorb moisture"
    ],
    keywords: [
      "pallet", "pallet 12", "poly pallet", "plastic pallet", "warehouse pallet", "material handling"
    ]
  },
  {
    slug: "kentainers-ns9-tray",
    name: "NS9 Tray",
    category: "Material Handling",
    categorySlug: "material-handling",
    hasPhoto: true,
    image: "images/web/ns9-tray-inside.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/ns9-tray-inside.jpg"
    ],
    capacity: "Contact us for dimensions",
    dimensions: "Rectangular flanged handling tray",
    warranty: "Contact us for warranty details",
    application: "Factories, agriculture produce sorting, workshops, and warehouse picking.",
    shortDescription: "Blue rectangular moulded polyethylene NS9 tray with wide rim flange and recessed corner nesting shoulders.",
    features: [
      "Moulded rectangular polyethylene tray",
      "Wide top rim for manual carrying",
      "Smooth non-absorbent interior",
      "Easy to wash and sanitize"
    ],
    keywords: [
      "ns9", "ns9 tray", "tray", "tote", "crate", "material handling"
    ]
  },
  {
    slug: "kentank-industrial-blue-drum",
    name: "KENTANK Industrial Blue Drum (210L)",
    category: "Material Handling",
    categorySlug: "material-handling",
    hasPhoto: true,
    image: "images/web/kentainer-drum-blue.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/kentainer-drum-blue.jpg"
    ],
    capacity: "210 Litres",
    dimensions: "Cylindrical drum with top lid and side grip handles",
    warranty: "Contact us for warranty details",
    application: "Industrial liquids, packaging, storage, and material handling.",
    shortDescription: "Blue rotomoulded polyethylene industrial drum with wide screw top lid and moulded side handle recesses.",
    features: [
      "Rotomoulded polyethylene construction",
      "Wide top lid for filling and cleaning",
      "Integrated side handling recesses",
      "Non-corrosive plastic drum body"
    ],
    keywords: [
      "drum", "blue drum", "210l drum", "industrial drum", "plastic drum", "material handling"
    ]
  },

  // ================= FURNITURE & QDESK =================
  {
    slug: "kentank-qdesk-school-furniture",
    name: "KENTANK QDesk School Desk",
    category: "Furniture & QDesk",
    categorySlug: "furniture-qdesk",
    featured: true,
    hasPhoto: true,
    image: "images/web/qdesk.jpg",
    thumbBg: "#f4f4f4",
    gallery: [
      "images/web/qdesk.jpg"
    ],
    capacity: "Single Student Unit with Tablet Arm",
    dimensions: "One-piece seat and integrated tablet arm",
    warranty: "Contact us for warranty details",
    application: "Primary schools, academies, classrooms, and training centres.",
    shortDescription: "Moulded blue polyethylene single-student school desk and chair unit with under-seat storage bay.",
    features: [
      "One-piece moulded polyethylene seat and writing surface",
      "Open under-seat book storage recess",
      "Rounded edges for classroom safety",
      "Termite-proof, splinter-proof, and easy to wipe clean"
    ],
    keywords: [
      "qdesk", "q-desk", "school desk", "student desk", "classroom", "furniture"
    ]
  },

  // ================= PLACEHOLDER PRODUCTS (PHOTO COMING SOON) =================
  {
    slug: "kentank-nestable-tote-boxes",
    name: "Kentainers Storage & Tote Crates",
    category: "Material Handling",
    categorySlug: "material-handling",
    hasPhoto: false,
    image: "images/web/kentank-nestable-tote-boxes.jpg",
    thumbBg: "#f4f4f4",
    gallery: [],
    capacity: "Contact us for crate sizes",
    dimensions: "Rectangular storage crate format",
    warranty: "Contact us for warranty details",
    application: "Retail supply chains, produce harvesting, and warehouse logistics.",
    shortDescription: "Stackable and nestable polyethylene storage crates for handling and transport.",
    features: [
      "Lightweight polyethylene crate format",
      "Washable smooth internal walls",
      "Suitable for produce and components handling"
    ],
    keywords: [
      "crates", "tote boxes", "storage crates", "plastic crates", "material handling"
    ]
  },
  {
    slug: "kentank-outdoor-poly-bench",
    name: "KENTANK Polyethylene Outdoor Bench",
    category: "Furniture & QDesk",
    categorySlug: "furniture-qdesk",
    hasPhoto: false,
    image: "images/web/kentank-outdoor-poly-bench.jpg",
    thumbBg: "#f4f4f4",
    gallery: [],
    capacity: "Contact us for bench dimensions",
    dimensions: "Outdoor bench seating format",
    warranty: "Contact us for warranty details",
    application: "School grounds, waiting bays, parks, and verandas.",
    shortDescription: "Moulded polyethylene outdoor seating bench designed for weather resistance and easy cleaning.",
    features: [
      "Polyethylene construction will not rot or rust",
      "Simple to wipe down and maintain",
      "Suitable for indoor and outdoor waiting areas"
    ],
    keywords: [
      "bench", "park bench", "outdoor bench", "seating", "furniture"
    ]
  }
];

// Expose under both window.PRODUCTS (per Technical Rules) and legacy aliases
window.PRODUCTS = KENTAINERS_PRODUCTS;
window.KENTAINERS_PRODUCTS = KENTAINERS_PRODUCTS;

// Category metadata definitions (slugs & live tile images)
const KENTAINERS_CATEGORIES = [
  {
    slug: "water-storage",
    name: "Water Storage",
    desc: "Cylindrical & Loftank Water Storage Tanks",
    tileImage: "images/web/kentank-24000l.jpg",
    tileBg: "#f4f4f4"
  },
  {
    slug: "pipes-fittings",
    name: "Pipes & Fittings",
    desc: "HDPE & PVC Pressure and Conduit Pipes",
    tileImage: "images/web/32mm-hdpe-pn6-pn8.jpg",
    tileBg: "#f4f4f4"
  },
  {
    slug: "sanitation-waste",
    name: "Sanitation & Waste",
    desc: "Mobilet, Septank, Handwash & K-Pot",
    tileImage: "images/web/mobilet-white-open.jpg",
    tileBg: "#f4f4f4"
  },
  {
    slug: "agriculture-biogas",
    name: "Agriculture & Biogas",
    desc: "Grain Silos, Cattle Troughs, Fish Tanks & Bio-Digesters",
    tileImage: "images/web/gransilo-w-lid.jpg",
    tileBg: "#f4f4f4"
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    desc: "Pallets, Trays, Drums & Crates",
    tileImage: "images/web/kentainers-pallet-12.jpg",
    tileBg: "#f4f4f4"
  },
  {
    slug: "furniture-qdesk",
    name: "Furniture & QDesk",
    desc: "QDesk Student Furniture & Outdoor Benches",
    tileImage: "images/web/qdesk.jpg",
    tileBg: "#f4f4f4"
  }
];
window.KENTAINERS_CATEGORIES = KENTAINERS_CATEGORIES;

// Key searchable website pages for live search indexing
const KENTAINERS_PAGES = [
  {
    title: "About Us",
    url: "about-us.html",
    category: "Company",
    description: "Learn about Aquasantec / Kentainers Limited, our heritage since 1989, categories, and credentials.",
    keywords: ["about", "company", "aquasantec", "heritage", "mission", "vision", "certifications"]
  },
  {
    title: "Plumber's Hub",
    url: "plumbers-hub.html",
    category: "Technical Guide",
    description: "Tank base preparation tips, piping guidelines, and water weight reference table for installers.",
    keywords: ["plumber", "plumbers", "installation", "plinth", "base", "piping", "pipes", "fittings", "faq"]
  },
  {
    title: "Find a Distributor",
    url: "find-a-distributor.html",
    category: "Stockists",
    description: "Connect with authorized KENTANK stockists or apply to become an authorized distributor.",
    keywords: ["distributor", "stockist", "hardware", "dealer", "where to buy", "locations"]
  },
  {
    title: "Request a Quote",
    url: "request-a-quote.html",
    category: "Quote Basket",
    description: "Review your Quote Basket items and submit a WhatsApp quotation request.",
    keywords: ["quote", "price", "pricing", "quotation", "basket", "order", "whatsapp"]
  },
  {
    title: "Contact Us",
    url: "contact-us.html",
    category: "Support",
    description: "Regional factory addresses and direct customer care numbers in Nairobi, Mombasa, and Kisumu.",
    keywords: ["contact", "phone", "email", "address", "call", "help", "factories"]
  },
  {
    title: "News & Media",
    url: "news-media.html",
    category: "Updates",
    description: "Latest updates, community water initiatives, and product stories from Kentainers Limited.",
    keywords: ["news", "media", "articles", "press", "stories"]
  }
];
window.KENTAINERS_PAGES = KENTAINERS_PAGES;

function getProductBySlug(slug) {
  if (!slug) return null;
  const clean = slug.trim().toLowerCase();
  return KENTAINERS_PRODUCTS.find(p => p.slug.toLowerCase() === clean) || null;
}

function getProductsByCategorySlug(catSlug) {
  if (!catSlug || catSlug === "all") {
    return [...KENTAINERS_PRODUCTS].sort((a, b) => (b.hasPhoto ? 1 : 0) - (a.hasPhoto ? 1 : 0));
  }
  const clean = catSlug.trim().toLowerCase();
  return KENTAINERS_PRODUCTS
    .filter(p => p.categorySlug.toLowerCase() === clean)
    .sort((a, b) => (b.hasPhoto ? 1 : 0) - (a.hasPhoto ? 1 : 0));
}

function getFeaturedProducts(limit = 8) {
  const withPhoto = KENTAINERS_PRODUCTS.filter(p => p.hasPhoto === true);
  const prioritized = withPhoto.filter(p => p.featured === true);
  const rest = withPhoto.filter(p => p.featured !== true);
  return [...prioritized, ...rest].slice(0, limit);
}

function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return getFeaturedProducts(limit);
  return KENTAINERS_PRODUCTS
    .filter(p => p.slug !== slug && p.categorySlug === current.categorySlug)
    .sort((a, b) => (b.hasPhoto ? 1 : 0) - (a.hasPhoto ? 1 : 0))
    .slice(0, limit);
}
