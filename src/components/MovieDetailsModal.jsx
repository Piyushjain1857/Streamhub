import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/geminiService';

function MovieDetailsModal({ movie, onClose, isInList, toggleList }) {
  const [aiDetails, setAiDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const details = await getMovieDetails(movie.title, movie.category);
      setAiDetails(details);
      setLoading(false);
    };

    if (movie) {
      fetchDetails();
    }
  }, [movie]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-hero">
            <img src={movie.backdrop || movie.image} alt={movie.title} className="modal-backdrop-img" />
            <div className="modal-hero-overlay" />
            <div className="modal-header-info">
              <h2 className="modal-title">{movie.title}</h2>
              <div className="modal-meta">
                <span className="modal-rating">★ {movie.rating}</span>
                <span className="modal-category">{movie.category}</span>
              </div>
            </div>
          </div>

          <div className="modal-info-grid">
            <div className="modal-main-info">
              <section className="modal-section">
                <h3>Overview</h3>
                <p>{movie.description}</p>
              </section>

              <div className="modal-actions">
                <button className="btn btn-primary">▶ Watch Now</button>
                <button className="btn btn-secondary" onClick={() => toggleList(movie)}>
                  {isInList ? '✓ In My List' : '+ Add to List'}
                </button>
              </div>
            </div>

            <div className="modal-ai-insights">
              <div className="ai-badge">
                <span className="ai-icon">✨</span>
                Gemini AI Insights
              </div>
              
              {loading ? (
                <div className="ai-loading">
                  <div className="shimmer" style={{ height: '100px', marginBottom: '1rem' }} />
                  <div className="shimmer" style={{ height: '60px' }} />
                </div>
              ) : (
                <div className="ai-content">
                  <p className="ai-summary">{aiDetails}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;
