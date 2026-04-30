import ContentCard from './ContentCard';

function ContentGrid({ filteredData, activeCategory, myList, toggleMyList }) {
  return (
    <section className="content-section">
      <h3 className="section-title">
        {activeCategory === 'All' ? 'All Content' : activeCategory === 'Web Series' ? 'Web Series' : activeCategory === 'My List' ? 'My List' : `${activeCategory}s`}
        <span className="content-count">({filteredData.length} items)</span>
      </h3>

      {filteredData.length === 0 ? (
        <div className="no-results">
          {activeCategory === 'My List' ? (
             <p>Your list is empty. Explore and add some content!</p>
          ) : (
             <p>No content found. Try a different search or category.</p>
          )}
        </div>
      ) : (
        <div className="content-grid">
          {filteredData.map((item, index) => (
            <ContentCard 
              key={index} 
              item={item} 
              isInList={myList?.some(i => i.title === item.title)}
              toggleList={toggleMyList}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ContentGrid;
