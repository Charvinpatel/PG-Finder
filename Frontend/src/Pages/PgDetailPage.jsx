"use client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PgDetails from "../Components/PgDetails";
import { gujaratPgApi } from "../services/gujaratPgApi";

const PgDetailPage = () => {
  const { id } = useParams();
  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPgDetails = async () => {
      try {
        setLoading(true);
        const pgData = await gujaratPgApi.getPgById(id);
        if (pgData) {
          setPg(pgData);
        } else {
          setError("PG not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPgDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading PG details...</p>
        </div>
      </div>
    );
  }

  if (error || !pg) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>PG Not Found</h2>
          <p className="text-muted">
            The PG you're looking for doesn't exist or has been removed.
          </p>
          <a href="/listings" className="btn btn-primary">
            Back to Listings
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <PgDetails pg={pg} />
    </div>
  );
};

export default PgDetailPage;
