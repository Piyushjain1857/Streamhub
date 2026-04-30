import { useState, useEffect, useRef } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const activeCategory = location.pathname === '/movies' ? 'Movie' :
                         location.pathname === '/web-series' ? 'Web Series' :
                         location.pathname === '/my-list' ? 'My List' : 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem('streamhub_mylist');
    return saved ? JSON.parse(saved) : [];
  });
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'x-rapidapi-key': '788e03e1efmsh9321760b4b15f3bp116f37jsn4c621f0f0267'
          }
        });
        const result = await response.json();
        const mappedData = result.map(item => ({
          id: item.id,
          title: item.primaryTitle || item.originalTitle,
          category: item.type === 'tvSeries' || item.type === 'tvMiniSeries' ? 'Web Series' : 'Movie',
          rating: item.averageRating || (Math.random() * 3 + 6).toFixed(1),
          description: item.description || 'No description available.',
          image: item.primaryImage || `https://picsum.photos/seed/${(item.primaryTitle || 'movie').replace(/[^a-zA-Z]/g, '')}/500/750`,
          backdrop: `https://picsum.photos/seed/${(item.primaryTitle || 'movie').replace(/[^a-zA-Z]/g, '')}bg/1920/1080`
        }));
        setData(mappedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('streamhub_mylist', JSON.stringify(myList));
  }, [myList]);

  const categories = ['All', 'Movie', 'Web Series'];

  const filteredData = activeCategory === 'My List' 
    ? myList.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : data.filter((item) => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

  const featuredContent = data.find(item => item.rating >= 9.0) || data[0];

  const trendingItems = [...data]
    .filter(item => item.title !== featuredContent?.title)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const toggleMyList = (item) => {
    if (myList.some(listItem => listItem.title === item.title)) {
      setMyList(myList.filter(listItem => listItem.title !== item.title));
    } else {
      setMyList([...myList, item]);
    }
  };

  if (loading) {
    return (
      <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>
        <h2>Loading content...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Hero 
        items={trendingItems.slice(0, 5)} 
        myList={myList}
        toggleList={toggleMyList}
      />
      <main className="main-content" ref={contentRef}>
        <CategoryTabs activeCategory={activeCategory} />
        
        <Routes>
          <Route path="/" element={
            <ContentGrid
              filteredData={filteredData}
              activeCategory={activeCategory}
              myList={myList}
              toggleMyList={toggleMyList}
            />
          } />
          <Route path="/movies" element={
            <ContentGrid
              filteredData={filteredData}
              activeCategory={activeCategory}
              myList={myList}
              toggleMyList={toggleMyList}
            />
          } />
          <Route path="/web-series" element={
            <ContentGrid
              filteredData={filteredData}
              activeCategory={activeCategory}
              myList={myList}
              toggleMyList={toggleMyList}
            />
          } />
          <Route path="/my-list" element={
            <ContentGrid
              filteredData={filteredData}
              activeCategory={activeCategory}
              myList={myList}
              toggleMyList={toggleMyList}
            />
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
