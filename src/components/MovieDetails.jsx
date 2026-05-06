import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/geminiService';

function MovieDetails({ data, myList, toggleList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [aiDetails, setAiDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find movie in data
    const foundMovie = data.find(m => String(m.id) === id);
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      // If not found (e.g. direct link and data not loaded yet)
      // In a real app we might fetch it from API here
    }
  }, [id, data]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movie) return;
      setLoading(true);
      const details = await getMovieDetails(movie.title, movie.category);
      setAiDetails(details);
      setLoading(false);
    };

    fetchDetails();
  }, [movie]);

  if (!movie) {
    return (
      <div className="movie-details-loading">
        <div className="shimmer pulse" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 20px' }}></div>
        <h2>Loading Movie Details...</h2>
      </div>
    );
  }

  const isInList = myList.some(item => item.id === movie.id);

  return (
    <div className="movie-details-page">
      <div className="details-hero">
        <div className="details-hero-bg">
          <img src={movie.backdrop || movie.image} alt={movie.title} />
          <div className="details-hero-overlay" />
        </div>
        
        <div className="details-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          
          <div className="details-content">
            <div className="details-main">
              <h1 className="details-title">{movie.title}</h1>
              <div className="details-meta">
                <span className="meta-item rating">★ {movie.rating}</span>
                <span className="meta-item category">{movie.category}</span>
                <span className="meta-item year">{movie.year}</span>
              </div>
              
              <p className="details-description">{movie.description}</p>
              
              <div className="details-actions">
                <button className="btn btn-primary">▶ Watch Now</button>
                <button 
                  className={`btn ${isInList ? 'btn-secondary in-list' : 'btn-secondary'}`}
                  onClick={() => toggleList(movie)}
                >
                  {isInList ? '✓ In My List' : '+ Add to List'}
                </button>
              </div>
            </div>

            <div className="details-sidebar">
              <div className="ai-insights-card">
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
                    <pre className="ai-text">{aiDetails}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
