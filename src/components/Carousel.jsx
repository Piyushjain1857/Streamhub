import { useState, useEffect, useRef } from 'react';
import ContentCard from './ContentCard';

function Carousel({ items, title, myList, toggleMyList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsPerView(1);
      else if (window.innerWidth <= 768) setItemsPerView(2);
      else if (window.innerWidth <= 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / items.length;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, items.length]);

  if (items.length === 0) return null;

  return (
    <section className="carousel-section">
      <h3 className="section-title">{title}</h3>
      <div className="carousel-wrapper">
        <button
          className="carousel-arrow carousel-prev"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="carousel-viewport">
          <div className="carousel-track" ref={carouselRef}>
            {items.map((item, index) => (
              <div className="carousel-slide" key={index}>
                <ContentCard 
                  item={item} 
                  isInList={myList?.some(i => i.title === item.title)}
                  toggleList={toggleMyList}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-arrow carousel-next"
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Carousel;
