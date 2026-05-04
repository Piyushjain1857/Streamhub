import ContentCard from './ContentCard';

const ContentGrid = ({ filteredData, activeCategory, myList, toggleMyList, onSelect, hasMore, onLoadMore }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2 className="section-title">
          {activeCategory === 'All' ? 'Discover' : activeCategory}
        </h2>
      </div>

      {filteredData.length === 0 ? (
        <div className="no-content">
          <p>No content found. Try a different search or category.</p>
        </div>
      ) : (
        <>
          <div className="content-grid">
            {filteredData.map((item, index) => {
              // Bento Logic: Make items at index 0, 7, 14, etc. large
              // This creates a visually interesting irregular pattern
              const isLarge = index % 8 === 0 || (index - 3) % 15 === 0;

              return (
                <ContentCard
                  key={item.id}
                  item={item}
                  isInList={myList.some((listItem) => listItem.title === item.title)}
                  toggleList={toggleMyList}
                  onSelect={onSelect}
                  isLarge={isLarge}
                />
              );
            })}
          </div>

          {hasMore && (
            <div className="load-more-container" style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '3rem' }}>
              <button
                className="load-more-btn"
                onClick={onLoadMore}
                style={{
                  padding: '1.2rem 3rem',
                  borderRadius: '16px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                Load More Content
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ContentGrid;
