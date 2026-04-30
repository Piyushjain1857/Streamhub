function CategoryTabs({ categories, activeCategory, setActiveCategory }) {
  return (
    <section className="category-section">
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryTabs;
