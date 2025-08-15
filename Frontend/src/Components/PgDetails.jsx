"use client";

import { useState } from "react";
import { StarFill, Star } from "react-bootstrap-icons";
import MapComponent from "./MapComponent";

const PgDetails = ({ pg }) => {
  const [activeTab, setActiveTab] = useState("details");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Rahul Sharma",
      rating: 5,
      comment:
        "Great place with excellent facilities. The food is hygienic and tasty.",
      date: "2025-05-15",
    },
    {
      id: 2,
      user: "Priya Patel",
      rating: 4,
      comment: "Good location and clean rooms. Could improve the WiFi speed.",
      date: "2025-04-22",
    },
  ]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  if (!pg) return <div className="text-center py-5">Loading PG details...</div>;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating > 0 && newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        user: "Current User",
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([...reviews, review]);
      setNewReview({ rating: 0, comment: "" });
    }
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <StarFill key={i} className="text-warning" />
        ) : (
          <Star key={i} className="text-warning" />
        )
      );
  };

  return (
    <div className="pg-details animate-fade">
      <div className="row g-4">
        {/* Images Gallery */}
        <div className="col-lg-7">
          <div className="card shadow-sm overflow-hidden">
            <div className="ratio ratio-16x9">
              <img
                src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${pg.id}`}
                alt={pg.title}
                className="object-fit-cover"
              />
            </div>
            <div className="card-body p-0">
              <div className="d-flex overflow-auto" style={{ height: "100px" }}>
                {[1, 2, 3].map((img) => (
                  <img
                    key={img}
                    src={`https://images.unsplash.com/photo-${
                      img === 1
                        ? "1560448204-e02f11c3d0e2"
                        : img === 2
                        ? "1512917774080-9991f1c4c750"
                        : img === 3
                        ? "1493809842364-78817add7ffb"
                        : "1522708323441-c2077c6e1b1e"
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60`}
                    alt={`${pg.title} ${img}`}
                    className="h-100 object-fit-cover border cursor-pointer"
                    style={{ width: "150px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PG Info */}
        <div className="col-lg-5">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h1 className="h3 fw-bold">{pg.title}</h1>
              <div className="d-flex align-items-center mb-3">
                <div className="me-2">{renderStars(pg.rating || 4.5)}</div>
                <span className="text-muted">({reviews.length} reviews)</span>
              </div>
              <p className="text-muted mb-4">
                <i className="bi bi-geo-alt-fill me-2"></i>
                {pg.location}
              </p>

              <div className="mb-4 p-3 bg-light rounded">
                <h3 className="h5 fw-bold mb-2">
                  ₹{pg.price.toLocaleString()}/month
                </h3>
                <p className="text-success mb-0">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Available Now
                </p>
              </div>

              <div className="d-grid gap-2 mb-4">
                <button className="btn btn-primary btn-lg">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Owner
                </button>
                <button className="btn btn-success btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Now
                </button>
              </div>

              <div className="d-flex justify-content-between border-top border-bottom py-3 mb-3">
                <div className="text-center">
                  <div className="fw-bold">Type</div>
                  <div>
                    {pg.title.includes("Girls")
                      ? "Girls PG"
                      : pg.title.includes("Boys")
                      ? "Boys PG"
                      : "Co-Living"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="fw-bold">Meals</div>
                  <div>
                    {pg.amenities.includes("Food")
                      ? "Included"
                      : "Not Included"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="fw-bold">Rooms</div>
                  <div>Single/Double</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs mt-4" id="pgDetailsTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "amenities" ? "active" : ""}`}
            onClick={() => setActiveTab("amenities")}
          >
            Amenities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({reviews.length})
          </button>
        </li>
      </ul>

      {/* Tabs Content */}
      <div className="tab-content card shadow-sm border-top-0 rounded-top-0">
        <div
          className={`tab-pane fade ${
            activeTab === "details" ? "show active" : ""
          }`}
        >
          <div className="card-body">
            <h4 className="h5 fw-bold mb-3">Description</h4>
            <p className="mb-4">
              {pg.description ||
                "This premium PG accommodation offers all modern amenities in a prime location. Perfect for students and working professionals looking for a comfortable stay with quality food and services."}
            </p>

            <h4 className="h5 fw-bold mb-3">House Rules</h4>
            <ul className="mb-0">
              <li>Check-in time: 12 PM</li>
              <li>Check-out time: 11 AM</li>
              <li>No smoking inside rooms</li>
              <li>No outside guests allowed after 10 PM</li>
            </ul>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "amenities" ? "show active" : ""
          }`}
        >
          <div className="card-body">
            <div className="row g-3">
              {pg.amenities.map((amenity, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-center">
                    <i
                      className={`bi ${
                        amenity === "WIFI"
                          ? "bi-wifi"
                          : amenity === "AC"
                          ? "bi-snow"
                          : amenity === "Food"
                          ? "bi-egg-fried"
                          : amenity === "Laundry"
                          ? "bi-tsunami"
                          : amenity === "Parking"
                          ? "bi-p-circle"
                          : "bi-check-circle"
                      } me-2 fs-5 text-primary`}
                    ></i>
                    <span>{amenity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "reviews" ? "show active" : ""
          }`}
        >
          <div className="card-body">
            {reviews.map((review) => (
              <div key={review.id} className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="mb-0">{review.user}</h5>
                  <small className="text-muted">{review.date}</small>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="mb-0">{review.comment}</p>
              </div>
            ))}

            <h5 className="mb-3">Add Your Review</h5>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="btn p-0 me-1"
                      onClick={() =>
                        setNewReview({ ...newReview, rating: star })
                      }
                    >
                      {star <= newReview.rating ? (
                        <StarFill className="text-warning fs-4" />
                      ) : (
                        <Star className="text-warning fs-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="reviewComment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="reviewComment"
                  rows="3"
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Location Map */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h3 className="h5 fw-bold mb-3">Location</h3>
          <MapComponent location={pg.location} title={pg.title} />
          <div className="mt-3">
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-geo-alt-fill me-2"></i>Get Directions
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-share-fill me-2"></i>Share Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgDetails;
