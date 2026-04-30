function ContentCard({ item, isInList, toggleList }) {

  return (
    <div className="content-card group">
      <div className="card-image">
        <img src={item.image} alt={item.title} />
        <div className="play-overlay">
          <span className="play-icon">▶</span>
        </div>
        <span className="card-rating">★ {item.rating}</span>
        <span className="card-category">{item.category}</span>
      </div>
      <div className="card-info">
        <h4 className="card-title">{item.title}</h4>
        <p className="card-description">{item.description}</p>
        <button
          className={`list-btn ${isInList ? 'in-list' : ''}`}
          onClick={() => toggleList(item)}
        >
          {isInList ? '✓ In My List' : '+ Add to List'}
        </button>
      </div>

    </div>
  );
}

export default ContentCard;
