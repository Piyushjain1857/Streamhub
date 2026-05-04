function ContentCard({ item, isInList, toggleList, onSelect, isLarge }) {
  return (
    <div className={`content-card ${isLarge ? 'large' : ''}`} onClick={() => onSelect(item)}>
      <div className="card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>

      <div className="card-overlay">
        <button
          className={`list-btn ${isInList ? 'in-list' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleList(item);
          }}
          title={isInList ? "Remove from List" : "Add to List"}
        >
          {isInList ? '✓' : '+'}
        </button>

        <div className="card-info">
          <h4 className="card-title">{item.title}</h4>
          <div className="card-meta">
            <span className="card-rating">★ {item.rating}</span>
            <span className="card-category">{item.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
