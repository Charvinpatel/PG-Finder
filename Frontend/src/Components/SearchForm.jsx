// // import React from "react";

// // const SearchForm = () => {
// //   return (
// //     <div className="card shadow-sm p-4">
// //       <h3 className="h5 fw-bold mb-4">Find Your PG</h3>
// //       <div className="mb-3">
// //         <label htmlFor="location" className="form-label fw-medium">
// //           Enter city or area
// //         </label>
// //         <div className="input-group">
// //           <span className="input-group-text">
// //             <i className="bi bi-geo-alt"></i>
// //           </span>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="location"
// //             placeholder="e.g. Koramangala, Bangalore"
// //           />
// //         </div>
// //       </div>
// //       <div className="mb-3">
// //         <label htmlFor="priceRange" className="form-label fw-medium">
// //           Price Range
// //         </label>
// //         <select className="form-select" id="priceRange">
// //           <option value="">Select Price Range</option>
// //           <option value="5000-10000">₹5,000 - ₹10,000</option>
// //           <option value="10000-15000">₹10,000 - ₹15,000</option>
// //           <option value="15000-20000">₹15,000 - ₹20,000</option>
// //           <option value="20000+">₹20,000+</option>
// //         </select>
// //       </div>
// //       <div className="mb-4">
// //         <label className="form-label fw-medium">Amenities</label>
// //         <div className="row g-2">
// //           <div className="col-6">
// //             <div className="form-check">
// //               <input className="form-check-input" type="checkbox" id="wifi" />
// //               <label className="form-check-label" htmlFor="wifi">
// //                 <i className="bi bi-wifi me-2"></i>WiFi
// //               </label>
// //             </div>
// //           </div>
// //           <div className="col-6">
// //             <div className="form-check">
// //               <input className="form-check-input" type="checkbox" id="ac" />
// //               <label className="form-check-label" htmlFor="ac">
// //                 <i className="bi bi-snow me-2"></i>AC
// //               </label>
// //             </div>
// //           </div>
// //           <div className="col-6">
// //             <div className="form-check">
// //               <input className="form-check-input" type="checkbox" id="food" />
// //               <label className="form-check-label" htmlFor="food">
// //                 <i className="bi bi-egg-fried me-2"></i>Food
// //               </label>
// //             </div>
// //           </div>
// //           <div className="col-6">
// //             <div className="form-check">
// //               <input
// //                 className="form-check-input"
// //                 type="checkbox"
// //                 id="laundry"
// //               />
// //               <label className="form-check-label" htmlFor="laundry">
// //                 <i className="bi bi-tsunami me-2"></i>Laundry
// //               </label>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <button className="btn btn-primary w-100 py-2">
// //         <i className="bi bi-search me-2"></i>Search PGs
// //       </button>
// //     </div>
// //   );
// // };

// // export default SearchForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchForm = ({ isHero = false }) => {
//   const [searchData, setSearchData] = useState({
//     location: "",
//     priceRange: "",
//     amenities: [],
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData({ ...searchData, [name]: value });
//   };

//   const handleAmenityChange = (amenity) => {
//     setSearchData((prev) => ({
//       ...prev,
//       amenities: prev.amenities.includes(amenity)
//         ? prev.amenities.filter((a) => a !== amenity)
//         : [...prev.amenities, amenity],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you would pass these filters to the listings page
//     navigate(
//       `/listings?location=${searchData.location}&price=${
//         searchData.priceRange
//       }&amenities=${searchData.amenities.join(",")}`
//     );
//   };

//   return (
//     <div className={`card shadow-sm p-4 ${isHero ? "hero-search" : ""}`}>
//       <h3 className="h5 fw-bold mb-4">Find Your PG</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="location" className="form-label fw-medium">
//             Enter city or area
//           </label>
//           <div className="input-group">
//             <span className="input-group-text">
//               <i className="bi bi-geo-alt"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               id="location"
//               name="location"
//               value={searchData.location}
//               onChange={handleInputChange}
//               placeholder="e.g. Koramangala, Bangalore"
//             />
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="priceRange" className="form-label fw-medium">
//             Price Range
//           </label>
//           <select
//             className="form-select"
//             id="priceRange"
//             name="priceRange"
//             value={searchData.priceRange}
//             onChange={handleInputChange}
//           >
//             <option value="">Select Price Range</option>
//             <option value="5000-10000">₹5,000 - ₹10,000</option>
//             <option value="10000-15000">₹10,000 - ₹15,000</option>
//             <option value="15000-20000">₹15,000 - ₹20,000</option>
//             <option value="20000+">₹20,000+</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="form-label fw-medium">Amenities</label>
//           <div className="row g-2">
//             {["WIFI", "AC", "Food", "Laundry", "Parking", "Gym"].map(
//               (amenity) => (
//                 <div className="col-6" key={amenity}>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id={amenity.toLowerCase()}
//                       checked={searchData.amenities.includes(amenity)}
//                       onChange={() => handleAmenityChange(amenity)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={amenity.toLowerCase()}
//                     >
//                       <i
//                         className={`bi ${
//                           amenity === "WIFI"
//                             ? "bi-wifi"
//                             : amenity === "AC"
//                             ? "bi-snow"
//                             : amenity === "Food"
//                             ? "bi-egg-fried"
//                             : amenity === "Laundry"
//                             ? "bi-tsunami"
//                             : amenity === "Parking"
//                             ? "bi-p-circle"
//                             : "bi-activity"
//                         }`}
//                         me-2
//                       ></i>
//                       {amenity}
//                     </label>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary w-100 py-2">
//           <i className="bi bi-search me-2"></i>Search PGs
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;

"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

const SearchForm = ({ isHero = false }) => {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    guests: "1",
    pgType: "any",
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search data:", searchData);
  };

  return (
    <div className={`search-form ${isHero ? "hero-search" : ""}`}>
      <div className={`card ${isHero ? "shadow-lg border-0" : "shadow-sm"}`}>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">Location</label>
                <div className="position-relative">
                  <MapPin
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    size={20}
                  />
                  <input
                    type="text"
                    className="form-control ps-5"
                    name="location"
                    value={searchData.location}
                    onChange={handleChange}
                    placeholder="Enter city or area"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium">Move-in Date</label>
                <div className="position-relative">
                  <Calendar
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    size={20}
                  />
                  <input
                    type="date"
                    className="form-control ps-5"
                    name="checkIn"
                    value={searchData.checkIn}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium">Occupancy</label>
                <div className="position-relative">
                  <Users
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    size={20}
                  />
                  <select
                    className="form-select ps-5"
                    name="guests"
                    value={searchData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">Single</option>
                    <option value="2">Double Sharing</option>
                    <option value="3">Triple Sharing</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium">PG Type</label>
                <select
                  className="form-select"
                  name="pgType"
                  value={searchData.pgType}
                  onChange={handleChange}
                >
                  <option value="any">Any</option>
                  <option value="boys">Boys Only</option>
                  <option value="girls">Girls Only</option>
                  <option value="co-living">Co-living</option>
                </select>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100 py-2">
                  <Search className="me-2" size={20} />
                  Search PGs
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
