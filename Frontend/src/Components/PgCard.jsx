import { Link } from "react-router-dom";
import { StarFill, Heart, HeartFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

const PgCard = ({ pg, onSaveToggle }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check if PG is saved on component mount
  useEffect(() => {
    const savedPgs = JSON.parse(localStorage.getItem("savedPgs") || "[]");
    setIsSaved(savedPgs.some((savedPg) => savedPg.id === pg.id));
  }, [pg.id]);

  const images = [
    `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60&sig=${pg.id}1`,
    `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60&sig=${pg.id}2`,
    `https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60&sig=${pg.id}3`,
  ];

  const handleSaveToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const savedPgs = JSON.parse(localStorage.getItem("savedPgs") || "[]");
    let updatedSavedPgs;

    if (isSaved) {
      updatedSavedPgs = savedPgs.filter((savedPg) => savedPg.id !== pg.id);
    } else {
      updatedSavedPgs = [...savedPgs, pg];
    }

    localStorage.setItem("savedPgs", JSON.stringify(updatedSavedPgs));
    setIsSaved(!isSaved);

    if (onSaveToggle) {
      onSaveToggle(pg.id, !isSaved);
    }
  };

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="card h-100 shadow-sm border-0 overflow-hidden">
      <div className="position-relative">
        <div
          className="position-relative"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <img
            src={images[activeIndex] || "/placeholder.svg"}
            alt={`${pg.title} ${activeIndex + 1}`}
            className="w-100 h-100 object-fit-cover"
          />

          {/* Navigation Arrows */}
          <button
            className="position-absolute top-50 start-0 translate-middle-y btn btn-dark btn-sm opacity-75 ms-2"
            onClick={prevImage}
            style={{ zIndex: 2 }}
          >
            ‹
          </button>
          <button
            className="position-absolute top-50 end-0 translate-middle-y btn btn-dark btn-sm opacity-75 me-2"
            onClick={nextImage}
            style={{ zIndex: 2 }}
          >
            ›
          </button>
        </div>

        <button
          className="position-absolute top-0 end-0 m-2 btn btn-light btn-sm p-1 rounded-circle"
          onClick={handleSaveToggle}
          aria-label={isSaved ? "Remove from saved" : "Save to favorites"}
          style={{ zIndex: 3 }}
        >
          {isSaved ? (
            <HeartFill size={20} className="text-danger" />
          ) : (
            <Heart size={20} className="text-muted" />
          )}
        </button>

        <div className="position-absolute bottom-0 start-0 w-100 px-3 pb-2 d-flex justify-content-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`btn p-0 mx-1 ${
                activeIndex === idx ? "text-white" : "text-white-50"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              aria-label={`Go to image ${idx + 1}`}
            >
              •
            </button>
          ))}
        </div>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="card-title h5 mb-0">{pg.title}</h3>
          {pg.rating && (
            <span className="badge bg-warning text-dark d-flex align-items-center">
              <StarFill className="me-1" size={12} />
              {pg.rating}
            </span>
          )}
        </div>

        <p className="card-text text-muted small">
          <i className="bi bi-geo-alt-fill me-2"></i>
          {pg.location}
        </p>

        <div className="mb-3">
          {pg.amenities.slice(0, 4).map((amenity, index) => (
            <span key={index} className="badge bg-light text-dark me-1 mb-1">
              {amenity}
            </span>
          ))}
          {pg.amenities.length > 4 && (
            <span className="badge bg-light text-dark me-1 mb-1">
              +{pg.amenities.length - 4}
            </span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-0 text-primary">₹{pg.price.toLocaleString()}</h4>
            <small className="text-muted">per month</small>
          </div>
          <Link to={`/pg/${pg.id}`} className="btn btn-outline-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PgCard;
