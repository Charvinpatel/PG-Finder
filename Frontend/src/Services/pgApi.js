// Free PG API alternatives and mock data service

// Mock data that simulates real PG listings
const mockPgData = [
  {
    id: 1,
    title: "Sunrise PG for Girls",
    location: "Koramangala, Bangalore",
    address: "123 5th Block, Koramangala, Bangalore - 560095",
    price: 12000,
    amenities: ["WIFI", "AC", "Food", "Laundry", "Security", "Power Backup"],
    featured: true,
    rating: 4.8,
    reviews: 45,
    type: "Girls",
    description: "Premium PG for female students and professionals with modern amenities and 24/7 security.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [12.9352, 77.6245],
    contact: {
      phone: "+91 9876543210",
      email: "sunrise.pg@gmail.com",
      owner: "Mrs. Priya Sharma",
    },
    facilities: {
      rooms: "Single/Double",
      meals: "3 times",
      parking: false,
      gym: false,
    },
  },
  {
    id: 2,
    title: "Elite Boys Hostel",
    location: "Whitefield, Bangalore",
    address: "456 EPIP Zone, Whitefield, Bangalore - 560066",
    price: 10500,
    amenities: ["WIFI", "Parking", "Food", "Gym", "Study Room"],
    featured: false,
    rating: 4.5,
    reviews: 32,
    type: "Boys",
    description: "Modern hostel with all amenities for boys including gym and parking facilities.",
    images: [
      "https://images.unsplash.com/photo-1522708323441-c2077c6e1b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    coordinates: [12.9698, 77.75],
    contact: {
      phone: "+91 9876543211",
      email: "elite.hostel@gmail.com",
      owner: "Mr. Rajesh Kumar",
    },
    facilities: {
      rooms: "Single/Double/Triple",
      meals: "3 times",
      parking: true,
      gym: true,
    },
  },
  // Add more realistic data...
]

// Simulate API calls
export const pgApi = {
  // Get all PGs
  getAllPgs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
    return mockPgData
  },

  // Get PGs by city
  getPgsByCity: async (city) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockPgData.filter((pg) => pg.location.toLowerCase().includes(city.toLowerCase()))
  },

  // Get PG by ID
  getPgById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockPgData.find((pg) => pg.id === Number.parseInt(id))
  },

  // Search PGs
  searchPgs: async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockPgData.filter(
      (pg) =>
        pg.title.toLowerCase().includes(query.toLowerCase()) || pg.location.toLowerCase().includes(query.toLowerCase()),
    )
  },
}

// Free Real Estate APIs you can integrate:
export const realEstateApis = {
  // 1. RentSpree API (Limited free tier)
  rentspree: {
    baseUrl: "https://api.rentspree.com/v1",
    // Requires API key registration
  },

  // 2. RealtyMole API (500 free requests/month)
  realtyMole: {
    baseUrl: "https://api.realtymole.com/v1",
    // Free tier available
  },

  // 3. Rentals.com API
  rentals: {
    baseUrl: "https://api.rentals.com/v2",
    // Limited free access
  },
}

// Example integration with RealtyMole API
export const fetchRealPgData = async (city) => {
  try {
    // This would require your API key
    const response = await fetch(`https://api.realtymole.com/v1/rentals?city=${city}&property_type=apartment`, {
      headers: {
        "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
        "X-RapidAPI-Host": "realtymole-rental-estimate-v1.p.rapidapi.com",
      },
    })

    if (response.ok) {
      const data = await response.json()
      return data.listings || []
    }
  } catch (error) {
    console.error("Error fetching real PG data:", error)
  }

  // Fallback to mock data
  return mockPgData
}
