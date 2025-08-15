import PgCard from "./PgCard";
import { useFeaturedPgs } from "../hooks/useGujaratPgData";

const FeaturedPgs = () => {
  const { featuredPgs, loading, error } = useFeaturedPgs();

  if (loading) {
    return (
      <div className="featured-pgs">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured PGs</h2>
          <p className="lead text-muted">
            Handpicked accommodations for your comfort
          </p>
        </div>
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="featured-pgs">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured PGs</h2>
          <div className="alert alert-warning">Unable to load featured PGs</div>
        </div>
      </div>
    );
  }

  return (
    <div className="featured-pgs">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Featured PGs in Gujarat</h2>
        <p className="lead text-muted">
          Handpicked accommodations across Gujarat cities
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {featuredPgs.map((pg) => (
          <div className="col" key={pg.id}>
            <PgCard pg={pg} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <a href="/listings" className="btn btn-outline-primary btn-lg">
          View All Gujarat PGs ({featuredPgs.length > 0 ? "15+" : "0"}{" "}
          Available)
        </a>
      </div>
    </div>
  );
};

export default FeaturedPgs;
