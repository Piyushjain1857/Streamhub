import { NavLink, Link } from 'react-router-dom';

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="logo" style={{ cursor: 'pointer' }}>StreamHub</h1>
        </Link>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Movies
          </NavLink>
          <NavLink
            to="/web-series"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Web Series
          </NavLink>
          <NavLink 
            to="/my-list"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            My List
          </NavLink>
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
