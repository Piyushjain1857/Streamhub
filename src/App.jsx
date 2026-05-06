import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';

function App() {
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(40);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const [theme, setTheme] = useState(() => localStorage.getItem('streamhub_theme') || 'dark');
  const [myList, setMyList] = useState(() => JSON.parse(localStorage.getItem('streamhub_mylist') || '[]'));

  const activeCategory = useMemo(() => {
    const path = location.pathname;
    if (path === '/movies') return 'Movie';
    if (path === '/web-series') return 'Web Series';
    if (path === '/my-list') return 'My List';
    return 'All';
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('streamhub_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('streamhub_mylist', JSON.stringify(myList));
  }, [myList]);

  const mapItem = (item) => ({
    id: String(item.id),
    title: item.name,
    category: (item.type === 'Scripted' && (item.id % 2 === 0)) ? 'Web Series' : 'Movie',
    rating: item.rating?.average || (Math.random() * 2 + 7.0).toFixed(1),
    description: (item.summary || '').replace(/<[^>]*>/g, ''),
    image: item.image?.original || item.image?.medium || `https://picsum.photos/seed/${item.id}/500/750`,
    backdrop: item.image?.original || `https://picsum.photos/seed/${item.id}bg/1920/1080`,
    year: item.premiered ? new Date(item.premiered).getFullYear() : 2026,
    genres: item.genres || []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all([0, 1, 2].map(p => fetch(`https://api.tvmaze.com/shows?page=${p}`).then(r => r.json())));
        const mapped = results.flat().map(mapItem).sort((a, b) => b.rating - a.rating);
        setDefaultData(mapped);
        setData(mapped);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length > 2) {
        setSearchLoading(true);
        try {
          const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
          const result = await res.json();
          setData(result.map(e => mapItem(e.show)));
          setVisibleCount(40);
        } catch (err) { console.error(err); } finally { setSearchLoading(false); }
      } else if (!searchQuery.trim()) {
        setData(defaultData);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, defaultData]);

  const filteredData = useMemo(() => {
    const base = activeCategory === 'My List' ? myList : data;
    return base.filter(item => {
      const matchesCat = activeCategory === 'All' || activeCategory === 'My List' || item.category === activeCategory;
      return matchesCat && item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [data, myList, activeCategory, searchQuery]);

  const toggleMyList = (item) => {
    setMyList(prev => prev.some(i => i.id === item.id) ? prev.filter(i => i.id !== item.id) : [...prev, item]);
  };

  const BrowseLayout = ({ showHero }) => (
    <>
      {showHero && (
        <Hero 
          items={defaultData.slice(0, 8)} 
          myList={myList} 
          toggleList={toggleMyList} 
          onSelect={(m) => navigate(`/movie/${m.id}`)} 
        />
      )}
      <div className="filter-bar">
        <CategoryTabs activeCategory={activeCategory} />
        <div className="filter-meta">
          {searchLoading && <span className="loading-tag">Searching...</span>}
          <span className="count-tag">{filteredData.length} Titles</span>
        </div>
      </div>
      <ContentGrid
        filteredData={filteredData.slice(0, activeCategory === 'My List' ? undefined : visibleCount)}
        activeCategory={activeCategory}
        myList={myList}
        toggleMyList={toggleMyList}
        onSelect={(m) => navigate(`/movie/${m.id}`)}
        hasMore={activeCategory !== 'My List' && visibleCount < filteredData.length}
        onLoadMore={() => setVisibleCount(v => v + 40)}
      />
    </>
  );

  if (loading) return (
    <div className="app loading-screen">
      <div className="shimmer pulse loader"></div>
      <h2>Loading StreamHub...</h2>
    </div>
  );

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<BrowseLayout showHero={true} />} />
          <Route path="/movies" element={<BrowseLayout />} />
          <Route path="/web-series" element={<BrowseLayout />} />
          <Route path="/my-list" element={<BrowseLayout />} />
          <Route path="/movie/:id" element={<MovieDetails data={data} myList={myList} toggleList={toggleMyList} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
