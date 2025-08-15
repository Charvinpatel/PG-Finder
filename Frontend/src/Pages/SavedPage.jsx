"use client";

import { useState, useEffect } from "react";
import PgCard from "../Components/PgCard";
import { Heart, Trash2 } from "lucide-react";

const SavedPage = () => {
  const [savedPgs, setSavedPgs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedPgs") || "[]");
    setSavedPgs(saved);
  }, []);

  const handleSaveToggle = (pgId, isSaved) => {
    if (!isSaved) {
      // Remove from saved list
      const updated = savedPgs.filter((pg) => pg.id !== pgId);
      setSavedPgs(updated);
      localStorage.setItem("savedPgs", JSON.stringify(updated));
    }
  };

  const clearAllSaved = () => {
    setSavedPgs([]);
    localStorage.removeItem("savedPgs");
  };

  return (
    <div className="saved-page py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="mb-2">
              <Heart className="text-danger me-2" size={32} />
              Saved PGs
            </h1>
            <p className="text-muted">
              {savedPgs.length} PG{savedPgs.length !== 1 ? "s" : ""} saved for
              later
            </p>
          </div>
          {savedPgs.length > 0 && (
            <button className="btn btn-outline-danger" onClick={clearAllSaved}>
              <Trash2 size={18} className="me-2" />
              Clear All
            </button>
          )}
        </div>

        {savedPgs.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {savedPgs.map((pg) => (
              <div className="col" key={pg.id}>
                <PgCard pg={pg} onSaveToggle={handleSaveToggle} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="mb-4">
              <Heart size={80} className="text-muted" />
            </div>
            <h3 className="mb-3">No Saved PGs Yet</h3>
            <p className="text-muted mb-4">
              Start exploring and save your favorite PGs to view them here
            </p>
            <a href="/listings" className="btn btn-primary btn-lg">
              Browse PGs
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
