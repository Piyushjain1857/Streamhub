import { useState, useEffect } from 'react';
import { getMovieInsight } from '../services/geminiService';

function Hero({ items, myList, toggleList, onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aiInsight, setAiInsight] = useState('');
  const [loadingAi, setLoadingAi] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [items, currentIndex]);

  useEffect(() => {
    if (!items || items.length === 0) return;
    
    const fetchInsight = async () => {
      setLoadingAi(true);
      const currentItem = items[currentIndex];
      const insight = await getMovieInsight(currentItem.title, currentItem.category);
      setAiInsight(insight);
      setLoadingAi(false);
    };

    fetchInsight();
  }, [currentIndex, items]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const isInList = myList?.some(i => i.title === currentItem.title);

  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src={currentItem.backdrop || currentItem.image} 
          alt={currentItem.title} 
          className={`hero-bg-image ${isTransitioning ? 'fade-out' : 'fade-in'}`} 
          key={currentItem.backdrop || currentItem.image} 
        />
      </div>
      <div className="hero-overlay" />
      
      <div className={`hero-content ${isTransitioning ? 'slide-out' : 'slide-in'}`}>
        <div className="hero-badge">✨ Featured Premium Content</div>
        
        <h2 className="hero-title">{currentItem.title}</h2>
        
        <div className="hero-meta">
          <span className="hero-tag">★ {currentItem.rating} Rating</span>
          <span className="hero-tag">{currentItem.category || 'Movie'}</span>
          <span className="hero-tag">4K Ultra HD</span>
        </div>

        <div className="ai-insight-box">
          <span className="ai-label">🤖 Gemini AI Analysis</span>
          <p className={`ai-text ${loadingAi ? 'pulse' : ''}`}>
            {loadingAi ? 'Analyzing cinematic elements...' : aiInsight}
          </p>
        </div>

        <p className="hero-description">{currentItem.description}</p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => onSelect(currentItem)}>
            <span style={{ marginRight: '8px' }}>▶</span> Play Now
          </button>
          <button className="btn btn-secondary" onClick={() => toggleList(currentItem)}>
            {isInList ? '✓ In My List' : '+ Add to List'}
          </button>
        </div>
      </div>

      <div className="hero-indicators">
        {items.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
