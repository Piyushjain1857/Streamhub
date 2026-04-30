import { NavLink } from 'react-router-dom';

function CategoryTabs() {
  const categories = [
    { name: 'All', path: '/' },
    { name: 'Movie', path: '/movies' },
    { name: 'Web Series', path: '/web-series' }
  ];

  return (
    <section className="category-section">
      <div className="category-tabs">
        {categories.map((cat) => (
          <NavLink
            key={cat.name}
            to={cat.path}
            className={({ isActive }) => `category-tab ${isActive ? 'active' : ''}`}
            end={cat.path === '/'}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default CategoryTabs;
