function Header({ activeCategory, searchQuery, setSearchQuery, handleNavClick, handleHomeClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>StreamHub</h1>
        <nav className="nav">
          <button
            className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeCategory === 'Movie' ? 'active' : ''}`}
            onClick={() => handleNavClick('Movie')}
          >
            Movies
          </button>
          <button
            className={`nav-link ${activeCategory === 'Web Series' ? 'active' : ''}`}
            onClick={() => handleNavClick('Web Series')}
          >
            Web Series
          </button>
          <button 
            className={`nav-link ${activeCategory === 'My List' ? 'active' : ''}`}
            onClick={() => handleNavClick('My List')}
          >
            My List
          </button>
        </nav>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
