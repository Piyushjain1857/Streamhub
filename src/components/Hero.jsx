import { useState, useEffect } from 'react';

function Hero({ items, myList, toggleList }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const isInList = myList?.some(i => i.title === currentItem.title);

  return (
    <section className="hero" style={{ backgroundImage: `url(${currentItem.backdrop || currentItem.image})`, transition: 'background-image 0.5s ease-in-out' }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2 className="hero-title">{currentItem.title}</h2>
        <p className="hero-rating">★ {currentItem.rating}/10</p>
        <p className="hero-description">{currentItem.description}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">▶ Play Now</button>
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
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
