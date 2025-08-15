"use client";

import { useState, useEffect } from "react";
import PgCard from "../Components/PgCard";
import { Search, MapPin, Users, Star } from "lucide-react";
import { useGujaratPgData } from "../Hooks/useGujaratPgData";

const Listings = () => {
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPgs, setFilteredPgs] = useState([]);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 15000 });

  const { pgs: pgListings, loading, error } = useGujaratPgData();

  // Get unique cities for filter
  const cities = [...new Set(pgListings.map((pg) => pg.city))].sort();

  useEffect(() => {
    if (loading || error) {
      return;
    }

    let filtered = [...pgListings];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (pg) =>
          pg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pg.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pg.area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply city filter
    if (selectedCity !== "all") {
      filtered = filtered.filter((pg) => pg.city === selectedCity);
    }

    // Apply type filter
    if (selectedType !== "all") {
      filtered = filtered.filter(
        (pg) => pg.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      (pg) => pg.price >= priceRange.min && pg.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "reviews":
        filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        break;
      case "city":
        filtered.sort((a, b) => a.city.localeCompare(b.city));
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredPgs(filtered);
  }, [
    sortBy,
    searchTerm,
    selectedCity,
    selectedType,
    priceRange,
    pgListings,
    loading,
    error,
  ]);

  const handleSaveToggle = (pgId, isSaved) => {
    console.log(`PG ${pgId} ${isSaved ? "saved" : "removed"}`);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSortBy("default");
    setSelectedCity("all");
    setSelectedType("all");
    setPriceRange({ min: 0, max: 15000 });
  };

  if (loading) {
    return (
      <div className="listings-page py-5">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading Gujarat PG listings...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings-page py-5">
        <div className="container">
          <div className="alert alert-danger text-center">
            <h4>Error Loading PGs</h4>
            <p>{error}</p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="listings-page py-5">
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="mb-3">
              <MapPin className="text-primary me-2" size={32} />
              Gujarat PG Listings
            </h1>
            <p className="text-muted">
              Find your perfect PG accommodation across Gujarat
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <div className="position-relative mb-3">
              <Search
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                size={20}
              />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search by name, location, city, or area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
              <option value="featured">Featured First</option>
              <option value="city">City (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="form-label">City</label>
            <select
              className="form-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="all">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">PG Type</label>
            <select
              className="form-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="boys">Boys Only</option>
              <option value="girls">Girls Only</option>
              <option value="co-living">Co-Living</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              Price Range: ₹{priceRange.min} - ₹{priceRange.max}
            </label>
            <div className="d-flex gap-2">
              <input
                type="range"
                className="form-range"
                min="5000"
                max="15000"
                step="500"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: Number.parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={clearAllFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-muted mb-0">
                <strong>{filteredPgs.length}</strong> of{" "}
                <strong>{pgListings.length}</strong> PGs found
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCity !== "all" && ` in ${selectedCity}`}
              </p>
              <div className="d-flex gap-2">
                <span className="badge bg-primary">
                  <Star size={14} className="me-1" />
                  Featured: {filteredPgs.filter((pg) => pg.featured).length}
                </span>
                <span className="badge bg-success">
                  <Users size={14} className="me-1" />
                  Available: {filteredPgs.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PG Cards Grid */}
        {filteredPgs.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredPgs.map((pg) => (
              <div className="col" key={pg.id}>
                <PgCard pg={pg} onSaveToggle={handleSaveToggle} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="mb-4">
              <Search size={64} className="text-muted" />
            </div>
            <h3>No PGs Found</h3>
            <p className="text-muted mb-4">
              No PGs match your current search criteria. Try adjusting your
              filters or search terms.
            </p>
            <button className="btn btn-primary" onClick={clearAllFilters}>
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Gujarat PG Statistics</h5>
                <div className="row text-center">
                  <div className="col-md-3">
                    <h4 className="text-primary">{pgListings.length}</h4>
                    <p className="mb-0">Total PGs</p>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-success">{cities.length}</h4>
                    <p className="mb-0">Cities Covered</p>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-warning">
                      ₹
                      {Math.min(
                        ...pgListings.map((pg) => pg.price)
                      ).toLocaleString()}
                    </h4>
                    <p className="mb-0">Starting Price</p>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-info">
                      {(
                        pgListings.reduce(
                          (sum, pg) => sum + (pg.rating || 0),
                          0
                        ) / pgListings.length
                      ).toFixed(1)}
                    </h4>
                    <p className="mb-0">Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
