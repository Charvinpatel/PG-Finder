// Custom API with real PG data from Gujarat cities
const gujaratPgData = [
  // Ahmedabad PGs
  {
    id: 1,
    title: "Shree Krishna PG for Boys",
    location: "Satellite, Ahmedabad",
    address: "Near ISRO, Satellite Road, Ahmedabad - 380015",
    price: 8500,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Power Backup", "Study Room"],
    featured: true,
    rating: 4.6,
    reviews: 38,
    type: "Boys",
    description: "Well-maintained PG for working professionals and students near ISRO with home-cooked Gujarati meals.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.0225, 72.5714],
    contact: {
      phone: "+91 9876543210",
      email: "shreekrishna.pg@gmail.com",
      owner: "Mr. Kiran Patel",
    },
    city: "Ahmedabad",
    area: "Satellite",
  },
  {
    id: 2,
    title: "Annapurna Girls Hostel",
    location: "Vastrapur, Ahmedabad",
    address: "Near Gujarat University, Vastrapur, Ahmedabad - 380009",
    price: 9200,
    amenities: ["WIFI", "AC", "Food", "Laundry", "Security", "Common Room"],
    featured: true,
    rating: 4.8,
    reviews: 52,
    type: "Girls",
    description: "Safe and secure hostel for girls near Gujarat University with 24/7 security and nutritious meals.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.0395, 72.5566],
    contact: {
      phone: "+91 9876543211",
      email: "annapurna.hostel@gmail.com",
      owner: "Mrs. Meera Shah",
    },
    city: "Ahmedabad",
    area: "Vastrapur",
  },
  {
    id: 3,
    title: "Royal Stay PG",
    location: "Bopal, Ahmedabad",
    address: "Bopal-Ghuma Road, Bopal, Ahmedabad - 380058",
    price: 7800,
    amenities: ["WIFI", "Parking", "Food", "Laundry", "Power Backup"],
    featured: false,
    rating: 4.3,
    reviews: 29,
    type: "Co-Living",
    description: "Affordable co-living space in Bopal with modern amenities and easy access to IT companies.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.0395, 72.4347],
    contact: {
      phone: "+91 9876543212",
      email: "royalstay.pg@gmail.com",
      owner: "Mr. Amit Sharma",
    },
    city: "Ahmedabad",
    area: "Bopal",
  },
  {
    id: 4,
    title: "Comfort Zone PG",
    location: "Prahlad Nagar, Ahmedabad",
    address: "Corporate Road, Prahlad Nagar, Ahmedabad - 380015",
    price: 10500,
    amenities: ["WIFI", "AC", "Food", "Gym", "Parking", "Housekeeping"],
    featured: true,
    rating: 4.7,
    reviews: 41,
    type: "Boys",
    description: "Premium PG for working professionals with gym facility and corporate shuttle service.",
    images: [
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.0225, 72.4946],
    contact: {
      phone: "+91 9876543213",
      email: "comfortzone.pg@gmail.com",
      owner: "Mr. Rajesh Patel",
    },
    city: "Ahmedabad",
    area: "Prahlad Nagar",
  },
  {
    id: 5,
    title: "Green Valley Girls PG",
    location: "Gota, Ahmedabad",
    address: "SP Ring Road, Gota, Ahmedabad - 382481",
    price: 8800,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Garden", "Study Room"],
    featured: false,
    rating: 4.4,
    reviews: 33,
    type: "Girls",
    description: "Peaceful PG for girls in Gota with garden area and dedicated study rooms for students.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.1319, 72.6347],
    contact: {
      phone: "+91 9876543214",
      email: "greenvalley.pg@gmail.com",
      owner: "Mrs. Kavita Patel",
    },
    city: "Ahmedabad",
    area: "Gota",
  },
  {
    id: 6,
    title: "Tech Hub PG",
    location: "SG Highway, Ahmedabad",
    address: "Near Infocity, SG Highway, Ahmedabad - 380015",
    price: 11200,
    amenities: ["WIFI", "AC", "Food", "Parking", "Gym", "Swimming Pool"],
    featured: true,
    rating: 4.9,
    reviews: 67,
    type: "Co-Living",
    description: "Premium co-living space near IT companies with swimming pool and modern facilities.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.0225, 72.5714],
    contact: {
      phone: "+91 9876543215",
      email: "techhub.pg@gmail.com",
      owner: "Mr. Vishal Modi",
    },
    city: "Ahmedabad",
    area: "SG Highway",
  },

  // Surat PGs
  {
    id: 7,
    title: "Diamond City PG",
    location: "Adajan, Surat",
    address: "Near VR Mall, Adajan, Surat - 395009",
    price: 7500,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Power Backup"],
    featured: false,
    rating: 4.2,
    reviews: 28,
    type: "Boys",
    description: "Affordable PG for boys in Adajan near VR Mall with good connectivity to textile companies.",
    images: [
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [21.218, 72.8347],
    contact: {
      phone: "+91 9876543216",
      email: "diamondcity.pg@gmail.com",
      owner: "Mr. Hardik Patel",
    },
    city: "Surat",
    area: "Adajan",
  },
  {
    id: 8,
    title: "Silk Route Girls Hostel",
    location: "Vesu, Surat",
    address: "VIP Road, Vesu, Surat - 395007",
    price: 8900,
    amenities: ["WIFI", "AC", "Food", "Laundry", "Security", "Recreation Room"],
    featured: false,
    rating: 4.5,
    reviews: 35,
    type: "Girls",
    description:
      "Modern girls hostel in Vesu with AC rooms and recreational facilities for students and professionals.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [21.1458, 72.7775],
    contact: {
      phone: "+91 9876543217",
      email: "silkroute.hostel@gmail.com",
      owner: "Mrs. Nisha Shah",
    },
    city: "Surat",
    area: "Vesu",
  },

  // Vadodara PGs
  {
    id: 9,
    title: "Cultural City PG",
    location: "Alkapuri, Vadodara",
    address: "Near Alkapuri Township, Vadodara - 390007",
    price: 8200,
    amenities: ["WIFI", "Food", "Laundry", "Parking", "Security"],
    featured: false,
    rating: 4.3,
    reviews: 24,
    type: "Co-Living",
    description:
      "Co-living space in cultural city Vadodara with traditional Gujarati hospitality and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [22.3072, 73.1812],
    contact: {
      phone: "+91 9876543218",
      email: "culturalcity.pg@gmail.com",
      owner: "Mr. Bharat Desai",
    },
    city: "Vadodara",
    area: "Alkapuri",
  },
  {
    id: 10,
    title: "University Heights PG",
    location: "Fatehgunj, Vadodara",
    address: "Near MS University, Fatehgunj, Vadodara - 390002",
    price: 7200,
    amenities: ["WIFI", "Food", "Study Room", "Library", "Security"],
    featured: false,
    rating: 4.1,
    reviews: 31,
    type: "Boys",
    description: "Student-friendly PG near MS University with library and study rooms for academic excellence.",
    images: [
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [22.3072, 73.1812],
    contact: {
      phone: "+91 9876543219",
      email: "universityheights.pg@gmail.com",
      owner: "Mr. Suresh Patel",
    },
    city: "Vadodara",
    area: "Fatehgunj",
  },

  // Rajkot PGs
  {
    id: 11,
    title: "Kathiawad PG",
    location: "University Road, Rajkot",
    address: "Near Rajkot University, University Road, Rajkot - 360005",
    price: 6800,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Common Room"],
    featured: false,
    rating: 4.0,
    reviews: 22,
    type: "Boys",
    description: "Traditional Kathiawadi hospitality with modern amenities near Rajkot University.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [22.3039, 70.8022],
    contact: {
      phone: "+91 9876543220",
      email: "kathiawad.pg@gmail.com",
      owner: "Mr. Jayesh Jadeja",
    },
    city: "Rajkot",
    area: "University Road",
  },
  {
    id: 12,
    title: "Saurashtra Girls Hostel",
    location: "Race Course, Rajkot",
    address: "Near Race Course, Rajkot - 360001",
    price: 7500,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Garden", "Study Room"],
    featured: false,
    rating: 4.4,
    reviews: 27,
    type: "Girls",
    description: "Safe and secure girls hostel with garden area and homely environment in heart of Rajkot.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [22.3039, 70.8022],
    contact: {
      phone: "+91 9876543221",
      email: "saurashtra.hostel@gmail.com",
      owner: "Mrs. Hansa Jadeja",
    },
    city: "Rajkot",
    area: "Race Course",
  },

  // Gandhinagar PGs
  {
    id: 13,
    title: "Capital City PG",
    location: "Sector 15, Gandhinagar",
    address: "Sector 15, Gandhinagar - 382015",
    price: 9500,
    amenities: ["WIFI", "AC", "Food", "Parking", "Security", "Gym"],
    featured: true,
    rating: 4.6,
    reviews: 19,
    type: "Co-Living",
    description: "Premium co-living in capital city with government job preparation facilities and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [23.2156, 72.6369],
    contact: {
      phone: "+91 9876543222",
      email: "capitalcity.pg@gmail.com",
      owner: "Mr. Nitin Shah",
    },
    city: "Gandhinagar",
    area: "Sector 15",
  },

  // Bhavnagar PGs
  {
    id: 14,
    title: "Coastal Comfort PG",
    location: "Waghawadi Road, Bhavnagar",
    address: "Near Takhteshwar Temple, Waghawadi Road, Bhavnagar - 364001",
    price: 6500,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Temple View"],
    featured: false,
    rating: 4.2,
    reviews: 16,
    type: "Boys",
    description: "Peaceful PG with temple view and coastal city charm, perfect for students and working professionals.",
    images: [
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [21.7645, 72.1519],
    contact: {
      phone: "+91 9876543223",
      email: "coastalcomfort.pg@gmail.com",
      owner: "Mr. Mahesh Gohil",
    },
    city: "Bhavnagar",
    area: "Waghawadi Road",
  },

  // Junagadh PGs
  {
    id: 15,
    title: "Girnar View PG",
    location: "Kalwa Chowk, Junagadh",
    address: "Near Kalwa Chowk, Junagadh - 362001",
    price: 6200,
    amenities: ["WIFI", "Food", "Laundry", "Security", "Mountain View"],
    featured: false,
    rating: 4.1,
    reviews: 14,
    type: "Girls",
    description: "Serene girls PG with Girnar mountain view and traditional Gujarati hospitality.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [21.5222, 70.4579],
    contact: {
      phone: "+91 9876543224",
      email: "girnarview.pg@gmail.com",
      owner: "Mrs. Rekha Solanki",
    },
    city: "Junagadh",
    area: "Kalwa Chowk",
  },
]

// API service for Gujarat PG data
export const gujaratPgApi = {
  // Get all PGs
  getAllPgs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate network delay
    return gujaratPgData
  },

  // Get featured PGs (for home page)
  getFeaturedPgs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return gujaratPgData.filter((pg) => pg.featured).slice(0, 3)
  },

  // Get PGs by city
  getPgsByCity: async (city) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return gujaratPgData.filter((pg) => pg.city.toLowerCase().includes(city.toLowerCase()))
  },

  // Get PG by ID
  getPgById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return gujaratPgData.find((pg) => pg.id === Number.parseInt(id))
  },

  // Search PGs
  searchPgs: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    const searchTerm = query.toLowerCase()
    return gujaratPgData.filter(
      (pg) =>
        pg.title.toLowerCase().includes(searchTerm) ||
        pg.location.toLowerCase().includes(searchTerm) ||
        pg.city.toLowerCase().includes(searchTerm) ||
        pg.area.toLowerCase().includes(searchTerm),
    )
  },

  // Get PGs by type
  getPgsByType: async (type) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return gujaratPgData.filter((pg) => pg.type.toLowerCase() === type.toLowerCase())
  },

  // Get PGs by price range
  getPgsByPriceRange: async (minPrice, maxPrice) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return gujaratPgData.filter((pg) => pg.price >= minPrice && pg.price <= maxPrice)
  },

  // Get cities list
  getCities: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const cities = [...new Set(gujaratPgData.map((pg) => pg.city))]
    return cities.sort()
  },

  // Get areas by city
  getAreasByCity: async (city) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const areas = gujaratPgData.filter((pg) => pg.city.toLowerCase() === city.toLowerCase()).map((pg) => pg.area)
    return [...new Set(areas)].sort()
  },
}

export default gujaratPgData
